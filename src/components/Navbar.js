import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import wowLogo3 from "../images/wowlogo3.png";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-customGreen text-white py-4 px-2 shadow-lg fixed w-screen md:w-screen top-0 left-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img src={wowLogo3} alt="Heels Dance" className="w-8 h-8" />
          <a
            href="#hero"
            className="text-base md:text-xl font-bold tracking-wide"
            onClick={() => setIsMenuOpen(false)}
          >
            W.O.W Productions Presents
          </a>
        </div>

        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          ref={menuRef}
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex md:flex-row md:space-x-6 md:items-center absolute md:static bg-customGreen w-auto md:w-auto top-16 left-0 p-4 md:p-0 space-y-4 md:space-y-0`}
        >
          <li>
            <a
              href="#home"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="https://www.eventbrite.co.uk/e/wow-productions-the-ultimate-heels-dance-class-party-games-experience-tickets-1112892374049?aff=oddtdtcreator"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-white md:px-4 rounded-sm text-customGreen hover:bg-customGreen hover:text-white transition duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Tickets!
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
