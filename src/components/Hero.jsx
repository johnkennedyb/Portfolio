import React from 'react';
import { FaLinkedin, FaGithub, FaFacebook } from 'react-icons/fa';

function HeroPage() {
  return (
    <div
      className="bg-radial-gradient from-black to-[#000033] h-screen flex flex-col justify-center items-center text-white text-center relative"
      style={{
        backgroundImage: 'radial-gradient(black, #000033)',}}
    >
      <img
        className="animate-bounce rounded-3xl p-px bg-gradient-to-b from-yellow-200 to-yellow"
        src="https://i.ibb.co/c3DbyMd/unnamed-1.png"
        alt="Portfolio Image"
        style={{
          width: '150px', // Default size for desktop
          height: '150px', // Default size for desktop
          borderRadius: '50%',
          border: '5px solid',
          borderImage: 'linear-gradient(to right, #ff5733, yellow) 1',
          background: 'linear-gradient(to right, #ff5733, yellow)',
          position: '',
          top: 65,
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'inline-block; width: 50px; height: 50px; border-radius: 50%; box-shadow: inset -2px 0 0 2px #0bf; animation: rotate 1.5s linear infinite'
        }}
      />
      <h1 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-0 leading-tight">
        Welcome to My Website
      </h1>
      <p className="text-xl md:text-4xl lg:text-2xl xl:text-2xl mt-2 mb-5">
        I am a fullstack javascript website and application developer.
      </p>
      <div className="flex gap-5 text-yellow-400 z-10">
        <a href="https://www.linkedin.com/in/johnkennedy-nnawuihe-22824a23a/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin size={30} />
        </a>
        <a href="https://github.com/johnkennedyb" target="_blank" rel="noopener noreferrer">
          <FaGithub size={30} />
        </a>
        <a href="https://web.facebook.com/profile.php?id=100080993383902" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={30} />
        </a>
      </div>
      <a href="#contact"> <button className='border border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400' style={{ padding: '10px 20px', backgroundColor: 'rgba(255, 255, 255, 0.1)', color: 'white', border: 'none', borderRadius: '5px', borderColor: 'yellow', marginTop: '20px' }}>Contact me</button></a> 
      
    </div>
  );
}

export default HeroPage;
