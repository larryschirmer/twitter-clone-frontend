import React from 'react';
import { render } from 'react-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  from,
  ApolloLink,
  HttpLink,
} from '@apollo/client';

import Home from 'components/Home';

import getCookie from 'utils/getCookie';

import 'styles/global.scss';

const httpLink = new HttpLink({ uri: process.env.BACKEND || 'http://localhost:4000' });

const authMiddleware = new ApolloLink((operation, forward) => {
  // get token from cookies
  const token = getCookie(document.cookie, 'token');

  // add the authorization to the headers
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      authorization: token ?? null,
    },
  }));

  return forward(operation);
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([authMiddleware, httpLink]),
});

render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </ApolloProvider>,
  document.getElementById('root'),
);
