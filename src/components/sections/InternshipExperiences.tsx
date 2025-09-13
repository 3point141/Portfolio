import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { usePortfolioStore } from '../../store/portfolioStore';

// Internship Experiences Data
const internshipData = [
  {
    id: "dazzme-fashions",
    company: "Dazzme Fashions",
    role: "Product Manager",
    duration: "May 2022 - Jul 2022",
    location: "Remote",
    type: "Fashion Tech",
    teamSize: 15,
    responsibilities: [
      "Defined and designed comprehensive user journey map for the website",
      "Created 7 detailed user personas to guide product development",
      "Designed wireframes for MVP using JustInMind software",
      "Identified and solved 12 critical pain points of existing customers",
      "Initiated strategic new product development initiatives",
      "Conducted primary market research with 400 customer responses"
    ],
    achievements: [
      {
        metric: "User Personas",
        value: "7",
        impact: "Detailed user personas created for product development",
        icon: "users",
        animationType: "counter"
      },
      {
        metric: "Pain Points Solved",
        value: "12",
        impact: "Customer pain points identified and addressed",
        icon: "target",
        animationType: "counter"
      },
      {
        metric: "Market Research",
        value: "400",
        impact: "Customer responses collected for product insights",
        icon: "search",
        animationType: "counter"
      },
      {
        metric: "Team Leadership",
        value: "15",
        impact: "Marketing and Tech team members led",
        icon: "users",
        animationType: "counter"
      }
    ],
    technologies: ["JustInMind", "User Journey Mapping", "Persona Development", "Wireframing", "Market Research", "Product Strategy", "Team Leadership"],
    environment: {
      model: "fashion-office.glb",
      atmosphere: "creative",
      colors: ["#1a1a2e", "#16213e", "#0f3460"]
    },
    learningOutcomes: [
      "Mastered user journey mapping and persona development methodologies",
      "Gained experience in wireframing and MVP design using professional tools",
      "Developed skills in market research and customer insight analysis",
      "Learned to lead cross-functional teams in product development"
    ]
  },
  {
    id: "chefathome-foodtech",
    company: "ChefAtHome Foodech LLP",
    role: "Product Manager",
    duration: "May 2022 - Jul 2022",
    location: "Remote",
    type: "Food Tech",
    teamSize: 6,
    responsibilities: [
      "Led 15-member Marketing and Tech team as Product Manager",
      "Implemented comprehensive 3-month product roadmap",
      "Set up Scrum board using Bitrix24 for efficient project management",
      "Created epics, managed sprints and tracked team efficiency",
      "Managed complete Software Development Life Cycle (SDLC)",
      "Defined 15 KPIs to track product performance and success"
    ],
    achievements: [
      {
        metric: "Team Size",
        value: "15",
        impact: "Marketing and Tech team members led",
        icon: "users",
        animationType: "counter"
      },
      {
        metric: "Roadmap Duration",
        value: "3",
        impact: "Months of strategic roadmap implemented",
        icon: "calendar",
        animationType: "counter"
      },
      {
        metric: "KPIs Defined",
        value: "15",
        impact: "Key performance indicators for product tracking",
        icon: "bar-chart",
        animationType: "counter"
      },
      {
        metric: "Chefs Onboarded",
        value: "4",
        impact: "New chefs onboarded to the platform",
        icon: "user-plus",
        animationType: "counter"
      }
    ],
    technologies: ["Bitrix24", "Scrum", "Agile", "SDLC", "KPI Management", "Team Leadership", "Product Roadmapping", "Chef Onboarding"],
    environment: {
      model: "foodtech-office.glb",
      atmosphere: "innovative",
      colors: ["#2d3748", "#4a5568", "#718096"]
    },
    learningOutcomes: [
      "Gained hands-on experience in leading large cross-functional teams",
      "Mastered Scrum methodology and agile project management tools",
      "Developed expertise in SDLC management and KPI definition",
      "Learned to create and implement strategic product roadmaps"
    ]
  },
  {
    id: "tiger-analytics",
    company: "Tiger Analytics",
    role: "Analytics Consulting Intern",
    duration: "Summer 2021",
    location: "Remote",
    type: "Analytics",
    teamSize: 8,
    responsibilities: [
      "Analyzed 54,000 CPG sales data points to optimize discount and markup strategy",
      "Scrutinized distribution of top influencing parameters for strategic insights",
      "Prepared 7 comprehensive dashboards using Power BI for data visualization",
      "Coordinated creation of robust capability building framework using strategic revenue management",
      "Executed promotion optimization using advanced log-log modeling techniques",
      "Delivered efficient promotion calendar with measurable business impact"
    ],
    achievements: [
      {
        metric: "Data Points Analyzed",
        value: "54K",
        impact: "CPG sales data points processed for optimization",
        icon: "database",
        animationType: "counter"
      },
      {
        metric: "Dashboards Created",
        value: "7",
        impact: "Power BI dashboards for data visualization",
        icon: "bar-chart",
        animationType: "counter"
      },
      {
        metric: "Efficiency Improvement",
        value: "18%",
        impact: "Promotion calendar efficiency achieved",
        icon: "trending-up",
        animationType: "bar"
      },
      {
        metric: "Model Type",
        value: "Log-Log",
        impact: "Advanced modeling technique implemented",
        icon: "calculator",
        animationType: "counter"
      }
    ],
    technologies: ["Power BI", "Data Analytics", "CPG Analysis", "Log-Log Modeling", "Revenue Management", "Promotion Optimization", "Dashboard Creation", "Strategic Framework"],
    environment: {
      model: "analytics-office.glb",
      atmosphere: "data-driven",
      colors: ["#0f172a", "#1e293b", "#334155"]
    },
    learningOutcomes: [
      "Mastered advanced analytics techniques for CPG industry optimization",
      "Developed expertise in Power BI dashboard creation and data visualization",
      "Gained experience in strategic revenue management and promotion optimization",
      "Learned to apply statistical modeling (log-log) for business decision making"
    ]
  }
];

export function InternshipExperiences() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const { setCurrentSection } = usePortfolioStore();

  useEffect(() => {
    if (inView) {
      setCurrentSection(3); // Internship Experiences section index
    }
  }, [inView, setCurrentSection]);

  return (
    <section 
      ref={ref}
      id="internship-experiences" 
      className="min-h-screen section-padding relative overflow-hidden"
    >
      <div className="container-max relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="gradient-text">Internship Experiences</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            My learning journey through diverse internship experiences that shaped my product management skills.
          </p>
        </div>
        
        {/* Internship Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {internshipData.map((internship, index) => (
            <div 
              key={internship.id} 
              className="group relative bg-gradient-to-br from-gray-900/50 to-gray-800/30 rounded-3xl p-8 border border-gray-700/50 hover:border-primary-500/50 hover:shadow-2xl hover:shadow-primary-500/20 transition-all duration-500 cursor-pointer overflow-hidden"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500 rounded-full blur-3xl transform translate-x-16 -translate-y-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-green-500 rounded-full blur-2xl transform -translate-x-12 translate-y-12"></div>
              </div>

              {/* Company Type Badge */}
              <div className="absolute top-6 right-6">
                <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  internship.type === 'Startup' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                  internship.type === 'Enterprise' ? 'bg-purple-500/20 text-purple-400 border border-purple-500/30' :
                  internship.type === 'Fashion Tech' ? 'bg-pink-500/20 text-pink-400 border border-pink-500/30' :
                  internship.type === 'Food Tech' ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                  'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                }`}>
                  {internship.type}
                </span>
              </div>

              {/* Header */}
              <div className="relative z-10 mb-6 pr-20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                    {internship.company.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-white group-hover:text-primary-300 transition-colors duration-300 truncate">
                      {internship.role}
                    </h3>
                    <p className="text-primary-400 font-medium truncate">
                      {internship.company}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                    {internship.duration}
                  </span>
                  <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs text-gray-300">
                    {internship.location}
                  </span>
                </div>
              </div>

              {/* Key Metrics */}
              <div className="relative z-10 mb-6">
                <div className="grid grid-cols-2 gap-3">
                  {internship.achievements.map((achievement, idx) => (
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

              {/* Key Learnings */}
              <div className="relative z-10 mb-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Learnings</h4>
                <ul className="space-y-2">
                  {internship.learningOutcomes.map((learning, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-300">
                      <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm">{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="relative z-10">
                <h4 className="text-lg font-semibold text-white mb-3">Technologies & Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {internship.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-full text-xs text-gray-300 hover:bg-primary-500/20 hover:border-primary-500/50 hover:text-primary-300 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}