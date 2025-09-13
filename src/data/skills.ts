import type { SkillCategory } from '../types/portfolio';

export const skillEcosystem: SkillCategory[] = [
  {
    id: "product-strategy",
    name: "Product Strategy",
    color: "#3b82f6",
    position: [0, 0, 0],
    skills: [
      {
        id: "roadmap-planning",
        name: "Roadmap Planning",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["Certified Product Manager", "Strategic Planning Certificate"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["stakeholder-management", "data-analysis"],
        icon: "map",
        description: "Strategic planning and prioritization of product features",
        learningPath: ["Market Research", "User Research", "Competitive Analysis", "Strategic Frameworks"]
      },
      {
        id: "market-research",
        name: "Market Research",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["Market Research Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["competitive-analysis", "user-research"],
        icon: "search",
        description: "Comprehensive market analysis and opportunity identification",
        learningPath: ["Data Analysis", "Competitive Intelligence", "Industry Trends", "Customer Segmentation"]
      },
      {
        id: "competitive-analysis",
        name: "Competitive Analysis",
        proficiency: 4,
        yearsExperience: 5,
        certifications: [],
        projects: ["dashboard-redesign"],
        connections: ["market-research", "product-positioning"],
        icon: "target",
        description: "Analysis of competitors and market positioning",
        learningPath: ["Market Research", "SWOT Analysis", "Feature Comparison", "Pricing Strategy"]
      }
    ]
  },
  {
    id: "user-research",
    name: "User Research",
    color: "#10b981",
    position: [2, 1, 0],
    skills: [
      {
        id: "user-interviews",
        name: "User Interviews",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["User Research Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["usability-testing", "persona-development"],
        icon: "users",
        description: "Conducting effective user interviews and research sessions",
        learningPath: ["Interview Techniques", "Question Design", "Data Analysis", "Insight Synthesis"]
      },
      {
        id: "usability-testing",
        name: "Usability Testing",
        proficiency: 4,
        yearsExperience: 5,
        certifications: ["Usability Testing Certification"],
        projects: ["dashboard-redesign"],
        connections: ["user-interviews", "prototyping"],
        icon: "eye",
        description: "Planning and conducting usability tests",
        learningPath: ["Test Design", "User Recruitment", "Data Collection", "Analysis Methods"]
      },
      {
        id: "persona-development",
        name: "Persona Development",
        proficiency: 4,
        yearsExperience: 5,
        certifications: [],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["user-interviews", "user-journey-mapping"],
        icon: "user",
        description: "Creating detailed user personas and profiles",
        learningPath: ["User Research", "Data Synthesis", "Storytelling", "Design Thinking"]
      }
    ]
  },
  {
    id: "data-analytics",
    name: "Data Analytics",
    color: "#f59e0b",
    position: [-2, 1, 0],
    skills: [
      {
        id: "sql-analysis",
        name: "SQL Analysis",
        proficiency: 4,
        yearsExperience: 5,
        certifications: ["SQL Certification"],
        projects: ["dashboard-redesign"],
        connections: ["data-visualization", "metrics-tracking"],
        icon: "database",
        description: "Writing complex SQL queries for data analysis",
        learningPath: ["Database Design", "Query Optimization", "Data Modeling", "Performance Tuning"]
      },
      {
        id: "data-visualization",
        name: "Data Visualization",
        proficiency: 4,
        yearsExperience: 5,
        certifications: ["Tableau Certification"],
        projects: ["dashboard-redesign"],
        connections: ["sql-analysis", "metrics-tracking"],
        icon: "bar-chart",
        description: "Creating compelling data visualizations",
        learningPath: ["Chart Types", "Design Principles", "Storytelling", "Interactive Dashboards"]
      },
      {
        id: "metrics-tracking",
        name: "Metrics Tracking",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["Analytics Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["sql-analysis", "a-b-testing"],
        icon: "trending-up",
        description: "Defining and tracking key product metrics",
        learningPath: ["KPI Definition", "Data Collection", "Analysis Methods", "Reporting"]
      }
    ]
  },
  {
    id: "design-thinking",
    name: "Design Thinking",
    color: "#8b5cf6",
    position: [0, 2, 0],
    skills: [
      {
        id: "prototyping",
        name: "Prototyping",
        proficiency: 4,
        yearsExperience: 5,
        certifications: ["Figma Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["usability-testing", "user-journey-mapping"],
        icon: "layers",
        description: "Creating interactive prototypes and wireframes",
        learningPath: ["Design Tools", "Interaction Design", "User Flows", "Visual Design"]
      },
      {
        id: "user-journey-mapping",
        name: "User Journey Mapping",
        proficiency: 4,
        yearsExperience: 5,
        certifications: [],
        projects: ["mobile-app-launch"],
        connections: ["persona-development", "prototyping"],
        icon: "map-pin",
        description: "Mapping user experiences and touchpoints",
        learningPath: ["User Research", "Service Design", "Touchpoint Analysis", "Experience Design"]
      },
      {
        id: "design-sprints",
        name: "Design Sprints",
        proficiency: 3,
        yearsExperience: 4,
        certifications: ["Design Sprint Certification"],
        projects: ["mobile-app-launch"],
        connections: ["prototyping", "user-research"],
        icon: "zap",
        description: "Facilitating design sprints and workshops",
        learningPath: ["Facilitation", "Design Methods", "Workshop Planning", "Team Collaboration"]
      }
    ]
  },
  {
    id: "technical-skills",
    name: "Technical Skills",
    color: "#ef4444",
    position: [0, -2, 0],
    skills: [
      {
        id: "agile-methodologies",
        name: "Agile Methodologies",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["Certified Scrum Master", "Agile Coach"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["stakeholder-management", "team-leadership"],
        icon: "refresh-cw",
        description: "Leading agile development processes",
        learningPath: ["Scrum", "Kanban", "Sprint Planning", "Retrospectives"]
      },
      {
        id: "api-understanding",
        name: "API Understanding",
        proficiency: 3,
        yearsExperience: 4,
        certifications: [],
        projects: ["dashboard-redesign"],
        connections: ["technical-architecture", "data-analysis"],
        icon: "code",
        description: "Understanding API design and integration",
        learningPath: ["REST APIs", "GraphQL", "API Documentation", "Integration Testing"]
      },
      {
        id: "technical-architecture",
        name: "Technical Architecture",
        proficiency: 3,
        yearsExperience: 4,
        certifications: [],
        projects: ["dashboard-redesign"],
        connections: ["api-understanding", "scalability-planning"],
        icon: "server",
        description: "Understanding system architecture and scalability",
        learningPath: ["System Design", "Scalability", "Performance", "Security"]
      }
    ]
  },
  {
    id: "leadership",
    name: "Leadership",
    color: "#06b6d4",
    position: [-2, -1, 0],
    skills: [
      {
        id: "stakeholder-management",
        name: "Stakeholder Management",
        proficiency: 5,
        yearsExperience: 6,
        certifications: ["Stakeholder Management Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["roadmap-planning", "team-leadership"],
        icon: "handshake",
        description: "Managing relationships with key stakeholders",
        learningPath: ["Communication", "Influence", "Relationship Building", "Conflict Resolution"]
      },
      {
        id: "team-leadership",
        name: "Team Leadership",
        proficiency: 4,
        yearsExperience: 5,
        certifications: ["Leadership Certification"],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["stakeholder-management", "agile-methodologies"],
        icon: "users",
        description: "Leading cross-functional product teams",
        learningPath: ["Team Building", "Motivation", "Performance Management", "Coaching"]
      },
      {
        id: "presentation-skills",
        name: "Presentation Skills",
        proficiency: 4,
        yearsExperience: 5,
        certifications: [],
        projects: ["dashboard-redesign", "mobile-app-launch"],
        connections: ["stakeholder-management", "data-visualization"],
        icon: "presentation",
        description: "Presenting product strategies and results",
        learningPath: ["Storytelling", "Visual Design", "Public Speaking", "Audience Engagement"]
      }
    ]
  }
]; 