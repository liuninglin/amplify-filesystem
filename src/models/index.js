// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Category, Document, Tag, User, TagDocument } = initSchema(schema);

export {
  Category,
  Document,
  Tag,
  User,
  TagDocument
};