import React,{useState} from 'react'
import CheckOutCard from '../../Components/CheckOutComponent/CheckOutComponent'
import { totalAmount,cartItemSelector } from '../../redux/cartSlice/cartSelector';
import { useSelector } from 'react-redux';
import PaymentDialog from '../../Components/PaymentDialog/PaymentDialog';


const CheckOut = () => {
  const [isOpen,setIsOpen]=useState(false)
  const total =useSelector(totalAmount);  
  const items = useSelector(cartItemSelector)
 
  return (
    <div className='flex flex-col mx-auto md:w-8/12  items-center pt-20 min-h-screen'>
      <h2 className='text-2xl font-semibold mb-5 text-yellow-500'>Check Out</h2>
        <div className = 'flex w-full bg-gray-200  rounded-t-lg text-lg font-semibold text-gray-600' >
          <p className='basis-2/4 flex justify-center '>Description</p>
          <p className='basis-1/4 flex justify-center '>Qty</p>
          <div className='basis-1/4 flex justify-around '>
            <p>Price</p>
            <p>Sub-Total</p>
          </div>
        </div>
        <div className='w-full bg-gray-300 rounded-b-lg '>
          { 
           items.length>0? items.map(item=>(
            <CheckOutCard  key={item.id}  item={item}/>
          )):
            <p className='text-3xl p-6 text-center'>Sorry, Buckeet is Empty</p>
          
          }
        </div>
        

      <div className={`${items.length>0? '':'hidden'} flex flex-row w-full justify-between px-5 py-5 my-2 rounded-lg drop-shadow-lg bg-gray-200 text-gray-600`}>
        <p className='text-lg font-semibold'>Total Payable</p>
        <p className='text-lg font-semibold'>$ {total}</p>
      </div>
      <button className={`${items.length>0? '':'hidden'} px-10 mb-10 hover:bg-yellow-600 hover:text-white transition duration-500 rounded-lg bg-yellow-400`} onClick={()=>setIsOpen(!isOpen)}>Pay Now</button>
      <PaymentDialog open={isOpen} setOpen={setIsOpen}/>
      
    </div>
  )
}

export default CheckOut;

