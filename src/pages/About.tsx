import React from "react";
import sonmargImg from "../assets/images/epic-banner.jpg";
import about from "../assets/images/About-Us.svg";
import teamImage from "../assets/images/gulmarg.jpg";
import Sticker from "../components/Sticker/Sticker";
import teamData from "../utils/team";

type Props = {};

const About = (props: Props) => {
  return (
    <div className="bg-black">
      {/* Hero Section */}
      <div className="relative w-full h-[200px] lg:h-[400px]">
        <img
          src={sonmargImg}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img
            src={about}
            alt="Banner"
            className="object-cover max-w-[20%] max-h-[30%]"
          />
        </div>
      </div>

      {/* Our Story Section */}
      <div className="container">
        <section className="px-10 pt-12 bg-gray-800 my-10 mx-4 lg:mx-0 rounded-lg">
          <h2 className="text-[20px] font-bold text-center text-white">
            Our Story
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-center text-gray-300">
            Our journey began with a passion for showcasing the breathtaking
            beauty of Kashmir. We strive to create unforgettable experiences,
            blending adventure and tranquility in one of the most beautiful
            regions of the world.
          </p>

          {/* Our Mission and Values Section */}
          <section className="px-6 py-12 bg-gray-800 mx-4 lg:mx-0  rounded-lg">
            <h2 className="text-[20px] text-center font-bold text-white">
              Our Mission & Values
            </h2>

            <div className="grid max-w-4xl gap-8 mx-auto mt-6 md:grid-cols-3">
              <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
                <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                  Excellence
                </h3>
                <p className="lg:text-sm md:text-sm text-[10px] font-light">
                  We provide exceptional travel experiences tailored to your
                  needs.
                </p>
              </div>
              <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
                <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                  Sustainability
                </h3>
                <p className="lg:text-sm md:text-sm text-[10px] font-light">
                  We are committed to preserving the natural beauty of Kashmir.
                </p>
              </div>
              <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
                <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                  Community
                </h3>
                <p className="lg:text-sm md:text-sm text-[10px] font-light">
                  We support local businesses and promote cultural heritage.
                </p>
              </div>
            </div>
          </section>
        </section>

        {/* Meet our Team Section */}
        <section className="px-6 py-12 bg-gray-800 mb-10 mx-4 lg:mx-0 rounded-lg">
          <h2 className="text-[20px] font-bold text-center text-white mb-10">
            Meet Our Team
          </h2>

          <div className="flex flex-col gap-8 max-w-[1000px] mx-auto ">
            {teamData.map((member, index) => (
              <div
                key={index}
                className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1  bg-white rounded-lg overflow-hidden shadow-lg"
              >
                <div className="col-span-1">
                  <img
                    src={member.src}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="col-span-2 border-b-4 border-red-500 pl-16 pr-10 pt-4 pb-10">
                  <h3 className="mt-4 text-xl font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-600 mb-4">{member.position}</p>
                  <p className="text-gray-700">
                    <span className="font-semibold">{member.name}</span>,{" "}
                    {member.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="px-10 py-12 bg-gray-800 my-10 mx-4 lg:mx-0 rounded-lg">
          <h2 className="text-[20px] font-bold text-center text-white">
            Why Choose Us?
          </h2>
          <div className="grid max-w-4xl gap-8 mx-auto mt-6 md:grid-cols-3">
            <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
              <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                Local Expertise
              </h3>
              <p className="lg:text-sm md:text-sm text-[10px] font-light">
                Our team knows Kashmir inside out, offering unique insights and
                tips.
              </p>
            </div>
            <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
              <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                Personalized Itineraries
              </h3>
              <p className="lg:text-sm md:text-sm text-[10px] font-light">
                We design custom travel plans tailored to your preferences.
              </p>
            </div>
            <div className="bg-gray-100 lg:p-10 md:p-10 p-6 rounded-lg text-black transition transform  hover:-translate-y-2 w-full mx-auto">
              <h3 className="lg:text-2xl md:text-2xl text-[14px] font-semibold mb-2">
                Excellent Service
              </h3>
              <p className="lg:text-sm md:text-sm text-[10px] font-light">
                We prioritize your satisfaction, ensuring a seamless travel
                experience.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <Sticker
          heading="Ready to Explore Kashmir?"
          subheading="Contact us today to start planning your dream trip!"
          btnText="Contact Us"
        />
      </div>
    </div>
  );
};

export default About;
