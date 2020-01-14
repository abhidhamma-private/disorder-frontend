import React, { useReducer, useMemo } from 'react';
import ThemePresenter from './ThemePresenter';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { CREATE_MYCOLOR } from './ThemeQueries';
import { READ_MYDATA } from '../../sharedQueries';
import Loader from 'Components/Loader';
import { reducer, ThemeContext } from './ThemeContext';

const themeInitialState = {
  action: 'theme',
  color: '',
};

export default () => {
  const [state, dispatch] = useReducer(reducer, themeInitialState);
  const { data: readMyData, loading: myDataLoading } = useQuery(READ_MYDATA, {
    variables: { avatar: state.color },
  });
  const [createMyColor, { loading: createMyColorLoading }] = useMutation(
    CREATE_MYCOLOR,
    {
      variables: { avatar: state.color },
    }
  );
  const value = useMemo(() => ({ state, dispatch }), [state]);

  if (myDataLoading || createMyColorLoading) {
    return <Loader />;
  }

  return (
    <ThemeContext.Provider value={value}>
      <ThemePresenter readMyData={readMyData} createMyColor={createMyColor} />
    </ThemeContext.Provider>
  );
};
