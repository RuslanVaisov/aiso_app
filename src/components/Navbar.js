import React, { useState, useRef, useEffect } from "react";
import logo from "../imgs/logo.png";
import { NavLink } from "react-router-dom";
import { gsap } from "gsap";

const Navbar = () => {
  let [isOpen, setIsOpen] = useState(false);

  let navEffect = useRef(null);

  useEffect(() => {
    gsap.from(navEffect, 0.8, {
      delay: 0.3,
      ease: "power3.out",
      opacity: 0,
    });
  }, []);

  // outsideclick

  // outsideclick

  const handleClick = (e) => {
    setIsOpen((isOpen = !isOpen));
  };

  return (
    <div
      style={{ height: "72px" }}
      className="showcase w-full h-8 bg-gray-900 relative z-10"
    >
      <section
        ref={(el) => (navEffect = el)}
        className="navbar fixed w-full bg-gray-900 font-ubuntu"
      >
        <header className="max-w-screen-xl mx-auto sm:flex justify-between items-center py-2 px-4 sm:py-3 sm:px-6">
          <div className="flex items-center justify-between ">
            {/* logo section */}
            <div>
              <NavLink to="/">
                <img
                  className="h-10 md:h-12 mr-24 opacity-100"
                  src={logo}
                  alt="Aiso logo"
                />
              </NavLink>
            </div>

            {/* menu & portfolio buttons */}
            <div className="flex sm:hidden">
              <ul className="flex items-center">
                <li className="mr-6 text-xs border-gray-900 rounded-full py-1 px-3 bg-red-700 text-white hover:bg-red-600">
                  <NavLink to="/all-works" className="tracking-wider">
                    Портфолио
                  </NavLink>
                </li>
                <li>
                  <button
                    onClick={() => handleClick()}
                    type="button"
                    className="block text-gray-500 hover:text-white focus:text-white focus:outline-none"
                  >
                    <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
                      {isOpen ? (
                        <path
                          fillRule="evenodd"
                          d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                        />
                      ) : (
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        />
                      )}
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* navlist items */}
          {isOpen ? (
            <React.Fragment>
              <div
                style={{ marginTop: "-72px", paddingTop: "72px" }}
                className="h-half flex flex-col justify-center"
              >
                <div className="visible opacity-100 items-center">
                  <ul className="flex flex-col text-center">
                    <li className="py-2">
                      <NavLink
                        className="py-1 text-gray-500 text-sm hover:text-white tracking-wider uppercase"
                        to="/all-works"
                      >
                        Работы
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink
                        className="py-1 text-gray-500 text-sm hover:text-white tracking-wider uppercase"
                        to="/about"
                      >
                        О нас
                      </NavLink>
                    </li>
                    <li className="py-2">
                      <NavLink
                        className="py-1 text-gray-500 text-sm hover:text-white tracking-wider uppercase"
                        to="/contact"
                      >
                        Контакты
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="text-center mt-10">
                  <NavLink
                    to="/order-design"
                    className="focus:outline-none text-center border-transparent focus:outline-none rounded-full bg-red-700 py-2 px-3 text-sm text-white hover:bg-red-600 tracking-wider"
                  >
                    Заказать дизайн
                  </NavLink>
                </div>
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <div className="pt-6 pb-3 px-3 hidden sm:flex sm:items-center sm:py-0">
                <ul className="flex flex-col sm:flex-row pb-6 sm:p-0">
                  <li className="py-2">
                    <NavLink
                      className="pr-5 py-1 text-gray-500 text-sm text-black hover:text-white tracking-wider uppercase"
                      to="/all-works"
                    >
                      Работы
                    </NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink
                      className="px-5 py-1 text-gray-500 text-sm text-black hover:text-white tracking-wider uppercase"
                      to="/about"
                    >
                      О нас
                    </NavLink>
                  </li>
                  <li className="py-2">
                    <NavLink
                      className="pl-5 py-1 text-gray-500 text-sm text-black hover:text-white tracking-wider uppercase"
                      to="/contact"
                    >
                      Контакты
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div>
                <NavLink
                  to="/order-design"
                  className="hidden sm:flex focus:outline-none text-center border-transparent text-xs rounded-full bg-red-700 py-1 px-3 text-white hover:bg-red-600 tracking-wider"
                >
                  Заказать дизайн
                </NavLink>
              </div>
            </React.Fragment>
          )}
        </header>
      </section>
    </div>
  );
};

export default Navbar;
