export type ResourceType =
  | "webcontent"
  | "weblink"
  | "discussion"
  | "assessment";

export type ImsResourceType =
  | "webcontent"
  | "imswl_xmlv1p1"
  | "imsdt_xmlv1p1"
  | "imsqti_xmlv1p2/imscc_xmlv1p1/assessment";

export type MattexType = "text/html" | "text/plain";

export type QtiQuestionType =
  | "multiple_choice_question"
  | "matching_question"
  | "numerical_question"
  | "multiple_answers_question"
  | "short_answer_question";

export const IMS_RESOURCE_TYPES: { [ResourceType: string]: ImsResourceType } = {
  webcontent: "webcontent",
  weblink: "imswl_xmlv1p1",
  discussion: "imsdt_xmlv1p1",
  assessment: "imsqti_xmlv1p2/imscc_xmlv1p1/assessment",
};

export type SelectionType = "single" | "multiple";

export interface Answer {
  text: string;
  id?: string;
  feedback?: string;
}

export interface Choice extends Answer {
  isCorrect?: boolean;
}

export interface Match {
  pair: [Answer, Answer];
}

export interface Section {
  title: string;
  type: QtiQuestionType;
  question: string;
  point?: number;
  answers?: Answer[];
  selection?: SelectionType;
  choices?: Choice[];
  matches?: Match[];
}

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
  sections?: Section[];
  description?: string;
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
