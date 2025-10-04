# Portfolio – Next.js + Tailwind (App Router)

This is a simple portfolio site built with Next.js and Tailwind CSS. It combines community templates (assembled with v0) with custom sections and styles.

## Features

- App Router structure in `app/`
- Tailwind CSS with `tailwindcss-animate`
- Radix UI primitives and shadcn/ui-style components in `components/ui`
- Dark mode via `next-themes`
- Framer Motion animations
- Fully typed with TypeScript

## Requirements

- Node.js 18.18+ (or 20+ recommended)
- npm (default) or pnpm

## Getting Started

1. Install dependencies

   ```bash
   npm install
   # or
   pnpm install
   ```

2. Run the development server

   ```bash
   npm run dev
   # then open http://localhost:3000
   ```

3. Build for production

   ```bash
   npm run build
   ```

4. Start the production server

   ```bash
   npm run start
   ```

5. Lint (optional)

   ```bash
   npm run lint
   ```

## Configuration

No environment variables are required by default. The app should run out of the box.

Notes:

- `next.config.mjs` sets `images.unoptimized: true` so images work without Next Image Optimization (useful for non-Vercel hosts).
- Build is configured to ignore ESLint and TypeScript errors (see `eslint.ignoreDuringBuilds` and `typescript.ignoreBuildErrors`) to avoid blocking builds. Consider tightening these for production.

## Project Structure

```
app/
  globals.css         # global styles
  layout.tsx          # root layout
  page.tsx            # home page
components/
  *.tsx               # site sections (hero, about, projects, etc.)
  ui/*                # shadcn/ui-style components built on Radix UI
hooks/
  use-mobile.tsx
  use-toast.ts
lib/
  utils.ts            # shared utilities
public/
  resume.pdf          # downloadable resume
  placeholder-*.{png,svg,jpg}
styles/
  globals.css         # (optional/legacy) additional global styles
next.config.mjs       # Next.js configuration
tailwind.config.js    # Tailwind configuration
postcss.config.mjs    # PostCSS configuration
tsconfig.json         # TypeScript configuration
```

## Customization

- Edit content in `components/*` (e.g., `hero.tsx`, `about.tsx`, `projects.tsx`).
- Replace images and assets in `public/`.
- Update your resume at `public/resume.pdf`.
- Tweak theme colors via CSS variables and Tailwind tokens in `app/globals.css` and `tailwind.config.js`.

## Deployment

- Vercel: push the repo and import the project. Default settings work.
- Other Node hosts: run `npm run build` then `npm run start` on Node 18.18+.
- Static hosts: image optimization is disabled (`images.unoptimized`), but this app expects a Node server (no `next export` configured).

## Acknowledgements

Built with Next.js, Tailwind CSS, Radix UI, and community templates assembled using v0.

