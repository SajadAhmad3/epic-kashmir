import BannerImg2 from "../../assets/images/pahalgam.jpg";
import Limit from "../../assets/images/Limit.svg";

const Banner = () => {
  return (
    <div className="relative w-full lg:h-[600px] md:h-[600px] h-[300px] lg:px-10 md:px-10 ">
      <img
        src={BannerImg2}
        alt="Banner"
        className="object-cover w-full h-full lg:rounded-lg md:rounded-lg"
      />

      <div className="absolute top-0 left-0 items-center justify-center text-white text-center flex flex-col h-full w-full px-4">
        <img
          src={Limit}
          alt="Limit"
          className="object-cover max-w-[50%] max-h-[30%]"
        />
        <p className="font-medium_1 max-w-[530px] px-10 text-[14px] lg:text-[18px]">
          We always try to make our customer Happy. We provide all kind of
          facilities. Your Satisfaction is our main priority
        </p>
        <button className="bg-red-600 hover:bg-red-500 text-white px-4 py-2 mt-4 rounded-lg lg:text-md md:text-sm text-xs transition duration-300">
          Discover more
        </button>
      </div>
    </div>
  );
};

export default Banner;
