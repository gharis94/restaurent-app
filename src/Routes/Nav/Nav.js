import React,{useState,useEffect} from 'react';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import DropDown from '../../Components/DropDown/DropDaown';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Footer from '../../Components/Footer/Footer';
import { useNavigate,NavLink } from 'react-router-dom';


const Nav = () => {
  const navigate=useNavigate();
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
  const handleClick=()=>{
    navigate('/');
  }
  return (
    <>
      <div className='flex flex-row justify-between mx-2'>
        <div>
            <NavLink to='/admin'>Admin</NavLink>
        </div>
        
        <RestaurantMenuIcon onClick={()=>handleClick()} color='secondary' fontSize='large' sx={{padding:'15px', cursor:'pointer'}}/>
        <DropDown/>
      </div>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Nav;

const NavTop = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:'center';
  
`