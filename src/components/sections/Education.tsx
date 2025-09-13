import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap } from 'gsap';
import { usePortfolioStore } from '../../store/portfolioStore';
import raipurLogo from '../../assets/raipur_logo.jpg';
import vitLogo from '../../assets/vit_logo.jpg';
// Your actual education data
const educationData = [
  {
    id: "mba",
    institution: "Indian Institute of Management (IIM), Raipur",
    degree: "Master of Business Administration",
    field: "Strategy and Operations",
    duration: "2021-2023",
    location: "Raipur, India",
    gpa: "81.30%",
    achievements: [
      "Dean's List 2022 (Top 5%)",
      "Elected Batch Representative",
      "Strategy and Operations Excellence",
      "Leadership in Academic Excellence",
      "Outstanding Performance Recognition"
    ],
    relevantCourses: [
      "Strategic Management",
      "Operations Management",
      "Business Analytics",
      "Supply Chain Management",
      "Corporate Strategy",
      "Decision Making",
      "Organizational Behavior",
      "Financial Management"
    ],
    buildingModel: "iim-raipur-building.glb"
  },
  {
    id: "bachelors",
    institution: "Vellore Institute of Technology, Vellore",
    degree: "Bachelor of Technology",
    field: "Electronics and Communication",
    duration: "2015-2019",
    location: "Vellore, India",
    gpa: "89.40%",
    achievements: [
      "Recognized as Special Achiever for academics and competitions",
      "Elected Tech. Head of Club",
      "Academic Excellence Award",
      "Technical Innovation Recognition",
      "Leadership in Student Activities"
    ],
    relevantCourses: [
      "Data Structures and Algorithms",
      "Machine Learning",
      "Communication Systems",
      "Operating Systems"
    ],
    buildingModel: "vit-building.glb"
  }
];

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
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {education.degree}
                      </h3>
                      <p className="text-gray-400 text-sm mb-4">
                        {education.field}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <div className="px-3 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-400">
                          {education.duration}
                        </div>
                        <div className="px-3 py-1 bg-gray-500/10 border border-gray-500/20 rounded-full text-xs text-gray-400">
                          {education.location}
                        </div>
                        {education.gpa && (
                          <div className="px-3 py-1 bg-green-500/10 border border-green-500/20 rounded-full text-xs text-green-400">
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

                {/* Institution Logo */}
                <div className="flex-1 w-full lg:w-1/2">
                  <div className="glass-effect rounded-2xl p-8 h-64 flex items-center justify-center">
                    <div className="text-center">
                      {education.id === "mba" ? (
                        // IIM Raipur Logo
                        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                          <div className="w-full h-full bg-white rounded-lg p-2 shadow-lg">
                            <img 
                              src={raipurLogo} 
                              alt="IIM Raipur Logo" 
                              className="w-full h-full object-contain rounded-md"
                            />
                          </div>
                        </div>
                      ) : (
                        // VIT Logo
                        <div className="w-24 h-24 mx-auto mb-4 flex items-center justify-center">
                          <div className="w-full h-full bg-white rounded-lg p-2 shadow-lg">
                            <img 
                              src={vitLogo} 
                              alt="VIT Vellore Logo" 
                              className="w-full h-full object-contain rounded-md"
                            />
                          </div>
                        </div>
                      )}
                      <h4 className="text-lg font-semibold text-white mb-2">
                        {education.id === "mba" ? "IIM Raipur" : "VIT Vellore"}
                      </h4>
                      <p className="text-sm text-gray-400">
                        {education.institution}
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