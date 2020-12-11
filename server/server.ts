import express from 'express';
import { graphqlHTTP } from "express-graphql";
import { makeExecutableSchema } from 'graphql-tools';
import mutationResolver from './resolver/mutationResolver';
import objectTypeResolver from './resolver/objectTypeResolver';
import queryResolver from './resolver/queryResolver';
import typeDefs from './schema/rootSchema';

const app = express();

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: [queryResolver, mutationResolver, objectTypeResolver],
});

app.use('/graphql', graphqlHTTP({
  schema: executableSchema,
  graphiql: true,
}));

app.listen(8000, '127.0.0.1', () => {
    console.log("Listening")
})