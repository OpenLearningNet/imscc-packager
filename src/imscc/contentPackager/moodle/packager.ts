import { Page } from "../../types";
import * as tar from "tar";
import { writeFile, rm, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { Blob } from "buffer";
import { buffer } from "node:stream/consumers";
import { getRandomNumberInRange } from "../../common";
import {
  badges,
  completion,
  files,
  gradebook,
  groups,
  outcomes,
  roles,
  scales,
  user,
} from "./resource/rootComponent/rootComponent";
import {
  activityCompletion,
  activityGradebook,
  activityRoles,
  calendar,
  comments,
  competencies,
  filters,
  gradeHistory,
  inforef,
  logs,
  logstore,
  module,
  xapistate,
} from "./resource/activity/activity";
import { moodleBackup } from "./resource/rootComponent/moodleBackup";
import { sectionsToMoodleQuestionBank } from "./resource/question/moodleQuestion";
import { generateMoodleQuiz } from "./resource/activity/quiz";

export async function packageMoodleQuiz(
  page: Page,
  title: string
): Promise<[Buffer, string]> {
  if (page.type != "assessment") {
    throw new Error("Invalid page type: Must be an assessment");
  }

  if (typeof page.content === "string") {
    throw new Error("Invalid content: Must be an array of sections");
  }

  const moduleId = getRandomNumberInRange(1, 1000).toString();
  const sectionId = getRandomNumberInRange(1, 1000).toString();
  const pointsPossible =
    page.content?.reduce(
      (prevValue, currentValue) => prevValue + (currentValue.point ?? 1),
      0
    ) || 1;
  const quizContextId = getRandomNumberInRange(1, 1000).toString();
  const quizId = getRandomNumberInRange(1, 1000).toString();
  /*
  questionBankEntryId is also used in quiz.xml so generate it here than pass it when needed 
  */
  const qustionBankEntryIds = [];
  for (let i = 0; i < page.content.length; i++) {
    qustionBankEntryIds.push(getRandomNumberInRange(1, 1000).toString());
  }
  const questionCategoryId = getRandomNumberInRange(1, 1000).toString();
  const questionCategoryName = "coursemagic";
  const questionCateogryInfo =
    "The default category for questions created by coursemagic";

  /*
  Create all necessary xml's for mbz, start from the root folder and then to each activity folder
  */

  // Create all xml's that don't need any arguments in the root folder
  const badgesXml = badges();
  const completionXml = completion();
  const filesXml = files();
  const gradeHistoryXml = gradeHistory();
  const gradebookXml = gradebook();
  const groupsXml = groups();
  const outcomesXml = outcomes();
  const rolesXml = roles();
  const scalesXml = scales();
  const userXml = user();

  // Create all xml's that need arguments in the root folder
  const moodleBackupXml = moodleBackup({
    backUpName: title,
    quizActivityFolderName: title,
    moduleId: moduleId.toString(),
    sectionId: sectionId.toString(),
    activitTitle: title,
  });

  const questionsXml = sectionsToMoodleQuestionBank({
    sections: page.content,
    questionCategoryId: questionCategoryId,
    questionCategoryName: questionCategoryName,
    questionCateogryInfo: questionCateogryInfo,
  });

  // Create all xml's that don't need any arguments in the activity folder
  const calendarXml = calendar();
  const commentsXml = comments();
  const compentenciesXml = competencies();
  const activityCompletionXml = activityCompletion();
  const filtersXml = filters();
  const gradeHistoryActivityXml = gradeHistory();
  const gradesXml = activityGradebook();
  const logsXml = logs();
  const logstoreXml = logstore();
  const rolesActivityXml = activityRoles();
  const xapistateXml = xapistate();

  // Create all xml's that need arguments in the activity folder
  const inforefXml = inforef({
    questionCategoryId: questionCategoryId,
  });
  const moduleXml = module({
    moduleId: moduleId,
    sectionId: sectionId,
  });
  const quizXml = generateMoodleQuiz({
    questionBankEntryIds: qustionBankEntryIds,
    moduleId: moduleId,
    quizContextId: quizContextId,
    quizId: quizId,
    activityTitle: title,
    totalScore: pointsPossible.toString(),
  });

  const rootDir = join(process.cwd(), "temp", quizId);
  const activityDir = join(rootDir, "activities", `quiz_${moduleId}`);
  await mkdir(activityDir, { recursive: true });

  await mkdir(rootDir, { recursive: true });
  await writeFile(join(rootDir, "badges.xml"), badgesXml);
  await writeFile(join(rootDir, "completion.xml"), completionXml);
  await writeFile(join(rootDir, "files.xml"), filesXml);
  await writeFile(join(rootDir, "grade_history.xml"), gradeHistoryXml);
  await writeFile(join(rootDir, "gradebook.xml"), gradebookXml);
  await writeFile(join(rootDir, "groups.xml"), groupsXml);
  await writeFile(join(rootDir, "moodle_backup.xml"), moodleBackupXml);
  await writeFile(join(rootDir, "outcomes.xml"), outcomesXml);
  await writeFile(join(rootDir, "questions.xml"), questionsXml);
  await writeFile(join(rootDir, "roles.xml"), rolesXml);
  await writeFile(join(rootDir, "scales.xml"), scalesXml);
  await writeFile(join(rootDir, "users.xml"), userXml);

  await writeFile(join(activityDir, "calendar.xml"), calendarXml);
  await writeFile(join(activityDir, "comments.xml"), commentsXml);
  await writeFile(join(activityDir, "competencies.xml"), compentenciesXml);
  await writeFile(join(activityDir, "completion.xml"), activityCompletionXml);
  await writeFile(join(activityDir, "filters.xml"), filtersXml);
  await writeFile(
    join(activityDir, "grade_history.xml"),
    gradeHistoryActivityXml
  );
  await writeFile(join(activityDir, "grades.xml"), gradesXml);
  await writeFile(join(activityDir, "inforef.xml"), inforefXml);
  await writeFile(join(activityDir, "logs.xml"), logsXml);
  await writeFile(join(activityDir, "logstores.xml"), logstoreXml);
  await writeFile(join(activityDir, "module.xml"), moduleXml);
  await writeFile(join(activityDir, "quiz.xml"), quizXml);
  await writeFile(join(activityDir, "roles.xml"), rolesActivityXml);
  await writeFile(join(activityDir, "xapistate.xml"), xapistateXml);

  // Generate tar.gz (tgz) archive
  const tarStream = tar.c({
    gzip: true,
    cwd: rootDir,
    prefix: quizId,
  });

  const tgzBuffer = await buffer(tarStream);

  // Clean up temporary directory
  await rm(rootDir, { recursive: true, force: true });

  return [tgzBuffer, ""];
}

const generateAssessmentPackage = async (
  page: Page,
  packageTitle: string
): Promise<Blob> => {
  const [tgzBuffer, _ayam] = await packageMoodleQuiz(page, packageTitle);
  return new Blob([tgzBuffer], { type: "application/gzip" });
};
