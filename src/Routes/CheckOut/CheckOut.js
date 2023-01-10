import React,{useState} from 'react'
import CheckOutCard from '../../Components/CheckOutComponent/CheckOutComponent'
import { totalAmount,cartItemSelector } from '../../redux/cartSlice/cartSelector';
import { useSelector } from 'react-redux';
import PaymentDialog from '../../Components/PaymentDialog/PaymentDialog';


const CheckOut = () => {
  const [isOpen,setIsOpen]=useState(false)
  const total =useSelector(totalAmount);
  const items = useSelector(cartItemSelector)
  console.log(items)
  return (
    <div className='flex flex-col mx-auto md:w-8/12 h-screen items-center'>
      <h2 className='text-2xl font-semibold mb-5'>Check Out</h2>
        <div div className = 'flex w-full bg-red-300 rounded-t-lg text-lg font-semibold' >
          <p className='basis-2/4 flex justify-center '>Description</p>
          <p className='basis-1/4 flex justify-center '>Qty</p>
          <div className='basis-1/4 flex justify-around '>
            <p>Price</p>
            <p>Sub-Total</p>
          </div>
        </div>
        <div className='w-full bg-slate-300 rounded-b-lg overflow-y-scroll'>
          { 
            items.map(item=>(
            <CheckOutCard  key={item.id}  item={item}/>
          ))
          
          }
        </div>
        
      <div className='flex flex-row w-full justify-between px-5 py-5 my-2 rounded-lg drop-shadow-lg bg-red-300'>
        <p className='text-lg font-semibold'>Total Payable</p>
        <p className='text-lg font-semibold'>PKR: {total}</p>
      </div>
      <button className='px-10 mb-10 hover:bg-red-300 hover:text-white transition duration-500 rounded-lg bg-slate-400' onClick={()=>setIsOpen(!isOpen)}>Pay Now</button>
      <PaymentDialog open={isOpen} setOpen={setIsOpen}/>
    </div>
  )
}

export default CheckOut;

