import React, { useState } from "react";
import sonmargImg from "../assets/images/epic-banner.jpg";
import contact from "../assets/images/Contact-Us.svg";

export interface FormData {
  name: string;
  email: string;
  phone: string;
  travelDate: string;
  destination: string;
  message: string;
  numberOfIndividuals: string; // Added number of individuals field
  males: string; // Added males field
  females: string; // Added females field
  children: string; // Added children field
}

const ContactUs = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    travelDate: "",
    destination: "",
    message: "",
    numberOfIndividuals: "", // Initialize number of individuals field
    males: "", // Initialize males field
    females: "", // Initialize females field
    children: "", // Initialize children field
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
        <h2 className="text-xl lg:text-4xl font-bold italic text-center my-8">
          Send Your Message
        </h2>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-2 gap-4  max-w-[1000px] mx-auto bg-white p-6 rounded-lg shadow-lg"
        >
          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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

          {/* New Fields */}
          <div className="mb-4">
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="males"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Males
            </label>
            <input
              type="number"
              id="males"
              name="males"
              value={formData.males}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="females"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Females
            </label>
            <input
              type="number"
              id="females"
              name="females"
              value={formData.females}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="children"
              className="block text-gray-700 font-semibold mb-2"
            >
              Number of Children
            </label>
            <input
              type="number"
              id="children"
              name="children"
              value={formData.children}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
              rows={4}
              placeholder="Enter any special requests or details here"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="max-w-[200px] w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 col-span-2 justify-self-center"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactUs;
