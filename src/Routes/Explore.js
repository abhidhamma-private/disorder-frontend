import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 7vh 7vh 7vh 7vh 7vh 58vh;
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
export default React.memo(() => (
  <Wrapper>
    <Title>채팅</Title>
  </Wrapper>
));
