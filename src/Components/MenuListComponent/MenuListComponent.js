import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
const MenuListComponent = ({data}) => {
    const {category,id,imageName,imageUrl,name,price} = data
  return (
    <div className=' flex flex-row items-center hover:bg-slate-600 w-full min-w-fit bg-slate-400 rounded-lg drop-shadow-2xl shadow-white mb-2'>
        <div className='p-2 flex-1/4 w-full'>
            <img className='rounded-full object-cover w-16 h-16' src={imageUrl} alt={imageName}/>
        </div>
        <p className='flex-1/4   md:text-2xl text-sm w-full'>{name}</p>
        <p className='flex-1/4 top-6 md:text-2xl text-sm w-full left-96'>{category}</p>
        <p className='flex-1/4 top-6 md:text-2xl text-sm w-full right-28'>{price}</p>
        <div className='flex-1/4 flex w-full justify-between'>
            <input type='checkbox' defaultChecked className=' w-5 h-5 '/>
            <button className=' '>
                <DeleteIcon color='primary'/>
             </button>
        </div>
        

    </div>
  )
}

export default MenuListComponent