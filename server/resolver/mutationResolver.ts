import { Post } from '../entities/post';

const mutationResolver = {
  RootMutation: {
    upvotePost(_: unknown, { postId }: any) {
      return new Post();
    },
  },
};

export default mutationResolver;
