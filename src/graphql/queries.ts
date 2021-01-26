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
        country
        city
        businessNumber
        haveExperienceSelling
        storeURLs
        haveWebsite
        websiteURLs
        roleTags {
          sales
          Marketing
          Logistics
          Accounting
          Production
          QC
        }
        createdAt
        updatedAt
        owner
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
      country
      city
      businessNumber
      haveExperienceSelling
      storeURLs
      haveWebsite
      websiteURLs
      roleTags {
        sales
        Marketing
        Logistics
        Accounting
        Production
        QC
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!) {
    getProfile(id: $id) {
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
      createdAt
      updatedAt
      business {
        id
        companyName
        country
        city
        businessNumber
        haveExperienceSelling
        storeURLs
        haveWebsite
        websiteURLs
        roleTags {
          sales
          Marketing
          Logistics
          Accounting
          Production
          QC
        }
        createdAt
        updatedAt
        owner
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
        owner
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
        createdAt
        updatedAt
        business {
          id
          companyName
          country
          city
          businessNumber
          haveExperienceSelling
          storeURLs
          haveWebsite
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
export const profileByOwner = /* GraphQL */ `
  query ProfileByOwner(
    $owner: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileByOwner(
      owner: $owner
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
        createdAt
        updatedAt
        business {
          id
          companyName
          country
          city
          businessNumber
          haveExperienceSelling
          storeURLs
          haveWebsite
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
