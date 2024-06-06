import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-gray-800 text-white">
      <div className="text-xl font-bold">E-Commerce</div>
      <div>Cart (0)</div>
    </nav>
  );
};

export default Navbar;
