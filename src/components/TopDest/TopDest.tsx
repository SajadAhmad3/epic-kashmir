
import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";
import pahalgamImg from "../../assets/images/pahalgam.jpg";

const images = [
    { src: dalImg, alt: "Dal", text: "Dal" },
    { src: drungImg, alt: "Drung", text: "Drung" },
    { src: gulmargImg, alt: "Gulmarg", text: "Gulmarg" },
    { src: gondolaImg, alt: "Gondola", text: "Gondola" },
    { src: sonmargImg, alt: "Sonmarg", text: "Sonmarg" },
    { src: pahalgamImg, alt: "Pahalgam", text: "Pahalgam" },
    { src: dalImg, alt: "Dal", text: "Dal" },
    { src: drungImg, alt: "Drung", text: "Drung" },
];

const TopDest = () => {
    return (
        <div className='container'>
            <div className='flex flex-col lg:flex-row md:flex-row justify-between items-center pb-4'>
            <h2 className='text-[30px] text-center md:text-start lg:tex-start font-bold mb-5'>Top Destinations</h2>
            <div className="">
            <button className="bg-red-500 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-red-600 transition duration-300">
              View All
            </button>
          </div>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10 items-center justify-center'>
                {images.map((image, index) => (
                    <div key={index} className='flex items-center flex-shrink-0 text-center border border-gray-800 p-5 lg:mx-0 md:mx-0 mx-5 rounded-lg gap-10 transition transform hover:-translate-y-2 shadow-muted-700 shadow-lg cursor-pointer'>
                        <div className='w-28 h-28 overflow-hidden rounded-full border-2 border-gray-300'>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className='w-full h-full object-cover'
                            />
                        </div>
                        <p className='mt-2 text-sm font-medium'>{image.text}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TopDest;
