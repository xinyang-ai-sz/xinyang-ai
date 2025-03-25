// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Footer from './components/Footer';
import MessageForm from './components/MessageForm';
import Admin from './pages/Admin';
import Jobs from './pages/Jobs';

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/xinyang-ai' : '/';

  return (
    <Router basename={basename}>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route
          path="/"
          element={
            <div className="min-h-screen bg-gray-50">
              <Header />
              <main>
                <Hero />
                <Features />
                <About />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 bg-white">
                  <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                      Contact Us
                    </h2>
                    <p className="text-gray-600">
                      Have a question or feedback? We'd love to hear from you.
                    </p>
                  </div>
                  <MessageForm />
                </div>
              </main>
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;