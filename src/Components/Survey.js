import React from 'react';
import styled from 'styled-components';
import TextareaAutosize from 'react-autosize-textarea/lib';
import OutLineButton from './OutLineButton';
import { BackArrow, Restart } from '../Components/Icons';
import Progress from './Progress';
const Survey = styled.div`
  display: grid;
  grid-template-rows: 8vh 8vh 10vh 30vh 8vh 10vh 10vh;
`;

const Question = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.activeColor};
  color: white;
`;

const Description = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.dimgreyColor};
  color: white;
`;

const Answer = styled(TextareaAutosize)`
  border: 1px solid #e9ecef;
  width: 100%;
  height: 100%;
  text-align: center;
  resize: none;
  font-size: 1rem;
  padding-top: 2vh;
  &:focus {
    outline: none;
    ::-webkit-input-placeholder {
      opacity: 0;
    }
  }
  ::placeholder {
    padding-top: 2rem;
    font-size: 1rem;
  }
`;

const OutLineButtonWrapper = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  width: 40vw;
  background: '#636469';
`;
const Text = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
`;
const TinyText = styled.div`
  display: grid;
  align-self: start;
  justify-self: center;
  font-size: 0.2rem;
  font-weight: 500;
`;
const SurveyHandlerWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  height: 100%;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.whiteColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

const BackArrowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-self: center;
`;

const RestartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-self: center;
`;
const Counter = styled.div`
  display: grid;
  background-color: ${props => props.theme.activeColor};
  color: ${props => props.theme.whiteColor};
  padding: 7px;
  font-size: 18px;
  border-radius: 16px;
  height: auto;
  width: 95%;
  text-align: center;
`;

const Evaluation = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: ${props => props.theme.dimgreyColor};
  color: white;
`;

export default ({
  myQuestion,
  setAction,
  setSurveyCount,
  surveyCount,
  createDiary,
  onKeyPress,
  diary,
  setDiary,
}) => {
  console.log('Survey');
  const totalSurvey = myQuestion.length;
  const currentSurveyCount = surveyCount;
  const currentQuestion = myQuestion[surveyCount];
  console.log('myQuestion : ', myQuestion);
  console.log('currentQuestion : ', currentQuestion);
  const onchangeDiaryContent = e => {
    const {
      target: { value },
    } = e;
    setDiary(() => ({ ...diary, content: value }));
    setDiary(diary => ({ ...diary, questionId: currentQuestion.id }));
  };
  return (
    <Survey>
      <SurveyHandlerWrapper>
        <BackArrowWrapper
          onClick={() => {
            setDiary(diary => (diary.good = undefined));
            setSurveyCount(surveyCount === 0 ? 0 : surveyCount - 1);
            setAction(surveyCount === 0 ? 'Description' : 'Survey');
          }}>
          <BackArrow />
          <Text>이전으로</Text>
        </BackArrowWrapper>
        <Counter>
          {`치료적일기 ${currentSurveyCount + 1}/${totalSurvey}`}
        </Counter>
        <RestartWrapper
          onClick={() => {
            setSurveyCount(0);
            setAction('Survey');
          }}>
          <Restart />
          <Text>처음으로</Text>
        </RestartWrapper>
      </SurveyHandlerWrapper>
      <Question>
        <Text>{currentQuestion.question}</Text>
      </Question>
      <Description>
        <Text>{currentQuestion.description}</Text>
      </Description>

      <Answer
        onKeyPress={onKeyPress}
        placeholder={'작성하기'}
        value={diary.content}
        onChange={onchangeDiaryContent}
      />

      {diary.good === undefined ? (
        <>
          <Question>
            <Text>당신은 지금, 이 일기를 쓰면서 어떤 감정이 들었나요?</Text>
          </Question>
          <Evaluation>
            <OutLineButton
              text={'불편한 감정'}
              onClick={() =>
                setDiary(diary => ({ ...diary, good: false }))
              }></OutLineButton>
            <OutLineButton
              text={'좋은 감정'}
              onClick={() =>
                setDiary(diary => ({ ...diary, good: true }))
              }></OutLineButton>
          </Evaluation>
        </>
      ) : diary.good === true ? (
        <>
          <Question>
            <Text>얼마나 좋은 감정이 들었나요?</Text>
            <TinyText>
              (지금 이 순간 느끼는 만큼, 점수를 선택해주세요.)
            </TinyText>
          </Question>
          <Progress background={'#00695c'} diary={diary} setDiary={setDiary} />
        </>
      ) : (
        <>
          <Question>
            <Text>얼마나 불편한 감정이 들었나요?</Text>
            <TinyText>
              (지금 이 순간 느끼는 만큼, 점수를 선택해주세요.)
            </TinyText>
          </Question>
          <Progress background={'#FF5722'} diary={diary} setDiary={setDiary} />
        </>
      )}

      <OutLineButtonWrapper>
        <OutLineButton text={'계속하기'} onClick={createDiary} />
      </OutLineButtonWrapper>
    </Survey>
  );
};
