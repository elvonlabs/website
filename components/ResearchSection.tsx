
import React from 'react';
import AiIcon from './icons/AiIcon.tsx';
import QuantumIcon from './icons/QuantumIcon.tsx';
import TelecomIcon from './icons/TelecomIcon.tsx';
import MechanicalIcon from './icons/MechanicalIcon.tsx';
import HealthcareIcon from './icons/HealthcareIcon.tsx';
import ComputerScienceIcon from './icons/ComputerScienceIcon.tsx';

const WavyBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full z-0 opacity-20"
    preserveAspectRatio="none"
    viewBox="0 0 800 600"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M-100 300 C 100 100, 300 500, 500 300 S 700 100, 900 300"
      stroke="url(#purpleGradient)"
      strokeWidth="2"
    />
    <path
      d="M-100 350 C 150 550, 350 150, 550 350 S 750 550, 900 350"
      stroke="url(#blueGradient)"
      strokeWidth="2"
    />
    <defs>
      <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#c084fc" />
        <stop offset="100%" stopColor="#60a5fa" stopOpacity="0.1" />
      </linearGradient>
      <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.1" />
        <stop offset="100%" stopColor="#3b82f6" />
      </linearGradient>
    </defs>
  </svg>
);

const MainItem: React.FC<{ title: string }> = ({ title }) => (
  <div className="bg-white/95 text-slate-800 rounded-full py-4 px-8 w-72 md:w-80 text-center shadow-lg backdrop-blur-sm border border-white/20">
    <h3 className="text-lg font-bold tracking-wider uppercase">{title}</h3>
  </div>
);

const SatelliteItem: React.FC<{ icon: React.ComponentType<{ className?: string }>, title: string, description: string }> = ({ icon: Icon, title, description }) => (
  <div className="flex items-center gap-4 w-72 md:w-auto">
    <div className="bg-white/90 p-4 rounded-full shadow-md border border-white/20">
      <Icon className="w-8 h-8 text-slate-800" />
    </div>
    <div className="text-left">
      <h4 className="font-semibold text-white text-lg">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>
  </div>
);


const ResearchSection: React.FC = () => {
  return (
    <section id="research" className="relative py-24 bg-slate-900 overflow-hidden scroll-mt-20">
      <WavyBackground />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 md:gap-x-8">
          
          {/* Left Column */}
          <div className="flex flex-col gap-24 items-center md:items-end">
            <SatelliteItem icon={AiIcon} title="Artificial Intelligence" description="Advanced research in neural networks and symbolic reasoning." />
            <SatelliteItem icon={TelecomIcon} title="Telecommunications" description="Next-generation wireless networks and protocols." />
          </div>

          {/* Center Column */}
          <div className="flex flex-col gap-8 order-first md:order-none">
            <MainItem title="Quantum Computing" />
            <MainItem title="Foundational CS" />
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-24 items-center md:items-start">
            <SatelliteItem icon={HealthcareIcon} title="Computational Healthcare" description="Applying high-performance computing to biological systems." />
            <SatelliteItem icon={MechanicalIcon} title="Robotics & Mechanics" description="Creating autonomous systems for dynamic environments." />
          </div>

        </div>
        <p className="mt-20 text-lg text-gray-300 max-w-3xl mx-auto">
           By integrating research across AI, Quantum Computing, Robotics, and more, we are building the foundational technologies for tomorrow.
        </p>
      </div>
    </section>
  );
};

export default ResearchSection;