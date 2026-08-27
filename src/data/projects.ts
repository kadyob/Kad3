export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  accentColor?: string;
  technologies: string[];
  github?: string;
  live?: string;
  featured: boolean;
  metrics?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "ApexFlow SaaS Management Platform",
    category: "Full-Stack Web Application",
    description:
      "Enterprise digital workspace suite featuring real-time operational analytics, customizable project boards, team collaboration channels, and automated workflow orchestrations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-blue-600 to-indigo-700",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "REST APIs"],
    github: "https://github.com/usmanmuhammad2563/apexflow-platform",
    live: "https://apexflow-demo.vercel.app",
    featured: true,
    metrics: "45% faster dashboard throughput",
  },
  {
    id: 2,
    title: "Nova Commerce Multi-Vendor Portal",
    category: "E-Commerce & Digital Storefront",
    description:
      "High-conversion e-commerce ecosystem built with modular catalog browsing, lightning-fast instant search, unified cart state, and frictionless payment flow integration.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-sky-500 to-blue-600",
    technologies: ["React", "Tailwind CSS", "Stripe API", "State Machine", "Framer Motion"],
    github: "https://github.com/usmanmuhammad2563/nova-commerce",
    live: "https://nova-commerce.vercel.app",
    featured: true,
    metrics: "99.8% Lighthouse performance score",
  },
  {
    id: 3,
    title: "Synapse Creative Studio Design System",
    category: "UI/UX & Interactive Design",
    description:
      "Comprehensive digital brand kit and design system library with 50+ accessible tokens, interactive component specimens, and automated dark/light token sync.",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-blue-500 to-cyan-600",
    technologies: ["Figma", "React", "Tailwind CSS", "Storybook", "WCAG 2.2 AA"],
    github: "https://github.com/usmanmuhammad2563/synapse-design-system",
    live: "https://synapse-studio.vercel.app",
    featured: true,
    metrics: "100% WCAG 2.2 AA Accessibility",
  },
  {
    id: 4,
    title: "PulseMetrics Cloud Monitoring Dashboard",
    category: "Cloud & Dev Tooling",
    description:
      "Interactive infrastructure telemetry monitor visualizing microservice latencies, container memory utilization, network throughput, and real-time incident alerting.",
    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-indigo-600 to-blue-700",
    technologies: ["React", "D3.js / Recharts", "Tailwind CSS", "WebSockets"],
    github: "https://github.com/usmanmuhammad2563/pulsemetrics-dashboard",
    live: "https://pulsemetrics-app.vercel.app",
    featured: false,
    metrics: "Sub-50ms render latency",
  },
  {
    id: 5,
    title: "OmniNote Collaborative Knowledge Base",
    category: "Productivity & Web Application",
    description:
      "Markdown-first intelligent notes and document editor with offline-first indexing, bi-directional cross-referencing, semantic search, and instantaneous multi-device sync.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-blue-600 to-blue-800",
    technologies: ["React", "TypeScript", "IndexedDB", "Tailwind CSS"],
    github: "https://github.com/usmanmuhammad2563/omninote-app",
    live: "https://omninote-app.vercel.app",
    featured: false,
    metrics: "Offline-ready PWA support",
  },
  {
    id: 6,
    title: "VividBrand Creative Agency Portfolio Suite",
    category: "Branding & Web Presence",
    description:
      "Bespoke brand showcase and client acquisition site featuring fluid viewport typography, interactive case studies, dynamic project filters, and optimized lead capture.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?auto=format&fit=crop&w=1200&q=80",
    accentColor: "from-slate-800 to-blue-900",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "SEO Architecture"],
    github: "https://github.com/usmanmuhammad2563/vividbrand-agency",
    live: "https://vividbrand-agency.vercel.app",
    featured: false,
    metrics: "100/100 Core Web Vitals",
  }
];
