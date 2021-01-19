import { gql } from '@apollo/client';

export const abcQuery = gql`
  query Timers {
    userWeatherData {
      id
      name
      temperature
      rainingProbability
    }
  }
`;
