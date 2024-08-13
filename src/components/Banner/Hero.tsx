import BannerImg from "../../assets/images/epic-banner.jpg";
import about from "../../assets/images/Explore.svg";

import { Activities } from "../../utils/activities";

const Hero = () => {
  return (
    <div>
      <div className="relative w-full h-[300px] lg:h-[400px]">
        <img
          src={BannerImg}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img
            src={about}
            alt="Banner"
            className="object-cover max-w-[50%] max-h-[40%]"
          />
        </div>
      </div>

      <h2 className="text-xl lg:text-4xl font-bold italic text-center my-8">
        Choose Your Next Adventure
      </h2>

      <div className="mx-4 lg:mx-0">
        {Activities.map((activity, index) => (
          <div key={index} className="container bg-gray-800 p-10 mb-8">
            <div className="flex flex-col gap-10 lg:flex-row ">
              <div className="flex-1 transform duration-700 hover:scale-105">
                <img
                  src={activity.image?.src}
                  alt={activity.image?.alt}
                  className="object-cover w-full h-full rounded-lg"
                />
              </div>
              <div className="flex flex-col flex-1 text-white justify-between">
                <div>
                  <h3 className="text-[20px] font-bold">{activity.title}</h3>
                  <h4 className="text-[16px] font-light italic mb-4">
                    {activity.subheading}
                  </h4>
                  <p className="text-[14px] font-light mb-6">
                    {activity.description}
                  </p>
                  <div className="mb-6">
                    <h5 className="text-[16px] font-semibold mb-2">
                      Activity Highlights:
                    </h5>
                    <ul className="list-disc list-inside text-[14px]">
                      {activity.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex justify-center ">
                  <button className="bg-red-600 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-500 transition duration-300 ">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
