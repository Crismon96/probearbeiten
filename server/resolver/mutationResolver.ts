import { RootMutationCreateTimerArgs } from '../types/generated/graphql';

const mutationResolver = {
  RootMutation: {
    createTimer(_: unknown, timer: RootMutationCreateTimerArgs) {
      // const newTimer = dataStore.createTimer(timer);
      // return new Timer(newTimer.id, dataStore);
    },
  },
};

export default mutationResolver;
