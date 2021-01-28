// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Business, Profile, RoleTags, S3Object } = initSchema(schema);

export {
  Business,
  Profile,
  RoleTags,
  S3Object
};