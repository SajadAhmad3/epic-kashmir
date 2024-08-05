import React from "react";
import BannerImg from "../../assets/images/epic-banner.jpg";

const Banner: React.FC = () => {
  return (
    <div className="relative w-full h-[600px] overflow-hidden">
      <img
        src={BannerImg}
        alt="Banner"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4">
        <h1 className="lg:text-[40px] text-[30px] font-bold max-w-[500px]">
          Your Imagination Is Your Only Limit
        </h1>
        <p className="font-medium_1 max-w-[530px]">
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </p>
        <button className="bg-[#00A651] text-white px-4 py-2 mt-4  rounded-xl">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Banner;
