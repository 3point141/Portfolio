import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { usePortfolioStore } from '../../store/portfolioStore';
import linkedinPhoto from '../../assets/LinkeinPhoto.png';
import resumePDF from '../../assets/Aman_Kumar_Product_Manager.pdf';

export function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();
  const heroRef = useRef<HTMLDivElement>(null);
  const greetingRef = useRef<HTMLSpanElement>(null);
  const nameRef = useRef<HTMLSpanElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const phrases = [
    "Raw Ideas",
    "Startup Dreams", 
    "Figma Files",
    "Product Specs",
    "Hackathon Projects",
    "Late-night Thoughts"
  ];

  useEffect(() => {
    if (inView) {
      setCurrentSection(0);
      trackInteraction('hero_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  // Mouse tracking for photo tilt effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (photoRef.current) {
        const rect = photoRef.current.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = e.clientX - centerX;
        const deltaY = e.clientY - centerY;
        
        // Calculate tilt with subtle maximum angle (1.5 degrees)
        const tiltX = Math.max(-1.5, Math.min(1.5, (deltaY / (rect.height / 2)) * 1.5));
        const tiltY = Math.max(-1.5, Math.min(1.5, (deltaX / (rect.width / 2)) * 1.5));
        
        setMousePosition({ x: tiltY, y: -tiltX });
      }
    };

    if (inView) {
      window.addEventListener('mousemove', handleMouseMove);
      return () => window.removeEventListener('mousemove', handleMouseMove);
    }
  }, [inView]);

  // Rotating phrases effect
  useEffect(() => {
    if (inView) {
      const interval = setInterval(() => {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }, 2000); // Change every 2 seconds

      return () => clearInterval(interval);
    }
  }, [inView, phrases.length]);

  useEffect(() => {
    if (inView && heroRef.current) {
      const tl = gsap.timeline({ delay: 0.5 });

      // "Hi, I'm" - fade in
      tl.fromTo(greetingRef.current, 
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" }
      )
      // "Aman Kumar" - fade in
      .fromTo(nameRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      // Photo - scale in
      .fromTo(photoRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.3"
      )
      // Tagline container - slide up
      .fromTo(taglineRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
        "-=0.5"
      )
      // Buttons fade in
      .fromTo(buttonsRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.3"
      );
    }
  }, [inView]);

  // Animate phrase changes
  useEffect(() => {
    const currentPhrase = document.querySelector('.current-phrase');
    const nextPhrase = document.querySelector('.next-phrase');
    
    if (currentPhrase && nextPhrase) {
      // Flip out current phrase
      gsap.to(currentPhrase, {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in"
      });
      
      // Flip in next phrase
      gsap.fromTo(nextPhrase, 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.3, ease: "power2.out", delay: 0.3 }
      );
    }
  }, [currentPhraseIndex]);

  const scrollToNext = () => {
    const educationSection = document.getElementById('education');
    if (educationSection) {
      educationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      ref={ref}
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-primary-600/5 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary-500/3 to-primary-600/3 rounded-full blur-3xl" />
      </div>

      {/* Main Content */}
      <div ref={heroRef} className="container-max text-center relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span ref={greetingRef} className="block text-white opacity-0">Hi, I'm</span>
            <span ref={nameRef} className="block opacity-0" style={{ color: '#FFD700', background: 'linear-gradient(135deg, #FFD700, #FFA500)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Aman Kumar.</span>
            
            {/* Profile Photo */}
            <div 
              ref={photoRef}
              className="relative mx-auto mb-6 opacity-0"
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              {/* Halo effect - tight circle around the main circle */}
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                  isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle, transparent 0%, transparent 75%, rgba(255, 215, 0, 0.6) 85%, rgba(255, 215, 0, 0.3) 95%, transparent 100%)',
                  transform: 'scale(1.15)',
                  filter: 'blur(0.5px)'
                }}
              />
              <div 
                className={`absolute inset-0 rounded-full transition-all duration-500 ease-out ${
                  isHovering ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  background: 'radial-gradient(circle, transparent 0%, transparent 80%, rgba(255, 215, 0, 0.4) 90%, transparent 100%)',
                  transform: 'scale(1.25)',
                  filter: 'blur(1px)'
                }}
              />
              
              {/* Main photo container */}
              <div 
                className="w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto rounded-full overflow-hidden border-4 border-primary-500/30 shadow-2xl transition-all duration-300 ease-out relative z-10"
                style={{
                  transform: `perspective(1000px) rotateX(${mousePosition.y}deg) rotateY(${mousePosition.x}deg) scale(${isHovering ? 1.05 : 1})`,
                  boxShadow: isHovering 
                    ? '0 20px 40px rgba(255, 215, 0, 0.3), 0 0 60px rgba(255, 215, 0, 0.2)' 
                    : '0 10px 30px rgba(0, 0, 0, 0.5)'
                }}
              >
                {/* Profile photo */}
                <img 
                  src={linkedinPhoto} 
                  alt="Aman Kumar" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div ref={taglineRef} className="block text-white text-4xl md:text-5xl lg:text-6xl mt-4 opacity-0">
              <div className="text-center">
                <div className="text-center">I turn</div>
                <div className="relative w-[420px] md:w-[520px] lg:w-[620px] mx-auto text-primary-400 font-bold text-center">
                  <span className="current-phrase block text-center">
                    {phrases[currentPhraseIndex]}
                  </span>
                  <span className="next-phrase absolute top-0 left-0 right-0 opacity-0 text-center">
                    {phrases[(currentPhraseIndex + 1) % phrases.length]}
                  </span>
                </div>
                <div className="text-center">into digital reality.</div>
              </div>
            </div>
          </h1>

          {/* Action Buttons */}
          <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button 
              onClick={() => {
                trackInteraction('hero_view_projects');
                const projectsSection = document.getElementById('projects');
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white font-semibold rounded-lg hover:from-primary-600 hover:to-primary-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button 
              onClick={() => {
                trackInteraction('hero_view_resume');
                window.open(resumePDF, '_blank');
              }}
              className="px-8 py-4 bg-gradient-to-r from-gray-700 to-gray-800 text-white font-semibold rounded-lg hover:from-gray-600 hover:to-gray-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-gray-600/50"
            >
              View Resume
            </button>
            <button 
              onClick={() => {
                trackInteraction('hero_contact');
                const contactSection = document.getElementById('contact');
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="px-8 py-4 border border-primary-500/30 text-primary-400 font-semibold rounded-lg hover:bg-primary-500/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">5+</div>
              <div className="text-sm text-gray-400">Products Launched</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">€3M+</div>
              <div className="text-sm text-gray-400">Value Generated</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">1M+</div>
              <div className="text-sm text-gray-400">Users Impacted</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-400 mb-2">4.5</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToNext}
          className="flex flex-col items-center text-gray-400 hover:text-primary-400 transition-colors duration-300"
        >
          <span className="text-sm mb-2">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce" />
          </div>
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-4 h-4 bg-primary-400 rounded-full animate-float" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-500 rounded-full animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-5 h-5 bg-primary-600 rounded-full animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/3 right-1/3 w-2 h-2 bg-primary-400 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
      </div>
    </section>
  );
} 