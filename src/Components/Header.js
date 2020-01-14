import React from 'react';
import styled from 'styled-components';
import MassengerLogo from '../assets/image/MessengerRGB.svg';
import SearchLogo from '../assets/image/Search.svg';
import Brand from '../Components/Brand';
import { Link } from 'react-router-dom';
const Header = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 1fr 1fr;
  background: ${props => props.theme.whiteColor};
`;

const LogoWrapper = styled(Link)`
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

const SMWrapper = styled(Link)`
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
    <LogoWrapper to="/feed">
      <Brand />
    </LogoWrapper>
    <Empty />
    <SMWrapper to="/search">
      <Search src={SearchLogo} alt="" />
    </SMWrapper>
    <SMWrapper to="/messenger">
      <Massenger src={MassengerLogo} alt="" />
    </SMWrapper>
  </Header>
);
