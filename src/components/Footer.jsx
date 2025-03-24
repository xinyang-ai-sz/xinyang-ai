// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-white">XinYang AI</span>
            <p className="mt-2 text-gray-300">Leading the Future of Emotional AI</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Technologies</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Emotional AI</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Embodied Intelligence</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Multimodal Interaction</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Research</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Publications</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Patents</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">Collaborations</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Contact</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">contact@xinyang-ai.com</li>
              <li className="text-base text-gray-300">High-tech Industrial Park</li>
              <li className="text-base text-gray-300">Nanshan District, Shenzhen</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 Shenzhen XinYang AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;