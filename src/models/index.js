// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const FileType = {
  "CONFIDENTIAL": "CONFIDENTIAL",
  "PUBLIC": "PUBLIC"
};

const { Tag, Document, User, TagDocument } = initSchema(schema);

export {
  Tag,
  Document,
  User,
  TagDocument,
  FileType
};