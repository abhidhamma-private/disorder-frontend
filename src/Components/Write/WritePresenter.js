import React from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';
import Input from '../Input';
import { Survey, Camera } from '../Icons';

const Wrapper = styled.form`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-columns: 8vh 5fr 1fr 1fr;
  background: white;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const SearchInput = styled(Input)`
  display: grid;
  background-color: ${props => props.theme.whiteColor};
  color: ${props => props.theme.dimgreyColor};
  padding: 7px;
  padding-left: 0.7rem;
  font-size: 18px;
  border-radius: 16px;
  height: auto;
  width: 95%;
  &::placeholder {
    text-align: center;
    padding-bottom: 5px;
    opacity: 0.8;
    font-weight: 200;
    color: ${props => props.theme.dimgreyColor};
  }
`;
const SurveyWrapper = styled.label`
  display: grid;
  align-items: center;
  justify-items: center;
`;

const UploadInput = styled.input`
  display: none;
`;
export default ({
  upload,
  onWriteSubmit,
  think,
  myData: { avatar, userName },
}) => {
  return (
    <Wrapper onSubmit={onWriteSubmit}>
      <Avatar color={avatar} text={userName} />

      <SearchInput
        placeholder="무슨 생각이 떠올랐나요?"
        value={think.value}
        onChange={think.onChange}
      />
      <SurveyWrapper>
        <Survey />
      </SurveyWrapper>
      <SurveyWrapper>
        <Camera />
        <UploadInput type="file" onChange={upload} multiple />
      </SurveyWrapper>
    </Wrapper>
  );
};
