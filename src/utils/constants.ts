// Constants used throughout the portfolio website

import { NavItem, Skill, SocialLink, Project } from '../types';
import { Code, PenTool, Palette, Globe, LayoutGrid, MessagesSquare } from 'lucide-react';

export const SITE_TITLE = 'EKWE SUNDAY EMMANUEL | Web Developer & Graphic Designer';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export const SKILLS: Skill[] = [
  {
    name: 'Web Development',
    icon: 'Code',
    description: 'Creating responsive, user-friendly websites with modern frameworks and clean code.'
  },
  {
    name: 'Graphic Design',
    icon: 'PenTool',
    description: 'Designing eye-catching visuals, logos, and branding materials that communicate effectively.'
  },
  {
    name: 'UI/UX Design',
    icon: 'Palette',
    description: 'Crafting intuitive user interfaces with a focus on user experience and accessibility.'
  },
  {
    name: 'Responsive Design',
    icon: 'LayoutGrid',
    description: 'Building websites that look and function perfectly across all devices and screen sizes.'
  }
];

export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: 'Facebook',
    url: 'https://www.facebook.com/ekwesundayemmanuel',
    icon: 'Facebook'
  },
  {
    platform: 'Instagram',
    url: 'https://www.instagram.com/ekwesundayemmanuel',
    icon: 'Instagram'
  },
  {
    platform: 'Twitter',
    url: 'https://twitter.com/ekwesundayemmanuel',
    icon: 'Twitter'
  },
  {
    platform: 'WhatsApp',
    url: 'https://wa.me/2347017340265',
    icon: 'MessageCircle'
  }
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'A fully responsive e-commerce platform with shopping cart and payment integration.',
    image: 'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 2,
    title: 'Corporate Branding',
    description: 'Complete brand identity package including logo, business cards, and marketing materials.',
    image: 'https://images.pexels.com/photos/6802042/pexels-photo-6802042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'design',
    tags: ['Branding', 'Logo Design', 'Print'],
    link: '#'
  },
  {
    id: 3,
    title: 'Portfolio Website',
    description: 'Custom portfolio website design with dynamic content management.',
    image: 'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'web',
    tags: ['React', 'Tailwind CSS', 'Responsive'],
    link: '#'
  },
  {
    id: 4,
    title: 'Mobile App UI',
    description: 'User interface design for a health and fitness tracking mobile application.',
    image: 'https://images.pexels.com/photos/5077047/pexels-photo-5077047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'design',
    tags: ['UI/UX', 'Mobile Design', 'Figma'],
    link: '#'
  }
];

export const CONTACT_INFO = {
  email: 'emmalekwe0@gmail.com',
  phone: '2347017340265',
  address: 'Plot 67 Ten Friends Estate Nkwelle Ezunaka'
};