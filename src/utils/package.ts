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
  description: string;
  image?: ImageProps;
  title: string;
  rating: number;
  slug: string;
}

export const TrendingPackages: ICard[] = [
  {
    title: "Skiing in Gulmarg",
    description: "Experience the thrill of skiing on the snow-covered slopes of Gulmarg, a paradise for adventure enthusiasts.",
    image: {
      src: gulmargImg,
      alt: "Skiing in Gulmarg",
    },
    rating: 5,
    slug: "skiing-gulmarg",
  },
  {
    title: "Gondola Ride in Gulmarg",
    description: "Enjoy a breathtaking gondola ride in Gulmarg, the highest cable car ride in Asia, with stunning views of the Himalayas.",
    image: {
      src: gondolaImg,
      alt: "Gondola Ride in Gulmarg",
    },
    rating: 4.5,
    slug: "gondola-ride-gulmarg",
  },
  {
    title: "Trekking in Sonmarg",
    description: "Explore the beautiful trails of Sonmarg with our guided trekking tours, perfect for both beginners and experienced trekkers.",
    image: {
      src: sonmargImg,
      alt: "Trekking in Sonmarg",
    },
    rating: 4.8,
    slug: "trekking-sonmarg",
  },
  {
    title: "Houseboat Stay on Dal Lake",
    description: "Stay in a traditional houseboat on Dal Lake and enjoy the tranquil surroundings and mesmerizing views.",
    image: {
      src: dalImg,
      alt: "Houseboat Stay on Dal Lake",
    },
    rating: 4.7,
    slug: "houseboat-stay-dal-lake",
  },
  {
    title: "Snowboarding in Drung",
    description: "Join our snowboarding sessions in Drung, a popular destination for winter sports enthusiasts.",
    image: {
      src: drungImg,
      alt: "Snowboarding in Drung",
    },
    rating: 4.6,
    slug: "snowboarding-drung",
  },
  {
    title: "Sightseeing in Pahalgam",
    description: "Explore the scenic beauty of Pahalgam, known for its lush green meadows, rivers, and valleys.",
    image: {
      src: pahalgamImg,
      alt: "Sightseeing in Pahalgam",
    },
    rating: 4.3,
    slug: "sightseeing-pahalgam",
  },
  {
    title: "Kashmir Valley Tour",
    description: "Experience the best of Kashmir with our comprehensive valley tour, including visits to Srinagar, Gulmarg, Sonmarg, and Pahalgam.",
    image: {
      src: dalImg,
      alt: "Kashmir Valley Tour",
    },
    rating: 4.9,
    slug: "kashmir-valley-tour",
  },
  {
    title: "Ladakh Adventure Tour",
    description: "Embark on an exhilarating adventure through Ladakh, exploring high-altitude deserts, serene monasteries, and the stunning Pangong Lake.",
    image: {
      src: "../assets/images/ladakh.jpg", 
      alt: "Ladakh Adventure Tour",
    },
    rating: 4.9,
    slug: "ladakh-adventure-tour",
  },
  {
    title: "Romantic Honeymoon in Kashmir",
    description: "Experience a romantic getaway with your loved one in the beautiful valleys of Kashmir, featuring houseboat stays, shikara rides, and candlelit dinners.",
    image: {
      src: "../assets/images/honeymoon.jpg", 
      alt: "Romantic Honeymoon in Kashmir",
    },
    rating: 4.8,
    slug: "romantic-honeymoon-kashmir",
  },
  {
    title: "Couple Retreat in Gulmarg",
    description: "A serene retreat for couples in Gulmarg, featuring luxury accommodations, spa sessions, and leisure activities amidst the snow-capped mountains.",
    image: {
      src: "../assets/images/couple-retreat.jpg", 
      alt: "Couple Retreat in Gulmarg",
    },
    rating: 4.7,
    slug: "couple-retreat-gulmarg",
  },
  {
    title: "Cultural Heritage Tour of Kashmir",
    description: "Discover the rich cultural heritage of Kashmir with guided tours of ancient temples, Mughal gardens, and traditional crafts workshops.",
    image: {
      src: "../assets/images/cultural-heritage.jpg", 
      alt: "Cultural Heritage Tour of Kashmir",
    },
    rating: 4.5,
    slug: "cultural-heritage-tour-kashmir",
  },
  {
    title: "Family Vacation in Pahalgam",
    description: "Enjoy a fun-filled family vacation in Pahalgam with activities like pony rides, river rafting, and sightseeing tours.",
    image: {
      src: "../assets/images/family-vacation.jpg", 
      alt: "Family Vacation in Pahalgam",
    },
    rating: 4.6,
    slug: "family-vacation-pahalgam",
  },
  {
    title: "Photography Tour in Kashmir",
    description: "Capture the breathtaking beauty of Kashmir with our guided photography tour, perfect for both amateur and professional photographers.",
    image: {
      src: "../assets/images/photography-tour.jpg", 
      alt: "Photography Tour in Kashmir",
    },
    rating: 4.8,
    slug: "photography-tour-kashmir",
  },
  {
    title: "Luxury Houseboat Experience on Nigeen Lake",
    description: "Relax in the lap of luxury on a houseboat in Nigeen Lake, known for its crystal-clear waters and serene environment.",
    image: {
      src: "../assets/images/luxury-houseboat.jpg", 
      alt: "Luxury Houseboat Experience on Nigeen Lake",
    },
    rating: 4.9,
    slug: "luxury-houseboat-nigeen-lake",
  },
  {
    title: "Wellness and Yoga Retreat in Kashmir",
    description: "Revitalize your body and mind with our wellness and yoga retreat, set in the tranquil surroundings of Kashmir's scenic landscapes.",
    image: {
      src: "../assets/images/yoga-retreat.jpg", 
      alt: "Wellness and Yoga Retreat in Kashmir",
    },
    rating: 4.7,
    slug: "wellness-yoga-retreat-kashmir",
  }
];
