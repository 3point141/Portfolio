import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';
import { careerData } from '../../data/career';

export function Career() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();

  useEffect(() => {
    if (inView) {
      setCurrentSection(2);
      trackInteraction('career_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  return (
    <section 
      ref={ref}
      id="career" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Career</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My professional journey in product management across different industries.
          </p>
        </div>
        
        {/* Career Timeline */}
        <div className="space-y-16">
          {careerData.map((experience, index) => (
            <div key={experience.id} className="relative">
              {/* Timeline Line */}
              {index < careerData.length - 1 && (
                <div className="absolute left-8 top-16 w-0.5 h-16 bg-gradient-to-b from-primary-500 to-primary-600" />
              )}
              
              <div className="flex items-start gap-8">
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-16 h-16 bg-primary-500 rounded-full border-4 border-dark-900 shadow-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                </div>

                {/* Experience Card */}
                <div className="flex-1">
                  <div className="glass-effect rounded-2xl p-8">
                    {/* Header */}
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {experience.role}
                        </h3>
                        <p className="text-primary-400 font-semibold text-lg">
                          {experience.company}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {experience.location}
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4 lg:mt-0">
                        <div className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-400">
                          {experience.duration}
                        </div>
                        <div className="px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-xs text-gray-400">
                          Team: {experience.teamSize}
                        </div>
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Achievements</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {experience.achievements.map((achievement, idx) => (
                          <div 
                            key={idx} 
                            className="bg-gray-900/30 rounded-lg p-4 border border-gray-800 hover:border-primary-500/50 hover:bg-gray-900/50 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300 cursor-pointer group"
                          >
                            <div className="text-2xl font-bold text-primary-400 mb-1 group-hover:text-primary-300 transition-colors duration-300">
                              {achievement.value}
                            </div>
                            <div className="text-sm text-gray-300 mb-2 group-hover:text-white transition-colors duration-300">
                              {achievement.metric}
                            </div>
                            <div className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                              {achievement.impact}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Responsibilities</h4>
                      <ul className="space-y-2">
                        {experience.responsibilities.slice(0, 4).map((responsibility, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-primary-400 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.technologies.slice(0, 6).map((tech, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-400"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 