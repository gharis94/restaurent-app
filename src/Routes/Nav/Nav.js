import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../Components/CartIcon/CartIcon';



const Nav = () => {

  const [isTop,setIsTop] = useState(true);

  const handleScroll=()=>{
      const position = window.scrollY
      if(position>200){
        setIsTop(false)
      }else{
        setIsTop(true)
      }
    }
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)

    return window.removeEventListener('scroll',handleScroll)

  },[isTop])
  return (
    <div className='relative'>
      <div  className = 'flex flex-row justify-between items-center  h-12 bg-slate-100 drop-shadow-xl  ' >
        <div className='px-2'>
            <NavLink className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2'
            } to='/admin'>Admin Console</NavLink>
            <NavLink  className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2'
            } to='/'>Home</NavLink>
            <NavLink className={({ isActive }) =>
              isActive ? 'bg-slate-300 py-1 px-4 rounded-lg drop-shadow-lg text-gray-600' : 'px-2'
            } to='/checkout'>Check Out</NavLink>
        </div>
        <CartIcon/>
      </div>
      
        <Outlet/>
        <Footer/>
      
        
    </div>
  )
}

export default Nav;

