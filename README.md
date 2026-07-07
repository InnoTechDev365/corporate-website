Nexus Consulting — B2B Corporate Website
A production-ready corporate website template built for professional services and consulting firms. Clean, fast, and fully animated — designed to convert enterprise prospects into qualified leads.

Live demo: innotechdev365.github.io/corporate-website



What's inside
Six fully built pages, each with its own purpose and personality:

Page	What it does
Home	Hero with animated headline, social proof counters, ROI calculator, and a callback modal
About	Company story, leadership team, values, and culture section
Services	Six service cards with descriptions and individual learn-more flows
Case Studies	Industry-filtered portfolio with measurable outcomes and client results
Press Center	Featured story, press release archive, and media contact info
Contact	Consultation request form, office locations, and interactive callback widget
Using this as a template
This project is intentionally structured to be forked and rebranded. Here's what to change to make it yours:

Brand name and colors — update artifacts/corporate-site/src/index.css (Tailwind CSS variables) and the NEXUS wordmark in the Navbar component.
Copy and content — each page is a standalone React component under artifacts/corporate-site/src/pages/. No CMS required — just edit the text directly.
Navigation links — artifacts/corporate-site/src/components/layout/Navbar.tsx
Services and case studies — structured as plain TypeScript arrays, easy to swap out.
Base path — if you're deploying to a subdirectory (e.g. GitHub Pages), set BASE_PATH in your CI environment and the Vite config picks it up automatically.
Tech stack
React 18 + Vite — fast dev server, optimized production builds
Tailwind CSS v4 — utility-first styling with a clean design system
Framer Motion — page transitions, scroll-triggered animations, staggered reveals
shadcn/ui — accessible, composable UI primitives
Wouter — lightweight client-side routing (3 KB vs React Router's 50 KB)
Lucide React — consistent icon set throughout
pnpm workspaces — monorepo with a shared API server alongside the frontend
Getting started
# Clone the repo
git clone https://github.com/InnoTechDev365/corporate-website.git
cd corporate-website
# Install dependencies
pnpm install
# Start the dev server
pnpm --filter @workspace/corporate-site run dev

The site will be available at http://localhost:5173.

Deploying
The repo includes a GitHub Actions workflow that builds and deploys to GitHub Pages on every push to main. No manual steps needed — just push and the CI handles the rest.

To deploy elsewhere (Vercel, Netlify, any static CDN), the build output lands in artifacts/corporate-site/dist/public after running:

pnpm --filter @workspace/corporate-site run build

Project structure
artifacts/
  corporate-site/         # React + Vite frontend
    src/
      pages/              # One file per page (Home, About, Services, ...)
      components/
        layout/           # Navbar, Footer
        sections/         # Reusable sections (AnimatedCounter, ROICalculator, ...)
        ui/               # shadcn/ui primitives
  api-server/             # Express API (contact form backend, etc.)
lib/                      # Shared TypeScript utilities
.github/workflows/
  deploy.yml              # GitHub Pages CI/CD
