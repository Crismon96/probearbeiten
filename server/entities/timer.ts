import DataStore from '../data/data-store';

export class Timer {
  private _id;
  private _timer: DataStore['timers'][0];

  constructor(id: string, dataStore: DataStore) {
    this._id = id;

    const timer = dataStore.timers.find((timer) => timer.id === this._id);

    if (!timer) {
      throw new Error('No timer with the specified id found.');
    }
    this._timer = timer;
  }

  get __typeName() {
    return 'Timer';
  }

  get id() {
    return this._id;
  }

  get description() {
    return this._timer.description;
  }

  get from() {
    return this._timer.from;
  }

  get until() {
    return this._timer.until;
  }
}
