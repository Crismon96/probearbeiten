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
}
