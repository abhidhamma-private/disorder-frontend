import React from 'react';
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from 'styled-components';
import { useQuery } from 'react-apollo-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';

const QUERY = gql`
  {
    isLoggedIn @client
  }
`;

const DefaultStyle = styled.div`
  display: grid;
  margin: 0 auto;
  max-width: 935px;
  grid-template-rows: minmax(7vh, 1fr) minmax(7vh, 1fr);
`;
export default () => {
  let {
    data: { isLoggedIn },
  } = useQuery(QUERY);
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <DefaultStyle>
        <Router isLoggedIn={isLoggedIn} />
      </DefaultStyle>
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </ThemeProvider>
  );
};
