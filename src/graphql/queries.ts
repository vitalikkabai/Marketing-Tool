/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
