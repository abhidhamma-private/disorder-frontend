import React from 'react';
import styled from 'styled-components';

const Text = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
`;

export default ({ children, className }) => (
  <Text className={className}>{children}</Text>
);
