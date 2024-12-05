import { Answer, Choice, Match } from "../../../../types";

function answer({
  answerId,
  answerText,
  score,
}: {
  answerId: string;
  answerText: string;
  score: string;
}) {
  return `
<answer id="${answerId}">
	<answertext>${answerText}</answertext>
	<answerformat>1</answerformat>
	<fraction>${score}</fraction>
	<feedback></feedback>
	<feedbackformat>1</feedbackformat>
</answer>`;
}

function matchAnswer({
  answerId,
  questionText,
  answerText,
}: {
  answerId: string;
  questionText: string;
  answerText: string;
}) {
  return `
    <match id="${answerId}">
        <questiontext>${questionText}</questiontext>
        <questiontextformat>1</questiontextformat>
        <answertext>${answerText}</answertext>
    </match>`;
}

export function multipleChoiceQuestionAnswer({
  choices,
  answerId,
  score,
}: {
  choices?: Choice[];
  answerId: string;
  score: number;
}) {
  let result: string = "";
  if (!choices) {
    return result;
  }
  for (let choice of choices) {
    result += answer({
      answerId: answerId,
      answerText: choice.text,
      score: choice.isCorrect ? score.toPrecision(7).toString() : "0.0000000",
    });
  }
  return result;
}

export function numericalQuestionAnswer({
  answers,
  answerId,
}: {
  answers?: Answer[];
  answerId: string;
}) {
  let result: string = "";
  if (!answers) {
    return result;
  }
  for (let ans of answers) {
    result += answer({
      answerId: answerId,
      answerText: ans.text,
      score: "1.0000000",
    });
  }
  return result;
}

export function multipleAnswersQuestionAnswer({
  choices,
  answerId,
  score,
}: {
  choices?: Choice[];
  answerId: string;
  score: number;
}) {
  let result: string = "";
  if (!choices) {
    return result;
  }
  const correctChoicesCount = choices.reduce(
    (count, choice) => count + (choice.isCorrect ? 1 : 0),
    0
  );
  for (let choice of choices) {
    result += answer({
      answerId: answerId,
      answerText: choice.text,
      score: choice.isCorrect
        ? (score / correctChoicesCount).toPrecision(7).toString()
        : "0.0000000",
    });
  }
  return result;
}

export function shortAnswerQuestionAnswer({
  answers,
  answerId,
}: {
  answers?: Answer[];
  answerId: string;
}) {
  let result: string = "";
  if (!answers) {
    return result;
  }
  for (let ans of answers) {
    result += answer({
      answerId: answerId,
      answerText: ans.text,
      score: "1.0000000",
    });
  }
  return result;
}

export function matchingQuestionAnswer({
  matches,
  answerId,
}: {
  matches?: Match[];
  answerId: string;
}) {
  let result: string = "";
  if (!matches) {
    return result;
  }
  for (let match of matches) {
    result += matchAnswer({
      answerId: answerId,
      questionText: match.pair[0].text,
      answerText: match.pair[1].text,
    });
  }
  return result;
}
