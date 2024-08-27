import { generateId } from "../../../common";
import { Section } from "../../../types";
import { itemMetadata, qtiMetadataField } from "../qtiTag";

export function generateItemMetadata(quiz: Section) {
  const questionTypeXml = qtiMetadataField("question_type", quiz.type);
  const pointsPossible = qtiMetadataField(
    "points_possible",
    `${quiz.point || 1}.0`
  );
  const originalAnswerIds = qtiMetadataField(
    "original_answer_ids",
    quiz.choices?.map((choice) => choice.id || generateId()).join(",") || ""
  );
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
