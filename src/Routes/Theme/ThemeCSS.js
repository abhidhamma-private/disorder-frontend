import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: 8vh 5vh;
`;

export const ThemeWrapper = styled.div`
  display: grid;
  background: white;
`;

export const ThemeItem = styled.div`
  display: grid;
  color: white;
  padding: 1vw;
  font-size: 1rem;
`;
export const Title = styled.div`
  display: grid;
  font-family: 'KakaoB';
  font-size: 1.5rem;
  align-items: center;
  justify-items: center;
  color: white;
  background: #1c1c1c;
`;

export const TinyText = styled.div`
  display: grid;
  align-items: center;
  justify-items: center;
  font-size: 1rem;
  font-weight: 600;
  color: black;
  background: white;
`;

export const Text = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
`;

export const CheckWrapper = styled.div`
  display: grid;
  align-self: end;
  justify-self: end;
  padding: 1vw;

  :focus {
    transition: all 0.2s ease;
    transform: rotate(1turn);
  }
`;
