import React from 'react';

// Define the service data
const services = [
  {
    title: 'Ticket Booking',
    description: 'We book all kind of national or international ticket for your destination.',
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
    title: 'Tour Plan',
    description: 'We provide you the best plan within a short time to explore more.',
    imgSrc: '', // Add image source here
  },
];

const Service = () => {
  return (
    <div className='container my-10'>
      <h2 className='text-[30px] font-bold text-center py-10'>Our Service</h2>
      <div className='flex gap-10 justify-between'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-gray-100 p-10 rounded-lg max-w-[300px] hover:shadow-lg'
          >
            <img src={service.imgSrc} alt={service.title} />
            <h3 className='font-bold'>{service.title}</h3>
            <p className='text-sm'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
