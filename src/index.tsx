import React from 'react';
import { render } from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import Home from 'components/Home';

import 'styles/global.scss';

const client = new ApolloClient({
  uri: process.env.BACKEND || 'http://localhost:4000',
  cache: new InMemoryCache(),
});

render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
