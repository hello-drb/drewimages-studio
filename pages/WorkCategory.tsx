import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Section from '../components/Section';
import { WORK_CATEGORIES, ALBUM_ARTWORKS } from '../constants';
import Button from '../components/Button';

interface WorkCategoryProps {
  categoryId: string;
}

const WorkCategory: React.FC<WorkCategoryProps> = ({ categoryId }) => {
  const category = WORK_CATEGORIES[categoryId];

  if (!category) return <div>Category not found</div>;

  // Custom logic: For founders, skip the first image (which is used as the homepage hero/thumbnail)
  // for the detail gallery view, per specific design request.
  const displayGallery = categoryId === 'founders' ? category.gallery.slice(1) : category.gallery;

  return (
    <div className="min-h-screen bg-paper pb-20">
       {/* Header Section */}
       <div className="bg-ink text-paper relative overflow-hidden">
          <Section className="py-24 md:py-32 relative z-10">
              <div className="mb-6 md:mb-8 flex items-center gap-3">
                 <Link to="/work" className="text-[10px] font-bold uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity hover:text-mustard">&larr; Work</Link>
                 <span className="w-1 h-1 rounded-full bg-paper/30"></span>
                 <span className="text-[10px] font-bold uppercase tracking-widest opacity-50">{category.subtitle}</span>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
                  <div className="lg:col-span-7">
                      <h1 className="font-serif text-4xl md:text-5xl lg:text-8xl mb-6 md:mb-8 leading-[0.9] text-balance">
                          {category.title}
                      </h1>
                      <p className="text-base md:text-xl text-paper/80 font-light leading-relaxed max-w-2xl">
                          {category.description}
                      </p>
                  </div>
                  
                  {/* Engagements List */}
                  <div className="lg:col-span-5 w-full">
                      <div className="bg-paper/5 backdrop-blur-sm border border-paper/10 p-6 md:p-8">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 mb-4 md:mb-6">Core Engagements</span>
                          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                              {category.engagements.map((item, i) => (
                                  <li key={i} className="flex items-center gap-3 font-serif italic text-lg opacity-90">
                                      <span className="w-1.5 h-1.5 rounded-full bg-mustard shrink-0"></span>
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </div>
                  </div>
              </div>
          </Section>
          
          {/* Background Grain/Noise */}
          <div className="absolute inset-0 bg-grain opacity-5 pointer-events-none"></div>
       </div>

       {/* Gallery Grid */}
       <Section className="py-16 md:py-20">
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-12 gap-x-1 md:gap-x-8 -mx-4 md:mx-0 mb-16 md:mb-24">
               {displayGallery.map((item, idx) => (
                   <div key={idx} className="group cursor-default">
                       <div className="aspect-[4/5] overflow-hidden bg-ink/5 relative mb-3 md:mb-4">
                           <img 
                               src={item.src} 
                               alt={item.title || `${category.title} ${idx}`} 
                               className="w-full h-full object-cover grayscale contrast-[1.05] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
                           />
                           <div className="absolute inset-0 bg-burgundy/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-multiply"></div>
                       </div>
                       {/* Caption Block */}
                       <div className="flex flex-col px-4 md:px-1">
                          <span className="font-serif italic text-xl text-ink group-hover:text-burgundy transition-colors">{item.title || "Client Name"}</span>
                          {item.subtitle && (
                            <span className="text-[10px] font-bold uppercase tracking-widest text-ink/40 mt-1">{item.subtitle}</span>
                          )}
                       </div>
                   </div>
               ))}
           </div>
           
           {/* Horizontal Album Artwork Section (Only for Artists) */}
           {categoryId === 'artists' && (
              <div className="mb-20 md:mb-32 pt-12 border-t border-ink/10">
                  <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-ink/40 mb-8 ml-1">
                    Recent release collaborations
                  </h3>
                  
                  {/* Scroll Container */}
                  <div className="w-full overflow-x-auto no-scrollbar cursor-grab active:cursor-grabbing">
                      <div className="flex gap-12 w-max px-1">
                          {ALBUM_ARTWORKS.map((img, i) => (
                              <div key={i} className="w-32 h-32 md:w-40 md:h-40 shrink-0 bg-ink/5 select-none">
                                  <img 
                                    src={img} 
                                    alt={`Album ${i+1}`} 
                                    className="w-full h-full object-cover saturate-[0.85] contrast-[0.95]" 
                                    draggable="false"
                                  />
                              </div>
                          ))}
                      </div>
                  </div>
              </div>
           )}

           {/* Testimonial Block (Conditional) */}
           {category.testimonial && (
             <div className="border-t border-ink/10 pt-16 md:pt-24 mb-16 md:mb-24">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
                    {/* Image */}
                    <div className="md:col-span-5 lg:col-span-4 order-2 md:order-1">
                       <div className={`${category.testimonial.aspectClass || 'aspect-[3/4]'} bg-ink/5 p-2 border border-ink/5 relative`}>
                          {category.testimonial.image && (
                              <img 
                                src={category.testimonial.image} 
                                alt={category.testimonial.author}
                                className="w-full h-full object-cover grayscale contrast-125"
                              />
                          )}
                       </div>
                    </div>
                    
                    {/* Text */}
                    <div className="md:col-span-7 lg:col-span-7 lg:col-start-6 order-1 md:order-2">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-teal mb-6 block">
                            Perspective
                        </span>
                        <blockquote 
                            className={`font-serif text-ink mb-8 ${
                                category.testimonial.quote.length > 300 
                                ? 'text-lg md:text-2xl leading-relaxed whitespace-pre-line' 
                                : 'text-3xl md:text-4xl lg:text-5xl leading-tight text-balance'
                            }`}
                        >
                          “{category.testimonial.quote}”
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <span className="h-px w-12 bg-ink/20"></span>
                            <div className="text-xs font-bold uppercase tracking-widest text-ink/50">
                                {category.testimonial.author}
                                {category.testimonial.role && <span className="opacity-50 font-medium normal-case ml-1"> — {category.testimonial.role}</span>}
                            </div>
                        </div>
                    </div>
                </div>
             </div>
           )}

           {/* Bottom Nav */}
           <div className="pt-8 md:pt-12 border-t border-ink/10 flex flex-col md:flex-row justify-between items-center gap-8">
                <Link to="/work" className="text-xs font-bold uppercase tracking-widest text-ink/40 hover:text-ink transition-colors">Back to Work</Link>
                <Button to="/contact" variant="primary" className="w-full md:w-auto">Start a Project</Button>
           </div>
       </Section>
    </div>
  );
};

export default WorkCategory;