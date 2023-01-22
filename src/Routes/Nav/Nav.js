import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../Components/CartIcon/CartIcon';
import { useSelector } from 'react-redux';
import { tableSelector } from '../../redux/tableSlice/tableSelector';

const Nav = () => {
  //const [isTop,setIsTop] =useState(true);
  const tableNo = useSelector(tableSelector)
  // const handleScroll=()=>{
  //   //console.log(window.scrollY)
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll);
  //   return ()=>window.removeEventListener('scroll',handleScroll)
  // },[])
  return (
    <div className='relative'>
      <div className = {
        `grid grid-cols-4 fixed top-0 w-full h-14 bg-slate-200 drop-shadow-xl z-10 `
      } >
        <div className='px-2 col-span-2 text-sm flex items-center'>
            {/* <NavLink className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2 hidden sm:flex'
            } to='/admin'>Admin Console</NavLink> */}
            <NavLink  className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2'
            } to='/'>Home</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2'
            } to='/checkout'>Check Out</NavLink>
        </div>
        <div  className = 'col-span-1 flex items-center' >
            <p className='font-semibold'>Table: <span>{tableNo}</span></p>
        </div>
        <div  className = 'col-span-1 flex items-center justify-end mr-2' >
            <CartIcon/>
        </div>
        
      </div>
      
        <Outlet/>
        <Footer/>
      
        
    </div>
  )
}

export default Nav;

