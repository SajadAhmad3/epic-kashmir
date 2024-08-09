import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";
import pahalgam from "../../assets/images/pahalgam.jpg";

const Popular = () => {
  return (
    <div className="container relative mb-32 bg-">
      <div className="flex justify-between items-center">
      <h2 className="text-[30px] text-center md:text-start lg:text-start font-bold mb-5">
        Must See Attractions
      </h2>
      <div className="">
            <button className="bg-red-500 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              View All
            </button>
          </div>

      </div>
      <div className="grid lg:grid-cols-5 grid-cols-1 grid-rows-2 gap-8 lg:h-[500px] lg:px-0 px-4">
        <div className="col-span-3 row-span-2 relative overflow-hidden group cursor-pointer rounded-lg">
          <img
            src={gulmargImg}
            alt="Gulmarg"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-[40px] text-center text-[14px] transition-height duration-500 group-hover:h-full">
            <h3>Web Browsing App</h3>
            <p>
              This app can take you anywhere on the internet. Its design goals
              are increased Privacy, Automation, adaptive Semantic
              Understanding, and efficient Bandwidth Usage.
            </p>
          </div>
        </div>

        <div className="col-span-2 row-span-1 relative overflow-hidden group cursor-pointer rounded-lg mt-[100px] -mb-[100px]">
          <img
            src={pahalgam}
            alt="Pahalgam"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-[40px] text-center text-[14px] transition-height duration-500 group-hover:h-full">
            <h3>Attraction Title</h3>
            <p>Description here.</p>
          </div>
        </div>

        <div className="col-span-2 row-span-1 relative overflow-hidden group cursor-pointer rounded-lg mt-[100px] -mb-[100px] ">
          <img
            src={gondolaImg}
            alt="Gondola"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="w-full h-0 bg-gradient-to-b from-black/60 to-red rounded-lg absolute left-0 bottom-0 overflow-hidden flex items-center justify-center flex-col px-[40px] text-center text-[14px] transition-height duration-500 group-hover:h-full">
            <h3>Attraction Title</h3>
            <p>Description here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popular;
