import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { usePortfolioStore } from '../../store/portfolioStore';
import { educationData } from '../../data/education';

export function Education() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });
  
  const { setCurrentSection, trackInteraction } = usePortfolioStore();
  const sectionRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView) {
      setCurrentSection(1);
      trackInteraction('education_viewed');
    }
  }, [inView, setCurrentSection, trackInteraction]);

  useEffect(() => {
    if (inView && sectionRef.current) {
      const tl = gsap.timeline({ delay: 0.3 });

      tl.fromTo(sectionRef.current.querySelector('.section-title'),
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" }
      )
      .fromTo(sectionRef.current.querySelectorAll('.education-card'),
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
        "-=0.4"
      );
    }
  }, [inView]);

  return (
    <section 
      ref={ref}
      id="education" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-primary-600/5 rounded-full blur-3xl" />
      </div>

      <div ref={sectionRef} className="container-max relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My academic journey has shaped my approach to product management, 
            combining technical expertise with strategic business thinking.
          </p>
        </div>

        {/* Education Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-500 to-primary-600 hidden lg:block" />
          
          <div className="space-y-16 lg:space-y-24">
            {educationData.map((education, index) => (
              <div 
                key={education.id}
                className={`education-card flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Institution Card */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="glass-effect rounded-2xl p-8 h-full">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">
                          {education.institution}
                        </h3>
                        <p className="text-primary-400 font-semibold">
                          {education.degree}
                        </p>
                        <p className="text-gray-400 text-sm">
                          {education.field}
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-400">{education.duration}</div>
                        <div className="text-sm text-gray-400">{education.location}</div>
                        {education.gpa && (
                          <div className="text-sm text-primary-400 font-semibold">
                            GPA: {education.gpa}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                      <ul className="space-y-2">
                        {education.achievements.slice(0, 3).map((achievement, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-primary-400 mt-1">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Relevant Courses */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Relevant Courses</h4>
                      <div className="flex flex-wrap gap-2">
                        {education.relevantCourses.slice(0, 4).map((course, idx) => (
                          <span 
                            key={idx}
                            className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-400"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className="w-8 h-8 bg-primary-500 rounded-full border-4 border-dark-900 shadow-lg" />
                </div>

                {/* 3D Building Placeholder */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="glass-effect rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="text-lg font-semibold text-white mb-2">3D Building</h4>
                      <p className="text-sm text-gray-400">
                        {education.buildingModel} will be rendered here
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 