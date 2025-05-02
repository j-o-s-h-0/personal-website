import { assets } from '@/assets/assets'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'

const Navbar = ({isDarkMode, setIsDarkMode}) => {
  const [isScroll, setIsScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const sideMenuRef = useRef();

  const openMenu = () => {
    setMenuOpen(true);
    sideMenuRef.current.style.opacity = '1';
    sideMenuRef.current.style.pointerEvents = 'auto';
  };
  const closeMenu = () => {
    setMenuOpen(false);
    sideMenuRef.current.style.opacity = '0';
    sideMenuRef.current.style.pointerEvents = 'none';
  };

  useEffect(()=>{
    window.addEventListener('scroll', () => {
      if (scrollY > 20) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    })
  }, []);

  return (
    <>
    <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-78%] dark:hidden'>
      <Image src='/bg-main.png' alt='' width={0} height={0} className='w-full h-auto' sizes='100vw' priority />
    </div>

    <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 z-50 ${isScroll ? 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20' : 'bg-white bg-opacity-50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadow-white/20 md:bg-transparent md:backdrop-blur-0 md:shadow-none md:dark:bg-transparent md:dark:shadow-none'}`}>
      <div className='w-full flex items-center justify-between z-50'>
        <a href='/#top'>
          <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-28 cursor-pointer mr-6'/>
        </a>

        <ul className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${isScroll ? '' : 'bg-white shadow-sm bg-opacity-50 dark:border dark:border-white/50 dark:bg-transparent'} `}>
          <li><a className='font-Ovo' href='/#top'>Home</a></li>
          <li><a className='font-Ovo' href='/#about'>About</a></li>
          <li><a className='font-Ovo' href='/#projects'>Projects</a></li>
          {/* <li><a className='font-Ovo' href='#services'>Services</a></li> */}
          <li><a className='font-Ovo' href='/#contact'>Contact</a></li>
        </ul>

        <div className='flex items-center gap-4'>
          <button onClick={() => setIsDarkMode(prev => !prev)}>
            <Image src={isDarkMode ? assets.sun_icon : assets.moon_icon} alt='' className='w-6 ml-28' />
          </button>

          {/* REMOVE "ml-28" IN "assets.sun_icon" AND CHANGE "mr-6" TO "mr-14" IN "assets.logo" --- <a href="#contact" className='hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-Ovo dark:border-white/50'>Contact 
          <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="" className='w-3'/></a> */}

          {!menuOpen ?
            <button className='block md:hidden ml-3' onClick={openMenu}>
              <Image src={isDarkMode ? assets.menu_white : assets.menu_black} alt='' className='w-6' />
            </button>
            :
            <button className='block md:hidden ml-3' onClick={closeMenu}>
              <Image src={isDarkMode ? assets.close_white : assets.close_black} alt='' className='w-6 cursor-pointer' />
            </button>
          }
        </div>
      </div>

      <div className={`${menuOpen ? 'flex' : 'hidden'}`}>
        <ul ref={sideMenuRef} className='flex flex-col md:hidden items-center gap-4 py-6 px-10 w-full pb-1 z-50'>
          <li><a className='font-Ovo' onClick={closeMenu} href='/#top'>Home</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='/#about'>About</a></li>
          <li><a className='font-Ovo' onClick={closeMenu} href='/#projects'>Projects</a></li>
          {/* <li><a className='font-Ovo' onClick={closeMenu} href='#services'>Services</a></li> */}
          <li><a className='font-Ovo' onClick={closeMenu} href='/#contact'>Contact</a></li>
        </ul>
      </div>
    </nav>
    </>
  )
};

export default Navbar;
