import React from 'react';
import PropTypes from 'prop-types';

const Thumbnails = ({ images, setImage }) => {
  return (
    <div className="flex space-x-9">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Thumbnail ${idx}`}
          className="w-[4.5rem] h-[4.5rem] rounded-md cursor-pointer  mt-9"
          onClick={() => setImage(img)}
        />
      ))}
    </div>
  );
};

Thumbnails.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired, // Specifies that 'images' prop is a required array of strings
  setImage: PropTypes.func.isRequired, // Specifies that 'setImage' prop is a required function
};

export default Thumbnails;
