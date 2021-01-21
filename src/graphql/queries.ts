/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listBusinesss = /* GraphQL */ `
  query ListBusinesss(
    $id: ID
    $companyName: ModelStringKeyConditionInput
    $filter: ModelBusinessFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listBusinesss(
      id: $id
      companyName: $companyName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
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
        businessType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getBusiness = /* GraphQL */ `
  query GetBusiness($id: ID!, $companyName: String!) {
    getBusiness(id: $id, companyName: $companyName) {
      id
      companyName
      country
      city
      businessNumber
      haveExperienceSelling
      storeURLs
      haveWebsite
      websiteURLs
      businessType
      _version
      _deleted
      _lastChangedAt
      createdAt
      updatedAt
      owner
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
        businessType
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const getProfile = /* GraphQL */ `
  query GetProfile($id: ID!, $email: String!, $name: String!) {
    getProfile(id: $id, email: $email, name: $name) {
      id
      ownerUID
      email
      name
      businessID
      avatar {
        bucket
        region
        key
      }
      _version
      _deleted
      _lastChangedAt
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
        businessType
        _version
        _deleted
        _lastChangedAt
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
    $id: ID
    $emailName: ModelProfilePrimaryCompositeKeyConditionInput
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listProfiles(
      id: $id
      emailName: $emailName
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        ownerUID
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
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
          businessType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const profileByOwnerUid = /* GraphQL */ `
  query ProfileByOwnerUid(
    $ownerUID: ID
    $sortDirection: ModelSortDirection
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
  ) {
    profileByOwnerUID(
      ownerUID: $ownerUID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        ownerUID
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
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
          businessType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
export const syncProfiles = /* GraphQL */ `
  query SyncProfiles(
    $filter: ModelProfileFilterInput
    $limit: Int
    $nextToken: String
    $lastSync: AWSTimestamp
  ) {
    syncProfiles(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      lastSync: $lastSync
    ) {
      items {
        id
        ownerUID
        email
        name
        businessID
        avatar {
          bucket
          region
          key
        }
        _version
        _deleted
        _lastChangedAt
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
          businessType
          _version
          _deleted
          _lastChangedAt
          createdAt
          updatedAt
          owner
        }
        owner
      }
      nextToken
      startedAt
    }
  }
`;
