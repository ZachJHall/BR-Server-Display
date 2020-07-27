import React from 'react';

import styled from 'styled-components'

import BRLogo from '../media/BR_LOGO_SupernovaGold.svg'

const HeaderDiv = styled.div`
  background-color: #333333;
  height: auto;

  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  margin: 20px 0 20px 0;
  height: 75px;
  width: auto;
`

function Header() {
  return (
    <HeaderDiv>
      <Logo src={BRLogo} />
    </HeaderDiv>
  )
}

export default Header
