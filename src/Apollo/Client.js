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

const config = {
  pd: {
    uri: 'https://boongyee.com',
    ws: 'wss://boongyee.com/socket',
  },
  dev: {
    uri: 'http://localhost:4000',
    ws: 'ws://localhost:4000/socket',
  },
  local: {
    uri: 'http://192.168.0.79:4000',
    ws: 'ws://192.168.0.79:4000/socket',
  },
};
const currentConfig = config.pd;

const httpLink = new createHttpLink({
  uri: currentConfig.uri,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
  };
});

const sbclient = new SubscriptionClient(currentConfig.ws, {
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
