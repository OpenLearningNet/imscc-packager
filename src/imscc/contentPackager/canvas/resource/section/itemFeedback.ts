import { isEscapedHtml } from "../../../../common";
import { Section } from "../../../../types";

export function generateItemFeedback(quiz: Section) {
  let itemFeedbacks = "";
  for (const choice of quiz.choices || []) {
    let mattextTag = `texttype="text/plain"`;
    let feedback = choice.feedback || "";
    if (isEscapedHtml(choice.feedback || "")) {
      mattextTag = `texttype="text/html"`;
    }

    let itemFeedback = `
        <itemfeedback ident="${choice.id}_fb">
            <flow_mat>
                <material>
                    <mattext ${mattextTag}>${feedback}</mattext>
                </material>
            </flow_mat>
        </itemfeedback>
  `;
    itemFeedbacks += itemFeedback;
  }
  return itemFeedbacks;
}
