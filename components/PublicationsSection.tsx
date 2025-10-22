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
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Proven Research Excellence</h2>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            Our work is recognized in top-tier conferences and journals, reflecting our commitment to advancing the frontiers of science and engineering.
          </p>
        </div>
        <div className="flex justify-center gap-4 sm:gap-8 mb-16">
          {stats.map(stat => (
            <div key={stat.label} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 text-center w-32 sm:w-40">
              <p className="text-2xl sm:text-3xl font-bold text-blue-400">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </div>
        
        <h3 className="text-2xl font-bold text-white mb-8 text-center">Featured Publications</h3>
        <div className="space-y-6 max-w-4xl mx-auto">
          {publications.map((pub, index) => (
            <div key={index} className="bg-slate-900/70 p-6 rounded-lg border border-slate-800 hover:border-blue-500/50 transition-colors duration-300">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-bold text-lg text-white">{pub.title}</h4>
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
    </section>
  );
};

export default PublicationsSection;