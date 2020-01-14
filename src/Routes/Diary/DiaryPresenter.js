import React from 'react';
import styled from 'styled-components';
import Tab from '../../Components/Tab';
import Survey from '../../Components/Survey';
import SurveyDescription from '../../Components/SurveyDescription';
import SelectQuestion from '../../Components/SelectQuestions';

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh;
`;

export default ({
  myQuestion,
  allQuestion,
  action,
  setAction,
  updateMyQuestion,
  setSurveyCount,
  updateQuestion,
  myQuestionRefetch,
  surveyCount,
  createDiary,
  diary,
  setDiary,
  history,
}) => {
  console.log('DiaryPresenter');
  return (
    <Wrapper>
      <Tab />
      {action === 'Description' && <SurveyDescription setAction={setAction} />}
      {action === 'SelectQuestion' && (
        <SelectQuestion
          allQuestion={allQuestion}
          myQuestion={myQuestion}
          updateMyQuestion={updateMyQuestion}
          updateQuestion={updateQuestion}
          setAction={setAction}
          myQuestionRefetch={myQuestionRefetch}
        />
      )}
      {action === 'Survey' &&
        (surveyCount === false ? (
          history.push('/me')
        ) : (
          <>
            <Survey
              myQuestion={myQuestion}
              surveyCount={surveyCount}
              setSurveyCount={setSurveyCount}
              createDiary={createDiary}
              setAction={setAction}
              diary={diary}
              setDiary={setDiary}
            />
          </>
        ))}
    </Wrapper>
  );
};
