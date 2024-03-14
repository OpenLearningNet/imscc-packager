export { packageCourse } from './imscc/packager';
export type { Course, Page, Module, Attachment } from './imscc/types';

import type { Course } from './imscc/types';
import { packageCourse } from './imscc/packager';

export const generateImscc = async (course: Course): Promise<Blob> => {
  const [zip, _manifest] = await packageCourse(course);
  const zipBlob = await zip.generateAsync({ type: "blob" });
  return zipBlob;
}
