/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusinessInput = {
  id?: string | null,
  companyName?: string | null,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs?: Array< string | null > | null,
  haveWebsite?: boolean | null,
  websiteURLs?: Array< string | null > | null,
  ownerName?: string | null,
  ownerEmailAddress?: string | null,
  businessType?: BusinessType | null,
  ownerUID?: string | null,
  _version?: number | null,
};

export enum BusinessType {
  MANUFACTURER = "MANUFACTURER",
  TRADINGCOMPANY = "TRADINGCOMPANY",
  MANUFACTURERANDTRADINGCOMPANY = "MANUFACTURERANDTRADINGCOMPANY",
}


export type ModelBusinessConditionInput = {
  companyName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  businessNumber?: ModelStringInput | null,
  haveExperienceSelling?: ModelBooleanInput | null,
  storeURLs?: ModelStringInput | null,
  haveWebsite?: ModelBooleanInput | null,
  websiteURLs?: ModelStringInput | null,
  ownerName?: ModelStringInput | null,
  ownerEmailAddress?: ModelStringInput | null,
  businessType?: ModelBusinessTypeInput | null,
  ownerUID?: ModelStringInput | null,
  and?: Array< ModelBusinessConditionInput | null > | null,
  or?: Array< ModelBusinessConditionInput | null > | null,
  not?: ModelBusinessConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelBusinessTypeInput = {
  eq?: BusinessType | null,
  ne?: BusinessType | null,
};

export type UpdateBusinessInput = {
  id: string,
  companyName?: string | null,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs?: Array< string | null > | null,
  haveWebsite?: boolean | null,
  websiteURLs?: Array< string | null > | null,
  ownerName?: string | null,
  ownerEmailAddress?: string | null,
  businessType?: BusinessType | null,
  ownerUID?: string | null,
  _version?: number | null,
};

export type DeleteBusinessInput = {
  id?: string | null,
  _version?: number | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  companyName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  businessNumber?: ModelStringInput | null,
  haveExperienceSelling?: ModelBooleanInput | null,
  storeURLs?: ModelStringInput | null,
  haveWebsite?: ModelBooleanInput | null,
  websiteURLs?: ModelStringInput | null,
  ownerName?: ModelStringInput | null,
  ownerEmailAddress?: ModelStringInput | null,
  businessType?: ModelBusinessTypeInput | null,
  ownerUID?: ModelStringInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateBusinessMutationVariables = {
  input: UpdateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type UpdateBusinessMutation = {
  updateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteBusinessMutationVariables = {
  input: DeleteBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type DeleteBusinessMutation = {
  deleteBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListBusinesssQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBusinesssQuery = {
  listBusinesss:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      companyName: string | null,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string | null > | null,
      haveWebsite: boolean | null,
      websiteURLs: Array< string | null > | null,
      ownerName: string | null,
      ownerEmailAddress: string | null,
      businessType: BusinessType | null,
      ownerUID: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type SyncBusinessesQueryVariables = {
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncBusinessesQuery = {
  syncBusinesses:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      companyName: string | null,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string | null > | null,
      haveWebsite: boolean | null,
      websiteURLs: Array< string | null > | null,
      ownerName: string | null,
      ownerEmailAddress: string | null,
      businessType: BusinessType | null,
      ownerUID: string | null,
      _version: number,
      _deleted: boolean | null,
      _lastChangedAt: number,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
    startedAt: number | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    ownerName: string | null,
    ownerEmailAddress: string | null,
    businessType: BusinessType | null,
    ownerUID: string | null,
    _version: number,
    _deleted: boolean | null,
    _lastChangedAt: number,
    createdAt: string,
    updatedAt: string,
  } | null,
};
