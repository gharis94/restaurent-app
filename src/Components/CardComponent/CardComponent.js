import  React from 'react';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/cartSlice/cartSlice'

export default function CardComponent({item}) {
    
  const dispatch = useDispatch();
  
  const handleAdd =()=>{
      dispatch(addItemToCart(item));
    }
  return (
    <div  className = 'flex flex-col  md:w-56  w-[300px]  h-[350px] gap-4 bg-slate-100  drop-shadow-2xl p-2 rounded-lg ' >

      <div className='flex flex-col justify-center'>
        <img className='w-[300px]  h-[230px] object-cover rounded-lg' loading='lazy' src={item.imageUrl? item.imageUrl:null}/>
      </div>
      <div className='flex flex-row justify-between text-gray-700'>
        <p className='truncate'>{item.name && item.name.toUpperCase()}</p>
        <p className='truncate'>{`PKR ${item.price}`}</p>
      </div>
      <button onClick = {() => handleAdd()}
        className = 'w-full bg-slate-200 hover:bg-slate-600 hover:text-white rounded-lg py-1 transition duration-300' >
        Add to Cart
      </button>
    </div>
  );
}
