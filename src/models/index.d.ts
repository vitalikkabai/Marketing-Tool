import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum BusinessType {
  MANUFACTURER = "MANUFACTURER",
  TRADINGCOMPANY = "TRADINGCOMPANY",
  MANUFACTURERANDTRADINGCOMPANY = "MANUFACTURERANDTRADINGCOMPANY"
}



export declare class Business {
  readonly id: string;
  readonly companyName?: string;
  readonly country?: string;
  readonly city?: string;
  readonly businessNumber?: string;
  readonly haveExperienceSelling?: boolean;
  readonly storeURL?: string;
  readonly haveWebsite?: boolean;
  readonly websiteURL?: string;
  readonly ownerName?: string;
  readonly ownerEmailAddress?: string;
  readonly businessType?: BusinessType | keyof typeof BusinessType;
  readonly ownerUID?: string;
  constructor(init: ModelInit<Business>);
  static copyOf(source: Business, mutator: (draft: MutableModel<Business>) => MutableModel<Business> | void): Business;
}

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