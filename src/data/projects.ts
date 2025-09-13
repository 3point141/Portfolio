import type { Project } from '../types/portfolio';

export const featuredProjects: Project[] = [
  {
    id: "dashboard-redesign",
    title: "Analytics Dashboard Transformation",
    company: "DataCorp",
    duration: "6 months",
    category: "B2B SaaS",
    overview: "Complete redesign of analytics dashboard to improve user engagement and reduce churn",
    
    problemStatement: {
      title: "Users struggling with complex data visualization",
      description: "Our analytics dashboard had a 40% bounce rate and users reported feeling overwhelmed by the interface",
      userPainPoints: [
        "Too much information displayed at once",
        "Unclear data hierarchy and navigation",
        "Slow loading times for complex queries",
        "Mobile experience was unusable"
      ],
      businessImpact: "15% monthly churn rate, low feature adoption",
      marketContext: "Competitors launching simpler, more intuitive solutions"
    },
    
    research: {
      methodology: ["User interviews", "Analytics review", "Competitive analysis", "Usability testing"],
      userInterviews: 24,
      surveys: 150,
      usabilityTests: 12,
      keyInsights: [
        "Users want customizable dashboards",
        "Mobile access is critical for executives",
        "Real-time data is less important than trend analysis",
        "Collaboration features are highly valued"
      ],
      personas: [
        {
          name: "Executive Emma",
          role: "C-Suite Executive",
          goals: ["Quick KPI overview", "Board presentation data"],
          frustrations: ["Too detailed", "Not mobile-friendly"],
          avatar: "emma-avatar.png"
        },
        {
          name: "Analyst Alex",
          role: "Data Analyst",
          goals: ["Deep data exploration", "Custom reporting"],
          frustrations: ["Limited customization", "Slow performance"],
          avatar: "alex-avatar.png"
        }
      ]
    },
    
    solution: {
      approach: "Progressive disclosure with customizable widgets",
      keyFeatures: [
        {
          name: "Smart Dashboard Builder",
          description: "Drag-and-drop interface for custom dashboards",
          priority: "High",
          effort: "High",
          impact: "Increases user engagement by allowing personalization",
          userStories: ["As a user, I want to create custom dashboards so that I can focus on metrics that matter to my role"]
        },
        {
          name: "Mobile-First Design",
          description: "Responsive design optimized for mobile devices",
          priority: "High",
          effort: "Medium",
          impact: "Enables executive access on-the-go",
          userStories: ["As an executive, I want to check KPIs on my phone so that I can stay informed while traveling"]
        },
        {
          name: "Performance Optimization",
          description: "Improved loading times and query optimization",
          priority: "Medium",
          effort: "High",
          impact: "Reduces user frustration and increases engagement",
          userStories: ["As a user, I want fast loading times so that I can quickly access the data I need"]
        }
      ],
      userFlows: [],
      designPrinciples: ["Progressive disclosure", "Mobile-first", "Accessibility"],
      technicalConsiderations: ["Real-time data streaming", "Responsive design", "Performance optimization"]
    },
    
    execution: {
      timeline: [],
      teamStructure: [],
      methodology: "Agile",
      challenges: [
        {
          title: "Legacy System Integration",
          description: "Existing dashboard had complex data architecture",
          solution: "Implemented gradual migration with feature flags",
          outcome: "Zero downtime during transition"
        },
        {
          title: "Performance Requirements",
          description: "Need to maintain sub-2 second load times",
          solution: "Implemented lazy loading and query optimization",
          outcome: "Achieved 1.5 second average load time"
        }
      ],
      iterations: []
    },
    
    results: {
      primaryMetrics: [
        {
          name: "User Engagement",
          before: "12 min/session",
          after: "28 min/session",
          change: "+133%",
          timeframe: "3 months post-launch",
          visualization: "line"
        },
        {
          name: "Monthly Churn",
          before: "15%",
          after: "8%",
          change: "-47%",
          timeframe: "6 months post-launch",
          visualization: "bar"
        },
        {
          name: "Feature Adoption",
          before: "35%",
          after: "85%",
          change: "+143%",
          timeframe: "3 months post-launch",
          visualization: "pie"
        }
      ],
      secondaryMetrics: [
        {
          name: "Mobile Usage",
          before: "5%",
          after: "25%",
          change: "+400%",
          timeframe: "6 months post-launch",
          visualization: "line"
        }
      ],
      userFeedback: [],
      businessImpact: {
        revenue: "$1.2M ARR increase",
        retention: "47% churn reduction",
        satisfaction: "NPS improved from 6 to 32"
      },
      lessonsLearned: [
        "Progressive rollout helped identify edge cases",
        "User feedback sessions during development were invaluable",
        "Performance optimization was critical for adoption"
      ]
    },
    
    visuals: {
      hero: "/projects/dashboard-hero.jpg",
      screenshots: [
        "/projects/dashboard-before.jpg",
        "/projects/dashboard-after.jpg",
        "/projects/dashboard-mobile.jpg"
      ],
      wireframes: [
        "/projects/dashboard-wireframe-1.jpg",
        "/projects/dashboard-wireframe-2.jpg"
      ],
      prototypes: ["/projects/dashboard-prototype.fig"],
      videos: ["/projects/dashboard-demo.mp4"]
    },
    
    presentation: {
      workspaceModel: "analytics-lab.glb",
      interactiveElements: ["dashboard-prototype", "metrics-display", "user-feedback-board"],
      animationSequence: [],
      colorScheme: ["#3b82f6", "#1e40af", "#1e3a8a"]
    }
  },
  {
    id: "mobile-app-launch",
    title: "FinTech Mobile App Launch",
    company: "PayFlow",
    duration: "8 months",
    category: "Mobile App",
    overview: "Launched a comprehensive mobile banking solution from concept to 100K+ users",
    
    problemStatement: {
      title: "Complex banking experience on mobile",
      description: "Existing banking apps were cluttered and difficult to use on mobile devices",
      userPainPoints: [
        "Too many steps to complete simple transactions",
        "Unclear security features",
        "Poor mobile navigation",
        "Limited personalization"
      ],
      businessImpact: "Low mobile adoption, high support costs",
      marketContext: "Growing demand for mobile-first banking solutions"
    },
    
    research: {
      methodology: ["User interviews", "Competitive analysis", "Usability testing", "A/B testing"],
      userInterviews: 45,
      surveys: 300,
      usabilityTests: 20,
      keyInsights: [
        "Users want quick access to common actions",
        "Security features should be invisible but accessible",
        "Personalization increases engagement",
        "Push notifications drive retention"
      ],
      personas: [
        {
          name: "Busy Professional",
          role: "Working Parent",
          goals: ["Quick transactions", "Family account management"],
          frustrations: ["Complex interfaces", "Slow processes"],
          avatar: "professional-avatar.png"
        }
      ]
    },
    
    solution: {
      approach: "Mobile-first design with AI-powered personalization",
      keyFeatures: [
        {
          name: "Quick Actions",
          description: "One-tap access to common banking tasks",
          priority: "High",
          effort: "Medium",
          impact: "Reduces transaction time by 60%",
          userStories: ["As a user, I want to transfer money quickly so that I can manage my finances efficiently"]
        }
      ],
      userFlows: [],
      designPrinciples: ["Mobile-first", "Security by design", "Personalization"],
      technicalConsiderations: ["Biometric authentication", "Real-time notifications", "Offline functionality"]
    },
    
    execution: {
      timeline: [],
      teamStructure: [],
      methodology: "Agile",
      challenges: [
        {
          title: "Security Compliance",
          description: "Meeting banking security standards",
          solution: "Implemented biometric authentication and encryption",
          outcome: "Passed all security audits"
        }
      ],
      iterations: []
    },
    
    results: {
      primaryMetrics: [
        {
          name: "App Downloads",
          before: "0",
          after: "100K+",
          change: "100K+",
          timeframe: "12 months post-launch",
          visualization: "number"
        },
        {
          name: "User Retention",
          before: "N/A",
          after: "65%",
          change: "65%",
          timeframe: "Day 30 retention",
          visualization: "line"
        }
      ],
      secondaryMetrics: [],
      userFeedback: [],
      businessImpact: {
        revenue: "$500K monthly revenue",
        retention: "65% day 30 retention",
        satisfaction: "4.8/5 app store rating"
      },
      lessonsLearned: [
        "Mobile-first design was crucial for success",
        "Security features need to be invisible but accessible",
        "Personalization significantly increases engagement"
      ]
    },
    
    visuals: {
      hero: "/projects/mobile-hero.jpg",
      screenshots: [
        "/projects/mobile-screens.jpg",
        "/projects/mobile-flow.jpg"
      ],
      wireframes: [],
      prototypes: [],
      videos: []
    },
    
    presentation: {
      workspaceModel: "mobile-lab.glb",
      interactiveElements: ["app-prototype", "user-flow-display"],
      animationSequence: [],
      colorScheme: ["#10b981", "#059669", "#047857"]
    }
  }
]; 