import * as React from 'react';
import {useSelector} from 'react-redux';
import {getMenu} from '../../redux/menuSlice/menuSelector';
import MenuListComponent from '../MenuListComponent/MenuListComponent';
import DialogBox from '../DialogBox/DialogBox'


export default function InteractiveList() {
 
  const menu = useSelector(getMenu);
  console.log(menu)
  return (
    <div  className = 'w-full flex flex-col justify-center items-center h-full mb-5' >
      <p className='text-2xl font-semibold'>Items on menu</p>
      
      <div className='md:w-8/12 w-full mt-2   p-2 mb-4'>
        {
          menu.length>0 && menu.map(item=>(
            <MenuListComponent key={item.id} data={item}/>
          ))
        }
      </div>
      <DialogBox/>
    </div>
  );
}