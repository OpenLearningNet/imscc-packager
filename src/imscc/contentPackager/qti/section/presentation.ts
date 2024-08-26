import { generateId } from "../../../common";
import { Section } from "../../../types";
import {
  material,
  responseLabel,
  renderChoice,
  responseLid,
  presentation,
} from "../qtiTag";

export function generateMultipleChoiceQuestionPresentation(quiz: Section) {
  let presentationContent = "";

  let materialMattextTag = "";
  if (quiz.question.includes("&lt;div&gt;")) {
    materialMattextTag += `texttype="text/html"`;
  } else {
    materialMattextTag += `texttype="text/plain"`;
  }
  let multipleChoiceQuestionMaterial = material(
    materialMattextTag,
    quiz.question
  );

  const multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLid(quiz);

  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateMatchingQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLid(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateNumericalQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLid(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateMultipleAnswersQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLid(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateShortAnswerQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLid(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

function generateMultipleChoiceQuestionResponseLid(quiz: Section) {
  let responseLidTag = `ident="response1" rcardinality="Single"`;
  let responselabels = "";
  for (const choice of quiz.choices || []) {
    const responseLabelTag = `ident="${choice.id || generateId()}"`;
    const mattextTag = choice.text.includes("&lt;div&gt;")
      ? `texttype="text/html"`
      : `texttype="text/plain"`;
    const responseLabelContent = material(mattextTag, choice.text);
    responselabels += responseLabel(responseLabelTag, responseLabelContent);
  }
  const renderchoice = renderChoice(responselabels);
  return responseLid(responseLidTag, renderchoice);
}
