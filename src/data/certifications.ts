export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  url?: string;
  badgeType: "Meta" | "Google" | "AWS" | "IBM" | "FreeCodeCamp" | "General";
  topics: string[];
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta / Coursera",
    date: "2024",
    credentialId: "META-FED-884920",
    url: "https://www.coursera.org",
    badgeType: "Meta",
    topics: ["React", "JavaScript", "HTML5/CSS3", "UI/UX Design", "Version Control", "Jest Testing"]
  },
  {
    id: "cert-2",
    title: "Google UX Design Professional Certificate",
    issuer: "Google",
    date: "2024",
    credentialId: "GGL-UX-773104",
    url: "https://grow.google/certificates/ux-design",
    badgeType: "Google",
    topics: ["User Research", "Wireframing", "Figma", "Design Systems", "Usability Testing", "Accessibility"]
  },
  {
    id: "cert-3",
    title: "Responsive Web Design & Modern JavaScript",
    issuer: "freeCodeCamp",
    date: "2023",
    credentialId: "FCC-RWD-551029",
    url: "https://www.freecodecamp.org",
    badgeType: "FreeCodeCamp",
    topics: ["Semantic HTML", "CSS Flexbox & Grid", "Algorithms", "ES6+ Standards", "DOM Manipulation"]
  },
  {
    id: "cert-4",
    title: "Full-Stack Software Engineering Foundations",
    issuer: "Open Source Tech Academy",
    date: "2023",
    credentialId: "OSTA-SE-449182",
    url: "#",
    badgeType: "General",
    topics: ["Data Structures", "Python", "REST Architecture", "Git & GitHub", "Cloud Deployments"]
  }
];
