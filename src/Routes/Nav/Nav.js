import React,{useState} from 'react';
import { Outlet } from 'react-router-dom'
import styled from 'styled-components'
import DropDown from '../../Components/DropDown/DropDaown';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import Footer from '../../Components/Footer/Footer';
import { useNavigate } from 'react-router-dom';

const Nav = () => {
  const navigate=useNavigate();
  const handleClick=()=>{
    navigate('/');
  }
  return (
    <>
      <NavTop>
        <RestaurantMenuIcon onClick={()=>handleClick()} color='secondary' fontSize='large' sx={{padding:'15px', cursor:'pointer'}}/>
        <DropDown/>
      </NavTop>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Nav;

const NavTop = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:'center'
  margin-top:10px;
  margin-left:10px;
`