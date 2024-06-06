import React from 'react';
import PropTypes from 'prop-types';

const Lightbox = ({ image, closeLightbox }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <img src={image} alt="Lightbox" className="max-w-full max-h-full" />
      <button onClick={closeLightbox} className="absolute top-5 right-5 text-white text-2xl">X</button>
    </div>
  );
};

Lightbox.propTypes = {
  image: PropTypes.string.isRequired, // Ensure 'image' is a required string prop
  closeLightbox: PropTypes.func.isRequired,
};

export default Lightbox;
