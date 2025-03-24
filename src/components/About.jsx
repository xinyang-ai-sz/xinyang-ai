// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">About Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Our Story
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-lg object-cover"
              src="/assets/images/about.jpg"
              alt="Our team"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-10 lg:w-1/2">
            <p className="text-lg text-gray-500">
              Founded in Shenzhen, XinYang AI is at the forefront of emotional AI and embodied intelligence research.
              We are dedicated to developing next-generation human-computer interaction technologies that understand
              and respond to human emotions naturally. Our team of AI experts and researchers pushes the boundaries
              of what's possible in multimodal AI systems.
            </p>
            <p className="mt-4 text-lg text-gray-500">
              We're committed to creating AI systems that understand human emotions and can interact
              naturally with the physical world. Our vision is to make human-AI interaction more intuitive,
              emotionally intelligent, and seamlessly integrated into daily life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;