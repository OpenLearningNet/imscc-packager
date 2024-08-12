import JSZip from "jszip";
import { Config, Page } from "../types";
import { manifestXml } from "./manifest";
import { randomId } from "../common";
import { addPage } from "../resource";

export const packageContent = async (
    content: Page,
    description: string,
    options?: Config
  ): Promise<[JSZip, string]> => {
  
  const zip = new JSZip();

  const quizId = randomId("QUIZ");

  const manifestFileContents = manifestXml(quizId, description);
  zip.file("imsmanifest.xml", manifestFileContents);

  addPage(zip, content, "", {
    content: new Set<string>(),
    attachments: new Set<string>(),
    activities: new Set<string>(),
  }, [], options);

  return [zip, manifestFileContents];
}
