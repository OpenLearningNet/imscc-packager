import { Section } from "../../../types";
import { respcondition } from "../qtiTag";

export function generateMultipleChoiceQuestionResprocessing(quiz: Section) {
  let respconditions = "";
  for (const choice of quiz.choices || []) {
    let respconditionTag = "";
    let respconditionContent = "";
    if (choice.isCorrect) {
      respconditionTag += `continue="No"`;
      respconditionContent += `
        <conditionvar>
            <varequal respident="response1">${choice.id}</varequal>
        </conditionvar>
        <setvar action="Set" varname="SCORE">100</setvar>`;
    } else {
      respconditionTag += `continue="Yes"`;
      respconditionContent += `
        <conditionvar>
            <varequal respident="response1">${choice.id}</varequal>
        </conditionvar>
        <displayfeedback feedbacktype="Response" linkrefid="${choice.id}_fb"/>
      `;
    }
    respconditions += respcondition(respconditionTag, respconditionContent);
  }
  return `
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        ${respconditions}
    </resprocessing>
  `;
}

export function generateMultipleAnswersQuestionResprocessing(quiz: Section) {
  let respconditions = "";
  let correctAnswers = "";
  let wrongAnswers = "";
  for (const choice of quiz.choices || []) {
    let respconditionTag = "";
    let respconditionContent = "";
    respconditionTag += `continue="Yes"`;
    respconditionContent += `
      <conditionvar>
          <varequal respident="response1">${choice.id}</varequal>
      </conditionvar>
      <displayfeedback feedbacktype="Response" linkrefid="${choice.id}_fb"/>
    `;
    respconditions += respcondition(respconditionTag, respconditionContent);
    if (choice.isCorrect) {
      correctAnswers += `<varequal respident="response1">${choice.id}</varequal>`;
    } else {
      wrongAnswers += `<varequal respident="response1">${choice.id}</varequal>`;
    }
  }

  respconditions += `
    <respcondition continue="No">
      <conditionvar>
        <and>
          ${correctAnswers}
          <not>
            ${wrongAnswers}
          </not>
        </and>
      </conditionvar>
      <setvar action="Set" varname="SCORE">100</setvar>
    </respcondition>
  `;

  return `
    <resprocessing>
        <outcomes>
            <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
        </outcomes>
        ${respconditions}
    </resprocessing>
  `;
}
