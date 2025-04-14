import { BiLogoGraphql, BiMenuAltRight, BiX } from 'react-icons/bi'
import { menuItems } from '../constants/data'
import { motion } from 'framer-motion'

const Header = ({menuOpen, setMenuOpen}) => {

  const logoVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut',}, 
  },}
  const menuVariants = {
    hidden: { opacity: 0, },
    visible: {
      opacity: 1,
      transition: { duration: 1, staggerChildren: 0.2, ease: 'easeOut',  
    },
  },}

  const menuItemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (<div>
    <motion.header className='fixed top-0 z-10 w-full px-4 py-4' initial='hidden' animate='visible'>
    <nav className='container flex items-center justify-between rounded-full border-2 text-white border-white/10 bg-white/5 p-2 backdrop-blur'>
      <div className='flex items-center'>
        <motion.div className='flex items-center' variants={logoVariants} initial='hidden' animate='visible'>
          <BiLogoGraphql className='cursor-pointer text-4xl text-white md:hidden'/>
        </motion.div>

      <motion.ul className='hidden space-x-4 md:flex' variants={menuVariants} initial='hidden' animate='visible'>
        { 
          menuItems.map((item)=>(
            <motion.li key={item.href} variants={menuItemVariants}>
              <a href={item.href} className='nav-item'>{item.label}</a>
            </motion.li>
          ))
        }
      </motion.ul>
      </div> 

      <motion.button className='text-4xl text-white md:hidden' onClick={()=> setMenuOpen(!menuOpen)}
        aria-label='Toggle Menu'
        aria-expanded={menuOpen}
        variants={logoVariants}
        initial='hidden' animate='visible'>
        {menuOpen ? <BiX/> : <BiMenuAltRight/>}
      </motion.button>

    </nav>
    </motion.header>
    {menuOpen && (
      <div className='fixed inset-0 z-20 bg-black opacity-50'
      onClick={()=> setMenuOpen(false)}
        aria-label='close Menu'/>
    )}
  
    </div>
  )
}
 
export default Header
