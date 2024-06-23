// src/components/Cart.js
import React from 'react';
import PropTypes from 'prop-types';



const Cart = ({ cartItems, removeFromCart }) => {
  const handleImageError = (e) => {
    e.target.src = '../assets/product1.jpg'; // Path to your default image
  };

  
  return (
    <div className="absolute top-16 right-5 bg-white rounded-xl  shadow-xl">
      <div className='border-b-2 p-2'>Cart</div>
      {cartItems.length === 0 ? (
        <div className='p-5'>Your cart is empty</div>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx} className="flex justify-between p-5 items-center">
            <img src={item.image} 
            alt="Cart Item" 
            className="w-10 h-10 rounded-md m-4"
            onError={handleImageError}
             />
            <div>
              <div>{item.name}</div>
              <div>${item.price}</div>
            </div>
            <button onClick={() => removeFromCart(idx)} 
            className="text-red-500 mr-4">
            <img src={item.icondelete} 
            alt="Cart Item" 
            className="w-4 h-4 m-4"
             />
            </button>
          </div>
        ))
      )}
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Cart;
