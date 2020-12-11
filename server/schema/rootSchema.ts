const typeDefs = `
# Queries ------------------------------------------------------------------------------------------------------------

type RootQuery {
  posts: [Post]
}

# Mutations ------------------------------------------------------------------------------------------------------------

type RootMutation {
  upvotePost (
    postId: ID!
  ): Post
}

# Object-Types ------------------------------------------------------------------------------------------------------------

type Author {
  id: ID!
  """
  the list of Posts by this author
  """
  posts: [Post]
}

type Post {
  id: ID!
  title: String!
}

schema {
  query: RootQuery
  mutation: RootMutation
}
`;

export default typeDefs;