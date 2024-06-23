
import React from 'react';
import PropTypes from 'prop-types';
import SneakersImg1 from '../assets/product1.jpg'
import RemoveIcon from '../assets/icon-delete.svg'




const ProductDetails = ({ addToCart }) => {
  const product = {
    company:"Sneakers company",
    name: "Fall limited edition sneakers ",
    image: SneakersImg1 ,
    description: "This low profile sneakers are your perfect casual wear champion. Featuring a durable rubber outer sole, they'll everything weather can offer.",
    icondelete : RemoveIcon,
    price: 125.00
  };

  return (
    <div className="p-5">
      <h1 className=" uppercase text-gray-400 font-bold ">{product.company}</h1>
      <h1 className="text-2xl font-bold">{product.name}</h1>
      <p className='w-56'>{product.description}</p>
      <div className="text-2xl flex font-bold">
            ${product.price}.00
             <h6 className='bg-black text-white rounded-md text-xl '>50%</h6>
      </div>
      <button 
        onClick={() => addToCart(product)}
        className="mt-3 bg-orange-500 text-white p-2 rounded hover:bg-orange-400"
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