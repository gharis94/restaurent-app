import * as React from 'react';
import {useSelector} from 'react-redux';
import {getMenu} from '../../redux/menuSlice/menuSelector';
import MenuListComponent from '../MenuListComponent/MenuListComponent';
import DialogBox from '../DialogBox/DialogBox'


export default function InteractiveList() {
 
  const menu = useSelector(getMenu);
 // console.log(menu)
  return (
    <div  className = 'w-full flex flex-col justify-center items-center h-full mb-5' >
      <p className='text-2xl font-semibold'>Add/Manage Items</p>
      <div className='md:w-8/12 w-full mt-2 p-2 mb-4 mx-2'>
          <div className=' grid grid-cols-5 items-center  bg-slate-600  rounded-lg drop-shadow-2xl shadow-white mb-2 text-gray-200'>
        
        <p className='col-span-2 text-center  md:text-2xl text-sm w-full'>Description</p>
        <p className='hidden sm:inline col-span-1 top-6 md:text-2xl text-sm w-full left-96'>Category</p>
        <p className='col-span-1 top-6 md:text-2xl text-sm w-full right-28'>Price</p>
        <div className='col-span-2 sm:col-span-1 flex w-full justify-around '>
            <p>Display</p>
            <p>Delete</p>
        </div>
        </div>
      </div>
      <div className='md:w-8/12 w-full mt-2   p-2 mb-4'>
        {
          menu.length>0 && menu.map(item=>(
            <MenuListComponent key={item.id} data={item}/>
          ))
        }
      </div>
      <DialogBox/>
    
    </div>
  )
};