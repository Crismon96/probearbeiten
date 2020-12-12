import { Timer } from '../entities/timer';
import { dataStore } from '../server';

const objectTypeResolver = {
  Timer: new Timer('timer-1', dataStore),
};

export default objectTypeResolver;
