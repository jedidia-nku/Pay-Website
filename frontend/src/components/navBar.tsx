import React from 'react';
import {Link} from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <nav className="w-full fixed shadow-lg z-50 flex justify-between items-center bg-gray-900 px-10 py-4">
      {/* Logo Section */}
      <Link to="/" className="text-3xl font-bold text-green-400">
        <span className="cursor-pointer text-yellow-500">Pulse</span>Pay
      </Link>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <Link to="/" className="hover:text-yellow-500 cursor-pointer">Home</Link>
        <Link to="/Services" className="hover:text-yellow-500 cursor-pointer">Services</Link>
        <Link to="/price" className="hover:text-yellow-500 cursor-pointer">Pricing</Link>
        <Link to="/about" className="hover:text-yellow-500 cursor-pointer">About Us</Link>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="border border-green-400 text-green-400 px-6 py-2 rounded-full hover:bg-green-500 hover:text-white hover:text-black transition">
          Login
        </button>
        <button className="bg-yellow-500 text-black px-6 py-2 rounded-full hover:bg-yellow-600 transition">
          SignUp
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
