import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BusinessType {
  MANUFACTURER = "MANUFACTURER",
  TRADINGCOMPANY = "TRADINGCOMPANY",
  MANUFACTURERANDTRADINGCOMPANY = "MANUFACTURERANDTRADINGCOMPANY"
}

export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class Business {
  readonly id: string;
  readonly companyName: string;
  readonly country?: string;
  readonly city?: string;
  readonly businessNumber?: string;
  readonly haveExperienceSelling?: boolean;
  readonly storeURLs?: (string | null)[];
  readonly haveWebsite?: boolean;
  readonly websiteURLs?: (string | null)[];
  readonly businessType?: BusinessType | keyof typeof BusinessType;
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

export declare class Profile {
  readonly id: string;
  readonly owner?: string;
  readonly email: string;
  readonly name: string;
  readonly business?: Business;
  readonly businessID: string;
  readonly avatar?: S3Object;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}