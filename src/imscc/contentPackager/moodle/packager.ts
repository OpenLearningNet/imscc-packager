import { Page } from "../../types";
import * as tar from "tar";
import { writeFile, rm, mkdir } from "node:fs/promises";
import { join } from "node:path";
import { Blob } from "buffer";
import { buffer } from "node:stream/consumers";

export async function packageMoodleQuiz(
  page: Page,
  title: string
): Promise<[Buffer, string]> {
  const quizId = "mocked-uuid"; // Example ID
  const tempDir = join(process.cwd(), "temp", quizId);

  await mkdir(tempDir, { recursive: true });

  // Generate sample files
  const manifestContent = "<manifest>Sample Manifest</manifest>";
  await writeFile(join(tempDir, "imsmanifest.xml"), manifestContent);

  const quizContent = "<quiz>Sample Quiz Content</quiz>";
  await writeFile(join(tempDir, `${quizId}/quiz.xml`), quizContent);

  // Generate tar.gz (tgz) archive
  const tarStream = tar.c(
    {
      gzip: true,
      cwd: tempDir,
      prefix: quizId,
    },
    ["imsmanifest.xml", `${quizId}/quiz.xml`]
  );

  const tgzBuffer = await buffer(tarStream);

  // Clean up temporary directory
  await rm(tempDir, { recursive: true, force: true });

  return [tgzBuffer, ""];
}

const generateAssessmentPackage = async (
  page: Page,
  packageTitle: string
): Promise<Blob> => {
  const [tgzBuffer, _ayam] = await packageMoodleQuiz(page, packageTitle);
  return new Blob([tgzBuffer], { type: "application/gzip" });
};
