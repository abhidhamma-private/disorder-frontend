import React from 'react';
import styled from 'styled-components';
import Tab from '../Components/Tab';
import Life from 'Components/Life';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 7vh 7vh 7vh 7vh 7vh 58vh;
`;

const Alarm = styled.div`
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
  return (
    <Wrapper>
      <Tab />
      <Title>알람</Title>
      <Alarm>아침일지를 쓸 시간이에요^-^//</Alarm>
      <Alarm>점심일지를 쓸 시간이에요^-^//</Alarm>
      <Alarm>저녁일지를 쓸 시간이에요^-^//</Alarm>
      <Alarm>퇴근후일지를 쓸 시간이에요^-^//</Alarm>
      <Alarm>자기전일지를 쓸 시간이에요^-^//</Alarm>
      <Alarm>아침일지를 쓸 시간이에요^-^//</Alarm>
      <Life />
    </Wrapper>
  );
};
