export interface Award {
  title: string;
  rank: string;
  competition: string;
  organizer: string;
  year: number;
  participants: string;
}

export const awardsData: Award[] = [
  {
    title: "Code2Create Spring 2018",
    rank: "3rd",
    competition: "Association for Computing Machinery with IBM",
    organizer: "VIT Vellore",
    year: 2018,
    participants: "500+ teams"
  },
  {
    title: "National Case Study Competition",
    rank: "16th",
    competition: "Business Hub",
    organizer: "Business Hub",
    year: 2021,
    participants: "1100+ teams"
  },
  {
    title: "Aditya Birla Group Avance",
    rank: "National Semi-Finalist",
    competition: "Aditya Birla Group",
    organizer: "Aditya Birla Group",
    year: 2021,
    participants: "1000+ participants"
  },
  {
    title: "TechnoConnect'17",
    rank: "1st",
    competition: "White Paper Presentation",
    organizer: "Johnson Controls Pvt. Ltd., Mumbai",
    year: 2017,
    participants: "1000+ teams"
  },
  {
    title: "Finworld",
    rank: "2nd",
    competition: "Finance-based case study",
    organizer: "Indian Institute of Management, Raipur",
    year: 2021,
    participants: "486 teams"
  },
  {
    title: "Super-Mark-It",
    rank: "1st",
    competition: "Marketing-based case study",
    organizer: "Indian Institute of Management, Lucknow",
    year: 2022,
    participants: "481 teams"
  },
  {
    title: "Mindscapes 2022",
    rank: "1st",
    competition: "Strategy-based case study",
    organizer: "Xavier School of Management (XLRI), Delhi",
    year: 2022,
    participants: "250 teams"
  },
  {
    title: "Last Marketeer Standing 2021",
    rank: "National Finalist",
    competition: "Marketing case competition",
    organizer: "Narsee Monjee (NMIMS), Mumbai",
    year: 2021,
    participants: "766 teams"
  },
  {
    title: "Opheria'22",
    rank: "3rd",
    competition: "Operations based case study",
    organizer: "IIM, Bodh Gaya",
    year: 2022,
    participants: "260 teams"
  }
]; 