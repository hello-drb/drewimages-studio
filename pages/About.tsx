import React from 'react';
import Section from '../components/Section';
import { IMAGES } from '../constants';
import Button from '../components/Button';

const About: React.FC = () => {
  return (
    <div className="min-h-screen">
       <Section className="py-20 md:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                {/* Clean Image Layout */}
                <div className="lg:col-span-5 order-2 lg:order-1">
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-200">
                         <img src={IMAGES.aboutMain} alt="Drew Bordeaux" className="w-full h-full object-cover grayscale contrast-[1.1]" />
                    </div>
                    <div className="flex gap-4 mt-4">
                        <div className="w-1/2 aspect-square bg-gray-100 overflow-hidden">
                             <img src={IMAGES.aboutDetail} alt="Detail" className="w-full h-full object-cover grayscale" />
                        </div>
                        <div className="w-1/2 flex flex-col justify-end gap-1">
                            <p className="text-xs text-ink/40 uppercase tracking-widest leading-relaxed">
                                In process — NYC, December 2025.
                            </p>
                            <p className="text-[10px] text-ink/30 uppercase tracking-widest">
                                Photo Credit: Lindsey Lerner
                            </p>
                        </div>
                    </div>
                </div>

                <div className="lg:col-span-7 order-1 lg:order-2 lg:pl-12">
                    <h1 className="font-serif text-6xl md:text-8xl mb-12 text-burgundy leading-none">About<br/>the Studio</h1>
                    
                    <div className="prose prose-lg text-ink/80 font-light leading-relaxed mb-16 space-y-8">
                        <p className="font-serif text-2xl italic text-ink">
                            DrewImages.studio is the visual identity practice of Drew Bordeaux.
                        </p>
                        <p>
                            The studio works with artists, founders, and creative teams who want imagery that feels focused, cohesive, and grounded in real use — not just style for style’s sake.
                        </p>
                        <p>
                            The approach combines creative direction with practical execution, keeping projects efficient, collaborative, and clear.
                        </p>
                    </div>
                    
                    <div className="border-t border-ink/10 pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                        <p className="text-sm font-bold uppercase tracking-widest text-teal">
                            Based in New York. Available worldwide.
                        </p>
                        <Button to="/contact" variant="primary">Request a Session</Button>
                    </div>
                </div>
            </div>
       </Section>
    </div>
  );
};

export default About;