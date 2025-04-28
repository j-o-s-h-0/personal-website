import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-16'>
      <div className='text-center'>
        <a href='#top'>
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto mb-2'/>
        </a>

        <div className='w-max flex items-center gap-2 mx-auto'>
          <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6 mt-0.5'/>
          contact@joshtn.com
        </div>
      </div>

      <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p>© 2025 joshtn.com</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
          <li><a href='https://www.linkedin.com/in/joshua-thomas-nelson/' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center'>
            <Image src={isDarkMode ? assets.linkedin_dark : assets.linkedin} alt='' className='w-6 h-6 mr-2' />
            LinkedIn
          </a></li>
          <li><a href='https://github.com/j-o-s-h-0/' target="_blank" rel="noopener noreferrer" className='flex flex-row items-center'>
            <Image src={isDarkMode ? assets.github_dark : assets.github} alt='' className='w-6 h-6 mr-2' />
            GitHub
          </a></li>
        </ul>
      </div>
    </div>
  )
};

export default Footer;
