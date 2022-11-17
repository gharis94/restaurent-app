import React from 'react'
import { Outlet } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <h4>header</h4>
        <Outlet/>
        <h4>footer</h4>
    </div>
  )
}

export default Nav