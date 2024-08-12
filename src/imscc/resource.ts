import JSZip from "jszip";
import { randomId } from "./common";
import { CONTENT_DIR, FILEBASE_PLACEHOLDER, FILES_DIR } from "./constants";
import { ImsResource } from "./coursePackager/manifest/types";
import { discussionDocument } from "./resource/discussion";
import { htmlDocument } from "./resource/html";
import { quizDocument } from "./resource/quiz";
import { Config, IMS_RESOURCE_TYPES, Page, ResourceAttachment, ResourcePage, ResourceType } from "./types";

export const DOCUMENT_GENERATORS: Record<
  ResourceType,
  (
    page: Page,
    id: string,
    options?: Config
  ) => {
    ext: string;
    content: string;
  }
> = {
  webcontent: htmlDocument,
  discussion: discussionDocument,
  weblink: () => {
    throw new Error("Not implemented");
  },
  assessment: quizDocument,
};

export const pageResource = (page: ResourcePage): ImsResource => {
  const type = IMS_RESOURCE_TYPES[page.type];
  let resource: ImsResource;

  if (page.type === "webcontent") {
    resource = {
      identifier: page.id,
      type,
      href: page.filePath,
      file: {
        href: page.filePath,
      },
    };
  } else if (page.type === "discussion") {
    resource = {
      identifier: page.id,
      type,
      file: {
        href: page.filePath,
      },
    };
  } else {
    throw new Error(`Unsupported page type: ${page.type}`);
  }

  if (page.dependencies) {
    resource.dependencies = page.dependencies;
  }

  return resource;
};

export const processContent = (
  page: Page,
  content: string,
  options?: Config
): string => {
  if (!options || page.type !== "webcontent") {
    return content;
  }

  if (
    options.cssMode === "stylesheet-tag" ||
    options.cssMode === "stylesheet-link"
  ) {
    return content;
  }

  const classes = options.classes;

  const document = new DOMParser().parseFromString(content, "text/html");

  for (const [className, style] of Object.entries(classes)) {
    const elements = document.getElementsByClassName(className);
    for (const element of elements) {
      if (options.cssMode === "inline-replace") {
        element.classList.remove(className);
      }
      const existingStyle = element.getAttribute("style") || "";
      element.setAttribute("style", `${existingStyle}${style}`);
    }
  }

  return document.documentElement.outerHTML;
};

export const nextFilePath = (
  filenames: Set<string>,
  pathPrefix: string,
  fileTitle: string,
  ext: string
): string => {

  let prefix = pathPrefix ? `${pathPrefix}_` : "";

  let filePath = `${prefix}${fileTitle}.${ext}`;
  let inc = 1;
  while (filenames.has(filePath)) {
    filePath = `${prefix}${fileTitle}_${inc}.${ext}`;
    inc++;
  }
  filenames.add(filePath);

  return filePath;
};

export const addPage = (zip: JSZip, page: Page, pathPrefix: string, files: {
  content: Set<string>;
  attachments: Set<string>;
  activities: Set<string>;
}, globalDependencies: ImsResource[], options: Config | undefined) => {
  const idPrefix = {
    webcontent: "CONTENT",
    assessment: "ASSESSMENT",
    weblink: "WEBLINK",
    discussion: "DISCUSSION",
  }[page.type];

  const id = randomId(idPrefix);

  const { ext, content } = DOCUMENT_GENERATORS[page.type](
    page,
    id,
    options
  );
  const fileTitle = page.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();

  // TODO: pathPrefix should be {quiz_id} for page.type === "assessment" (ignored)
  // TODO: filePath should be {quiz_id}/{quiz_id}.xml for page.type === "assessment"
  // TODO: turn into a function
  const filePath =
    page.type === "webcontent"
      ? `${CONTENT_DIR}/${nextFilePath(
        files.content,
        pathPrefix,
        fileTitle,
        ext
      )}`
      : nextFilePath(files.activities, pathPrefix, fileTitle, ext);

  const resourcePage: ResourcePage = {
    title: page.title,
    type: page.type,
    content: processContent(page, content, options),
    filePath,
    id,
    dependencies: globalDependencies.map((dep) => dep.identifier),
  };

  // TODO: add a {quiz_id}/assessment_meta.xml file for each quiz

  if (page.attachments) {
    const resourceAttachments = page.attachments.map(
      (attachment): ResourceAttachment => {
        if (!attachment.placeholder) {
          throw new Error("Attachment must have a placeholder property");
        }
        const placeholder = attachment.placeholder;
        const [attachmentTitle, attachmentExt] =
          attachment.filename.split(".");
        const attachmentFilePath = nextFilePath(
          files.attachments,
          pathPrefix,
          attachmentTitle,
          attachmentExt
        );
        const attachmentZipFilePath = `${FILES_DIR}/${attachmentFilePath}`;

        if (attachment.blob) {
          zip.file(attachmentZipFilePath, attachment.blob);
        } else if (attachment.base64) {
          zip.file(attachmentZipFilePath, attachment.base64, {
            base64: true,
          });
        } else {
          throw new Error(
            "Attachment must have either a blob or base64 property"
          );
        }

        resourcePage.content = resourcePage.content.replaceAll(
          placeholder,
          `${FILEBASE_PLACEHOLDER}/${attachmentFilePath}`
        );

        return {
          ...attachment,
          filePath: attachmentZipFilePath,
        };
      }
    );

    resourcePage.attachments = resourceAttachments;
  }

  zip.file(filePath, resourcePage.content);

  return resourcePage;
}
