import React from 'react'
import styled from 'styled-components'
import DesktopImg from '../img/image-product-desktop.jpg'
import MobileImg from '../img/image-product-mobile.jpg'




const Product = styled.picture `
min-width: 50%;
height: 100%;
display: flex;


@media (max-width: 600px) {
   width: 100%;
   height: 40%;
   display: flex;
   flex-direction: column;
   
  }
`


const ProductSource = styled.source `
 width: 100%;
height: 100%;
`
const ProductImg= styled.img `
 width: 100%;
height: 100%;
`

export default function FirstSection(){

    return (
     <Product>
      <ProductSource media='(max-width:600px)' srcSet={MobileImg}/>
      <ProductImg src={DesktopImg} />
     </Product>
    )
  }
 

  
