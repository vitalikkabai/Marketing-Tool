/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusinessInput = {
  id?: string | null,
  companyName: string,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs: Array< string >,
  haveWebsite?: boolean | null,
  websiteURLs: Array< string >,
  roleTags?: RoleTagsInput | null,
};

export type RoleTagsInput = {
  Sales: boolean,
  Marketing: boolean,
  Logistics: boolean,
  Accounting: boolean,
  Production: boolean,
  QC: boolean,
};

export type ModelBusinessConditionInput = {
  companyName?: ModelStringInput | null,
  country?: ModelStringInput | null,
  city?: ModelStringInput | null,
  businessNumber?: ModelStringInput | null,
  haveExperienceSelling?: ModelBooleanInput | null,
  storeURLs?: ModelStringInput | null,
  haveWebsite?: ModelBooleanInput | null,
  websiteURLs?: ModelStringInput | null,
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

export type UpdateBusinessInput = {
  id: string,
  companyName?: string | null,
  country?: string | null,
  city?: string | null,
  businessNumber?: string | null,
  haveExperienceSelling?: boolean | null,
  storeURLs?: Array< string > | null,
  haveWebsite?: boolean | null,
  websiteURLs?: Array< string > | null,
  roleTags?: RoleTagsInput | null,
};

export type DeleteBusinessInput = {
  id?: string | null,
};

export type CreateProfileInput = {
  id?: string | null,
  owner?: string | null,
  email: string,
  name: string,
  businessID: string,
  avatar?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelProfileConditionInput = {
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  businessID?: ModelIDInput | null,
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
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

export type UpdateProfileInput = {
  id: string,
  owner?: string | null,
  email?: string | null,
  name?: string | null,
  businessID?: string | null,
  avatar?: S3ObjectInput | null,
};

export type DeleteProfileInput = {
  id?: string | null,
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
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelIDInput | null,
  email?: ModelStringInput | null,
  name?: ModelStringInput | null,
  businessID?: ModelIDInput | null,
  and?: Array< ModelProfileFilterInput | null > | null,
  or?: Array< ModelProfileFilterInput | null > | null,
  not?: ModelProfileFilterInput | null,
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
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
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
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
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
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
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
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
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
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
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
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
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
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBusinessQueryVariables = {
  id: string,
};

export type GetBusinessQuery = {
  getBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "Profile",
    id: string,
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
  } | null,
};

export type ListProfilesQueryVariables = {
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProfilesQuery = {
  listProfiles:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      owner: string | null,
      email: string,
      name: string,
      businessID: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      business:  {
        __typename: "Business",
        id: string,
        companyName: string,
        country: string | null,
        city: string | null,
        businessNumber: string | null,
        haveExperienceSelling: boolean | null,
        storeURLs: Array< string >,
        haveWebsite: boolean | null,
        websiteURLs: Array< string >,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ProfileByOwnerQueryVariables = {
  owner?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ProfileByOwnerQuery = {
  profileByOwner:  {
    __typename: "ModelProfileConnection",
    items:  Array< {
      __typename: "Profile",
      id: string,
      owner: string | null,
      email: string,
      name: string,
      businessID: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
      business:  {
        __typename: "Business",
        id: string,
        companyName: string,
        country: string | null,
        city: string | null,
        businessNumber: string | null,
        haveExperienceSelling: boolean | null,
        storeURLs: Array< string >,
        haveWebsite: boolean | null,
        websiteURLs: Array< string >,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    country: string | null,
    city: string | null,
    businessNumber: string | null,
    haveExperienceSelling: boolean | null,
    storeURLs: Array< string >,
    haveWebsite: boolean | null,
    websiteURLs: Array< string >,
    roleTags:  {
      __typename: "RoleTags",
      Sales: boolean,
      Marketing: boolean,
      Logistics: boolean,
      Accounting: boolean,
      Production: boolean,
      QC: boolean,
    } | null,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile:  {
    __typename: "Profile",
    id: string,
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile:  {
    __typename: "Profile",
    id: string,
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile:  {
    __typename: "Profile",
    id: string,
    owner: string | null,
    email: string,
    name: string,
    businessID: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      country: string | null,
      city: string | null,
      businessNumber: string | null,
      haveExperienceSelling: boolean | null,
      storeURLs: Array< string >,
      haveWebsite: boolean | null,
      websiteURLs: Array< string >,
      roleTags:  {
        __typename: "RoleTags",
        Sales: boolean,
        Marketing: boolean,
        Logistics: boolean,
        Accounting: boolean,
        Production: boolean,
        QC: boolean,
      } | null,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
    } | null,
  } | null,
};
