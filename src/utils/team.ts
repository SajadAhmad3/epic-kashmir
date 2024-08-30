// teamData.ts
import sajad from "../assets/images/sajad.jpeg";
import mudasir from "../assets/images/mudasir.jpeg";
import mehraj from "../assets/images/mehraj.jpeg";
import rayees from "../assets/images/rayees.jpeg";
import zahid from "../assets/images/zahid.jpeg";


interface TeamMember {
    name: string;
    position: string;
    description: string;
    src: string;
  }
  
  const teamData: TeamMember[] = [
    {
      name: "Sajad Ahmad",
      position: "Founder & CEO",
      src: sajad,
      description:
        " the visionary Founder and CEO, brings over a decade of experience in travel and tourism to the team. His deep-rooted passion for Kashmir’s beauty and culture led him to establish this venture, blending adventure, comfort, and cultural immersion into one unforgettable experience. With a meticulous eye for detail, he ensures every aspect of the travel experience meets the highest standards.",
    },
    {
      name: "Mudasir Reshi",
      position: "Co-Founder",
      src: mudasir,
      description:
        " Co-Founder, brings his dynamic leadership and innovative thinking to the team. With a background in hospitality management, he has been instrumental in shaping the company’s strategic vision and building strong partnerships across the tourism industry. His commitment to delivering exceptional customer experiences is at the heart of the company’s success.",
    },
    {
      name: "Zahid Lone",
      position: "Head of Operations",
      src: zahid,
      description:
        " our Head of Operations and Senior Tourist Guide, is renowned for his exceptional knowledge of Kashmir's landscapes, history, and culture. With years of guiding experience, he expertly crafts memorable journeys that showcase the hidden gems of the region. His friendly demeanor and passion for storytelling make every trip an engaging and enriching experience for our guests.",
    },
    {
      name: "Rayees Lone",
      position: "Adventure Coordinator",
      src: rayees,
      description:
        " our Adventure Coordinator and Senior Tourist Guide, is a seasoned explorer with a deep love for nature and outdoor activities. With extensive experience in organizing treks and adventure sports, Rayees ensures our guests enjoy the thrill of Kashmir’s terrains while maintaining the highest safety standards. His dedication to adventure tourism brings a spirit of excitement and exploration to every tour.",
    },
    {
      name: "Mehraj Reshi",
      position: "Marketing Head",
      src: mehraj,
      description:
        " our Marketing Head, is the creative force behind our brand's voice. With a keen understanding of the travel market and digital trends, he crafts compelling campaigns that capture the essence of our unique offerings. His strategic approach ensures our story reaches a global audience, drawing them to the wonders of Kashmir.",
    },
  ];
  
  export default teamData;
  