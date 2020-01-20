import React from 'react';
import styled from 'styled-components';

export const Avatar = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  height: 85%;
  width: 85%;
  border-radius: 100px;
  background: ${props => props.theme.dimgreyColor};
`;

export const AvatarText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: white;
`;

export default ({ color, text }) => {
  return (
    <Avatar style={{ background: color }}>
      <AvatarText>{text}</AvatarText>
    </Avatar>
  );
};
