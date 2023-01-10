import React from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { getCategory } from '../../redux/menuSlice/menuSelector';
import {setCategory} from '../../redux/menuSlice/menuSlice'

const items=['main','breakfast','lunch','dinner','desert','drink','all']

const CourseSelector = () => {
    const dispatch=useDispatch();
    const category = useSelector(getCategory);
    
    const handleClick=(e)=>{
        
        dispatch(setCategory(e))
    }
  return (
    <div className='w-full flex  flex-row justify-center mt-4 px-2'>
        <div className = 'flex flex-row flex-wrap justify-center w-7/12 ' >
        {
            items.map((item,i)=>(
                <div key={i} className={`rounded-lg m-2 ${category===item?'bg-slate-500':'bg-slate-400'} px-3 cursor-pointer`} onClick={()=>handleClick(item)}>
                    <p className='text-white'>{item.toUpperCase()}</p>
                </div>
            ))
        }
    </div>
    </div>
    
  )
}

export default CourseSelector;