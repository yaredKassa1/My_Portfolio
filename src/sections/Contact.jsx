import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import contactImage from '../assets/contact.svg'
import { contactDetails } from '../constants/data'
import ContactDetailCard from '../components/ContactDetailCard'
import { motion, useInView } from 'framer-motion'

const Contact = () => {
  const sectionRef=useRef(null)
  const isInView=useInView(sectionRef);

  const fadeInVariants = {
    hidden: { y:20, opacity: 0 },
    visible: { y:0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  } 
  const staggerContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
      }
    },
  }

  return (
    <motion.section className='lg:py-20 px-4 py-16' id='contact' 
     ref={sectionRef}
     variants={staggerContainer}
     initial="hidden"
     animate={isInView ? "visible" : "hidden"}>
      <SectionTitle title="Contact Me" />
      <div className='container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row'>
        <motion.div className='flex flex-col items-center justify-center' variants={fadeInVariants}>
        <img src={contactImage} alt="Contact" className='h-40' />
        </motion.div>
        <motion.div className='flex flex-col gap-5 flex-1' variants={fadeInVariants}> 
          <h1 className='font-serif font-bold text-3xl text-white/70'>Get in Touch</h1>
          <p className='text-white/60'>If you have any questions or want to work together, feel free to reach out!</p>
          <motion.div className='flex flex-col gap-5' variants={staggerContainer}>
            {contactDetails.map((contact, innerKey)=>(
              <motion.div key={innerKey} variants={fadeInVariants}>
                <ContactDetailCard contact={contact} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default Contact
