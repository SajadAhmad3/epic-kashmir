import React from "react";
import { useParams } from "react-router-dom";
import {} from "../utils/package";
import { packageDetails } from "../utils/packageDetails";

const KnowMore = () => {
  const { slug } = useParams<{ slug: string }>();

  const packageInfo = packageDetails.find((pkg) => pkg.slug === slug);

  return (
    <div className="bg-black text-white">
      <div className="relative w-full h-[200px] lg:h-[400px]">
        <img
          src={packageInfo?.image?.src}
          alt={packageInfo?.image?.alt || "pic"}
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4 bg-black/50">
          <h1 className="text-2xl lg:text-4xl font-bold">
            {packageInfo?.title}
          </h1>
        </div>
      </div>

      {/* Package Details Section */}
      <div className="px-6 py-8">
        <h2 className="text-xl lg:text-2xl font-semibold mb-4">Details</h2>
        <p className="mb-6">{packageInfo?.details}</p>

        <h3 className="text-lg lg:text-xl font-semibold mb-2">
          What's Included:
        </h3>
        <ul className="list-disc list-inside mb-6">
          {packageInfo?.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="text-lg lg:text-xl font-semibold mb-2">Activities:</h3>
        <ul className="list-disc list-inside mb-6">
          {packageInfo?.activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>

        <h3 className="text-lg lg:text-xl font-semibold mb-2">Itinerary:</h3>
        <ol className="list-decimal list-inside mb-6">
          {packageInfo?.itinerary.map((day, index) => (
            <li key={index}>{day}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default KnowMore;
