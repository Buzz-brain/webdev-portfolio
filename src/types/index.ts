// Define types for the portfolio website

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  icon: string;
  description: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: 'web' | 'design' | 'other';
  tags: string[];
  link?: string;
}