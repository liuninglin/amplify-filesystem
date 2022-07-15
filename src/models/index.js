// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { EmailDelivery, Category, Document, Tag, User, TagDocument } = initSchema(schema);

export {
  EmailDelivery,
  Category,
  Document,
  Tag,
  User,
  TagDocument
};