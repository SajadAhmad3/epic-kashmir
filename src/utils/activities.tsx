import dalImg from "../assets/images/dal.jpg";
import drungImg from "../assets/images/drung.jpg";
import gulmargImg from "../assets/images/gulmarg.jpg";
import gondolaImg from "../assets/images/gondola.jpg";
import sonmargImg from "../assets/images/sonmarg.jpg";
import pahalgamImg from "../assets/images/pahalgam.jpg";

interface ImageProps {
  src: string;
  alt: string;
}

interface ICard {
  title: string;
  subheading: string;
  description: string;
  highlights: string[];
  duration: string;
  image?: ImageProps;
}

export const Activities: ICard[] = [
  {
    title: "Gondola Ride in Gulmarg",
    subheading:
      "Experience the world's highest cable car in the stunning landscapes of Gulmarg.",
    description:
      "Embark on a breathtaking journey aboard the Gulmarg Gondola, one of the most spectacular cable car rides in the world. Ascend to a staggering height of over 13,000 feet, where you'll be greeted by panoramic views of snow-capped peaks, dense forests, and the serene beauty of the Himalayas. Perfect for adventure seekers and nature lovers alike, this ride offers an unforgettable experience in the heart of Kashmir.",
    highlights: [
      "Phase 1: Take the ride to Kongdoori Station at 8,530 feet.",
      "Phase 2: Continue to the Apharwat Peak, reaching 13,450 feet.",
      "Duration: The entire ride takes about 20-30 minutes.",
    ],
    duration: "20-30 minutes",
    image: {
      src: gondolaImg,
      alt: "Gondola Ride in Gulmarg",
    },
  },
  {
    title: "Shikara Ride on Dal Lake",
    subheading: "Enjoy a serene Shikara ride on the iconic Dal Lake.",
    description:
      "Glide through the calm waters of Dal Lake and explore the floating gardens, markets, and the beauty of the surrounding landscapes. The Shikara ride offers a peaceful escape from the hustle and bustle, surrounded by breathtaking views of the Zabarwan mountain range.",
    highlights: [
      "Relax in a traditional Shikara boat.",
      "Witness the floating markets and gardens.",
      "Duration: Typically lasts 1-2 hours.",
    ],
    duration: "1-2 hours",
    image: {
      src: dalImg,
      alt: "Shikara Ride on Dal Lake",
    },
  },
  
  {
    title: "Trekking in Drung",
    subheading: "Explore the picturesque landscapes of Drung.",
    description:
      "Drung offers a serene trekking experience with its waterfalls, lush meadows, and panoramic views. This trek is ideal for those looking to connect with nature and escape into the tranquility of the mountains.",
    highlights: [
      "Discover the hidden waterfalls.",
      "Experience the lush green meadows.",
      "Duration: Trekking time is around 4-6 hours.",
    ],
    duration: "4-6 hours",
    image: {
      src: dalImg,
      alt: "Trekking in Drung",
    },
  },
];
