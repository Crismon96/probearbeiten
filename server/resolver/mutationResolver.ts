import { Timer } from '../entities/timer';
import { dataStore } from '../server';
import { RootMutationCreateTimerArgs, RootMutationUpdateTimerArgs } from '../types/generated/graphql';

const mutationResolver = {
  RootMutation: {
    createTimer(_: unknown, timer: RootMutationCreateTimerArgs) {
      const newTimer = dataStore.createTimer(timer);
      return new Timer(newTimer.id, dataStore);
    },
    updateTimer(_: unknown, timerUpdate: RootMutationUpdateTimerArgs) {
      const updatedTimer = dataStore.updateTimer(timerUpdate);
      return new Timer(updatedTimer.id, dataStore);
    },
  },
};

export default mutationResolver;
