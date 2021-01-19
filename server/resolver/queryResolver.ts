import { WeatherAverage } from '../entities/weatherAverage';
import { WeatherTimeSeries } from '../entities/weatherTimeSeries';
import { dataStore } from '../server';

const queryResolver = {
  RootQuery: {
    userWeatherData() {
      return dataStore.cities.map((city) => new WeatherAverage(city.id, dataStore));
    },
    cityWeatherData(_: unknown, { id }: any) {
      return new WeatherTimeSeries(id, dataStore);
    },
  },
};

export default queryResolver;
