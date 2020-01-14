import React, { useState } from 'react';
import StoryPresenter from './StoryPresenter';
import { useMutation, useQuery } from '@apollo/react-hooks';
import { CREATE_MYCHAT, getChatting, newChat } from './StoryQuries';
import { READ_MYDATA } from '../../sharedQueries';
import Loader from 'Components/Loader';

let unsubscribe = null;

export default () => {
  const [description, setDescription] = useState('');
  const [mutation] = useMutation(CREATE_MYCHAT, {
    variables: {
      description,
    },
  });
  const { data: myData, loading: myDataLoading } = useQuery(READ_MYDATA);
  const { data: chatData, loading: chatLoading, subscribeToMore } = useQuery(
    getChatting
  );
  const onKeyPress = async event => {
    if (event.key === 'Enter') {
      try {
        await mutation();
        setDescription('');
      } catch (e) {
        console.log(e);
      }
    }
  };

  if (!unsubscribe) {
    unsubscribe = subscribeToMore({
      document: newChat,
      updateQuery: (prev, { subscriptionData }) => {
        console.log('prev : ', prev);
        console.log(subscriptionData);
        if (!subscriptionData.data) return prev;
        const { newChat } = subscriptionData.data;
        return {
          ...prev,
          chatting: [...prev.chatting, newChat],
        };
      },
    });
  }

  return (
    <>
      {(chatLoading || myDataLoading) && <Loader />}
      {!(chatLoading || myDataLoading) && chatData && (
        <StoryPresenter
          mutation={mutation}
          description={description}
          setDescription={setDescription}
          onKeyPress={onKeyPress}
          chatData={chatData}
          subscribeToMore={subscribeToMore}
          myData={myData}
        />
      )}
    </>
  );
};
