import React from 'react';
import BookIcon from './icons/BookIcon';

const MentorshipSection: React.FC = () => {
  return (
    <section id="mentorship" className="py-24 bg-gray-900/50 scroll-mt-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Mentorship Programs
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Accelerate your research journey with expert guidance tailored to your goals, whether you need continuous support or a one-time strategy session.
          </p>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Card 1: Weekly Mentorship */}
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Weekly Research Mentorship</h3>
              <p className="text-gray-400 mb-6">
                Continuous guidance for your research project. Our weekly sessions provide a structured, collaborative environment to refine ideas, overcome obstacles, and build a strong publication record.
              </p>
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
              <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-blue-400 text-lg mb-2">Who It's For</h4>
                  <p className="text-sm">Graduate students, PhDs, and professionals seeking continuous mentorship.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 text-lg mb-2">Key Outcome</h4>
                  <p className="text-sm">A clear research roadmap, consistent feedback, and a portfolio of publications.</p>
                </div>
              </div>
            </div>
            <button onClick={() => window.location.href = 'mailto:hello@elvonlabs.com?subject=Weekly Research Mentorship Inquiry'} className="mt-auto w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              Start Your Journey
            </button>
          </div>

          {/* Card 2: One-time Session */}
          <div className="bg-slate-800/50 border border-slate-700 p-8 rounded-lg flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
            <div>
              <div className="flex justify-between items-center mb-4">
                 <h3 className="text-2xl font-bold text-white">Publication Guidance Session</h3>
                 <span className="bg-blue-500/20 text-blue-300 font-bold py-1 px-3 rounded-md text-md">$50/hr</span>
              </div>
              <p className="text-gray-400 mb-6">
                A one-time, hands-on session to accelerate your journey. Get practical strategies for selecting impactful research topics, structuring papers, and navigating peer-review.
              </p>
               <div className="grid sm:grid-cols-2 gap-6 mb-8 text-left">
                <div>
                  <h4 className="font-semibold text-blue-400 text-lg mb-2">Who it’s for</h4>
                  <p className="text-sm">Students & professionals struggling with paper rejections or topic selection.</p>
                </div>
                <div>
                  <h4 className="font-semibold text-blue-400 text-lg mb-2">Outcome</h4>
                  <p className="text-sm">A clear publication strategy, structured feedback, and guidance on building your portfolio.</p>
                </div>
              </div>
            </div>
            <button onClick={() => window.location.href = 'mailto:hello@elvonlabs.com?subject=Booking a Guidance Session'} className="mt-auto w-full bg-white hover:bg-gray-200 text-gray-900 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;