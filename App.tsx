
import React from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import ResearchSection from './components/ResearchSection.tsx';
import TeamSection from './components/TeamSection.tsx';
import PublicationsSection from './components/PublicationsSection.tsx';
import Footer from './components/Footer.tsx';

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