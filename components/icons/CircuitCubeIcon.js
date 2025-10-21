
import React from 'react';

const CircuitCubeIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Cube/Hexagon Shape */}
      <path d="M12 2.5l-7 4v8l7 4 7-4v-8l-7-4z" />
      <path d="M5 6.5l7 4 7-4" />
      <path d="M12 21.5v-11" />
      
      {/* Radiating Circuit Lines (Simplified) */}
      <path d="M12 2.5V1" />
      <path d="M5 6.5L2 4.5" />
      <path d="M19 6.5L22 4.5" />
      <path d="M5 14.5L2 16.5" />
      <path d="M19 14.5L22 16.5" />
      <path d="M12 21.5V23" />
    </g>
  </svg>
);

export default CircuitCubeIcon;
