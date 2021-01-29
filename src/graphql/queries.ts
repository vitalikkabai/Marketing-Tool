/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getConversation = /* GraphQL */ `
  query GetConversation($id: ID!) {
    getConversation(id: $id) {
      id
      stage
      subjectId
      initiatedProfileID
      repliedProfileID
      messages {
        items {
          id
          conversationID
          owner
          content
          seen
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
      initiatedProfile {
        id
        email
        name
        avatar {
          bucket
          region
          key
        }
        initiatedConversations {
          nextToken
        }
        repliedConversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      repliedProfile {
        id
        email
        name
        avatar {
          bucket
          region
          key
        }
        initiatedConversations {
          nextToken
        }
        repliedConversations {
          nextToken
        }
        createdAt
        updatedAt
      }
      owner
    }
  }
`;
export const listConversations = /* GraphQL */ `
  query ListConversations(
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConversations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        stage
        subjectId
        initiatedProfileID
        repliedProfileID
        messages {
          nextToken
        }
        createdAt
        updatedAt
        initiatedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        repliedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
      id
      conversationID
      owner
      content
      seen
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
        conversationID
        owner
        content
        seen
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
export const byInitiatedProfile = /* GraphQL */ `
  query ByInitiatedProfile(
    $initiatedProfileID: ID
    $subjectIdStage: ModelConversationByInitiatedProfileCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byInitiatedProfile(
      initiatedProfileID: $initiatedProfileID
      subjectIdStage: $subjectIdStage
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stage
        subjectId
        initiatedProfileID
        repliedProfileID
        messages {
          nextToken
        }
        createdAt
        updatedAt
        initiatedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        repliedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const byRepliedProfile = /* GraphQL */ `
  query ByRepliedProfile(
    $repliedProfileID: ID
    $subjectIdStage: ModelConversationByRepliedProfileCompositeKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelConversationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byRepliedProfile(
      repliedProfileID: $repliedProfileID
      subjectIdStage: $subjectIdStage
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        stage
        subjectId
        initiatedProfileID
        repliedProfileID
        messages {
          nextToken
        }
        createdAt
        updatedAt
        initiatedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        repliedProfile {
          id
          email
          name
          createdAt
          updatedAt
        }
        owner
      }
      nextToken
    }
  }
`;
export const byConversationAndContent = /* GraphQL */ `
  query ByConversationAndContent(
    $conversationID: ID
    $content: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    byConversationAndContent(
      conversationID: $conversationID
      content: $content
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        conversationID
        owner
        content
        seen
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
        initiatedConversations {
          nextToken
        }
        repliedConversations {
          nextToken
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
        initiatedConversations {
          nextToken
        }
        repliedConversations {
          nextToken
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
        initiatedConversations {
          nextToken
        }
        repliedConversations {
          nextToken
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
      initiatedConversations {
        items {
          id
          stage
          subjectId
          initiatedProfileID
          repliedProfileID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      repliedConversations {
        items {
          id
          stage
          subjectId
          initiatedProfileID
          repliedProfileID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
