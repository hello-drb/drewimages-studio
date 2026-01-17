import React from 'react';
import { Link } from 'react-router-dom';
import { WORK_CATEGORIES } from '../constants';

const WorkCategoryGrid: React.FC = () => {
  const categories = Object.values(WORK_CATEGORIES);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-y-12 gap-x-8 md:gap-4 -mx-4 md:mx-0">
      {categories.map((cat, idx) => (
        <Link to={`/work/${cat.id}`} key={cat.id} className="group block relative">
           <div className="relative aspect-[3/4] overflow-hidden bg-ink/5 mb-4 md:mb-6">
              {/* Image */}
              <img 
                  src={cat.gallery[0].src} 
                  alt={cat.title} 
                  className="w-full h-full object-cover grayscale contrast-[1.1] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-burgundy/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-multiply"></div>
              
              {/* Floating Number */}
              <div className="absolute top-4 left-4 text-paper mix-blend-difference font-bold text-xs tracking-widest opacity-50">
                0{idx + 1}
              </div>
           </div>

           <div className="pr-4 px-4 md:px-0">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal block mb-2 opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:transform md:-translate-y-2 group-hover:translate-y-0">
                {cat.subtitle}
              </span>
              <h2 className="font-serif text-3xl md:text-4xl text-ink group-hover:text-burgundy transition-colors mb-2 md:mb-3">
                {cat.title}
              </h2>
              {/* Hidden on mobile to reduce interruption */}
              <p className="hidden md:block text-sm leading-relaxed text-ink/60 line-clamp-3 group-hover:text-ink/80 transition-colors">
                {cat.description.split('.')[0]}.
              </p>
              
              <div className="mt-4 md:mt-6 flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-ink/40 group-hover:text-teal transition-colors">
                <span>View Archive</span>
                <span>&rarr;</span>
              </div>
           </div>
        </Link>
      ))}
    </div>
  );
};

export default WorkCategoryGrid;
