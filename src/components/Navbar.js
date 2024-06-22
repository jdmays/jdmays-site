import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import routes from "../data/routes";

const Navbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const breakpoint = 768;

  return (
    <div>
      {windowWidth >= breakpoint ? (
        <header className="fixed top-0 left-0 w-full bg-white bg-opacity-75 backdrop-blur-md shadow-md z-50">
          <nav className="mx-auto px-6 py-3 bg-gradient-to-r from-purple-900 to-indigo-900">
            <div className="flex items-center justify-between">
              <div className="text-xl font-bold px-4">
                {routes
                  .filter((l) => l.index)
                  .map((l) => (
                    <Link
                      className="text-white-800 hover:text-orange-400"
                      key={l.index}
                      to={l.path}
                    >
                      {l.label}
                    </Link>
                  ))}
              </div>
              <div className="space-x-4">
                {routes
                  .filter((l) => !l.index)
                  .map((l) => (
                    <NavLink
                      key={l.index}
                      to={l.path}
                      className="text-white-800 hover:text-orange-400 navlinks"
                    >
                      {l.label}
                    </NavLink>
                  ))}
              </div>
            </div>
          </nav>
        </header>
      ) : (
        <div className="hamburger-menu px-4 py-4">
          <button
            onClick={toggleMenu}
            className="flex rounded-md text-white text-2xl font-bold px-6 py-3 bg-gradient-to-r from-purple-900 to-indigo-900"
          >
            &#9776;
          </button>
          {isMenuOpen && (
            <ul className="dropdown-menu rounded-md bg-gradient-to-r px-2 py-2 from-purple-900 to-indigo-900">
              {routes
                .filter((l) => l.index)
                .map((l) => (
                  <li className={"px-2 py-2 text-white"}>
                    <Link
                      className="font-bold text-white hover:text-orange-400"
                      key={l.index}
                      to={l.path}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              {routes
                .filter((l) => !l.index)
                .map((l) => (
                  <li className={"px-2 py-2 text-white hover:text-blue-900 hover:bg-purple-100"}>
                    <NavLink
                      key={l.index}
                      to={l.path}
                      className="hover:text-orange-400 navlinks"
                    >
                      {l.label}
                    </NavLink>
                  </li>
                ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
