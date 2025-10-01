import { escapeForXml } from "../../common";
import { DEFAULT_VERSION, manifest_attributes_for_version } from "../versions";
import { ImsItem, ImsManifest, ImsOrganization, ImsResource } from "./types";

const INDENT = 2;

const indent = (text: string, indent: number = INDENT) =>
  text
    .split("\n")
    .map((line) => " ".repeat(indent) + line)
    .join("\n");

const manifestTemplate = ({
  identifier,
  metadata,
  organizations,
  resources,
  generatorComment,
}: ImsManifest) => `<?xml version="1.0" encoding="UTF-8"?>
<!--${generatorComment}-->
<manifest identifier="${identifier}" ${manifest_attributes_for_version(
  metadata.version
)}>
${metadataTemplate(metadata)}
${organizationsTemplate(organizations)}
${resourcesTemplate(resources)}
</manifest>`;

const metadataTemplate = ({
  title,
  language,
  description,
  version = DEFAULT_VERSION,
}: ImsManifest["metadata"]) =>
  indent(`<metadata>
  <schema>IMS Common Cartridge</schema>
  <schemaversion>${version}</schemaversion>
  <lomimscc:lom>
    <lomimscc:general>
      <lomimscc:title>
        <lomimscc:string language="${language}">${escapeForXml(
    title
  )}</lomimscc:string>
      </lomimscc:title>
      <lomimscc:language>${language}</lomimscc:language>
      <lomimscc:description>
        <lomimscc:string language="${language}">${escapeForXml(
    description
  )}</lomimscc:string>
      </lomimscc:description>
    </lomimscc:general>
  </lomimscc:lom>
</metadata>`);

const organizationsTemplate = (organizations: ImsOrganization[]) =>
  indent(`<organizations>
${organizations.map(organizationTemplate).join("\n")}
</organizations>`);

const organizationTemplate = (organization: ImsOrganization) =>
  indent(`<organization identifier="${
    organization.identifier
  }" structure="rooted-hierarchy">
  <item identifier="root">
${indent(
  organization.items.map((item) => organizationItemTemplate(item)).join("\n"),
  INDENT * 2
)}
  </item>
</organization>`);

const organizationItemTemplate = ({
  identifier,
  title,
  identifierRef,
  items,
}: ImsItem) => {
  const titleTag = `<title>${escapeForXml(title)}</title>`;
  const itemsTags: string =
    items && items.length > 0
      ? `\n${items.map((item) => organizationItemTemplate(item)).join("\n")}`
      : "";
  const children = "\n" + indent(`${titleTag}${itemsTags}`) + "\n";

  const idRefAttr = identifierRef ? ` identifierref="${identifierRef}"` : "";
  return `<item identifier="${identifier}"${idRefAttr}>${children}</item>`;
};

const resourcesTemplate = (resources: ImsResource[]) =>
  indent(`<resources>
${resources.map(resourceTemplate).join("\n")}
</resources>`);

const resourceTemplate = ({
  identifier,
  type,
  href,
  files,
  dependencies,
}: ImsResource) => {
  const hrefAttr = href ? ` href="${href}"` : "";
  const dependencyTags =
    dependencies && dependencies.length > 0
      ? `\n${dependencies
          .map((dependency) =>
            indent(`<dependency identifierref="${dependency}"/>`)
          )
          .join("\n")}`
      : "";

  const fileTags =
    files && files.length > 0
      ? `\n${files
          .map((file) => indent(`<file href="${file.href}"/>`))
          .join("\n")}`
      : "";
  const template = `<resource identifier="${identifier}" type="${type}"${hrefAttr}>${fileTags}${dependencyTags}
</resource>`;
  return indent(template);
};

export const manifestXml = (manifest: ImsManifest) =>
  manifestTemplate(manifest);
