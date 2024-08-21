import React from "react";
import { useNavigate } from "react-router-dom";

const Sticker = () => {
  const navigate = useNavigate();

  const redirectToSupport = () => {
    navigate("/support");
  };
  return (
    <div className="bg-red-500 lg:p-8 md:p-6 p-4 lg:mt-20 md:mt-10 mt-5 rounded-lg flex flex-col items-center mx-4 lg:mx-0">
      <p className="text-xxl font-semibold mb-2 ">
        Still have questions about the tour?
      </p>

      <button
        className="bg-gray-900 text-white px-12 py-2 rounded-lg shadow-lg hover:bg-gray-800 transition duration-300"
        onClick={redirectToSupport}
      >
        Get In Touch
      </button>
    </div>
  );
};

export default Sticker;
