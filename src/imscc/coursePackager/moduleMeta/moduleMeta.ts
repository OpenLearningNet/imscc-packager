import { ImsItem } from "../manifest/types";

const itemTemplate = (item: ImsItem, index: number) => `
    <item identifier="${item.identifier}">
        <content_type>WikiPage</content_type>
        <workflow_state>active</workflow_state>
        <title><![CDATA[${item.title}]]></title>
        <identifierref>${item.identifierRef}</identifierref>
        <position>${index + 1}</position>
        <new_tab />
        <indent>0</indent>
        <link_settings_json>null</link_settings_json>
    </item>`;

const itemsTemplate = (items: ImsItem[]) => `
    <items>
        ${
          items && items.length > 0
            ? items.map((item, index) => itemTemplate(item, index)).join("\n")
            : ""
        }
    </items>`;

const moduleTemplate = (module: ImsItem, index: number) => `  
    <module identifier="${module.identifier}">
    <title><![CDATA[${module.title}]]></title>
    <workflow_state>active</workflow_state>
    <position>${index + 1}</position>
    <locked>false</locked>
    ${itemsTemplate(module.items || [])}
    </module>
`;

export const moduleMetaTemplate = (
  modules: ImsItem[]
) => `<?xml version="1.0" encoding="UTF-8"?>
      <modules xmlns="http://canvas.instructure.com/xsd/cccv1p0"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://canvas.instructure.com/xsd/cccv1p0 https://canvas.instructure.com/xsd/cccv1p0.xsd">
        ${
          modules && modules.length > 0
            ? modules
                .map((module, index) => moduleTemplate(module, index))
                .join("\n")
            : ""
        }
      </modules>`;
