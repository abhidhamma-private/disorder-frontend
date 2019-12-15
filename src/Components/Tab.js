import React from 'react';
import styled from 'styled-components';
import { Icon } from 'antd';
import { Link } from 'react-router-dom';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
`;

const Tab = styled(Link)`
  z-index: 10;
  display: grid;
  > i {
    display: grid;
  }

  i > svg {
    width: 50%;
    height: 50%;
    align-self: center;
    justify-self: center;
    color: ${props => props.theme.primaryColor};
  }

  &.active {
    & {
      border-bottom: 3px solid ${props => props.theme.ActiveColor};
    }
    > i > svg {
      color: ${props => props.theme.ActiveColor};
    }
  }
`;

export default () => {
  function menuToggle(event) {
    //1.각 tab에게 active 클래스를 없애준다.
    document
      .querySelectorAll('div > a')
      .forEach(a => (a.className = a.className.replace(' active', '')));

    //2.클릭한 컴포넌트에 active클래스를 추가한다.
    if (
      !document
        .querySelector(`a[href="${event.currentTarget.getAttribute('href')}"]`)
        .className.includes('active')
    ) {
      if (event.currentTarget.getAttribute('href') === '/feed') {
        document
          .querySelector('div > div > div:first-child')
          .setAttribute(
            'style',
            'display: grid;grid-template-columns: 3fr 3fr 1fr 1fr;'
          );
        document
          .querySelector('div > div')
          .setAttribute(
            'style',
            'grid-template-rows: minmax(7vh, 1fr) minmax(7vh, 1fr);'
          );
      } else {
        document
          .querySelector('div > div > div:first-child')
          .setAttribute('style', 'display:none');
        document
          .querySelector('div > div')
          .setAttribute('style', 'grid-template-rows: minmax(7vh, 1fr);');
      }
      document.querySelector(
        `a[href="${event.currentTarget.getAttribute('href')}"]`
      ).className += ' active';
    }
  }

  return (
    <>
      <Wrapper className="menu">
        <Tab to={'/feed'} onClick={menuToggle} className="active">
          <Icon type="team" />
        </Tab>
        <Tab to={'/diary'} onClick={menuToggle}>
          <Icon type="read" />
        </Tab>
        <Tab to={'/alarm'} onClick={menuToggle}>
          <Icon type="sound" />
        </Tab>
        <Tab to={'/board'} onClick={menuToggle}>
          <Icon type="message" />
        </Tab>
        <Tab to={'/me'} onClick={menuToggle}>
          <Icon type="user" />
        </Tab>
        <Tab to={'/etc'} onClick={menuToggle}>
          <Icon type="menu" />
        </Tab>
      </Wrapper>
    </>
  );
};
