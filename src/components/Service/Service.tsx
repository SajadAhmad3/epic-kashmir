import { Book, Hotel, Map, Compass } from 'lucide-react';

const services = [
  {
    title: 'Ticket Booking',
    description: 'We book all kinds of national or international tickets for your destination.',
    Icon: Book,
  },
  {
    title: 'Hotel Booking',
    description: 'You can easily book your hotel according to your budget by our website.',
    Icon: Hotel,
  },
  {
    title: 'Tour Plan',
    description: 'We provide you the best plan within a short time to explore more.',
    Icon: Map,
  },
  {
    title: 'Travel Guide',
    description: 'Get the best travel guides and tips for your trips around the world.',
    Icon: Compass,
  },
];

const Service = () => {
  return (
    <div className='container mx-auto py-12 lg:px-0 px-4'>
      <h2 className='text-[30px] text-center md:text-start lg:tex-start font-bold  mb-5'>Our Service</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        {services.map((service, index) => (
          <div
            key={index}
            className='bg-gray-800 p-10 rounded-lg text-white transition transform hover:bg-red hover:-translate-y-2 max-w-[300px] mx-auto'
          >
            <service.Icon className='mb-6 w-12 h-12 text-white' />
            <h3 className='text-2xl font-semibold mb-4'>{service.title}</h3>
            <p className='text-sm font-light'>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
