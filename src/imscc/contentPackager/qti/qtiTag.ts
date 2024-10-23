import { strippedUuid } from "../../common";

export const quiz = (
  quizId: string,
  quizTitle: string,
  quizContent: string
) => {
  return `<?xml version="1.0" encoding="UTF-8"?>
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
            </questestinterop>`;
};

export const item = (title: string, itemContent: string) => {
  return `
    <item ident="${strippedUuid()}" title="${title}">
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

export const qtiMetadataField = (fieldLabel: string, fieldEntry: string) => {
  return `
    <qtimetadatafield>
        <fieldlabel>${fieldLabel}</fieldlabel>
        <fieldentry>${fieldEntry}</fieldentry>
    </qtimetadatafield>
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

export const material = (mattextTag: string, mattextContent: string) => {
  return `
    <material>
      <mattext ${mattextTag}>${mattextContent}</mattext>
    </material>
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
