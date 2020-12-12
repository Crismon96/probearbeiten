const mutationResolver = {
  RootMutation: {
    createTimer(_: unknown, { postId }: any) {},
    updateTimer(_: unknown, { postId }: any) {},
  },
};

export default mutationResolver;
