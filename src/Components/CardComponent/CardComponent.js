import  React from 'react';
import {useDispatch} from 'react-redux';
import {addItemToCart} from '../../redux/cartSlice/cartSlice'

export default function CardComponent({item}) {
    const dispatch = useDispatch();
    const handleAdd =()=>{
      dispatch(addItemToCart(item));
    }
  return (
    <div className='flex flex-col  w-6/12 md:w-56  h-60 gap-4 bg-slate-300  drop-shadow-2xl p-2 rounded-lg'>

      <div className='flex flex-col justify-center'>
        <img className='w-full h-36 object-cover rounded-lg' src={item.imageUrl? item.imageUrl:null}/>
      </div>
      <div className='flex flex-row justify-between'>
        <p className='truncate'>{item.name && item.name.toUpperCase()}</p>
        <p className='truncate'>{` ${item.price}`}</p>
      </div>
      <button onClick = {() => handleAdd()}
        className = 'w-full hover:bg-slate-600 hover:text-white rounded-lg py-1 transition duration-300' >
        Add to Cart
      </button>
    </div>
  );
}
