import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import client from './Apollo/Client';
import { ApolloProvider } from '@apollo/react-hooks';
import './assets/font/font.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
serviceWorker.register();
