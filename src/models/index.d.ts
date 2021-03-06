import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type EmailDeliveryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type CategoryMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type DocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TagDocumentMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class EmailDelivery {
  readonly id: string;
  readonly receivers?: string | null;
  readonly subject?: string | null;
  readonly html_body?: string | null;
  readonly text_body?: string | null;
  readonly sender?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<EmailDelivery, EmailDeliveryMetaData>);
  static copyOf(source: EmailDelivery, mutator: (draft: MutableModel<EmailDelivery, EmailDeliveryMetaData>) => MutableModel<EmailDelivery, EmailDeliveryMetaData> | void): EmailDelivery;
}

export declare class Category {
  readonly id: string;
  readonly name: string;
  readonly Documents?: (Document | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Category, CategoryMetaData>);
  static copyOf(source: Category, mutator: (draft: MutableModel<Category, CategoryMetaData>) => MutableModel<Category, CategoryMetaData> | void): Category;
}

export declare class Document {
  readonly id: string;
  readonly filename: string;
  readonly tags?: (TagDocument | null)[] | null;
  readonly filetype: string;
  readonly description?: string | null;
  readonly categoryID: string;
  readonly name: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Document, DocumentMetaData>);
  static copyOf(source: Document, mutator: (draft: MutableModel<Document, DocumentMetaData>) => MutableModel<Document, DocumentMetaData> | void): Document;
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
  readonly document: Document;
  readonly tag: Tag;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<TagDocument, TagDocumentMetaData>);
  static copyOf(source: TagDocument, mutator: (draft: MutableModel<TagDocument, TagDocumentMetaData>) => MutableModel<TagDocument, TagDocumentMetaData> | void): TagDocument;
}