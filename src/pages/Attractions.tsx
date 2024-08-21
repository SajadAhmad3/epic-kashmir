import { MapPin } from "lucide-react";
import { AttractionsData } from "../utils/attractions";

const Attractions = () => {
  return (
    <div className="container relative">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-[1400px] lg:h-[600px] px-4 lg:px-0 my-5">
        {AttractionsData.map((attraction, index) => (
          <div
            key={index}
            className="relative overflow-hidden group cursor-pointer rounded-lg"
          >
            <img
              src={attraction.image?.src}
              alt={attraction.image?.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div className="absolute bottom-0 left-0 z-10 flex items-center p-2 bg-black/60 text-white text-sm transition-opacity duration-500 group-hover:opacity-0">
              <MapPin className="w-4 h-4 mr-1" />
              {attraction.title}
            </div>

            <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex flex-col lg:px-[40px] px-2 transition-height duration-700 group-hover:h-full">
              <h3 className="py-2 font-semibold text-md">{attraction.title}</h3>
              <p className="text-[12px]">{attraction.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Attractions;
