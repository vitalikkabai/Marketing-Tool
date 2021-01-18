/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusinessInput = {
  id?: string | null,
  ownerUID: string,
  companyName?: string | null,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs?: Array< string | null > | null,
  haveWebsite?: boolean | null,
  websiteURLs?: Array< string | null > | null,
  businessType?: BusinessType | null,
  createdAt?: string | null,
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
  businessType?: ModelBusinessTypeInput | null,
  createdAt?: ModelStringInput | null,
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
  ownerUID: string,
  companyName?: string | null,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs?: Array< string | null > | null,
  haveWebsite?: boolean | null,
  websiteURLs?: Array< string | null > | null,
  businessType?: BusinessType | null,
  createdAt?: string | null,
};

export type DeleteBusinessInput = {
  id: string,
  ownerUID: string,
};

export type ModelStringKeyConditionInput = {
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  ownerUID?: ModelStringInput | null,
  companyName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  businessNumber?: ModelStringInput | null,
  haveExperienceSelling?: ModelBooleanInput | null,
  storeURLs?: ModelStringInput | null,
  haveWebsite?: ModelBooleanInput | null,
  websiteURLs?: ModelStringInput | null,
  businessType?: ModelBusinessTypeInput | null,
  createdAt?: ModelStringInput | null,
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

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type CreateBusinessMutationVariables = {
  input: CreateBusinessInput,
  condition?: ModelBusinessConditionInput | null,
};

export type CreateBusinessMutation = {
  createBusiness:  {
    __typename: "Business",
    id: string,
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
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
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
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
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
  ownerUID: string,
};

export type GetBusinessQuery = {
  getBusiness:  {
    __typename: "Business",
    id: string,
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListBusinesssQueryVariables = {
  id?: string | null,
  ownerUID?: ModelStringKeyConditionInput | null,
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListBusinesssQuery = {
  listBusinesss:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      ownerUID: string,
      companyName: string | null,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string | null > | null,
      haveWebsite: boolean | null,
      websiteURLs: Array< string | null > | null,
      businessType: BusinessType | null,
      createdAt: string | null,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness:  {
    __typename: "Business",
    id: string,
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness:  {
    __typename: "Business",
    id: string,
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness:  {
    __typename: "Business",
    id: string,
    ownerUID: string,
    companyName: string | null,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string | null > | null,
    haveWebsite: boolean | null,
    websiteURLs: Array< string | null > | null,
    businessType: BusinessType | null,
    createdAt: string | null,
    updatedAt: string,
    owner: string | null,
  } | null,
};
