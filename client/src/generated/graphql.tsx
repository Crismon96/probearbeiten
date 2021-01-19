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
  cityId: Scalars['ID'];
  name: Scalars['String'];
  weatherIcon: Scalars['String'];
  temperature: Scalars['Float'];
  rainingProbability: Scalars['Int'];
};

export type WeatherTimeSeries = {
  __typename?: 'WeatherTimeSeries';
  id: Scalars['ID'];
  cityId: Scalars['ID'];
  name: Scalars['String'];
  weatherTimeSeriesData: Array<WeatherData>;
};

export type WeatherData = {
  __typename?: 'WeatherData';
  time: Scalars['Date'];
  weatherIcon: Scalars['String'];
  temperature: Scalars['Float'];
  humidity: Scalars['Int'];
};

export type WeatherOverviewQueryVariables = Exact<{ [key: string]: never; }>;


export type WeatherOverviewQuery = (
  { __typename?: 'RootQuery' }
  & { userWeatherData: Array<(
    { __typename?: 'WeatherAverage' }
    & Pick<WeatherAverage, 'id' | 'name' | 'weatherIcon' | 'temperature' | 'rainingProbability'>
  )> }
);
