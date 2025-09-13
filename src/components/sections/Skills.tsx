import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';

export function Skills() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();

  useEffect(() => {
    if (inView) {
      setCurrentSection(4);
      trackInteraction('skills_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  return (
    <section 
      ref={ref}
      id="skills" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My skill ecosystem and expertise areas.
          </p>
        </div>
        
        <div className="text-center text-gray-400">
          <p>3D skill constellation and neural network will be rendered here</p>
        </div>
      </div>
    </section>
  );
} 