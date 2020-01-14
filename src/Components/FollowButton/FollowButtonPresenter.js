import React from 'react';
import styled from 'styled-components';
import {AddUser} from '../Icons';
const AddUserWrapper = styled.div`
  width: 100%;
  height:100%;
  border: 0;
  border-radius: ${props => props.theme.borderRadius};
  color: white;
  font-weight: 600;
  text-align: center;
  padding: 7px 0px;
  font-size: 14px;
`;


export default ({ isFollowing, onClick }) => (
  <AddUserWrapper onClick={onClick}>
    {isFollowing ? '' : <AddUser/>}
  </AddUserWrapper>
);
