// src/pages/Jobs.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Jobs = () => {
  const positions = [
    {
      title: '自然语言处理工程师',
      requirements: [
        '计算机科学、计算语言学或相关领域的硕士或博士学位',
        '精通Python编程，熟练使用NLP库（NLTK、spaCy、Transformers）',
        '具有深度学习框架（PyTorch或TensorFlow）使用经验',
        '熟悉现代NLP技术，包括transformers、BERT、GPT等',
        '具有文本预处理、特征提取和模型部署经验',
      ],
      responsibilities: [
        '开发和改进各类NLP模型',
        '研究和实现最新的NLP技术',
        '优化模型性能和可扩展性',
        '与跨职能团队协作',
        '编写清晰、可维护且文档完善的代码',
      ],
    },
    {
      title: '强化学习工程师',
      requirements: [
        '计算机科学、数学或相关领域的博士学位',
        '深厚的强化学习和深度学习背景',
        '具有强化学习框架（OpenAI Gym、RLlib或类似）使用经验',
        '精通Python和深度学习框架',
        '在强化学习或相关领域发表过研究论文优先',
      ],
      responsibilities: [
        '设计和实现复杂问题的强化学习算法',
        '开发训练和测试用的仿真环境',
        '优化智能体性能和训练效率',
        '开展强化学习新方法研究',
        '撰写技术文档和研究论文',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">加入我们</h1>
          <p className="text-xl text-gray-600">
            与我们一起开创人工智能的未来
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
                  任职要求
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {position.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  工作职责
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  {position.responsibilities.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
                  立即申请
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