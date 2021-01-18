import timersDefinition from './timers.json';

export default class DataStore {
  private _timers: typeof timersDefinition;

  constructor() {
    this._timers = JSON.parse(JSON.stringify(timersDefinition));
  }

  get timers() {
    return this._timers;
  }
}
