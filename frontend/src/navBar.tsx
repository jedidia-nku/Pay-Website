import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between items-center bg-gray-900 px-10 py-4">
      {/* Logo Section */}
      <div className="text-3xl font-bold text-green-400">
        <span className="text-yellow-500">Sawa</span>Pay
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-gray-300 font-medium">
        <li className="text-yellow-500 cursor-pointer">Home</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Pricing</li>
        <li className="cursor-pointer">About Us</li>
      </ul>

      {/* Buttons */}
      <div className="flex space-x-4">
        <button className="border border-green-400 text-green-400 px-6 py-2 rounded-full hover:bg-green-400 hover:text-black transition">
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
