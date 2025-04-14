import React, { useRef } from 'react'
import SectionTitle from '../components/SectionTitle'
import myImage from "../assets/my-image.jpg"
import { motion, useInView } from 'framer-motion'
import Button from '../components/Button'
import resume from '../assets/resume.txt' 

const About = () => {
  const ref=useRef(null)
  const isInView=useInView(ref);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  } 
  const imageVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
  }
  const textVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut", delay: 0.2 } },
  }

 const handleDownload = () => {
 
     const link = document.createElement('a');
     link.href = resume;
     link.download = 'Yared_Kassa_Resume.txt';
     document.body.appendChild(link);
     link.click();
     document.body.removeChild(link);
   }

  return (
    <motion.section className='py-16' id='about' initial="hidden"
     ref={ref} variants={containerVariants} animate={isInView ? "visible" : "hidden"}>
      <SectionTitle title="About Me" />
      <div className='flex flex-col items-center mt-8 gap-10 md:mt-16 md:flex-row md:gap-3'>
        <motion.img src={myImage} alt="Yared Kassa"
         className='w-full flex md:w-1/3 rounded-full' variants={imageVariants} initial="hidden"
         animate={isInView ? "visible" : "hidden"}/> 
       <motion.div className='container flex-1' 
        variants={textVariants} 
        initial="hidden"
         animate={isInView ? "visible" : "hidden"}>
        <div className='max-w-lg'>
          <h1 className='font-serif text-3xl font-semibold md:text-5xl text-white/80'>Hi, I'm <span className='text-blue-500'>Yared Kassa</span> </h1>
          <p className='mt-3 text-sm text-white/60 md:text-base'>Welcome to my portfolio! Here you can find information about my skills and projects.</p>
        </div>
        <div>
          <Button className='mt-5' onClick={handleDownload}>Download My CV</Button>
        </div>
       </motion.div>
      </div>
    </motion.section>
  )
}

export default About
