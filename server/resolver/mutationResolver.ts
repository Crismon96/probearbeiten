import { dataStore } from '../server';

const mutationResolver = {
  RootMutation: {
    addCity(_: unknown, name: any) {
      const newCity = dataStore.addCity(name);
      return newCity ? true : false;
    },
  },
};

export default mutationResolver;
