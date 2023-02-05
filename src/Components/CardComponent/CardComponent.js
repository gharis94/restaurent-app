import  React from 'react';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/cartSlice/cartSlice'

export default function CardComponent({item}) {
    
  const dispatch = useDispatch();
  
  const handleAdd =()=>{
      dispatch(addItemToCart(item));
    }
  return (
    <div  className = 'flex flex-col  md:w-56  w-[300px]  h-[350px] gap-4 bg-slate-100  drop-shadow-2xl  ' >

        <img className='w-[300px]  h-[230px] object-cover ' loading='lazy' alt='dish' src={item.imageUrl? item.imageUrl:null}/>
      
      <div className='flex flex-row justify-between text-gray-700 p-2'>
        <p className='truncate font-semibold'>{item.name && item.name.toUpperCase()}</p>
        <p className='truncate font-semibold'>{`$${item.price}`}</p>
      </div>
      <button onClick = {() => handleAdd()}
        className = ' bg-slate-200 hover:bg-yellow-500 hover:text-gray-500 rounded-lg py-1 mx-2 transition duration-300' >
        Add to Cart
      </button>
    </div>
  );
}
