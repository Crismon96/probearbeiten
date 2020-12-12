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
};

export type RootQuery = {
  __typename?: 'RootQuery';
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type RootMutation = {
  __typename?: 'RootMutation';
  upvotePost?: Maybe<Post>;
};


export type RootMutationUpvotePostArgs = {
  postId: Scalars['ID'];
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['ID'];
  /** the list of Posts by this author */
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type AbcQueryVariables = Exact<{ [key: string]: never; }>;


export type AbcQuery = (
  { __typename?: 'RootQuery' }
  & { posts?: Maybe<Array<Maybe<(
    { __typename: 'Post' }
    & Pick<Post, 'id' | 'title'>
  )>>> }
);


export const AbcDocument = gql`
    query ABC {
  posts {
    id
    title
    __typename
  }
}
    `;

/**
 * __useAbcQuery__
 *
 * To run a query within a React component, call `useAbcQuery` and pass it any options that fit your needs.
 * When your component renders, `useAbcQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAbcQuery({
 *   variables: {
 *   },
 * });
 */
export function useAbcQuery(baseOptions?: Apollo.QueryHookOptions<AbcQuery, AbcQueryVariables>) {
        return Apollo.useQuery<AbcQuery, AbcQueryVariables>(AbcDocument, baseOptions);
      }
export function useAbcLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AbcQuery, AbcQueryVariables>) {
          return Apollo.useLazyQuery<AbcQuery, AbcQueryVariables>(AbcDocument, baseOptions);
        }
export type AbcQueryHookResult = ReturnType<typeof useAbcQuery>;
export type AbcLazyQueryHookResult = ReturnType<typeof useAbcLazyQuery>;
export type AbcQueryResult = Apollo.QueryResult<AbcQuery, AbcQueryVariables>;