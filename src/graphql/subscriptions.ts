/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
