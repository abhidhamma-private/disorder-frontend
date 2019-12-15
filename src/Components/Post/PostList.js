import React from 'react';
import styled from 'styled-components';
import Post from './Post';
import thumbnailURL1 from '../../assets/image/1.jpeg';
import thumbnailURL2 from '../../assets/image/2.jpeg';
const PostList = styled.div`
  display: grid;
  justify-content: center;
  grid-gap: 10px;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  background: rgb(241, 243, 245);
  text-align: center;
  padding: 10px;
`;

export default () => (
  <PostList>
    <Post thumbnail={thumbnailURL1} />
    <Post thumbnail={thumbnailURL2} />
    <Post />
  </PostList>
);
