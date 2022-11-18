import React from 'react';
import styled from 'styled-components';
import {ReactComponent as Bag} from '../../asset/shopping-bag.svg';


const CartIcon = () => {

    
    const handleClick=()=>{
      console.log('hello')
    }
    
  return (
    <Container onClick={()=>handleClick}>
        <ShoppingIcon/>
        <Count>0</Count>
    </Container>
  )
}

export default CartIcon


//styles below

const ShoppingIcon = styled(Bag)`
  width:24px;
  height:24px;
`
const Count = styled.span`
position:absolute;
font-size:10px;
font-weight:bold;
bottom:12px;
`

const Container = styled.div`
  width:45px;
  height:45px;
  position:relative;
  display:flex;
  align-items:center;
  justify-content:center;
  cursor:pointer;
`