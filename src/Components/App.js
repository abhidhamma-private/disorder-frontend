import React from 'react';
import { gql } from 'apollo-boost';
import styled, { ThemeProvider } from 'styled-components';
import { useQuery } from '@apollo/react-hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import GlobalStyles from '../Styles/GlobalStyles';
import Theme from '../Styles/Theme';
import Router from './Router';
import Loader from './Loader';
import { READ_MYDATA } from '../sharedQueries';

const IS_LOGGEDIN = gql`
  {
    isLoggedIn @client
  }
`;

const DefaultStyle = styled.div`
  display: grid;
  max-width: 935px;
  font-family: 'KakaoL';
  font-weight: 600;
`;
export default () => {
  console.log('app');
  const { loading: myDataLoading, data: myData } = useQuery(READ_MYDATA);
  const { loading: loginCheckLoading, data } = useQuery(IS_LOGGEDIN);

  return (
    <>
      {loginCheckLoading && myDataLoading && <Loader />}
      {!(loginCheckLoading && myDataLoading) && data && (
        <ThemeProvider
          theme={
            myData && data.isLoggedIn
              ? { ...Theme, activeColor: myData.readMyData.avatar }
              : Theme
          }>
          <GlobalStyles />
          <DefaultStyle>
            <Router isLoggedIn={data.isLoggedIn} />
          </DefaultStyle>
          <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
        </ThemeProvider>
      )}
    </>
  );
};
