import { Section } from "../../types";
import { item } from "./qtiTag";
import { generateItemMetadata } from "./section/itemMetadata";
import {
  generateMatchingQuestionPresentation,
  generateMultipleAnswersQuestionPresentation,
  generateMultipleChoiceQuestionPresentation,
  generateNumericalQuestionPresentation,
  generateShortAnswerQuestionPresentation,
} from "./section/presentation";
import {
  generateMatchingQuestionResprocessing,
  generateMultipleAnswersQuestionResprocessing,
  generateMultipleChoiceQuestionResprocessing,
  generateNumericalQuestionResprocessing,
  generateShortAnswerQuestionResprocessing,
} from "./section/resprocessing";

export function multipleChoiceQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleChoiceQuestionPresentation(quiz);
  let resprocessing = generateMultipleChoiceQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function matchingQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMatchingQuestionPresentation(quiz);
  let resprocessing = generateMatchingQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function numericalQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateNumericalQuestionPresentation(quiz);
  let resprocessing = generateNumericalQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function multipleAnswersQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateMultipleAnswersQuestionPresentation(quiz);
  let resprocessing = generateMultipleAnswersQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function shortAnswerQuestion({ quiz }: { quiz: Section }) {
  let itemMetadata = generateItemMetadata(quiz);
  let presentation = generateShortAnswerQuestionPresentation(quiz);
  let resprocessing = generateShortAnswerQuestionResprocessing(quiz);
  let itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}
