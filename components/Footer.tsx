import React from 'react';
import CircuitCubeIcon from './icons/CircuitCubeIcon';

const Footer: React.FC = () => {
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

export default Footer;