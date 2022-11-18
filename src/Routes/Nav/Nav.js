import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import styled from 'styled-components'

const Nav = () => {
  return (
    <>
      <NavTop>
        <Header/>
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