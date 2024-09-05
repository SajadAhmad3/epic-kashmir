
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

interface PackageDetail {
    title: string;
    details: string;
    image?: ImageProps;
    includes: string[];
    activities: string[];
    itinerary: string[];
    slug: string;
  }
  
  export const packageDetails: PackageDetail[] = [
    {
      title: "Skiing in Gulmarg",
      image: {
        src: gulmargImg,
        alt: "Skiing in Gulmarg",
      },
      slug: "skiing-gulmarg",
      details: "A thrilling skiing experience in Gulmarg, known for its world-class slopes and breathtaking views of the Himalayas. Ideal for both beginners and experienced skiers.",
      includes: [
        "Accommodation in Gulmarg",
        "Ski equipment rental",
        "Professional ski instructor",
        "Daily breakfast and dinner",
        "Transfers from Srinagar"
      ],
      activities: ["Skiing", "Snowboarding", "Ski lessons", "Snow trekking"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to Gulmarg, and check-in",
        "Day 2: Full-day skiing with professional instructor",
        "Day 3: Snowboarding and snow trekking activities",
        "Day 4: Leisure day or additional skiing lessons",
        "Day 5: Return to Srinagar for departure"
      ],
    },
    {
      title: "Gondola Ride in Gulmarg",
      image: {
        src: gondolaImg,
        alt: "Gondola Ride in Gulmarg",
      },
      slug: "gondola-ride-gulmarg",
      details: "Experience a breathtaking gondola ride in Gulmarg, the highest cable car in Asia, offering stunning panoramic views of the snow-clad Himalayas.",
      includes: [
        "Accommodation in Gulmarg",
        "Gondola ride tickets (Phase I and Phase II)",
        "Sightseeing in Gulmarg",
        "Daily breakfast and dinner",
        "Transfers from Srinagar"
      ],
      activities: ["Gondola ride", "Sightseeing", "Photography"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to Gulmarg, and check-in",
        "Day 2: Gondola ride (Phase I and II), local sightseeing",
        "Day 3: Leisure day or optional activities",
        "Day 4: Return to Srinagar for departure"
      ],
    },
    {
      title: "Trekking in Sonmarg",
      image: {
        src: sonmargImg,
        alt: "Trekking in Sonmarg",
      },
      slug: "trekking-sonmarg",
      details: "Explore the beautiful trails of Sonmarg with our guided trekking tours, perfect for adventure enthusiasts looking to experience the serene landscapes of Kashmir.",
      includes: [
        "Accommodation in Sonmarg",
        "Guided trekking tour",
        "All meals (Breakfast, lunch, and dinner)",
        "Trekking equipment",
        "Transfers from Srinagar"
      ],
      activities: ["Trekking", "Camping", "Photography", "Nature walks"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to Sonmarg, and check-in",
        "Day 2: Full-day guided trekking tour",
        "Day 3: Leisure day or additional short treks",
        "Day 4: Return to Srinagar for departure"
      ],

    },
    {
      title: "Houseboat Stay on Dal Lake",
      image: {
        src: dalImg,
        alt: "Houseboat Stay on Dal Lake",
      },
      slug: "houseboat-stay-dal-lake",
    
      details: "Stay in a traditional houseboat on Dal Lake, enjoying tranquil surroundings, mesmerizing views, and the unique experience of living on water.",
      includes: [
        "Houseboat accommodation on Dal Lake",
        "Shikara ride on Dal Lake",
        "Daily breakfast and dinner",
        "Cultural evening with local music and dance",
        "Transfers from Srinagar"
      ],
      activities: ["Shikara ride", "Sightseeing", "Photography", "Cultural evening"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to houseboat, and check-in",
        "Day 2: Shikara ride and local sightseeing",
        "Day 3: Leisure day or optional activities",
        "Day 4: Return to Srinagar for departure"
      ],

    },
    {
      title: "Snowboarding in Drung",
      image: {
        src: drungImg,
        alt: "Snowboarding in Drung",
      },
      slug: "snowboarding-drung",
      details: "Join our snowboarding sessions in Drung, a popular destination for winter sports enthusiasts, and experience the thrill of sliding down snow-covered slopes.",
      includes: [
        "Accommodation in Drung",
        "Snowboarding equipment rental",
        "Professional instructor",
        "Daily breakfast and dinner",
        "Transfers from Srinagar"
      ],
      activities: ["Snowboarding", "Skiing", "Snowshoeing", "Photography"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to Drung, and check-in",
        "Day 2: Full-day snowboarding with professional instructor",
        "Day 3: Snowshoeing and optional activities",
        "Day 4: Return to Srinagar for departure"
      ],

    },
    {
      title: "Sightseeing in Pahalgam",
      image: {
        src: pahalgamImg,
        alt: "Sightseeing in Pahalgam",
      },
      slug: "sightseeing-pahalgam",
      details: "Explore the scenic beauty of Pahalgam, known for its lush green meadows, rivers, and valleys, with our comprehensive sightseeing tour.",
      includes: [
        "Accommodation in Pahalgam",
        "Guided sightseeing tour",
        "Daily breakfast and dinner",
        "Pony ride and river rafting (optional)",
        "Transfers from Srinagar"
      ],
      activities: ["Sightseeing", "Pony rides", "River rafting", "Photography"],
      itinerary: [
        "Day 1: Arrival in Srinagar, transfer to Pahalgam, and check-in",
        "Day 2: Full-day sightseeing in Pahalgam",
        "Day 3: Leisure day or optional activities",
        "Day 4: Return to Srinagar for departure"
      ],

    },
    {
      title: "Kashmir Valley Tour",
      image: {
        src: dalImg,
        alt: "Kashmir Valley Tour",
      },
      slug: "kashmir-valley-tour",
      details: "Experience the best of Kashmir with our comprehensive valley tour, including visits to Srinagar, Gulmarg, Sonmarg, and Pahalgam.",
      includes: [
        "Accommodation in Srinagar, Gulmarg, Sonmarg, and Pahalgam",
        "Guided tours in each location",
        "Daily breakfast and dinner",
        "Transfers between all locations",
        "Shikara ride on Dal Lake"
      ],
      activities: ["Sightseeing", "Shikara ride", "Photography", "Cultural tours"],
      itinerary: [
        "Day 1: Arrival in Srinagar, local sightseeing and houseboat stay",
        "Day 2: Transfer to Gulmarg, sightseeing and activities",
        "Day 3: Transfer to Sonmarg, guided trekking and exploration",
        "Day 4: Transfer to Pahalgam, sightseeing and leisure",
        "Day 5: Return to Srinagar for departure"
      ],

    },

    {
        title: "Ladakh Adventure Tour",
        image: {
            src: "../assets/images/honeymoon.jpg", 
            alt: "Romantic Honeymoon in Kashmir",
          },
          slug: "romantic-honeymoon-kashmir",
        details: "Embark on an exhilarating adventure through Ladakh, exploring high-altitude deserts, serene monasteries, and the stunning Pangong Lake.",
        includes: [
          "Accommodation in Leh and Nubra Valley",
          "Guided tours of monasteries and local sights",
          "Camel ride in Nubra Valley",
          "Daily breakfast, lunch, and dinner",
          "Transfers from Leh airport"
        ],
        activities: ["Sightseeing", "Camel ride", "Photography", "Cultural tours"],
        itinerary: [
          "Day 1: Arrival in Leh, acclimatization and local sightseeing",
          "Day 2: Tour of Leh's monasteries and local markets",
          "Day 3: Transfer to Nubra Valley, camel ride and cultural experience",
          "Day 4: Visit Pangong Lake, photography and exploration",
          "Day 5: Return to Leh for departure"
        ],

      },
      {
        title: "Romantic Honeymoon in Kashmir",
        image: {
            src: "../assets/images/honeymoon.jpg", 
            alt: "Romantic Honeymoon in Kashmir",
          },
          slug: "romantic-honeymoon-kashmir",
        details: "Experience a romantic getaway with your loved one in the beautiful valleys of Kashmir, featuring houseboat stays, shikara rides, and candlelit dinners.",
        includes: [
          "Luxury accommodation in Srinagar and Gulmarg",
          "Houseboat stay with a candlelit dinner",
          "Shikara ride on Dal Lake",
          "Daily breakfast and dinner",
          "Private transfers throughout the tour"
        ],
        activities: ["Shikara ride", "Sightseeing", "Photography", "Candlelit dinner"],
        itinerary: [
          "Day 1: Arrival in Srinagar, check-in to a luxury houseboat",
          "Day 2: Shikara ride and local sightseeing in Srinagar",
          "Day 3: Transfer to Gulmarg, romantic leisure activities",
          "Day 4: Free day for personal exploration and relaxation",
          "Day 5: Return to Srinagar for departure"
        ],

      },
      {
        title: "Couple Retreat in Gulmarg",
        image: {
            src: "../assets/images/couple-retreat.jpg", 
            alt: "Couple Retreat in Gulmarg",
          },
          slug: "couple-retreat-gulmarg",
        details: "A serene retreat for couples in Gulmarg, featuring luxury accommodations, spa sessions, and leisure activities amidst the snow-capped mountains.",
        includes: [
          "Accommodation in a luxury resort in Gulmarg",
          "Couple spa session",
          "Daily breakfast and dinner",
          "Sightseeing tour in Gulmarg",
          "Transfers from Srinagar"
        ],
        activities: ["Spa session", "Sightseeing", "Photography", "Leisure walks"],
        itinerary: [
          "Day 1: Arrival in Srinagar, transfer to Gulmarg, and check-in",
          "Day 2: Sightseeing tour in Gulmarg, leisure activities",
          "Day 3: Relaxation and spa session",
          "Day 4: Free day for personal activities",
          "Day 5: Return to Srinagar for departure"
        ],

      },
      {
        title: "Cultural Heritage Tour of Kashmir",
        image: {
            src: "../assets/images/cultural-heritage.jpg", 
            alt: "Cultural Heritage Tour of Kashmir",
          },
          slug: "cultural-heritage-tour-kashmir",
        details: "Discover the rich cultural heritage of Kashmir with guided tours of ancient temples, Mughal gardens, and traditional crafts workshops.",
        includes: [
          "Accommodation in Srinagar",
          "Guided cultural tours",
          "Daily breakfast and dinner",
          "Entrance fees to all heritage sites",
          "Transfers from Srinagar airport"
        ],
        activities: ["Sightseeing", "Photography", "Cultural tours", "Craft workshops"],
        itinerary: [
          "Day 1: Arrival in Srinagar, visit Mughal gardens and local markets",
          "Day 2: Guided tour of ancient temples and heritage sites",
          "Day 3: Visit traditional crafts workshops and local artisans",
          "Day 4: Free day for leisure or optional tours",
          "Day 5: Departure from Srinagar"
        ],

      },
      {
        title: "Family Vacation in Pahalgam",
        image: {
            src: "../assets/images/family-vacation.jpg", 
            alt: "Family Vacation in Pahalgam",
          },
          slug: "family-vacation-pahalgam",
        details: "Enjoy a fun-filled family vacation in Pahalgam with activities like pony rides, river rafting, and sightseeing tours.",
        includes: [
          "Accommodation in Pahalgam",
          "Guided sightseeing tours",
          "Daily breakfast and dinner",
          "Pony ride and river rafting",
          "Transfers from Srinagar"
        ],
        activities: ["Sightseeing", "Pony rides", "River rafting", "Photography"],
        itinerary: [
          "Day 1: Arrival in Srinagar, transfer to Pahalgam, and check-in",
          "Day 2: Full-day sightseeing tour in Pahalgam",
          "Day 3: Pony ride and river rafting adventure",
          "Day 4: Leisure day or optional activities",
          "Day 5: Return to Srinagar for departure"
        ],

      },
      {
        title: "Photography Tour in Kashmir",
        image: {
            src: "../assets/images/photography-tour.jpg", 
            alt: "Photography Tour in Kashmir",
          },
          slug: "photography-tour-kashmir",
        details: "Capture the breathtaking beauty of Kashmir with our guided photography tour, perfect for both amateur and professional photographers.",
        includes: [
          "Accommodation in Srinagar and Gulmarg",
          "Professional photography guide",
          "Daily breakfast and dinner",
          "Transfers between shooting locations",
          "Photography sessions in iconic locations"
        ],
        activities: ["Photography", "Sightseeing", "Guided tours"],
        itinerary: [
          "Day 1: Arrival in Srinagar, photography session on Dal Lake",
          "Day 2: Full-day photography tour in Srinagar's Mughal gardens",
          "Day 3: Transfer to Gulmarg, photography session in snow-capped peaks",
          "Day 4: Leisure day for personal photography",
          "Day 5: Return to Srinagar for departure"
        ],

      },
      {
        title: "Luxury Houseboat Experience on Nigeen Lake",
        image: {
            src: "../assets/images/luxury-houseboat.jpg", 
            alt: "Luxury Houseboat Experience on Nigeen Lake",
          },
          slug: "luxury-houseboat-nigeen-lake",
        details: "Relax in the lap of luxury on a houseboat in Nigeen Lake, known for its crystal-clear waters and serene environment.",
        includes: [
          "Luxury houseboat accommodation on Nigeen Lake",
          "Private shikara ride",
          "Daily breakfast and dinner",
          "Spa services (optional)",
          "Transfers from Srinagar"
        ],
        activities: ["Shikara ride", "Spa", "Photography", "Leisure"],
        itinerary: [
          "Day 1: Arrival in Srinagar, transfer to houseboat on Nigeen Lake",
          "Day 2: Private shikara ride and local sightseeing",
          "Day 3: Leisure day with optional spa services",
          "Day 4: Free day for relaxation or personal activities",
          "Day 5: Return to Srinagar for departure"
        ],

      },
      {
        title: "Wellness and Yoga Retreat in Kashmir",
        image: {
            src: "../assets/images/yoga-retreat.jpg", 
            alt: "Wellness and Yoga Retreat in Kashmir",
          },
          slug: "wellness-yoga-retreat-kashmir",
        details: "Revitalize your body and mind with our wellness and yoga retreat, set in the tranquil surroundings of Kashmir's scenic landscapes.",
        includes: [
          "Accommodation in a wellness retreat center",
          "Daily yoga and meditation sessions",
          "Healthy meals (breakfast, lunch, and dinner)",
          "Spa treatments and nature walks",
          "Transfers from Srinagar"
        ],
        activities: ["Yoga", "Meditation", "Spa treatments", "Nature walks"],
        itinerary: [
          "Day 1: Arrival in Srinagar, transfer to retreat center, and check-in",
          "Day 2: Morning yoga, meditation, and spa treatments",
          "Day 3: Nature walks and relaxation",
          "Day 4: Full day of wellness activities",
          "Day 5: Return to Srinagar for departure"
        ],

      }
    
  ];
  