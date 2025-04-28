import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const Projects = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1 }}
    id='projects' className='w-full px-[12%] py-10 scroll-mt-20'>

      <motion.h4 
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className='text-center mb-2 text-lg font-Ovo'>
        Featured work
      </motion.h4>

      <motion.h2
      initial={{ y: -20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5 }}
      className='text-center text-5xl font-Ovo'>
        My projects
      </motion.h2>

      <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.7, duration: 0.5 }}
      className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Welcome to my portfolio! Explore a collection of projects showcasing my expertise in machine learning, web development, and more.
      </motion.p>

      <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 0.6 }}
      className='flex flex-row flex-wrap justify-center dark:text-black gap-12 mb-20'>
        {workData.map(({title, description, src, href, target}, index) => (
          <a href={href} target={target} rel="noopener noreferrer" key={index}>
            <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className='flex flex-col items-center bg-white rounded-lg relative cursor-pointer group border-2 border-black dark:border-white'>
              <div className='w-96 max-w-[80vw]'>
                <Image src={src} alt={title} className='rounded-tl-md rounded-tr-md'/>
              </div>
              <div className='bg-white w-full rounded-bl-md rounded-br-md py-3 px-5 flex items-center justify-between duration-500'>
                <div>
                  <h2 className='font-semibold'>{title}</h2>
                  <p className='text-sm text-gray-700'>{description}</p>
                </div>
                <div className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                  <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>

      {/* <motion.a 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 1.1, duration: 0.5 }}
      href="" className='w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
        Show more 
        <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow' className='w-4'/>
      </motion.a> */}
    </motion.div>
  )
};

export default Projects;
