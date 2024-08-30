import React from "react";
import Banner from "../components/Banner/Banner";
import Service from "../components/Service/Service";
import TopDest from "../components/TopDest/TopDest";
import Carousel from "../components/Carousel/Carousel";
import Popular from "../components/Popular/Popular";
import Card from "../components/Card/Card";
import { TrendingPackages } from "../utils/package";
import Sticker from "../components/Sticker/Sticker";
import Slider from "../components/Slider/Slider";
import FAQ from "../components/FAQ/Faq";
import { faqData } from "../utils/faq";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const redirectToPackages = () => {
    navigate("/packages");
  };
  return (
    <div>
      <Banner />
      <Service />
      <Popular />
      <div className="pt-5">
        <TopDest />
      </div>

      <div className="container lg:pt-5">
        <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:tex-start font-bold lg:mt-12 ">
          Popular Things to do
        </h2>
        <Carousel />
      </div>
      <div className="container lg:pt-20 md:pt-10 pt-5">
        <div className="flex flex-col lg:flex-row md:flex-row justify-between items-center pb-4">
          <h2 className="lg:text-[30px] md:text-[30px] text-[20px] text-center md:text-start lg:tex-start font-bold mb-5">
            Our Trending Tours
          </h2>
          <div className="">
            <button
              className="bg-red-600 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-500 transition duration-300 lg:text-md md:text-sm text-xs"
              onClick={redirectToPackages}
            >
              View All
            </button>
          </div>
        </div>

        <div className=" lg:grid md:grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 mx-4 lg:mx-0 hidden">
          {TrendingPackages.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>

        <div className="container  lg:hidden md:hidden">
          <Slider
            options={{
              startIndex: Math.floor(TrendingPackages.length / 2 - 1),
              skipSnaps: true,
            }}
          >
            {TrendingPackages.map((item, index) => (
              <Card data={item} key={index} />
            ))}
          </Slider>
        </div>

        <Sticker
          heading="Still have questions about the tour?"
          btnText="Get In Touch"
        />
        <FAQ faqs={faqData} />
      </div>
    </div>
  );
};

export default Home;
