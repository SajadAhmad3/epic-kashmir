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

export const TrendingPackages: ICard[] = [
  {
    currency: "USD",
    description:
      "High-intensity interval training session to boost metabolism.",
    duration: "45 minutes",
    image: {
      src: dalImg,
      alt: "HIIT Workout",
    },
    price: 25,
    title: "HIIT Workout",
    rating: 4,
    slug: "hiit-workout",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description:
      "Relaxing yoga session focused on flexibility and mindfulness.",
    duration: "60 minutes",
    image: {
      src: drungImg,
      alt: "Yoga Session",
    },
    price: 20,
    title: "Yoga Session",
    rating: 5,
    slug: "yoga-session",
    fullWidth: false,
  },
  {
    currency: "GBP",
    description: "Strength training session targeting all major muscle groups.",
    duration: "50 minutes",
    image: {
      src: gondolaImg,
      alt: "Strength Training",
    },
    price: 30,
    title: "Strength Training",
    rating: 4,
    slug: "strength-training",
    fullWidth: false,
  },
  {
    currency: "USD",
    description:
      "Cardio workout designed to increase heart rate and burn calories.",
    duration: "40 minutes",
    image: {
      src: gulmargImg,
      alt: "Cardio Workout",
    },
    price: 20,
    title: "Cardio Workout",
    rating: 3,
    slug: "cardio-workout",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description: "Pilates session to improve core strength and stability.",
    duration: "55 minutes",
    image: {
      src: sonmargImg,
      alt: "Pilates Session",
    },
    price: 28,
    title: "Pilates Session",
    rating: 5,
    slug: "pilates-session",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description: "Pilates session to improve core strength and stability.",
    duration: "55 minutes",
    image: {
      src: pahalgamImg,
      alt: "Pilates Session",
    },
    price: 28,
    title: "Pilates Session",
    rating: 5,
    slug: "pilates-session",
    fullWidth: false,
  },
];


export const PackagesData: ICard[] = [
  {
    currency: "USD",
    description:
      "High-intensity interval training session to boost metabolism.",
    duration: "45 minutes",
    image: {
      src: dalImg,
      alt: "HIIT Workout",
    },
    price: 25,
    title: "HIIT Workout",
    rating: 4,
    slug: "hiit-workout",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description:
      "Relaxing yoga session focused on flexibility and mindfulness.",
    duration: "60 minutes",
    image: {
      src: drungImg,
      alt: "Yoga Session",
    },
    price: 20,
    title: "Yoga Session",
    rating: 5,
    slug: "yoga-session",
    fullWidth: false,
  },
  {
    currency: "GBP",
    description: "Strength training session targeting all major muscle groups.",
    duration: "50 minutes",
    image: {
      src: gondolaImg,
      alt: "Strength Training",
    },
    price: 30,
    title: "Strength Training",
    rating: 4,
    slug: "strength-training",
    fullWidth: false,
  },
  {
    currency: "USD",
    description:
      "Cardio workout designed to increase heart rate and burn calories.",
    duration: "40 minutes",
    image: {
      src: gulmargImg,
      alt: "Cardio Workout",
    },
    price: 20,
    title: "Cardio Workout",
    rating: 3,
    slug: "cardio-workout",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description: "Pilates session to improve core strength and stability.",
    duration: "55 minutes",
    image: {
      src: sonmargImg,
      alt: "Pilates Session",
    },
    price: 28,
    title: "Pilates Session",
    rating: 5,
    slug: "pilates-session",
    fullWidth: false,
  },
  {
    currency: "EUR",
    description: "Pilates session to improve core strength and stability.",
    duration: "55 minutes",
    image: {
      src: pahalgamImg,
      alt: "Pilates Session",
    },
    price: 28,
    title: "Pilates Session",
    rating: 5,
    slug: "pilates-session",
    fullWidth: false,
  },
];
