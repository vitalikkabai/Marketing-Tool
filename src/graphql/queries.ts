/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      stage
      subjectID
      senderID
      receiverID
      sharedID
      content
      status
      attachment {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stage
        subjectID
        senderID
        receiverID
        sharedID
        content
        status
        attachment {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getIncomingMessages = /* GraphQL */ `
  query GetIncomingMessages(
    $receiverID: ID
    $status: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getIncomingMessages(
      receiverID: $receiverID
      status: $status
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stage
        subjectID
        senderID
        receiverID
        sharedID
        content
        status
        attachment {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDialogue = /* GraphQL */ `
  query GetDialogue(
    $sharedID: ID
    $subjectIDStage: ModelMessageGetDialogueCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getDialogue(
      sharedID: $sharedID
      subjectIDStage: $subjectIDStage
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stage
        subjectID
        senderID
        receiverID
        sharedID
        content
        status
        attachment {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConversation = /* GraphQL */ `
  query GetConversation(
    $sharedID: ID
    $subjectIDStageCreatedAt: ModelMessageGetConversationCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    getConversation(
      sharedID: $sharedID
      subjectIDStageCreatedAt: $subjectIDStageCreatedAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stage
        subjectID
        senderID
        receiverID
        sharedID
        content
        status
        attachment {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!) {
    getBusiness(id: $id) {
      id
      companyName
      storeURLs
      websiteURLs
      managerID
      createdAt
      updatedAt
      owner
      employees {
        items {
          id
          businessID
          roleTags {
            sales
            marketing
            logistics
            accounting
            production
            qualityControl
          }
          countryCode {
            code
            label
            phone
          }
          phoneNumber
          createdAt
          updatedAt
          business {
            id
            companyName
            storeURLs
            websiteURLs
            managerID
            createdAt
            updatedAt
            owner
          }
          profile {
            id
            email
            name
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      manager {
        id
        createdAt
        updatedAt
        businesses {
          items {
            id
            companyName
            storeURLs
            websiteURLs
            managerID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        profile {
          id
          email
          name
          avatar {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }
    }
  }
`;
export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBusinesss(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        companyName
        storeURLs
        websiteURLs
        managerID
        createdAt
        updatedAt
        owner
        employees {
          items {
            id
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        manager {
          id
          createdAt
          updatedAt
          businesses {
            nextToken
          }
          profile {
            id
            email
            name
            createdAt
            updatedAt
          }
        }
      }
      nextToken
    }
  }
`;
export const byManagerAndCompany = /* GraphQL */ `
  query ByManagerAndCompany(
    $managerID: ID
    $companyName: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byManagerAndCompany(
      managerID: $managerID
      companyName: $companyName
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        companyName
        storeURLs
        websiteURLs
        managerID
        createdAt
        updatedAt
        owner
        employees {
          items {
            id
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        manager {
          id
          createdAt
          updatedAt
          businesses {
            nextToken
          }
          profile {
            id
            email
            name
            createdAt
            updatedAt
          }
        }
      }
      nextToken
    }
  }
`;
export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      businessID
      roleTags {
        sales
        marketing
        logistics
        accounting
        production
        qualityControl
      }
      countryCode {
        code
        label
        phone
      }
      phoneNumber
      createdAt
      updatedAt
      business {
        id
        companyName
        storeURLs
        websiteURLs
        managerID
        createdAt
        updatedAt
        owner
        employees {
          items {
            id
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
        manager {
          id
          createdAt
          updatedAt
          businesses {
            nextToken
          }
          profile {
            id
            email
            name
            createdAt
            updatedAt
          }
        }
      }
      profile {
        id
        email
        name
        avatar {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listEmployees = /* GraphQL */ `
  query ListEmployees(
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listEmployees(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        businessID
        roleTags {
          sales
          marketing
          logistics
          accounting
          production
          qualityControl
        }
        countryCode {
          code
          label
          phone
        }
        phoneNumber
        createdAt
        updatedAt
        business {
          id
          companyName
          storeURLs
          websiteURLs
          managerID
          createdAt
          updatedAt
          owner
          employees {
            nextToken
          }
          manager {
            id
            createdAt
            updatedAt
          }
        }
        profile {
          id
          email
          name
          avatar {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const employeeByBusinessAndName = /* GraphQL */ `
  query EmployeeByBusinessAndName(
    $businessID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelEmployeeFilterInput
    $limit: Int
    $nextToken: String
  ) {
    employeeByBusinessAndName(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        businessID
        roleTags {
          sales
          marketing
          logistics
          accounting
          production
          qualityControl
        }
        countryCode {
          code
          label
          phone
        }
        phoneNumber
        createdAt
        updatedAt
        business {
          id
          companyName
          storeURLs
          websiteURLs
          managerID
          createdAt
          updatedAt
          owner
          employees {
            nextToken
          }
          manager {
            id
            createdAt
            updatedAt
          }
        }
        profile {
          id
          email
          name
          avatar {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const listManagers = /* GraphQL */ `
  query ListManagers(
    $filter: ModelManagerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listManagers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
        businesses {
          items {
            id
            companyName
            storeURLs
            websiteURLs
            managerID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        profile {
          id
          email
          name
          avatar {
            bucket
            region
            key
          }
          createdAt
          updatedAt
        }
      }
      nextToken
    }
  }
`;
export const getManager = /* GraphQL */ `
  query GetManager($id: ID!) {
    getManager(id: $id) {
      id
      createdAt
      updatedAt
      businesses {
        items {
          id
          companyName
          storeURLs
          websiteURLs
          managerID
          createdAt
          updatedAt
          owner
          employees {
            nextToken
          }
          manager {
            id
            createdAt
            updatedAt
          }
        }
        nextToken
      }
      profile {
        id
        email
        name
        avatar {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        avatar {
          bucket
          region
          key
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      email
      name
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
