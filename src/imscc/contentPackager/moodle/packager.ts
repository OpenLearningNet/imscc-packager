import JSZip from "jszip";
import { strippedUuid } from "../../common";
import { Page } from "../../types";
import { assessmentMetadataTemplate } from "../canvas/resource/assessmentMetadata";
import { generateImscpManifest } from "../canvas/resource/manifest";
import { processCanvasQuiz } from "../canvas/quiz";

export async function packageMoodleQuiz(
  page: Page,
  title: string
): Promise<[JSZip, string]> {
  const zip = new JSZip();

  const quizId = strippedUuid();

  const manifestFileContents = generateImscpManifest({
    quizId: quizId,
    title: title,
  });
  zip.file("imsmanifest.xml", manifestFileContents);

  if (typeof page.content === "string") {
    throw new Error("Invalid content: Must be an array of sections");
  }

  const sections = page.content;

  const pointsPossible =
    sections?.reduce(
      (prevValue, currentValue) => prevValue + (currentValue.point ?? 1),
      0
    ) || 1;
  const assessmentMetadata = assessmentMetadataTemplate({
    quizTitle: page.title,
    quizId: quizId,
    description: page.description || "",
    pointsPossible: pointsPossible.toString(),
  });

  zip.file(`${quizId}/assessment_meta.xml`, assessmentMetadata);

  zip.file(
    `${quizId}/${quizId}.xml`,
    processCanvasQuiz({
      quizId: quizId,
      quizTitle: page.title,
      quizzes: sections ?? [],
    })
  );

  return [zip, manifestFileContents];
}