import { Config, Course, Page } from "./types";

import { Version } from "./coursePackager/versions";
import { packageCourse } from "./coursePackager/packager";
import { packageQuizContent } from "./contentPackager/packager";

export { packageCourse } from "./coursePackager/packager";
export { packageQuizContent } from "./contentPackager/packager";

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

export const generateContentPackage = async (
  page: Page,
  description: string
): Promise<Blob> => {
  const [zip, _manifest] = await packageQuizContent(
    page,
    page.description || description
  );
  const zipBlob = await zip.generateAsync({ type: "blob" });
  return zipBlob;
};
