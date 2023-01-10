import  React from 'react';

import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import {useSelector,useDispatch} from 'react-redux';
import {orderSelector} from '../../redux/orderSlice/orderSelector';
import TaskIcon from '@mui/icons-material/Task';
import {updateOrder} from '../../redux/orderSlice/orderSlice';

export default function CheckboxList() {
  const dispatch = useDispatch();
  const orders = useSelector(orderSelector);
    
    const handleupdate =(data)=>{
        dispatch(updateOrder(data));
    }

  return(
    <>
      <div className='md:w-8/12 w-full flex flex-row bg-red-200  items-center font-semibold text-lg  rounded-t-lg border-b-4'>
        <p className='basis-1/4 flex justify-center '>Amount</p>
        <div className = 'basis-2/4 flex flex-row justify-between' >
            <p className=''>Order Details</p>
            <p>Qty</p>
        </div>
        <p className='basis-1/4 flex justify-center'>Status</p>
      </div>

      <div className='md:w-8/12 w-full flex flex-col bg-slate-200 justify-center items-center border-b-2 border-black last:rounded-b-lg'>
        {orders?.length>0 && orders?.filter(item=>item.status===false).map(value=>(
          <div key={value.id} className='flex w-full flex-row items-center justify-around basis-2/4'>
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
    </>
    )
};