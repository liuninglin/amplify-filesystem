import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum FileType {
  CONFIDENTIAL = "CONFIDENTIAL",
  PUBLIC = "PUBLIC"
}



type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagDocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Tag {
  readonly id: string;
  readonly name: string;
  readonly documents?: (TagDocument | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Tag, TagMetaData>);
  static copyOf(source: Tag, mutator: (draft: MutableModel<Tag, TagMetaData>) => MutableModel<Tag, TagMetaData> | void): Tag;
}

export declare class Document {
  readonly id: string;
  readonly filename: string;
  readonly filetype?: FileType | keyof typeof FileType | null;
  readonly tags?: (TagDocument | null)[] | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Document, DocumentMetaData>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document, DocumentMetaData>) => MutableModel<Document, DocumentMetaData> | void): Document;
}

export declare class User {
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly sub: string;
  readonly location?: string | null;
  readonly last_login_time?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class TagDocument {
  readonly id: string;
  readonly tag: Tag;
  readonly document: Document;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagDocument, TagDocumentMetaData>);
  static copyOf(source: TagDocument, mutator: (draft: MutableModel<TagDocument, TagDocumentMetaData>) => MutableModel<TagDocument, TagDocumentMetaData> | void): TagDocument;
}