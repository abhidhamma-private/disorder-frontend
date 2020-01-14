import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: grid;
  min-width: 380px;
  font-size: 1rem;
  line-height: 1rem;
  align-self: end;
`;

const Pre = styled.pre`
  display: grid;
  justify-self: center;
  font-family: 'NanumB';
`;

export default () => (
  <TextWrapper>
    {/* prettier-ignore */}
    <Pre>
{`
인간의 괴로움은 보편적이고

마음의 평화를 만들어내는법을 
아는사람은 드뭅니다. 

왜그런지는 수수께끼이며 이 앱은 
그 수수께끼에 대한것입니다.
`}
    </Pre>
  </TextWrapper>
);
