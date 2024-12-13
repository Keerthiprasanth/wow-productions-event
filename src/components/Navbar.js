function Navbar() {
  return (
    <nav className="bg-customGreen text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">W.O.W Productions</h1>
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="hover:underline hover:text-customGreen-100 transition duration-300"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:underline hover:text-customGreen-100 transition duration-300"
            >
              Details
            </a>
          </li>
          <li>
            <a
              href="#footer"
              className="hover:underline hover:text-customGreen-100 transition duration-300"
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
