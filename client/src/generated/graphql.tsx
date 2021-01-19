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
  userWeatherData: Array<WeatherAverage>;
  cityWeatherData: WeatherTimeSeries;
};


export type RootQueryCityWeatherDataArgs = {
  id: Scalars['ID'];
};

export type RootMutation = {
  __typename?: 'RootMutation';
  addCity: Scalars['Boolean'];
};


export type RootMutationAddCityArgs = {
  name: Scalars['String'];
};

export type WeatherAverage = {
  __typename?: 'WeatherAverage';
  id: Scalars['ID'];
  name: Scalars['String'];
  temperature: Scalars['Int'];
  rainingProbability: Scalars['Int'];
};

export type WeatherTimeSeries = {
  __typename?: 'WeatherTimeSeries';
  id: Scalars['ID'];
  name: Scalars['String'];
  temperature: Array<WeatherData>;
  humidity: Array<WeatherData>;
};

export type WeatherData = {
  __typename?: 'WeatherData';
  time: Scalars['Date'];
  data: Scalars['Int'];
};

export type TimersQueryVariables = Exact<{ [key: string]: never; }>;


export type TimersQuery = (
  { __typename?: 'RootQuery' }
  & { userWeatherData: Array<(
    { __typename?: 'WeatherAverage' }
    & Pick<WeatherAverage, 'id' | 'name' | 'temperature' | 'rainingProbability'>
  )> }
);
