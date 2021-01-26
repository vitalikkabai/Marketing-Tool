/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
