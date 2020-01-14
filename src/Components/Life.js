import React from 'react';
import styled from 'styled-components';
import life from '../assets/image/life.gif';

const Life = styled.img`
  width: 100%;
  height: auto;
  align-self: end;
`;

export default () => <Life src={life} alt="" />;
