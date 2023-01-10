import React from 'react'
import MenuComponent from '../../Components/MenuComponent/MenuComponent'
import styled from 'styled-components'
import CourseSelector from '../../Components/CourseSelector/CourseSelector'

const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center'>
      <h2 className='text-2xl font-semibold'>Menu</h2>
      <CourseSelector/>
      <MenuComponent/>      
    </div>
  )
}

export default Home;

const H2 = styled.h2`
font-weight: bold;
font-size: 2rem;
`