import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center ml-auto mr-auto mb-auto min-h-screen flex flex-col items-center justify-center gap-4'>
      <motion.div
      initial={{scale: 0}}
      whileInView={{scale: 1}}
      transition={{duration: 0.8, type: 'spring', stiffness: 100}}
      className='flex mt-[6.5rem]'>
        <Image src='/profile-header.png' alt='profile image' width={0} height={0} className='w-32 h-auto rounded-full' sizes='100vw' priority />
      </motion.div>

      <motion.h3 
      initial={{y: -20, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.6, delay: 0.3}}
      className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
        Hi! I&apos;m Joshua Nelson <Image src={assets.hand_icon} alt='' className='w-6' />
      </motion.h3>

      <motion.h1 
      initial={{y: -30, opacity: 0}}
      whileInView={{y: 0, opacity: 1}}
      transition={{duration: 0.8, delay: 0.5}}
      className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
        Computer Science student with a passion for Machine Learning
      </motion.h1>

      <motion.p
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.6, delay: 0.7}}
      className='max-w-2xl mx-auto font-Ovo'>
        I&apos;m a student at the University of Illinois Urbana-Champaign, exploring how technology, curiosity, and creativity can combine to solve real-world challenges.
      </motion.p>

      <div className='flex flex-row items-center gap-4 mt-4 mb-[7rem]'>
        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1, transition: { duration: 0.6, delay: 1 } }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
        href='#contact'
        className='px-6 md:px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 dark:bg-transparent'>
          contact <Image src={assets.mail_icon_dark} alt='' className='w-4 ml-1' />
        </motion.a>

        <motion.a 
        initial={{y: 30, opacity: 0}}
        whileInView={{y: 0, opacity: 1, transition: { duration: 0.6, delay: 1.2 } }}
        whileHover={{ scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }}
        href='https://www.linkedin.com/in/joshua-thomas-nelson/' target="_blank" rel="noopener noreferrer" 
        className='px-6 md:px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 bg-white dark:text-black'>
          connect <Image src={assets.linkedin} alt='' className='w-4 ml-1' />
        </motion.a>
      </div>
    </div>
  )
};

export default Header;
