
import React from 'react';

const Hero = () => {
  const handleNavClick = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('href')?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-slate-900 z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-transparent to-purple-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse animation-delay-4000"></div>
      </div>
      <div className="relative z-20 px-6">
        <h2 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-4">
          Pioneering the Future of intelligence
        </h2>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Advancing the future of intelligence through foundational research in AI, quantum computing, and next-generation systems — led by career researchers, and open to industry professionals ready to turn real-world expertise into research.
        </p>
        <a
          href="#research"
          onClick={handleNavClick}
          className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-all duration-300 transform hover:scale-110 inline-block"
        >
          Explore Our Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
