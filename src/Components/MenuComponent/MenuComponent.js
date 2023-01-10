import React, { useEffect } from 'react';
import CardComponent from '../CardComponent/CardComponent';

import { useSelector } from 'react-redux';
import { getCategory, getMenu } from '../../redux/menuSlice/menuSelector';

const MenuComponent = () => {
    const menu = useSelector(getMenu);
    const category = useSelector(getCategory);
    
  
  return (
    
        <div className='flex md:flex-row flex-wrap flex-col  justify-center items-center gap-4  my-10'>
        {
            menu.length>0 && menu.filter(item=>{
                if(category === 'all'){
                    return item
                }else if(item.category === category){
                    return true
                }else{
                    return false
                }
            }).map(item=>(
                <CardComponent key={item.id} item={item}/>
            ))
        }
    </div>
  )
}

export default MenuComponent;


