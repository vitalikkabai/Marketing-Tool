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

export type CreateProfileInput = {
  id: string,
  email: string,
  name?: string | null,
  avatar?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelProfileConditionInput = {
  name?: ModelStringInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
  id: string,
  email: string,
  name?: string | null,
  avatar?: S3ObjectInput | null,
};

export type DeleteProfileInput = {
  id: string,
  email: string,
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


export type ModelProfileFilterInput = {
  id?: ModelStringInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
};

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

export type CreateProfileMutationVariables = {
  input: CreateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type CreateProfileMutation = {
  createProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type UpdateProfileMutationVariables = {
  input: UpdateProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type UpdateProfileMutation = {
  updateProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type DeleteProfileMutationVariables = {
  input: DeleteProfileInput,
  condition?: ModelProfileConditionInput | null,
};

export type DeleteProfileMutation = {
  deleteProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
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

export type GetProfileQueryVariables = {
  id: string,
  email: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  id?: string | null,
  email?: ModelStringKeyConditionInput | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListProfilesQuery = {
  listProfiles:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      email: string,
      name: string | null,
      createdAt: string,
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

export type OnCreateProfileSubscription = {
  onCreateProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string | null,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};
