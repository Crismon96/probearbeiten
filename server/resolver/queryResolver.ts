import { Timer } from '../entities/timer';
import { dataStore } from '../server';
import { RootQueryTimerArgs, RootQueryTimersArgs } from '../types/generated/graphql';

const queryResolver = {
  RootQuery: {
    timer(_: unknown, { id }: RootQueryTimerArgs) {
      return new Timer(id, dataStore);
    },
    timers(_: unknown, { limit, offset, filter }: RootQueryTimersArgs) {
      return dataStore.timers.map((timer) => new Timer(timer.id, dataStore));
    },
  },
};

export default queryResolver;
