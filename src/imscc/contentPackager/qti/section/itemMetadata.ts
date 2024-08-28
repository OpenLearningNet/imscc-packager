import { generateId } from "../../../common";
import { Section } from "../../../types";
import { itemMetadata, qtiMetadataField } from "../qtiTag";

export function generateItemMetadata(quiz: Section) {
  const questionTypeXml = qtiMetadataField("question_type", quiz.type);
  const pointsPossible = qtiMetadataField(
    "points_possible",
    `${quiz.point || 1}.0`
  );
  let ids = "";
  switch (quiz.type) {
    case "multiple_choice_question" || "multiple_answers_question":
      quiz.choices?.map((choice) => choice.id || generateId()).join(",") || "";
      break;
    case "short_answer_question" || "numerical_question":
      quiz.answers?.map((answer) => answer.id || generateId()).join(",") || "";
      break;
    default:
      ids = "";
  }
  const originalAnswerIds = qtiMetadataField("original_answer_ids", ids);
  const assessmentQuestionIdentifierRef = qtiMetadataField(
    "assessment_question_identifierref",
    generateId()
  );
  const itemMetadataContent =
    questionTypeXml +
    pointsPossible +
    originalAnswerIds +
    assessmentQuestionIdentifierRef;
  return itemMetadata(itemMetadataContent);
}
