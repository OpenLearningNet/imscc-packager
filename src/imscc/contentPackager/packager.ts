import JSZip from "jszip";
import { Page, Section } from "../types";
import { manifestXml } from "./qti/manifest";
import { generateId } from "../common";
import { assessmentMetadataTemplate } from "./qti/assessmentMetadata";
import { quiz } from "./qti/qtiTag";
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

  const quizId = generateId();

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

  zip.file(
    `${quizId}/${quizId}.xml`,
    processQuiz({
      quizId: quizId,
      quizTitle: content.title,
      quizzes: content.sections ?? [],
    })
  );

  return [zip, manifestFileContents];
};

function processQuiz({
  quizId,
  quizTitle,
  quizzes,
}: {
  quizId: string;
  quizTitle: string;
  quizzes: Section[];
}) {
  let id = 1;
  for (let quiz of quizzes) {
    switch (quiz.type) {
      case "multiple_choice_question":
        for (let choice of quiz.choices || []) {
          choice.id = id.toString();
          id += 1;
        }
        break;
      case "multiple_answers_question":
        for (let choice of quiz.choices || []) {
          choice.id = id.toString();
          id += 1;
        }
        break;
      case "short_answer_question":
        for (let answer of quiz.answers || []) {
          answer.id = id.toString();
          id += 1;
        }
        break;
      case "numerical_question":
        for (let answer of quiz.answers || []) {
          answer.id = id.toString();
          id += 1;
        }
        break;
      default:
        continue;
    }
  }

  let quizContents = "";
  for (const quiz of quizzes) {
    switch (quiz.type) {
      case "multiple_choice_question":
        quizContents += multipleChoiceQuestion({ quiz: quiz });
        break;
      case "multiple_answers_question":
        quizContents += multipleAnswersQuestion({ quiz: quiz });
        break;
      case "matching_question":
        quizContents += matchingQuestion({ quiz: quiz });
        break;
      case "numerical_question":
        quizContents += numericalQuestion({ quiz: quiz });
        break;
      case "short_answer_question":
        quizContents += shortAnswerQuestion({ quiz: quiz });
        break;
      default:
        continue;
    }
  }
  return quiz(quizId, quizTitle, quizContents);
}
