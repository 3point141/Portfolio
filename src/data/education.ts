import type { Education } from '../types/portfolio';

export const educationData: Education[] = [
  {
    id: "mba",
    institution: "Stanford Graduate School of Business",
    degree: "Master of Business Administration",
    field: "Technology Management",
    duration: "2018-2020",
    location: "Stanford, CA",
    gpa: "3.8/4.0",
    achievements: [
      "Dean's List - 4 semesters",
      "Product Strategy Case Competition Winner",
      "Technology Innovation Fellowship",
      "Arjay Miller Scholar",
      "Leadership in Technology Award"
    ],
    relevantCourses: [
      "Product Strategy & Innovation",
      "Data Analytics for Decision Making",
      "Digital Transformation",
      "User Experience Design",
      "Strategic Management",
      "Operations Management",
      "Marketing Strategy",
      "Financial Analysis"
    ],
    projects: [
      "SaaS Platform Market Entry Strategy",
      "Mobile App User Retention Analysis",
      "E-commerce Optimization Study",
      "AI-Powered Product Recommendation Engine"
    ],
    colors: {
      primary: "#8B0000",
      secondary: "#DC143C"
    },
    buildingModel: "stanford-building.glb"
  },
  {
    id: "bachelors",
    institution: "University of California, Berkeley",
    degree: "Bachelor of Science",
    field: "Computer Science & Business Administration",
    duration: "2014-2018",
    location: "Berkeley, CA",
    gpa: "3.9/4.0",
    achievements: [
      "Magna Cum Laude",
      "Regents' Scholar",
      "Computer Science Department Honors",
      "Business Association President",
      "Hackathon Winner - 3x"
    ],
    relevantCourses: [
      "Software Engineering",
      "Data Structures & Algorithms",
      "Database Systems",
      "Machine Learning",
      "Business Strategy",
      "Marketing Principles",
      "Financial Accounting",
      "Organizational Behavior"
    ],
    projects: [
      "Social Media Analytics Platform",
      "E-commerce Recommendation System",
      "Mobile Payment Application",
      "Real-time Data Visualization Dashboard"
    ],
    colors: {
      primary: "#003262",
      secondary: "#FDB515"
    },
    buildingModel: "berkeley-building.glb"
  }
]; 