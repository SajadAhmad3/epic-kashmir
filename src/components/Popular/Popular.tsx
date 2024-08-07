import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";
import pahalgam from "../../assets/images/pahalgam.jpg";

const Popular = () => {
  return (
    <div className="container">
      <h2 className='text-[30px] text-center md:text-start lg:tex-start font-bold mb-5'>Must see attractions</h2>
      <div className="grid lg:grid-cols-5 grid-cols-1 grid-rows-2 gap-4 lg:h-[500px] lg:px-0 px-4">
        
        <div className="col-span-2 lg:col-span-1 row-span-2 flex flex-col justify-between gap-4">
          <img
            src={dalImg}
            alt="Cruises"
            className="w-full h-1/2 object-cover rounded-lg"
          />
          <img
            src={drungImg}
            alt="Museum Tour"
            className="w-full h-1/2 object-cover rounded-lg"
          />
        </div>

        <div className="col-span-2 row-span-2">
          <img
            src={gulmargImg}
            alt="Beach Tours"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="col-span-2 row-span-1">
          <img
            src={pahalgam}
            alt="City Tours"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        <div className="col-span-2 grid gap-4 lg:grid-cols-2 grid-cols-1">
          <img
            src={sonmargImg}
            alt="Cruises"
            className=" h-full object-cover rounded-lg "
          />
          <img
            src={gondolaImg}
            alt="Museum Tour"
            className=" h-full object-cover rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Popular;
