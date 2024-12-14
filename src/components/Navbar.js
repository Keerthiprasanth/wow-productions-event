import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-customGreen text-white p-4 shadow-lg fixed w-full top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">W.O.W Productions Presents</h1>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:flex-row md:space-x-6 md:items-center absolute md:static bg-customGreen w-full md:w-auto top-16 left-0 p-4 md:p-0 space-y-4 md:space-y-0 transition-all duration-300 ease-in-out`}
        >
          <li>
            <a
              href="#home"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
