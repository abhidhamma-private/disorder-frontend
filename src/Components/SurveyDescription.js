import React from 'react';
import styled from 'styled-components';
import OutLineButton from './OutLineButton';
import mainImage from '../assets/image/3.jpeg';
import Life from './Life';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8vh 25vh 25vh 12vh 23vh;
  background: white;
  align-items: center;
  justify-items: center;
`;

const TextWrapper = styled.div`
  display: grid;
  text-align: center;
`;

const OutLineButtonWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background: #aeb4bb;
  width: 100%;
  height: 100%;
`;

const Title = styled.div`
  font-family: 'KakaoB';
  font-size: 25px;
`;

const MainImageWraper = styled.div`
  width: 80vw;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
  max-width: 500px;
`;

const MainImage = styled.img`
  background: #dee2e6;
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
  width: auto;
  height: 100%;
`;

export default ({ setAction }) => {
  console.log('SurveyDescription');
  return (
    <Wrapper>
      <Title>치료적 일기</Title>
      <MainImageWraper>
        <MainImage src={mainImage} />
      </MainImageWraper>
      <TextWrapper>
        {/* prettier-ignore */}
        <pre>
{`
인간의 괴로움은 보편적이고

마음의 평화를 만들어내는 법을 
아는 사람은 드뭅니다. 

왜 그런지는 수수께끼이며 이 앱은 
그 수수께끼에 대한것입니다.

`}
      </pre>
      </TextWrapper>
      <OutLineButtonWrapper>
        <OutLineButton
          style={{ width: '10vw' }}
          text="시작하기"
          onClick={() => setAction('SelectQuestion')}
        />
      </OutLineButtonWrapper>
      <Life />
    </Wrapper>
  );
};
