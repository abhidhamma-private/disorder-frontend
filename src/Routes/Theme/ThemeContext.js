import { createContext } from 'react';

export const ThemeContext = createContext({
  action: 'theme',
});

export const ThemeAction = {
  PRE_LOAD: 'PRE_LOAD',
  SELECT_COLOR: 'SELECT_COLOR',
  GO_BACK: 'GO_BACK',
  SET_COLOR: 'SET_COLOR',
};

const setColor = async state => {
  await state.createMyColor();
  return await { ...state };
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ThemeAction.PRE_LOAD:
      return {
        ...state,
        readMyData: action.readMyData,
        createMyColor: action.createMyColor,
      };
    case ThemeAction.SELECT_COLOR:
      return {
        ...state,
        color: action.color,
        action: 'example',
      };
    case ThemeAction.GO_BACK:
      return {
        ...state,
        action: 'theme',
      };
    case ThemeAction.SET_COLOR:
      return setColor(state);
    default:
      return state;
  }
};
