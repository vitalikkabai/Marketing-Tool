// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BusinessType = {
  "MANUFACTURER": "MANUFACTURER",
  "TRADINGCOMPANY": "TRADINGCOMPANY",
  "MANUFACTURERANDTRADINGCOMPANY": "MANUFACTURERANDTRADINGCOMPANY"
};

const { Business, Author, AuthorBook, Book, Cover, Publisher } = initSchema(schema);

export {
  Business,
  Author,
  AuthorBook,
  Book,
  Cover,
  Publisher,
  BusinessType
};