import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-white/5 mt-10'>
      <div className='container p-4 text-center'>
       
        <p className='text-white/40'>Connect with me on social media!</p>
        <div className='flex justify-center space-x-4 mt-4'>
          <a href='https://facebook.com' className='text-white text-2xl'><FaFacebook/></a>
          <a href='https://twitter.com' className='text-white text-2xl'><FaTwitter/></a>
          <a href='https://instagram.com' className='text-white text-2xl'><FaInstagram/></a>
        </div>
        <p className='text-orange-200 font-serif mt-4'>
            &copy; {new Date().getFullYear()} Yared Kassa. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
