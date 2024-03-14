import { ImsItem, ImsManifest, ImsOrganization, ImsResource } from "./types";

const INDENT = 2;

const indent = (text: string, indent: number = INDENT) => text.split("\n").map(line => " ".repeat(indent) + line).join("\n");

const MANIFEST_ATTRS = ` xmlns="http://www.imsglobal.org/xsd/imsccv1p3/imscp_v1p1" xmlns:lomimscc="http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest" xmlns:lom="http://ltsc.ieee.org/xsd/imsccv1p3/LOM/resource" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.imsglobal.org/xsd/imsccv1p3/imscp_v1p1 http://www.imsglobal.org/profile/cc/ccv1p3/ccv1p3_imscp_v1p2_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p3/LOM/manifest http://www.imsglobal.org/profile/cc/ccv1p3/LOM/ccv1p3_lommanifest_v1p0.xsd http://ltsc.ieee.org/xsd/imsccv1p3/LOM/resource http://www.imsglobal.org/profile/cc/ccv1p3/LOM/ccv1p3_lomresource_v1p0.xsd"`;

const manifestTemplate = ({ identifier, metadata, organizations, resources, generatorComment }: ImsManifest) => `<?xml version="1.0" encoding="UTF-8"?>
<!--${generatorComment}-->
<manifest identifier="${identifier}"${MANIFEST_ATTRS}>
${metadataTemplate(metadata)}
${organizationsTemplate(organizations)}
${resourcesTemplate(resources)}
</manifest>`;

const metadataTemplate = ({ title, language, description }: ImsManifest["metadata"]) => indent(`<metadata>
  <schema>IMS Common Cartridge</schema>
  <schemaversion>1.3.0</schemaversion>
  <lomimscc:lom>
    <lomimscc:general>
      <lomimscc:title>
        <lomimscc:string language="${language}">${title}</lomimscc:string>
      </lomimscc:title>
      <lomimscc:language>${language}</lomimscc:language>
      <lomimscc:description>
        <lomimscc:string language="${language}">${description}</lomimscc:string>
      </lomimscc:description>
    </lomimscc:general>
  </lomimscc:lom>
</metadata>`);


const organizationsTemplate = (organizations: ImsOrganization[]) => indent(`<organizations>
${organizations.map(organizationTemplate).join("\n")}
</organizations>`);

const organizationTemplate = (organization: ImsOrganization) => indent(`<organization identifier="${organization.identifier}" structure="rooted-hierarchy">
  <item identifier="root">
${indent(organization.items.map((item) => organizationItemTemplate(item)).join("\n"), INDENT * 2)}
  </item>
</organization>`);

const organizationItemTemplate = ({ identifier, title, identifierRef, items }: ImsItem) => {
  const titleTag = `<title>${title}</title>`;
  const itemsTags: string = items && items.length > 0 ? `\n${items.map((item) => organizationItemTemplate(item)).join("\n")}` : "";
  const children = "\n" + indent(`${titleTag}${itemsTags}`) + "\n";

  const idRefAttr = identifierRef ? ` identifierref="${identifierRef}"` : "";
  return `<item identifier="${identifier}"${idRefAttr}>${children}</item>`;
};

const resourcesTemplate = (resources: ImsResource[]) => indent(`<resources>
${resources.map(resourceTemplate).join("\n")}
</resources>`);

const resourceTemplate = ({ identifier, type, href, file, dependencies }: ImsResource) => {
  const hrefAttr = href ? ` href="${href}"` : "";
  const dependencyTags = dependencies && dependencies.length > 0 ? `\n${dependencies.map((dependency) => indent(`<dependency identifierref="${dependency}"/>`)).join("\n")}` : "";
  const fileTag = file ? `\n${indent(`<file href="${file.href}"/>`)}` : "";
  const template = `<resource identifier="${identifier}" type="${type}"${hrefAttr}>${fileTag}${dependencyTags}
</resource>`
  return indent(template);
};

export const manifestXml = (manifest: ImsManifest) => manifestTemplate(manifest);
