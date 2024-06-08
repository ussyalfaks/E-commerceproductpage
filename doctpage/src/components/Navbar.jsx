import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-5 bg-white text-gray">
      <div className="flex items-center">
        <div className="text-xl font-bold mr-4">SNEAKERS</div>
        <div className="mr-4">
          <button className="mr-2">Collection</button>
          <button className="mr-2">Men</button>
          <button className="mr-2">Women</button>
          <button className="mr-2">About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="flex items-center">
        <img src="basket-icon.png" alt="Basket" className="w-8 h-8 mr-2" /> {/* Assuming basket icon is named basket-icon.png */}
        <div>Cart (0)</div>
      </div>
    </nav>
  );
};

export default Navbar;

