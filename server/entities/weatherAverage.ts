import DataStore from '../data/data-store';

export class WeatherAverage {
  private _id;
  private _city: DataStore['cities'][0];

  constructor(id: string, dataStore: DataStore) {
    this._id = id;

    const city = dataStore.cities.find((city) => city.id === this._id);

    if (!city) {
      throw new Error('No timer with the specified id found.');
    }
    this._city = city;
  }

  get __typeName() {
    return 'WeatherAverage';
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._city.name;
  }

  get rainingProbability() {
    return this._city.average.rainingProbability;
  }

  get temperature() {
    return this._city.average.temperature;
  }
}
