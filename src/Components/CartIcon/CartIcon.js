import React from 'react'
import {ReactComponent as Bag} from '../../asset/shopping-bag.svg';
import {useSelector} from 'react-redux'
import {totalCount} from '../../redux/cartSlice/cartSelector'
import { useNavigate } from 'react-router-dom';

const CartIcon = () => {
    const navigate=useNavigate()
    const count = useSelector(totalCount);
    
  return (
    <div className='relative mr-6 flex justify-center  items-center cursor-pointer' onClick={()=>navigate('/checkout')}>
        <Bag className='h-6 w-6 '/>
        <span className='absolute text-sm top-1'>{count}</span>
    </div>
  )
}

export default CartIcon


//styles below

