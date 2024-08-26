import JSZip from "jszip";
import { Page, Section } from "../types";
import { manifestXml } from "./qti/manifest";
import { randomId } from "../common";
import { assessmentMetadataTemplate } from "./qti/assessmentMetadata";
import { item, quiz } from "./qti/qtiTag";
import {
  matchingQuestion,
  multipleAnswersQuestion,
  multipleChoiceQuestion,
  numericalQuestion,
  shortAnswerQuestion,
} from "./qti/qtiQuestion";

export const packageQuizContent = async (
  content: Page
): Promise<[JSZip, string]> => {
  const zip = new JSZip();

  if (content.type != "assessment") {
    return [zip, ""];
  }

  const quizId = randomId("QUIZ");

  const manifestFileContents = manifestXml({
    quizId: quizId,
    title: content.title,
  });
  zip.file("imsmanifest.xml", manifestFileContents);

  const pointsPossible =
    content.sections?.reduce(
      (prevValue, currentValue) => prevValue + (currentValue.point || 1),
      0
    ) || 1;
  const assessmentMetadata = assessmentMetadataTemplate({
    quizTitle: content.title,
    quizId: quizId,
    description: content.description || "",
    pointsPossible: pointsPossible.toString(),
  });

  zip.file(`${quizId}/assessment_meta.xml`, assessmentMetadata);

  const quizzes = processQuiz({
    quizId: quizId,
    quizTitle: content.title,
    quizzes: content.sections ?? [],
    pointsPossible: pointsPossible.toString(),
  });

  zip.file(`${quizId}/${quizId}.xml`, quizzes);

  const quizContent = "";
  zip.file(`${quizId}/${quizId}.xml`, quizContent);

  return [zip, manifestFileContents];
};

function processQuiz({
  quizId,
  quizTitle,
  quizzes,
  pointsPossible,
}: {
  quizId: string;
  quizTitle: string;
  quizzes: Section[];
  pointsPossible: string;
}) {
  return quiz(quizId, quizTitle, generateQuizContent(quizzes));
}

function generateQuizContent(quizzes: Section[]) {
  let quizItems = "";
  for (const quiz of quizzes) {
    switch (quiz.type) {
      case "multiple_choice_question":
        quizItems += multipleChoiceQuestion({ quiz: quiz });
        break;
      case "matching_question":
        quizItems += matchingQuestion({ quiz: quiz });
        break;
      case "numerical_question":
        quizItems += numericalQuestion({ quiz: quiz });
        break;
      case "multiple_answers_question":
        quizItems += multipleAnswersQuestion({ quiz: quiz });
        break;
      case "short_answer_question":
        quizItems += shortAnswerQuestion({ quiz: quiz });
        break;
      default:
        continue;
    }
  }
  return quizItems;
}
