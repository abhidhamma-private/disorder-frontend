import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  background-color: transparent;
  border: 1.5px solid white;
  text-align: center;
  font-size: 1rem;
`;
const Wrapper = styled.div`
  width: 40vw;
  height: 5vh;
`;
const WhiteOutLineButton = ({ text, onClick }) => (
  <Wrapper>
    <Container onClick={onClick}>{text}</Container>
  </Wrapper>
);

WhiteOutLineButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default WhiteOutLineButton;
