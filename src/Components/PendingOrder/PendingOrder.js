import  React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useSelector,useDispatch} from 'react-redux';
import {orderSelector} from '../../redux/orderSlice/orderSelector';

import {updateOrder} from '../../redux/orderSlice/orderSlice';

export default function CheckboxList() {
  const dispatch = useDispatch();
  const orders = useSelector(orderSelector);
    
    const handleupdate =(data)=>{
      const newData={
        ...data,
        status:'fullfilled'
      }
        dispatch(updateOrder(newData));
    }

  return(
    <div className='my-10 w-full flex flex-col items-center min-h-screen'>
      <div className='md:w-8/12 w-full flex flex-row bg-slate-700  items-center font-semibold text-lg  rounded-t-lg border-b-4 text-gray-300'>
        <p className='basis-1/4 flex justify-center '>Amount</p>
        <div className = 'basis-2/4 flex flex-row justify-between' >
            <p className=''>Order Details</p>
            <p>Qty</p>
        </div>
        <p className='basis-1/4 flex justify-center'>Status</p>
      </div>

      <div className='md:w-8/12 w-full flex flex-col bg-slate-300 justify-center items-center mb-6 border-b-2  last:rounded-b-lg '>
        {orders?.length>0 && orders?.filter(item=>item.status===false).map(value=>(
          <div key={value.id} className='flex w-full flex-row items-center border-b-2 border-gray-400 last:border-b-none justify-around basis-2/4'>
            <p className='basis-1/4 flex justify-center text-lg'>{value.amount}</p>
            <div className='w-full basis-2/4 '>
              {value.items.map((item,i)=>(
                <div className='l flex justify-between' key={i}>
                  <p>{item.name}</p>
                  <p>{item.quantity}</p>
                </div>
                
              ))}
            </div>
            <button onClick={()=>handleupdate(value)} className='basis-1/4'><CheckCircleIcon color='primary'/></button>
          </div>
        ))}
      </div>
    </div>
    )
};