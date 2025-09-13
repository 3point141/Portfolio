import type { CareerExperience } from '../types/portfolio';

export const careerData: CareerExperience[] = [
  {
    id: "current-role",
    company: "Incubyte Consulting LLP",
    role: "Product Manager",
    duration: "Mar 2023 – Current",
    location: "US Healthcare",
    type: "corporate",
    teamSize: 8,
    responsibilities: [
      "Scale 5 healthcare products (Check-in, Arrive, Telehealth, Payments, Kiosks) to enable 1M+ patient interactions annually",
      "Lead cross-functional teams to deliver HIPAA-compliant, user-centric solutions",
      "Drive each product's North Star metric adoption and business impact",
      "Design and implement patient experience improvements across multiple touchpoints",
      "Manage product roadmap and feature prioritization for healthcare workflows",
      "Collaborate with clinical teams and stakeholders on product requirements"
    ],
    achievements: [
      {
        metric: "Patient Interactions",
        value: "1M+",
        impact: "Annual patient interactions enabled across 5 products",
        icon: "users",
        animationType: "counter"
      },
      {
        metric: "Visual Evidence Uploads",
        value: "40K+",
        impact: "Uploads in first month of Check-in App launch",
        icon: "upload",
        animationType: "counter"
      },
      {
        metric: "Wait Time Reduction",
        value: "20%",
        impact: "Reduced patient wait times through Dynamic Form Collection",
        icon: "clock",
        animationType: "bar"
      },
      {
        metric: "Payment Visibility",
        value: "100%",
        impact: "Transaction visibility improvement for Pay at Front Desk",
        icon: "eye",
        animationType: "pie"
      },
      {
        metric: "Drop-off Reduction",
        value: "15%",
        impact: "Reduced appointment drop-offs with Late Arrival Override",
        icon: "trending-down",
        animationType: "bar"
      },
      {
        metric: "Team Velocity",
        value: "25%",
        impact: "Boosted team velocity over 4 sprints",
        icon: "zap",
        animationType: "line"
      }
    ],
    technologies: ["HIPAA Compliance", "Healthcare APIs", "SMS/Email Systems", "Payment Processing", "Queue Management", "Agile", "Jira", "Figma"],
    environment: {
      model: "healthcare-office.glb",
      atmosphere: "clinical",
      colors: ["#0f172a", "#1e293b", "#334155"]
    },
    transitionStory: "Leading digital transformation in healthcare through patient-centric product solutions"
  },
  {
    id: "vodafone-role",
    company: "VOIS VODAFONE",
    role: "Product Manager",
    duration: "Jun 2023 – Mar 2025",
    location: "Business Operations and Transformation",
    type: "enterprise",
    teamSize: 12,
    responsibilities: [
      "Launch Vodafone E-SIM Support System across 45+ European countries",
      "Lead development of inventory management tool for M&A activities (Vodafone UK & Three UK)",
      "Integrate customer feedback into agile sprints and drive data-driven prioritization",
      "Coordinate engineering and design teams for multi-language support rollout",
      "Conduct competitive analysis and map user journeys for product roadmap",
      "Optimize resource allocation strategies and reduce operational redundancies"
    ],
    achievements: [
      {
        metric: "European Markets",
        value: "45+",
        impact: "Countries covered by E-SIM support system",
        icon: "globe",
        animationType: "counter"
      },
      {
        metric: "NPS Improvement",
        value: "8%",
        impact: "Customer service and NPS improvement in six months",
        icon: "trending-up",
        animationType: "bar"
      },
      {
        metric: "Time-to-Market",
        value: "10%",
        impact: "Accelerated time-to-market through agile integration",
        icon: "clock",
        animationType: "bar"
      },
      {
        metric: "Feature Adoption",
        value: "7%",
        impact: "Increased feature adoption through stakeholder alignment",
        icon: "users",
        animationType: "pie"
      },
      {
        metric: "Business Value",
        value: "€3M",
        impact: "Created through inventory management tool for M&A",
        icon: "dollar-sign",
        animationType: "counter"
      },
      {
        metric: "Cost Savings",
        value: "8%",
        impact: "Achieved through resource optimization",
        icon: "trending-down",
        animationType: "bar"
      }
    ],
    technologies: ["E-SIM Technology", "M&A Systems", "Multi-language Support", "Agile", "Stakeholder Management", "Competitive Analysis", "Resource Optimization"],
    environment: {
      model: "telecom-office.glb",
      atmosphere: "enterprise",
      colors: ["#1a1a2e", "#16213e", "#0f3460"]
    },
    transitionStory: "Led digital transformation initiatives across European markets and M&A operations"
  },
  {
    id: "oracle-role",
    company: "Oracle India Pvt. Ltd.",
    role: "Applications Engineer 1",
    duration: "Jun 2019 – Jul 2021",
    location: "Aconex – Construction and Engineering",
    type: "enterprise",
    teamSize: 4,
    responsibilities: [
      "Design and implement performance optimization features and APIs for B2B SaaS product",
      "Lead revamp of core application components and deploy updates globally",
      "Collaborate with 4 cross-functional teams to resolve complex technical challenges",
      "Conceptualize and implement microservice architecture for improved scalability",
      "Devise and execute end-to-end automated CI/CD testing strategies",
      "Refactor legacy codebases to align with best practices and reduce technical debt"
    ],
    achievements: [
      {
        metric: "Product Efficiency",
        value: "20%",
        impact: "Increased enterprise SaaS product efficiency",
        icon: "trending-up",
        animationType: "bar"
      },
      {
        metric: "User Satisfaction",
        value: "10%",
        impact: "Boosted user satisfaction through core component revamp",
        icon: "smile",
        animationType: "bar"
      },
      {
        metric: "Technical Solutions",
        value: "15",
        impact: "Actionable technical solutions delivered",
        icon: "wrench",
        animationType: "counter"
      },
      {
        metric: "Development Time",
        value: "15%",
        impact: "Reduced development time through microservice architecture",
        icon: "clock",
        animationType: "bar"
      },
      {
        metric: "Bug Detection",
        value: "25%",
        impact: "Accelerated critical bug detection through CI/CD automation",
        icon: "search",
        animationType: "bar"
      },
      {
        metric: "Technical Debt",
        value: "10%",
        impact: "Lowered technical debt through code refactoring",
        icon: "trending-down",
        animationType: "bar"
      }
    ],
    technologies: ["B2B SaaS", "Microservices", "CI/CD", "API Development", "Performance Optimization", "Legacy Refactoring", "Automated Testing", "Global Deployment"],
    environment: {
      model: "oracle-office.glb",
      atmosphere: "technical",
      colors: ["#2d3748", "#4a5568", "#718096"]
    },
    transitionStory: "Built foundation in enterprise software development and technical architecture"
  }
]; 