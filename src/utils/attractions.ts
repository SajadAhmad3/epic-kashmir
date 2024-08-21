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
}

export const AttractionsData: ICard[] = [
  {
    title: "Dal Lake",
    description:
      "Dal Lake is not just a body of water; it's the heartbeat of Srinagar. A Shikara ride on Dal Lake is an essential part of the Kashmir experience. As you glide through the calm waters, you'll pass by houseboats, floating gardens, and vendors selling everything from saffron to handmade crafts. The surrounding mountains and Mughal gardens provide a stunning backdrop, making it an unforgettable journey through the culture and beauty of Kashmir.",
    image: {
      src: dalImg,
      alt: "Dal Lake",
    },
  },
  {
    title: "Drung Waterfall",
    description:
      "The Drung Waterfall is a hidden gem nestled in the picturesque valley. This stunning waterfall is surrounded by dense forests and rocky terrain, making it a perfect spot for nature lovers and adventure enthusiasts. Whether you're visiting in summer when the waterfall is in full flow or in winter when it's partially frozen, Drung offers a serene and refreshing escape from the hustle and bustle of city life.",
    image: {
      src: drungImg,
      alt: "Drung Waterfall",
    },
  },
  {
    title: "Gulmarg",
    description:
      "Gulmarg, known as the 'Meadow of Flowers,' is a breathtaking destination that offers a wide range of activities throughout the year. In winter, it transforms into India's premier ski resort, attracting skiers and snowboarders from around the world. In summer, the lush meadows are perfect for hiking, golfing at the world's highest golf course, and enjoying the stunning views of the surrounding mountains.",
    image: {
      src: gulmargImg,
      alt: "Gulmarg",
    },
  },
  {
    title: "Gulmarg Gondola",
    description:
      "The Gulmarg Gondola is one of the highest cable cars in the world, and a ride on it is a must-do activity for visitors. The gondola takes you from Gulmarg to the summit of Mount Apharwat, offering breathtaking views of the snow-covered peaks and valleys below. In winter, it's a gateway to some of the best skiing and snowboarding slopes in the region, while in summer, it's a starting point for trekkers exploring the surrounding mountains.",
    image: {
      src: gondolaImg,
      alt: "Gondola Ride in Gulmarg",
    },
  },
  {
    title: "Sonmarg",
    description:
      "Sonmarg, meaning 'Meadow of Gold,' is a tranquil town surrounded by towering snow-capped peaks and verdant meadows. It's the gateway to the famous Thajiwas Glacier, where you can enjoy a pony ride or trek through the stunning landscapes. Sonmarg is also a starting point for numerous treks, including the famous Amarnath Yatra, making it a haven for adventurers and nature lovers.",
    image: {
      src: sonmargImg,
      alt: "Sonmarg",
    },
  },
  {
    title: "Pahalgam",
    description:
      "Pahalgam is a charming town located in the Lidder Valley, known for its scenic beauty and adventure opportunities. It's a popular base for trekking, particularly the trek to the Amarnath Cave, one of the holiest shrines in Hinduism. Pahalgam also offers opportunities for trout fishing in the Lidder River, horseback riding, and exploring the beautiful Betaab and Aru Valleys, making it a perfect destination for nature lovers and adventure seekers alike.",
    image: {
      src: pahalgamImg,
      alt: "Pahalgam",
    },
  },
];
