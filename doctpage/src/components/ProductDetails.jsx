
import React from 'react';
import PropTypes from 'prop-types';


const ProductDetails = ({ addToCart }) => {
  const product = {
    name: "Awesome Product",
    description: "This is an awesome product.",
    price: 99.99,
    image: "https://via.placeholder.com/600"
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p>{product.description}</p>
      <div className="text-xl font-bold">${product.price}</div>
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 bg-blue-500 text-white p-2 rounded hover:bg-blue-700"
      >
        Add to Cart
      </button>
    </div>
  );
};

ProductDetails.propTypes = {
  addToCart: PropTypes.func.isRequired
}

export default ProductDetails;