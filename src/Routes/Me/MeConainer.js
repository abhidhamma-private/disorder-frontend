import React from 'react';
import MePresenter from './MePresenter';
import { READ_MYDIARY } from './MeQueries';
import { useQuery } from '@apollo/react-hooks';
import Loader from 'Components/Loader';

export default React.memo(() => {
  const { data: myDiaryData, loading: myDiaryLoading } = useQuery(READ_MYDIARY);
  return (
    <>
      {myDiaryLoading && <Loader />}
      {!myDiaryLoading && myDiaryData && (
        <MePresenter myDiaries={myDiaryData.readMyDiary} />
      )}
    </>
  );
});
