import React from 'react';

const skills = [
  { name: 'React', lorem: 'With React, you can build complex web applications with a declarative and component-based approach, enabling better code organization, maintainability' },
  { name: 'Node.js', lorem: 'With Node.js, you can handle server-side logic, interact with databases, perform file operations, and create RESTful APIs' },
  { name: 'JavaScript', lorem: 'JavaScript is a versatile programming language that adds interactivity and dynamic behavior to web pages.' },
  { name: 'HTML', lorem: 'With HTML, you can create a foundation for your websites content, ensuring proper organization and accessibility for both users and search engines.' },
  { name: 'CSS', lorem: 'CSS enables you to create visually appealing and responsive designs, ensuring a consistent look and feel across different devices and screen sizes.' },
  { name: 'Bootstrap', lorem: 'Bootstraps grid system, responsive breakpoints, and extensive component library make it an ideal choice for rapid prototyping and development.' },
  { name: 'WordPress', lorem: 'WordPress is a popular content management system (CMS) that powers millions of websites worldwide' }
];

const SkillPage = () => {
  return (
    <div className="skill-page bg-black text-white min-h-screen px-10 py-10 flex flex-col justify-center items-center" style={{
      backgroundImage: 'radial-gradient(black, #000033)',
    }}>
      <h1 className="text-3xl mt-20 font-bold mb-8">Skills</h1>
      <div className="skills-container grid md:grid-cols-3 gap-8 w-full transform transition-transform duration-1000 ease-out translate-x-0">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="skill-card bg-gray-900 rounded-lg p-6 text-center relative transform transition-transform duration-500 ease-in-out hover:scale-105"
          >
            <h3 className="text-xl font-bold mb-2">{skill.name}</h3>
            <p className="text-sm mb-4">{skill.lorem}</p>
            <div className="w-full h-2 bg-gray-600 rounded-full">
              <div
                className="h-full bg-blue-500 transition-all duration-1000 ease-out"
                style={{
                  width: skill.name === 'WordPress' ? '70%' : skill.name === 'CSS' ? '60%' : skill.name === 'Bootstrap' ? '50%' : '100%'
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <hr className="w-32 border-2 border-white mt-8 mb-20" />
    </div>
  );
};

export default SkillPage;
