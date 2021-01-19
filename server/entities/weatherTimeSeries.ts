import DataStore from '../data/data-store';

export class WeatherTimeSeries {
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
    return 'WeatherTimeSeries';
  }

  get id() {
    return this._id;
  }

  get name() {
    return this._city.name;
  }

  get temperature() {
    return this._city.timeSeries.map((series) => {
      return { time: series.time, data: series.temperature };
    });
  }

  get humidity() {
    return this._city.timeSeries.map((series) => {
      return { time: series.time, data: series.humidity };
    });
  }
}
