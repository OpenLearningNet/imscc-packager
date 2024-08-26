import { Section } from "../../../types";
import {
  conditionvar,
  decvarSelfClosing,
  displayfeedbackSelfClosing,
  outcomes,
  respcondition,
  resprocessing,
  setvar,
  varequal,
} from "../qtiTag";

export function generateMultipleChoiceQuestionReprosessing(quiz: Section) {
  let resprocessingContent = "";
  const outcomesContent = decvarSelfClosing(
    `maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"`
  );
  const outcome = outcomes(outcomesContent);
  let respconditions = "";
  for (const choice of quiz.choices || []) {
    let choiceContent = "";
    const respconditionTag = ``;
    const varEqual = varequal(`action="Set" varname="SCORE"`, choice.id || "");
    const conditionVar = conditionvar(varEqual);
    choiceContent += conditionVar;

    if (choice.isCorrect) {
      const setVar = setvar(`action="Set"`, "100");
      choiceContent += setVar;
    } else {
      const displayFeedback = displayfeedbackSelfClosing(
        `feedbacktype="Response" linkrefid="${choice.id || ""}_fb"`
      );
      choiceContent += displayFeedback;
    }
    let rp = respcondition(respconditionTag, choiceContent);
    respconditions += rp;
  }
  resprocessingContent += outcome + respconditions;
  return resprocessing(resprocessingContent);
}
