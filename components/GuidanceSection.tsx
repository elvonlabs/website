
import React from 'react';
import BookIcon from './icons/BookIcon.tsx';

const GuidanceSection: React.FC = () => {
  return (
    <section id="guidance" className="py-24 bg-gray-900/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="text-gray-300">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Research & Publication Guidance
            </h2>
            <div className="flex items-center gap-4 mb-6">
              <span className="bg-blue-500/20 text-blue-300 font-bold py-2 px-4 rounded-md text-lg">$50</span>
              <span className="text-lg font-medium">60 mins meeting</span>
            </div>
            <p className="mb-4">
              Are you struggling to choose the right research topic or unsure how to turn your ideas into a publishable paper? Have you faced rejections from conferences and journals, wondering how to make your work stand out?
            </p>
            <p className="mb-6">
              Then this session is for you. Having authored 10+ IEEE papers and completed a PhD in Software Analytics, I share practical strategies for selecting impactful research problems, structuring papers for clarity, and navigating the peer-review process. You’ll also learn how to communicate complex AI/ML ideas in ways that resonate with academic and industry audiences.
            </p>
            <p className="mb-8">
              This is a hands-on, feedback-driven session designed to accelerate your journey into publishing and strengthen your academic profile.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-blue-400 text-lg mb-2">Who it’s for:</h3>
                <p>Graduate students, PhD candidates, and industry professionals pursuing publications.</p>
              </div>
              <div>
                <h3 className="font-semibold text-blue-400 text-lg mb-2">Outcome:</h3>
                <p>A clear publication strategy, structured feedback on your drafts, and step-by-step guidance toward building a strong research portfolio.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual & CTA */}
          <div className="bg-slate-900 p-8 rounded-lg border border-slate-800 flex flex-col items-center text-center">
            <BookIcon className="w-20 h-20 text-blue-400 mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">Accelerate Your Research Journey</h3>
            <p className="text-gray-400 mb-8 max-w-sm">
              Get expert guidance tailored to your specific research goals and unlock your potential as a published author.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 w-full">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuidanceSection;