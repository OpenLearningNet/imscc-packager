import { ImsResourceType } from "../../types";
import { Version } from "../versions";

export interface ImsMetadata {
  title: string;
  description: string;
  language: string;
  version?: Version;
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
  files: ImsFile[];
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
