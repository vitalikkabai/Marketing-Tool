// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Business, Profile, S3Object, RoleTags, CountryCode } = initSchema(schema);

export {
  Business,
  Profile,
  S3Object,
  RoleTags,
  CountryCode
};