// src/pages/Jobs.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Jobs = () => {
  const positions = [
    {
      title: 'NLP Engineer',
      requirements: [
        "Master's or Ph.D. in Computer Science, Computational Linguistics, or related field",
        'Strong programming skills in Python and experience with NLP libraries (NLTK, spaCy, Transformers)',
        'Experience with deep learning frameworks (PyTorch or TensorFlow)',
        'Knowledge of modern NLP techniques including transformers, BERT, GPT',
        'Experience with text preprocessing, feature extraction, and model deployment',
      ],
      responsibilities: [
        'Develop and improve NLP models for various applications',
        'Research and implement state-of-the-art NLP techniques',
        'Optimize model performance and scalability',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable, and well-documented code',
      ],
    },
    {
      title: 'Reinforcement Learning Engineer',
      requirements: [
        'Ph.D. in Computer Science, Mathematics, or related field',
        'Strong background in reinforcement learning and deep learning',
        'Experience with RL frameworks (OpenAI Gym, RLlib, or similar)',
        'Proficiency in Python and deep learning frameworks',
        'Published research in RL or related fields is a plus',
      ],
      responsibilities: [
        'Design and implement RL algorithms for complex problems',
        'Develop simulation environments for training and testing',
        'Optimize agent performance and training efficiency',
        'Conduct research on novel RL approaches',
        'Write technical documentation and research papers',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
          <p className="text-xl text-gray-600">
            Help us shape the future of AI technology
          </p>
        </div>

        <div className="space-y-12">
          {positions.map((position, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg p-8 border border-gray-200"
            >
              <h2 className="text-2xl font-bold text-blue-600 mb-6">
                {position.title}
              </h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Requirements
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Responsibilities
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {position.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Jobs;