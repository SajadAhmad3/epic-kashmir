import React, { useState } from "react";
import Modal from "../Modal/Modal";

interface StickerProps {
  heading: string;
  subheading?: string;
  btnText: string;
}

const Sticker = ({ heading, subheading, btnText }: StickerProps) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="bg-red-500 lg:p-8 md:p-6 p-4 lg:mt-20 md:mt-10 mt-5 rounded-lg flex flex-col items-center mx-4 lg:mx-0">
      <div className="mb-4 text-center">
      <h2 className="text-[24px] font-semibold mb-2">{heading}</h2>
      {subheading && <p className="text-[20px] mb-4 text-gray-100">{subheading}</p>}
      </div>

      <button
        className="bg-gray-900 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        onClick={openModal}
      >
        {btnText}
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default Sticker;
