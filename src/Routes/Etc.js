import React from 'react';
import styled from 'styled-components';
import Tab from '../Components/Tab';
import Life from 'Components/Life';
import { useApolloClient } from '@apollo/react-hooks';
import { useHistory } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 7vh 7vh 7vh 7vh 7vh 58vh;
`;

const Row = styled.div`
  display: grid;
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  font-family: 'KakaoB';
  font-size: 1.5rem;
  text-align-last: center;
  padding-top: 1vh;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-family: 'KakaoB';
  font-size: 1.5rem;
  text-align-last: center;
  padding-top: 1vh;
  color: white;
  background: ${props => props.theme.activeColor};
  width: 100%;
  height: 100%;
`;

export default () => {
  const history = useHistory();
  const client = useApolloClient();
  return (
    <Wrapper>
      <Tab />
      <Title>설정</Title>
      <Row
        onClick={() => {
          client.writeData({ data: { isLoggedIn: false } });
          localStorage.clear();
          history.push('/');
        }}>
        로그아웃
      </Row>
      <Row
        onClick={() => {
          history.push('/theme');
        }}>
        테마
      </Row>
      <Row>계정</Row>
      <Row>정보</Row>
      <Life />
    </Wrapper>
  );
};
