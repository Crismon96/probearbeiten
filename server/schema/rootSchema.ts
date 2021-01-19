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
  name: String!
  temperature: Int!
  rainingProbability: Int!
}

type WeatherTimeSeries {
  id: ID!
  name: String!
  temperature: [WeatherData!]!
  humidity: [WeatherData!]!
}

type WeatherData {
  time: Date!
  data: Int!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefs;
