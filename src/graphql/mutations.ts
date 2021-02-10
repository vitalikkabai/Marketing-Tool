/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
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
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
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
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
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
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
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
export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
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
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
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
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
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
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
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
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
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
