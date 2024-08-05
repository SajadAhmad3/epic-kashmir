import React from 'react';

// Define the service data
const services = [
  {
    title: 'Ticket Booking',
    description: 'We book all kinds of national or international tickets for your destination.',
    imgSrc: '', // Add image source here
  },
  {
    title: 'Hotel Booking',
    description: 'You can easily book your hotel according to your budget by our website.',
    imgSrc: '', // Add image source here
  },
  {
    title: 'Tour Plan',
    description: 'We provide you the best plan within a short time to explore more.',
    imgSrc: '', // Add image source here
  },
  {
    title: 'Travel Guide',
    description: 'Get the best travel guides and tips for your trips around the world.',
    imgSrc: '', // Add image source here
  },
];

const Service = () => {
  return (
    <div className='container mx-auto py-12'>
      <h2 className='text-4xl font-bold text-center mb-12 '>Our Service</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-gray-800 p-10 rounded-lg text-white transition transform hover:bg-[#ff004f] hover:-translate-y-2 max-w-[300px] mx-auto'
          >
            <img src={service.imgSrc} alt={service.title} className='mb-6 w-full rounded-md' />
            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
            <p className='text-sm font-light'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
