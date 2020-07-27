import React from 'react';
import styled from 'styled-components'

import SiteCard from './siteCard'

const BodyDiv = styled.div`

  display: flex;
  flex-direction: column;

  justify-content: space-around;
`


function Body() {
  return (
    <BodyDiv>
      <SiteCard company = "Knights Basketball Academy"  url="https://knightsbasketballacademy.com/" />
      <SiteCard company = "GreenSide LawnCare"  url="https://www.greensidelawncare.com/" />
      <SiteCard company = "Integrated Openings"  url="cardinaldoorandhardware.info" />

    </BodyDiv>
  )
}

export default Body
