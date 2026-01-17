import React from 'react';
import Section from '../components/Section';
import WorkCategoryGrid from '../components/WorkCategoryGrid';

const Work: React.FC = () => {
  return (
    <div className="min-h-screen bg-paper">
      <Section className="py-24 md:py-32">
        <div className="mb-12 md:mb-20 border-b border-ink/20 pb-6 md:pb-8">
            <h1 className="font-serif text-5xl md:text-8xl text-ink mb-4 md:mb-6">Work</h1>
            <p className="text-base md:text-lg text-ink/60 max-w-md font-medium">
              Archive organized by context. <br/>
              Select your area of focus.
            </p>
        </div>

        <WorkCategoryGrid />
      </Section>
    </div>
  );
};

export default Work;