import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";
import pahalgam from "../../assets/images/pahalgam.jpg";

const Popular = () => {
  return (
    <div className="container relative lg:mb-32 mb-5">
      <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center pb-4">
        <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:text-start font-bold mb-5">
          Must See Attractions
        </h2>
        <div className="">
          <button className="bg-red-600 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-500 transition duration-300 lg:text-md md:text-sm text-xs">
            View All
          </button>
        </div>
      </div>

      <div className="grid lg:grid-cols-5 grid-cols-4 grid-rows-2 lg:gap-8 gap-4 lg:h-[500px] lg:px-0 px-4">
        <div className="col-span-2 lg:col-span-3  lg:row-span-2 relative overflow-hidden group cursor-pointer rounded-lg">
          <img
            src={gulmargImg}
            alt="Gulmarg"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex lg:items-center lg:justify-center flex-col lg:px-[40px] px-2 lg:text-center  transition-height duration-700 group-hover:h-full">
            <h3 className="py-2 font-semibold lg:text-md text-sm">Gulmarg</h3>
            <p className="lg:text-xs md:text-[8px] text-[6px]">
              This app can take you anywhere on the internet. Its design goals
              are increased Privacy, Automation, adaptive Semantic
              Understanding, and efficient Bandwidth Usage.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden group cursor-pointer rounded-lg lg:mt-[100px] lg:-mb-[100px]">
          <img
            src={pahalgam}
            alt="Pahalgam"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex lg:items-center lg:justify-center flex-col lg:px-[40px] px-2 lg:text-center  transition-height duration-700 group-hover:h-full">
            <h3 className="py-2 font-semibold lg:text-md text-sm">Gulmarg</h3>
            <p className="lg:text-xs md:text-[8px] text-[6px]">
              This app can take you anywhere on the internet. Its design goals
              are increased Privacy, Automation, adaptive Semantic
              Understanding, and efficient Bandwidth Usage.
            </p>
          </div>
        </div>

        <div className="col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden group cursor-pointer rounded-lg lg:mt-[100px] lg:-mb-[100px] ">
          <img
            src={dalImg}
            alt="Gondola"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex lg:items-center lg:justify-center flex-col lg:px-[40px] px-2 lg:text-center  transition-height duration-700 group-hover:h-full">
            <h3 className="py-2 font-semibold lg:text-md text-sm">Gulmarg</h3>
            <p className="lg:text-xs md:text-[8px] text-[6px]">
              This app can take you anywhere on the internet. Its design goals
              are increased Privacy, Automation, adaptive Semantic
              Understanding, and efficient Bandwidth Usage.
            </p>
          </div>
        </div>

        <div className=" lg:hidden col-span-2 lg:col-span-2 row-span-1 relative overflow-hidden group cursor-pointer rounded-lg lg:mt-[100px] lg:-mb-[100px] ">
          <img
            src={sonmargImg}
            alt="Gondola"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex lg:items-center lg:justify-center flex-col lg:px-[40px] px-2 lg:text-center  transition-height duration-700 group-hover:h-full">
            <h3 className="py-2 font-semibold lg:text-md text-sm">Gulmarg</h3>
            <p className="lg:text-xs md:text-[8px] text-[6px]">
              This app can take you anywhere on the internet. Its design goals
              are increased Privacy, Automation, adaptive Semantic
              Understanding, and efficient Bandwidth Usage.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
