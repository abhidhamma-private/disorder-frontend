import React, { useState } from 'react';
import DiaryPresenter from './DiaryPresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import {
  GET_ALLDIARYQUESTION,
  UPDATE_MYQUESTION,
  GET_QUESTIONSOFME,
  CREATE_MYDIARY,
} from './DiaryQuries';
import Loader from '../../Components/Loader';
import { useHistory } from 'react-router-dom';
import { READ_MYDIARY } from 'Routes/Me/MeQueries';
export default () => {
  console.log('DiaryContainer');
  //state
  const [action, setAction] = useState('Description');
  const [diary, setDiary] = useState({
    good: undefined,
    content: '',
  });
  const [surveyCount, setSurveyCount] = useState(0);
  let history = useHistory();
  //query

  const {
    data: myQuestionData,
    loading: myQuestionLoading,
    refetch: myQuestionRefetch,
  } = useQuery(GET_QUESTIONSOFME);
  const { data: allQuestionData, loading: allQuestionLoading } = useQuery(
    GET_ALLDIARYQUESTION
  );

  //mutation
  const [createMyDiary] = useMutation(CREATE_MYDIARY, {
    refetchQueries: () => [{ query: READ_MYDIARY }],
  });
  const [updateMyQuestion] = useMutation(UPDATE_MYQUESTION);

  //function
  const createDiary = async () => {
    await createMyDiary({
      variables: {
        content: diary.content,
        good: diary.good,
        score: diary.score,
        questionId: diary.questionId,
      },
    }).catch(e => console.log(e));
    const surveyLength = myQuestionData.getQuestionsOfMe.length;
    setSurveyCount(surveyLength - 1 === surveyCount ? false : surveyCount + 1);
    setDiary(diary => ({
      ...diary,
      good: undefined,
      content: '',
      score: undefined,
    }));
    return setAction('Survey');
  };
  const updateQuestion = async (element, event) => {
    event.preventDefault();
    try {
      await updateMyQuestion({
        variables: { question: element },
      });
    } catch (e) {
      console.log(e);
    }
    await myQuestionRefetch();
  };

  return (
    <>
      {(allQuestionLoading || myQuestionLoading) && <Loader />}
      {!(allQuestionLoading || myQuestionLoading) &&
        allQuestionData &&
        myQuestionData && (
          <DiaryPresenter
            //state
            action={action}
            setAction={setAction}
            diary={diary}
            setDiary={setDiary}
            surveyCount={surveyCount}
            setSurveyCount={setSurveyCount}
            history={history}
            //function
            createDiary={createDiary}
            updateMyQuestion={updateMyQuestion}
            //query
            allQuestion={allQuestionData.getAllQuestion}
            myQuestion={myQuestionData.getQuestionsOfMe}
            //mutation
            updateQuestion={updateQuestion}
            myQuestionRefetch={myQuestionRefetch}
          />
        )}
    </>
  );
};

// import React, { useReducer, useMemo, useCallback } from 'react';
// import DiaryPresenter from './DiaryPresenter';
// import { useQuery, useMutation } from '@apollo/react-hooks';
// import {
//   GET_ALLDIARYQUESTION,
//   UPDATE_MYQUESTION,
//   GET_QUESTIONSOFME,
//   CREATE_MYDIARY,
// } from './DiaryQuries';
// import Loader from '../../Components/Loader';
// import { reducer, DiaryContext, DiaryAction } from './DiaryContext';

// const diaryInitialState = {
//   action: 'Description',
//   surveyCount: 0,
//   diary: {
//     good: undefined,
//   },
// };

// export default () => {
//   console.log('DiaryContainer');
//   const [state, dispatch] = useReducer(reducer, diaryInitialState);
//   //query
//   const { data: allQuestionData, loading: allQuestionLoading } = useCallback(
//     useQuery(GET_ALLDIARYQUESTION)
//   );
//   const {
//     data: myQuestionData,
//     loading: myQuestionLoading,
//     refetch: refetchMyQuestion,
//   } = useQuery(GET_QUESTIONSOFME);

//   //mutation
//   const [createMyDiary, { loading: createMyDiaryLoading }] = useCallback(
//     useMutation(CREATE_MYDIARY)
//   );
//   const [updateMyQuestion, { loading: updateMyQuestionLoading }] = useCallback(
//     useMutation(UPDATE_MYQUESTION)
//   );

//   //function
//   const handleDiary = useCallback(() => {
//     console.log('handleDiary');
//     dispatch({ type: DiaryAction.CREATE_MYDIARY });
//     dispatch({ type: DiaryAction.COUNT_SURVEY });
//     dispatch({ type: DiaryAction.INIT_DIARY });
//     dispatch({ type: DiaryAction.SETACTION, action: 'Survey' });
//   }, []);

//   const handleQuestion = useCallback(
//     async (element, event) => {
//       console.log('event : ', event);
//       await event.preventDefault();
//       console.log('handleQuestion');
//       console.log(element);
//       dispatch({ type: DiaryAction.UPDATE_MYQUESTION, question: element });
//        await refetchMyQuestion();

//     },
//     // eslint-disable-next-line
//     []
//   );

//   const value = useMemo(() => ({ state, dispatch }), [state]);
//   if (
//     allQuestionLoading ||
//     myQuestionLoading ||
//     createMyDiaryLoading ||
//     updateMyQuestionLoading
//   )
//     return <Loader />;

//   // handleDiary,
//   // handleQuestion,
//   // allQuestion: allQuestionData.getAllQuestion,
//   // myQuestion: myQuestionData.getQuestionsOfMe,
//   // createMyDiary,
//   // updateMyQuestion,
//   // refetchMyQuestion,
//   return (
//     <DiaryContext.Provider value={value}>
//       <DiaryPresenter
//         //function
//         handleDiary={handleDiary}
//         handleQuestion={handleQuestion}
//         //query
//         allQuestion={allQuestionData.getAllQuestion}
//         myQuestion={myQuestionData.getQuestionsOfMe}
//         //mutation
//         createMyDiary={createMyDiary}
//         updateMyQuestion={updateMyQuestion}
//         refetchMyQuestion={refetchMyQuestion}
//       />
//     </DiaryContext.Provider>
//   );
// };
