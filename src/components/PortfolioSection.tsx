import React, { useState, useEffect, useRef } from 'react';
import SectionHeading from './common/SectionHeading';
import { PROJECTS } from '../utils/constants';
import { ExternalLink } from 'lucide-react';

const PortfolioSection = () => {
  const [filter, setFilter] = useState<'all' | 'web' | 'design' | 'other'>('all');
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = filter === 'all' 
    ? PROJECTS 
    : PROJECTS.filter(project => project.category === filter);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const projectCards = sectionRef.current?.querySelectorAll('.project-card');
          projectCards?.forEach((card, index) => {
            setTimeout(() => {
              card.classList.add('animate-fade-in');
            }, index * 200);
          });
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="portfolio" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Portfolio" 
          subtitle="Check out some of my recent work and projects"
        />
        
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'all' 
                  ? 'bg-white dark:bg-gray-700 text-blue-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilter('web')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'web' 
                  ? 'bg-white dark:bg-gray-700 text-blue-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white'
              }`}
            >
              Web Development
            </button>
            <button
              onClick={() => setFilter('design')}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                filter === 'design' 
                  ? 'bg-white dark:bg-gray-700 text-blue-900 dark:text-white shadow-sm' 
                  : 'text-gray-600 dark:text-gray-400 hover:text-blue-900 dark:hover:text-white'
              }`}
            >
              Graphic Design
            </button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="project-card opacity-0 bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-6">
                  <a 
                    href={project.link || '#'} 
                    className="text-white flex items-center gap-2 hover:text-teal-300 transition-colors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-blue-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span 
                      key={index}
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;