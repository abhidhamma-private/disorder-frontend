import React from 'react';
import styled from 'styled-components';
import BlackOutLineButton from './BlackOutLineButton';
import { toast } from 'react-toastify';
import Text from '../Components/Text';

const SelectQuestionWrapper = styled.div`
  display: grid;
  background: ${props => props.theme.whiteColor};
  height: 93vh;
`;

const ContentsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 30vh 30vh 20vh 10vh;
  background: ${props => props.theme.whiteColor};
`;

const SelectSection = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
`;
const ElementBox = styled.div`
  display: grid;
  border: 1px solid ${props => props.theme.borderColor};
  height: 7vh;
  margin: 0.5vh;
`;
const ElementBoxText = styled(Text)`
  font-size: 0.8rem;
`;

const WhiteBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 15px;
  background-color: white;
  width: 95%;
  height: 95%;
`;
const StartSection = styled.div`
  display: grid;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  height: 6vh;
  align-items: center;
  font-family: 'KakaoB';
  font-size: 1.1rem;
  padding-left: 4vw;
`;
const StartSectionDescription = styled.div`
  display: grid;
  height: 9vh;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  font-family: 'KakaoL';
  font-weight: 600;
  padding-left: 4vw;
  font-size: 0.9rem;
  line-height: 1rem;
  > pre {
    display: grid;
    align-self: center;
  }
`;

const EndSection = styled.div`
  display: grid;
  border-top: 1px solid ${props => props.theme.borderColor};
  height: 6vh;
  align-items: center;
  text-align: center;
  padding-bottom: 1vh;
  font-family: 'KakaoL';
  font-size: 1.1rem;
`;

const OutLineButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  width: 100%;
  height: 100%;
  background: white;
`;
export default ({ allQuestion, updateQuestion, setAction, myQuestion }) => {
  console.log('SelectQuestions');
  return (
    <SelectQuestionWrapper>
      <ContentsWrapper>
        <WhiteBox>
          <StartSection>행동</StartSection>
          <StartSectionDescription>
            <pre>
              {`어떻게 행동하고 있는지를 객관적으로 확인하는것을 통해 
자신의 현재상황을 확인하는데 도움을 줄 수 있어요
`}
            </pre>
          </StartSectionDescription>
          <SelectSection>
            {allQuestion
              .filter(data => data.behavior)
              .map(behavior => {
                return (
                  <ElementBox
                    style={
                      myQuestion.filter(element => element.id === behavior.id)
                        .length
                        ? { background: '#626367', color: 'white' }
                        : { background: 'white', color: '#4b4c4f' }
                    }
                    key={behavior.id}
                    onClick={event => updateQuestion(behavior.type, event)}>
                    <ElementBoxText>{behavior.type}</ElementBoxText>
                  </ElementBox>
                );
              })}
          </SelectSection>
          <EndSection>더보기</EndSection>
        </WhiteBox>
        <WhiteBox>
          <StartSection>생각이나 감정 그리고 느낌</StartSection>
          <StartSectionDescription>
            <pre>
              {`자신의 반복되는 심리적 패턴을 확인하는것을 통해 
정서적 건강에 도움을 줄 수 있어요
`}
            </pre>
          </StartSectionDescription>
          <SelectSection>
            {allQuestion
              .filter(data => !data.behavior)
              .map(emotion => (
                <ElementBox
                  style={
                    myQuestion.filter(element => element.id === emotion.id)
                      .length
                      ? { background: '#626367', color: 'white' }
                      : { background: 'white', color: '#4b4c4f' }
                  }
                  key={emotion.id}
                  onClick={event => updateQuestion(emotion.type, event)}>
                  <ElementBoxText>{emotion.type}</ElementBoxText>
                </ElementBox>
              ))}
          </SelectSection>
          <EndSection>더보기</EndSection>
        </WhiteBox>
        <WhiteBox>
          <StartSection>주의할점</StartSection>
          <StartSectionDescription style={{ border: 0 }}>
            <pre>
              {`모두 진행하는것도 좋지만 
자신의 상황에 맞도록
여유롭게 선택하는것이 중요해요
`}
            </pre>
          </StartSectionDescription>
        </WhiteBox>
        <OutLineButtonWrapper>
          <BlackOutLineButton
            text={'계속하기'}
            onClick={() =>
              setAction(() => {
                if (myQuestion.length !== 0) {
                  return 'Survey';
                } else {
                  toast.info('항목을 하나 이상 선택 해주세요.');
                  return 'SelectQuestion';
                }
              })
            }
          />
        </OutLineButtonWrapper>
      </ContentsWrapper>
    </SelectQuestionWrapper>
  );
};

// import React from 'react';
// import styled from 'styled-components';
// import OutLineButton from './OutLineButton';
// import { toast } from 'react-toastify';
// import Text from '../Components/Text';
// import { useContext } from 'react';
// import { DiaryAction, DiaryContext } from 'Routes/Diary/DiaryContext';

// const SelectQuestionWrapper = styled.div`
//   display: grid;
//   background: ${props => props.theme.whiteColor};
//   height: 93vh;
// `;

// const ContentsWrapper = styled.div`
//   display: grid;
//   align-items: center;
//   justify-items: center;
//   grid-template-rows: 30vh 30vh 20vh 10vh;
//   background: ${props => props.theme.whiteColor};
// `;

// const SelectSection = styled.div`
//   display: grid;
//   width: 100%;
//   grid-template-columns: repeat(auto-fit, minmax(10vw, 1fr));
// `;
// const ElementBox = styled.div`
//   display: grid;
//   border: 1px solid ${props => props.theme.borderColor};
//   height: 7vh;
//   margin: 0.5vh;
// `;
// const ElementBoxText = styled(Text)`
//   font-size: 0.8rem;
// `;

// const WhiteBox = styled.div`
//   border: 1px solid ${props => props.theme.borderColor};
//   border-radius: 15px;
//   background-color: white;
//   width: 95%;
//   height: 95%;
// `;
// const StartSection = styled.div`
//   display: grid;
//   border-bottom: 1px solid ${props => props.theme.borderColor};
//   height: 6vh;
//   align-items: center;
//   font-family: 'KakaoB';
//   font-size: 1.1rem;
//   padding-left: 4vw;
// `;
// const StartSectionDescription = styled.div`
//   display: grid;
//   height: 9vh;
//   border-bottom: 1px solid ${props => props.theme.borderColor};
//   font-family: 'KakaoL';
//   font-weight: 600;
//   padding-left: 4vw;
//   font-size: 0.9rem;
//   line-height: 1rem;
//   > pre {
//     display: grid;
//     align-self: center;
//   }
// `;

// const EndSection = styled.div`
//   display: grid;
//   border-top: 1px solid ${props => props.theme.borderColor};
//   height: 6vh;
//   align-items: center;
//   text-align: center;
//   padding-bottom: 1vh;
//   font-family: 'KakaoL';
//   font-size: 1.1rem;
// `;

// const OutLineButtonWrapper = styled.div`
//   display: grid;
//   align-items: center;
//   justify-items: center;
//   width: 100%;
//   height: 100%;
//   background: #aeb4bb;
// `;
// export default () => {
//   console.log('SelectQuestions');
//   const { state, dispatch } = useContext(DiaryContext);
//   console.log('state : ', state);
//   return (
//     <SelectQuestionWrapper>
//       <ContentsWrapper>
//         <WhiteBox>
//           <StartSection>행동</StartSection>
//           <StartSectionDescription>
//             <pre>
//               {`어떻게 행동하고 있는지를 객관적으로 확인하는것을 통해
// 자신의 현재상황을 확인하는데 도움을 줄 수 있어요^-^//
// `}
//             </pre>
//           </StartSectionDescription>
//           <SelectSection>
//             {state.allQuestion
//               .filter(data => data.behavior)
//               .map(behavior => {
//                 return (
//                   <ElementBox
//                     style={
//                       state.myQuestion.filter(
//                         element => element.id === behavior.id
//                       ).length
//                         ? { background: '#626367', color: 'white' }
//                         : { background: 'white', color: '#4b4c4f' }
//                     }
//                     key={behavior.id}
//                     onClick={async event => {
//                       event.preventDefault();
//                       await state.updateMyQuestion({
//                         variables: { question: behavior.type },
//                       });
//                       await state.refetchMyQuestion();
//                     }}>
//                     <ElementBoxText>{behavior.type}</ElementBoxText>
//                   </ElementBox>
//                 );
//               })}
//           </SelectSection>
//           <EndSection>더보기</EndSection>
//         </WhiteBox>
//         <WhiteBox>
//           <StartSection>생각이나 감정 그리고 느낌</StartSection>
//           <StartSectionDescription>
//             <pre>
//               {`자신의 반복되는 심리적 패턴을 확인하는것을 통해
// 정서적 건강에 도움을 줄 수 있어요^-^//
// `}
//             </pre>
//           </StartSectionDescription>
//           <SelectSection>
//             {state.allQuestion
//               .filter(data => !data.behavior)
//               .map(emotion => (
//                 <ElementBox
//                   style={
//                     state.myQuestion.filter(
//                       element => element.id === emotion.id
//                     ).length
//                       ? { background: '#626367', color: 'white' }
//                       : { background: 'white', color: '#4b4c4f' }
//                   }
//                   key={emotion.id}
//                   onClick={event => state.handleQuestion(emotion.type, event)}>
//                   <ElementBoxText>{emotion.type}</ElementBoxText>
//                 </ElementBox>
//               ))}
//           </SelectSection>
//           <EndSection>더보기</EndSection>
//         </WhiteBox>
//         <WhiteBox>
//           <StartSection>주의할점</StartSection>
//           <StartSectionDescription style={{ border: 0 }}>
//             <pre>
//               {`모두 진행하는것도 좋지만
// 자신의 상황에 맞도록
// 여유롭게 선택하는것이 중요해요
// `}
//             </pre>
//           </StartSectionDescription>
//         </WhiteBox>
//         <OutLineButtonWrapper>
//           <OutLineButton
//             text={'계속하기'}
//             onClick={() =>
//               dispatch({
//                 type: DiaryAction.SET_ACTION,
//                 action:
//                   state.myQuestion.length !== 0
//                     ? 'Survey'
//                     : () => {
//                         toast.info('항목을 하나 이상 선택 해주세요.');
//                         return 'SelectQuestion';
//                       },
//                 // () => {
//                 //   if (state.myQuestion.length !== 0) {
//                 //     return 'Survey';
//                 //   } else {
//                 //     toast.info('항목을 하나 이상 선택 해주세요.');
//                 //     return 'SelectQuestion';
//                 //   }
//                 // },
//               })
//             }
//           />
//         </OutLineButtonWrapper>
//       </ContentsWrapper>
//     </SelectQuestionWrapper>
//   );
// };
