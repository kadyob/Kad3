export interface ExperienceItem {
  id: string;
  year: string;
  position: string;
  organization: string;
  location: string;
  period: string;
  type: "Full-Time" | "Freelance" | "Contract" | "Independent";
  description: string;
  achievements: string[];
  technologies: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: "exp-1",
    year: "2025 – Present",
    position: "Creative Technologist & Software Developer",
    organization: "KADYOB Digital Creator Studio",
    location: "Remote / Global",
    period: "2025 – Present",
    type: "Independent",
    description:
      "Leading technical architecture, UI/UX design systems, and frontend engineering for startups, businesses, and digital agencies seeking modern web solutions.",
    achievements: [
      "Engineered high-performance web applications using React, TypeScript, and Tailwind CSS",
      "Delivered customized responsive client portals with 100% on-time milestone execution",
      "Integrated secure third-party APIs, authentication providers, and stateful checkout workflows"
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Figma", "Node.js"]
  },
  {
    id: "exp-2",
    year: "2024 – 2025",
    position: "Frontend & Web Application Developer",
    organization: "Digital Solutions & Client Engagements",
    location: "Remote",
    period: "2024 – 2025",
    type: "Freelance",
    description:
      "Partnered with cross-functional teams and entrepreneurs to conceptualize, prototype, and build responsive web experiences and interactive tools.",
    achievements: [
      "Developed modular component libraries adhering to WCAG 2.2 AA accessibility guidelines",
      "Optimized legacy web interfaces resulting in a 40%+ reduction in initial bundle size",
      "Designed and coded responsive single-page applications with seamless cross-device fidelity"
    ],
    technologies: ["JavaScript (ES6+)", "React", "HTML5/CSS3", "REST APIs", "Git/GitHub"]
  },
  {
    id: "exp-3",
    year: "2023 – 2024",
    position: "Software Developer & Digital Creative",
    organization: "Technology Projects & Collaborative Ventures",
    location: "Hybrid",
    period: "2023 – 2024",
    type: "Contract",
    description:
      "Engineered internal dashboard tools, automated routine scripting tasks with Python, and crafted visual brand collateral for growing projects.",
    achievements: [
      "Implemented automated data pipelines and dashboard reporting interfaces",
      "Collaborated closely with stakeholders to translate business goals into technical specifications",
      "Mentored junior developers on Git workflows, semantic HTML, and modern JavaScript practices"
    ],
    technologies: ["Python", "JavaScript", "Tailwind CSS", "UI Design", "VS Code", "Vercel"]
  }
];
