// Hero.js
import React from 'react';

const Hero = () => {
  return (
    <div className="hero min-h-screen relative mt-[5rem] " style={{ backgroundImage: 'url(images/esum1.jpg)' }}>
      <div className="hero-overlay bg-opacity-0"></div>
      <div className="flex-wrap flex absolute bottom-[5vh] right-[1vw] w-[20rem] md:w-[32rem] items-center ">
        {/* Your hero content goes here */}
      </div>
    </div>
  );
};

export default Hero;
