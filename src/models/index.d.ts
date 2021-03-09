import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";



export declare class S3Object {
  readonly bucket: string;
  readonly region: string;
  readonly key: string;
  constructor(init: ModelInit<S3Object>);
}

export declare class RoleTags {
  readonly sales: boolean;
  readonly marketing: boolean;
  readonly logistics: boolean;
  readonly accounting: boolean;
  readonly production: boolean;
  readonly qualityControl: boolean;
  constructor(init: ModelInit<RoleTags>);
}

export declare class CountryCode {
  readonly code: string;
  readonly label: string;
  readonly phone: string;
  constructor(init: ModelInit<CountryCode>);
}

export declare class Business {
  readonly id: string;
  readonly companyName: string;
  readonly storeURLs: string[];
  readonly websiteURLs: string[];
  readonly profiles?: (Profile | null)[];
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

export declare class Profile {
  readonly id: string;
  readonly email: string;
  readonly name: string;
  readonly business?: Business;
  readonly avatar?: S3Object;
  readonly roleTags: RoleTags;
  readonly countryCode: CountryCode;
  readonly phoneNumber: string;
  constructor(init: ModelInit<Profile>);
  static copyOf(source: Profile, mutator: (draft: MutableModel<Profile>) => MutableModel<Profile> | void): Profile;
}