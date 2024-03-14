export interface ImsMetadata {
  title: string;
  description: string;
  language: string;
}

export interface ImsOrganization {
  identifier: string;
  items: ImsItem[];
}

export interface ImsItem {
  identifier: string;
  title: string;
  identifierRef?: string;
  items?: ImsItem[];
}

export interface ImsResource {
  type: ImsResourceType;
  identifier: string;
  file: ImsFile;
  href?: string;
  dependencies?: string[];
}

export interface ImsFile {
  href: string;
}

export interface ImsManifest {
  generatorComment: string;
  identifier: string;
  metadata: ImsMetadata;
  organizations: ImsOrganization[];
  resources: ImsResource[];
}

export type ImsResourceType = "webcontent" | "imswl_xmlv1p1" | "imsdt_xmlv1p1" | "imsqti_xmlv1p2/imscc_xmlv1p1/assessment";
