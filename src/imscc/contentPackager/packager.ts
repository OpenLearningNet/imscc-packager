import JSZip from "jszip";
import { Config, Page } from "../types";
import { manifestXml } from "./manifest";
import { randomId } from "../common";
import { assessmentMetadataTemplate } from "./assessmentMetadata";

export const packageQuizContent = async (
  content: Page,
  description: string,
  options?: Config
): Promise<[JSZip, string]> => {
  const zip = new JSZip();

  if (content.type != "assessment") {
    return [zip, ""];
  }

  const quizId = randomId("QUIZ");

  const manifestFileContents = manifestXml({
    quizId: quizId,
    title: content.title,
  });
  zip.file("imsmanifest.xml", manifestFileContents);

  const pointsPossible =
    content.sections?.reduce(
      (prevValue, currentValue) => prevValue + (currentValue.point || 1),
      0
    ) || 1;
  const assessmentMetadata = assessmentMetadataTemplate({
    quizTitle: content.title,
    quizId: quizId,
    description: content.description || "",
    pointsPossible: pointsPossible.toString(),
  });

  zip.file(`${quizId}/assessment_meta.xml`, assessmentMetadata);

  const quizContent = "";
  zip.file(`${quizId}/${quizId}.xml`, quizContent);

  return [zip, manifestFileContents];
};
