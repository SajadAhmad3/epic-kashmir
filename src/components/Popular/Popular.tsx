import { AttractionsData } from "../../utils/attractions";
import { useNavigate } from "react-router-dom";

const Popular = () => {
  const navigate = useNavigate();

  const redirectToAttractions = () => {
    navigate("/attractions");
  };

  return (
    <div className="container relative lg:mb-32 mb-5">
      <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center pb-4">
        <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:text-start font-bold mb-5">
          Must See Attractions
        </h2>
        <div className="">
          <button
            className="bg-red-600 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-500 transition duration-300 lg:text-md md:text-sm text-xs"
            onClick={redirectToAttractions}
          >
            View All
          </button>
        </div>
      </div>

      <div className="grid grid-cols-4 lg:grid-cols-5 lg:grid-rows-2 gap-4 lg:gap-8 lg:h-[500px] lg:px-0 px-4">
        {AttractionsData.slice(0, 3).map((attraction, index) => (
          <div
            key={index}
            className={`relative overflow-hidden group cursor-pointer rounded-lg ${
              index === 0
                ? "col-span-4 lg:col-span-3 row-span-2"
                : "col-span-4 lg:col-span-2 row-span-1"
            } ${index !== 0 ? "lg:mt-[100px] lg:-mb-[100px]" : ""} lg:max-h-full max-h-[250px]`}
          >
            <img
              src={attraction.image?.src}
              alt={attraction.image?.alt}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute bottom-2 left-2 bg-black/60 text-white text-xs px-2 py-1 rounded-sm">
              {attraction.title}
            </div>
            <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex lg:items-center lg:justify-center flex-col lg:px-[40px] px-2 lg:text-center transition-height duration-700 group-hover:h-full">
              <h3 className="py-2 font-semibold lg:text-md text-sm">
                {attraction.title}
              </h3>
              <p className="text-xs">
                {attraction.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Popular;
