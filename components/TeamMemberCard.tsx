
import React from 'react';

interface TeamMemberCardProps {
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, title, imageUrl, bio }) => {
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

export default TeamMemberCard;
