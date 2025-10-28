import React, { useState, useEffect } from 'react';
import { ScrollAnimatedSection } from './components/ScrollAnimatedSection';
import { AshokaIcon } from './components/icons/AshokaIcon';
import { blogContent } from './constants';

const App: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const title = "BABU CULTURE";

  return (
    <div className="bg-[#F8F5F2] font-serif">
      {/* Parallax Hero Section */}
      <header className="h-screen w-full flex flex-col justify-center items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1628744448845-a764d3d4d385?q=80&w=2070&auto=format&fit=crop)",
            transform: `translateY(${scrollY * 0.4}px)`,
            willChange: 'transform'
          }}
        >
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        <div className="relative z-10 text-center p-4">
          <AshokaIcon className="w-16 h-16 text-[#800000] mx-auto mb-6 pulsate" />
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-wider uppercase">
            {title.split('').map((char, index) => (
              <span 
                key={index} 
                className="title-char" 
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                {char === ' ' ? '\u00A0' : char}
              </span>
            ))}
          </h1>
          <h2 className="text-xl md:text-2xl text-[#800000] mt-4 tracking-[0.2em] uppercase subtitle-fade-in">
            Indian Bureaucracy
          </h2>
        </div>
        <a href="#content" aria-label="Scroll down" className="absolute bottom-10 z-10 text-white animate-bounce p-2 rounded-full">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </header>

      {/* Main Content */}
      <main id="content" className="container mx-auto px-6 py-20 md:py-32 max-w-6xl space-y-24">
        {blogContent.map((section, index) => (
          <ScrollAnimatedSection 
            key={index}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center"
            animation={index % 2 === 0 ? 'slideInRight' : 'slideInLeft'}
          >
            <div className={`md:order-${index % 2 === 0 ? 2 : 1}`}>
              <div className="relative">
                <div className="absolute -top-2 -left-2 w-full h-full border-2 border-[#800000]/50 rounded-lg transform rotate-[-2deg]"></div>
                <img src={section.imageUrl} alt={section.title} className="rounded-lg shadow-2xl relative z-10 w-full h-auto object-cover aspect-video" loading="lazy" />
              </div>
            </div>
            <div className={`md:order-${index % 2 === 0 ? 1 : 2}`}>
              <h3 className="text-3xl md:text-4xl font-bold text-[#800000] mb-6 relative pb-2 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-20 after:h-1 after:bg-[#800000]">
                {section.title}
              </h3>
              {section.paragraphs.map((paragraph, pIndex) => (
                <p key={pIndex} className="text-lg md:text-xl leading-relaxed mb-6 text-gray-800">
                  {paragraph}
                </p>
              ))}
            </div>
          </ScrollAnimatedSection>
        ))}
      </main>

      {/* Footer */}
      <footer className="text-center py-12 border-t border-gray-200 bg-transparent">
        <p className="text-gray-600">&copy; {new Date().getFullYear()} - An Insight into Bureaucracy. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default App;