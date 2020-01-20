import React from 'react';
import styled from 'styled-components';

const TextWrapper = styled.div`
  display: grid;
`;

export default () => {
  console.log('StartDescription');

  return (
    <TextWrapper>
      {/* prettier-ignore */}
      <pre>
{`
인간은 괴로움을 경험합니다.
이것은 단지 고통이 있다는 것이 아니며
괴로움에 시달린다는것은 
그보다 훨씬 더 이상의 것입니다.

이 앱은 심리적 장애물을 느끼는 사람들을 위해
인간의 마음이 어떻게 작용하는가에 대한 연구 프로그램인 
Relational Frame Theory에 기반한 과학적인 토대를 지닌 심리치료모델을 
저 자신이 실생활에 적용 하기위해 만든 앱입니다.

이 연구는 우리가 심리적문제를 해결하는데 사용하는 많은 수단들때문에 
오히려 괴로움을 낳는 덫에 걸리게 된다고 제안합니다.
`}
      </pre>
    </TextWrapper>
  );
};
