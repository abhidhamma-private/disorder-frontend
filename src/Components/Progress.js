import React from 'react';
import styled from 'styled-components';

const Progress = styled.div`
  display: grid;
  grid-auto-rows: 5vh;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.1vw;
  grid-auto-flow: column;
`;
const Item = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  color: white;
  background: #636469;
  border: 1px solid white;
`;
const Text = styled.div`
  align-self: center;
  justify-self: center;
`;

export default ({ background, diary, setDiary }) => {
  let scoreArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <Progress>
      {scoreArray.map(element => (
        <Item
          key={element}
          style={
            diary.score === undefined
              ? { background: '#636469' }
              : element <= diary.score
              ? { background: background }
              : { background: '#636469' }
          }
          onClick={() => setDiary(diary => ({ ...diary, score: element }))}>
          <Text>{element}</Text>
        </Item>
      ))}
    </Progress>
  );
};