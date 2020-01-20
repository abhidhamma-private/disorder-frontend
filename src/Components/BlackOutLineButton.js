import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.buttonColor};
  font-weight: 600;
  background-color: transparent;
  border: 1.5px solid ${props => props.theme.buttonColor};
  text-align: center;
  font-size: 1rem;
`;
const Wrapper = styled.div`
  width: 40vw;
  height: 5vh;
`;
const BlackOutLineButton = ({ text, onClick }) => (
  <Wrapper>
    <Container onClick={onClick}>{text}</Container>
  </Wrapper>
);

BlackOutLineButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default BlackOutLineButton;
