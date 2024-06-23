import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductImage from "./components/ProductImage";
import Thumbnails from "./components/Thumbnails";
import Cart from "./components/Cart";
import ProductDetails from "./components/ProductDetails";
import Lightbox from "./components/Lightbox";
import SneakersImg1 from './assets/product1.jpg'
import SneakersImg2 from './assets/product-4.jpg'
import SneakersImg3 from './assets/image-product-2.jpg'
import SneakersImg4 from './assets/image-product-3.jpg'




const App = () => {
  const [selectedImage, setSelectedImage] = useState(SneakersImg1);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const images = [
    SneakersImg1,
    SneakersImg3,
    SneakersImg4,
    SneakersImg2
    ];
    
  const openLightbox = () => setLightboxOpen(true);
  const closeLightbox = () => setLightboxOpen(false);
  const addToCart = (product) => setCartItems([...cartItems, product]);
  const removeFromCart = (index) => setCartItems(cartItems.filter((_, idx) => idx !== index));

  return (
    <div className="relative">
      <Navbar />
      <div className="flex p-5 mt-11 space-x-5">
        <div>
          <ProductImage image={selectedImage} openLightbox={openLightbox} />
          <Thumbnails images={images} setImage={setSelectedImage}/>
        </div>
        <ProductDetails addToCart={addToCart} />
      </div>
      {lightboxOpen && <Lightbox image={selectedImage} closeLightbox={closeLightbox} />}
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
    
  );
};

export default App;
