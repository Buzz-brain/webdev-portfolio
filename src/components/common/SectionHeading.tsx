import React from 'react';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionHeading = ({ 
  title, 
  subtitle, 
  centered = true,
  className = ''
}: SectionHeadingProps) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : 'text-left'} ${className}`}>
      <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 relative inline-block">
        {title}
        <span className="absolute bottom-0 left-0 w-1/2 h-1 bg-teal-500 rounded"></span>
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl mx-auto mt-4">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;