import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ResearchSection from './components/ResearchSection';
import TeamSection from './components/TeamSection';
import PublicationsSection from './components/PublicationsSection';
import Footer from './components/Footer';

const App: React.FC = () => {
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