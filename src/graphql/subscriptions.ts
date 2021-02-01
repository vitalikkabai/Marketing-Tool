/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateConversation = /* GraphQL */ `
  subscription OnCreateConversation {
    onCreateConversation {
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
export const onUpdateConversation = /* GraphQL */ `
  subscription OnUpdateConversation {
    onUpdateConversation {
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
export const onDeleteConversation = /* GraphQL */ `
  subscription OnDeleteConversation {
    onDeleteConversation {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage {
    onCreateMessage {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage {
    onUpdateMessage {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage {
    onDeleteMessage {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
