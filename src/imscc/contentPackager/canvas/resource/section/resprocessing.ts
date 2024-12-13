import { Section } from "../../../../types";
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
    const respconditionTag = `continue="Yes"`;
    const respconditionContent = `
      <conditionvar>
          <varequal respident="response1">${choice.id}</varequal>
      </conditionvar>
    `;
    respconditions += respcondition(respconditionTag, respconditionContent);

    const varequal = `<varequal respident="response1">${choice.id}</varequal>`;
    if (choice.isCorrect) {
      correctAnswers += varequal;
    } else {
      wrongAnswers += `
        <not>
          ${varequal}
        </not>`;
    }
  }

  respconditions += `
    <respcondition continue="No">
      <conditionvar>
        <and>
          ${correctAnswers}
          ${wrongAnswers}
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

export function generateNumericalQuestionResprocessing(quiz: Section) {
  let respconditions = "";
  for (const answer of quiz.answers || []) {
    respconditions += `
      <respcondition continue="No">
        <conditionvar>
          <or>
            <varequal respident="response1">${answer.text}</varequal>
            <and>
              <vargte respident="response1">${answer.text}</vargte>
              <varlte respident="response1">${answer.text}</varlte>
            </and>
          </or>
        </conditionvar>
        <setvar action="Set" varname="SCORE">100</setvar>
      </respcondition>
    `;
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

export function generateShortAnswerQuestionResprocessing(quiz: Section) {
  let varequals = "";
  for (const answer of quiz.answers || []) {
    varequals += `<varequal respident="response1">${answer.text}</varequal>`;
  }

  return `
    <resprocessing>
      <outcomes>
          <decvar maxvalue="100" minvalue="0" varname="SCORE" vartype="Decimal"/>
      </outcomes>
      <respcondition continue="No">
        <conditionvar>
          ${varequals}
        </conditionvar>
        <setvar action="Set" varname="SCORE">100</setvar>
      </respcondition>
    </resprocessing>
  `;
}

export function generateMatchingQuestionResprocessing(quiz: Section) {
  let respconditions = "";
  const setScoreTo = (100 / (quiz.matches?.length || 10)).toFixed(2);

  for (const match of quiz.matches || []) {
    respconditions += `
    <respcondition>
      <conditionvar>
        <varequal respident="response_${match.pair[0].id}">${match.pair[1].id}</varequal>
      </conditionvar>
      <setvar varname="SCORE" action="Add">${setScoreTo}</setvar>
    </respcondition>`;
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
