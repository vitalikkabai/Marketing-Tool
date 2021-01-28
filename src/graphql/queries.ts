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
          id
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
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
      id
      email
      name
      businessID
      avatar {
        bucket
        region
        key
      }
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
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
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
        id
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
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
          createdAt
          updatedAt
          owner
        }
      }
      nextToken
    }
  }
`;
