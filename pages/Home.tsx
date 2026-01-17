import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import HeroSlider from '../components/HeroSlider';
import WorkCategoryGrid from '../components/WorkCategoryGrid';
import { IMAGES, SERVICES } from '../constants';
import { Link } from 'react-router-dom';

// Helper component for the "Magazine Header" look
const EditorialHeader: React.FC<{ number: string; title: string; colorClass?: string }> = ({ number, title, colorClass = "border-current" }) => (
  <div className={`flex items-center gap-4 mb-10 md:mb-24 pt-6 md:pt-8 border-t ${colorClass} w-full`}>
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">({number})</span>
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] flex-grow opacity-60">{title}</span>
    <span className="hidden md:block w-4 h-4 rounded-full border border-current opacity-30"></span>
  </div>
);

const Home: React.FC = () => {
  return (
    <div className="flex flex-col w-full">
      
      {/* Hero Section */}
      <HeroSlider />

      {/* 01: INTRO / CAPABILITIES */}
      <div className="bg-teal text-ink bg-grain relative z-10">
          <Section className="py-16 md:py-32">
              <EditorialHeader number="01" title="Studio Context" colorClass="border-ink/20" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start">
                  {/* Text Column - Explicitly Relative on Mobile, Sticky on Desktop */}
                  <div className="lg:col-span-5 relative lg:sticky lg:top-24">
                      <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] text-balance">
                          Visuals for <br/> the <span className="italic text-paper">modern era.</span>
                      </h2>
                      <p className="text-base md:text-lg leading-relaxed text-ink/80 mb-8 md:mb-10 font-light max-w-md">
                          DrewImages.studio focuses on visual identity — helping artists present their work with clarity, cohesion, and a strong sense of tone.
                      </p>
                      
                      <div className="flex flex-col gap-4 border-l border-ink/20 pl-6">
                          <div className="flex items-baseline gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest min-w-[70px] md:min-w-[80px] opacity-50">Direction</span>
                            <span className="font-serif italic text-lg">Concept & References</span>
                          </div>
                          <div className="flex items-baseline gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest min-w-[70px] md:min-w-[80px] opacity-50">Capture</span>
                            <span className="font-serif italic text-lg">Editorial Photography</span>
                          </div>
                          <div className="flex items-baseline gap-4">
                            <span className="text-[10px] font-bold uppercase tracking-widest min-w-[70px] md:min-w-[80px] opacity-50">Delivery</span>
                            <span className="font-serif italic text-lg">Campaign Assets</span>
                          </div>
                      </div>
                  </div>
                  
                  {/* Modern Grid Layout - Single Column / Full Bleed on Mobile */}
                  <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 -mx-4 md:mx-0">
                      <div className="space-y-4 pt-0 md:pt-24">
                          <div className="aspect-[3/4] overflow-hidden bg-ink/5">
                              <img src={IMAGES.work4} className="w-full h-full object-cover contrast-110 hover:scale-105 transition-transform duration-700 ease-out" alt="Studio work" />
                          </div>
                          <div className="p-4 md:p-6 bg-mustard text-ink shadow-sm mx-4 md:mx-0">
                              <span className="block font-serif italic text-xl md:text-2xl mb-1">Concept</span>
                              <span className="text-[10px] uppercase tracking-widest font-bold opacity-70">From Moodboard to Final</span>
                          </div>
                      </div>
                      <div className="space-y-4">
                           <div className="bg-burgundy p-4 md:p-6 text-paper shadow-sm mx-4 md:mx-0 mt-4 md:mt-0">
                              <span className="block font-serif italic text-xl md:text-2xl mb-1">Rollout</span>
                              <span className="text-[10px] uppercase tracking-widest font-bold opacity-60 text-mustard">Campaign Assets</span>
                          </div>
                          <div className="aspect-[3/4] overflow-hidden bg-ink/5">
                              <img src={IMAGES.work1} className="w-full h-full object-cover contrast-110 hover:scale-105 transition-transform duration-700 ease-out" alt="Studio work" />
                          </div>
                      </div>
                  </div>
              </div>
          </Section>
      </div>

      {/* 02: PROCESS & SERVICES */}
      <div className="bg-mustard text-ink bg-grain relative z-10">
           <Section className="py-16 md:py-32">
               <EditorialHeader number="02" title="Process & Services" colorClass="border-ink/20" />
               
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-start mb-16 md:mb-24">
                   <div className="lg:col-span-6">
                       <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl leading-[0.95] md:leading-[0.9] mb-8 md:mb-10">
                           How things <br/><span className="italic text-white">come together.</span>
                       </h2>
                       
                       <p className="text-xs md:text-sm font-bold uppercase tracking-widest opacity-60 mb-8 md:mb-12">
                           Focused direction. Thoughtful execution. Usable results.
                       </p>

                       <div className="text-base md:text-lg leading-relaxed opacity-90 max-w-xl space-y-6 md:space-y-8 font-light">
                            <p>
                                DrewImages.studio collaborates with artists, founders, and creative teams to shape visual identity with clarity and intention. 
                            </p>
                            <p>
                                Projects begin with direction and planning, followed by a calm, efficient capture phase and a clean, organized delivery of final images.
                            </p>
                            <div className="pt-6 border-l-2 border-ink/20 pl-6">
                                <p className="font-serif italic text-xl md:text-2xl text-ink">
                                    The aim is simple: <br/>
                                    Images that feel considered — and live well in the real world.
                                </p>
                            </div>
                       </div>
                   </div>
                   
                   {/* Process Steps */}
                   <div className="lg:col-span-6 flex flex-col justify-center">
                        <div className="bg-paper/10 p-6 md:p-12 border border-ink/10 backdrop-blur-sm">
                            <ul className="space-y-0">
                                {[
                                    { title: 'Signal Check', desc: 'Aligning on tone, goals, and visual direction.' },
                                    { title: 'World-Build', desc: 'References, mood, and visual language take shape.' },
                                    { title: 'Capture Phase', desc: 'Focused sessions designed to feel calm and intentional.' },
                                    { title: 'Edit + Selects', desc: 'Refined images, thoughtfully delivered.' },
                                    { title: 'Rollout Kit', desc: 'Assets organized for press, web, and campaigns.' }
                                ].map((step, i) => (
                                    <li key={i} className="group border-b border-ink/10 py-4 md:py-5 first:pt-0 last:border-0 cursor-default">
                                        <div className="flex items-center justify-between">
                                             <div className="flex items-center gap-4 md:gap-6">
                                                <span className="text-xs font-sans font-bold opacity-30 w-6">0{i+1}</span>
                                                <span className="font-serif text-2xl md:text-3xl italic group-hover:text-white transition-colors duration-300">{step.title}</span>
                                             </div>
                                             <span className="text-xl opacity-30 group-hover:opacity-100 transition-all duration-300 group-hover:rotate-45 group-hover:text-white">+</span>
                                        </div>
                                        <div className="overflow-hidden max-h-0 opacity-0 group-hover:max-h-24 group-hover:opacity-100 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] pl-10 md:pl-12">
                                            <p className="text-sm font-medium opacity-70 pt-3 max-w-sm">{step.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 md:mt-10 pt-6 border-t border-ink/10 text-[10px] font-bold uppercase tracking-widest opacity-50 flex flex-wrap gap-4 justify-between">
                                <span>Clear planning.</span>
                                <span>Efficient execution.</span>
                                <span>Usable results.</span>
                            </div>
                        </div>
                   </div>
               </div>

               {/* Ways of Working */}
               <div>
                   <div className="flex items-baseline gap-4 mb-6 md:mb-8">
                        <h3 className="font-serif text-3xl md:text-4xl">Ways of Working</h3>
                   </div>
                   
                   <div className="grid grid-cols-1 md:grid-cols-3 border-t border-ink/20">
                      {SERVICES.map((service, i) => (
                          <Link to="/services" key={i} className={`group block p-6 md:p-12 border-b md:border-b-0 border-ink/20 hover:bg-paper transition-colors duration-500 ${i !== 2 ? 'md:border-r' : ''} border-b`}>
                              <h3 className="font-serif text-2xl md:text-3xl mb-3 md:mb-4 group-hover:text-teal transition-colors relative z-10">{service.title}</h3>
                              <p className="text-sm font-medium opacity-70 mb-6 md:mb-8 leading-relaxed relative z-10 min-h-[40px]">{service.description}</p>
                              <div className="flex justify-end relative z-10">
                                  <span className="opacity-100 md:opacity-0 group-hover:opacity-100 transition-opacity font-serif italic text-sm text-burgundy md:text-inherit">Inquire &rarr;</span>
                              </div>
                          </Link>
                      ))}
                   </div>
                   <div className="mt-6 flex flex-col md:flex-row justify-between items-start md:items-center border-t border-ink/10 pt-6 text-[10px] font-bold uppercase tracking-widest opacity-50 gap-2">
                       <p>Scope and timing shape each project.</p>
                       <p>Details are discussed by inquiry.</p>
                   </div>
               </div>
           </Section>
      </div>

      {/* 03: WORK */}
      <div className="bg-paper text-ink bg-grain relative z-10">
          <Section className="py-16 md:py-32">
              <EditorialHeader number="03" title="Selected Works" colorClass="border-ink/20" />

              <div className="flex flex-col md:flex-row justify-between items-end mb-8 md:mb-12">
                  <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl text-burgundy">Work</h2>
                  <Link to="/work" className="text-[10px] md:text-xs font-bold uppercase tracking-widest border-b border-ink/30 pb-1 hover:text-burgundy hover:border-burgundy transition-colors mt-6 md:mt-0">View Full Archive</Link>
              </div>
              
              <WorkCategoryGrid />
          </Section>
      </div>

      {/* 04: TESTIMONIALS */}
      <div className="bg-burgundy text-paper bg-grain relative z-10">
          <Section className="py-16 md:py-32">
              <EditorialHeader number="04" title="Perspectives" colorClass="border-paper/20" />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-24 gap-y-12 md:gap-y-20">
                  {[
                    {
                      primary: "Drew has an extraordinary ability to make you feel at ease — confident, supported, and beautifully directed.",
                      secondary: "I walked away with the best photos I’ve ever had of myself.",
                      author: "Sophie M.",
                      image: IMAGES.testimonialSophie
                    },
                    {
                      primary: "The way Drew captures light, energy, and presence is unlike any experience I’ve had with another photographer.",
                      secondary: "From the first shoot, I knew I was in the right hands.",
                      author: "Taylor Z.",
                      image: IMAGES.testimonialTaylor
                    },
                    {
                      primary: "Drew creates an environment that feels relaxed, collaborative, and genuinely comfortable.",
                      secondary: "Even when I usually feel awkward on camera, I felt confident sharing ideas and being myself.",
                      author: "Gracie T.",
                      image: IMAGES.testimonialGracie
                    },
                    {
                      primary: "Drew is a kind soul with a sharp eye. The photography is handled with care, talent, and skill — and the experience itself is genuinely inspiring.",
                      secondary: "His direction and feedback make the time feel well spent and truly enjoyable.",
                      author: "Alecia C.",
                      image: IMAGES.testimonialAlecia
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex flex-col sm:flex-row gap-6 md:gap-8 items-start">
                        {/* Portrait Block - Updated to Landscape 3x2 and removed Grayscale */}
                        <div className="shrink-0 w-32 aspect-[3/2] md:w-48 border border-paper/20 p-1">
                            <img src={item.image} alt={item.author} className="w-full h-full object-cover contrast-125 opacity-90" />
                        </div>
                        
                        <div className="flex flex-col h-full justify-between pt-1">
                            <div className="mb-4 md:mb-6">
                              <p className="font-serif text-lg md:text-2xl leading-relaxed opacity-95 mb-3">
                                  “{item.primary}”
                              </p>
                              {item.secondary && (
                                <p className="text-sm md:text-base opacity-70 font-light leading-relaxed">
                                  {item.secondary}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center gap-3 mt-auto">
                                <span className="w-8 h-[1px] bg-paper/40"></span>
                                <div className="text-xs font-bold uppercase tracking-widest opacity-60">{item.author}</div>
                            </div>
                        </div>
                    </div>
                  ))}
              </div>
          </Section>
      </div>
      
      {/* PRESS RECOGNITION - Clean, Monochromatic, Editorial */}
      <div className="bg-paper text-ink border-b border-ink/5 relative z-10">
        <Section className="py-16 md:py-24">
            <p className="text-center text-[10px] font-bold uppercase tracking-[0.3em] text-ink/30 mb-12 cursor-default selection:bg-ink/20">
                Selected editorial platforms
            </p>
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 mix-blend-multiply select-none pointer-events-none">
                <img 
                  src={IMAGES.pressVogue} 
                  alt="Vogue" 
                  className="h-5 md:h-7 w-auto object-contain brightness-0" 
                />
                <img 
                  src={IMAGES.pressBillboard} 
                  alt="Billboard" 
                  className="h-5 md:h-7 w-auto object-contain brightness-0" 
                />
                <img 
                  src={IMAGES.pressDownbeat} 
                  alt="DownBeat" 
                  className="h-5 md:h-7 w-auto object-contain brightness-0" 
                />
                <img 
                  src={IMAGES.pressAmericanSongwriter} 
                  alt="American Songwriter" 
                  className="h-5 md:h-7 w-auto object-contain brightness-0" 
                />
            </div>
        </Section>
      </div>

      {/* FOOTER CTA */}
      <div className="bg-ink text-paper py-24 md:py-32 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto px-6">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-paper/40 mb-6 block">Start Your Campaign</span>
              <h2 className="font-serif text-4xl md:text-5xl lg:text-7xl mb-10 md:mb-12">Inquire About<br/>a Project</h2>
              <Button to="/contact" variant="primary">Inquire Now</Button>
          </div>
      </div>

    </div>
  );
};

export default Home;