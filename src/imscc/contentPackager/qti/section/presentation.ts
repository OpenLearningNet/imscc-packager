import { containsEscapedHTML, strippedUuid } from "../../../common";
import { Match, Section } from "../../../types";
import { material, responseLabel } from "../qtiTag";

export function generateMultipleChoiceQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }

  const responseLabels = generateMultipleChoiceQuestionResponseLabel(quiz);
  return `
        <presentation>
            <material>
                <mattext ${materialMattextTag}>${question}</mattext>
            </material>
            <response_lid ident="response1" rcardinality="Single">
                <render_choice>
                    ${responseLabels}
                </render_choice>
            </response_lid>
        </presentation>`;
}

export function generateMultipleAnswersQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }

  const responseLabels = generateMultipleChoiceQuestionResponseLabel(quiz);
  return `
          <presentation>
              <material>
                  <mattext ${materialMattextTag}>${question}</mattext>
              </material>
              <response_lid ident="response1" rcardinality="Multiple">
                  <render_choice>
                      ${responseLabels}
                  </render_choice>
              </response_lid>
          </presentation>`;
}

export function generateMatchingQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }
  let responseLids = generateMatchingQuestionResponseLids(quiz.matches || []);
  return `
    <presentation>
      <material>
          <mattext ${materialMattextTag}>${question}</mattext>
      </material>
      ${responseLids}
    </presentation>`;
}

export function generateNumericalQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }

  return `
    <presentation>
        <material>
            <mattext ${materialMattextTag}>${question}</mattext>
        </material>
        <response_str ident="response1" rcardinality="Single">
            <render_fib fibtype="Decimal">
                <response_label ident="answer1"/>
            </render_fib>
        </response_str>
    </presentation>
    `;
}

export function generateShortAnswerQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }

  return `
      <presentation>
          <material>
              <mattext ${materialMattextTag}>${question}</mattext>
          </material>
          <response_str ident="response1" rcardinality="Single">
            <render_fib>
              <response_label ident="answer1" rshuffle="No"/>
            </render_fib>
          </response_str>
      </presentation>
      `;
}

export function generateTextOnlyQuestionPresentation(quiz: Section) {
  let materialMattextTag = `texttype="text/plain"`;
  let question = quiz.question;
  if (containsEscapedHTML(quiz.question)) {
    materialMattextTag = `texttype="text/html"`;
  }

  return `
      <presentation>
          <material>
              <mattext ${materialMattextTag}>${question}</mattext>
          </material>
      </presentation>
      `;
}

function generateMultipleChoiceQuestionResponseLabel(quiz: Section) {
  let responselabels = "";
  for (const choice of quiz.choices || []) {
    const responseLabelTag = `ident="${choice.id || strippedUuid()}"`;
    let mattextTag = `texttype="text/plain"`;
    let text = choice.text;
    if (containsEscapedHTML(choice.text)) {
      mattextTag = `texttype="text/html"`;
    }
    responselabels += responseLabel(
      responseLabelTag,
      material(mattextTag, text)
    );
  }
  return responselabels;
}

function generateMatchingQuestionResponseLabel(matches: Match[]) {
  let responselabels = "";
  for (const match of matches || []) {
    const responselabel = `
      <response_label ident="${match.pair[1].id}">
        <material>
          <mattext>${match.pair[1].text}</mattext>
        </material>
      </response_label>`;
    responselabels += responselabel;
  }
  return responselabels;
}

function generateMatchingQuestionResponseLids(matches: Match[]) {
  let responseLids = "";
  const responseLabels = generateMatchingQuestionResponseLabel(matches);
  for (const match of matches || []) {
    const responseLid = `
    <response_lid ident="response_${match.pair[0].id}">
      <material>
        <mattext texttype="text/plain">${match.pair[0].text}</mattext>
      </material>
      <render_choice>
        ${responseLabels}
      </render_choice>
    </response_lid>
    `;
    responseLids += responseLid;
  }
  return responseLids;
}
