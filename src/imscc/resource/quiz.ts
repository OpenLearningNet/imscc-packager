import { Config, Page } from "../types";

export const quizDocument = (page: Page, id: string, options?: Config) => {
  if (typeof page.content === "string") {
    throw new Error("Quiz content must be an array of Section objects");
  }

  const sections = page.content;

  return {
    ext: "xml",
    content: "TODO", // Use the _placeholder_quizid_.xml file
  }
};

export const quizMetadata = (
  // TODO
) => {
  // TODO: add a {quiz_id}/assessment_meta.xml file for each quiz
  return "TODO";
}
