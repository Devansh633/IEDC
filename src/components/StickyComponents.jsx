// StickyComponents.js
import React, { useEffect, useRef } from 'react';
import Lottie from 'lottie-react';
import Animation from '../assets/data/Animation - 1700917369774.json';

const StickyComponents = () => {


  return (
    <div className="fixed bottom-2 right-2 flex items-end p-2">
      <a href='https://docs.google.com/forms/d/e/1FAIpQLSfEu8vZnJLtjv5Ti_f74ojXbfCaSVT5uVb8EfyyKXx0UYEjmw/viewform?usp=sf_link'>
        <button className="w-[6rem] md:w-[12rem] md:h-[3rem] text-black bg-[#FDC324] font-bold rounded-full text-lg md:text-2xl px-3 py-1 mb-[1rem] md:mb-[2rem] ">
          Register
        </button>
      </a>
      <Lottie animationData={Animation} className='w-[6rem] md:w-[12rem] h-auto' />
    </div>
  );
};

export default StickyComponents;
