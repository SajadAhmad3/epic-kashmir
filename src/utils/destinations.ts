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
  description: string;
  image?: ImageProps;
  distanceFromSrinagar: string;
  famousFor: string;
  activities: string[];
  bestTimeToVisit: string;
}

export const DestinationsData: ICard[] = [
  {
    title: "Dal Lake",
    description:
      "Explore the serene beauty of Dal Lake, known as the Jewel in the crown of Kashmir. Glide along its tranquil waters in a traditional Shikara, take in the surrounding mountains, and experience the unique floating gardens and houseboats that dot the lake.",
    image: {
      src: dalImg,
      alt: "Dal Lake",
    },
    distanceFromSrinagar: "0 km",
    famousFor: "Shikara rides, houseboats, floating gardens",
    activities: ["Boating", "Photography", "Shopping at floating markets"],
    bestTimeToVisit: "May to November",
  },
  {
    title: "Drung Waterfall",
    description:
      "Discover the mesmerizing Drung Waterfall, a hidden gem in the valley. Surrounded by lush green forests and rocky terrains, the waterfall offers a cool and refreshing escape, especially during the summer months.",
    image: {
      src: drungImg,
      alt: "Drung Waterfall",
    },
    distanceFromSrinagar: "42 km",
    famousFor: "Natural beauty, tranquil atmosphere",
    activities: ["Hiking", "Picnicking", "Photography"],
    bestTimeToVisit: "April to October",
  },
  {
    title: "Gulmarg",
    description:
      "Gulmarg, often referred to as the 'Meadow of Flowers,' is a popular hill station and skiing destination. Known for its lush green meadows and snow-covered peaks, it offers stunning views and thrilling adventures all year round.",
    image: {
      src: gulmargImg,
      alt: "Gulmarg",
    },
    distanceFromSrinagar: "50 km",
    famousFor: "Skiing, lush meadows, and vibrant flowers",
    activities: ["Skiing", "Snowboarding", "Trekking", "Golfing"],
    bestTimeToVisit: "December to March (for snow activities), April to June (for sightseeing)",
  },
  {
    title: "Gulmarg Gondola",
    description:
      "Embark on a breathtaking journey aboard the Gulmarg Gondola, one of the most spectacular cable car rides in the world. Ascend to a staggering height of over 13,000 feet, where you'll be greeted by panoramic views of snow-capped peaks, dense forests, and the serene beauty of the Himalayas.",
    image: {
      src: gondolaImg,
      alt: "Gondola Ride in Gulmarg",
    },
    distanceFromSrinagar: "50 km",
    famousFor: "Cable car ride, panoramic views",
    activities: ["Cable car ride", "Photography", "Trekking"],
    bestTimeToVisit: "December to March (for snow activities), April to June (for sightseeing)",
  },
  {
    title: "Sonmarg",
    description:
      "Sonmarg, meaning 'Meadow of Gold,' is a beautiful town surrounded by snow-capped mountains and lush green meadows. It's a gateway to the famous Thajiwas Glacier and serves as the base for several treks.",
    image: {
      src: sonmargImg,
      alt: "Sonmarg",
    },
    distanceFromSrinagar: "80 km",
    famousFor: "Golden meadows, Thajiwas Glacier",
    activities: ["Trekking", "Camping", "Fishing", "Horse riding"],
    bestTimeToVisit: "May to October",
  },
  {
    title: "Pahalgam",
    description:
      "Pahalgam, known for its picturesque landscapes, is a charming town nestled in the Lidder Valley. It's a popular base for trekking, fishing, and exploring the nearby Betaab Valley and Aru Valley.",
    image: {
      src: pahalgamImg,
      alt: "Pahalgam",
    },
    distanceFromSrinagar: "95 km",
    famousFor: "Scenic beauty, trekking base",
    activities: ["Trekking", "Fishing", "Golfing", "Horse riding"],
    bestTimeToVisit: "April to November",
  },
];
