import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from 'graphql-tools';
import mutationResolver from './resolver/mutationResolver';
import objectTypeResolver from './resolver/objectTypeResolver';
import queryResolver from './resolver/queryResolver';
import typeDefs from './schema/rootSchema';

const app = express();

// Dummy DB
export const dataStore = new DataStore();

// For REST just in case I need it
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Requested-With, Accept');
  res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

const executableSchema = makeExecutableSchema({
  typeDefs,
  resolvers: [queryResolver, mutationResolver, objectTypeResolver],
});

app.use(
  '/graphql',
  graphqlHTTP({
    schema: executableSchema,
    graphiql: true,
  })
);

app.listen(8000, '127.0.0.1', () => {
  console.log('Listening to port 8000');
});
