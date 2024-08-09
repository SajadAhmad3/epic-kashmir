import React from "react";
import Slider from "../components/Slider/Slider";
import Card from "../components/Card/Card";
import { packageData } from "../utils/package";

type Props = {};

const Packages = (props: Props) => {
  return (
    <div className="container">
      <Slider
        options={{
          startIndex: Math.floor(packageData.length / 2 - 1),
          skipSnaps: true,
        }}
      >
        {packageData.map((item, index) => (
          <Card data={item} key={index} />
        ))}
      </Slider>
    </div>
  );
};

export default Packages;
