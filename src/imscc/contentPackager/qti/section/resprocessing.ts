import { Section } from "../../../types";
import { respcondition } from "../qtiTag";

export function generateMultipleChoiceQuestionReprosessing(quiz: Section) {
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
    let rp = respcondition(respconditionTag, respconditionContent);
    respconditions += rp;
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
