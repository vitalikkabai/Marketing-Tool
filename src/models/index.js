// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const BusinessType = {
  "MANUFACTURER": "MANUFACTURER",
  "TRADINGCOMPANY": "TRADINGCOMPANY",
  "MANUFACTURERANDTRADINGCOMPANY": "MANUFACTURERANDTRADINGCOMPANY"
};

const { Business } = initSchema(schema);

export {
  Business,
  BusinessType
};