import React from 'react'
import Button from '../components/Button'
import { motion } from 'framer-motion'
import resume from '../assets/Yared_Kassa_CV.docx'

const HeroContent = ({variants}) => {

  const handleDownload = () => {

    const link = document.createElement('a');
    link.href = resume;
    link.download = 'yared-kassa-cv.docx';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  const handleLinkedIn = () => {
    window.location.href = 'https://www.linkedin.com/in/yared-kassa-81865a343'; 
  }

  return (
    <motion.div variants={variants} className='text-left md:max-w-72 lg:max-w-lg'>
      <p className='text-xl font-medium text-blue-300'> Yared Kassa</p>
      <h2 className='mt-4 font-serif text-3xl font-bold tracking-wide text-white/80 md:text-4xl lg:mt-8 lg:text-5xl'>Software Engineer</h2>
      <p className='mt-4 text-white/40 md:text-lg'>I am a software engineer and Woldia University graduate with expertise in software development, system design, and problem-solving. I build applications that enhance user experience and drive efficiency, and I’m now looking for opportunities to apply my skills and grow as a developer.</p>
      <div className='flex items-center gap-2 mt-5'>
        <Button onClick={handleLinkedIn}>Contact Me</Button>
       <Button variant='outline' onClick={handleDownload}>My Resume</Button> 
      </div>
    </motion.div>
  )
}

export default HeroContent
