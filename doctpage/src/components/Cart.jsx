// src/components/Cart.js
import React from 'react';
import PropTypes from 'prop-types';

const Cart = ({ cartItems, removeFromCart }) => {
  return (
    <div className="absolute top-16 right-5 bg-white p-5 shadow-lg">
      {cartItems.length === 0 ? (
        <div>Your cart is empty</div>
      ) : (
        cartItems.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center">
            <img src={item.image} alt="Cart Item" className="w-16 h-16" />
            <div>
              <div>{item.name}</div>
              <div>${item.price}</div>
            </div>
            <button onClick={() => removeFromCart(idx)} className="text-red-500">Remove</button>
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
