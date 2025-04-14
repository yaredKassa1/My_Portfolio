import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import { contactDetails } from '../constants/data'
import ContactDetailCard from '../components/ContactDetailCard'
import { motion, useInView } from 'framer-motion'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const Contact = () => {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const officeLocation = {
    lat: 9.0195773,
    lng: 38.8202682
  }

  const mapContainerStyle = {
    width: '100%',
    height: '300px',
    borderRadius: '12px',
    border: '2px solid rgba(255,255,255,0.1)'
  }

  const fadeInVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.6, ease: "easeOut" } 
    },
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
    <motion.section 
      className='lg:py-20 px-4 py-16' 
      id='contact'
      ref={sectionRef}
      variants={staggerContainer}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <SectionTitle title="Contact Me" />
      
      <div className='container mt-10 flex flex-col gap-10 rounded-2xl border-2 border-white/10 bg-white/5 p-10 md:flex-row'>

        <motion.div 
          className='flex flex-col gap-10 w-full md:w-1/2' 
          variants={fadeInVariants}
        >
          {/* <img src={contactImage} alt="Contact" className='h-40 self-center' /> */}
          
        
          <motion.div variants={fadeInVariants}>
            <h3 className='text-white/70 mb-3 text-xl font-semibold'>Our Office</h3>
            <LoadScript googleMapsApiKey="AIzaSyAOZMeheW9CCYMdcgpmWedE0cnw9vFOvNc">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={officeLocation}
                zoom={15}
              >
                <Marker position={officeLocation} />
              </GoogleMap>
            </LoadScript>
          </motion.div>
        </motion.div>

    
        <motion.div 
          className='flex flex-col gap-5 flex-1' 
          variants={fadeInVariants}
        > 
          <h1 className='font-serif font-bold text-3xl text-white/70'>Get in Touch</h1>
          <p className='text-white/60'>If you have any questions or want to work together, feel free to reach out!</p>
          
          <motion.div className='flex flex-col gap-5' variants={staggerContainer}>
            {contactDetails.map((contact, innerKey) => (
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