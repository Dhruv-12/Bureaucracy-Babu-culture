import React, { useState, useRef, useEffect } from 'react';

type AnimationType = 'fadeInUp' | 'slideInLeft' | 'slideInRight';

interface ScrollAnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  animation?: AnimationType;
}

export const ScrollAnimatedSection: React.FC<ScrollAnimatedSectionProps> = ({ children, className = '', animation = 'fadeInUp' }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if(domRef.current) {
            observer.unobserve(domRef.current);
          }
        }
      });
    }, { threshold: 0.1 });

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const getAnimationClasses = () => {
    if (!isVisible) {
      switch (animation) {
        case 'slideInLeft':
          return 'opacity-0 -translate-x-12';
        case 'slideInRight':
          return 'opacity-0 translate-x-12';
        case 'fadeInUp':
        default:
          return 'opacity-0 translate-y-10';
      }
    }
    return 'opacity-100 translate-x-0 translate-y-0';
  };

  return (
    <div
      ref={domRef}
      className={`${className} transition-all duration-1000 ease-out transform ${getAnimationClasses()}`}
    >
      {children}
    </div>
  );
};
