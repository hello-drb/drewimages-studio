import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

const Section: React.FC<SectionProps> = ({ children, className = '', id, fullWidth = false }) => {
  return (
    <section id={id} className={`w-full ${className}`}>
      <div className={`${fullWidth ? 'w-full' : 'max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-12'}`}>
        {children}
      </div>
    </section>
  );
};

export default Section;