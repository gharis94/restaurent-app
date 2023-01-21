import React, { useEffect,useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';

import { useSelector } from 'react-redux';
import { getCategory, getMenu } from '../../redux/menuSlice/menuSelector';

const MenuComponent = () => {
    const menu = useSelector(getMenu);  
    const category = useSelector(getCategory);
    const [isEmpty,setIsEmpty] = useState(true)
  
  return (
    <div className=''>
        <div className='grid grid-cols-1 my-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  space-y-2  gap-4  mx-auto  min-h-screen'>
        {
            menu.length>0 && menu.filter(item=>{
                if(category === 'all' && item.isDisplay===true){
                    return item
                }else if(item.category === category && item.isDisplay===true){
                    
                    return true
                }else{
                    return false
                }
            }).map(item=>{
                return(
                <CardComponent key={item.id} item={item}/>
            )})
            /* (
                
            ) */
        }
    </div>
        {/* <div className='bg-blue-500 h-96'>
                    <p>Sorry No item available</p>
        </div> */}
    </div>
        
  )
}

export default MenuComponent;


