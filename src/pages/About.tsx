import React from "react";
import sonmargImg from "../assets/images/epic-banner.jpg";
import about from "../assets/images/About-Us.svg";
type Props = {};

const About = (props: Props) => {
  return (
    <div>
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <img
          src={sonmargImg}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img src={about} alt="Banner" className="object-cover max-w-[20%] max-h-[30%]" />
        </div>
      </div>

      <h2 className="text-xl lg:text-4xl font-bold italic text-center my-8">
        Choose Your Next Adventure
      </h2>
    </div>
  );
};

export default About;
