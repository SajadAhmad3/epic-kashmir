import navigationData from "./Nav.json";
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate('/contactus');
  };

  return (
    <nav className="container flex items-center justify-between px-10 py-2">
      <a href="/">
        <div className="lg:text-4xl md:text-4xl text-3xl font-bold">
          <span className="text-red ">Epic</span>Kashmir
        </div>
      </a>
      <ul className="lg:flex space-x-8 hidden">
        {navigationData.map((item, index) => (
          <li className="my-2" key={index}>
            <a href={item.path} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <button className="bg-red-600 hover:bg-red-500 transition duration-300 text-white px-4 py-2 rounded-lg text-sm" onClick={handleRedirect}>
          Contact Us
        </button>
      </div>
    </nav>
  );
};
export default Header;
