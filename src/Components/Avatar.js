import React from 'react';
import styled from 'styled-components';

const Avatar = styled.img`
    align-self: center;
    justify-self: center;
    display: grid;
    width: 3.75rem;
    height: 3.75rem;
    -o-object-fit: cover;
    object-fit: cover;
    border-radius: 50%;
`;

export default ({ avatar, top, left, right, bottom, outSize, inSize }) => {
  const imgSize = `${inSize}rem`;
  return (
          <Avatar
            style={{ width: imgSize, height: imgSize }}
            src={`${process.env.PUBLIC_URL}/img/${avatar}`}
            alt=""
          />
  );
};
