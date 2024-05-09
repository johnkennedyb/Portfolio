import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function HeroPage() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const cursorStyle = {
    width: 20,
    height: 20,
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    position: 'fixed',
    zIndex: 999,
    pointerEvents: 'none',
    scale: 1.5,
    cursor: 'none', // Hide default cursor
  };

  return (
    <motion.div
      className="no-scrollbar [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] "
      style={{
        backgroundImage: 'radial-gradient(black, #000033)',
        height: '100vh', // Cover full screen on mobile
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        textAlign: 'center',
        position: 'relative', // To position the social media icons and button
        overflow: 'hidden',
      }}
      onMouseMove={(event) => {
        cursorX.set(event.clientX);
        cursorY.set(event.clientY);
      }}
    >
        <img
      className=' spinner animate-bounce rounded-3xl p-px bg-gradient-to-b from-yellow-200 to-yellow'
        src="https://i.ibb.co/c3DbyMd/unnamed-1.png"
        alt="Portfolio Image"
        style={{
          width: '150px', // Default size for desktop
          height: '150px', // Default size for desktop
          borderRadius: '50%',
          border: '5px solid',
          borderImage: 'linear-gradient(to right, #ff5733, yellow) 1' ,  
             background: 'linear-gradient(to right, #ff5733, yellow)',
          position: '',
          top: 65,
          left: '50%',
          transform: 'translateX(-50%)',
          display:'inline-block; width: 50px; height: 50px; border-radius: 50%; box-shadow: inset -2px 0 0 2px #0bf; animation: rotate 1.5s linear infinite'
          
        }}
      />
      <h1 className='text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center ' style={{
      lineHeight: '1',
      marginTop: '0px'
    }}>
      Welcome to My Website
    </h1>
      <p className='text-1xl md:text-4xl lg:text-2xl xl:text-2xl text-center'   style={{  marginBottom: '20px', marginTop: '10px' }}>I am a fullstack javascript website and application developer.</p>
      <div style={{ bottom: '75px', top: '50px', display: 'flex', gap: '20px', color: 'yellow', zIndex: 1000 }}>
        <a href="https://www.linkedin.com/in/johnkennedy-nnawuihe-22824a23a/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={30} /></a>
        <a href="https://github.com/johnkennedyb" target="_blank" rel="noopener noreferrer"><FaGithub size={30} /></a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><FaFacebook size={30} /></a>
      </div>
     <a href="#contact"> <button className='border border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400' style={{ padding: '10px 20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none', borderRadius: '5px', borderColor: 'yellow', marginTop: '20px' }}>Contact me</button></a> 
      <motion.div
        style={{
          ...cursorStyle,
          x: cursorX,
          y: cursorY,
        }}
      />
    </motion.div>
  );
}

export default HeroPage;
