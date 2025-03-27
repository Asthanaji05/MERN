import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-green-600 p-4 text-white flex justify-between items-center">
      <h1 className="text-xl">Product Store</h1>
      <ul className="flex space-x-4">
        <li>
          <a href="/" className="hover:underline">
            Home
          </a>
        </li>
        <li>
          <a href="/about" className="hover:underline">
            About
          </a>
        </li>
        <li>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
