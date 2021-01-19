import { WeatherAverage } from '../entities/weatherAverage';
import { WeatherTimeSeries } from '../entities/weatherTimeSeries';
import { dataStore } from '../server';

const queryResolver = {
  RootQuery: {
    async userWeatherData() {
      await dataStore.fetchAllCitiesWeatherData();
      return dataStore.cities.map((city) => new WeatherAverage(city.id, dataStore));
    },
    cityWeatherData(_: unknown, { id }: any) {
      // await dataStore.fetchAllCitiesWeatherData();
      return new WeatherTimeSeries(id, dataStore);
    },
  },
};

export default queryResolver;
