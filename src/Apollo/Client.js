import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  split,
} from '@apollo/client';
import { setContext } from 'apollo-link-context';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';
import { resolvers } from './LocalState';
import { SubscriptionClient } from 'subscriptions-transport-ws';
const httpLink = new createHttpLink({
  uri: 'http://localhost:4000/',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
});

const sbclient = new SubscriptionClient('ws://localhost:4000/socket', {
  reconnect: true,
});
const wsLink = new WebSocketLink(sbclient);

let cache = new InMemoryCache();
const loggedInCheck = cache.writeData({
  data: {
    isLoggedIn: Boolean(localStorage.getItem('token')) || false,
  },
});
const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink)
);

const client = new ApolloClient({
  cache,
  link,
  resolvers: resolvers,
  writeData: loggedInCheck,
});

export default client;
