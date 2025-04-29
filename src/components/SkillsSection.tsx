import React, { useEffect, useRef } from 'react';
import SectionHeading from './common/SectionHeading';
import { SKILLS } from '../utils/constants';
import { Code, PenTool, Palette, LayoutGrid } from 'lucide-react';

const SkillsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.skill-card');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('animate-fade-in');
              }, index * 200);
            });
          }
        });
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

  // Map skill names to Lucide icons
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'Code':
        return <Code className="w-12 h-12 text-teal-500" />;
      case 'PenTool':
        return <PenTool className="w-12 h-12 text-teal-500" />;
      case 'Palette':
        return <Palette className="w-12 h-12 text-teal-500" />;
      case 'LayoutGrid':
        return <LayoutGrid className="w-12 h-12 text-teal-500" />;
      default:
        return <Code className="w-12 h-12 text-teal-500" />;
    }
  };

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 bg-gray-50 dark:bg-gray-800"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="My Skills" 
          subtitle="Here are the main services I offer and skills I possess"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILLS.map((skill, index) => (
            <div 
              key={index}
              className="skill-card opacity-0 bg-white dark:bg-gray-900 rounded-lg p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700"
            >
              <div className="mb-6">
                {getIconComponent(skill.icon)}
              </div>
              <h3 className="text-xl font-bold mb-3 text-blue-900 dark:text-white">{skill.name}</h3>
              <p className="text-gray-600 dark:text-gray-400">{skill.description}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-center mb-8 text-blue-900 dark:text-white">Technical Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">HTML & CSS</span>
                  <span className="text-gray-600 dark:text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">JavaScript</span>
                  <span className="text-gray-600 dark:text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">React.js</span>
                  <span className="text-gray-600 dark:text-gray-400">80%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Graphic Design</span>
                  <span className="text-gray-600 dark:text-gray-400">90%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '90%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">UI/UX Design</span>
                  <span className="text-gray-600 dark:text-gray-400">85%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="text-gray-700 dark:text-gray-300 font-medium">Data Analytics</span>
                  <span className="text-gray-600 dark:text-gray-400">95%</span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: '95%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;