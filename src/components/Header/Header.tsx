import navigationData from "./Nav.json";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between px-10 py-2">
      <div className="lg:text-4xl md:text-4xl text-3xl font-bold">
        <span className="text-red ">Epic</span>Kashmir
      </div>
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
        <button className="bg-red text-white px-4 py-2 rounded-md text-sm">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
export default Header;
