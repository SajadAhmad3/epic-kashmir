import React from "react";

interface ImageProps {
  src: string;
  alt: string;
}

interface ICard {
  currency: string;
  description: string;
  duration: string;
  image?: ImageProps;
  price: number;
  title: string;
  rating: number;
  slug: string;
  fullWidth?: boolean;
}

interface CardProps {
  data: ICard;
}

const Card: React.FC<CardProps> = ({ data }) => {
  const {
    description,
    image,
    title,
    slug,
  } = data;

  return (
    <div
      className={`hover-pattern-1 flex h-full w-full flex-1 flex-col bg-secondary-800 sm:h-[683px] rounded-lg`}
    >
      <a href={`/packages/${slug}`} className="relative h-[258px] sm:h-[320px]">
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            className="object-cover w-full h-full rounded-t-lg"
          />
        )}
      </a>

      <div className="flex flex-1 flex-col justify-between gap-[18px] p-3 sm:flex-1 sm:gap-0 sm:p-6">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <h3 className="text-sm/[17.5px] font-bold uppercase text-secondary-50 sm:text-xl/[25px]">
              {title}
            </h3>
          </div>

          <p className="line-clamp-4 text-xs/[18px] text-secondary-400 sm:text-lg">
            {description}
          </p>
        </div>

        <div className="flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col gap-2.5 sm:gap-4">

            <div className="border-b border-b-secondary-700" />
          </div>
          <div className="flex justify-between gap-4 sm:hidden">
            <button className="border hover:border-secondary-500 transition duration-300 text-white px-4 py-2 rounded-lg text-sm">
              Know More
            </button>

            <button className="bg-red-500 hover:bg-red-600 transition duration-300 text-white px-4 py-2 rounded-lg text-sm">
              Book Now
            </button>
          </div>
          <div className="hidden justify-between gap-6 sm:flex">
            <button className="border hover:border-secondary-500 transition duration-300 text-white px-4 py-2 rounded-lg text-sm">
              Know More
            </button>

            <button className=" text-white px-4 py-2 text-sm bg-red-500 hover:bg-red-600 transition duration-300 rounded-lg">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
