### Intel Dashboard

An interactive analytics dashboard built with Next.js App Router for exploring “intel” items by sectors and countries. It includes responsive UI components, charts, and serverless API routes that serve mock data for local development.

### Features

- Interactive dashboard with filtering by sector and country
- Intel list and detail pages with related items
- Charts for sector distribution and country progress
- Route-specific layouts for dashboard and detail pages with dedicated headers
- Serverless API routes under `app/api/*`
- Type-safe development with TypeScript (strict mode)
- Data fetching/cache with @tanstack/react-query
- UI with Ant Design 5 and custom theme
- Tailwind CSS v4 (via `@tailwindcss/postcss`) for utility styling

### Tech Stack

- Next.js 16 (App Router) + React 19, React Compiler enabled
- TypeScript 5 (strict)
- Ant Design 5, Tailwind CSS v4
- @tanstack/react-query v5
- react-chartjs-2 for charts
- ESLint 9 with `eslint-config-next` (core-web-vitals + TypeScript)

### Project Structure

```
app/
  api/
    countries/route.ts          # GET countries metadata
    sectors/route.ts            # GET sectors metadata
    intel/route.ts              # GET intel list (supports filters)
    intel/[id]/route.ts         # GET intel by id
  intl-details/[id]/page.tsx    # Intel details page
  page.tsx                      # Dashboard landing page
  layout.tsx                    # Root layout
  providers/AppProviders.tsx    # React Query, AntD, themes, etc
  globals.css                   # Global styles (Tailwind)
components/
  charts/                       # Sector and country charts
  dashboard/                    # Filters, stats, list
  IntelDetails/                 # Details view components
  layout/
    IntelUpdatesLayout.tsx      # Dashboard shell + default intel header
    IntelDetailsLayout.tsx      # Detail shell + breadcrumbs/actions
  common/                       # Reusable UI bits (cards, states)
data/
  mockIntel.ts                  # Mock dataset used by API routes
types/
  intel.ts                      # Type definitions for intel entities
theme/
  antdTheme.ts                  # Ant Design theme tokens
utils/
  dateUtils.ts                  # Date/time helpers
public/                         # Static assets (icons, flags, images)
```

### Getting Started

Prerequisites:

- Node.js 18+ (recommended 20+)
- pnpm, npm, or yarn

Install dependencies:

```bash
npm install
# or: pnpm install / yarn install
```

Run the development server:

```bash
npm run dev
```

Then open http://localhost:3000

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```

Lint:

```bash
npm run lint
```

### Available Scripts (from package.json)

- `dev`: Start Next.js in development
- `build`: Build the production bundle
- `start`: Start the production server
- `lint`: Run ESLint

### API Overview

All routes are implemented using Next.js App Router route handlers.

- `GET /api/countries` — list available countries (for filters/flags)
- `GET /api/sectors` — list sector options
- `GET /api/intel` — list intel items; supports query params like sector/country
- `GET /api/intel/:id` — intel item details by id

These API routes currently use mock data from `data/mockIntel.ts`. Swap to a real data source by updating the route handlers in `app/api/*`.

### Styling and Theming

- Tailwind CSS v4 is enabled via `postcss.config.mjs` with `@tailwindcss/postcss`
- Ant Design 5 is used for components and layout, themed via `theme/antdTheme.ts`
- Global styles are defined in `app/globals.css`

### Images Configuration

Remote images are allowed from Unsplash (`**.unsplash.com`) as configured in `next.config.ts`. Add additional hosts to `images.remotePatterns` if needed.

### TypeScript and Paths

Strict TypeScript is enabled. You can import from project root via the `@/*` path alias (see `tsconfig.json`).

### React Query

React Query global providers live in `app/providers/AppProviders.tsx`, which also wraps the app with Ant Design's theme/context and applies the base dashboard background. Use its context for data fetching and caching patterns across the app.

### Charts

Charts are implemented with `react-chartjs-2` in `components/charts`. If you add new charts, keep data transforms in UI components minimal and consider extracting to small utilities.

### Quality and Linting

ESLint is configured with Next.js Core Web Vitals and TypeScript rules (`eslint.config.mjs`). Run `npm run lint` before committing.

### Deployment

Live demo: https://intel-dashboard-zeta.vercel.app/

The app targets Node.js and deploys well on platforms like Vercel. Typical flow:

1. `npm run build`
2. `npm run start` (uses Next.js standalone server)
   For Vercel, connect the repository, set the framework to Next.js, and deploy.

### Contributing

1. Create a feature branch
2. Make changes with clear commits
3. Ensure `npm run lint` passes
4. Open a pull request with a brief description and screenshots/GIFs if applicable
