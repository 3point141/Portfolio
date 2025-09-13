import type { CareerExperience } from '../types/portfolio';

export const careerData: CareerExperience[] = [
  {
    id: "current-role",
    company: "TechCorp Inc.",
    role: "Senior Product Manager",
    duration: "2022-Present",
    location: "San Francisco, CA",
    type: "corporate",
    teamSize: 12,
    responsibilities: [
      "Lead product strategy for B2B SaaS platform serving 50k+ users",
      "Manage cross-functional team of 12 engineers, designers, and analysts",
      "Drive product roadmap and feature prioritization using data-driven insights",
      "Collaborate with Sales and Customer Success on go-to-market strategies",
      "Establish product analytics framework and KPIs",
      "Conduct user research and competitive analysis"
    ],
    achievements: [
      {
        metric: "User Growth",
        value: "150%",
        impact: "Increased monthly active users from 20k to 50k",
        icon: "trending-up",
        animationType: "counter"
      },
      {
        metric: "Revenue Impact",
        value: "$2.3M",
        impact: "Annual recurring revenue increase",
        icon: "dollar-sign",
        animationType: "counter"
      },
      {
        metric: "Feature Adoption",
        value: "85%",
        impact: "New feature adoption rate within 90 days",
        icon: "users",
        animationType: "pie"
      },
      {
        metric: "Customer Satisfaction",
        value: "4.8/5",
        impact: "NPS score improvement from 6 to 32",
        icon: "star",
        animationType: "bar"
      }
    ],
    technologies: ["Amplitude", "Mixpanel", "Figma", "Jira", "Slack", "SQL", "Python", "Tableau"],
    environment: {
      model: "modern-office.glb",
      atmosphere: "corporate",
      colors: ["#0f172a", "#1e293b", "#334155"]
    },
    transitionStory: "Joined to scale product from PMF to growth stage"
  },
  {
    id: "startup-role",
    company: "InnovateTech",
    role: "Product Manager",
    duration: "2020-2022",
    location: "San Francisco, CA",
    type: "startup",
    teamSize: 8,
    responsibilities: [
      "Launched mobile app from concept to 100K downloads",
      "Built and mentored 8-person product team",
      "Secured $2M in funding through compelling product vision",
      "Established product-market fit through user research",
      "Implemented agile development processes",
      "Managed partnerships with key stakeholders"
    ],
    achievements: [
      {
        metric: "App Downloads",
        value: "100K+",
        impact: "Achieved 100K downloads within 12 months",
        icon: "download",
        animationType: "counter"
      },
      {
        metric: "Funding Raised",
        value: "$2M",
        impact: "Series A funding secured",
        icon: "dollar-sign",
        animationType: "counter"
      },
      {
        metric: "App Store Rating",
        value: "4.8★",
        impact: "Consistently high user satisfaction",
        icon: "star",
        animationType: "bar"
      },
      {
        metric: "User Retention",
        value: "65%",
        impact: "Day 30 retention rate",
        icon: "users",
        animationType: "line"
      }
    ],
    technologies: ["Figma", "Amplitude", "Firebase", "React Native", "Node.js", "MongoDB"],
    environment: {
      model: "startup-office.glb",
      atmosphere: "creative",
      colors: ["#1a1a2e", "#16213e", "#0f3460"]
    },
    transitionStory: "Moved to larger company to scale impact and work on enterprise products"
  },
  {
    id: "first-role",
    company: "DataFlow Analytics",
    role: "Associate Product Manager",
    duration: "2018-2020",
    location: "San Francisco, CA",
    type: "scale-up",
    teamSize: 5,
    responsibilities: [
      "Contributed to 3 successful product launches",
      "Conducted user research with 500+ participants",
      "Improved conversion rates by 25% through A/B testing",
      "Collaborated with engineering teams using Agile methodologies",
      "Analyzed product metrics and user behavior data",
      "Created product requirements and user stories"
    ],
    achievements: [
      {
        metric: "Products Launched",
        value: "3",
        impact: "Successful product launches",
        icon: "rocket",
        animationType: "counter"
      },
      {
        metric: "Conversion Rate",
        value: "25%",
        impact: "Improvement through A/B testing",
        icon: "trending-up",
        animationType: "bar"
      },
      {
        metric: "User Research",
        value: "500+",
        impact: "Participants interviewed",
        icon: "users",
        animationType: "counter"
      },
      {
        metric: "Feature Adoption",
        value: "78%",
        impact: "Average feature adoption rate",
        icon: "check-circle",
        animationType: "pie"
      }
    ],
    technologies: ["Google Analytics", "Hotjar", "Sketch", "Jira", "Confluence", "SQL"],
    environment: {
      model: "scaleup-office.glb",
      atmosphere: "collaborative",
      colors: ["#2d3748", "#4a5568", "#718096"]
    },
    transitionStory: "Joined startup to have more impact and build products from ground up"
  }
]; 