import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import client from './Apollo/Client';
import { ApolloProvider } from 'react-apollo-hooks';
import './assets/font/font.css';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
