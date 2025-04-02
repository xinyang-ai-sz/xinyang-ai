// Hero.jsx
import React from 'react';

const Hero = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto relative">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-md lg:w-full lg:pb-24 xl:pb-28 lg:bg-gradient-to-r lg:from-white lg:via-white lg:to-transparent">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-16 lg:pr-8 xl:mt-24">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block">Next Generation</span>
                <span className="block text-blue-600">Emotional AI</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Pioneering the future of human-computer interaction through embodied intelligence and emotional AI technology.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                    Explore Our Solutions
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-2/5">
        <img
          className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full rounded-l-lg shadow-xl"
          src={`${import.meta.env.PROD ? '/xinyang-ai' : ''}/assets/images/hero.jpg`}
          alt="Office workspace"
        />
      </div>
    </div>
  );
};

export default Hero;