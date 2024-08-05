import React from 'react';
import dalImg from "../../assets/images/dal.jpg";
import drungImg from "../../assets/images/drung.jpg";
import gulmargImg from "../../assets/images/gulmarg.jpg";
import gondolaImg from "../../assets/images/gondola.jpg";
import sonmargImg from "../../assets/images/sonmarg.jpg";
import pahalgamImg from "../../assets/images/pahalgam.jpg";
import pahalgam1Img from "../../assets/images/pahalgam1.jpg";

const images = [
    { src: dalImg, alt: "Dal", text: "Dal" },
    { src: drungImg, alt: "Drung", text: "Drung" },
    { src: gulmargImg, alt: "Gulmarg", text: "Gulmarg" },
    { src: gondolaImg, alt: "Gondola", text: "Gondola" },
    { src: sonmargImg, alt: "Sonmarg", text: "Sonmarg" },
    { src: pahalgamImg, alt: "Pahalgam", text: "Pahalgam" },
    { src: pahalgam1Img, alt: "Pahalgam 1", text: "Pahalgam 1" },
    { src: dalImg, alt: "Dal", text: "Dal" },
    { src: drungImg, alt: "Drung", text: "Drung" },
];

const TopDest = () => {
    return (
        <div className='container'>
            <h2 className='text-[30px] font-bold text-center py-10'>Top Destinations</h2>
            <div className='flex space-x-4 mb-10'>
                {images.map((image, index) => (
                    <div key={index} className='flex-shrink-0 text-center'>
                        <div className='w-32 h-32 overflow-hidden rounded-full border-2 border-gray-300'>
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
