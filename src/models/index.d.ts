import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BusinessType {
  MANUFACTURER = "MANUFACTURER",
  TRADINGCOMPANY = "TRADINGCOMPANY",
  MANUFACTURERANDTRADINGCOMPANY = "MANUFACTURERANDTRADINGCOMPANY"
}



export declare class Business {
  readonly id: string;
  readonly ownerUID: string;
  readonly companyName?: string;
  readonly country?: string;
  readonly city?: string;
  readonly businessNumber?: string;
  readonly haveExperienceSelling?: boolean;
  readonly storeURLs?: (string | null)[];
  readonly haveWebsite?: boolean;
  readonly websiteURLs?: (string | null)[];
  readonly businessType?: BusinessType | keyof typeof BusinessType;
  readonly createdAt?: string;
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}