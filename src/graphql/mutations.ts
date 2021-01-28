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
      createdAt
      updatedAt
      owner
      profiles {
        items {
          id
          owner
          email
          name
          businessID
          avatar {
            bucket
            region
            key
          }
          roleTags {
            Sales
            Marketing
            Logistics
            Accounting
            Production
            QC
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
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
      createdAt
      updatedAt
      owner
      profiles {
        items {
          id
          owner
          email
          name
          businessID
          avatar {
            bucket
            region
            key
          }
          roleTags {
            Sales
            Marketing
            Logistics
            Accounting
            Production
            QC
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
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
      createdAt
      updatedAt
      owner
      profiles {
        items {
          id
          owner
          email
          name
          businessID
          avatar {
            bucket
            region
            key
          }
          roleTags {
            Sales
            Marketing
            Logistics
            Accounting
            Production
            QC
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
            createdAt
            updatedAt
            owner
          }
        }
        nextToken
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
      owner
      email
      name
      businessID
      avatar {
        bucket
        region
        key
      }
      roleTags {
        Sales
        Marketing
        Logistics
        Accounting
        Production
        QC
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
        createdAt
        updatedAt
        owner
        profiles {
          items {
            id
            owner
            email
            name
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
      }
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
      owner
      email
      name
      businessID
      avatar {
        bucket
        region
        key
      }
      roleTags {
        Sales
        Marketing
        Logistics
        Accounting
        Production
        QC
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
        createdAt
        updatedAt
        owner
        profiles {
          items {
            id
            owner
            email
            name
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
      }
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
      owner
      email
      name
      businessID
      avatar {
        bucket
        region
        key
      }
      roleTags {
        Sales
        Marketing
        Logistics
        Accounting
        Production
        QC
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
        createdAt
        updatedAt
        owner
        profiles {
          items {
            id
            owner
            email
            name
            businessID
            phoneNumber
            createdAt
            updatedAt
          }
          nextToken
        }
      }
    }
  }
`;
