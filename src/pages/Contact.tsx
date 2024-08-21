import React, { useState } from "react";
import sonmargImg from "../assets/images/epic-banner.jpg";
import contact from "../assets/images/Contact-Us.svg";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Twitter,
} from "lucide-react";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  destination: string;
  message: string;
  numberOfIndividuals: string;
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    destination: "",
    message: "",
    numberOfIndividuals: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      phone: "",
      travelDate: "",
      destination: "",
      message: "",
      numberOfIndividuals: "",
    });
  };

  return (
    <div>
      <div className="relative w-full h-[200px] lg:h-[400px]">
        <img
          src={sonmargImg}
          alt="Banner"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 flex items-center justify-center px-4">
          <img
            src={contact}
            alt="contact"
            className="object-cover max-w-[30%] max-h-[20%]"
          />
        </div>
      </div>

      <div className="mx-8">
        <div className="flex lg:flex-row flex-col w-full gap-8">
          <div className="w-full">
            <h2 className="text-xl lg:text-4xl font-bold italic text-center my-8">
              Send Your Message
            </h2>
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 lg:grid-cols-2 gap-4 bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                />
              </div>

              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                />
              </div>

              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                />
              </div>

              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="travelDate"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Travel Date
                </label>
                <input
                  type="date"
                  id="travelDate"
                  name="travelDate"
                  value={formData.travelDate}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                />
              </div>

              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="destination"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Package
                </label>
                <select
                  id="destination"
                  name="destination"
                  value={formData.destination}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                >
                  <option value="" disabled>
                    Select your package
                  </option>
                  <option value="Gulmarg">Gulmarg</option>
                  <option value="Pahalgam">Pahalgam</option>
                  <option value="Ladakh">Ladakh</option>
                  <option value="Sonmarg">Sonmarg</option>
                  <option value="Srinagar">Srinagar</option>
                </select>
              </div>

              <div className="mb-4 col-span-2 lg:col-span-1">
                <label
                  htmlFor="numberOfIndividuals"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Number of Individuals
                </label>
                <input
                  type="number"
                  id="numberOfIndividuals"
                  name="numberOfIndividuals"
                  value={formData.numberOfIndividuals}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  required
                />
              </div>

              <div className="mb-6 col-span-2">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-semibold mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-300 text-black"
                  rows={4}
                  placeholder="Enter any special requests or details here"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="max-w-[200px] w-full bg-red-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-gray-300 col-span-2 justify-self-center"
              >
                Submit
              </button>
            </form>
          </div>

          <div className="flex-1 lg:min-w-[300px] lg:mt-[118px] ">
            <div className="bg-gray-100 text-black rounded-lg mb-8 ">
              <h2 className="bg-red-500 text-[18px] font-bold p-2 rounded-t-lg">
                Reservation
              </h2>

              <div className="flex gap-4 items-center px-4 py-4">
                <MessageCircle size={20} />
                <div>
                  <a href="/">
                    <p className="text-sm transform  duration-500 hover:text-red-500">
                      +916006089901
                    </p>
                  </a>
                </div>
              </div>
              <div className="flex gap-4 items-center px-4 pb-4">
                <Mail size={20} />
                <div>
                  <a href="/">
                    <p className="text-sm transform  duration-500 hover:text-red-500">
                      epickashmir@gmail.com
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 text-black rounded-lg mb-8">
              <h2 className="bg-red-500 text-[18px] font-bold p-2 rounded-t-lg">
                Support
              </h2>

              <div className="flex gap-4 items-center p-4">
                <MessageCircle size={20} />
                <div>
                  <a href="/">
                    <p className="text-sm transform  duration-500 hover:text-red-500">
                      +916005252876
                    </p>
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 text-black rounded-lg mb-8 ">
              <h2 className="bg-red-500 text-[18px] font-bold p-2 rounded-t-lg">
                Location
              </h2>

              <div className="flex gap-4 items-center p-4">
                <MapPin />
                <div>
                  <p className="text-sm">
                    Reshi Complex, Nambalnar Tangmarg Baramulla - 193402
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-100 text-black rounded-lg mb-8">
              <h2 className="bg-red-500 text-[18px] font-bold p-2 rounded-t-lg">
                Follow US
              </h2>

              <div className="flex gap-5 cursor-pointer p-4">
                <Instagram className=" transform  duration-500 hover:text-red-500" />
                <Facebook className=" transform  duration-500 hover:text-red-500" />
                <Twitter className=" transform  duration-500  hover:text-red-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
