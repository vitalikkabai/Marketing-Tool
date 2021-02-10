/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($receiverID: ID) {
    onCreateMessage(receiverID: $receiverID) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($sharedID: ID) {
    onUpdateMessage(sharedID: $sharedID) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($id: ID) {
    onDeleteMessage(id: $id) {
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
export const onEraseMessage = /* GraphQL */ `
  subscription OnEraseMessage {
    onEraseMessage {
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
      createdAt
      updatedAt
    }
  }
`;
