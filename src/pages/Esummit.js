// Esummit.js
import React, { useState, useEffect } from 'react';
import { Footer, Navbar, Hero } from '../components';
import StickyComponents from '../components/StickyComponents';
import Loader from '../assets/data/Animation - 1701624849592.json';
import Lottie from 'lottie-react';

const Esummit = () => {
  const [imageSource, setImageSource] = useState('images/fffbg3.webp'); // Initial image source
  const [imageSource1, setImageSource1] = useState('images/esum1.webp');
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setImageSource(screenWidth > 768 ? 'images/fffbg3.webp' : 'images/fffbg4.webp');
      setImageSource1(screenWidth > 768 ? 'images/esum1.webp' : 'images/fffbg5.webp');
    };

    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    // Show loader for 3 seconds
    const loaderTimeout = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    // Clear timeout on component unmount or when loader is hidden
    return () => {
      clearTimeout(loaderTimeout);
    };
  }, []);

  return (
    <div className="relative">
      {showLoader && (
        <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
          <Lottie animationData={Loader} className="w-[15rem]" />
        </div>
      )}
      {!showLoader && (
        <>
          <Navbar />
          <div className="flex flex-col items-center justify-center">
            <img
              src={imageSource1}
              alt="Zoomed Out Image"
              className="object-cover object-center w-screen h-auto md:scale-90 md:mt-0 mt-[4rem] mb-[2rem]"
            />
            <img
              src={imageSource}
              alt="Zoomed Out Image"
              className="object-cover object-center max-w-full h-full transform scale-[100%]"
            />
            <StickyComponents />
          </div>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Esummit;
