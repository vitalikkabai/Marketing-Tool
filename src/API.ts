/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateAuthorInput = {
  id?: string | null,
  Name?: string | null,
};

export type ModelAuthorConditionInput = {
  Name?: ModelStringInput | null,
  and?: Array< ModelAuthorConditionInput | null > | null,
  or?: Array< ModelAuthorConditionInput | null > | null,
  not?: ModelAuthorConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type UpdateAuthorInput = {
  id: string,
  Name?: string | null,
};

export type DeleteAuthorInput = {
  id?: string | null,
};

export type CreatePublisherInput = {
  id?: string | null,
};

export type ModelPublisherConditionInput = {
  and?: Array< ModelPublisherConditionInput | null > | null,
  or?: Array< ModelPublisherConditionInput | null > | null,
  not?: ModelPublisherConditionInput | null,
};

export type UpdatePublisherInput = {
  id: string,
};

export type DeletePublisherInput = {
  id?: string | null,
};

export type CreateBookInput = {
  id?: string | null,
  publisherID: string,
  bookCoverId?: string | null,
};

export type ModelBookConditionInput = {
  publisherID?: ModelIDInput | null,
  and?: Array< ModelBookConditionInput | null > | null,
  or?: Array< ModelBookConditionInput | null > | null,
  not?: ModelBookConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateBookInput = {
  id: string,
  publisherID?: string | null,
  bookCoverId?: string | null,
};

export type DeleteBookInput = {
  id?: string | null,
};

export type CreateCoverInput = {
  id?: string | null,
  PaintingDescription?: string | null,
};

export type ModelCoverConditionInput = {
  PaintingDescription?: ModelStringInput | null,
  and?: Array< ModelCoverConditionInput | null > | null,
  or?: Array< ModelCoverConditionInput | null > | null,
  not?: ModelCoverConditionInput | null,
};

export type UpdateCoverInput = {
  id: string,
  PaintingDescription?: string | null,
};

export type DeleteCoverInput = {
  id?: string | null,
};

export type CreateAuthorBookInput = {
  id?: string | null,
  authorID: string,
  bookID: string,
};

export type ModelAuthorBookConditionInput = {
  authorID?: ModelIDInput | null,
  bookID?: ModelIDInput | null,
  and?: Array< ModelAuthorBookConditionInput | null > | null,
  or?: Array< ModelAuthorBookConditionInput | null > | null,
  not?: ModelAuthorBookConditionInput | null,
};

export type UpdateAuthorBookInput = {
  id: string,
  authorID?: string | null,
  bookID?: string | null,
};

export type DeleteAuthorBookInput = {
  id?: string | null,
};

export type ModelAuthorFilterInput = {
  id?: ModelIDInput | null,
  Name?: ModelStringInput | null,
  and?: Array< ModelAuthorFilterInput | null > | null,
  or?: Array< ModelAuthorFilterInput | null > | null,
  not?: ModelAuthorFilterInput | null,
};

export type ModelPublisherFilterInput = {
  id?: ModelIDInput | null,
  and?: Array< ModelPublisherFilterInput | null > | null,
  or?: Array< ModelPublisherFilterInput | null > | null,
  not?: ModelPublisherFilterInput | null,
};

export type ModelBookFilterInput = {
  id?: ModelIDInput | null,
  publisherID?: ModelIDInput | null,
  and?: Array< ModelBookFilterInput | null > | null,
  or?: Array< ModelBookFilterInput | null > | null,
  not?: ModelBookFilterInput | null,
};

export type ModelCoverFilterInput = {
  id?: ModelIDInput | null,
  PaintingDescription?: ModelStringInput | null,
  and?: Array< ModelCoverFilterInput | null > | null,
  or?: Array< ModelCoverFilterInput | null > | null,
  not?: ModelCoverFilterInput | null,
};

export type CreateAuthorMutationVariables = {
  input: CreateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type CreateAuthorMutation = {
  createAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateAuthorMutationVariables = {
  input: UpdateAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type UpdateAuthorMutation = {
  updateAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteAuthorMutationVariables = {
  input: DeleteAuthorInput,
  condition?: ModelAuthorConditionInput | null,
};

export type DeleteAuthorMutation = {
  deleteAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreatePublisherMutationVariables = {
  input: CreatePublisherInput,
  condition?: ModelPublisherConditionInput | null,
};

export type CreatePublisherMutation = {
  createPublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdatePublisherMutationVariables = {
  input: UpdatePublisherInput,
  condition?: ModelPublisherConditionInput | null,
};

export type UpdatePublisherMutation = {
  updatePublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeletePublisherMutationVariables = {
  input: DeletePublisherInput,
  condition?: ModelPublisherConditionInput | null,
};

export type DeletePublisherMutation = {
  deletePublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateBookMutationVariables = {
  input: CreateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type CreateBookMutation = {
  createBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateBookMutationVariables = {
  input: UpdateBookInput,
  condition?: ModelBookConditionInput | null,
};

export type UpdateBookMutation = {
  updateBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteBookMutationVariables = {
  input: DeleteBookInput,
  condition?: ModelBookConditionInput | null,
};

export type DeleteBookMutation = {
  deleteBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateCoverMutationVariables = {
  input: CreateCoverInput,
  condition?: ModelCoverConditionInput | null,
};

export type CreateCoverMutation = {
  createCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateCoverMutationVariables = {
  input: UpdateCoverInput,
  condition?: ModelCoverConditionInput | null,
};

export type UpdateCoverMutation = {
  updateCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteCoverMutationVariables = {
  input: DeleteCoverInput,
  condition?: ModelCoverConditionInput | null,
};

export type DeleteCoverMutation = {
  deleteCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateAuthorBookMutationVariables = {
  input: CreateAuthorBookInput,
  condition?: ModelAuthorBookConditionInput | null,
};

export type CreateAuthorBookMutation = {
  createAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type UpdateAuthorBookMutationVariables = {
  input: UpdateAuthorBookInput,
  condition?: ModelAuthorBookConditionInput | null,
};

export type UpdateAuthorBookMutation = {
  updateAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type DeleteAuthorBookMutationVariables = {
  input: DeleteAuthorBookInput,
  condition?: ModelAuthorBookConditionInput | null,
};

export type DeleteAuthorBookMutation = {
  deleteAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type ListAuthorsQueryVariables = {
  filter?: ModelAuthorFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListAuthorsQuery = {
  listAuthors:  {
    __typename: "ModelAuthorConnection",
    items:  Array< {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetAuthorQueryVariables = {
  id: string,
};

export type GetAuthorQuery = {
  getAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type GetPublisherQueryVariables = {
  id: string,
};

export type GetPublisherQuery = {
  getPublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListPublishersQueryVariables = {
  filter?: ModelPublisherFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListPublishersQuery = {
  listPublishers:  {
    __typename: "ModelPublisherConnection",
    items:  Array< {
      __typename: "Publisher",
      id: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type ListBooksQueryVariables = {
  filter?: ModelBookFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListBooksQuery = {
  listBooks:  {
    __typename: "ModelBookConnection",
    items:  Array< {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetBookQueryVariables = {
  id: string,
};

export type GetBookQuery = {
  getBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListCoversQueryVariables = {
  filter?: ModelCoverFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListCoversQuery = {
  listCovers:  {
    __typename: "ModelCoverConnection",
    items:  Array< {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetCoverQueryVariables = {
  id: string,
};

export type GetCoverQuery = {
  getCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorSubscription = {
  onCreateAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateAuthorSubscription = {
  onUpdateAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteAuthorSubscription = {
  onDeleteAuthor:  {
    __typename: "Author",
    id: string,
    Name: string | null,
    createdAt: string,
    updatedAt: string,
    AuthorBooks:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreatePublisherSubscription = {
  onCreatePublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdatePublisherSubscription = {
  onUpdatePublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeletePublisherSubscription = {
  onDeletePublisher:  {
    __typename: "Publisher",
    id: string,
    createdAt: string,
    updatedAt: string,
    Books:  {
      __typename: "ModelBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateBookSubscription = {
  onCreateBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateBookSubscription = {
  onUpdateBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteBookSubscription = {
  onDeleteBook:  {
    __typename: "Book",
    id: string,
    publisherID: string,
    createdAt: string,
    updatedAt: string,
    Cover:  {
      __typename: "Cover",
      id: string,
      PaintingDescription: string | null,
      createdAt: string,
      updatedAt: string,
    } | null,
    authors:  {
      __typename: "ModelAuthorBookConnection",
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateCoverSubscription = {
  onCreateCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateCoverSubscription = {
  onUpdateCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteCoverSubscription = {
  onDeleteCover:  {
    __typename: "Cover",
    id: string,
    PaintingDescription: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateAuthorBookSubscription = {
  onCreateAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnUpdateAuthorBookSubscription = {
  onUpdateAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};

export type OnDeleteAuthorBookSubscription = {
  onDeleteAuthorBook:  {
    __typename: "AuthorBook",
    id: string,
    authorID: string,
    bookID: string,
    createdAt: string,
    updatedAt: string,
    author:  {
      __typename: "Author",
      id: string,
      Name: string | null,
      createdAt: string,
      updatedAt: string,
    },
    book:  {
      __typename: "Book",
      id: string,
      publisherID: string,
      createdAt: string,
      updatedAt: string,
    },
  } | null,
};
