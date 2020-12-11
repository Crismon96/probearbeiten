import { Post } from '../entities/post';

const queryResolver = {
  RootQuery: {
    posts() {
      return [new Post()];
    },
  },
};

export default queryResolver;
