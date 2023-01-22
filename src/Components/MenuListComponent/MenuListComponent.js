import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { updateMenu } from '../../redux/menuSlice/menuSlice';
import { useDispatch } from 'react-redux';

const MenuListComponent = ({data}) => {
    const {category,id,imageName,imageUrl,name,price,isDisplay} = data;
    const dispatch=useDispatch();

    const handleCheck =()=>{
      //console.log('check')
      const newData ={
        ...data,
        isDisplay:!isDisplay
      }
      //console.log(newData)
      
      dispatch(updateMenu(newData))    
    }
  return (
    <div className=' grid grid-cols-5 items-center  hover:bg-slate-600 w-full min-w-fit bg-slate-400 rounded-lg drop-shadow-2xl shadow-white mb-2'>
        <div className='p-2 col-span-1 w-full'>
            <img className='rounded-full object-cover w-16 h-16' src={imageUrl} alt={imageName}/>
        </div>
        <p className='col-span-1   md:text-2xl text-sm w-full'>{name}</p>
        <p className='hidden sm:inline col-span-1 top-6 md:text-2xl text-sm w-full left-96'>{category}</p>
        <p className='col-span-1 top-6 md:text-2xl text-sm w-full right-28'>{price}</p>
        <div className='col-span-2 sm:col-span-1 flex w-full justify-around items-center '>
            <input type='checkbox' checked={isDisplay} className=' w-5 h-5 ' onChange={()=>handleCheck()}/>
            <button className=' '>
                <DeleteIcon color='primary'/>
             </button>
        </div>
        

    </div>
  )
}

export default MenuListComponent