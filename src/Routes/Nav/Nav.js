import React,{useState} from 'react';
import { Outlet } from 'react-router-dom'
import CartIcon from '../../Components/CartIcon/CartIcon'
import styled from 'styled-components'
import DropDown from '../../Components/DropDown/DropDaown';

const Nav = () => {

  return (
    <>
      <NavTop>
        <DropDown/>
      </NavTop>
        
        <Outlet/>
        <h4>footer</h4>
    </>
  )
}

export default Nav;

const NavTop = styled.div`
  display:flex;
  justify-content:flex-end;
  margin-top:10px;
  margin-left:10px;
`