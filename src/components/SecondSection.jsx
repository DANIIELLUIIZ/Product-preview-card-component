import React from 'react'
import styled from 'styled-components'
import Prince from './Prince'
import Btn from './Button'


const Container_info = styled.section `
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
gap: 15px;
padding: 24px;


@media (max-width: 600px) {
justify-content: space-evenly;
max-width: 100%;
height: 60%;
}

`
const Product_name = styled.h4 `
 font-size: 13px;
 font-family: Montserrat;
 font-weight: 500;
 letter-spacing: 4px;
 color:hsl(228, 12%, 48%); 
`

const Title = styled.h1 `
 font-size: 32px;
 font-family: Fraunces;

`
const Description = styled.p `
 font-size: 14px;
 font-family:Montserrat ;
 line-height: 1.8;
 color:hsl(228, 13.944223107569723%, 49.21568627450981%);



`

export default function SecondSection() {
  return (
    <Container_info>
      <Product_name>PERFUME</Product_name>
      <Title>Gabrielle Essence Eau De Parfum</Title>
      <Description>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</Description>

      <Prince/>
      <Btn/>
    </Container_info>
  )
}
