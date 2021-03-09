/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBusiness = /* GraphQL */ `
  mutation CreateBusiness(
    $input: CreateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    createBusiness(input: $input, condition: $condition) {
      id
      companyName
      storeURLs
      websiteURLs
      employees {
        items {
          id
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
        nextToken
      }
      products {
        items {
          id
          itemNumber {
            value
            createdAt
          }
          itemName {
            value
            createdAt
          }
          release
          websiteURLs {
            record
            createdAt
          }
          stage
          dimentionsCm {
            value
            createdAt
          }
          weightKg {
            value
            createdAt
          }
          tag {
            value
            createdAt
          }
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
          photos {
            key
            createdAt
            deleted
            deletedAt
          }
          videos {
            key
            createdAt
            deleted
            deletedAt
          }
          certifications {
            key
            createdAt
            deleted
            deletedAt
          }
          marketingMaterials {
            key
            createdAt
            deleted
            deletedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      manager {
        id
        businesses {
          items {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
                createdAt
                updatedAt
              }
            }
            managerID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
  }
`;
export const updateBusiness = /* GraphQL */ `
  mutation UpdateBusiness(
    $input: UpdateBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    updateBusiness(input: $input, condition: $condition) {
      id
      companyName
      storeURLs
      websiteURLs
      employees {
        items {
          id
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
        nextToken
      }
      products {
        items {
          id
          itemNumber {
            value
            createdAt
          }
          itemName {
            value
            createdAt
          }
          release
          websiteURLs {
            record
            createdAt
          }
          stage
          dimentionsCm {
            value
            createdAt
          }
          weightKg {
            value
            createdAt
          }
          tag {
            value
            createdAt
          }
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
          photos {
            key
            createdAt
            deleted
            deletedAt
          }
          videos {
            key
            createdAt
            deleted
            deletedAt
          }
          certifications {
            key
            createdAt
            deleted
            deletedAt
          }
          marketingMaterials {
            key
            createdAt
            deleted
            deletedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      manager {
        id
        businesses {
          items {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
                createdAt
                updatedAt
              }
            }
            managerID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
  }
`;
export const deleteBusiness = /* GraphQL */ `
  mutation DeleteBusiness(
    $input: DeleteBusinessInput!
    $condition: ModelBusinessConditionInput
  ) {
    deleteBusiness(input: $input, condition: $condition) {
      id
      companyName
      storeURLs
      websiteURLs
      employees {
        items {
          id
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
        nextToken
      }
      products {
        items {
          id
          itemNumber {
            value
            createdAt
          }
          itemName {
            value
            createdAt
          }
          release
          websiteURLs {
            record
            createdAt
          }
          stage
          dimentionsCm {
            value
            createdAt
          }
          weightKg {
            value
            createdAt
          }
          tag {
            value
            createdAt
          }
          business {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
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
          photos {
            key
            createdAt
            deleted
            deletedAt
          }
          videos {
            key
            createdAt
            deleted
            deletedAt
          }
          certifications {
            key
            createdAt
            deleted
            deletedAt
          }
          marketingMaterials {
            key
            createdAt
            deleted
            deletedAt
          }
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      manager {
        id
        businesses {
          items {
            id
            companyName
            storeURLs
            websiteURLs
            employees {
              items {
                id
                businessID
                phoneNumber
                createdAt
                updatedAt
              }
              nextToken
            }
            products {
              items {
                id
                release
                stage
                businessID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
            manager {
              id
              businesses {
                nextToken
              }
              createdAt
              updatedAt
              profile {
                id
                email
                name
                createdAt
                updatedAt
              }
            }
            managerID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
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
  }
`;
export const createEmployee = /* GraphQL */ `
  mutation CreateEmployee(
    $input: CreateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    createEmployee(input: $input, condition: $condition) {
      id
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
export const updateEmployee = /* GraphQL */ `
  mutation UpdateEmployee(
    $input: UpdateEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    updateEmployee(input: $input, condition: $condition) {
      id
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
export const deleteEmployee = /* GraphQL */ `
  mutation DeleteEmployee(
    $input: DeleteEmployeeInput!
    $condition: ModelEmployeeConditionInput
  ) {
    deleteEmployee(input: $input, condition: $condition) {
      id
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
export const createManager = /* GraphQL */ `
  mutation CreateManager(
    $input: CreateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    createManager(input: $input, condition: $condition) {
      id
      businesses {
        items {
          id
          companyName
          storeURLs
          websiteURLs
          employees {
            items {
              id
              business {
                id
                companyName
                storeURLs
                websiteURLs
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
                createdAt
                updatedAt
              }
            }
            nextToken
          }
          products {
            items {
              id
              itemNumber {
                value
                createdAt
              }
              itemName {
                value
                createdAt
              }
              release
              websiteURLs {
                record
                createdAt
              }
              stage
              dimentionsCm {
                value
                createdAt
              }
              weightKg {
                value
                createdAt
              }
              tag {
                value
                createdAt
              }
              business {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              businessID
              photos {
                key
                createdAt
                deleted
                deletedAt
              }
              videos {
                key
                createdAt
                deleted
                deletedAt
              }
              certifications {
                key
                createdAt
                deleted
                deletedAt
              }
              marketingMaterials {
                key
                createdAt
                deleted
                deletedAt
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          manager {
            id
            businesses {
              items {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
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
        nextToken
      }
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
export const updateManager = /* GraphQL */ `
  mutation UpdateManager(
    $input: UpdateManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    updateManager(input: $input, condition: $condition) {
      id
      businesses {
        items {
          id
          companyName
          storeURLs
          websiteURLs
          employees {
            items {
              id
              business {
                id
                companyName
                storeURLs
                websiteURLs
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
                createdAt
                updatedAt
              }
            }
            nextToken
          }
          products {
            items {
              id
              itemNumber {
                value
                createdAt
              }
              itemName {
                value
                createdAt
              }
              release
              websiteURLs {
                record
                createdAt
              }
              stage
              dimentionsCm {
                value
                createdAt
              }
              weightKg {
                value
                createdAt
              }
              tag {
                value
                createdAt
              }
              business {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              businessID
              photos {
                key
                createdAt
                deleted
                deletedAt
              }
              videos {
                key
                createdAt
                deleted
                deletedAt
              }
              certifications {
                key
                createdAt
                deleted
                deletedAt
              }
              marketingMaterials {
                key
                createdAt
                deleted
                deletedAt
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          manager {
            id
            businesses {
              items {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
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
        nextToken
      }
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
export const deleteManager = /* GraphQL */ `
  mutation DeleteManager(
    $input: DeleteManagerInput!
    $condition: ModelManagerConditionInput
  ) {
    deleteManager(input: $input, condition: $condition) {
      id
      businesses {
        items {
          id
          companyName
          storeURLs
          websiteURLs
          employees {
            items {
              id
              business {
                id
                companyName
                storeURLs
                websiteURLs
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
                createdAt
                updatedAt
              }
            }
            nextToken
          }
          products {
            items {
              id
              itemNumber {
                value
                createdAt
              }
              itemName {
                value
                createdAt
              }
              release
              websiteURLs {
                record
                createdAt
              }
              stage
              dimentionsCm {
                value
                createdAt
              }
              weightKg {
                value
                createdAt
              }
              tag {
                value
                createdAt
              }
              business {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              businessID
              photos {
                key
                createdAt
                deleted
                deletedAt
              }
              videos {
                key
                createdAt
                deleted
                deletedAt
              }
              certifications {
                key
                createdAt
                deleted
                deletedAt
              }
              marketingMaterials {
                key
                createdAt
                deleted
                deletedAt
              }
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
          manager {
            id
            businesses {
              items {
                id
                companyName
                storeURLs
                websiteURLs
                managerID
                createdAt
                updatedAt
                owner
              }
              nextToken
            }
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
        nextToken
      }
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
export const createProfile = /* GraphQL */ `
  mutation CreateProfile(
    $input: CreateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    createProfile(input: $input, condition: $condition) {
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
`;
export const updateProfile = /* GraphQL */ `
  mutation UpdateProfile(
    $input: UpdateProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    updateProfile(input: $input, condition: $condition) {
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
`;
export const deleteProfile = /* GraphQL */ `
  mutation DeleteProfile(
    $input: DeleteProfileInput!
    $condition: ModelProfileConditionInput
  ) {
    deleteProfile(input: $input, condition: $condition) {
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
`;
export const createProduct = /* GraphQL */ `
  mutation CreateProduct(
    $input: CreateProductInput!
    $condition: ModelProductConditionInput
  ) {
    createProduct(input: $input, condition: $condition) {
      id
      itemNumber {
        value
        createdAt
      }
      itemName {
        value
        createdAt
      }
      release
      websiteURLs {
        record
        createdAt
      }
      stage
      dimentionsCm {
        value
        createdAt
      }
      weightKg {
        value
        createdAt
      }
      tag {
        value
        createdAt
      }
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
      photos {
        key
        createdAt
        deleted
        deletedAt
      }
      videos {
        key
        createdAt
        deleted
        deletedAt
      }
      certifications {
        key
        createdAt
        deleted
        deletedAt
      }
      marketingMaterials {
        key
        createdAt
        deleted
        deletedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateProduct = /* GraphQL */ `
  mutation UpdateProduct(
    $input: UpdateProductInput!
    $condition: ModelProductConditionInput
  ) {
    updateProduct(input: $input, condition: $condition) {
      id
      itemNumber {
        value
        createdAt
      }
      itemName {
        value
        createdAt
      }
      release
      websiteURLs {
        record
        createdAt
      }
      stage
      dimentionsCm {
        value
        createdAt
      }
      weightKg {
        value
        createdAt
      }
      tag {
        value
        createdAt
      }
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
      photos {
        key
        createdAt
        deleted
        deletedAt
      }
      videos {
        key
        createdAt
        deleted
        deletedAt
      }
      certifications {
        key
        createdAt
        deleted
        deletedAt
      }
      marketingMaterials {
        key
        createdAt
        deleted
        deletedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteProduct = /* GraphQL */ `
  mutation DeleteProduct(
    $input: DeleteProductInput!
    $condition: ModelProductConditionInput
  ) {
    deleteProduct(input: $input, condition: $condition) {
      id
      itemNumber {
        value
        createdAt
      }
      itemName {
        value
        createdAt
      }
      release
      websiteURLs {
        record
        createdAt
      }
      stage
      dimentionsCm {
        value
        createdAt
      }
      weightKg {
        value
        createdAt
      }
      tag {
        value
        createdAt
      }
      business {
        id
        companyName
        storeURLs
        websiteURLs
        employees {
          items {
            id
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
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
          nextToken
        }
        products {
          items {
            id
            itemNumber {
              value
              createdAt
            }
            itemName {
              value
              createdAt
            }
            release
            websiteURLs {
              record
              createdAt
            }
            stage
            dimentionsCm {
              value
              createdAt
            }
            weightKg {
              value
              createdAt
            }
            tag {
              value
              createdAt
            }
            business {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            businessID
            photos {
              key
              createdAt
              deleted
              deletedAt
            }
            videos {
              key
              createdAt
              deleted
              deletedAt
            }
            certifications {
              key
              createdAt
              deleted
              deletedAt
            }
            marketingMaterials {
              key
              createdAt
              deleted
              deletedAt
            }
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        manager {
          id
          businesses {
            items {
              id
              companyName
              storeURLs
              websiteURLs
              employees {
                nextToken
              }
              products {
                nextToken
              }
              manager {
                id
                createdAt
                updatedAt
              }
              managerID
              createdAt
              updatedAt
              owner
            }
            nextToken
          }
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
      photos {
        key
        createdAt
        deleted
        deletedAt
      }
      videos {
        key
        createdAt
        deleted
        deletedAt
      }
      certifications {
        key
        createdAt
        deleted
        deletedAt
      }
      marketingMaterials {
        key
        createdAt
        deleted
        deletedAt
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      stage
      subjectID
      senderID
      receiverID
      sharedID
      content
      status
      attachment {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      stage
      subjectID
      senderID
      receiverID
      sharedID
      content
      status
      attachment {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      stage
      subjectID
      senderID
      receiverID
      sharedID
      content
      status
      attachment {
        bucket
        region
        key
      }
      createdAt
      updatedAt
    }
  }
`;
