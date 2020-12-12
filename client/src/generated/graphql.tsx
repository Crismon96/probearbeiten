import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
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
  /** A ISO-String Datetime Format */
  Date: any;
};


export type RootQuery = {
  __typename?: 'RootQuery';
  timer: Timer;
  timers: Array<Timer>;
};


export type RootQueryTimerArgs = {
  id: Scalars['ID'];
};


export type RootQueryTimersArgs = {
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  filter?: Maybe<Scalars['String']>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  createTimer: Timer;
  updateTimer: Timer;
};


export type RootMutationCreateTimerArgs = {
  description: Scalars['String'];
  from: Scalars['Date'];
  until: Scalars['Date'];
};


export type RootMutationUpdateTimerArgs = {
  id: Scalars['ID'];
  description: Scalars['String'];
  from: Scalars['Date'];
  until: Scalars['Date'];
};

export type Timer = {
  __typename?: 'Timer';
  id: Scalars['ID'];
  description?: Maybe<Scalars['String']>;
  from: Scalars['Date'];
  until: Scalars['Date'];
};

export type Unnamed_1_QueryVariables = Exact<{ [key: string]: never; }>;


export type Unnamed_1_Query = (
  { __typename?: 'RootQuery' }
  & { timer: (
    { __typename?: 'Timer' }
    & Pick<Timer, 'id' | 'description' | 'from' | 'until'>
  ) }
);


export const Document = gql`
    {
  timer(id: "timer-1") {
    id
    description
    from
    until
  }
}
    `;

/**
 * __useQuery__
 *
 * To run a query within a React component, call `useQuery` and pass it any options that fit your needs.
 * When your component renders, `useQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useQuery({
 *   variables: {
 *   },
 * });
 */
export function useQuery(baseOptions?: Apollo.QueryHookOptions<Query, QueryVariables>) {
        return Apollo.useQuery<Query, QueryVariables>(Document, baseOptions);
      }
export function useLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<Query, QueryVariables>) {
          return Apollo.useLazyQuery<Query, QueryVariables>(Document, baseOptions);
        }
export type QueryHookResult = ReturnType<typeof useQuery>;
export type LazyQueryHookResult = ReturnType<typeof useLazyQuery>;
export type QueryResult = Apollo.QueryResult<Query, QueryVariables>;