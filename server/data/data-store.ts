import fetch from 'node-fetch';
import { isSameDay } from '../utils/dates';
import citiesDefinition from './cities.json';

export default class DataStore {
  private _cities: typeof citiesDefinition;

  constructor() {
    this._cities = JSON.parse(JSON.stringify(citiesDefinition));
  }

  get cities() {
    return this._cities;
  }

  addCity = (name: string) => {
    // TODO: Here query API and see if city is there and add it
    return true;
  };

  fetchAllCitiesWeatherData = async () => {
    const outdatedDataCityIds = this._cities
      .filter((city) => !isSameDay(new Date(city.average.time), new Date()))
      .map((city) => city.cityId);
    const joinedCityIds = outdatedDataCityIds.join(',');

    await fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${joinedCityIds}&appid=${process.env.OPENWEATHERMAPS_API}&units=metric`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.errors) {
          console.log('NOT SO SERIOUS ERROR');
        }

        const updatedAverageData: {
          cityId: string;
          average: typeof citiesDefinition[0]['average'];
        }[] = resData.list.map((city: any) => {
          return {
            cityId: city.id.toString(),
            average: {
              time: new Date().toISOString(),
              temperature: city.main.temp,
              rainingProbability: city.main.humidity,
              weatherIcon: city.weather?.[0]?.icon,
            },
          };
        });

        updatedAverageData.forEach((updateData: typeof updatedAverageData[0]) => {
          const existingCity = this._cities.find((city) => city.cityId === updateData.cityId);
          if (!existingCity) return;

          const existingCityIndex = this._cities.indexOf(existingCity!);
          const updatedCity = {
            ...existingCity!,
            average: updateData.average,
          };

          this._cities.splice(existingCityIndex, 1, updatedCity);
        });
      })
      .catch((e) => console.log('SERIOUS ERROR', e));
  };

  fetchCityWeatherData = async (id: string) => {
    await fetch(
      `http://api.openweathermap.org/data/2.5/group?id=${id}&appid=${process.env.OPENWEATHERMAPS_API}&units=metric`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        if (resData.errors) {
          console.log('NOT SO SERIOUS ERROR');
        }

        const updatedAverageData: {
          cityId: string;
          average: typeof citiesDefinition[0]['average'];
        }[] = resData.list.map((city: any) => {
          return {
            cityId: city.id.toString(),
            average: {
              time: new Date().toISOString(),
              temperature: city.main.temp,
              rainingProbability: city.main.humidity,
              weatherIcon: city.weather?.[0]?.icon,
            },
          };
        });

        updatedAverageData.forEach((updateData: typeof updatedAverageData[0]) => {
          const existingCity = this._cities.find((city) => city.cityId === updateData.cityId);
          if (!existingCity) return;

          const existingCityIndex = this._cities.indexOf(existingCity!);
          const updatedCity = {
            ...existingCity!,
            average: updateData.average,
          };

          this._cities.splice(existingCityIndex, 1, updatedCity);
        });
      })
      .catch((e) => console.log('SERIOUS ERROR', e));
  };
}
