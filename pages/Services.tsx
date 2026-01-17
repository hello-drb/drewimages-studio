import React from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const EditorialHeader: React.FC<{ number: string; title: string; colorClass?: string }> = ({ number, title, colorClass = "border-current" }) => (
  <div className={`flex items-center gap-4 mb-10 md:mb-16 pt-6 md:pt-8 border-t ${colorClass} w-full`}>
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] opacity-60">({number})</span>
    <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] flex-grow opacity-60">{title}</span>
  </div>
);

const Services: React.FC = () => {
  return (
    <div className="min-h-screen pb-0 bg-ink">
      
      {/* Header */}
      <div className="bg-paper py-24 md:py-48 z-20 relative bg-grain">
          <Section>
            <span className="block text-center text-[10px] font-bold uppercase tracking-[0.3em] text-ink/40 mb-6">Offerings</span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-8xl mb-6 md:mb-8 text-center text-ink text-balance">
                Creative direction and photography, shaped with care and intention.
            </h1>
             <p className="text-base md:text-lg text-ink/70 text-center max-w-2xl mx-auto leading-relaxed font-light">
                DrewImages.studio works with artists, founders, and creative teams who value clarity, tone, and thoughtful execution. Projects are approached with a calm, collaborative process — focused on creating imagery that feels considered and works in the real world.
            </p>
          </Section>
      </div>

      {/* Block 1: Identity Sessions - TEAL */}
      <div className="bg-teal text-ink relative z-10">
        <Section className="py-16 md:py-32">
            <EditorialHeader number="01" title="Identity Sessions" colorClass="border-ink/20" />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
                <div className="order-2 lg:order-1">
                     <div className="aspect-[3/4] overflow-hidden bg-ink/10 mb-4">
                        <img src={IMAGES.serviceIdentity} className="w-full h-full object-cover" alt="Identity session" />
                     </div>
                     <div className="flex justify-between items-start text-[10px] font-bold uppercase tracking-widest opacity-60">
                        <span>Fig 1.0</span>
                        <span>Presence & Clarity</span>
                     </div>
                </div>
                
                <div className="order-1 lg:order-2 lg:sticky lg:top-32">
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-balance">Focused portrait sessions for people who need to be seen clearly.</h2>
                    
                    <div className="prose prose-lg text-ink/80 font-light mb-10 md:mb-12">
                        <p>
                           Ideal for press, releases, profiles, and personal brands. Each session is guided by light direction, simple planning, and an emphasis on comfort and confidence.
                        </p>
                    </div>

                    <div className="bg-paper/10 p-6 md:p-8 border border-ink/10 backdrop-blur-sm">
                        <ul className="space-y-4 mb-8 text-xs md:text-sm font-bold opacity-80 uppercase tracking-wide">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Direction and visual planning</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Studio or location shoot</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Curated image selections</li>
                        </ul>
                        <div className="flex justify-between items-end border-t border-ink/10 pt-6">
                            <span className="text-[10px] uppercase tracking-widest">Starting at</span>
                            <span className="text-2xl md:text-3xl font-serif italic">$1,500</span>
                        </div>
                    </div>
                </div>
            </div>
        </Section>
      </div>

      {/* Block 2: Campaign Builds - MUSTARD */}
      <div className="bg-mustard text-ink relative z-10">
        <Section className="py-16 md:py-32">
            <EditorialHeader number="02" title="Campaign Builds" colorClass="border-ink/20" />

             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-32 items-start">
                <div>
                    <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-balance">Larger creative projects built around a defined visual direction.</h2>
                    
                    <div className="prose prose-lg text-ink/80 font-light mb-10 md:mb-12">
                         <p>
                            Designed for albums, launches, and identity-driven campaigns that need more than a single shoot. These projects often include multiple concepts, locations, or looks — all shaped by a cohesive tone.
                        </p>
                    </div>

                    <div className="bg-paper/10 p-6 md:p-8 border border-ink/10 backdrop-blur-sm shadow-sm">
                        <ul className="space-y-4 mb-8 text-xs md:text-sm font-bold opacity-80 uppercase tracking-wide">
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Creative direction & references</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Multi-location or multi-look shoots</li>
                            <li className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-ink rounded-full"></span> Organized rollout assets</li>
                        </ul>
                         <div className="flex justify-between items-end border-t border-ink/10 pt-6">
                            <span className="text-[10px] uppercase tracking-widest">Starting at</span>
                            <span className="text-2xl md:text-3xl font-serif italic">$2,500</span>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                     <div className="col-span-2 aspect-video overflow-hidden bg-ink/10">
                        <img src={IMAGES.serviceCampaign} className="w-full h-full object-cover" alt="Campaign visual" />
                     </div>
                     <div className="aspect-square overflow-hidden bg-burgundy flex flex-col items-center justify-center p-4 md:p-6 text-center">
                        <span className="font-serif text-2xl md:text-3xl lg:text-4xl text-paper italic mb-2 md:mb-3">Era</span>
                        <span className="text-[10px] uppercase tracking-widest text-paper/70 font-bold leading-relaxed max-w-[140px]">
                            A visual framework for a defined creative chapter
                        </span>
                     </div>
                     <div className="aspect-square overflow-hidden bg-ink/10">
                        <img src={IMAGES.serviceCampaignDetail} className="w-full h-full object-cover" alt="Campaign detail" />
                     </div>
                </div>
            </div>
        </Section>
      </div>

       {/* Block 3: Ongoing Direction - INK */}
       <div className="bg-ink text-paper relative z-10">
        <Section className="py-16 md:py-32">
            <EditorialHeader number="03" title="Ongoing Direction" colorClass="border-paper/20" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <div className="lg:col-span-7">
                     <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-balance">Creative support for teams with consistent content needs.</h2>
                     <p className="text-lg text-paper/70 font-light leading-relaxed max-w-xl">
                        For artists, brands, or organizations who want continuity in their visual language over time. This option focuses on long-term alignment rather than one-off sessions.
                     </p>
                </div>
                
                <div className="lg:col-span-5">
                    <div className="bg-paper/5 border border-paper/10 p-8 md:p-12 text-center">
                        <span className="block font-serif italic text-2xl md:text-3xl mb-2">Available by Retainer</span>
                        <span className="text-[10px] uppercase tracking-widest opacity-50">Inquire for details</span>
                    </div>
                </div>
            </div>
        </Section>
      </div>

      <div className="bg-paper py-24 md:py-32 text-center relative z-10">
          <Section>
            <h3 className="font-serif text-3xl md:text-4xl mb-6">Inquire about a project</h3>
            <p className="text-xs font-bold uppercase tracking-widest text-ink/40 mb-10 max-w-md mx-auto leading-loose">
                New projects are considered by inquiry.<br/>
                Please include timing, scope, and intended use.
            </p>
            <Button to="/contact" variant="primary">Inquire About a Project</Button>
          </Section>
      </div>
    </div>
  );
};

export default Services;