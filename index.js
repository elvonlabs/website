import React from 'react';
import ReactDOM from 'react-dom/client';

// ============================================================================
// ICONS
// All icon components are defined here to be used by other components.
// ============================================================================

const AiIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.5a7.5 7.5 0 11-7.5 7.5" />
  </svg>
);

const CircuitCubeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2.5l-7 4v8l7 4 7-4v-8l-7-4z" />
      <path d="M5 6.5l7 4 7-4" />
      <path d="M12 21.5v-11" />
      <path d="M12 2.5V1" />
      <path d="M5 6.5L2 4.5" />
      <path d="M19 6.5L22 4.5" />
      <path d="M5 14.5L2 16.5" />
      <path d="M19 14.5L22 16.5" />
      <path d="M12 21.5V23" />
    </g>
  </svg>
);

const HealthcareIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
  </svg>
);

const MechanicalIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m16.938-6.938l1.414-1.414M4.646 19.354l1.414-1.414m13.292 0l-1.414-1.414M6.06 6.06l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

const TelecomIcon = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M1.393 9.393a15 15 0 0121.214 0" />
  </svg>
);


// ============================================================================
// COMPONENTS
// All main components for the application.
// ============================================================================

const Header = () => {
  const navItems = ['Research', 'Advisory', 'Publications', 'Contact'];

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
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" onClick={handleNavClick} className="flex items-center gap-2">
          <CircuitCubeIcon className="w-6 h-6 text-blue-400" />
          <h1 className="text-2xl font-bold text-white tracking-wider">
            ELVON LABS
          </h1>
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={handleNavClick}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

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
          Advancing the future of intelligence through foundational research in AI, quantum computing, and next-generation systems.
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

const MainItem = ({ title }) => (
  <div className="bg-white/95 text-slate-800 rounded-full py-4 px-8 w-72 md:w-80 text-center shadow-lg backdrop-blur-sm border border-white/20">
    <h3 className="text-lg font-bold tracking-wider uppercase">{title}</h3>
  </div>
);

const SatelliteItem = ({ icon: Icon, title, description }) => (
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


const ResearchSection = () => {
  return (
    <section id="research" className="relative py-24 bg-slate-900 overflow-hidden scroll-mt-20">
      <WavyBackground />
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="flex flex-col md:flex-row items-center justify-center gap-y-12 md:gap-y-0 md:gap-x-8">
          
          <div className="flex flex-col gap-24 items-center md:items-end">
            <SatelliteItem icon={AiIcon} title="Artificial Intelligence" description="Advanced research in neural networks and symbolic reasoning." />
            <SatelliteItem icon={TelecomIcon} title="Telecommunications" description="Next-generation wireless networks and protocols." />
          </div>

          <div className="flex flex-col gap-8 order-first md:order-none">
            <MainItem title="Quantum Computing" />
            <MainItem title="Foundational CS" />
          </div>

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

const TeamMemberCard = ({ name, title, imageUrl, bio }) => {
  return (
    <div className="bg-gray-900 rounded-lg overflow-hidden text-center group">
      <div className="relative">
        <img src={imageUrl} alt={name} className="w-full h-auto object-cover aspect-square grayscale group-hover:grayscale-0 transition-all duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <p className="text-blue-400 font-medium mb-2">{title}</p>
        <p className="text-gray-400 text-sm">{bio}</p>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    id: 1,
    name: 'Engineering Lead',
    title: 'PhD, AI & Systems',
    imageUrl: 'https://api.dicebear.com/8.x/bottts-neutral/svg?seed=engineeringLead',
    bio: 'Senior IEEE member specializing in AI, Software Engineering, Deep Learning, Beyond 5G, and Security.'
  },
  {
    id: 2,
    name: 'Principal Architect',
    title: 'PhD, Telecommunications',
    imageUrl: 'https://api.dicebear.com/8.x/bottts-neutral/svg?seed=architect',
    bio: 'Expert in next-generation network protocols, distributed systems, and scalable network architectures.'
  },
];

const TeamSection = () => {
  return (
    <section id="advisory" className="py-20 bg-gray-900/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Scientific Advisory Board
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our board consists of world-class researchers and engineers who provide strategic guidance and drive our mission forward with unparalleled expertise and visionary leadership.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
          {teamMembers.map((member) => (
            <TeamMemberCard
              key={member.id}
              name={member.name}
              title={member.title}
              imageUrl={member.imageUrl}
              bio={member.bio}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const publications = [
  {
    title: 'DeepSlice: A deep learning approach towards an efficient and reliable network slicing in 5G networks',
    authors: 'A Thantharate, R Paropkari, V Walunj, C Beard',
    venue: '2019 IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile…',
    citations: 235,
    year: 2019,
  },
  {
    title: 'Secure5G: A deep learning framework towards a secure network slicing in 5G and beyond',
    authors: 'A Thantharate, R Paropkari, V Walunj, C Beard, P Kankariya',
    venue: '2020 10th annual computing and communication workshop and conference (CCWC…',
    citations: 141,
    year: 2020,
  },
  {
    title: 'A fine-grained data set and analysis of tangling in bug fixing commits',
    authors: 'S Herbold, A Trautsch, B Ledel, A Aghamohammadi, TA Ghaleb, ...',
    venue: 'Empirical Software Engineering 27 (6), 125',
    citations: 61,
    year: 2022,
  },
  {
    title: 'Automated end-to-end management of the modeling lifecycle in deep learning',
    authors: 'G Gharibi, V Walunj, R Nekadi, R Marri, Y Lee',
    venue: 'Empirical Software Engineering 26 (2), 17',
    citations: 44,
    year: 2021,
  },
];

const stats = [
  { label: 'Citations', value: '634' },
  { label: 'h-index', value: '10' },
  { label: 'i10-index', value: '10' },
];

const PublicationsSection = () => {
  return (
    <section id="publications" className="py-24 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-gray-300">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Embark on Your Research Journey
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              We partner with students and industry professionals through weekly mentorship sessions to navigate the path from initial concept to impactful publication.
            </p>
            <p className="mb-8">
              Are you looking for continuous guidance on your research project? Our weekly sessions provide a structured, collaborative environment to refine your ideas, overcome obstacles, and build a strong publication record. We work closely with graduate students, PhD candidates, and professionals to develop impactful research, write compelling papers, and successfully navigate the academic peer-review process.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-blue-400 text-lg mb-2">Who It's For</h3>
                <p className="text-sm">Graduate students, PhD candidates, and industry professionals seeking continuous research mentorship.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 text-lg mb-2">Key Outcome</h3>
                <p className="text-sm">A clear research roadmap, consistent expert feedback, and a portfolio of high-quality publications.</p>
              </div>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg text-center transform hover:scale-105 transition-transform duration-300">
            <h3 className="text-2xl font-bold text-white mb-6">Weekly Research Mentorship</h3>
            <ul className="text-gray-400 mb-8 space-y-3 text-left">
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Personalized Publication Strategy</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Structured Weekly Sessions</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                <span>Hands-on Paper Reviews</span>
              </li>
            </ul>
            <p className="text-gray-400 mb-8">
               Accelerate your career with consistent, expert mentorship tailored to your research goals.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full">
              Start Your Journey
            </button>
          </div>
        </div>
        
        <div className="mt-24">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white">Proven Research Excellence</h3>
          </div>
          <div className="flex justify-center gap-8 mb-12">
            {stats.map(stat => (
              <div key={stat.label} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center w-40">
                <p className="text-3xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </div>
            ))}
          </div>
          
          <h4 className="text-2xl font-bold text-white mb-8 text-center">Featured Publications</h4>
          <div className="space-y-6 max-w-4xl mx-auto">
            {publications.map((pub, index) => (
              <div key={index} className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors duration-300">
                <div className="flex justify-between items-start">
                  <div>
                    <h5 className="font-bold text-lg text-white">{pub.title}</h5>
                    <p className="text-sm text-gray-400 mt-1">{pub.authors}</p>
                    <p className="text-sm text-gray-500 mt-2">{pub.venue}</p>
                  </div>
                  <div className="text-center ml-4 flex-shrink-0">
                    <span className="text-lg font-bold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-md">{pub.citations}</span>
                    <p className="text-xs text-gray-500 mt-1">Citations</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer id="contact" className="bg-slate-900 border-t border-slate-800 py-12 scroll-mt-20">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <div className="flex items-center justify-center gap-3 mb-6">
          <CircuitCubeIcon className="w-8 h-8 text-gray-400" />
          <h2 className="text-3xl font-bold text-gray-400 tracking-wider">ELVON LABS</h2>
        </div>
        <p>&copy; {new Date().getFullYear()} Elvon Labs. All rights reserved.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="hover:text-blue-400 transition-colors">Twitter</a>
          <a href="#" className="hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-400 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
};


// ============================================================================
// APP & RENDER
// Main App component and the final render call.
// ============================================================================

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


const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);