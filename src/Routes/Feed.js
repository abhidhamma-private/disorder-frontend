import React from 'react';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from '@apollo/react-hooks';
import Loader from '../Components/Loader';
import Post from '../Routes/Post';
import Tab from '../Components/Tab';
import Write from '../Components/Write';
import Header from '../Components/Header';
import { useHistory } from 'react-router-dom';
import { READ_MYDATA } from '../sharedQueries';

const FEED_QUERY = gql`
  {
    seeFeed {
      id
      title
      caption
      user {
        id
        avatar
        userName
      }
      files {
        id
        url
      }
      likeCount
      isLiked
      comments {
        id
        text
        user {
          id
          userName
        }
      }
      createdAt
    }
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 7vh 8vh;
`;

const PostList = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 1px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  text-align: center;
`;

export default () => {
  console.log('feed');
  let history = useHistory();
  if (history.action === 'PUSH') {
    // history.push('/feed');
  }
  const { data: readMyData, loading: myDataLoading } = useQuery(READ_MYDATA);
  const { data, error, loading } = useQuery(FEED_QUERY, { pollInterval: 5000 });

  if (loading && myDataLoading) {
    return <Loader />;
  }
  console.log(data);
  console.log(error);
  return (
    <>
      {readMyData &&
        readMyData.readMyData &&
        (typeof readMyData.readMyData.avatar === 'undefined'
          ? history.push('/theme')
          : '')}
      <Wrapper>
        <Header />
        <Tab />
        <Write />
        <PostList>
          {!loading &&
            data &&
            data.seeFeed &&
            data.seeFeed.map(post => {
              return (
                <Post
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  caption={post.caption}
                  user={post.user}
                  files={post.files}
                  likeCount={post.likeCount}
                  isLiked={post.isLiked}
                  comments={post.comments}
                  createdAt={post.createdAt}
                />
              );
            })}
        </PostList>
      </Wrapper>
    </>
  );
};
