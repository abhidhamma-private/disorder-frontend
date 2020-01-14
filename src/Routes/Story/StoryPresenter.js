import React from 'react';
import { Dance, BackArrow, Restart } from '../../Components/Icons';
import moment from 'moment';
import { useHistory } from 'react-router-dom';
import {
  Wrapper,
  Text,
  TitleText,
  ChatHandlerWrapper,
  BackArrowWrapper,
  Title,
  RestartWrapper,
  ScrollAble,
  ChatWrapper,
  MyChatText,
  NotMyChatText,
  MyBox,
  NotMyBoxWrapper,
  Avatar,
  NotMyBox,
  AvatarText,
  DateWapper,
  DateText,
  DateTail,
  InputWrapper,
  Emoji,
  SvgWrapper,
  Empty,
  StyledInput,
  Send,
  SendText,
} from './StoryCSS';

export default ({
  chatData,
  description,
  setDescription,
  mutation,
  onKeyPress,
  myData: {
    readMyData: { id },
  },
}) => {
  console.log('StoryPresenter');
  console.log('id', id);
  chatData = chatData.chatting;
  console.log('chatData : ', chatData);
  const history = useHistory();
  return (
    <Wrapper>
      <ChatHandlerWrapper>
        <BackArrowWrapper onClick={() => history.push('/feed')}>
          <BackArrow color={'white'} />
          <Text>돌아가기</Text>
        </BackArrowWrapper>
        <Title>
          <TitleText>이야기</TitleText>
        </Title>
        <RestartWrapper onClick={() => history.push('/feed')}>
          <Restart color={'white'} />
          <Text>처음으로</Text>
        </RestartWrapper>
      </ChatHandlerWrapper>
      <ScrollAble>
        <ChatWrapper>
          <DateWapper>
            <DateTail />
            <DateText>{moment(new Date()).format('YYYY년 MM월 DD일')}</DateText>
            <DateTail />
          </DateWapper>
          {chatData.map(chat => {
            return chat.userid === id ? (
              <MyBox key={chat.id}>
                <MyChatText>{chat.description}</MyChatText>
              </MyBox>
            ) : (
              <NotMyBoxWrapper key={chat.id}>
                <Avatar style={{ background: chat.avatar }}>
                  <AvatarText>{chat.writer}</AvatarText>
                </Avatar>
                <NotMyBox>
                  <NotMyChatText>{chat.description}</NotMyChatText>
                </NotMyBox>
              </NotMyBoxWrapper>
            );
          })}
        </ChatWrapper>
      </ScrollAble>
      <InputWrapper>
        <Emoji>
          <SvgWrapper>
            <Dance />
          </SvgWrapper>
        </Emoji>
        <Empty />
        <StyledInput
          onKeyPress={e => onKeyPress(e)}
          placeholder=""
          value={description}
          onChange={e => {
            setDescription(e.target.value);
          }}
        />
        <Send>
          <SendText
            onClick={() => {
              mutation();
              setDescription('');
            }}>
            전송
          </SendText>
        </Send>
      </InputWrapper>
    </Wrapper>
  );
};
