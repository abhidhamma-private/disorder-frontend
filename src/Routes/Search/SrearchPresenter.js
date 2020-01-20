import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Loader from '../../Components/Loader';
import UserCard from '../../Components/UserCard';
import SquarePost from '../../Components/SquarePost';
import Input from '../../Components/Input';
import { BlackBackArrow } from '../../Components/Icons';
import useInput from '../../Hooks/useInput';
import { useHistory } from 'react-router-dom';
const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 7vh 100vh;
  background: ${props => props.theme.bgColor};
`;

const SearchInputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 9fr;
  height: 100%;
  justify-items: center;
  align-items: center;
  padding-right: 0.5rem;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background: ${props => props.theme.whiteColor};
`;

const BackArrowWrapper = styled.div`
  display: grid;
  justify-self: center;
  align-self: center;
`;

const SearchInput = styled(Input)`
  display: grid;
  background-color: ${props => props.theme.lightGreyColor};
  color: ${props => props.theme.dimgreyColor};
  padding: 7px;
  padding-left: 0.7rem;
  font-size: 18px;
  border-radius: 16px;
  height: auto;
  width: 95%;
  &::placeholder {
    text-align: center;
    padding-bottom: 5px;
    opacity: 0.8;
    font-weight: 200;
    color: ${props => props.theme.dimgreyColor};
  }
`;

const ContentsWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  background: ${props => props.theme.whiteColor};
`;
const UserSection = styled.div`
  display: grid;
  grid-template-rows: 3vh repeat(1fr);
`;

const PostSection = styled.div`
  display: grid;
  grid-template-rows: 3vh repeat(1fr);
`;

const WhiteBox = styled.div`
  border: 1px solid ${props => props.theme.borderColor};
  border-radius: 15px;
  background-color: white;
  width: 95%;
  height: 95%;
`;
const StartSection = styled.div`
  display: grid;
  border-bottom: 1px solid ${props => props.theme.INDEGO};
  height: 7vh;
  align-items: center;
  font-family: 'NanumSR';
  font-weight: 900;
  padding-left: 4vw;
`;

const EmptySection = styled.div`
  display: grid;
  height: 7vh;
  align-items: center;
  font-family: 'NanumSR';
  font-weight: 900;
  padding-left: 4vw;
`;
const SearchPresenter = ({ searchTerm, loading, data }) => {
  const history = useHistory();
  const search = useInput('');
  const onSearchSubmit = e => {
    e.preventDefault();
    history.push(`/search?term=${search.value}`);
  };
  if (searchTerm === undefined) {
    return (
      <Wrapper>
        <form onSubmit={onSearchSubmit}>
          <SearchInputWrapper>
            <BackArrowWrapper onClick={() => history.goBack()}>
              <BlackBackArrow />
            </BackArrowWrapper>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="검색하기"
            />
          </SearchInputWrapper>
        </form>
      </Wrapper>
    );
  } else if (loading === true) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <form onSubmit={onSearchSubmit}>
          <SearchInputWrapper>
            <BackArrowWrapper onClick={() => history.goBack()}>
              <BlackBackArrow />
            </BackArrowWrapper>
            <SearchInput
              value={search.value}
              onChange={search.onChange}
              placeholder="검색하기"
            />
          </SearchInputWrapper>
        </form>
        <ContentsWrapper>
          <WhiteBox>
            <StartSection>사람</StartSection>
            <UserSection>
              {data.searchUser.length === 0 ? (
                <EmptySection>찾는 단어가 포함된 유저가 없습니다.</EmptySection>
              ) : (
                data.searchUser.map(user => (
                  <UserCard
                    key={user.id}
                    userName={user.userName}
                    isFollowing={user.isFollowing}
                    url={user.avatar}
                    isSelf={user.isSelf}
                    id={user.id}
                  />
                ))
              )}
            </UserSection>
          </WhiteBox>
          <WhiteBox>
            <StartSection>포스트</StartSection>
            <PostSection>
              {data.searchPost.length === 0 ? (
                <EmptySection>
                  포스트의 제목이나 설명으로 시작하는 글이 없습니다.
                </EmptySection>
              ) : (
                data.searchPost.map(post => (
                  <SquarePost
                    key={post.id}
                    likeCount={post.likeCount}
                    commentCount={post.commentCount}
                    file={post.files[0]}
                  />
                ))
              )}
            </PostSection>
          </WhiteBox>
        </ContentsWrapper>
      </Wrapper>
    );
  } else {
    return <Wrapper />;
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchPresenter;
