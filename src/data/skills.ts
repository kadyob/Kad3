export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  iconName: "Layout" | "Code2" | "Wrench" | "Briefcase";
  skills: {
    name: string;
    level?: string;
    highlight?: boolean;
    description?: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Engineering",
    description: "Building responsive, accessible, and performant user interfaces",
    iconName: "Layout",
    skills: [
      { name: "React / React 19", highlight: true, description: "Component architecture, hooks & modern patterns" },
      { name: "TypeScript", highlight: true, description: "Strict type safety & interface modeling" },
      { name: "JavaScript (ES6+)", highlight: true, description: "Modern standards, async patterns & DOM manipulation" },
      { name: "Tailwind CSS", highlight: true, description: "Utility-first design systems & responsive grids" },
      { name: "HTML5 & Semantic Web", highlight: false, description: "Accessible hierarchy & SEO-ready markup" },
      { name: "Modern CSS / Animations", highlight: false, description: "Flexbox, CSS Grid, Transitions & Keyframes" },
      { name: "Responsive & Adaptive UI", highlight: true, description: "Fluid layouts spanning 320px to 4K displays" },
      { name: "Framer Motion", highlight: false, description: "Micro-interactions, gestures & page transitions" }
    ]
  },
  {
    id: "programming",
    title: "Programming & Logic",
    description: "Core computer science fundamentals and algorithmic problem solving",
    iconName: "Code2",
    skills: [
      { name: "JavaScript / Node.js", highlight: true, description: "Full-stack event-driven runtime environment" },
      { name: "Python", highlight: true, description: "Data manipulation, scripting & backend automation" },
      { name: "Java", highlight: false, description: "Object-oriented design patterns & robust architectures" },
      { name: "C / C++", highlight: false, description: "Low-level system concepts & memory management" },
      { name: "RESTful API Design", highlight: true, description: "Clean endpoint contracts, HTTP status handling & JSON" },
      { name: "Data Structures & Algorithms", highlight: false, description: "Efficient computational time and space complexity" }
    ]
  },
  {
    id: "tools",
    title: "Developer Tools & DevOps",
    description: "Streamlined modern workflow, version control, and cloud deployment",
    iconName: "Wrench",
    skills: [
      { name: "Git & Version Control", highlight: true, description: "Branching strategies, clean commit history & rebase" },
      { name: "GitHub / CI/CD Actions", highlight: true, description: "Automated test runs, releases & pull request reviews" },
      { name: "VS Code & Tooling", highlight: false, description: "Configured debugging, linters & productivity tools" },
      { name: "Figma & UI Prototyping", highlight: true, description: "Wireframing, interactive prototypes & design handoff" },
      { name: "Vercel & Cloud Deploy", highlight: true, description: "Serverless edge networks & instant deployments" },
      { name: "npm / Vite / Bundlers", highlight: false, description: "Package ecosystems, esbuild & module bundling" }
    ]
  },
  {
    id: "professional",
    title: "Professional & Creative Competencies",
    description: "Holistic problem-solving, creative vision, and dependable team execution",
    iconName: "Briefcase",
    skills: [
      { name: "Creative Problem Solving", highlight: true, description: "Deconstructing complex blockers into actionable solutions" },
      { name: "Clear Technical Communication", highlight: true, description: "Translating engineering concepts into business value" },
      { name: "Collaborative Teamwork", highlight: false, description: "Cross-functional synergy with designers and managers" },
      { name: "Creative Direction & Aesthetics", highlight: true, description: "Balance of visual beauty, UX flow and technical feasibility" },
      { name: "Project & Task Management", highlight: false, description: "Milestone planning, prioritization & timely delivery" },
      { name: "Continuous Learning Mindset", highlight: true, description: "Rapid adaptation to evolving web tech and industry best practices" }
    ]
  }
];
