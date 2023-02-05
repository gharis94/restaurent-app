import React from 'react'
import MenuComponent from '../../Components/MenuComponent/MenuComponent'
import CourseSelector from '../../Components/CourseSelector/CourseSelector'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center pt-20'>
      <h2 className='text-3xl font-semibold text-yellow-500 my-4'>Menu</h2>
      <CourseSelector/>
      <MenuComponent/>      
    </div>
  )
}

export default Home;

