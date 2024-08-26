import { generateId } from "../../common";

export const quiz = (
  quizId: string,
  quizTitle: string,
  quizContent: string
) => {
  return `
    <?xml version="1.0" encoding="UTF-8"?>
    <questestinterop xmlns="http://www.imsglobal.org/xsd/ims_qtiasiv1p2" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/ims_qtiasiv1p2 http://www.imsglobal.org/xsd/ims_qtiasiv1p2p1.xsd">
        <assessment ident="${quizId}" title="${quizTitle}">
            <qtimetadata>
            <qtimetadatafield>
                <fieldlabel>cc_maxattempts</fieldlabel>
                <fieldentry>1</fieldentry>
            </qtimetadatafield>
            </qtimetadata>
            <section ident="root_section">
                ${quizContent}
            </section>
        </assessment>
    </questestinterop>
`;
};

export const item = (itemContent: string, title: string) => {
  return `
    <item ident="${generateId()}" title="${title}">
        ${itemContent}
    </item>
  `;
};

export const itemMetadata = (itemMetadataContent: string) => {
  return `
    <itemmetadata>
        ${itemMetadataContent}
    </itemmetadata>
  `;
};

export const qtiMetadata = (qtiMetadataFields: string) => {
  return `
    <qtimetadata>
        ${qtiMetadataFields}
    </qtimetadata>
  `;
};

export const qtiMetadataField = (fieldLabel: string, fieldEntry: string) => {
  return `
    <qtimetadatafield>
        <fieldlabel>${fieldLabel}</fieldlabel>
        <fieldentry>${fieldEntry}</fieldentry>
    </qtimetadatafield>
  `;
};

export const presentation = (presentationContent: string) => {
  return `
    <presentation>
      ${presentationContent}
    </presentation>
  `;
};

export const responseLid = (
  responseLidTag: string,
  responseLidContent: string
) => {
  return `
    <response_lid ${responseLidTag}>
      ${responseLidContent}
    </response_lid>
  `;
};

export const renderChoice = (renderChoiceContent: string) => {
  return `
    <render_choice>
      ${renderChoiceContent}
    </render_choice>
  `;
};

export const responseLabel = (
  responseLabelTag: string,
  responseLabelContent: string
) => {
  return `
    <response_label ${responseLabelTag}>
      ${responseLabelContent}
    </response_label>
  `;
};

export const responseLabelSelfClosing = (responseLabelTag: string) => {
  return `
    <response_label ${responseLabelTag}/>
  `;
};

export const material = (mattextTag: string, mattextContent: string) => {
  return `
    <material>
      <mattext ${mattextTag}>${mattextContent}</mattext>
    </material>
  `;
};

export const resprocessing = (resprocessingContent: string) => {
  return `
  <resprocessing>
    ${resprocessingContent}
  </resprocessing>
  `;
};

export const outcomes = (outcomesContent: string) => {
  return `
    <outcomes>
      ${outcomesContent}
    </outcomes>
  `;
};

export const decvarSelfClosing = (decvarTag: string) => {
  return `
    <decvar ${decvarTag}/>
  `;
};

export const respcondition = (
  respconditionTag: string,
  respconditionContent: string
) => {
  return `
    <respcondition ${respconditionTag}>
      ${respconditionContent}
    </respcondition>
  `;
};

export const setvar = (setvarTag: string, setvarContent: string) => {
  return `
    <setvar ${setvarTag}>
      ${setvarContent}
    </setvar>
  `;
};

export const conditionvar = (conditionvarContent: string) => {
  return `
    <conditionvar>
      ${conditionvarContent}
    </conditionvar>
  `;
};

export const varequal = (varequalTag: string, varequalContent: string) => {
  return `
    <varequal ${varequalTag}>${varequalContent}</varequal>
  `;
};

export const vargte = (vargteTag: string, vargteContent: string) => {
  return `
    <vargte ${vargteTag}>${vargteContent}</vargte>
  `;
};

export const varlte = (varlteTag: string, varlteContent: string) => {
  return `
    <varlte ${varlteTag}>${varlteContent}</varlte>
  `;
};

export const displayfeedbackSelfClosing = (displayfeedbackTag: string) => {
  return `
    <displayfeedback ${displayfeedbackTag}/>
  `;
};

export const itemfeedback = (
  itemfeedbackTag: string,
  itemfeedbackContent: string
) => {
  return `
    <itemfeedback ${itemfeedbackTag}>
      ${itemfeedbackContent}
    </itemfeedback>
  `;
};

export const flowMat = (flowMatContent: string) => {
  return `
    <flow_mat>
      ${flowMatContent}
    </flow_mat>
  `;
};

export const responseStr = (
  responseStrTag: string,
  responseStrContent: string
) => {
  return `
    <response_str ${responseStrTag}>
      ${responseStrContent}
    </response_str>
  `;
};

export const renderFib = (renderFibTag: string, renderFibContent: string) => {
  return `
    <render_fib ${renderFibTag}>
      ${renderFibContent}
    </render_fib>
  `;
};

export const or = (orContent: string) => {
  return `
    <or>
      ${orContent}
    </or>
  `;
};

export const and = (andContent: string) => {
  return `
    <and>
      ${andContent}
    </and>
  `;
};
