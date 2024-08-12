import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  PhoneCall,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-800 lg:mt-20 md:mt-10 mt-5">
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 px-4 pb-4 gap-8 min-h-[300px] pt-10">
        <div className=" text-xxxl font-bold">
          <a href="/">
            <span className="text-red ">Epic</span>Kashmir
            <p className="text-[14px]">For Explorers Everywhere</p>
          </a>
        </div>

        <div className=" ">
          <h3 className="text-[20px] font-semibold ">Important Links</h3>
          <div className="flex flex-col gap-4 py-4">
            <a href="/about">
              <span className=" transform  duration-500  hover:text-red-500 text-sm">
                About
              </span>
            </a>
            <a href="/packages">
              <span className=" transform  duration-500  hover:text-red-500 text-sm">
                Packages
              </span>
            </a>
            <a href="/">
              <span className=" transform  duration-500  hover:text-red-500 text-sm">
                Top Destinations
              </span>
            </a>
            <a href="/">
              <span className=" transform  duration-500  hover:text-red-500 text-sm">
                Contact Us
              </span>
            </a>
          </div>
        </div>

        <div className="flex flex-col  gap-5 ">
          <h3 className="text-[20px] font-semibold">Follow Us</h3>
          <div className="flex gap-5 cursor-pointer">
            <Instagram className=" transform  duration-500 hover:-translate-y-2 hover:text-red-500" />
            <Facebook className=" transform  duration-500 hover:-translate-y-2 hover:text-red-500" />
            <Twitter className=" transform  duration-500 hover:-translate-y-2 hover:text-red-500" />
          </div>
        </div>

        <div className="">
          <h3 className="text-[20px] font-semibold">Contact Us</h3>
          <div className="flex flex-col gap-5 pt-5">
            <div className="flex gap-4 items-center">
              <PhoneCall size={20} />
              <div>
                <a href="/">
                  <p className="text-sm transform  duration-500 hover:text-red-500">
                    +916006089901
                  </p>
                </a>
                <a href="/">
                  <p className="text-sm transform  duration-500 hover:text-red-500">
                    +916005252876
                  </p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MessageCircle size={20}/>
              <div>
                <a href="/">
                  <p className="text-sm transform  duration-500 hover:text-red-500">
                    +916006089901
                  </p>
                </a>
                <a href="/">
                  <p className="text-sm transform  duration-500 hover:text-red-500">
                    +916005252876
                  </p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <Mail size={20} />
              <div>
                <a href="/">
                  <p className="text-sm transform  duration-500 hover:text-red-500">
                    epickashmir@gmail.com
                  </p>
                </a>
              </div>
            </div>
            <div className="flex gap-4 items-center">
              <MapPin />
              <div>
                <p className="text-sm">
                  Reshi Complex, Nambalnar Tangmarg Baramulla - 193402
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container pb-10">
        <hr className="border-gray" />
        <p className="text-center pt-4 text-sm">
          Copyright &copy; <span className="text-red ">Epic</span>Kashmir 2024
        </p>
      </div>
    </div>
  );
};

export default Footer;
