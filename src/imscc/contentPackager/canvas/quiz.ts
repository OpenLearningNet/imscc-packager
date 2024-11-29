import { Section, Answer } from "../../types";
import {
  multipleChoiceQuestion,
  multipleAnswersQuestion,
  matchingQuestion,
  numericalQuestion,
  shortAnswerQuestion,
  textOnlyQuestion,
} from "./resource/qtiQuestion";
import { quiz } from "./resource/qtiTag";

export function processCanvasQuiz({
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
