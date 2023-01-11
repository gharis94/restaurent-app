import React, { useContext } from 'react'
import styled from 'styled-components';
import {ReactComponent as Bag} from '../../asset/shopping-bag.svg';
import {useSelector} from 'react-redux'
import {totalCount} from '../../redux/cartSlice/cartSelector'
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const navigate=useNavigate()
    const count = useSelector(totalCount);
    
  return (
    <Container onClick={()=>navigate('/checkout')}>
        <ShoppingIcon/>
        <Count>{count}</Count>
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