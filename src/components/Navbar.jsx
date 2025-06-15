import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Name */}
        <h1 className="text-2xl font-bold text-purple-700">Planora</h1>

        {/* Menu Items */}
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-purple-600 cursor-pointer">Home</li>
          <li className="hover:text-purple-600 cursor-pointer">Search</li>
          <li className="hover:text-purple-600 cursor-pointer">Create Event</li>
          <li className="hover:text-purple-600 cursor-pointer">Profile</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
