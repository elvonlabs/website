
import React from 'react';

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface TeamMember {
  id: number;
  name: string;
  title: string;
  imageUrl: string;
  bio: string;
}