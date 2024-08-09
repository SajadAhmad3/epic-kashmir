import React from "react";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import TopDest from "../components/TopDest/TopDest";
import Carousel from "../components/Carousel/Carousel";
import Popular from "../components/Popular/Popular";
import Card from "../components/Card/Card";
import { packageData } from "../utils/package";
import Sticker from "../components/Sticker/Sticker";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <Popular />
      <div className="pt-5">
        <TopDest />
      </div>
      <div className="container pt-5">
        <h2 className="text-[30px] text-center md:text-start lg:tex-start font-bold mt-12">
          Popular Things to do
        </h2>
        <Carousel />
      </div>
      <div className="container pt-20">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center pb-4">
          <h2 className="text-[30px] text-center md:text-start lg:tex-start font-bold mb-5">
            Best Packages For You
          </h2>
          <div className="">
            <button className="bg-red-500 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              View All
            </button>
          </div>
        </div>

        <div className=" grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 mx-4 lg:mx-0 ">
          {packageData.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>

        <Sticker />
      </div>
    </div>
  );
};

export default Home;
