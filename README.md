# UMK — KADYOB Digital Creator

> **Your Digital Vision, Realized.**  
> Modern personal portfolio and digital agency landing page for UMK / KADYOB DIGITAL CREATOR.

Built for creative technologists, software developers, and digital creators targeting employers, recruiters, freelance clients, startups, businesses, agencies, and collaborators.

---

## ✨ Features

- **High-Performance Architecture**: Single-page architecture powered by React 19, Vite, and Tailwind CSS.
- **Theme Switching**: Dark / Light mode with `localStorage` persistence and `prefers-color-scheme` support.
- **Brand Visual System**: Geometric UMK brand mark, blue-and-white visual identity, and refined typography (Manrope & Inter).
- **Interactive Hero & Visual**: Subtle floating technology mockup and quick-action navigation.
- **Configurable Sections**:
  - **About Me**: Professional philosophy, approach, and configurable key metric cards.
  - **What I Do (Services)**: 4 core service disciplines with deliverable checklists and technology badges.
  - **Skills & Stack**: Grouped categorized skills with filter tabs (Frontend, Programming, Tools, Professional).
  - **Featured Projects**: Filterable project showcase cards with GitHub links, live demos, and hover micro-interactions.
  - **Certifications**: Industry-verified credentials with credential IDs and direct validation links.
  - **Career Experience**: Responsive vertical timeline with milestones and achievements.
  - **Contact & Inquiries**: Validated contact form (React Hook Form) with EmailJS integration support, location, and social links.
- **Accessibility & SEO**: Semantic HTML5, WCAG 2.2 AA compliant contrast, ARIA labels, OpenGraph/Twitter cards, schema.org JSON-LD Person structured data, `robots.txt`, and `sitemap.xml`.
- **Motion & Interactions**: Smooth scroll-spy navigation, back-to-top floating button, and Framer Motion micro-interactions respecting `prefers-reduced-motion`.

---

## 🛠️ Tech Stack

- **Framework**: React 19
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Form Management**: React Hook Form
- **Head & SEO**: React Helmet Async

---

## 🚀 Getting Started

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

Runs the development server on `http://localhost:3000`.

### Production Build

```bash
npm run build
```

Compiles optimized static production assets into `dist/`.

### Preview Production Build

```bash
npm run preview
```

---

## ⚙️ Environment Variables

Copy `.env.example` to `.env` and configure any optional external services:

```env
# Optional EmailJS keys for live contact form delivery
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

*Note: If EmailJS credentials are not supplied, the contact form gracefully operates in simulated mode without throwing errors.*

---

## 📁 Project Customization

All personal data, projects, experience, skills, and certifications are cleanly decoupled in dedicated files for simple editing:

| Configuration File | Content |
|---|---|
| `src/utils/constants.ts` | Brand name, tagline, email, stats, and navigation links |
| `src/data/projects.ts` | Portfolio project catalog, images, GitHub & live URLs |
| `src/data/services.ts` | Service offerings, deliverable checklists, tech stacks |
| `src/data/skills.ts` | Grouped frontend, backend, tools, and professional skills |
| `src/data/experience.ts` | Career timeline history, roles, and achievements |
| `src/data/certifications.ts` | Verified certificates, issuers, credential IDs, and URLs |

---

## 🚢 Deployment

### Vercel
1. Push this repository to GitHub.
2. Import the project in Vercel.
3. Framework Preset: **Vite**.
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. (Optional) Add your environment variables in the Vercel dashboard.
7. Click **Deploy**.

### GitHub Pages
1. In `vite.config.ts`, configure `base: "/umk-portfolio/"` (matching your repository name).
2. Run `npm run build`.
3. Deploy the contents of the `dist/` directory to the `gh-pages` branch or configure GitHub Actions.

---

## 📄 License

© 2026 UMK (KADYOB Digital Creator). All rights reserved.
