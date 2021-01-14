/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
      ownerName
      ownerEmailAddress
      businessType
      ownerUID
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
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
        country
        city
        businessNumber
        haveExperienceSelling
        storeURLs
        haveWebsite
        websiteURLs
        ownerName
        ownerEmailAddress
        businessType
        ownerUID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
export const syncBusinesses = /* GraphQL */ `
  query SyncBusinesses(
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncBusinesses(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
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
        ownerName
        ownerEmailAddress
        businessType
        ownerUID
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
      }
      nextToken
      startedAt
    }
  }
`;
