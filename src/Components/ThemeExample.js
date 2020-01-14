import React, { useContext } from 'react';
import styled from 'styled-components';
import moment from 'moment';
import {
  ScrollAble,
  MyChatText,
  NotMyChatText,
  MyBox,
  NotMyBoxWrapper,
  NotMyBox,
  Avatar,
  AvatarText,
  DateWapper,
  DateText,
  DateTail,
} from '../Routes/Story/StoryCSS';
import { BackArrow } from './Icons';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import { ThemeContext, ThemeAction } from 'Routes/Theme/ThemeContext';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8vh 5vh 8vh 5vh 40vh 5vh;
`;

const Text = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  color: white;
`;
const DecriptionBox = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background: #1c1c1c;
`;

const ChatWrapper = styled.div`
  display: grid;
  transform: rotate(180deg);
  grid-gap: 1vh;
  background: white;
  padding: 2vw;
  align-content: end;
  align-self: end;
`;
const ThemeHandlerWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  justify-items: center;
  align-items: center;
  background-color: ${props => props.theme.activeColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const BackArrowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-self: center;
`;
const Title = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: 'KakaoB';
  color: white;
  width: 100%;
  height: 100%;
`;
const ArrowWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-self: center;
  align-self: center;
`;
const TitleText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1.5rem;
  color: white;
`;
const SvgWrapper = styled.div`
  display: grid;
  transform: rotate(180deg);
`;
const TabWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  background: ${props => props.theme.whiteColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const TimelineWrapper = styled.div`
  display: grid;
  height: 100%;
  background: white;
  padding: 10vw;
  padding-top: 7vw;
`;
const Timeline = styled.div`
  display: grid;
  grid-column: 100%;
  grid-auto-rows: 17vh;
`;
const TimelineTail = styled.div`
  position: absolute;
  height: calc(100% - 2vw);
  left: 2vw;
  top: 3vw;
  border-left: 2vw solid ${props => props.theme.lightGreyColor};
`;

const TimlineCircle = styled.div`
  position: absolute;
  width: 6vw;
  height: 6vw;
  background-color: ${props => props.theme.activeColor};
  border-radius: 100px;
  top: 0.5vw;
`;

const TimelineItem = styled.div`
  position: relative;
`;
const TimelineItemsWrapper = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  padding-left: 7vw;
  grid-template-areas:
    'type good good'
    'content content content'
    'content content content'
    'score score score'
    'score score score';
`;
const Type = styled.div`
  font-family: 'KakaoB';
  align-self: start;
  justify-self: start;
  font-size: 6vw;
  grid-area: type;
  padding-top: 0.5vw;
`;
const Content = styled.div`
  font-size: 5vw;
  padding-top: 1vw;
  grid-area: content;
  overflow-y: hidden;
  -webkit-line-clamp: 2;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;
const Good = styled.div`
  display: grid;
  align-self: start;
  justify-self: end;
  grid-area: good;
  font-size: 4vw;
  border: 3px solid ${props => props.theme.activeColor};
  border-radius: 30px;
  padding: 1vw;
  bottom: 2vw;
`;
const Score = styled.div`
  display: grid;
  grid-area: score;
`;

export default () => {
  const { state, dispatch } = useContext(ThemeContext);
  const customColor = state.color;
  const Tab = styled(NavLink)`
    z-index: 10;
    display: grid;
    > i {
      display: grid;
    }
    i > svg {
      width: 50%;
      height: 50%;
      align-self: center;
      justify-self: center;
      color: ${props => props.theme.dimgreyColor};
    }

    &.active {
      & {
        border-bottom: 0.5vh solid ${customColor};
      }
      > i > svg {
        color: ${customColor};
      }
    }
  `;
  console.log('ThemeExample');
  const MyName = state.readMyData.readMyData.userName;
  return (
    <Wrapper>
      <ThemeHandlerWrapper style={{ background: customColor }}>
        <BackArrowWrapper
          onClick={() => dispatch({ type: ThemeAction.GO_BACK })}>
          <BackArrow />
          <Text>다시고르기</Text>
        </BackArrowWrapper>
        <Title>
          <TitleText>확인하기</TitleText>
        </Title>
        <ArrowWrapper
          onClick={async () => {
            await dispatch({ type: ThemeAction.SET_COLOR });
            await document.location.reload();
          }}>
          <Text>이걸로하기</Text>
          <SvgWrapper>
            <BackArrow />
          </SvgWrapper>
        </ArrowWrapper>
      </ThemeHandlerWrapper>
      <DecriptionBox>
        <Text>탭의 색깔을 확인해보세요</Text>
      </DecriptionBox>
      <TabWrapper>
        <Tab to={'/theme'} activeClassName="active" replace>
          <Icon type="team" />
        </Tab>
        <Tab to={'/theme'} replace>
          <Icon type="read" />
        </Tab>
        <Tab to={'/theme'} replace>
          <Icon type="sound" />
        </Tab>
        <Tab to={'/theme'} replace>
          <Icon type="message" />
        </Tab>
        <Tab to={'/theme'} replace>
          <Icon type="user" />
        </Tab>
        <Tab to={'/theme'} replace>
          <Icon type="menu" />
        </Tab>
      </TabWrapper>
      <DecriptionBox>
        <Text>작성될 일기를 확인해보세요</Text>
      </DecriptionBox>
      <TimelineWrapper>
        <Timeline>
          <TimelineItem>
            <TimelineTail />
            <TimlineCircle style={{ background: customColor }} />
            <TimelineItemsWrapper>
              <Type>오전</Type>
              <Good style={{ border: `3px solid ${customColor}` }}>행동</Good>
              <Content>
                {/* prettier-ignore */}
                <pre>
{
`오전에 출근해서 개발을 했다.`
}
                  </pre>
              </Content>
              <Score>긍정적 느낌 6</Score>
            </TimelineItemsWrapper>
          </TimelineItem>
        </Timeline>
        <Timeline>
          <TimelineItem>
            <TimelineTail />
            <TimlineCircle style={{ background: customColor }} />
            <TimelineItemsWrapper>
              <Type>잠들기 전</Type>
              <Good style={{ border: `3px solid ${customColor}` }}>
                감정이나 느낌
              </Good>
              <Content>
                {/* prettier-ignore */}
                <pre>
{
`아무 감정이 안느껴진다.`
}
                  </pre>
              </Content>
              <Score>부정적 느낌 4</Score>
            </TimelineItemsWrapper>
          </TimelineItem>
        </Timeline>
      </TimelineWrapper>
      <DecriptionBox>
        <Text>상대방에게 보일 닉네임의 색깔을 확인해보세요</Text>
      </DecriptionBox>
      <ScrollAble>
        <ChatWrapper>
          <DateWapper>
            <DateTail />
            <DateText>{moment(new Date()).format('YYYY년 MM월 DD일')}</DateText>
            <DateTail />
          </DateWapper>
          <NotMyBoxWrapper>
            <Avatar style={{ background: customColor }}>
              <AvatarText>{MyName}</AvatarText>
            </Avatar>
            <NotMyBox>
              <NotMyChatText>안녕하세요</NotMyChatText>
            </NotMyBox>
          </NotMyBoxWrapper>
          <MyBox>
            <MyChatText>안녕하세요</MyChatText>
          </MyBox>
        </ChatWrapper>
      </ScrollAble>
    </Wrapper>
  );
};
