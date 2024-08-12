import React from "react";
import Slider from "../components/Slider/Slider";
import Card from "../components/Card/Card";
import { TrendingPackages } from "../utils/package";

type Props = {};

const Packages = (props: Props) => {
  return (
    <div className="container">
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
  );
};

export default Packages;
