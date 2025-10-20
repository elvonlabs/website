
import React from 'react';

const MechanicalIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 16v-2m8-8h2M4 12H2m16.938-6.938l1.414-1.414M4.646 19.354l1.414-1.414m13.292 0l-1.414-1.414M6.06 6.06l-1.414-1.414M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

export default MechanicalIcon;