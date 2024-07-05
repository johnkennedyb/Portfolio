import React, { useEffect, useRef, useState } from 'react';

function ServicesSection() {
  const servicesRef = useRef(null);
  const [hoveredService, setHoveredService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const sectionTop = servicesRef.current.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionTop < windowHeight * 0.9) {
        servicesRef.current.classList.add('slide-in');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServiceHover = (service) => {
    setHoveredService(service);
  };

  const handleServiceLeave = () => {
    setHoveredService(null);
  };

  const services = [
    {
      id: 1,
      title: ' Full-stack Website Development',
      description: 'I build fully functional websites with Mongodb, Reactjs, Nodejs, Expressjs.',
      imageUrl: 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=600',
      link: 'service1_link',
    },
    {
      id: 2,
      title: 'Wordpress',
      description: 'I build fully functional and scalable websites with wordpress , Utilizing its themes and builders.',
      imageUrl: 'https://cdn.dribbble.com/userupload/11367742/file/original-3f0130b57b2da3649e14993782b6a917.png?crop=0x0-1366x1024&resize=320x240&vertical=center',
      link: 'service2_link',
    },
    {
      id: 3,
      title: 'Mobile App(In Process)',
      description: 'Building a highly scalable mobile application with React native for both Andriod and Ios application.',
      imageUrl: 'https://i.pinimg.com/564x/09/9b/7c/099b7c45fc13795d8f571e694d898a3a.jpg',
      link: 'service3_link',
    },
    // Add more services as needed
  ];

  return (
    <div className="services-section bg-black text-white relative py-16 px-20" style={{
      backgroundImage: 'radial-gradient(black, #000033)',
      height: '110vh', // Cover full screen for all screen sizes
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      color: 'white',
      position: 'relative', // To position the social media icons and button
    }}>
      <div
        ref={servicesRef}
        className="grid gap-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl slide-in"
      >
        <div className="services-text mb-12 mt-12">
          <h2 className="text-3xl font-bold mb-8 px-5">Services</h2>
          <ul>
            {services.map(service => (
              <li 
                key={service.id}
                className="mt-20 mb-20 text-5xl px-5 font-bold relative hover:scale-105 transition-transform duration-300"
                onMouseEnter={() => handleServiceHover(service.id)}
                onMouseLeave={handleServiceLeave}
                style={{ fontSize: '2rem' }} // Smaller font size for mobile
              >
                <div>
                <a href={service.link} className="text-md md:text-6xl">{service.title}</a>
                  <p className="text-sm">{service.description}</p>
                </div>
                {hoveredService === service.id && (
                  <div 
                    className="absolute top-0 right-0 w-full h-full bg-black bg-opacity-75 flex justify-between items-center px-4 transition-opacity duration-300 ease-in-out"
                  >
                    <a href={service.link}>
                      <img src={service.imageUrl} alt={service.title} className="max-w-xs scale-75 transform rotate-6" style={{ marginLeft: '40rem' }} />
                    </a>
                    <a href="#projects"><button className="text-black bg-yellow-500 px-4 py-2 rounded" style={{ marginRight: '8rem', fontSize:'20px', }}>See More</button></a>
                  </div>
                )}
                <div className="border-t-2 border-yellow-500 border-b-1 border-white my-2"></div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
