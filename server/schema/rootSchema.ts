const typeDefs = `
# Scalars ------------------------------------------------------------------------------------------------------------

# A ISO-String Datetime Format
scalar Date

# Queries ------------------------------------------------------------------------------------------------------------

type RootQuery {
  userWeatherData: [WeatherAverage!]!
  cityWeatherData(id: ID!): WeatherTimeSeries!
}

# Mutations ------------------------------------------------------------------------------------------------------------

type RootMutation {
  addCity(name: String!): Boolean!
}

# Object-Types ------------------------------------------------------------------------------------------------------------

type WeatherAverage {
  id: ID!
  cityId: ID!
  name: String!
  weatherIcon: String!
  temperature: Float!
  rainingProbability: Int!
}

type WeatherTimeSeries {
  id: ID!
  cityId: ID!
  name: String!
  weatherTimeSeriesData: [WeatherData!]!
}

type WeatherData {
  time: Date!
  weatherIcon: String!
  temperature: Float!
  humidity: Int!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefs;
