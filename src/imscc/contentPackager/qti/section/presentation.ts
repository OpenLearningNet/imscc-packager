import { generateId } from "../../../common";
import { Section } from "../../../types";
import { material, responseLabel, presentation } from "../qtiTag";

export function generateMultipleChoiceQuestionPresentation(quiz: Section) {
  let materialMattextTag = "";
  if (quiz.question.includes("&lt;div&gt;")) {
    materialMattextTag += `texttype="text/html"`;
  } else {
    materialMattextTag += `texttype="text/plain"`;
  }

  const responseLabels = generateMultipleChoiceQuestionResponseLabel(quiz);
  return `
        <presentation>
            <material>
                <mattext ${materialMattextTag}>${quiz.question}</mattext>
            </material>
            <response_lid ident="response1" rcardinality="Single">
                <render_choice>
                    ${responseLabels}
                </render_choice>
            </response_lid>
        </presentation>`;
}

export function generateMatchingQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLabel(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateNumericalQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLabel(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateMultipleAnswersQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLabel(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

export function generateShortAnswerQuestionPresentation(quiz: Section) {
  let presentationContent = "";
  let multipleChoiceQuestionMaterial = material("text/html", quiz.question);
  let multipleChoiceQuestionResponseLid =
    generateMultipleChoiceQuestionResponseLabel(quiz);
  presentationContent +=
    multipleChoiceQuestionMaterial + multipleChoiceQuestionResponseLid;
  return presentation(presentationContent);
}

function generateMultipleChoiceQuestionResponseLabel(quiz: Section) {
  let responselabels = "";
  for (const choice of quiz.choices || []) {
    const responseLabelTag = `ident="${choice.id || generateId()}"`;
    const mattextTag = choice.text.includes("&lt;div&gt;")
      ? `texttype="text/html"`
      : `texttype="text/plain"`;
    responselabels += responseLabel(
      responseLabelTag,
      material(mattextTag, choice.text)
    );
  }
  return responselabels;
}