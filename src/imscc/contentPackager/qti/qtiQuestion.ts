import { Section } from "../../types";
import { item } from "./qtiTag";
import { generateItemMetadata } from "./section/itemMetadata";
import {
  generateMatchingQuestionPresentation,
  generateMultipleAnswersQuestionPresentation,
  generateMultipleChoiceQuestionPresentation,
  generateNumericalQuestionPresentation,
  generateShortAnswerQuestionPresentation,
  generateTextOnlyQuestionPresentation,
} from "./section/presentation";
import {
  generateMatchingQuestionResprocessing,
  generateMultipleAnswersQuestionResprocessing,
  generateMultipleChoiceQuestionResprocessing,
  generateNumericalQuestionResprocessing,
  generateShortAnswerQuestionResprocessing,
} from "./section/resprocessing";

export function multipleChoiceQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateMultipleChoiceQuestionPresentation(quiz);
  const resprocessing = generateMultipleChoiceQuestionResprocessing(quiz);
  const itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function matchingQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateMatchingQuestionPresentation(quiz);
  const resprocessing = generateMatchingQuestionResprocessing(quiz);
  const itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function numericalQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateNumericalQuestionPresentation(quiz);
  const resprocessing = generateNumericalQuestionResprocessing(quiz);
  const itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function multipleAnswersQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateMultipleAnswersQuestionPresentation(quiz);
  const resprocessing = generateMultipleAnswersQuestionResprocessing(quiz);
  const itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function shortAnswerQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateShortAnswerQuestionPresentation(quiz);
  const resprocessing = generateShortAnswerQuestionResprocessing(quiz);
  const itemContent = itemMetadata + presentation + resprocessing;
  return item(quiz.title, itemContent);
}

export function textOnlyQuestion({ quiz }: { quiz: Section }) {
  const itemMetadata = generateItemMetadata(quiz);
  const presentation = generateTextOnlyQuestionPresentation(quiz);
  const itemContent = itemMetadata + presentation;
  return item(quiz.title, itemContent);
}
