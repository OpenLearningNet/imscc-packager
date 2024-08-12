export type ResourceType =
  | "webcontent"
  | "weblink"
  | "discussion"
  | "assessment";

export type ImsResourceType = "webcontent" | "imswl_xmlv1p1" | "imsdt_xmlv1p1" | "imsqti_xmlv1p2/imscc_xmlv1p1/assessment";
  
export const IMS_RESOURCE_TYPES: { [ResourceType: string]: ImsResourceType } = {
  webcontent: "webcontent",
  weblink: "imswl_xmlv1p1",
  discussion: "imsdt_xmlv1p1",
  assessment: "imsqti_xmlv1p2/imscc_xmlv1p1/assessment",
};


export interface Attachment {
  blob?: Blob;
  base64?: string;
  placeholder: string;
  filename: string;
}

export interface Page {
  title: string;
  type: ResourceType;
  content: string;
  attachments?: Attachment[];
}

export interface Module {
  title: string;
  pages: Page[];
}

export interface Course {
  title: string;
  description: string;
  language?: string; // e.g. "en-GB"
  modules: Module[];
}

export interface Config {
  classes: {
    [className: string]: string;
  };
  cssMode:
    | "inline-replace"
    | "inline-preserve"
    | "stylesheet-tag"
    | "stylesheet-link";
}

export interface ResourceAttachment extends Attachment {
  filePath: string;
}

export interface ResourcePage extends Page {
  id: string;
  filePath: string;
  dependencies?: string[];
  attachments?: ResourceAttachment[];
}

export interface ResourceModule extends Module {
  pages: ResourcePage[];
}
