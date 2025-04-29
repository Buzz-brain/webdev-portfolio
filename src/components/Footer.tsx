import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 dark:bg-gray-950 text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <a href="#home" className="text-3xl font-bold mb-4 inline-block">
            OBUKWE<span className="text-teal-400">.</span>
          </a>
          
          <p className="text-gray-300 max-w-md mx-auto mb-8">
            Web developer and graphic designer focused on creating beautiful and functional digital experiences.
          </p>
          
          <div className="h-px w-24 bg-teal-500/50 mx-auto mb-8"></div>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="#home" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              Home
            </a>
            <a 
              href="#about" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              About
            </a>
            <a 
              href="#skills" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              Skills
            </a>
            <a 
              href="#portfolio" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              Portfolio
            </a>
            <a 
              href="#contact" 
              className="text-gray-300 hover:text-teal-400 transition-colors"
            >
              Contact
            </a>
          </div>
          
          <p className="flex items-center justify-center text-gray-400 text-sm">
            <span>© {currentYear} OBUKWE EBUBECHI. Made with</span>
            <Heart size={16} className="mx-1 text-teal-500" />
            <span>All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;