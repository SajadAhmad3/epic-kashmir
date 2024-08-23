import React, { useState } from "react";
import navigationData from "../Header/Nav.json";
import { useNavigate } from "react-router-dom";
import { MenuIcon } from "lucide-react";

const Menu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleRedirect = () => {
    navigate("/contactus");
    setIsOpen(false);
  };

  return (
    <div className="lg:hidden relative">
      <button
        className="text-red-500 focus:outline-none"
        onClick={toggleMenu}
      >
        <MenuIcon />
      </button>

      <div
        className={`fixed top-0 left-0 w-[300px] bg-gray-800 items-center flex flex-col z-50 transform transition-transform duration-700 ease-in-out ${
          isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
        }`}
        style={{
          height: isOpen ? "100vh" : "0",
        }}
      >
        <button
          className="absolute top-4 right-4 text-white focus:outline-none text-[25px]"
          onClick={toggleMenu}
        >
          &times;
        </button>
        <ul className={`mt-14 space-y-4 ${isOpen ? "opacity-100" : "opacity-0"}`}>
          {navigationData.map((item, index) => (
            <li key={index}>
              <a
                href={item.path}
                className="text-sm text-white"
                onClick={toggleMenu}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="mt-4 bg-red-600 hover:bg-red-500 transition duration-300 text-white px-4 py-2 rounded-lg text-[10px] max-w-[100px]"
          onClick={handleRedirect}
        >
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Menu;
