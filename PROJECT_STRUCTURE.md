# StringBuilder Project Structure

**Project:** Fikiri Communication Official Website  
**Repository:** [Washington-Karanja/StringBuilder](https://github.com/Washington-Karanja/StringBuilder)  
**Primary Language:** TypeScript (92.9%) | CSS (3.7%) | JavaScript (3.4%)

---

## Overview

StringBuilder is a Next.js 15 powered website built with React 19, TypeScript, Tailwind CSS, and Supabase. The project follows a standard Next.js application structure with component-driven development.

---

## Directory Structure

```
StringBuilder/
├── .git/                          # Git version control
├── .gitignore                     # Git ignore rules
├── .env                           # Environment variables (local - not committed)
├── .env.example                   # Example environment variables template
│
├── public/                        # Static assets served at root
│   ├── favicon.ico               # Website favicon
│   ├── images/                   # Static images and assets
│   └── ...
│
├── src/                          # Source code root
│   ├── app/                      # Next.js App Router (pages and layouts)
│   │   ├── layout.tsx            # Root layout component
│   │   ├── page.tsx              # Home page (/)
│   │   ├── not-found.tsx         # 404 error page
│   │   └── (routes)/             # Grouped route segments
│   │       ├── about/
│   │       │   └── page.tsx
│   │       ├── services/
│   │       │   └── page.tsx
│   │       ├── contact/
│   │       │   └── page.tsx
│   │       └── [dynamic]/        # Dynamic routes
│   │           └── page.tsx
│   │
│   ├── components/               # Reusable React components
│   │   ├── ui/                   # Shadcn/Radix UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── label.tsx
│   │   │   └── ...
│   │   ├── layout/               # Layout components
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── Navigation.tsx
│   │   │   └── Sidebar.tsx
│   │   ├── sections/             # Page section components
│   │   │   ├── HeroSection.tsx
│   │   │   ├── FeaturesSection.tsx
│   │   │   ├── TestimonialSection.tsx
│   │   │   └── CTASection.tsx
│   │   └── common/               # Common reusable components
│   │       ├── Button.tsx
│   │       ├── Container.tsx
│   │       ├── Loader.tsx
│   │       └── ...
│   │
│   ├── lib/                      # Utility functions and helpers
│   │   ├── supabase.ts           # Supabase client initialization
│   │   ├── utils.ts              # General utility functions
│   │   ├── cn.ts                 # Tailwind class merging utility
│   │   ├── constants.ts          # App constants
│   │   ├── api.ts                # API helper functions
│   │   └── hooks/                # Custom React hooks
│   │       ├── useAuth.ts
│   │       ├── useSupabase.ts
│   │       └── ...
│   │
│   ├── types/                    # TypeScript type definitions
│   │   ├── index.ts              # Main types export
│   │   ├── auth.ts               # Authentication types
│   │   ├── api.ts                # API response types
│   │   ├── database.ts           # Supabase database types
│   │   └── ...
│   │
│   ├── styles/                   # Global styles
│   │   ├── globals.css           # Global CSS (Tailwind directives)
│   │   ├── variables.css         # CSS custom properties
│   │   └── animations.css        # Animation definitions
│   │
│   └── middleware.ts             # Next.js middleware (optional)
│
├── node_modules/                 # Node.js dependencies (not committed)
│
├── .eslintrc.js                  # ESLint configuration
├── .prettierrc.json              # Prettier formatting config
├── .prettierignore                # Prettier ignore rules
│
├── tsconfig.json                 # TypeScript configuration
├── next.config.ts                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── postcss.config.mjs            # PostCSS configuration
│
├── package.json                  # Node.js dependencies and scripts
├── package-lock.json             # Lockfile for dependencies
│
├── .env.local                    # Local environment overrides (not committed)
│
├── README.md                     # Project documentation
├── CONTRIBUTING.md               # Contributing guidelines (if exists)
├── LICENSE                       # License file (if exists)
│
└── .github/                      # GitHub configuration (optional)
    └── workflows/                # CI/CD workflows
        ├── ci.yml
        └── deploy.yml
```

---

## Key Directories Explained

### `/src/app`
Next.js 15 App Router pages and layouts. Each folder with a `page.tsx` becomes a route.

### `/src/components`
Reusable React components organized by category:
- **ui/** - Shadcn-style utility components (Button, Card, Tabs, etc.)
- **layout/** - Header, Footer, Navigation components
- **sections/** - Full page sections (Hero, Features, CTA, etc.)
- **common/** - Shared general-purpose components

### `/src/lib`
Business logic and utilities:
- Supabase client configuration
- Custom hooks (useAuth, useSomething, etc.)
- Helper functions and API calls
- Constants and configuration

### `/src/types`
TypeScript type definitions organized by domain (auth, API, database, etc.)

### `/src/styles`
Global Tailwind CSS, CSS variables, and animation definitions.

### Root Configuration Files
- **tsconfig.json** - TypeScript compiler options
- **next.config.ts** - Next.js app configuration
- **tailwind.config.ts** - Tailwind CSS theme and plugin setup
- **postcss.config.mjs** - PostCSS plugins (Tailwind)
- **.eslintrc.js** - ESLint rules
- **.prettierrc.json** - Code formatting rules

---

## Tech Stack Details

| Layer | Technology |
|-------|------------|
| **Framework** | Next.js 15, React 19 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 4.2 |
| **UI Components** | Radix UI, Shadcn UI primitives |
| **Backend** | Supabase (PostgreSQL + Auth) |
| **Animations** | Motion (framer-motion alternative), tw-animate-css |
| **Icons** | Lucide React |
| **Notifications** | Sonner (toast notifications) |
| **Linting** | ESLint 9.32 + TypeScript support |
| **Formatting** | Prettier 3.7 |
| **Build Tool** | Next.js (built-in Webpack) |
| **Node Version** | LTS recommended |
| **Package Manager** | npm |

---

## Dependencies Summary

### Core Dependencies
```json
{
  "next": "^15.2.0",
  "react": "^19.2.0",
  "react-dom": "^19.2.0",
  "@supabase/supabase-js": "^2.49.1",
  "tailwindcss": "^4.2.1"
}
```

### UI & Component Libraries
```json
{
  "@radix-ui/react-label": "^2.1.8",
  "@radix-ui/react-slot": "^1.2.4",
  "@radix-ui/react-tabs": "^1.1.13",
  "lucide-react": "^0.575.0",
  "sonner": "^2.0.7",
  "clsx": "^2.1.1",
  "class-variance-authority": "^0.7.1",
  "tailwind-merge": "^3.5.0"
}
```

### Animation
```json
{
  "motion": "^12.43.0",
  "tw-animate-css": "^1.3.4"
}
```

### Dev Dependencies
- TypeScript, ESLint, Prettier
- Type definitions (@types/node, @types/react)
- Tailwind plugins (@tailwindcss/postcss)
- Database tools (knex, pg)

---

## Environment Variables

Create a `.env.local` file in the project root with:

```env
# Supabase Configuration
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# Application
NEXT_PUBLIC_API_BASE_URL=https://api.example.com
NODE_ENV=development
```

> **Note:** Never commit `.env` files. Use `.env.example` as a template.

---

## Common Commands

```bash
# Development
npm run dev           # Start dev server (http://localhost:3000)

# Build & Production
npm run build         # Build production bundle
npm start             # Start production server

# Code Quality
npm run lint          # Run ESLint checks
npm run format        # Format code with Prettier

# Optional Commands (to add)
npm test              # Run tests (configure Jest/Vitest)
npm run type-check    # Run TypeScript type checker
npm run analyze       # Analyze bundle size
```

---

## Deployment

**Platform:** [Vercel](https://vercel.com/) (recommended for Next.js)  
**Live:** https://string-builder-9mkv-5zc6266aw-washington-karanjas-projects.vercel.app/

Vercel auto-deploys from the `main` branch.

---

## Development Workflow

1. **Create a branch** for your feature
2. **Develop** using `npm run dev`
3. **Lint & Format** before commit: `npm run lint && npm run format`
4. **Commit** with descriptive messages
5. **Push & Open PR** against `main`
6. **Review & Merge** → Auto-deploys to Vercel

---

## Notes

- This structure follows Next.js 15 App Router conventions
- TypeScript is enforced throughout
- Tailwind CSS + Radix UI provides a consistent design system
- Supabase handles backend services and authentication
- Environment-specific configs are managed via `.env` files
- Python dependencies (if any) are managed with `uv`

---

**Last Updated:** September 2, 2026
