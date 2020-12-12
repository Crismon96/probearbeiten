import { gql } from '@apollo/client';

export const appQuery = gql`
  query {
    timer(id: "timer-1") {
      id
      description
      from
      until
    }
  }
`;
