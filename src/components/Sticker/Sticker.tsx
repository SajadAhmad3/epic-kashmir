import React from "react";

const Sticker = () => {
  return (
    <div className="bg-red-500 p-8 mt-20 rounded-lg flex flex-col items-center">
      <p className="text-xxl font-semibold mb-2 ">Still have questions about the tour?</p>

      <button className="bg-black text-white px-12 py-2 rounded-lg shadow-lg hover:bg-secondary-800 transition duration-300">
        Contact Us
      </button>
    </div>
  );
};

export default Sticker;
