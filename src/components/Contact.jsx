import React from 'react';
import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }} // Initial position outside the viewport
      animate={{ opacity: 1, x: 0 }} // Animate to x: 0 for slide-in effect
      transition={{ duration: 0.5 }}
      className="flex justify-center items-center min-h-screen  bg-black pb-0 "
      style={{
        backgroundImage: 'radial-gradient(black, #000033)',
      }}
    >
      <div className="container mx-auto px-5 py-8  rounded-lg shadow-lg flex flex-col md:flex-row md:space-x-8">
        
        {/* Contact Information */}
        <div className="md:w-2/4 text-white flex flex-col justify-center ">
          <h1 className=" font-bold mt-10 mb-4">Get in Touch</h1>
          <div className="mb-4">
            <h2 className=" mt-4 text-3xl font-bold">Email: <a href="mailto:johnkennedy3313@gmail.com">johnkennedy3313@gmail.com</a></h2>
            <h2 className=" mt-4 font-bold">Phone: +234 9022604484</h2>
            <h2 className=" mt-4 font-bold">Location: Lagos, Nigeria</h2>
          </div>
          <div className=" mt-20 flex space-x-4 pb-20">
            <a href="https://github.com/johnkennedyb" target="_blank" rel="noopener noreferrer">Github</a>
            <a href="https://www.linkedin.com/in/johnkennedy-nnawuihe-22824a23a/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>

     </div>
        
        {/* Contact Form */}
        <div className="md:w-1/2">
          <form className="flex flex-col w-full">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="form-group">
              <label htmlFor="name" className="block text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="form-input mt-1 block w-full rounded-lg border-gray-300" />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="block text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="form-input mt-1 block w-full rounded-lg border-gray-300" />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="block text-gray-700">Message</label>
              <textarea id="message" name="message" rows="5" className="form-textarea mt-1 block w-full rounded-lg border-gray-300"></textarea>
            </div>
            <button type="submit" className="bg-yellow-500  text-white font-semibold py-2 px-4 rounded-lg transition duration-300 mt-4 self-start">Submit</button>
          </form>
        </div>
      </div>

      
    </motion.div>
    
  );
};

export default ContactSection;
