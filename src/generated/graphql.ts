/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BrowseRestaurantInfo = {
  __typename?: 'BrowseRestaurantInfo';
  alias: Scalars['String'];
  cuisine?: Maybe<Array<Scalars['String']>>;
  image?: Maybe<Scalars['String']>;
  isPermanentlyClosed?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  numReview?: Maybe<Scalars['Int']>;
  price: Scalars['String'];
  rating: Scalars['Float'];
  restaurantId: Scalars['String'];
  transactions?: Maybe<Array<Scalars['String']>>;
  yelpReview?: Maybe<Scalars['Int']>;
};

export type DailyOpenHours = {
  __typename?: 'DailyOpenHours';
  day?: Maybe<Scalars['Int']>;
  end: Scalars['String'];
  isOvernight?: Maybe<Scalars['Boolean']>;
  start: Scalars['String'];
};

export type OpenHours = {
  __typename?: 'OpenHours';
  dailyOpenHours?: Maybe<Array<Maybe<DailyOpenHours>>>;
  hoursType?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  RestaurantDetail?: Maybe<RestaurantDetail>;
  RestaurantsByLocation?: Maybe<Array<Maybe<BrowseRestaurantInfo>>>;
};


export type QueryRestaurantDetailArgs = {
  restaurantId: Scalars['String'];
};


export type QueryRestaurantsByLocationArgs = {
  location: Scalars['String'];
};

export type RestaurantDetail = {
  __typename?: 'RestaurantDetail';
  alias: Scalars['String'];
  cuisine?: Maybe<Array<Scalars['String']>>;
  image?: Maybe<Scalars['String']>;
  isCurrentlyOpen?: Maybe<Scalars['Boolean']>;
  isPermanentlyClosed?: Maybe<Scalars['Boolean']>;
  location?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  numReview?: Maybe<Scalars['Int']>;
  openHours?: Maybe<Array<Maybe<OpenHours>>>;
  phone?: Maybe<Scalars['String']>;
  photos?: Maybe<Array<Maybe<Scalars['String']>>>;
  price: Scalars['String'];
  rating: Scalars['Float'];
  restaurantId: Scalars['String'];
  transactions?: Maybe<Array<Scalars['String']>>;
  yelpReview?: Maybe<Scalars['Int']>;
};
