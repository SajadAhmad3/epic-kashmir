import React from "react";
import BannerImg from "../../assets/images/epic-banner.jpg";
import BannerImg2 from "../../assets/images/pahalgam.jpg";

const Banner: React.FC = () => {
  
  return (
    <div className="relative w-full lg:h-[600px] md:h-[600px] h-[300px] lg:px-10 md:px-10 " >
        <img 
          src={BannerImg2}
          alt="Banner"
          className="object-cover w-full h-full lg:rounded-lg md:rounded-lg"
        />

      <div className="absolute top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4">
        <h1 className="lg:text-[40px] text-[20px] font-bold max-w-[500px] px-10">
          Your Imagination Is Your Only Limit
        </h1>
        <p className="font-medium_1 max-w-[530px] px-10 text-[14px] lg:text-[18px]">
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </p>
        <button className="bg-red text-white px-4 py-2 mt-4 rounded-md lg:text-md md:text-sm text-xs">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Banner;
