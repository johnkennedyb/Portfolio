import React, { useState } from 'react';

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className="flex fixed justify-end top-0 left-0 right-0 mt-5 mx-7 rounded-full z-40">
      <button
        onClick={toggleMenu}
        className="border border-yellow-400 text-yellow-400 hover:text-white hover:bg-yellow-400 font-bold py-3 px-6 rounded-lg text-xl"
      >
        Menu
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 bg-yellow-500 rounded-lg shadow-lg z-10" style={{width:'300px'}}>
          <button onClick={closeMenu} className="absolute top-0 right-0 m-2 text-yellow-400 hover:text-white text-4xl font-bold">&times;</button>
          <div className="py-2">
            <a
              href="#home"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('home'); closeMenu();}}
            >
              Home
            </a>
            <a
              href="#about"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('about'); closeMenu();}}
            >
              About
            </a>
            <a
              href="#skills"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('skills'); closeMenu();}}
            >
              Skills
            </a>
            <a
              href="#projects"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('projects'); closeMenu();}}
            >
              Projects
            </a>
            <a
              href="#services"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('services'); closeMenu();}}
            >
              Services
            </a>
            <a
              href="#testimonial"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('testimonial'); closeMenu();}}
            >
              Testimonial
            </a>
            <a
              href="#contact"
              className="block px-6 py-3 text-xl text-white hover:bg-blue-700"
              onClick={() => {scrollToSection('contact'); closeMenu();}}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

