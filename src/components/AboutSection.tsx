import React, { useEffect, useRef } from 'react';
import SectionHeading from './common/SectionHeading';
import { CONTACT_INFO } from '../utils/constants';
import Button from './common/Button';
import { GraduationCap as Graduation, Trophy, Calendar, MapPin } from 'lucide-react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }
    
    return () => {
      if (sectionRef.current) {
        const animatedElements = sectionRef.current.querySelectorAll('.animate-on-scroll');
        animatedElements.forEach((el) => observer.unobserve(el));
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about" 
      className="py-20 bg-white dark:bg-gray-900"
    >
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know more about me and my background"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000">
            <h3 className="text-2xl font-bold mb-4 text-blue-900 dark:text-white">
              Who am I?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I’m a versatile digital creative skilled in Web Development, Data Analysis, and UI/UX Design.
I build responsive, user-friendly websites with modern tools like HTML, CSS, JS, and React.
I turn raw data into clear insights using Python, Excel, SQL, and data visualization tools.
I design clean, intuitive interfaces and eye-catching visuals with Figma and Adobe Creative Suite.

            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              My work blends functionality, clarity, and creativity to solve real-world problems.
From backend logic to frontend beauty, I bring ideas to life with purpose and precision.
Passionate about tech, design, and data, I create seamless digital experiences that engage and perform.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-start">
                <Graduation className="w-5 h-5 mt-1 mr-2 text-teal-600" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400">Information Technology, FUTO</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar className="w-5 h-5 mt-1 mr-2 text-teal-600" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400">Freelance Developer</p>
                </div>
              </div>
              <div className="flex items-start">
                <Trophy className="w-5 h-5 mt-1 mr-2 text-teal-600" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Specialization</h4>
                  <p className="text-gray-600 dark:text-gray-400">Web Dev & Design</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-2 text-teal-600" />
                <div>
                  <h4 className="font-medium text-gray-800 dark:text-gray-200">Location</h4>
                  <p className="text-gray-600 dark:text-gray-400">Imo State, Nigeria</p>
                </div>
              </div>
            </div>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <Button variant="primary">Download CV</Button>
            </a>
          </div>
          
          <div className="animate-on-scroll opacity-0 transform translate-y-10 transition-all duration-1000 delay-300">
            <div className="relative">
              <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 border border-gray-100 dark:border-gray-700 relative z-10">
                <h3 className="text-2xl font-bold mb-6 text-blue-900 dark:text-white">
                  Personal Information
                </h3>
                
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Full Name</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">Ekwe Sunday Emmanuel</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Email Address</span>
                    <a href={`mailto:${CONTACT_INFO.email}`} className="text-blue-900 dark:text-teal-400 font-medium hover:underline">
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Phone Number</span>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-blue-900 dark:text-teal-400 font-medium hover:underline">
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Address</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{CONTACT_INFO.address}</span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-gray-500 dark:text-gray-400 text-sm">Languages</span>
                    <span className="text-gray-800 dark:text-gray-200 font-medium">English, Igbo</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 w-full h-full bg-blue-900/5 dark:bg-blue-500/5 rounded-lg -z-10"></div>
              <div className="absolute top-8 right-8 w-full h-full bg-teal-500/5 rounded-lg -z-20"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;