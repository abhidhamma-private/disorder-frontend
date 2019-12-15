import React from 'react';
import styled from 'styled-components';
import mLogo from '../assets/image/MessengerRGB.svg';
import sLogo from '../assets/image/Search.svg';

const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
`;

const Logo = styled.div`
  font-family: 'LOGO';
  font-size: 8vw;
  color: dimgray;
  font-weight: 800;
  align-self: center;
  justify-self: start;
  margin-left: 10px;
`;

const LogoWrapper = styled.div`
  display: grid;
  align-items: center;
`;

const Empty = styled.div``;

const Search = styled.img`
  max-width: 55%;
  height: auto;
  align-self: center;
  justify-self: center;
`;

const Massenger = styled.img`
  max-width: 55%;
  height: auto;
  align-self: center;
  justify-self: center;
`;

const SMWrapper = styled.div`
  width: 5vh;
  height: 5vh;
  display: grid;
  border-radius: 50%;
  background: lightgrey;
  align-self: center;
  justify-self: start;
`;

export default () => (
  <Header>
    <LogoWrapper>
      <Logo>DISORDER</Logo>
    </LogoWrapper>
    <Empty />
    <SMWrapper>
      <Search src={sLogo} alt="" />
    </SMWrapper>
    <SMWrapper>
      <Massenger src={mLogo} alt="" />
    </SMWrapper>
  </Header>
);
