// src/App.jsx
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import Thumbnails from "./components/Thumbnails";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Lightbox from "./components/Lightbox";


const App = () => {
  const [selectedImage, setSelectedImage] = useState('https://via.placeholder.com/600');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const images = [
    'https://via.placeholder.com/600',
    'https://via.placeholder.com/600/0000FF',
    'https://via.placeholder.com/600/008000',
    'https://via.placeholder.com/600/FFFF00'
  ];

  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);
  const addToCart = (product) => setCartItems([...cartItems, product]);
  const removeFromCart = (index) => setCartItems(cartItems.filter((_, idx) => idx !== index));

  return (
    <div className="relative">
      <Navbar />
      <div className="flex p-5 space-x-5">
        <div>
          <ProductImage image={selectedImage} openLightbox={openLightbox} />
          <Thumbnails images={images} setImage={setSelectedImage} />
        </div>
        <ProductDetails addToCart={addToCart} />
      </div>
      {lightboxOpen && <Lightbox image={selectedImage} closeLightbox={closeLightbox} />}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  );
};

export default App;
