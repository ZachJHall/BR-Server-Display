import React, { useEffect, useState } from 'react';

import styled from 'styled-components'



const CardDiv = styled.div`

  margin: 20px 0 20px 0;

  box-shadow: inset 0 1px 0 hsl(224, 84%, 74%);
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, .2);

  height: auto;

  display: flex;

  justify-content: space-around;

  background-color: hsl(204, 31%, 98%);

  &:nth-child(even){
    background-color: hsl(204, 31%, 94%)
    })


`

const LeftDiv = styled.div`

  margin-top: 40px;
  margin-bottom: 40px;

  width: 50%;

  display: flex;

  align-items: center;

  flex-direction: column;
`

const RightDiv = styled(LeftDiv)`

  align-items: center;
`

 const SiteLink = styled.a`
   text-decoration: none;

   color: hsl(186, 90%, 20%);

   &:hover {
     color: hsl(186, 90%, 35%)
   }
 `

const CompanyText = styled.h3`
  font-size: 35px;
  font-family: "Nunito Sans";


`

const StatusText = styled(CompanyText)`

  color: ${props => props.liveColor ? "hsl(103, 71%, 54%)" : "hsl(339, 93%, 54%)"};



`

const ContactText = styled(CompanyText)`

  font-size: 15px;
`

const ContactLink = styled(SiteLink)`
  margin-top: 10px;
`

function SiteCard(props) {

  const [liveStatus, setLiveStatus] = useState(null);

  

  const [temp, setTemp] = useState(0)

  let url = props.url + 'wp-json'

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will run every second!');
      fetch(url)
      .then(response=>response.ok)
      .then(data =>setLiveStatus(data))
    }, 1000);
    return () => clearInterval(interval);
  });



  
 


  return (
    <CardDiv>

      <LeftDiv>
      <SiteLink href={props.url} target="_blank" rel="noopener noreferrer"><CompanyText>{props.company}</CompanyText></SiteLink>

      <ContactLink href = {"mailto:" + props.email}> <ContactText>Contact</ContactText> </ContactLink>
      </LeftDiv>

      <RightDiv>
        { (liveStatus)
          ? <StatusText liveColor>Live</StatusText>
          : <StatusText>Down</StatusText>
         }
      </RightDiv>

    </CardDiv>
  )
}

export default SiteCard
