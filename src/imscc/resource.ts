import JSZip from "jszip";
import { randomId } from "./common";
import { CONTENT_DIR, FILEBASE_PLACEHOLDER, FILES_DIR } from "./constants";
import { ImsResource } from "./coursePackager/manifest/types";
import { discussionDocument } from "./resource/discussion";
import { htmlDocument } from "./resource/html";
import { quizDocument, quizMetadata } from "./resource/quiz";
import {
  Config,
  IMS_RESOURCE_TYPES,
  Page,
  ResourceAttachment,
  ResourcePage,
  ResourceType,
} from "./types";

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

const packagePageForImscc = (
  page: Page,
  modulePrefix: string,
  files: {
    content: Set<string>;
    attachments: Set<string>;
    activities: Set<string>;
  },
  globalDependencies: ImsResource[],
  options: Config | undefined
): [string, string, ResourcePage] => {
  const idPrefix = {
    webcontent: "CONTENT",
    assessment: "ASSESSMENT",
    weblink: "WEBLINK",
    discussion: "DISCUSSION",
  }[page.type];

  const id = randomId(idPrefix);

  const { ext, content } = DOCUMENT_GENERATORS[page.type](page, id, options);

  const fileTitle = page.title.replace(/[^a-z0-9]/gi, "-").toLowerCase();

  const filePathOptions = {
    webcontent: () =>
      `${CONTENT_DIR}/${nextFilePath(
        files.content,
        modulePrefix,
        fileTitle,
        ext
      )}`,

    // filePath should be {quiz_id}/{quiz_id}.xml for page.type === "assessment"
    assessment: () => `${id}/${id}.${ext}`,
    weblink: () => "",
    discussion: () =>
      nextFilePath(files.activities, modulePrefix, fileTitle, ext),
  };

  // pathPrefix should be {quiz_id} for page.type === "assessment"
  const pathPrefixOptions = {
    webcontent: modulePrefix,
    assessment: id,
    weblink: id,
    discussion: modulePrefix,
  };

  const pathPrefix = pathPrefixOptions[page.type];
  const filePath = filePathOptions[page.type]();

  const resourcePage: ResourcePage = {
    title: page.title,
    type: page.type,
    content,
    filePath,
    id,
    dependencies: globalDependencies.map((dep) => dep.identifier),
  };

  return [pathPrefix, filePath, resourcePage];
};

const addSupportingFiles = (
  zip: JSZip,
  page: Page,
  resourcePage: ResourcePage,
  pathPrefix: string
) => {
  if (page.type === "assessment") {
    const assessmentMeta = quizMetadata();
    zip.file(`${pathPrefix}/assessment_meta.xml`, assessmentMeta);
  }
};

const addAttachments = (
  zip: JSZip,
  page: Page,
  resourcePage: ResourcePage,
  pathPrefix: string,
  files: {
    attachments: Set<string>;
  }
) => {
  if (page.attachments) {
    const resourceAttachments = page.attachments.map(
      (attachment): ResourceAttachment => {
        if (!attachment.placeholder) {
          throw new Error("Attachment must have a placeholder property");
        }
        const placeholder = attachment.placeholder;
        const [attachmentTitle, attachmentExt] = attachment.filename.split(".");
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
};

export const addPage = (
  zip: JSZip,
  page: Page,
  modulePrefix: string,
  files: {
    content: Set<string>;
    attachments: Set<string>;
    activities: Set<string>;
  },
  globalDependencies: ImsResource[],
  options: Config | undefined
) => {
  // resourcePage is the file that will be added to the zip
  const [pathPrefix, filePath, resourcePage] = packagePageForImscc(
    page,
    modulePrefix,
    files,
    globalDependencies,
    options
  );

  addSupportingFiles(zip, page, resourcePage, pathPrefix);

  // This may modify resourcePage.content before adding it to the zip
  addAttachments(zip, page, resourcePage, pathPrefix, files);

  zip.file(filePath, resourcePage.content);

  return resourcePage;
};
