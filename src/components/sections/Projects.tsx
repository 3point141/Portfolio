import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';

// Projects Data
const projectsData = [
  {
    id: "polaris",
    title: "Polaris - KPI Insights Hub",
    description: "A modern, interactive dashboard for visualizing and analyzing Key Performance Indicators (KPIs) across business units and time periods. Built with Next.js, TypeScript, and modern web technologies.",
    category: "Business Intelligence",
    status: "Completed",
    duration: "3 months",
    teamSize: 1,
    technologies: ["Next.js", "TypeScript", "MongoDB", "Chart.js", "Tailwind CSS", "Google AI", "Firebase"],
    features: [
      "Interactive KPI Cards with month-over-month changes",
      "Excel file upload and URL import functionality",
      "Cloud storage with password protection",
      "AI-powered insights using Google Gemini 2.0",
      "PDF export and shareable dashboard links",
      "Real-time data visualization with trend charts"
    ],
    metrics: [
      {
        label: "File Formats",
        value: "2",
        description: "Excel formats supported (.xlsx, .xls)"
      },
      {
        label: "AI Integration",
        value: "100%",
        description: "Automated insights generation"
      },
      {
        label: "Security",
        value: "Bcrypt",
        description: "Password hashing for cloud storage"
      }
    ],
    image: "/src/assets/polaris-dashboard.jpg",
    github: "https://github.com/3point141/polaris",
    demo: "https://polaris-dashboard-demo.com",
    challenges: [
      "Implementing non-blocking Excel parsing with Web Workers",
      "Creating responsive data visualization components",
      "Integrating Google AI for automated insights generation"
    ],
    learnings: [
      "Advanced Next.js 15 features and server actions",
      "Web Workers for performance optimization",
      "Google AI (Gemini 2.0) integration and prompt engineering"
    ]
  },
  {
    id: "vo2nation",
    title: "VO2 Nation - Fitness Analytics",
    description: "A comprehensive fitness tracking and analytics platform that helps athletes and fitness enthusiasts monitor their performance, track progress, and optimize their training routines.",
    category: "Fitness Tech",
    status: "Completed",
    duration: "4 months",
    teamSize: 1,
    technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express.js", "JWT", "REST API"],
    features: [
      "VO2 max tracking and analysis",
      "Workout performance monitoring",
      "Progress visualization with interactive charts",
      "Personalized training recommendations",
      "Social features for community engagement",
      "Mobile-responsive design"
    ],
    metrics: [
      {
        label: "Users",
        value: "500+",
        description: "Active fitness enthusiasts"
      },
      {
        label: "Workouts",
        value: "10K+",
        description: "Tracked workout sessions"
      },
      {
        label: "Analytics",
        value: "15+",
        description: "Performance metrics tracked"
      }
    ],
    image: "/src/assets/vo2nation-dashboard.jpg",
    github: "https://github.com/3point141/vo2nation",
    demo: "https://vo2nation-demo.com",
    challenges: [
      "Implementing complex fitness algorithms and calculations",
      "Creating intuitive data visualization for fitness metrics",
      "Building scalable backend architecture for user data"
    ],
    learnings: [
      "Fitness industry standards and VO2 max calculations",
      "Advanced React state management and data flow",
      "RESTful API design and JWT authentication"
    ]
  },
  {
    id: "beautiful-chaos",
    title: "A Beautiful Chaos - Data Visualization",
    description: "An innovative data visualization project that explores complex mathematical concepts and chaotic systems through interactive visual representations using Python and Jupyter notebooks.",
    category: "Data Science",
    status: "Completed",
    duration: "2 months",
    teamSize: 1,
    technologies: ["Python", "Jupyter Notebook", "Matplotlib", "NumPy", "Pandas", "SciPy"],
    features: [
      "Interactive chaos theory visualizations",
      "Mathematical pattern recognition",
      "Dynamic system simulations",
      "Educational content and explanations",
      "Exportable visualizations and reports",
      "Modular notebook structure"
    ],
    metrics: [
      {
        label: "Visualizations",
        value: "20+",
        description: "Interactive mathematical plots"
      },
      {
        label: "Algorithms",
        value: "10+",
        description: "Chaos theory implementations"
      },
      {
        label: "Educational",
        value: "100%",
        description: "Documented learning content"
      }
    ],
    image: "/src/assets/beautiful-chaos.jpg",
    github: "https://github.com/3point141/A-Beautiful-Chaos",
    demo: "https://beautiful-chaos-demo.com",
    challenges: [
      "Implementing complex mathematical algorithms in Python",
      "Creating visually appealing representations of abstract concepts",
      "Balancing educational content with technical depth"
    ],
    learnings: [
      "Advanced mathematical modeling and simulation",
      "Data visualization best practices with Matplotlib",
      "Scientific computing with NumPy and SciPy"
    ]
  }
];

export function Projects() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const { setCurrentSection } = usePortfolioStore();
  const [currentProject, setCurrentProject] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (inView) {
      setCurrentSection(4); // Projects section index
    }
  }, [inView, setCurrentSection]);

  // Auto-play carousel
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentProject((prev) => (prev + 1) % projectsData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToProject = (index: number) => {
    setCurrentProject(index);
    setIsAutoPlaying(false);
  };

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projectsData.length);
    setIsAutoPlaying(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    setIsAutoPlaying(false);
  };

  return (
    <section 
      ref={ref}
      id="projects" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Innovative solutions I've built to solve real-world problems across healthcare, e-commerce, and sustainability domains.
          </p>
        </div>
        
        {/* Interactive Project Carousel */}
        <div className="relative max-w-6xl mx-auto">
          {/* Main Carousel Container */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/60 backdrop-blur-sm border border-gray-700/50">
            {/* Carousel Slides */}
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projectsData.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 lg:p-12">
                    {/* Left Side - Project Info */}
                    <div className="space-y-6">
                      {/* Project Header */}
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-2xl">
                            {project.title.charAt(0)}
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">
                              {project.title}
                            </h3>
                            <div className="flex items-center gap-3">
                              <span className="px-3 py-1 bg-primary-500/20 text-primary-400 border border-primary-500/30 rounded-full text-sm font-medium">
                                {project.category}
                              </span>
                              <span className="px-3 py-1 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full text-sm font-medium">
                                {project.status}
                              </span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-300 text-lg leading-relaxed">
                          {project.description}
                        </p>
                      </div>

                      {/* Key Metrics */}
                      <div className="grid grid-cols-3 gap-4">
                        {project.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50 hover:border-primary-500/50 transition-all duration-300"
                          >
                            <div className="text-2xl font-bold text-primary-400 mb-1">
                              {metric.value}
                            </div>
                            <div className="text-sm text-gray-300 mb-1">
                              {metric.label}
                            </div>
                            <div className="text-xs text-gray-400">
                              {metric.description}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-800/50 border border-gray-600/50 rounded-full text-sm text-gray-300 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="flex justify-start">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-6 py-3 bg-primary-500/20 border border-primary-500/30 rounded-xl text-primary-400 hover:bg-primary-500/30 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 transform hover:scale-105"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                          </svg>
                          View Code
                        </a>
                      </div>
                    </div>

                    {/* Right Side - Visual Elements */}
                    <div className="space-y-6">
                      {/* Features List */}
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                        <div className="space-y-3">
                          {project.features.map((feature, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-gray-300">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Challenges & Learnings */}
                      <div className="grid grid-cols-1 gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Challenges</h4>
                          <div className="space-y-2">
                            {project.challenges.slice(0, 2).map((challenge, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-400">{challenge}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Learnings</h4>
                          <div className="space-y-2">
                            {project.learnings.slice(0, 2).map((learning, idx) => (
                              <div key={idx} className="flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-sm text-gray-400">{learning}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-gray-800/80 backdrop-blur-sm border border-gray-600/50 rounded-full flex items-center justify-center text-gray-300 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {projectsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToProject(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentProject
                    ? 'bg-primary-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Auto-play Toggle */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 border border-gray-600/50 rounded-lg text-gray-300 hover:bg-gray-700/50 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300"
            >
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400' : 'bg-gray-500'}`}></div>
              <span className="text-sm">
                {isAutoPlaying ? 'Auto-play ON' : 'Auto-play OFF'}
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}