import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "John Doe"
  },
  {
    id: 2,
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Jane Smith"
  },
  {
    id: 3,
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    author: "Emily Johnson"
  }
];

function TestimonialSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="testimonial-section bg-black text-white min-h-screen flex justify-center items-center" style={{
      backgroundImage: 'radial-gradient(black, #000033)',
      height: '110vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative',
    }}>
                <h2 className="text-3xl font-bold mb-8">Testimonials</h2>

      <div className="max-w-8xl mx-auto p-10 flex flex-col lg:flex-row justify-between items-center">
        
      <div className="lg:w-2/4 mx-10">
          <img src="https://cdn.sanity.io/images/tlr8oxjg/production/9f15109746df254c5a030a7ba9239f8a4bb5dadb-1456x816.png?w=3840&q=100&fit=clip&auto=format"  alt="Testimonial Image" className="w-full rounded-lg" />
        </div>
        
        <div className="lg:w-2/4 mb-10 lg:mb-0">
          <div className="relative">
            <motion.div
              key={testimonials[currentTestimonial].id}
              className="testimonial-card bg-gray-800 rounded-lg p-6 w-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.1 }}
            >
              <p className="text-lg mb-4">{testimonials[currentTestimonial].text}</p>
              <p className="text-gray-400">- {testimonials[currentTestimonial].author}</p>
            </motion.div>
            <button
              onClick={nextTestimonial}
              className="absolute top-1/2 right-0 transform -translate-y-1/2 px-4 py-2 bg-gray-800 text-white rounded-lg"
            >
              Next
            </button>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default TestimonialSection;
