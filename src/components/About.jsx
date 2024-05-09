import React from 'react';

function AboutSection() {
  return (
    <div className="about-section bg-gray-100 py-20 text-white min-h-screen md:min-h-0" style={{ background: 'linear-gradient(to left, rgba(0,0,0,0), #00000d)', position: 'relative' }}>
                 <h2 className="text-3xl pt-20 text-center font-bold mb-4">About Me</h2>

      <div className="container mb-20 mx-auto px-4 flex flex-col lg:flex-row justify-center items-center">
        {/* Image Column */}
        <div className="lg:w-2/4 mb-8 lg:mb-0">
          <img
            className="w-full max-w-full rounded-lg shadow-lg animate-pulse"
            src="https://i.ibb.co/KWjGfkv/6791e3ff-3840-4920-97c6-b1ac48ca3b3b.jpg"
            alt="About"
            style={{ maxHeight: '400px', objectFit: 'cover', border: '5px solid Yellow' }}
          />
        </div>
        
        {/* Text Column */}
        
        <div className="lg:w-3/4 text-white  lg:pl-8" style={{ justifyContent: 'center', alignItems: 'center', verticalAlign:'center', }}>
          <p className="text-lg mb-4">
            I’m Nnawuihe Johnkennedy Uchenna, Founder of DeepCode systems, a passionate web development firm based in Lagos, Nigeria.
            My journey into the world of software engineering began in 2019 when I earned a certificate from New Horizon System Solutions.
            Since then, I’ve embarked on a fulfilling professional adventure, contributing significantly to various projects at Thorium Logic, a prominent development firm in Lagos.
          </p>
          <p className="text-lg mb-4">
            My expertise spans a diverse range of technologies, including HTML, CSS, JavaScript, React, Node.js, Redux, Bootstrap, WordPress, and more.
            From creating visually appealing user interfaces to developing robust frontend and backend systems,
            I leverage these tools to craft seamless and immersive digital experiences.
          </p>
          <p className="text-lg">
            I’m not just a developer; I’m an innovator. My work extends beyond writing lines of code to creative problem-solving and the pursuit of innovative solutions.
            Feel free to reach out, and let’s make something extraordinary happen in the digital realm!
          </p>
          
        </div>

      </div>

    </div>
  );
}

export default AboutSection;
