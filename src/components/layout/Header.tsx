import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import classNames from "classnames";
import { menuLinks } from "@constants/menuLinks";
import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { useDarkMode } from "@hooks/useDarkMode";

const Header = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) setScrolled(true);
      else setScrolled(false);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full py-20 sm:py-14 flex items-center justify-center">
      <div className={classNames("max-w-6xl w-full px-5 flex flex-col sm:flex-row text-secondary-100 dark:text-gray-100/90 items-center justify-between gap-5 sm:gap-0 py-5 fixed top-0 z-10 mt-5", { "backdrop-blur-xl rounded-xl": scrolled })}>
        <Link to={"/"} className="font-extrabold text-2xl text-primary-200 flex items-center gap-2">
          <img src="/images/icon.png" alt="icon" className="w-10 h-auto" />
          TintTrail
        </Link>

        <nav className="flex items-center gap-5">
          <ul className="flex items-center gap-5">
            {menuLinks.map((link) => {
              const isActive = pathname === link.route;
              return (
                <li key={link.label} className={classNames("rounded-lg hover:text-primary-200 dark:hover:text-primary-100 transition", { "text-primary-200 dark:text-primary-100 font-medium": isActive })}>
                  <NavLink to={link.route} className="flex gap-4 items-center">
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
          <a href="https://github.com/rody-huancas/TintTrail-app" target="_blank" className="text-xl" aria-label="Ver repositorio en GitHub">
            <FaGithub />
          </a>
          <button className="text-xl" onClick={toggleDarkMode} aria-label="Cambiar tema claro/oscuro">
            {isDarkMode ? <RiMoonFill /> : <RiSunFill />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
