// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BusinessType = {
  "MANUFACTURER": "MANUFACTURER",
  "TRADINGCOMPANY": "TRADINGCOMPANY",
  "MANUFACTURERANDTRADINGCOMPANY": "MANUFACTURERANDTRADINGCOMPANY"
};

const { Business, Profile, S3Object } = initSchema(schema);

export {
  Business,
  Profile,
  BusinessType,
  S3Object
};