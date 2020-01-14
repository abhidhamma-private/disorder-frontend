import React, { useContext, useEffect } from 'react';
import CustomTheme from 'Styles/CustomTheme';
import { Check } from 'Components/Icons';
import ThemeExample from 'Components/ThemeExample';
import { ThemeContext, ThemeAction } from './ThemeContext';
import {
  Wrapper,
  ThemeWrapper,
  ThemeItem,
  Title,
  TinyText,
  Text,
  CheckWrapper,
} from './ThemeCSS';

export default ({ readMyData, createMyColor }) => {
  console.log('initContext : ', ThemeContext);
  const { state, dispatch } = useContext(ThemeContext);
  useEffect(() => {
    dispatch({ type: ThemeAction.PRE_LOAD, readMyData, createMyColor });
  }, [dispatch, readMyData, createMyColor]);

  console.log(state);
  return (
    <>
      {state.action === 'theme' && (
        <Wrapper>
          <Title>
            <Text>좋아하는 색깔을 골라주세요</Text>
          </Title>
          <TinyText>
            <Text>이 색은 채팅할때 닉네임색, 테마에 적용될거에요!</Text>
          </TinyText>
          <ThemeWrapper>
            {CustomTheme.map(theme => (
              <ThemeItem
                key={theme.name}
                style={{ background: theme.color }}
                onClick={() => {
                  dispatch({
                    type: ThemeAction.SELECT_COLOR,
                    color: theme.color,
                  });
                }}>
                {theme.name}
                <CheckWrapper>
                  <Check />
                </CheckWrapper>
              </ThemeItem>
            ))}
          </ThemeWrapper>
        </Wrapper>
      )}
      {state.action === 'example' && <ThemeExample />}
    </>
  );
};
