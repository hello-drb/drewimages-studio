import React, { useState, useEffect } from 'react';
import Button from './Button';

// Added f_auto,q_auto for performance optimization
const SLIDES = [
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230293/Cyrille_Green_ug4lzg.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768231551/katie_jacoby_dress_cxexe9.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230554/A7404274-Edit_ngnbu0.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768345533/A7400898-Edit_2_xl7gtf.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230325/jazzmeia_wide_ieefeg.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230081/Kimberly_Hawkey_Water_uk76le.webp",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230077/Chelsea_Lane_j9zlaq.webp",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768230056/Carissa_Johnson_Banner_xalq1v.webp"
];

const HeroSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 4000); // 4 seconds per slide
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full flex flex-col md:block bg-ink md:h-[95vh]">
      
      {/* IMAGES SECTION */}
      {/* Mobile: 55vh height, stacked. Desktop: Full height (via absolute inset), fills parent. */}
      <div className="relative w-full h-[55vh] md:h-full overflow-hidden bg-ink transition-all duration-500 md:absolute md:inset-0">
        
        {/* Desktop Header Gradient Overlay */}
        <div className="hidden md:block absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

        {/* Slides */}
        {SLIDES.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover object-center md:object-[50%_25%] opacity-90 md:opacity-90"
            />
            {/* Desktop Bottom Gradient */}
            <div className="hidden md:block absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink via-ink/40 to-transparent z-10" />
            
            {/* Mobile Bottom Gradient - Blends image into the black text section below */}
            <div className="md:hidden absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink to-transparent z-10" />
          </div>
        ))}
        
        {/* Mobile Indicators (Centered inside the image area) */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-30 md:hidden">
            {SLIDES.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-0.5 transition-all duration-300 drop-shadow-md ${idx === currentSlide ? 'w-4 bg-mustard' : 'w-1.5 bg-white/40'}`}
                />
            ))}
        </div>
      </div>

      {/* TEXT CONTENT SECTION */}
      {/* Mobile: Relative block below image. Desktop: Absolute overlay on top of image. */}
      <div className="relative z-30 bg-ink px-6 py-10 md:bg-transparent md:absolute md:inset-0 md:flex md:flex-col md:justify-end md:pb-24 md:px-12 pointer-events-auto md:pointer-events-none">
        
        <div className="max-w-screen-2xl mx-auto w-full pointer-events-auto">
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-paper mb-6 leading-[0.95] md:leading-[0.9] tracking-tight max-w-4xl drop-shadow-none md:drop-shadow-lg text-balance">
              Creative direction <br />
              <span className="italic text-mustard">and photography.</span>
            </h1>
            
            <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full border-t border-white/20 pt-8 md:pt-8 mt-4">
              <p className="text-sm md:text-lg text-paper/90 max-w-lg font-light leading-relaxed mb-8 md:mb-0 md:drop-shadow-md text-balance">
                Thoughtful visual work — made collaboratively with artists, leaders, and creative teams.
                <span className="opacity-70 text-[10px] md:text-sm uppercase tracking-widest mt-2 block">New York–based. Available worldwide.</span>
              </p>
              
              <div className="grid grid-cols-2 md:flex gap-3 md:gap-4 w-full md:w-auto">
                <Button to="/contact" variant="burgundy" className="w-full md:w-auto px-4 md:px-6 text-sm md:text-lg">Request Session</Button>
                <Button to="/work" variant="outline" className="w-full md:w-auto px-4 md:px-6 text-sm md:text-lg text-paper border-paper hover:bg-paper hover:text-ink">View Work</Button>
              </div>
            </div>
        </div>

         {/* Desktop Indicators (Bottom Right) */}
        <div className="hidden md:flex absolute bottom-8 right-12 gap-2 z-30 pointer-events-auto">
            {SLIDES.map((_, idx) => (
                <div 
                    key={idx} 
                    className={`h-1 transition-all duration-300 drop-shadow-md ${idx === currentSlide ? 'w-8 bg-mustard' : 'w-2 bg-white/40'}`}
                />
            ))}
        </div>

      </div>
      
    </div>
  );
};

export default HeroSlider;