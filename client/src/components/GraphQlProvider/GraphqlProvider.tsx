import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

function GraphqlProvider({ children }: Props) {
  const client = new ApolloClient({
    cache: new InMemoryCache(),
  });

  return <ApolloProvider client={client}>{children}</ApolloProvider>;
}

export default GraphqlProvider;
