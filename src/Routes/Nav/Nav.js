import React from 'react';
import { Outlet } from 'react-router-dom'
import Footer from '../../Components/Footer/Footer';
import { NavLink } from 'react-router-dom';
import CartIcon from '../../Components/CartIcon/CartIcon';
//import { useSelector } from 'react-redux';
//import { tableSelector } from '../../redux/tableSlice/tableSelector';

const Nav = () => {
  //const [isTop,setIsTop] =useState(true);
  //const tableNo = useSelector(tableSelector)
  // const handleScroll=()=>{
  //   //console.log(window.scrollY)
  // }

  // useEffect(()=>{
  //   window.addEventListener('scroll',handleScroll);
  //   return ()=>window.removeEventListener('scroll',handleScroll)
  // },[])
  return (
    <div className='relative '>
      <div className = {
        `flex items-center justify-between fixed top-0 w-full h-14 bg-white bg-opacity-50 drop-shadow-xl z-10 `
      } >
        
            
        <div className='pl-6 space-x-4 font-semi bold'>
          <a href='63df6eab6a21a83e200b1114' className='hover:text-yellow-500 active:text-yellow-500'>Back</a>
          <NavLink  className={({ isActive }) =>
              isActive ? ' text-yellow-500' : 'px-2'
            } to='/'>Menu</NavLink>
          <NavLink className={({ isActive }) =>
              isActive ? 'text-yellow-500' : 'px-2'
            } to='/checkout'>Check Out</NavLink>
        </div>
            
        
        {/* <div  className = 'col-span-1 flex items-center' >
            <p className='font-semibold'>Table: <span>{tableNo}</span></p>
        </div> */}
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

