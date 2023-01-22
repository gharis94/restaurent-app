import React,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { setTableNo } from '../../redux/tableSlice/tableSlice';

const Modal = ({isOpen,set}) => {
    const [tableNo,setTableNum] = useState('');
    const dispatch=useDispatch();
    if(!isOpen)return 
    
    const handleSubmit=(e) =>{
        e.preventDefault()
        console.log(tableNo);
        set(false);
        dispatch(setTableNo(tableNo))
    }
    return (
    <div className='fixed  flex justify-center items-center backdrop-blur-sm inset-0 bg-black bg-opacity-70 h-full w-full z-20' >
        <div className='p-2 md:h-1/4 md:w-1/4 bg-white opacity-100 z-10  drop-shadow-2xl rounded-lg'>
            <form onSubmit={(e)=>handleSubmit(e)} className='mt-5 flex flex-col justify-center items-center'>
                <label className='text-lg font-semibold'>Please Enter the table number</label>
                <input value={tableNo} className='bg-slate-200 rounded-lg my-2 w-4/5 outline-none text-center' type='number' onChange={(e)=>setTableNum(e.target.value)}/>
                <button className='px-10 py-1 bg-slate-500 rounded-lg hover:bg-slate-800 hover:text-white' type='submit'>Confirm</button>
            </form>
               
        </div>
    </div>
  )
}   

export default Modal