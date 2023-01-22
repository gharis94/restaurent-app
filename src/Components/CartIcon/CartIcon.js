import React, { useContext } from 'react'
//import styled from 'styled-components';
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
