import { assets, infoList, toolsData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'
import { motion } from 'motion/react'

const About = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[8%] sm:px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}>
      
      <motion.h4 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.3}}
      className='text-center mb-2 text-lg font-Ovo'>
        Introduction
      </motion.h4>

      <motion.h2 
      initial={{opacity: 0, y: -20}}
      whileInView={{opacity: 1, y: 0}}
      transition={{duration: 0.5, delay: 0.5}}
      className='text-center text-5xl font-Ovo'>
        About me
      </motion.h2>

      <motion.div 
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 0.8}}
      className='flex w-full flex-col lg:flex-row items-center lg:items-start gap-20 my-20'>
        
        <motion.div
        initial={{opacity: 0, scale: 0.9}}
        whileInView={{opacity: 1, scale: 1}}
        transition={{duration: 0.6}}
        className='w-64 sm:w-80 rounded-3xl max-w-none'>
          <Image src='/profile-about.png' alt='profile image' width={0} height={0} className='w-full h-auto rounded-3xl' sizes='100vw' />
        </motion.div>
    
        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex-1'>
          <p className='mb-10 max-w-2xl font-Ovo'>
            I&apos;m Joshua Nelson, a Computer Science student at the University of Illinois Urbana-Champaign with a strong interest in machine learning, artificial intelligence, and the use of technology to tackle real-world problems. Whether it&apos;s building music visualizations that bring audio features to life or developing predictive models for life expectancy, I enjoy creating projects that combine innovation with practical impact. I believe that technology, at its best, should inspire curiosity, foster meaningful connections, and drive positive change.
          </p>
          <p className='mb-10 max-w-2xl font-Ovo'>
            When I&apos;m not working on a project or learning something new, you&apos;ll often find me outdoors. I love hiking new trails, exploring national parks, and skiing in the Rockies whenever I get the chance. There&apos;s something special about soaking in an incredible view, discovering a hidden path, or carving through fresh snow. It&apos;s moments like these that remind me how much I love being connected to nature. Getting outdoors is one of my favorite ways to unwind, explore, and enjoy the world around me.
          </p>

          <motion.ul
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{duration: 0.8, delay: 0.5}}
          className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
            {infoList.map(({icon, iconDark, title, description, href, target}, index) => (
              <a href={href} target={target} rel="noopener noreferrer" key={index}>
                <motion.li 
                whileHover={{scale: 1.05}}
                className='border-[0.5px] border-gray-400 rounded-xl p-6 h-full hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                  <div className='flex flex-row sm:flex-col flex-wrap items-center sm:items-stretch'>
                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mr-3 sm:mr-0 mt-0 sm:mt-2 h-full' />
                    <h3 className='sm:mt-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                  </div>
                  <p className='mt-4 text-gray-600 text-sm dark:text-white/80'>{description}</p>
                </motion.li>
              </a>
            ))}
          </motion.ul>

          <motion.h4
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className='flex justify-center sm:justify-start mt-6 mb-3 text-gray-700 font-Ovo dark:text-white/80'>
            Tools I use
          </motion.h4>

          <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className='flex flex-wrap justify-center sm:justify-start gap-5'>
            {toolsData.map(({name, src, href}, index) => (
              <a href={href} target="_blank" rel="noopener noreferrer" key={index}>
                <motion.li 
                whileHover={{ scale: 1.1 }}
                className='flex items-center justify-center w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer hover:-translate-y-1 duration-500'>
                  <Image src={src} alt={name} className='w-7' />
                </motion.li>
              </a>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
};

export default About;
