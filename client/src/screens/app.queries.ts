import { gql } from '@apollo/client';

export const appQuery = gql`
  query ABC {
    posts {
      id
      title
      __typename
    }
  }
`;
