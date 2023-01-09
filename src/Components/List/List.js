import * as React from 'react';
import {useSelector} from 'react-redux';
import {getMenu} from '../../redux/menuSlice/menuSelector';
import MenuListComponent from '../MenuListComponent/MenuListComponent';



export default function InteractiveList() {
 
  const menu = useSelector(getMenu);

  return (
    <div  className = 'w-full flex flex-col justify-center items-center' >
      <p className='text-2xl font-semibold'>Items on menu</p>
      
      <div className='w-8/12 mt-2  p-2'>
        {
          menu.length>0 && menu.map(item=>(
            <MenuListComponent key={item.id} data={item}/>
          ))
        }
      </div>
    </div>
  );
}