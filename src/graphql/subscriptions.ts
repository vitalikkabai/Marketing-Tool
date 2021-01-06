/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAuthor = /* GraphQL */ `
  subscription OnCreateAuthor {
    onCreateAuthor {
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
export const onUpdateAuthor = /* GraphQL */ `
  subscription OnUpdateAuthor {
    onUpdateAuthor {
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
export const onDeleteAuthor = /* GraphQL */ `
  subscription OnDeleteAuthor {
    onDeleteAuthor {
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
export const onCreatePublisher = /* GraphQL */ `
  subscription OnCreatePublisher {
    onCreatePublisher {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const onUpdatePublisher = /* GraphQL */ `
  subscription OnUpdatePublisher {
    onUpdatePublisher {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const onDeletePublisher = /* GraphQL */ `
  subscription OnDeletePublisher {
    onDeletePublisher {
      id
      createdAt
      updatedAt
      Books {
        nextToken
      }
    }
  }
`;
export const onCreateBook = /* GraphQL */ `
  subscription OnCreateBook {
    onCreateBook {
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
export const onUpdateBook = /* GraphQL */ `
  subscription OnUpdateBook {
    onUpdateBook {
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
export const onDeleteBook = /* GraphQL */ `
  subscription OnDeleteBook {
    onDeleteBook {
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
export const onCreateCover = /* GraphQL */ `
  subscription OnCreateCover {
    onCreateCover {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCover = /* GraphQL */ `
  subscription OnUpdateCover {
    onUpdateCover {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCover = /* GraphQL */ `
  subscription OnDeleteCover {
    onDeleteCover {
      id
      PaintingDescription
      createdAt
      updatedAt
    }
  }
`;
export const onCreateAuthorBook = /* GraphQL */ `
  subscription OnCreateAuthorBook {
    onCreateAuthorBook {
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
export const onUpdateAuthorBook = /* GraphQL */ `
  subscription OnUpdateAuthorBook {
    onUpdateAuthorBook {
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
export const onDeleteAuthorBook = /* GraphQL */ `
  subscription OnDeleteAuthorBook {
    onDeleteAuthorBook {
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
