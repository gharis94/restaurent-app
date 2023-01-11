import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
const Footer = () => {
  return (
    <div className='bg-red-300 h-36 flex'>
      <div className=' basis-1/3 flex flex-col  justify-center items-start ml-5'>
          <div className='flex items-center my-2 text-gray-500'>
            <FacebookIcon/>
            <p className='pl-2'>www.facebook.com</p>
          </div>
          <div className='flex items-center my-2 text-gray-500'>
            <InstagramIcon/>
            <p className='pl-2'>www.instagram.com</p>
          </div>
          <div className='flex items-center my-2 text-gray-500'>
            <TwitterIcon/>
            <p className='pl-2 ml-2'>www.twitter.com</p>
          </div>
          
          
      </div>
      <div  className = 'basis-1/3 flex flex-col  justify-center items-start' >
        <div className='flex items-center my-2 text-gray-500'>
            <PhoneIcon/>
            <p className='pl-2'>+25405054805</p>
          </div>
          <div className='flex items-center  my-2 text-gray-500'>
            <EmailIcon/>
            <p className='pl-2'>example@google.com</p>
          </div>
      </div>
      <div className = 'basis-1/3 flex flex-col  justify-center items-start' >
        
        <div className='flex items-center  my-2 text-gray-500'>
            <FmdGoodIcon/>
            <p  className='pl-2 bg-transparent decoration-none'>Abc building street abc area abc city abc</p>
          </div>
      </div>
         
    </div>
  )
}

export default Footer
