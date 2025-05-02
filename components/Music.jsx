import React from 'react';
import { motion } from 'motion/react'

const Music = () => {
  return (
    <>
      <div className='w-11/12 text-center ml-auto mr-auto mb-16 flex flex-col items-center justify-center gap-4'>
        <motion.h1 
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.6, delay: 0.1}}
        className='mt-[12rem] mb-[1rem] text-6xl lg:text-[66px] font-Ovo'>
          Coming Soon
        </motion.h1>

        <motion.h3 
        initial={{y: 0, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.4}}
        className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
          An Interactive Music Visualization Tool is in Development
        </motion.h3>
      </div>
      
      <div className='w-full px-[8%] sm:px-[12%] py-6'>
        <motion.h2 
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='mb-8 text-center text-5xl font-Ovo'>
          About the Project
        </motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex flex-col items-center'>
          <p className='mb-4 max-w-2xl font-Ovo w-full'>
            I&apos;m currently building a cutting-edge music visualization tool designed to transform instrumental audio into dynamic visuals. This project merges audio signal analysis, machine learning, and creative animation to craft an engaging visual experience powered by the inner workings of sound.
          </p>
          <p className='mb-4 max-w-2xl font-Ovo w-full'>
            Leveraging libraries like Librosa, Essentia, TensorFlow, and Matplotlib, the system analyzes a wide range of musical features and maps them to visual properties in an expressive, intuitive way.
          </p>
          <p className='mb-0 max-w-2xl font-Ovo w-full'>
            Each song is transformed into a vivid animation of moving, fading, and color-shifting splotches that react to various musical elements.
          </p>
        </motion.div>
      </div>

      <div className='w-full px-[8%] sm:px-[12%] py-6'>
        <motion.h2 
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='mb-8 text-center text-5xl font-Ovo'>
          Feature Mapping
        </motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex flex-col items-center'>
          <p className='mb-4 max-w-2xl font-Ovo w-full'>
            The following audio features are analyzed and mapped to specific visual attributes:
          </p>
          <ul className='mb-4 max-w-2xl w-full list-disc ml-6'>
            <li className='font-Ovo'>Pitch: X-position of the splotch, relative to pitch range of the full song</li>
            <li className='font-Ovo'>Dynamics: Y-position of the splotch, showing the local loudness variation</li>
            <li className='font-Ovo'>Mood: Overall color scheme of the entire animation</li>
            <li className='font-Ovo'>Timbre: Hue within the chosen mood palette per splotch</li>
            <li className='font-Ovo'>Tempo: Fade duration of each splotch</li>
            <li className='font-Ovo'>Articulation: Size of the splotch</li>
          </ul>
        </motion.div>
      </div>

      <div className='w-full px-[8%] sm:px-[12%] py-6'>
        <motion.h2 
        initial={{opacity: 0, y: -10}}
        whileInView={{opacity: 1, y: 0}}
        transition={{duration: 0.5, delay: 0.5}}
        className='mb-8 text-center text-5xl font-Ovo'>
          Timeline
        </motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 0.6, delay: 0.8}}
        className='flex flex-col items-center'>
          <p className='mb-4 max-w-2xl font-Ovo w-full'>
            Stay tuned! Launching this summer with upload support, mood presets, and interactive controls.
          </p>
        </motion.div>
      </div>
    </>
  );
};

export default Music;
