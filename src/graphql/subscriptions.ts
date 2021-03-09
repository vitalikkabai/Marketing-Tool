/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($receiverID: ID) {
    onCreateMessage(receiverID: $receiverID) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($senderID: ID) {
    onUpdateMessage(senderID: $senderID) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($receiverID: ID) {
    onDeleteMessage(receiverID: $receiverID) {
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
export const onCreateBusiness = /* GraphQL */ `
  subscription OnCreateBusiness {
    onCreateBusiness {
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
export const onUpdateBusiness = /* GraphQL */ `
  subscription OnUpdateBusiness {
    onUpdateBusiness {
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
export const onDeleteBusiness = /* GraphQL */ `
  subscription OnDeleteBusiness {
    onDeleteBusiness {
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
export const onCreateEmployee = /* GraphQL */ `
  subscription OnCreateEmployee {
    onCreateEmployee {
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
export const onUpdateEmployee = /* GraphQL */ `
  subscription OnUpdateEmployee {
    onUpdateEmployee {
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
export const onDeleteEmployee = /* GraphQL */ `
  subscription OnDeleteEmployee {
    onDeleteEmployee {
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
export const onCreateManager = /* GraphQL */ `
  subscription OnCreateManager {
    onCreateManager {
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
export const onUpdateManager = /* GraphQL */ `
  subscription OnUpdateManager {
    onUpdateManager {
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
export const onDeleteManager = /* GraphQL */ `
  subscription OnDeleteManager {
    onDeleteManager {
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
export const onCreateProduct = /* GraphQL */ `
  subscription OnCreateProduct {
    onCreateProduct {
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
export const onUpdateProduct = /* GraphQL */ `
  subscription OnUpdateProduct {
    onUpdateProduct {
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
export const onDeleteProduct = /* GraphQL */ `
  subscription OnDeleteProduct {
    onDeleteProduct {
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
export const onCreateProfile = /* GraphQL */ `
  subscription OnCreateProfile {
    onCreateProfile {
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
export const onUpdateProfile = /* GraphQL */ `
  subscription OnUpdateProfile {
    onUpdateProfile {
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
export const onDeleteProfile = /* GraphQL */ `
  subscription OnDeleteProfile {
    onDeleteProfile {
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
