import { gql } from '@apollo/client';

export const weatherOverviewQuery = gql`
  query WeatherOverview {
    userWeatherData {
      id
      name
      weatherIcon
      temperature
      rainingProbability
    }
  }
`;
