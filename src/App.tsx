import { useEffect, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { usePortfolioStore } from './store/portfolioStore';
import { Scene } from './components/layout/Scene';
import { LoadingScreen } from './components/ui/LoadingScreen';
import { RightNavigation } from './components/ui/RightNavigation';
import { Hero } from './components/sections/Hero';
import { Education } from './components/sections/Education';
import { Career } from './components/sections/Career';
import { InternshipExperiences } from './components/sections/InternshipExperiences';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { AwardsAndAchievements } from './components/sections/Impact';
import { Recommendations } from './components/sections/Recommendations';
import { Contact } from './components/sections/Contact';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export function App() {
  const { 
    isLoading, 
    setLoading, 
    setPerformanceMode, 
    setCurrentSection
  } = usePortfolioStore();
  
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Detect device capabilities and set performance mode
    const detectDeviceCapabilities = () => {
      const isMobile = window.innerWidth < 768;
      const hasLowMemory = (navigator as any).deviceMemory && (navigator as any).deviceMemory < 4;
      const hasSlowConnection = (navigator as any).connection && 
        ((navigator as any).connection.effectiveType === 'slow-2g' || 
         (navigator as any).connection.effectiveType === '2g');
      
      if (isMobile || hasLowMemory || hasSlowConnection) {
        setPerformanceMode('low');
      } else {
        setPerformanceMode('high');
      }
    };

    detectDeviceCapabilities();

    // Initialize Lenis for smooth scrolling
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      infinite: false,
    });

    // Connect Lenis to GSAP ScrollTrigger
    lenisRef.current.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenisRef.current?.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Simulate loading
    const loadingTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearTimeout(loadingTimer);
      lenisRef.current?.destroy();
    };
  }, [setLoading, setPerformanceMode]);

  // Track scroll position for section detection
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'career', 'internship-experiences', 'projects', 'skills', 'awards', 'recommendations', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setCurrentSection(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [setCurrentSection]);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="relative">
      {/* 3D Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas
          camera={{ position: [0, 0, 5], fov: 75 }}
          gl={{ 
            antialias: true, 
            alpha: true,
            powerPreference: "high-performance"
          }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* Right Navigation */}
      <RightNavigation />

      {/* Main Content */}
      <div className="relative z-10">
        <Hero />
        <Education />
        <Career />
        <InternshipExperiences />
        <Projects />
        <Skills />
        <AwardsAndAchievements />
        <Recommendations />
        <Contact />
      </div>
    </div>
  );
}
