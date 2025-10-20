import React from 'react';
import { TeamMember } from '../types';
import TeamMemberCard from './TeamMemberCard';

const teamMembers: TeamMember[] = [
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

const TeamSection: React.FC = () => {
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

export default TeamSection;