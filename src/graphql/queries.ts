/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const listAuthors = /* GraphQL */ `
  query ListAuthors(
    $filter: ModelAuthorFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAuthors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        Name
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getAuthor = /* GraphQL */ `
  query GetAuthor($id: ID!) {
    getAuthor(id: $id) {
      id
      Name
      createdAt
      updatedAt
      AuthorBooks {
        nextToken
      }
    }
  }
`;
export const getPublisher = /* GraphQL */ `
  query GetPublisher($id: ID!) {
    getPublisher(id: $id) {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const listPublishers = /* GraphQL */ `
  query ListPublishers(
    $filter: ModelPublisherFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPublishers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const listBooks = /* GraphQL */ `
  query ListBooks(
    $filter: ModelBookFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        publisherID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getBook = /* GraphQL */ `
  query GetBook($id: ID!) {
    getBook(id: $id) {
      id
      publisherID
      createdAt
      updatedAt
      Cover {
        id
        PaintingDescription
        createdAt
        updatedAt
      }
      authors {
        nextToken
      }
    }
  }
`;
export const listCovers = /* GraphQL */ `
  query ListCovers(
    $filter: ModelCoverFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCovers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        PaintingDescription
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCover = /* GraphQL */ `
  query GetCover($id: ID!) {
    getCover(id: $id) {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
