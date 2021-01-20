/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $id: ID
    $ownerUID: ModelStringKeyConditionInput
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBusinesss(
      id: $id
      ownerUID: $ownerUID
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ownerUID
        companyName
        country
        city
        businessNumber
        haveExperienceSelling
        storeURLs
        haveWebsite
        websiteURLs
        businessType
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!, $ownerUID: String!) {
    getBusiness(id: $id, ownerUID: $ownerUID) {
      id
      ownerUID
      companyName
      country
      city
      businessNumber
      haveExperienceSelling
      storeURLs
      haveWebsite
      websiteURLs
      businessType
      createdAt
      updatedAt
      owner
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($ownerUID: ID!, $email: String!) {
    getProfile(ownerUID: $ownerUID, email: $email) {
      ownerUID
      email
      name
      avatar {
        bucket
        region
        key
      }
      createdAt
      updatedAt
      business {
        id
        ownerUID
        companyName
        country
        city
        businessNumber
        haveExperienceSelling
        storeURLs
        haveWebsite
        websiteURLs
        businessType
        createdAt
        updatedAt
        owner
      }
      owner
    }
  }
`;
export const listProfiles = /* GraphQL */ `
  query ListProfiles(
    $ownerUID: ID
    $email: ModelStringKeyConditionInput
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      ownerUID: $ownerUID
      email: $email
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        ownerUID
        email
        name
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
