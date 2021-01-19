import { useQuery } from '@apollo/client';
import React from 'react';
import { WeatherOverviewQuery, WeatherOverviewQueryVariables } from '../../generated/graphql';
import { weatherOverviewQuery } from './queries/overview.queries';

function Overview() {
  const { data } = useQuery<WeatherOverviewQuery, WeatherOverviewQueryVariables>(weatherOverviewQuery);

  return <div></div>;
}

export default Overview;
