import React from 'react';
import PropTypes from 'prop-types';

const ProductImage = ({ image, openLightbox }) => {
  return (
    <div onClick={openLightbox}>
      <img src={image} alt="Product" className="cursor-pointer w-full" />
    </div>
  );
};

ProductImage.propTypes = {
  image: PropTypes.string.isRequired, // Specifies that 'image' prop is a required string
  openLightbox: PropTypes.func.isRequired, // Specifies that 'openLightbox' prop is a required function
};

export default ProductImage;
