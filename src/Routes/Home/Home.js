import React from 'react'
import MenuComponent from '../../Components/MenuComponent/MenuComponent'
import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <H2 >Menu</H2>
      <MenuComponent/>      
    </>
  )
}

export default Home;

const H2 = styled.h2`
font-weight: bold;
font-size: 2rem;
`