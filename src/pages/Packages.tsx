
import sonmargImg from "../assets/images/epic-banner.jpg";
import travel from "../assets/images/Travel-With-Us.png";

type Props = {};

const Packages = (props: Props) => {
  return (
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

  );
};

export default Packages;
