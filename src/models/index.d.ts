import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Author {
  readonly id: string;
  readonly Name?: string;
  readonly AuthorBooks?: (AuthorBook | null)[];
  constructor(init: ModelInit<Author>);
  static copyOf(source: Author, mutator: (draft: MutableModel<Author>) => MutableModel<Author> | void): Author;
}

export declare class AuthorBook {
  readonly id: string;
  readonly author: Author;
  readonly book: Book;
  constructor(init: ModelInit<AuthorBook>);
  static copyOf(source: AuthorBook, mutator: (draft: MutableModel<AuthorBook>) => MutableModel<AuthorBook> | void): AuthorBook;
}

export declare class Book {
  readonly id: string;
  readonly Cover?: Cover;
  readonly publisherID: string;
  readonly authors?: (AuthorBook | null)[];
  constructor(init: ModelInit<Book>);
  static copyOf(source: Book, mutator: (draft: MutableModel<Book>) => MutableModel<Book> | void): Book;
}

export declare class Cover {
  readonly id: string;
  readonly PaintingDescription?: string;
  constructor(init: ModelInit<Cover>);
  static copyOf(source: Cover, mutator: (draft: MutableModel<Cover>) => MutableModel<Cover> | void): Cover;
}

export declare class Publisher {
  readonly id: string;
  readonly Books?: (Book | null)[];
  constructor(init: ModelInit<Publisher>);
  static copyOf(source: Publisher, mutator: (draft: MutableModel<Publisher>) => MutableModel<Publisher> | void): Publisher;
}