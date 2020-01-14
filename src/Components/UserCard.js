import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Avatar from './Avatar';
import FatText from './FatText';
import { Link } from 'react-router-dom';
import FollowButton from './FollowButton';

const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 4fr;
  align-items: center;
  height: 12vh;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;

const LinkInCard = styled(Link)`
  display: grid;
  justify-self: start;
  color: inherit;
  margin-bottom: 10px;
`;

const FollowWrapper = styled.div`
  align-self: center;
  justify-self: end;
  padding-right: 2vw;
`;

const UserCard = ({ id, userName, isFollowing, url, isSelf }) => (
  <Card>
    <Avatar avatar={url} />
    <LinkInCard to={`/${userName}`}>
      <FatText text={userName} />
    </LinkInCard>
    <FollowWrapper>
      {!isSelf && <FollowButton id={id} isFollowing={isFollowing} />}
    </FollowWrapper>
  </Card>
);

UserCard.propTypes = {
  id: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired,
  isFollowing: PropTypes.bool.isRequired,
  url: PropTypes.string.isRequired,
  isSelf: PropTypes.bool.isRequired,
};

export default UserCard;
