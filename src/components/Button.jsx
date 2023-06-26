import React from 'react'
import styled from 'styled-components'
import CartIcon from '../icons/CartIcon'


const Btn = styled.button `
display: flex;
cursor: pointer;
 width: 100%;
 height: 55px;
 font-size: 16px;
 font-family: Montserrat;
 font-weight: 600;
 align-items: center;
 justify-content: center;
 margin-top: 10px;
 border: none;
 border-radius: 10px;
 gap: 10px;
 background-color: hsl(158, 36%, 37%);
color: #fff;
transition: ease-in-out 0.1s;

&:hover{
  background-color: hsl(157.89473684210526, 39.58333333333334%, 18.823529411764707%)
}

@media (max-width: 600px) {
   margin: 0;
  
  }
`

export default function Button() {
  return (
   
    <Btn>
      <CartIcon/> Add to Cart
      </Btn>
    
  )
}
