// About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">关于我们</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            公司简介
          </p>
        </div>
        <div className="mt-10 flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2">
            <img
              className="rounded-lg shadow-lg object-cover"
              src={`${import.meta.env.PROD ? '/xinyang-ai' : ''}/assets/images/about.jpg`}
              alt="我们的团队"
            />
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-10 lg:w-1/2">
            <p className="text-lg text-gray-500">
            智拓欣扬总部位于深圳，是情感人工智能和具身智能研究的先驱。我们致力于开发下一代人机交互技术，
            使其能够自然地理解和回应人类情感。我们的人工智能专家和研究人员团队不断推动多模态人工智能系统的边界，
            探索创新的可能性。
            </p>
            <p className="mt-4 text-lg text-gray-500">
            我们致力于创造能够理解人类情感并能够与物理世界自然交互的人工智能系统。我们的愿景是使人机交互变得更加
            直观、富有情感智能，并无缝地融入日常生活。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;