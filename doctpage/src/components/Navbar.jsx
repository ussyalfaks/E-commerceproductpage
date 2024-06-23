import React from 'react';
import Basketicon from '../assets/avatar.png' 
import Carticon from '../assets/icon-cart.svg' 

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between border-b-2 p-8 bg-white text-gray">
      <div className="flex items-center">
        <div className="text-xl font-bold mr-11 ">SNEAKERS</div>
        <div className="mr-4">
          <button className="mr-2">Collection</button>
          <button className="mr-2">Men</button>
          <button className="mr-2">Women</button>
          <button className="mr-2">About</button>
          <button>Contact</button>
        </div>
      </div>
      <div className="flex items-center">
        <img src={Carticon} alt="Basket" className="w-5 h-5 mr-2" /> 
        <img src={Basketicon} alt="Basket" className="w-8 h-8 mr-4" /> 
        {/* <div>Cart (0)</div> */}
      </div>
    </nav>
  );
};

export default Navbar;

