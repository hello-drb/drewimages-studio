import React, { useState } from 'react';
import Section from '../components/Section';
import Button from '../components/Button';
import { IMAGES } from '../constants';

const Contact: React.FC = () => {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        // Simulate network request
        setTimeout(() => {
            setStatus('success');
        }, 1500);
    };

  return (
    <div className="min-h-screen">
        <Section className="py-20 md:py-32 max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                <div className="flex flex-col h-full">
                    <h1 className="font-serif text-6xl md:text-7xl mb-12 text-burgundy">Inquire</h1>
                    
                    <div className="mb-16">
                        <p className="text-xl font-serif italic text-ink/80 mb-8 max-w-md">
                            "New projects are considered by inquiry. Please include project type, timeline, and intended use."
                        </p>
                        <a href="mailto:hello@drewbordeaux.com" className="text-sm font-bold uppercase tracking-widest border-b border-ink/30 pb-1 hover:text-teal hover:border-teal transition-colors">
                            hello@drewbordeaux.com
                        </a>
                    </div>

                    <div className="mt-auto hidden lg:block aspect-[4/3] bg-gray-100 overflow-hidden">
                         <img 
                            src={IMAGES.contactHero} 
                            alt="Studio Texture" 
                            className="w-full h-full object-cover grayscale contrast-[1.1]" 
                         />
                    </div>
                </div>

                <div className="lg:pt-4">
                    {status === 'success' ? (
                        <div className="h-full flex flex-col items-center justify-center text-center p-12 bg-paper border border-teal/20">
                            <h3 className="font-serif text-3xl text-teal mb-4">Received.</h3>
                            <p className="text-ink/60">We'll be in touch shortly.</p>
                            <button onClick={() => setStatus('idle')} className="text-xs uppercase underline mt-6 text-ink/40 hover:text-ink font-bold">Send another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-12">
                            <div className="group">
                                <label htmlFor="name" className="block text-xs uppercase tracking-widest mb-3 text-ink/40 group-focus-within:text-teal transition-colors">Name</label>
                                <input required type="text" id="name" className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-teal transition-colors text-lg" placeholder="Jane Doe" />
                            </div>
                            <div className="group">
                                <label htmlFor="email" className="block text-xs uppercase tracking-widest mb-3 text-ink/40 group-focus-within:text-teal transition-colors">Email</label>
                                <input required type="email" id="email" className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-teal transition-colors text-lg" placeholder="jane@example.com" />
                            </div>
                            <div className="group">
                                <label htmlFor="details" className="block text-xs uppercase tracking-widest mb-3 text-ink/40 group-focus-within:text-teal transition-colors">Project Details</label>
                                <textarea required id="details" rows={4} className="w-full bg-transparent border-b border-ink/20 py-4 focus:outline-none focus:border-teal transition-colors text-lg resize-none" placeholder="Type, timeline, goals..."></textarea>
                            </div>
                            <div className="pt-8">
                                <Button className="w-full md:w-auto min-w-[200px]" variant="primary">
                                    {status === 'submitting' ? 'Sending...' : 'Request Session'}
                                </Button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </Section>
    </div>
  );
};

export default Contact;