import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import avatar from '../../assets/image/avatar.png';
import thumbnail from '../../assets/image/1.jpeg';
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
  justify-content: flex-start;
  justify-items: flex-start;
  align-items: flex-start;
`;

const UserName = styled.div`
  font-weight: 900;
  color: #fa983a;
  align-self: flex-end;
`;

const Title = styled.div`
  margin-top: 5px;
  font-weight: 900;
  font-size: 25px;
`;

const Info = styled.div`
  color: #8aa6c1;
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
  top: -15px;
  & :nth-child(1) {
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

const Img = styled.img`
  margin-bottom: 5px;
`;
// {
//   thumbnail,
//   avatar,
//   writer,
//   title,
//   content,
//   createdAt,
//   href,
//   planId,
//   key,
// }

export default () => {
  const writer = '글쓴이';
  const title = '제목';
  const content = '요약';
  const href = '주소';
  const planId = '아이디';

  return (
    <>
      <Post>
        <ThumbnailWraper>
          <Link to={`${href}/${planId}`}>
            <Thumbnail src={thumbnail} />
          </Link>
        </ThumbnailWraper>

        <Contents>
          <Avatar>
            <Img src={avatar} alt="" />
          </Avatar>
          <CoverLetter>
            <UserName>{writer}</UserName>
            <Link to={`${href}/${planId}`}>
              <Title>{title}</Title>
            </Link>
            <Info>
              2019년 12월 14일
              {/* {moment(createdAt).format('YYYY년 MM월 DD일')} */}
              <Dot />
              5개의 응원
            </Info>
          </CoverLetter>
          <Content>{content}</Content>
        </Contents>
      </Post>
    </>
  );
};
