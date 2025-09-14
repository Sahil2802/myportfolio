import { useEffect, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function useScrollSnap(sectionRefs, setCurrentSection) {
  const currentSection = useRef(0);
  const isScrolling = useRef(false);

  // Function to scroll to a specific section (used by both wheel and external calls)
  const scrollToSection = useCallback((targetIndex) => {
    if (isScrolling.current || targetIndex < 0 || targetIndex >= sectionRefs.length) return;
    
    // Update pagination state immediately when scroll starts
    currentSection.current = targetIndex;
    if (setCurrentSection) setCurrentSection(targetIndex);
    
    isScrolling.current = true;
    gsap.to(window, {
      duration: 0.6,
      scrollTo: { y: sectionRefs[targetIndex].current, offsetY: 0 },
      ease: 'power2.out',
      onComplete: () => {
        isScrolling.current = false;
      }
    });
  }, [sectionRefs, setCurrentSection]);

  // Expose scrollToSection function globally so other components can use it
  useEffect(() => {
    window.scrollToSectionByIndex = scrollToSection;
    return () => {
      delete window.scrollToSectionByIndex;
    };
  }, [scrollToSection]);

  useEffect(() => {
    const handleWheel = (e) => {
      e.preventDefault();
      if (isScrolling.current) return;

      let nextSection = currentSection.current;
      if (e.deltaY > 0 && currentSection.current < sectionRefs.length - 1) {
        nextSection += 1;
      } else if (e.deltaY < 0 && currentSection.current > 0) {
        nextSection -= 1;
      } else {
        return;
      }

      scrollToSection(nextSection);
    };
    window.addEventListener('wheel', handleWheel, { passive: false });
    return () => window.removeEventListener('wheel', handleWheel);
  }, [scrollToSection]);
}
