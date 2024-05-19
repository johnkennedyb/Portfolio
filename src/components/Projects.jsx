import React from 'react';
import { motion } from 'framer-motion';

function ProjectSection() {
  return (
    <div className="bg-black py-20"  style={{
      background:'#010131',
      
    }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-10">My Projects</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1 */}
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://i.ytimg.com/vi/ZMak63mHq5Y/maxresdefault.jpg" alt="Project 4" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Netflix-clone App</h3>
              <p className="text-gray-600">Check out my Netflix clone app! Built from scratch, it features seamless experience. </p>
              <div className="flex justify-between mt-4">
 <a href="https://netflix-clone-delta-weld.vercel.app/"> <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a> 
 <a href="https://github.com/johnkennedyb/netflix-clone"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button></a> 
</div>
            </div>
          </motion.div>
          
          
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 1" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Metronic</h3>
              <p className="text-gray-600">This Metronic-based website showcases my development skills with its sleek design.</p>
              <div className="flex justify-between mt-4">
 <a href="https://metronix.vercel.app/"> <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a> 
 <a href="https://github.com/Johnkennedyb/Blossom"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button></a> 
</div>
            </div>
          </motion.div>
          {/* Project 2 */}
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://images.pexels.com/photos/6963944/pexels-photo-6963944.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Project 2" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">E-commerce shop</h3>
              <p className="text-gray-600">This is a simple Ecommerce website built with React, redux, javascript and bootstrap.</p>
              <div className="flex justify-between mt-4">
  <a href="https://evon-v8mc.vercel.app/"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a>
 <a href="https://Github.Com/Johnkennedyb/Evon"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button></a> 
</div>
            </div>
          </motion.div>
          {/* Project 3 */}
          
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {/* Project 4 */}
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFl_hCzOMjDJjBXteNUgXzdhx00LguIYP3ro1XGtUEyA&s" alt="Project 3" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dashboard-login App</h3>
              <p className="text-gray-600">This is a simple scalable dashboard-login app built with Mern stack (fullstack web-app).</p>
              <div className="flex justify-between mt-4">
  <a href="https://blackcofferreact.onrender.com/"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a>
  <a href="https://Github.Com/Johnkennedyb/Blackcofferfrontend"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button></a>
</div>
            </div>
          </motion.div>
          {/* Project 5 */}
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://i.ibb.co/TBk57Tz/HD-wallpaper-pink-orchid-stones-flowers-spa-flowering-plant-beauty-in-nature.jpg" alt="Project 5" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Mitchell Morris Lpc</h3>
              <p className="text-gray-600">This is a fully functional and scalable website built with Wordpress and themes</p>
              <div className="flex justify-between mt-4">
  <a href="https://michellemorrislpc.com/"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a>
  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button>
</div>
            </div>
          </motion.div>
          {/* Project 6 */}
          <motion.div 
            className="project-card bg-white rounded-lg shadow-lg "
            whileHover={{ y: -10, boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)' }}
            transition={{ duration: 0.3 }}
          >
            <img className="w-full h-48 object-cover object-center" src="https://i.ibb.co/9ydG6Hy/boston-1536x1024.jpg" alt="Project 6" />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Dac Investigation Services</h3>
              <p className="text-gray-600">This is a fully functional and scalable website built with Wordpress and themes</p>
              <div className="flex justify-between mt-4">
  <a href="https://dacinvestigationservice.com/"><button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Live Demo</button></a>
  <button className="px-4 py-2 bg-yellow-500 text-black rounded hover:bg-gray-900 focus:outline-none focus:bg-gray-900">Github</button>
</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProjectSection;
