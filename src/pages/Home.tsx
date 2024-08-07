import React from "react";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import TopDest from "../components/TopDest/TopDest";
import Carousel from "../components/Carousel/Carousel";
import Popular from "../components/Popular/Popular";

const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <TopDest />
      <Popular />
      <div className="container">
        <h2 className="text-[30px] text-center md:text-start lg:tex-start font-bold mt-12">
          Popular Things to do
        </h2>
        <Carousel />
      </div>
    </div>
  );
};

export default Home;
