import React from 'react'
import { BiLogoGraphql } from 'react-icons/bi'
import { menuItems } from '../constants/data'

const Mobile = ({menuOpen ,setMenuOpen }) => {

  const handleItemClick = () => {
    setMenuOpen(false);
  };
  
  return (
    <div className={`fixed top-0 left-o z-30 h-full w-3/4 transform border-r-2 border-white/15 bg-white/20 px-4 backdrop-blur transition-transform duration-300 ${menuOpen ? "translate-x-0": "-translate-x-full"}`}>
      <div className='mt-5'>
        <BiLogoGraphql className='cursor-pointer text-4xl text-white'/>
      </div>
      <hr className='my-3 border-2 border-white/6'/>
      <ul className='mt-5 flex-col flex space-y-3'>
       {menuItems.map((item) =>(
        <li key={item.href} onClick={handleItemClick}>
          <a href={item.href} className='px-2 py-2 nav-item'>{item.label}</a>
        </li>
       ) )}
        
      </ul>
    </div>
  )
}

export default Mobile
