// Esummit.js
import React, { useState, useEffect } from 'react';
import { Footer, Navbar, Hero } from '../components';
import StickyComponents from '../components/StickyComponents';

const Esummit = () => {
  const [imageSource, setImageSource] = useState('images/fffbg3.png'); // Initial image source
  const [imageSource1, setImageSource1] = useState('images/esum1.jpg');
  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setImageSource(screenWidth > 768 ? 'images/fffbg3.png' : 'images/fffbg4.png');
      setImageSource1(screenWidth > 768 ? 'images/esum1.jpg' : 'images/fffbg5.png');
    };

    handleResize();

    // Add resize event listener
    window.addEventListener('resize', handleResize);

    // Remove event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="relative">
      <Navbar />
      <div className='flex flex-col items-center justify-center'>
      <img
          src={imageSource1}
          alt='Zoomed Out Image'
          className="object-cover object-center w-screen  h-auto md:scale-90 md:mt-0 mt-[4rem] mb-[2rem] "
        />
        <img
          src={imageSource}
          alt='Zoomed Out Image'
          className="object-cover object-center max-w-full h-full transform scale-[100%]"
        />
        <StickyComponents />
      </div>
      <Footer />
    </div>
  );
};

export default Esummit;
