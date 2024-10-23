import { strippedUuid } from "../../../common";
import { Section } from "../../../types";
import { itemMetadata, qtiMetadataField } from "../qtiTag";

export function generateItemMetadata(quiz: Section) {
  const questionTypeXml = qtiMetadataField("question_type", quiz.type);
  const pointsPossible = qtiMetadataField(
    "points_possible",
    `${quiz.point || 1}.0`
  );
  let ids = "";
  if (
    quiz.type === "multiple_choice_question" ||
    quiz.type === "multiple_answers_question"
  ) {
    ids =
      quiz.choices?.map((choice) => choice.id || strippedUuid()).join(",") ||
      "";
  } else if (
    quiz.type === "short_answer_question" ||
    quiz.type === "numerical_question"
  ) {
    ids =
      quiz.answers?.map((answer) => answer.id || strippedUuid()).join(",") ||
      "";
  } else if (quiz.type === "matching_question") {
    ids =
      quiz.matches
        ?.map((answer) => answer.pair[0].id || strippedUuid())
        .join(",") || "";
  }
  const originalAnswerIds = qtiMetadataField("original_answer_ids", ids);
  const assessmentQuestionIdentifierRef = qtiMetadataField(
    "assessment_question_identifierref",
    strippedUuid()
  );
  const itemMetadataContent =
    questionTypeXml +
    pointsPossible +
    originalAnswerIds +
    assessmentQuestionIdentifierRef;
  return itemMetadata(itemMetadataContent);
}
