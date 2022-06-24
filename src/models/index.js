// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { User, Document, Category } = initSchema(schema);

export {
  User,
  Document,
  Category
};