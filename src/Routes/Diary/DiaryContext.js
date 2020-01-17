// import { createContext } from 'react';

// export const DiaryContext = createContext(null);

// export const DiaryAction = {
//   PRE_LOAD: 'PRE_LOAD',
//   SET_ACTION: 'SET_ACTION',
//   COUNT_SURVEY: 'COUNT_SURVEY',
//   INIT_DIARY: 'INIT_DIARY',
//   CREATE_MYDIARY: 'CREATE_MYDIARY',
//   UPDATE_MYQUESTION: 'UPDATE_MYQUESTION',
//   REFETCH_MYQUESTION: 'REFETCH_MYQUESTION',
//   GET_QUESTIONSOFME: 'GET_QUESTIONSOFME',
//   SET_MANY: 'SET_MANY',
//   SET_DIARYCONTENT: 'SET_DIARYCONTENT',
//   SET_DIARYQUESTION: 'SET_DIARYQUESTION',
// };

// const createMyDiary = async state => {
//   await state.createMyDiary({
//     variables: {
//       content: state.diary.content,
//       good: state.diary.good,
//       score: state.diary.score,
//       questionId: state.diary.questionId,
//     },
//   });

//   return state;
// };

// const getQuestionsOfMe = async state => {
//   await state.getQuestionsOfMe({
//     variables: {
//       content: state.diary.content,
//       good: state.diary.good,
//       score: state.diary.score,
//       questionId: state.diary.questionId,
//     },
//   });

//   return state;
// };

// const updateMyQuestion = async (state, action) => {
//   console.log('updateMyQuestion : ', action.question);
//   await state.updateMyQuestion({ variables: { question: action.question } });
//   return state;
// };

// const setMany = (state, action) => {
//   let list = {};
//   const reducer = (list, key) => {
//     list[key] = action[key];
//     return { ...list };
//   };

//   return {
//     ...state,
//     ...Object.keys(action)
//       .filter(key => key !== 'type')
//       .reduce(reducer, list),
//   };
// };

// export const reducer = (state, action) => {
//   switch (action.type) {
//     case DiaryAction.PRE_LOAD:
//       console.log('PRE_LOAD');
//       return {
//         ...state,
//         allQuestion: action.allQuestion,
//         myQuestion: action.myQuestion,
//         refetchMyQuestion: action.refetchMyQuestion,
//         createMyDiary: action.createMyDiary,
//         updateMyQuestion: action.updateMyQuestion,
//         handleDiary: action.handleDiary,
//         handleQuestion: action.handleQuestion,
//       };
//     case DiaryAction.SET_ACTION:
//       console.log('SET_ACTION');
//       return {
//         ...state,
//         action: action.action,
//       };
//     case DiaryAction.COUNT_SURVEY:
//       console.log('COUNT_SURVEY');
//       return state.myQuestion.length - 1 === state.surveyCount
//         ? {
//             ...state,
//             surveyCount: false,
//           }
//         : { ...state, surveyCount: state.surveyCount + 1 };
//     case DiaryAction.INIT_DIARY:
//       console.log('INIT_DIARY');
//       return {
//         ...state,
//         diary: {
//           ...state.diary,
//           good: undefined,
//           content: '',
//           score: undefined,
//         },
//       };
//     case DiaryAction.CREATE_MYDIARY:
//       console.log('CREATE_MYDIARY');
//       return createMyDiary(state);
//     case DiaryAction.UPDATE_MYQUESTION:
//       console.log('UPDATE_MYQUESTION');
//       return updateMyQuestion(state, action);
//     case DiaryAction.GET_QUESTIONSOFME:
//       console.log('GET_QUESTIONSOFME');
//       return getQuestionsOfMe(state);
//     case DiaryAction.SET_MANY:
//       console.log('SET_MANY');
//       return setMany(state, action);
//     case DiaryAction.SET_DIARY:
//       return {
//         ...state,
//         diary: { ...state.diary },
//       };

//     default:
//       return state;
//   }
// };
