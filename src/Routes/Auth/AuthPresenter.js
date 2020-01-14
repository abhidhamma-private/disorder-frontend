import React from 'react';
import styled from 'styled-components';
import Input from '../../Components/Input';
import OutLineButton from '../../Components/OutLineButton';
import Description from '../../Components/MainDescription';
import Brand from '../../Components/Brand';
import mainImage from '../../assets/image/3.jpeg';
const Wrapper = styled.div`
  display: grid;
  justify-items: center;
  align-items: center;
  grid-template-rows: 10vh 25vh 30vh 40vh;
  background: white;
`;

const MainImageWraper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: block;
  max-width: 500px;
`;

const MainImage = styled.img`
  background: #dee2e6;
  -o-object-fit: cover;
  object-fit: cover;
  display: block;
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  bottom: 5vh;
  width: 100%;
  height: auto;
`;
const FormWrapper = styled.div`
  display: grid;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  ${props => props.theme.whiteBox}
  border-radius:0px;
  width: 100%;
  max-width: 350px;
`;

const StateChanger = styled(Box)`
  text-align: center;
  padding: 20px 0px;
`;

const Link = styled.span`
  color: ${props => props.theme.activeColor};
  cursor: pointer;
`;

const Form = styled(Box)`
  padding: 40px;
  padding-bottom: 30px;
  margin-bottom: 15px;
  form {
    width: 100%;
    input {
      width: 100%;
      &:not(:last-child) {
        margin-bottom: 7px;
      }
    }
    button {
      margin-top: 10px;
    }
  }
`;

export default ({ action, userName, setAction, onSubmit, secret }) => {
  return (
    <Wrapper>
      <Brand />
      <MainImageWraper>
        <MainImage src={mainImage} />
      </MainImageWraper>
      <Description />
      <FormWrapper>
        <Form>
          {action === 'logIn' && (
            <form onSubmit={onSubmit}>
              <Input placeholder={'닉네임'} {...userName} />
              <OutLineButton text={'로그인'} />
            </form>
          )}
          {action === 'signUp' && (
            <form onSubmit={onSubmit}>
              <Input placeholder={'닉네임'} {...userName} />
              <OutLineButton text={'입장하기'} />
            </form>
          )}
          {action === 'confirm' && (
            <form onSubmit={onSubmit}>
              <Input placeholder="키를 입력해주세요" required {...secret} />
              <OutLineButton text={'확인'} />
            </form>
          )}
        </Form>

        {action !== 'confirm' && (
          <StateChanger>
            {action === 'logIn' ? (
              <>
                아직 회원이 아니세요?{' '}
                <Link onClick={() => setAction('signUp')}>회원가입</Link>
              </>
            ) : (
              <>
                계정이 있으세요?{' '}
                <Link onClick={() => setAction('logIn')}>로그인</Link>
              </>
            )}
          </StateChanger>
        )}
      </FormWrapper>
    </Wrapper>
  );
};
