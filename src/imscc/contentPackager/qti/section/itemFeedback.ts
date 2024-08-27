import { Section } from "../../../types";

export function generateItemFeedback(quiz: Section) {
  let itemFeedbacks = "";
  for (const choice of quiz.choices || []) {
    const mattextTag = choice.feedback?.includes("&lt;div&gt;")
      ? `texttype="text/html"`
      : `texttype="text/plain"`;
    let itemFeedback = `
        <itemfeedback ident="${choice.id}_fb">
            <flow_mat>
                <material>
                    <mattext ${mattextTag}>${choice.feedback}</mattext>
                </material>
            </flow_mat>
        </itemfeedback>
  `;
    itemFeedbacks += itemFeedback;
  }
  return itemFeedbacks;
}
