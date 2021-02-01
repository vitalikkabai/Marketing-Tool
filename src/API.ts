/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateBusinessInput = {
  id?: string | null,
  companyName: string,
  storeURLs: Array< string >,
  websiteURLs: Array< string >,
  managerID: string,
};

export type ModelBusinessConditionInput = {
  companyName?: ModelStringInput | null,
  storeURLs?: ModelStringInput | null,
  websiteURLs?: ModelStringInput | null,
  managerID?: ModelIDInput | null,
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

export type UpdateBusinessInput = {
  id: string,
  companyName?: string | null,
  storeURLs?: Array< string > | null,
  websiteURLs?: Array< string > | null,
  managerID?: string | null,
};

export type DeleteBusinessInput = {
  id?: string | null,
};

export type CreateEmployeeInput = {
  id?: string | null,
  businessID: string,
  roleTags: RoleTagsInput,
  countryCode: CountryCodeInput,
  phoneNumber: string,
};

export type RoleTagsInput = {
  sales: boolean,
  marketing: boolean,
  logistics: boolean,
  accounting: boolean,
  production: boolean,
  qualityControl: boolean,
};

export type CountryCodeInput = {
  code: string,
  label: string,
  phone: string,
};

export type ModelEmployeeConditionInput = {
  businessID?: ModelIDInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelEmployeeConditionInput | null > | null,
  or?: Array< ModelEmployeeConditionInput | null > | null,
  not?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeInput = {
  id: string,
  businessID?: string | null,
  roleTags?: RoleTagsInput | null,
  countryCode?: CountryCodeInput | null,
  phoneNumber?: string | null,
};

export type DeleteEmployeeInput = {
  id?: string | null,
};

export type CreateManagerInput = {
  id?: string | null,
};

export type ModelManagerConditionInput = {
  and?: Array< ModelManagerConditionInput | null > | null,
  or?: Array< ModelManagerConditionInput | null > | null,
  not?: ModelManagerConditionInput | null,
};

export type UpdateManagerInput = {
  id: string,
};

export type DeleteManagerInput = {
  id?: string | null,
};

export type CreateProfileInput = {
  id?: string | null,
  email: string,
  name: string,
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
  and?: Array< ModelProfileConditionInput | null > | null,
  or?: Array< ModelProfileConditionInput | null > | null,
  not?: ModelProfileConditionInput | null,
};

export type UpdateProfileInput = {
  id: string,
  email?: string | null,
  name?: string | null,
  avatar?: S3ObjectInput | null,
};

export type DeleteProfileInput = {
  id?: string | null,
};

export type CreateMessageInput = {
  id?: string | null,
  stage: Stage,
  subjectId: string,
  senderID: string,
  receiverID: string,
  content: string,
  seen: boolean,
  attachment?: S3ObjectInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export enum Stage {
  UNASSIGNED = "UNASSIGNED",
  PRODUCTS = "PRODUCTS",
  MARKET_RESEARCH = "MARKET_RESEARCH",
  BRAND_CREATION = "BRAND_CREATION",
  SALES_CHANNELS = "SALES_CHANNELS",
  CUSTOMER_SUPPORT = "CUSTOMER_SUPPORT",
  BRAND_AWARENESS = "BRAND_AWARENESS",
  SALES_STATISTICS = "SALES_STATISTICS",
  IMPROVEMENTS = "IMPROVEMENTS",
}


export type ModelMessageConditionInput = {
  stage?: ModelStageInput | null,
  subjectId?: ModelIDInput | null,
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  seen?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageConditionInput | null > | null,
  or?: Array< ModelMessageConditionInput | null > | null,
  not?: ModelMessageConditionInput | null,
};

export type ModelStageInput = {
  eq?: Stage | null,
  ne?: Stage | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateMessageInput = {
  id: string,
  stage?: Stage | null,
  subjectId?: string | null,
  senderID?: string | null,
  receiverID?: string | null,
  content?: string | null,
  seen?: boolean | null,
  attachment?: S3ObjectInput | null,
  createdAt?: string | null,
  updatedAt?: string | null,
};

export type DeleteMessageInput = {
  id?: string | null,
};

export type ModelMessageFilterInput = {
  id?: ModelIDInput | null,
  stage?: ModelStageInput | null,
  subjectId?: ModelIDInput | null,
  senderID?: ModelIDInput | null,
  receiverID?: ModelIDInput | null,
  content?: ModelStringInput | null,
  seen?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelMessageFilterInput | null > | null,
  or?: Array< ModelMessageFilterInput | null > | null,
  not?: ModelMessageFilterInput | null,
};

export type ModelMessageBySenderCompositeKeyConditionInput = {
  eq?: ModelMessageBySenderCompositeKeyInput | null,
  le?: ModelMessageBySenderCompositeKeyInput | null,
  lt?: ModelMessageBySenderCompositeKeyInput | null,
  ge?: ModelMessageBySenderCompositeKeyInput | null,
  gt?: ModelMessageBySenderCompositeKeyInput | null,
  between?: Array< ModelMessageBySenderCompositeKeyInput | null > | null,
  beginsWith?: ModelMessageBySenderCompositeKeyInput | null,
};

export type ModelMessageBySenderCompositeKeyInput = {
  subjectId?: string | null,
  stage?: Stage | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelMessageByReceiverCompositeKeyConditionInput = {
  eq?: ModelMessageByReceiverCompositeKeyInput | null,
  le?: ModelMessageByReceiverCompositeKeyInput | null,
  lt?: ModelMessageByReceiverCompositeKeyInput | null,
  ge?: ModelMessageByReceiverCompositeKeyInput | null,
  gt?: ModelMessageByReceiverCompositeKeyInput | null,
  between?: Array< ModelMessageByReceiverCompositeKeyInput | null > | null,
  beginsWith?: ModelMessageByReceiverCompositeKeyInput | null,
};

export type ModelMessageByReceiverCompositeKeyInput = {
  subjectId?: string | null,
  stage?: Stage | null,
};

export type ModelBusinessFilterInput = {
  id?: ModelIDInput | null,
  companyName?: ModelStringInput | null,
  storeURLs?: ModelStringInput | null,
  websiteURLs?: ModelStringInput | null,
  managerID?: ModelIDInput | null,
  and?: Array< ModelBusinessFilterInput | null > | null,
  or?: Array< ModelBusinessFilterInput | null > | null,
  not?: ModelBusinessFilterInput | null,
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

export type ModelEmployeeFilterInput = {
  id?: ModelIDInput | null,
  businessID?: ModelIDInput | null,
  phoneNumber?: ModelStringInput | null,
  and?: Array< ModelEmployeeFilterInput | null > | null,
  or?: Array< ModelEmployeeFilterInput | null > | null,
  not?: ModelEmployeeFilterInput | null,
};

export type ModelManagerFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelManagerFilterInput | null > | null,
  or?: Array< ModelManagerFilterInput | null > | null,
  not?: ModelManagerFilterInput | null,
};

export type ModelProfileFilterInput = {
  id?: ModelIDInput | null,
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
    companyName: string,
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
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
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
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
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type CreateEmployeeMutationVariables = {
  input: CreateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type CreateEmployeeMutation = {
  createEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateEmployeeMutationVariables = {
  input: UpdateEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type UpdateEmployeeMutation = {
  updateEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteEmployeeMutationVariables = {
  input: DeleteEmployeeInput,
  condition?: ModelEmployeeConditionInput | null,
};

export type DeleteEmployeeMutation = {
  deleteEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type CreateManagerMutationVariables = {
  input: CreateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type CreateManagerMutation = {
  createManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateManagerMutationVariables = {
  input: UpdateManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type UpdateManagerMutation = {
  updateManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteManagerMutationVariables = {
  input: DeleteManagerInput,
  condition?: ModelManagerConditionInput | null,
};

export type DeleteManagerMutation = {
  deleteManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
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
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
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
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateMessageMutationVariables = {
  input: CreateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type CreateMessageMutation = {
  createMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type UpdateMessageMutationVariables = {
  input: UpdateMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type UpdateMessageMutation = {
  updateMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type DeleteMessageMutationVariables = {
  input: DeleteMessageInput,
  condition?: ModelMessageConditionInput | null,
};

export type DeleteMessageMutation = {
  deleteMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type GetMessageQueryVariables = {
  id: string,
};

export type GetMessageQuery = {
  getMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListMessagesQueryVariables = {
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListMessagesQuery = {
  listMessages:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      stage: Stage,
      subjectId: string,
      senderID: string,
      receiverID: string,
      content: string,
      seen: boolean,
      attachment:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
      sender:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type BySenderQueryVariables = {
  senderID?: string | null,
  subjectIdStage?: ModelMessageBySenderCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type BySenderQuery = {
  bySender:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      stage: Stage,
      subjectId: string,
      senderID: string,
      receiverID: string,
      content: string,
      seen: boolean,
      attachment:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
      sender:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ByReceiverQueryVariables = {
  receiverID?: string | null,
  subjectIdStage?: ModelMessageByReceiverCompositeKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelMessageFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByReceiverQuery = {
  byReceiver:  {
    __typename: "ModelMessageConnection",
    items:  Array< {
      __typename: "Message",
      id: string,
      stage: Stage,
      subjectId: string,
      senderID: string,
      receiverID: string,
      content: string,
      seen: boolean,
      attachment:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string | null,
      updatedAt: string | null,
      sender:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
      receiver:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
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
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
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
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ByManagerAndCompanyQueryVariables = {
  managerID?: string | null,
  companyName?: ModelStringKeyConditionInput | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelBusinessFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ByManagerAndCompanyQuery = {
  byManagerAndCompany:  {
    __typename: "ModelBusinessConnection",
    items:  Array< {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetEmployeeQueryVariables = {
  id: string,
};

export type GetEmployeeQuery = {
  getEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type ListEmployeesQueryVariables = {
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEmployeesQuery = {
  listEmployees:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      businessID: string,
      roleTags:  {
        __typename: "RoleTags",
        sales: boolean,
        marketing: boolean,
        logistics: boolean,
        accounting: boolean,
        production: boolean,
        qualityControl: boolean,
      },
      countryCode:  {
        __typename: "CountryCode",
        code: string,
        label: string,
        phone: string,
      },
      phoneNumber: string,
      createdAt: string,
      updatedAt: string,
      business:  {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type EmployeeByBusinessAndNameQueryVariables = {
  businessID?: string | null,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelEmployeeFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type EmployeeByBusinessAndNameQuery = {
  employeeByBusinessAndName:  {
    __typename: "ModelEmployeeConnection",
    items:  Array< {
      __typename: "Employee",
      id: string,
      businessID: string,
      roleTags:  {
        __typename: "RoleTags",
        sales: boolean,
        marketing: boolean,
        logistics: boolean,
        accounting: boolean,
        production: boolean,
        qualityControl: boolean,
      },
      countryCode:  {
        __typename: "CountryCode",
        code: string,
        label: string,
        phone: string,
      },
      phoneNumber: string,
      createdAt: string,
      updatedAt: string,
      business:  {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListManagersQueryVariables = {
  filter?: ModelManagerFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListManagersQuery = {
  listManagers:  {
    __typename: "ModelManagerConnection",
    items:  Array< {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetManagerQueryVariables = {
  id: string,
};

export type GetManagerQuery = {
  getManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
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
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProfileQueryVariables = {
  id: string,
};

export type GetProfileQuery = {
  getProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateMessageSubscription = {
  onCreateMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateMessageSubscription = {
  onUpdateMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteMessageSubscription = {
  onDeleteMessage:  {
    __typename: "Message",
    id: string,
    stage: Stage,
    subjectId: string,
    senderID: string,
    receiverID: string,
    content: string,
    seen: boolean,
    attachment:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string | null,
    updatedAt: string | null,
    sender:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    receiver:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateBusinessSubscription = {
  onCreateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateBusinessSubscription = {
  onUpdateBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteBusinessSubscription = {
  onDeleteBusiness:  {
    __typename: "Business",
    id: string,
    companyName: string,
    storeURLs: Array< string >,
    websiteURLs: Array< string >,
    managerID: string,
    createdAt: string,
    updatedAt: string,
    owner: string | null,
    employees:  {
      __typename: "ModelEmployeeConnection",
      items:  Array< {
        __typename: "Employee",
        id: string,
        businessID: string,
        phoneNumber: string,
        createdAt: string,
        updatedAt: string,
      } | null > | null,
      nextToken: string | null,
    } | null,
    manager:  {
      __typename: "Manager",
      id: string,
      createdAt: string,
      updatedAt: string,
      businesses:  {
        __typename: "ModelBusinessConnection",
        nextToken: string | null,
      } | null,
      owner: string | null,
      profile:  {
        __typename: "Profile",
        id: string,
        email: string,
        name: string,
        createdAt: string,
        updatedAt: string,
      } | null,
    } | null,
  } | null,
};

export type OnCreateEmployeeSubscription = {
  onCreateEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateEmployeeSubscription = {
  onUpdateEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteEmployeeSubscription = {
  onDeleteEmployee:  {
    __typename: "Employee",
    id: string,
    businessID: string,
    roleTags:  {
      __typename: "RoleTags",
      sales: boolean,
      marketing: boolean,
      logistics: boolean,
      accounting: boolean,
      production: boolean,
      qualityControl: boolean,
    },
    countryCode:  {
      __typename: "CountryCode",
      code: string,
      label: string,
      phone: string,
    },
    phoneNumber: string,
    createdAt: string,
    updatedAt: string,
    business:  {
      __typename: "Business",
      id: string,
      companyName: string,
      storeURLs: Array< string >,
      websiteURLs: Array< string >,
      managerID: string,
      createdAt: string,
      updatedAt: string,
      owner: string | null,
      employees:  {
        __typename: "ModelEmployeeConnection",
        nextToken: string | null,
      } | null,
      manager:  {
        __typename: "Manager",
        id: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null,
    } | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateManagerSubscription = {
  onCreateManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnUpdateManagerSubscription = {
  onUpdateManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnDeleteManagerSubscription = {
  onDeleteManager:  {
    __typename: "Manager",
    id: string,
    createdAt: string,
    updatedAt: string,
    businesses:  {
      __typename: "ModelBusinessConnection",
      items:  Array< {
        __typename: "Business",
        id: string,
        companyName: string,
        storeURLs: Array< string >,
        websiteURLs: Array< string >,
        managerID: string,
        createdAt: string,
        updatedAt: string,
        owner: string | null,
      } | null > | null,
      nextToken: string | null,
    } | null,
    owner: string | null,
    profile:  {
      __typename: "Profile",
      id: string,
      email: string,
      name: string,
      avatar:  {
        __typename: "S3Object",
        bucket: string,
        region: string,
        key: string,
      } | null,
      createdAt: string,
      updatedAt: string,
    } | null,
  } | null,
};

export type OnCreateProfileSubscription = {
  onCreateProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateProfileSubscription = {
  onUpdateProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteProfileSubscription = {
  onDeleteProfile:  {
    __typename: "Profile",
    id: string,
    email: string,
    name: string,
    avatar:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
