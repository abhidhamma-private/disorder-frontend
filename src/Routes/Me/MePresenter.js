import React from 'react';
import styled from 'styled-components';
import Tab from '../../Components/Tab';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 7vh;
  background: white;
`;
const Title = styled.div`
  font-family: 'KakaoB';
  font-size: 1.5rem;
  text-align-last: center;
  padding-top: 1vh;
  color: white;
  background: ${props => props.theme.activeColor};
  width: 100%;
  height: 100%;
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
  font-size: 4vw;
  border: 3px solid ${props => props.theme.activeColor};
  border-radius: 30px;
  padding: 1vw;
  grid-area: good;
`;
const Score = styled.div`
  display: grid;
  grid-area: score;
`;
const Empty = styled.div`
  display: grid;
`;

export default myDiaries => {
  const diariesArr = myDiaries.myDiaries;
  return (
    <Wrapper>
      <Tab />
      <Title>오늘의 기록</Title>
      <TimelineWrapper>
        <Timeline>
          {diariesArr ? (
            diariesArr.map(diary => (
              <TimelineItem key={diary.id}>
                <TimelineTail />
                <TimlineCircle />
                <TimelineItemsWrapper>
                  <Type>{diary.question.type}</Type>
                  <Good>{diary.good ? '행동' : '생각'}</Good>
                  <Content>
                    {/* prettier-ignore */}
                    <pre>
{
`${diary.content}`
}
                  </pre>
                  </Content>
                  <Score>{`${diary.good ? '긍정적' : '부정적'}느낌 ${
                    diary.score
                  }`}</Score>
                </TimelineItemsWrapper>
              </TimelineItem>
            ))
          ) : (
            <Empty />
          )}
        </Timeline>
      </TimelineWrapper>
    </Wrapper>
  );
};
