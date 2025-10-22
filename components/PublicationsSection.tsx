import React from 'react';

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

const PublicationsSection: React.FC = () => {
  return (
    <section id="publications" className="py-24 bg-slate-900 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Text Content */}
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

          {/* Right Column: CTA Card */}
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
            <button onClick={() => window.location.href = 'mailto:hello@elvonlabs.com?subject=Weekly Research Mentorship Inquiry'} className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full">
              Start Your Journey
            </button>
          </div>
        </div>
        
        {/* Featured Publications */}
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

export default PublicationsSection;