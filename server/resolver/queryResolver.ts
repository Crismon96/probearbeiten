import { Timer } from '../entities/timer';
import { dataStore } from '../server';
import { RootQueryTimerArgs } from '../types/generated/graphql';

const queryResolver = {
  RootQuery: {
    timer(_: unknown, { id }: RootQueryTimerArgs) {
      return new Timer(id, dataStore);
    },
  },
};

export default queryResolver;
