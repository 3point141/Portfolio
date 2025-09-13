export interface Education {
  id: string;
  institution: string;
  degree: string;
  field: string;
  duration: string;
  location: string;
  gpa?: string;
  achievements: string[];
  relevantCourses: string[];
  projects: string[];
  colors: {
    primary: string;
    secondary: string;
  };
  buildingModel: string;
}

export interface Achievement {
  metric: string;
  value: string;
  impact: string;
  icon: string;
  animationType: 'counter' | 'bar' | 'pie' | 'line';
}

export interface CareerExperience {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  type: 'startup' | 'corporate' | 'scale-up' | 'remote';
  teamSize: number;
  responsibilities: string[];
  achievements: Achievement[];
  technologies: string[];
  environment: {
    model: string;
    atmosphere: 'creative' | 'corporate' | 'collaborative';
    colors: string[];
  };
  transitionStory: string;
}

export interface UserPersona {
  name: string;
  role: string;
  goals: string[];
  frustrations: string[];
  avatar: string;
}

export interface Feature {
  name: string;
  description: string;
  priority: 'High' | 'Medium' | 'Low';
  effort: 'High' | 'Medium' | 'Low';
  impact: string;
  userStories: string[];
}

export interface Metric {
  name: string;
  before: string;
  after: string;
  change: string;
  timeframe: string;
  visualization: 'line' | 'bar' | 'pie' | 'number';
}

export interface Challenge {
  title: string;
  description: string;
  solution: string;
  outcome: string;
}

export interface Project {
  id: string;
  title: string;
  company: string;
  duration: string;
  category: 'B2B SaaS' | 'Mobile App' | 'E-commerce' | 'Analytics Platform';
  overview: string;
  
  problemStatement: {
    title: string;
    description: string;
    userPainPoints: string[];
    businessImpact: string;
    marketContext: string;
  };
  
  research: {
    methodology: string[];
    userInterviews: number;
    surveys: number;
    usabilityTests: number;
    keyInsights: string[];
    personas: UserPersona[];
  };
  
  solution: {
    approach: string;
    keyFeatures: Feature[];
    userFlows: any[];
    designPrinciples: string[];
    technicalConsiderations: string[];
  };
  
  execution: {
    timeline: any[];
    teamStructure: any[];
    methodology: 'Agile' | 'Lean' | 'Design Sprint';
    challenges: Challenge[];
    iterations: any[];
  };
  
  results: {
    primaryMetrics: Metric[];
    secondaryMetrics: Metric[];
    userFeedback: any[];
    businessImpact: {
      revenue: string;
      retention: string;
      satisfaction: string;
    };
    lessonsLearned: string[];
  };
  
  visuals: {
    hero: string;
    screenshots: string[];
    wireframes: string[];
    prototypes: string[];
    videos: string[];
  };
  
  presentation: {
    workspaceModel: string;
    interactiveElements: string[];
    animationSequence: any[];
    colorScheme: string[];
  };
}

export interface SkillCategory {
  id: string;
  name: string;
  color: string;
  position: [number, number, number];
  skills: Skill[];
}

export interface Skill {
  id: string;
  name: string;
  proficiency: 1 | 2 | 3 | 4 | 5;
  yearsExperience: number;
  certifications: string[];
  projects: string[];
  connections: string[];
  icon: string;
  description: string;
  learningPath: string[];
}

export interface ImpactMetrics {
  career: {
    yearsExperience: number;
    companiesImpacted: number;
    teamsLed: number;
    productsLaunched: number;
  };
  
  business: {
    totalRevenueImpact: string;
    usersImpacted: string;
    churnReduction: string;
    featureAdoption: string;
  };
  
  team: {
    peopleManaged: number;
    crossFunctionalProjects: number;
    mentorshipHours: number;
    processImprovements: number;
  };
  
  innovation: {
    patentsApplied: number;
    processesCreated: number;
    frameworksDeveloped: number;
    speakingEngagements: number;
  };
} 