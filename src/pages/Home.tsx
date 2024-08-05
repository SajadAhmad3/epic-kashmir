import React from "react";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import TopDest from "../components/TopDest/TopDest";
import Carousel from "../components/Carousel/Carousel";


const Home = () => {
  return (
    <div>
      <Banner />
      <Service />
      <TopDest />
      <div className="container">
      <Carousel />
      </div>
    </div>
  );
};

export default Home;
