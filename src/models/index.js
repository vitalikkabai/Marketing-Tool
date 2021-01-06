// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Author, AuthorBook, Book, Cover, Publisher } = initSchema(schema);

export {
  Author,
  AuthorBook,
  Book,
  Cover,
  Publisher
};