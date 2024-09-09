import { Config, Course, Page, ResourceType } from "./types";

import { Version } from "./coursePackager/versions";
import { packageCourse } from "./coursePackager/packager";
import { packageQuizContent, packageWebContent } from "./contentPackager/packager";

export { packageCourse } from "./coursePackager/packager";
export { packageQuizContent } from "./contentPackager/packager";

/**
 * Generates an IMS Common Cartridge (IMSCC) package for the given course.
 * 
 * @param {Course} course - The course object containing the content to be packaged.
 * @param {string} [generatorComment] - An optional comment to include in the package metadata.
 * @param {Version} [version] - An optional version of the IMSCC to generate.
 * @param {Config} [options] - Optional configuration settings for the packaging process.
 * @returns {Promise<Blob>} - A promise that resolves to a Blob representing the packaged course content.
 */
export const generateImscc = async (
  course: Course,
  generatorComment?: string,
  version?: Version,
  options?: Config
): Promise<Blob> => {
  const [zip, _manifest] = await packageCourse(
    course,
    generatorComment,
    version,
    options
  );
  const zipBlob = await zip.generateAsync({ type: "blob" });
  return zipBlob;
};


const generateAssessmentPackage = async (
  page: Page,
  packageTitle: string
): Promise<Blob> => {
  const [zip, _manifest] = await packageQuizContent(page, packageTitle);
  const zipBlob = await zip.generateAsync({ type: "blob" });
  return zipBlob;
};

const generateWebcontentPackage = async (
  page: Page,
  packageTitle: string
): Promise<Blob> => {
  const [zip, _manifest] = await packageWebContent(page, packageTitle);
  const zipBlob = await zip.generateAsync({ type: "blob" });
  return zipBlob;
}

type ContentPackager = (page: Page, description: string) => Promise<Blob>;

/**
 * Generates an IMS Content Package (IMSCP) for the given page and description.
 * 
 * @param {Page} page - The page object containing the content to be packaged.
 * @param {string} packageTitle - The title for the content being packaged.
 * @returns {Promise<Blob>} - A promise that resolves to a Blob representing the packaged content.
 * @throws {Error} - Throws an error if the page type is unsupported.
 */
export const generateImscp = async (
  page: Page,
  packageTitle: string
): Promise<Blob> => {
  const packagers: Record<ResourceType, ContentPackager> = {
    assessment: generateAssessmentPackage,
    webcontent: generateWebcontentPackage,
    weblink: () => {
      throw new Error("Not implemented");
    },
    discussion: () => {
      throw new Error("Not implemented");
    }
  };

  const packager = packagers[page.type];


  if (!packager) {
    throw new Error(`Unsupported page type: ${page.type}`);
  }

  return packager(page, packageTitle);
};
