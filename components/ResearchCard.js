
import React from 'react';

interface ResearchCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const ResearchCard: React.FC<ResearchCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-gray-900/50 p-8 rounded-lg border border-gray-800 group hover:bg-gray-800/60 hover:border-blue-500 transition-all duration-300 transform hover:-translate-y-2">
      <div className="mb-6">
        <Icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
        {description}
      </p>
    </div>
  );
};

export default ResearchCard;