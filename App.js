
import React from 'react';
import Header from './components/Header.js';
import Hero from './components/Hero.js';
import ResearchSection from './components/ResearchSection.js';
import TeamSection from './components/TeamSection.js';
import PublicationsSection from './components/PublicationsSection.js';
import Footer from './components/Footer.js';

const App = () => {
  return (
    <div className="bg-slate-900 min-h-screen">
      <Header />
      <main>
        <Hero />
        <ResearchSection />
        <TeamSection />
        <PublicationsSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
