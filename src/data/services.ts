export interface Service {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  iconName: "Code" | "Palette" | "Terminal" | "Sparkles";
  description: string;
  technologies: string[];
  deliverables: string[];
}

export const services: Service[] = [
  {
    id: "web-development",
    number: "01",
    title: "Web Development",
    subtitle: "High-performance websites & applications",
    iconName: "Code",
    description:
      "Modern, responsive websites and web applications built with clean, maintainable technologies, optimized for speed, accessibility, and high conversion.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "REST APIs", "Vite", "Node.js"],
    deliverables: [
      "Custom responsive single-page & full-stack web applications",
      "Interactive dynamic user interfaces with fluid state management",
      "API integrations, authentication flows & third-party hooks",
      "SEO, Core Web Vitals & WCAG 2.2 AA accessibility optimization"
    ]
  },
  {
    id: "ui-ux-design",
    number: "02",
    title: "UI/UX & Creative Design",
    subtitle: "Intuitive, human-centered interfaces",
    iconName: "Palette",
    description:
      "Clean and intuitive interfaces designed around usability, visual hierarchy, and modern digital experiences that turn visitors into loyal users.",
    technologies: ["Figma", "Design Systems", "Wireframing", "Interaction Design", "Prototyping"],
    deliverables: [
      "End-to-end design systems with reusable components & tokens",
      "Interactive clickable prototypes for rapid stakeholder feedback",
      "User journey mapping, wireframes & high-fidelity mockups",
      "Responsive layout engineering for desktop, tablet, and mobile"
    ]
  },
  {
    id: "software-solutions",
    number: "03",
    title: "Software Solutions",
    subtitle: "Reliable engineering for real-world problems",
    iconName: "Terminal",
    description:
      "Practical software solutions and architecture designed to solve real-world business and productivity challenges with robust reliability.",
    technologies: ["JavaScript", "Python", "Automation", "Modular Architecture", "Cloud Deployments"],
    deliverables: [
      "Business process automation and workflow scripting",
      "Scalable frontend architectures with predictable state flows",
      "Custom dashboard tools and telemetry monitors",
      "Cross-platform integration and third-party data pipelines"
    ]
  },
  {
    id: "digital-creative-services",
    number: "04",
    title: "Digital Creative Services",
    subtitle: "Distinctive branding & interactive visuals",
    iconName: "Sparkles",
    description:
      "Digital content, branding concepts, visual experiences, and technology-driven creative solutions that make your business stand out uniquely.",
    technologies: ["Creative Technologist", "Brand Identity", "Vector Graphics", "Micro-Interactions"],
    deliverables: [
      "Modern brand identity kits and visual guidelines",
      "Engaging micro-animations and interactive web elements",
      "Digital promotional assets and landing page experiences",
      "Creative technical consulting for startups and creators"
    ]
  }
];
