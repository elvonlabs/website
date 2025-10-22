import React from 'react';
import CircuitCubeIcon from './icons/CircuitCubeIcon';

const Header: React.FC = () => {
  const navItems = [
    { label: 'Research', href: '#research' },
    { label: 'Advisory', href: '#advisory' },
    { label: 'Mentorship', href: '#mentorship' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
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
              key={item.label}
              href={item.href}
              onClick={handleNavClick}
              className="text-gray-300 hover:text-blue-400 transition-colors duration-300 font-medium"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
