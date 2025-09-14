import './App.css'
import { useRef, useState } from 'react';
import useScrollSnap from './hooks/useScrollSnap';
import PaginationLines from './components/PaginationLines';
import { Navbar } from './components/Navbar'
import { Home } from './components/sections/Home'
import { About } from './components/sections/About'
import { Projects } from './components/sections/Projects'
import { Contact } from './components/sections/Contact'
import { SocialLinks } from './components/SocialLinks'
import { ScrollProvider } from './context/ScrollContext'
import { Toaster } from 'react-hot-toast'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

function App() {
  const sectionRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];
  const [currentSection, setCurrentSection] = useState(0);

  // Custom hook with callback to update current section
  useScrollSnap(sectionRefs, setCurrentSection);

  const handleSectionClick = (sectionIndex) => {
    setCurrentSection(sectionIndex);
    gsap.to(window, {
      duration: 0.6,
      scrollTo: { y: sectionRefs[sectionIndex].current, offsetY: 0 },
      ease: 'power2.out',
    });
  };

  return (
    <>
      <Toaster position="top-center" />
      <ScrollProvider>
        <Navbar />
        <div className="fixed left-22 top-1/2 -translate-y-1/2 [@media(max-width:1272px)]:hidden" style={{ zIndex: 100 }}>
          <PaginationLines 
            total={sectionRefs.length} 
            current={currentSection} 
            onSectionClick={handleSectionClick}
          />
        </div>
        <Home sectionRef={sectionRefs[0]} />
        <About sectionRef={sectionRefs[1]} />
        <Projects sectionRef={sectionRefs[2]} />
        <Contact sectionRef={sectionRefs[3]} />
        <SocialLinks />
      </ScrollProvider>
    </>
  )
}

export default App
