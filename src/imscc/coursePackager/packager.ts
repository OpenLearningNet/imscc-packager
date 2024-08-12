
import JSZip from "jszip";
import { Config, Course, ResourceAttachment, ResourceModule, ResourcePage } from "../types";
import { DEFAULT_VERSION, Version } from "./versions";
import { ImsItem, ImsManifest, ImsResource } from "./manifest/types";
import { randomId } from "../common";
import { cssFromConfig } from "../resource/html";
import { addPage, DOCUMENT_GENERATORS, nextFilePath, pageResource, processContent } from "../resource";
import { CONTENT_DIR, FILEBASE_PLACEHOLDER, FILES_DIR } from "../constants";
import { manifestXml } from "./manifest/manifest";

const moduleItem = (module: ResourceModule): ImsItem => ({
  identifier: randomId("MODULE"),
  title: module.title,
  items: module.pages.map(
    (page): ImsItem => ({
      identifier: randomId("PAGE"),
      title: page.title,
      identifierRef: page.id,
    })
  ),
});


export const packageCourse = async (
  courseContent: Course,
  generatorComment: string = "Generated by IMSCC Packager",
  version: Version = DEFAULT_VERSION,
  options?: Config
): Promise<[JSZip, string]> => {
  const zip = new JSZip();

  const modules: ResourceModule[] = [];

  const contentFiles = new Set<string>();
  const attachmentFiles = new Set<string>();
  const activityFiles = new Set<string>();

  const globalDependencies: ImsResource[] = [];
  if (options?.cssMode === "stylesheet-link") {
    const css = cssFromConfig(options);
    const path = "web_resources/styles.css";
    zip.file(path, css);
    globalDependencies.push({
      identifier: randomId("CSS"),
      type: "webcontent",
      file: {
        href: path,
      },
    });
  }

  courseContent.modules.forEach((module, i) => {
    const moduleNumber = i + 1;
    const pathPrefix = `module_${moduleNumber}`;

    modules.push({
      title: module.title,
      pages: module.pages.map((page) => addPage(
        zip,
        page,
        pathPrefix,
        {
          content: contentFiles,
          attachments: attachmentFiles,
          activities: activityFiles
        },
        globalDependencies,
        options
      )),
    });
  });

  const resourcePages: ResourcePage[] = modules.reduce(
    (acc: ResourcePage[], module) => acc.concat(module.pages),
    []
  );
  const attachmentResources: ImsResource[] = resourcePages.reduce(
    (acc: ImsResource[], page): ImsResource[] =>
      acc.concat(
        page.attachments
          ? page.attachments.map((attachment): ImsResource => {
            const id = randomId("MEDIA");

            page.dependencies = page.dependencies || [];
            page.dependencies.push(id);
            return {
              identifier: id,
              type: "webcontent",
              file: {
                href: attachment.filePath,
              },
            };
          })
          : []
      ),
    []
  );

  const resources = resourcePages
    .map(pageResource)
    .concat(attachmentResources)
    .concat(globalDependencies);

  const manifest: ImsManifest = {
    generatorComment,
    identifier: randomId("COURSE"),
    metadata: {
      title: courseContent.title,
      description: courseContent.description,
      language: courseContent.language || "en",
      version,
    },
    organizations: [
      {
        identifier: randomId("NAV"),
        items: modules.map(moduleItem),
      },
    ],
    resources: resources,
  };

  const manifestFileContents = manifestXml(manifest);
  zip.file("imsmanifest.xml", manifestFileContents);

  return [zip, manifestFileContents];
};
