import sonmargImg from "../assets/images/epic-banner.jpg";
import travel from "../assets/images/Travel-With-Us.png";
import Card from "../components/Card/Card";
import { TrendingPackages } from "../utils/package";

type Props = {};

const Packages = (props: Props) => {
  return (
    <>
      <div className="relative w-full h-[200px] lg:h-[400px]">
        <img
          src={sonmargImg}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img
            src={travel}
            alt="travel"
            className="object-cover max-w-[30%] max-h-[30%]"
          />
        </div>
      </div>

      <div className="container mt-10 ">
        <div className=" grid lg:grid-cols-3 gap-8 md:grid-cols-2 grid-cols-1 mx-4 lg:mx-0">
          {TrendingPackages.map((item, index) => (
            <Card data={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Packages;
