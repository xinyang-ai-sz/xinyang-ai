// Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <span className="text-2xl font-bold text-white">智拓欣扬</span>
            <p className="mt-2 text-gray-300">引领情感人工智能的未来</p>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">技术</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">情感人工智能</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">具身智能</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">多模态交互</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">研究</h3>
            <ul className="mt-4 space-y-4">
              <li><a href="#" className="text-base text-gray-300 hover:text-white">研究成果</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">专利</a></li>
              <li><a href="#" className="text-base text-gray-300 hover:text-white">合作</a></li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">联系我们</h3>
            <ul className="mt-4 space-y-4">
              <li className="text-base text-gray-300">contact@zhituo-xinyang.com</li>
              <li className="text-base text-gray-300">深圳市南山区</li>
              <li className="text-base text-gray-300">高新科技园</li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8">
          <p className="text-base text-gray-400 text-center">
            © 2024 深圳智拓欣扬。保留所有权利。
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;