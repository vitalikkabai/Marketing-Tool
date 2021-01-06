/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAuthor = /* GraphQL */ `
  mutation CreateAuthor(
    $input: CreateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    createAuthor(input: $input, condition: $condition) {
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
export const updateAuthor = /* GraphQL */ `
  mutation UpdateAuthor(
    $input: UpdateAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    updateAuthor(input: $input, condition: $condition) {
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
export const deleteAuthor = /* GraphQL */ `
  mutation DeleteAuthor(
    $input: DeleteAuthorInput!
    $condition: ModelAuthorConditionInput
  ) {
    deleteAuthor(input: $input, condition: $condition) {
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
export const createPublisher = /* GraphQL */ `
  mutation CreatePublisher(
    $input: CreatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    createPublisher(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const updatePublisher = /* GraphQL */ `
  mutation UpdatePublisher(
    $input: UpdatePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    updatePublisher(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const deletePublisher = /* GraphQL */ `
  mutation DeletePublisher(
    $input: DeletePublisherInput!
    $condition: ModelPublisherConditionInput
  ) {
    deletePublisher(input: $input, condition: $condition) {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const createBook = /* GraphQL */ `
  mutation CreateBook(
    $input: CreateBookInput!
    $condition: ModelBookConditionInput
  ) {
    createBook(input: $input, condition: $condition) {
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
export const updateBook = /* GraphQL */ `
  mutation UpdateBook(
    $input: UpdateBookInput!
    $condition: ModelBookConditionInput
  ) {
    updateBook(input: $input, condition: $condition) {
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
export const deleteBook = /* GraphQL */ `
  mutation DeleteBook(
    $input: DeleteBookInput!
    $condition: ModelBookConditionInput
  ) {
    deleteBook(input: $input, condition: $condition) {
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
export const createCover = /* GraphQL */ `
  mutation CreateCover(
    $input: CreateCoverInput!
    $condition: ModelCoverConditionInput
  ) {
    createCover(input: $input, condition: $condition) {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const updateCover = /* GraphQL */ `
  mutation UpdateCover(
    $input: UpdateCoverInput!
    $condition: ModelCoverConditionInput
  ) {
    updateCover(input: $input, condition: $condition) {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const deleteCover = /* GraphQL */ `
  mutation DeleteCover(
    $input: DeleteCoverInput!
    $condition: ModelCoverConditionInput
  ) {
    deleteCover(input: $input, condition: $condition) {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const createAuthorBook = /* GraphQL */ `
  mutation CreateAuthorBook(
    $input: CreateAuthorBookInput!
    $condition: ModelAuthorBookConditionInput
  ) {
    createAuthorBook(input: $input, condition: $condition) {
      id
      authorID
      bookID
      createdAt
      updatedAt
      author {
        id
        Name
        createdAt
        updatedAt
      }
      book {
        id
        publisherID
        createdAt
        updatedAt
      }
    }
  }
`;
export const updateAuthorBook = /* GraphQL */ `
  mutation UpdateAuthorBook(
    $input: UpdateAuthorBookInput!
    $condition: ModelAuthorBookConditionInput
  ) {
    updateAuthorBook(input: $input, condition: $condition) {
      id
      authorID
      bookID
      createdAt
      updatedAt
      author {
        id
        Name
        createdAt
        updatedAt
      }
      book {
        id
        publisherID
        createdAt
        updatedAt
      }
    }
  }
`;
export const deleteAuthorBook = /* GraphQL */ `
  mutation DeleteAuthorBook(
    $input: DeleteAuthorBookInput!
    $condition: ModelAuthorBookConditionInput
  ) {
    deleteAuthorBook(input: $input, condition: $condition) {
      id
      authorID
      bookID
      createdAt
      updatedAt
      author {
        id
        Name
        createdAt
        updatedAt
      }
      book {
        id
        publisherID
        createdAt
        updatedAt
      }
    }
  }
`;
