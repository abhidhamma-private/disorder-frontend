import React from 'react';
import styled from 'styled-components';
import moment from 'moment';
import { HeartFull, HeartEmpty } from '../../Components/Icons';
//import TextareaAutosize from 'react-autosize-textarea';

const Post = styled.div`
  display: grid;
  grid-template-rows: 11fr 9fr;
  grid-template-columns: 1fr;
  border-radius: 15px;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
  height: 80vh;
  background: white;
`;

const ThumbnailWraper = styled.div`
  width: 100%;
  position: relative;
  display: block;
`;

const Thumbnail = styled.img`
  background: #dee2e6;
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const Contents = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 3fr 2fr;
  grid-template-columns: 1fr;
  box-shadow: 0 -4px 16px rgba(0, 0, 0, 0.05);
  padding: 1rem 1rem;
  font-size: 18px;
`;

const CoverLetter = styled.div`
  border-bottom: 1px solid #e9ecef;
  display: grid;
`;

const UserName = styled.div`
  font-weight: 900;
  color: #fa983a;
  align-self: end;
  justify-self: start;
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: 900;
  font-size: 25px;
  align-self: start;
  justify-self: start;
`;

const Info = styled.div`
  display: grid;
  color: #8aa6c1;
  grid-template-columns: 3.5fr 0.1fr 3fr 0.5fr;
  align-content: center;
  align-items: center;
`;
const DateWrapper = styled.div``;

const LikeCountWrapper = styled.div``;

const LikeWrapper = styled.div`
  cursor: pointer;
`;
const Dot = styled.span`
  &::before {
    color: #8aa6c1;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    font-weight: 900;
    content: '·';
  }
`;
const Content = styled.div`
  -webkit-box-orient: vertical;
  text-align-last: center;
  margin-top: 1.5rem;
  line-height: 1.5rem;
  height: 4.5rem;
  overflow-y: hidden;
  word-break: break-all;
  color: #4c657d;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  overflow: hidden;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;

var Avatar = styled.div`
  position: absolute;
  display: grid;
  justify-self: flex-end;
  z-index: 1;
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  background: white;
  right: 1vw;
  top: -3vh;
  & img {
    align-self: center;
    justify-self: center;
    display: block;
    width: 3.75rem;
    height: 3.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
  }
`;

export default ({
  files,
  user: { userName, avatar },
  title,
  createdAt,
  caption,
  isLiked,
  likeCount,
  newComment,
  currentItem,
  toggleLike,
  onKeyPress,
  comments,
  selfComments,
}) => (
  <>
    <Post>
      <ThumbnailWraper>
        <Thumbnail
          key={files[0].id}
          src={`${process.env.PUBLIC_URL}/img/${files[0].url}`}
        />
      </ThumbnailWraper>

      <Contents>
        <Avatar>
          <img src={`${process.env.PUBLIC_URL}/img/${avatar}`} alt="" />
        </Avatar>
        <CoverLetter>
          <UserName>{userName}</UserName>
          <Title>{title}</Title>
          <Info>
            <DateWrapper>
              {moment(createdAt).format('YYYY년 MM월 DD일')}
            </DateWrapper>
            <Dot />
            <LikeCountWrapper>
              {likeCount === 1 ? '1 ' : `${likeCount} `}개의 응원
            </LikeCountWrapper>

            <LikeWrapper onClick={toggleLike}>
              {isLiked ? <HeartFull /> : <HeartEmpty />}
            </LikeWrapper>
          </Info>
        </CoverLetter>
        <Content>{caption}</Content>
      </Contents>
    </Post>
  </>
);
