import { Page } from "../../types";
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
import JSZip from "jszip";

export async function packageMoodleQuizContent(
  page: Page,
  title: string
): Promise<Blob> {
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
      (prevValue, currentValue) =>
        prevValue +
        (currentValue.type === "text_only_question"
          ? 0
          : currentValue.point ?? 1),
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
    quizActivityFolderName: `quiz_${moduleId}`,
    moduleId: moduleId.toString(),
    sectionId: sectionId.toString(),
    activitTitle: title,
  });

  const questionsXml = sectionsToMoodleQuestionBank({
    sections: page.content,
    qustionBankEntryIds: qustionBankEntryIds,
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

  const zip = new JSZip();
  zip.file("badges.xml", badgesXml);
  zip.file("completion.xml", completionXml);
  zip.file("files.xml", filesXml);
  zip.file("grade_history.xml", gradeHistoryXml);
  zip.file("gradebook.xml", gradebookXml);
  zip.file("groups.xml", groupsXml);
  zip.file("moodle_backup.xml", moodleBackupXml);
  zip.file("outcomes.xml", outcomesXml);
  zip.file("questions.xml", questionsXml);
  zip.file("roles.xml", rolesXml);
  zip.file("scales.xml", scalesXml);
  zip.file("users.xml", userXml);

  const activityFolder = `activities/quiz_${moduleId}`;

  zip.file(`${activityFolder}/calendar.xml`, calendarXml);
  zip.file(`${activityFolder}/comments.xml`, commentsXml);
  zip.file(`${activityFolder}/competencies.xml`, compentenciesXml);
  zip.file(`${activityFolder}/completion.xml`, activityCompletionXml);
  zip.file(`${activityFolder}/filters.xml`, filtersXml);
  zip.file(`${activityFolder}/grade_history.xml`, gradeHistoryActivityXml);
  zip.file(`${activityFolder}/grades.xml`, gradesXml);
  zip.file(`${activityFolder}/inforef.xml`, inforefXml);
  zip.file(`${activityFolder}/logs.xml`, logsXml);
  zip.file(`${activityFolder}/logstores.xml`, logstoreXml);
  zip.file(`${activityFolder}/module.xml`, moduleXml);
  zip.file(`${activityFolder}/quiz.xml`, quizXml);
  zip.file(`${activityFolder}/roles.xml`, rolesActivityXml);
  zip.file(`${activityFolder}/xapistate.xml`, xapistateXml);

  return await zip.generateAsync({ type: "blob" });
}
