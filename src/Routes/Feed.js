import React from 'react';
import { Helmet } from 'rl-react-helmet';
import styled from 'styled-components';
import { gql } from 'apollo-boost';
import { useQuery } from 'react-apollo-hooks';
import Loader from '../Components/Loader';
import Post from '../Routes/Post';

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

const PostList = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background: rgb(241, 243, 245);
  text-align: center;
  padding: 10px;
`;

export default () => {
  console.log('feed');
  const { data, loading } = useQuery(FEED_QUERY);
  console.log(data);
  return (
    <PostList>
      <Helmet>
        <title>사람들</title>
      </Helmet>
      {loading && <Loader />}
      {!loading &&
        data &&
        data.seeFeed &&
        data.seeFeed.reverse().map(post => {
          console.log(post);
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
  );
};
