import { Book, Hotel, Map, Compass } from "lucide-react";

const services = [
  {
    title: "Ticket Booking",
    description:
      "We book all kinds of national or international tickets for your destination.",
    Icon: Book,
  },
  {
    title: "Hotel Booking",
    description:
      "You can easily book your hotel according to your budget by our website.",
    Icon: Hotel,
  },
  {
    title: "Tour Plan",
    description:
      "We provide you the best plan within a short time to explore more.",
    Icon: Map,
  },
  {
    title: "Travel Guide",
    description:
      "Get the best travel guides and tips for your trips around the world.",
    Icon: Compass,
  },
];

const Service = () => {
  return (
    <div className="container mx-auto lg:py-12 md:py-10 py-4 lg:px-0 px-4">
      <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:tex-start font-bold  mb-5">
        Our Service
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:gap-10 gap-5">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-gray-800 lg:p-10 md:p-10 p-6 rounded-lg text-white transition transform hover:bg-red hover:-translate-y-2 w-full mx-auto"
          >
            <service.Icon className="lg:mb-6 md:mb-6 mb-4 lg:w-12 md:w-10 w-8 lg:h-12 md:h-10 h-8 text-white" />
            <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
              {service.title}
            </h3>
            <p className="lg:text-sm md:text-sm text-[10px] font-light">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
