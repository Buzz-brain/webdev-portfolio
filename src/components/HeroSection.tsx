import React, { useEffect, useRef } from 'react';
import { ArrowDownCircle } from 'lucide-react';
import Button from './common/Button';

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.opacity-0').forEach((element) => {
            element.classList.add('animate-fade-in');
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
      id="home" 
      className="min-h-screen flex items-center pt-20 relative overflow-hidden bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-blue-950"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="opacity-0 transform translate-y-10 transition-all duration-1000 delay-300 animate-none">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 dark:text-white mb-6 leading-tight">
              Hey, I'm <span className="text-teal-600">Ekwe Sunday Emmanuel</span>
            </h1>
            <div className="h-1.5 w-24 bg-teal-500 rounded mb-6"></div>
            <h2 className="text-2xl md:text-3xl mb-6 text-gray-700 dark:text-gray-300">
              Web Developer & Graphic Designer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-lg">
              Creating beautiful, functional designs and websites that help businesses grow and succeed in the digital world.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" size="lg">View My Work</Button>
              <Button variant="outline" size="lg">Contact Me</Button>
            </div>
          </div>
          
          <div className="relative opacity-0 transform translate-y-10 transition-all duration-1000 delay-500 animate-none">
            <div className="relative z-10 bg-white dark:bg-gray-800 rounded-lg shadow-xl overflow-hidden p-1 border-8 border-white dark:border-gray-800 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://res.cloudinary.com/df2q6gyuq/image/upload/v1745987912/ekwemainea_ymlzr2.jpg" 
                alt="Professional Portrait" 
                className="w-full h-auto rounded"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-40 h-40 bg-blue-900/10 rounded-full blur-xl z-0"></div>
            <div className="absolute -top-6 -left-6 w-40 h-40 bg-teal-500/10 rounded-full blur-xl z-0"></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-blue-900 dark:text-white hover:text-teal-600 dark:hover:text-teal-400 transition-colors"
        aria-label="Scroll to About section"
      >
        <ArrowDownCircle className="animate-bounce w-10 h-10" />
      </a>
    </section>
  );
};

export default HeroSection;