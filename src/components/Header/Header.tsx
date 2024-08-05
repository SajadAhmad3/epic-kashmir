import navigationData from "./Nav.json";

const Header = () => {
  return (
    <nav className="container flex items-center justify-between p-4">
      <div className="text-2xl font-bold">
        <span className="text-[#00A651]">Epic</span>Kashmir
      </div>
      <ul className="lg:flex space-x-4 hidden">
        {navigationData.map((item, index) => (
          <li className="my-2" key={index}>
            <a href={item.path} className="nav-link">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <div>
        <button className="bg-[#00A651] text-white px-4 py-2 rounded-xl">
          Contact Us
        </button>
      </div>
    </nav>
  );
};
export default Header;
