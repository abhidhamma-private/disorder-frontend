import styled from 'styled-components';
import Input from '../../Components/Input';
export const Wrapper = styled.div`
  display: grid;
  background: white;
  grid-template-rows: 8vh 84vh 8vh;
`;

export const Text = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: white;
`;
export const TitleText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1.5rem;
  color: white;
`;
export const ChatHandlerWrapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  height: 7vh;
  justify-items: center;
  align-items: center;
  border-bottom: 1px solid ${props => props.theme.borderColor};
  background-color: ${props => props.theme.activeColor};
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.05);
`;

export const BackArrowWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-self: center;
`;
export const Title = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  font-family: 'KakaoB';
  color: white;
  width: 100%;
  height: 100%;
`;
export const RestartWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  justify-self: center;
  align-self: center;
`;

export const ScrollAble = styled.div`
  display: block;
  overflow-y: scroll;
  transform: rotate(180deg);
  ::-webkit-scrollbar {
    display: none;
  }
`;

export const ChatWrapper = styled.div`
  display: grid;
  transform: rotate(180deg);
  grid-gap: 1vh;
  background: white;
  padding: 2vw;
  margin-bottom: 1vh;
  align-content: end;
  align-self: end;
`;

export const MyChatText = styled.div`
  display: grid;
  padding: 2vw;
  align-self: start;
  justify-self: center;
  font-size: 1.5rem;
  color: black;
`;

export const NotMyChatText = styled.div`
  display: grid;
  padding: 2vw;
  align-self: start;
  justify-self: center;
  font-size: 1.5rem;
  color: white;
`;

export const MyBox = styled.div`
  display: grid;
  align-self: center;
  justify-self: end;
  background: ${props => props.theme.myChatGrey};
  border-radius: 13px;
`;

export const NotMyBoxWrapper = styled.div`
  display: grid;
  grid-gap: 1vh;
  grid-auto-rows: 15vw;
  grid-template-columns: 15vw minmax(0, 60vw);
  height: 100%;
`;

export const NotMyBox = styled.div`
  display: grid;
  align-self: center;
  justify-self: start;
  background: ${props => props.theme.notMyChatGrey};
  border-radius: 13px;
`;

export const Avatar = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  height: 85%;
  width: 85%;
  border-radius: 20px;
  background: ${props => props.theme.dimgreyColor};
`;

export const AvatarText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: white;
`;

export const DateWapper = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  margin-bottom: 10vw;
`;
export const DateText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 3vw;
  color: dimgrey;
`;
export const DateTail = styled.div`
  border-bottom: 0.5vw solid #dee2e6;
  margin-bottom: 0.4vw;
`;

export const InputWrapper = styled.div`
  display: grid;
  height: 8vh;
  align-self: end;
  grid-template-columns: 1fr 1fr 6fr 1fr;
`;
export const Emoji = styled.div`
  display: grid;
  width: 8vh;
  height: 8vh;
  align-items: center;
  justify-items: center;
  background: ${props => props.theme.activeColor};
`;

export const SvgWrapper = styled.div`
  display: grid;
`;
export const Empty = styled.div`
  display: grid;
  background: white;
`;
export const StyledInput = styled(Input)`
  display: grid;
  height: 100%;
  font-size: 1.5rem;
  padding: 0;
  outline: none;
  border: none;
`;
export const Send = styled.div`
  display: grid;
  width: 8vh;
  height: 8vh;
  background: ${props => props.theme.activeColor};
`;

export const SendText = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
  font-size: 1rem;
  color: white;
`;
