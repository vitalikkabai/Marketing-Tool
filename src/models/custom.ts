

export const profileByOwnerWithBusiness = /* GraphQL */ `
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
        businessTypes {
        sales
        Marketing
        Logistics
        Accounting
        Production
        QC
      }
        _version
        _deleted
        _lastChangedAt
        createdAt
        updatedAt
        owner
      }
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