import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import { useNavigate } from 'react-router-dom';

const Footer = () => {
  const navigateTo = useNavigate();
  return (
    <div className='bg-slate-700  grid grid-cols-1 sm:grid-cols-3'>
      <div className='  flex flex-col  justify-center items-start ml-5'>
          <div className='flex items-center my-2 text-gray-300'>
            <FacebookIcon/>
            <p className='pl-2'>www.facebook.com</p>
          </div>
          <div className='flex items-center my-2 text-gray-300'>
            <InstagramIcon/>
            <p className='pl-2'>www.instagram.com</p>
          </div>
          <div className='flex items-center my-2 text-gray-300'>
            <TwitterIcon/>
            <p className='pl-2 ml-2'>www.twitter.com</p>
          </div>
          <div  className = 'flex items-center my-2 text-gray-300' >
              <p onClick={()=>navigateTo('/admin')} className='pl-10 underline text-sm'>Admin Console?</p>
          </div>
          
      </div>
      <div className = 'flex flex-col  justify-center items-start ml-5' >
        <div className='flex items-center my-2 text-gray-300'>
            <PhoneIcon/>
            <p className='pl-2'>+25405054805</p>
          </div>
          <div className='flex items-center  my-2 text-gray-300'>
            <EmailIcon/>
            <p className='pl-2'>example@google.com</p>
          </div>
      </div>
      <div className = ' flex flex-col  justify-center items-start ml-5' >
        
        <div className='flex items-center  my-2 text-gray-300'>
            <FmdGoodIcon/>
            <p  className='pl-2 bg-transparent decoration-none'>Abc building street abc area abc city abc</p>
          </div>
      </div>
         
    </div>
  )
}

export default Footer
