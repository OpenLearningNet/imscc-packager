import JSZip from "jszip";
import { Answer, Page, Section } from "../types";
import { generateImscpManifest } from "./canvas/resource/manifest";
import { strippedUuid } from "../common";
import { assessmentMetadataTemplate } from "./canvas/resource/assessmentMetadata";
import { quiz } from "./canvas/resource/qtiTag";
import {
  matchingQuestion,
  multipleAnswersQuestion,
  multipleChoiceQuestion,
  numericalQuestion,
  shortAnswerQuestion,
  textOnlyQuestion,
} from "./canvas/resource/qtiQuestion";

export const packageWebContent = async (
  _page: Page,
  _title: string
): Promise<[JSZip, string]> => {
  throw new Error("Not implemented");
  // TODO: Implement this
};

export const packageQuizContent = async (
  page: Page,
  title: string
): Promise<[JSZip, string]> => {
  const zip = new JSZip();

  if (page.type != "assessment") {
    return [zip, ""];
  }

  const quizId = strippedUuid();

  const manifestFileContents = generateImscpManifest({
    quizId: quizId,
    title: title,
  });
  zip.file("imsmanifest.xml", manifestFileContents);

  if (typeof page.content === "string") {
    throw new Error("Invalid content: Must be an array of sections");
  }

  const sections = page.content;

  const pointsPossible =
    sections?.reduce(
      (prevValue, currentValue) => prevValue + (currentValue.point ?? 1),
      0
    ) || 1;
  const assessmentMetadata = assessmentMetadataTemplate({
    quizTitle: page.title,
    quizId: quizId,
    description: page.description || "",
    pointsPossible: pointsPossible.toString(),
  });

  zip.file(`${quizId}/assessment_meta.xml`, assessmentMetadata);

  zip.file(
    `${quizId}/${quizId}.xml`,
    processQuiz({
      quizId: quizId,
      quizTitle: page.title,
      quizzes: sections ?? [],
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
  let answerId = 1;
  let matchingQuestionId = 1;
  let quizContents = "";
  for (let quiz of quizzes) {
    switch (quiz.type) {
      case "multiple_choice_question":
        for (let choice of quiz.choices || []) {
          choice.id = answerId.toString();
          answerId += 1;
        }
        quizContents += multipleChoiceQuestion({ quiz: quiz });
        break;
      case "multiple_answers_question":
        for (let choice of quiz.choices || []) {
          choice.id = answerId.toString();
          answerId += 1;
        }
        quizContents += multipleAnswersQuestion({ quiz: quiz });
        break;
      case "matching_question":
        for (let match of quiz.matches || []) {
          const matchingQuestion: Answer = {
            text: match.pair[0].text,
            id: matchingQuestionId.toString(),
          };

          const matchingAnswer: Answer = {
            text: match.pair[1].text,
            id: answerId.toString(),
          };

          match.pair[0] = matchingQuestion;
          match.pair[1] = matchingAnswer;

          answerId += 1;
          matchingQuestionId += 1;
        }
        quizContents += matchingQuestion({ quiz: quiz });
        break;
      case "numerical_question":
        for (let answer of quiz.answers || []) {
          answer.id = answerId.toString();
          answerId += 1;
        }
        quizContents += numericalQuestion({ quiz: quiz });
        break;
      case "short_answer_question":
        for (let answer of quiz.answers || []) {
          answer.id = answerId.toString();
          answerId += 1;
        }
        quizContents += shortAnswerQuestion({ quiz: quiz });
        break;
      case "text_only_question":
        quizContents += textOnlyQuestion({ quiz: quiz });
        break;
      default:
        continue;
    }
  }
  return quiz(quizId, quizTitle, quizContents);
}
