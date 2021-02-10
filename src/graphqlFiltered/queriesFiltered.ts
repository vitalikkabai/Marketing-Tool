export const getEmployee = /* GraphQL */ `
  query GetEmployee($id: ID!) {
    getEmployee(id: $id) {
      id
      business {
        id
        companyName
        storeURLs
        websiteURLs
        manager {
          id
          createdAt
          updatedAt
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
        managerID
        createdAt
        updatedAt
        owner
      }
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