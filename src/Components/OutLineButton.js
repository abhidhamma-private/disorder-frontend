import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.button`
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.whiteColor};
  font-weight: 600;
  background-color: transparent;
  border: 1px solid ${props => props.theme.whiteColor};
  text-align: center;
  padding: 7px 0px;
  font-size: 1rem;
  font-weight: 500;
`;
const Wrapper = styled.div`
  width: 40vw;
  height: 5vh;
`;
const OutLineButton = ({ text, onClick }) => (
  <Wrapper>
    <Container onClick={onClick}>{text}</Container>
  </Wrapper>
);

OutLineButton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default OutLineButton;
