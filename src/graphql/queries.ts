/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
        createdAt
        updatedAt
        owner
        profiles {
          nextToken
        }
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
      createdAt
      updatedAt
      owner
      profiles {
        items {
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
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($owner: ID!, $email: String!) {
    getProfile(owner: $owner, email: $email) {
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
          nextToken
        }
      }
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $owner: ID
    $email: ModelStringKeyConditionInput
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      owner: $owner
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
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
`;
export const profileByBusiness = /* GraphQL */ `
  query ProfileByBusiness(
    $businessID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileByBusiness(
      businessID: $businessID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
`;
