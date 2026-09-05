# Suhel Ansari — Portfolio

A personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.
## What changed in this redesign

- **Design**: replaced the neon/glassmorphism theme with a restrained dark
   palette (near-black background, one warm accent color), removed the fake
   loading-screen splash, the "100% Verified" badge, and other decorative
   filler.
- **Content**: everything now lives in `src/data/` (`profile.ts`,
  `projects.ts`, `skills.ts`, `certificates.ts`) instead of being hardcoded
  inside components. Edit those files and the whole site updates — no need
  to touch JSX for a text change.
- **Contact form**: it now actually works. Submitting opens a pre-filled
   email in your own mail client addressed to you — no backend required.
   The old version only saved messages to the visitor's browser storage,
   which you'd never see.
- **SQL Query Simulator**: kept and restyled — it's a genuinely functional
   in-browser SQL sandbox tied to the two database-backed projects.
- **Cleanup**: removed unused dependencies (`@google/genai`, `express`,
   `dotenv`, `tsx`) and leftover AI Studio scaffolding that had nothing to
   do with the site.
## Local development

```bash
npm install
npm run dev
```
```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # TypeScript check
```
## Adding your real assets

| Asset | Status | Where it lives |
|---|---|---|
| Profile image | ✅ in place | `public/avatar/avatar.jpg`, rendered in `Hero.tsx` via `profile.avatarUrl` |
| Certificates (5) | ✅ in place | `public/certificates/`, listed in `src/data/certificates.ts` — each has a web-sized `image` thumbnail plus the original `pdf` for a full-resolution view |
| Resume PDF | ⬜ not added yet | drop it in `public/resume/`, then set `resumeUrl` in `src/data/profile.ts` |
| Project screenshots | ⬜ not added yet | drop them in `public/projects/`, then add an `image` field to the `Project` type in `src/data/projects.ts` and use it in `Projects.tsx` |

Once you have the real repo URLs for the Library Manager and Order
Management projects, add them to the `github` field in
`src/data/projects.ts` — right now those two only show a description and
tags because linking to your GitHub *profile* instead of the actual repo
would be misleading.

**Note on the profile image:** the file you provided is a stylized
character illustration rather than a photo of you. It's in place as
asked, but worth knowing that for a portfolio aimed at recruiters, a real
headshot generally reads as more credible than an avatar/character image
— swap it any time by replacing `public/avatar/avatar.jpg`.

## Connecting a real backend (Supabase)

This is a static site right now — there's no database, so editing content
means editing the files in `src/data/`. That's genuinely fine for a
portfolio at this size, but if you want a proper admin panel where you can
add/edit projects and certificates without touching code, here's the path:

1. Create a project at [supabase.com](https://supabase.com) (free tier is enough).
2. Create tables mirroring the shapes already in `src/data/` — `projects`,
   `certificates`, `skills`, `education`, `experience` — with columns
   matching each interface's fields.
3. Add Storage buckets for certificate files and your resume, with public
   read access and authenticated write access.
4. Set Row Level Security so `SELECT` is public but `INSERT`/`UPDATE`/
   `DELETE` require an authenticated session (Supabase Auth, email/password
   is enough for a single admin user).
5. Add `@supabase/supabase-js`, create a `src/lib/supabase.ts` client using
   `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` from `.env.example`, and
   replace the static imports in each component (e.g.
   `import { projects } from "../data/projects"`) with a `useEffect` fetch
   from the corresponding table.
6. Build a `/admin` route with a login form and simple CRUD forms for each
   table. Protect the route by checking `supabase.auth.getSession()` — an
   unauthenticated visitor should be redirected, not just hidden via CSS.

I didn't build this now because it needs your own Supabase account and
credentials, which I don't have — but the data layer is already structured
so this is a fairly mechanical swap rather than a rewrite.

## Deployment

The site is a static build (`npm run build` → `dist/`), so it deploys to
Vercel, Netlify, GitHub Pages, or Cloudflare Pages with no server-side
configuration. On Vercel/Netlify: framework preset "Vite", build command
`npm run build`, output directory `dist`.
<<<<<<< HEAD
# Portfolio
Who Am I
=======
# Suhel Ansari — Portfolio

A personal portfolio built with React, TypeScript, Vite, and Tailwind CSS.

## What changed in this redesign

- **Design**: replaced the neon/glassmorphism theme with a restrained dark
  palette (near-black background, one warm accent color), removed the fake
  loading-screen splash, the "100% Verified" badge, and other decorative
  filler.
- **Content**: everything now lives in `src/data/` (`profile.ts`,
  `projects.ts`, `skills.ts`, `certificates.ts`) instead of being hardcoded
  inside components. Edit those files and the whole site updates — no need
  to touch JSX for a text change.
- **Contact form**: it now actually works. Submitting opens a pre-filled
  email in your own mail client addressed to you — no backend required.
  The old version only saved messages to the visitor's browser storage,
  which you'd never see.
- **SQL Query Simulator**: kept and restyled — it's a genuinely functional
  in-browser SQL sandbox tied to the two database-backed projects.
- **Cleanup**: removed unused dependencies (`@google/genai`, `express`,
  `dotenv`, `tsx`) and leftover AI Studio scaffolding that had nothing to
  do with the site.

## Local development

```bash
npm install
npm run dev
```

```bash
npm run build     # production build to dist/
npm run preview   # preview the production build locally
npm run lint       # TypeScript check
```

## Adding your real assets

| Asset | Status | Where it lives |
|---|---|---|
| Profile image | ✅ in place | `public/avatar/avatar.jpg`, rendered in `Hero.tsx` via `profile.avatarUrl` |
| Certificates (5) | ✅ in place | `public/certificates/`, listed in `src/data/certificates.ts` — each has a web-sized `image` thumbnail plus the original `pdf` for a full-resolution view |
| Resume PDF | ⬜ not added yet | drop it in `public/resume/`, then set `resumeUrl` in `src/data/profile.ts` |
| Project screenshots | ⬜ not added yet | drop them in `public/projects/`, then add an `image` field to the `Project` type in `src/data/projects.ts` and use it in `Projects.tsx` |

Once you have the real repo URLs for the Library Manager and Order
Management projects, add them to the `github` field in
`src/data/projects.ts` — right now those two only show a description and
tags because linking to your GitHub *profile* instead of the actual repo
would be misleading.

**Note on the profile image:** the file you provided is a stylized
character illustration rather than a photo of you. It's in place as
asked, but worth knowing that for a portfolio aimed at recruiters, a real
headshot generally reads as more credible than an avatar/character image
— swap it any time by replacing `public/avatar/avatar.jpg`.

## Connecting a real backend (Supabase)

This is a static site right now — there's no database, so editing content
means editing the files in `src/data/`. That's genuinely fine for a
portfolio at this size, but if you want a proper admin panel where you can
add/edit projects and certificates without touching code, here's the path:

1. Create a project at [supabase.com](https://supabase.com) (free tier is enough).
2. Create tables mirroring the shapes already in `src/data/` — `projects`,
   `certificates`, `skills`, `education`, `experience` — with columns
   matching each interface's fields.
3. Add Storage buckets for certificate files and your resume, with public
   read access and authenticated write access.
4. Set Row Level Security so `SELECT` is public but `INSERT`/`UPDATE`/
   `DELETE` require an authenticated session (Supabase Auth, email/password
   is enough for a single admin user).
5. Add `@supabase/supabase-js`, create a `src/lib/supabase.ts` client using
   `VITE_SUPABASE_URL` / `VITE_SUPABASE_ANON_KEY` from `.env.example`, and
   replace the static imports in each component (e.g.
   `import { projects } from "../data/projects"`) with a `useEffect` fetch
   from the corresponding table.
6. Build a `/admin` route with a login form and simple CRUD forms for each
   table. Protect the route by checking `supabase.auth.getSession()` — an
   unauthenticated visitor should be redirected, not just hidden via CSS.

I didn't build this now because it needs your own Supabase account and
credentials, which I don't have — but the data layer is already structured
so this is a fairly mechanical swap rather than a rewrite.

## Deployment

The site is a static build (`npm run build` → `dist/`), so it deploys to
Vercel, Netlify, GitHub Pages, or Cloudflare Pages with no server-side
configuration. On Vercel/Netlify: framework preset "Vite", build command
`npm run build`, output directory `dist`.
>>>>>>> 0e06933 (Initial portfolio project)
