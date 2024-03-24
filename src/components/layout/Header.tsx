import { menuLinks } from "@constants/menuLinks";
import classNames from "classnames";
import { RiSunFill } from "react-icons/ri";
import { Link, NavLink, useLocation } from "react-router-dom";

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full py-16 flex items-center justify-center">
      <div className="max-w-6xl w-full flex items-center justify-between py-5 fixed top-0 z-10 mt-5">
        <Link to={"/"} className="font-extrabold text-2xl text-[#80aaff]">
          TintTrail
        </Link>

        <nav className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {menuLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <li key={link.label} className={classNames("rounded-lg hover:text-[#80aaff] transition", { "text-[#80aaff] font-medium": isActive })}>
                  <NavLink to={link.route} className="flex gap-4 items-center">
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <button className="text-xl">
            <RiSunFill />
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
