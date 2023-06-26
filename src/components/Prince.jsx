import React from 'react'
import styled from 'styled-components'

const Prince_Container = styled.div `
display: flex;
 width: 100%;
 align-items: center;
 gap: 20px;

`
const Price_descont = styled.h2 `
 font-size: 32px;
 font-family: Fraunces;
 color: hsl(158, 36%, 37%);
`
const Original_price = styled.span `
 font-size: 14px ;
 font-family:Montserrat ;
 text-decoration: line-through;
 color: hsl(228, 12%, 48%);

`

export default function Prince() {
  return (
    <Prince_Container>
      <Price_descont>$149.99</Price_descont>
      <Original_price>$169.99</Original_price>
    </Prince_Container>
  )
}
