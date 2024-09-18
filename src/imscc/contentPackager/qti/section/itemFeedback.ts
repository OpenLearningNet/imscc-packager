import { containsHTML, wrapHtmlwithCData } from "../../../common";
import { Section } from "../../../types";

export function generateItemFeedback(quiz: Section) {
  let itemFeedbacks = "";
  for (const choice of quiz.choices || []) {
    let mattextTag = `texttype="text/plain"`;
    let feedback = choice.feedback;
    if (containsHTML(choice.feedback || "")) {
      mattextTag = `texttype="text/html"`;
      feedback = wrapHtmlwithCData(choice.feedback || "");
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
