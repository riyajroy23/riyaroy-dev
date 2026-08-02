# Riya Roy — Portfolio

A personal portfolio site built with React, TypeScript, Tailwind CSS, and shadcn/ui conventions, on Vite.

## Stack
- **React 18 + TypeScript** — component structure, typed resume data in `src/data/resume.ts`
- **Tailwind CSS** — utility-first styling, theme tokens defined as CSS variables in `src/index.css`
- **shadcn/ui conventions** — `Button`, `Badge`, and `Card` primitives in `src/components/ui/`, built with `class-variance-authority` and the standard shadcn `cn()` utility, so they're compatible with the shadcn CLI if you want to add more components later (`npx shadcn@latest add <component>`)
- **Vite** — dev server and build tooling
- **lucide-react** — icons

## Project structure
```
src/
  components/
    ui/            # shadcn-style primitives (button, badge, card)
    Nav.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Projects.tsx
    Publications.tsx
    Skills.tsx
    Education.tsx
    Footer.tsx
    Eyebrow.tsx    # small reusable label component
  data/
    resume.ts      # all resume content, typed
  lib/
    utils.ts       # cn() class-merging helper
  App.tsx
  main.tsx
  index.css        # Tailwind directives + theme variables
```

## Run locally
```bash
npm install
npm run dev
```
Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build
```bash
npm run build
```
Output goes to `dist/`.

## Deploy with GitHub Pages
1. Create a repo and push this project to it.
2. Install the Pages deploy helper:
   ```bash
   npm install --save-dev gh-pages
   ```
3. In `package.json`, add:
   ```json
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
4. In `vite.config.ts`, set `base: "/<repo-name>/"` inside `defineConfig({...})` (skip this if deploying to a root `<username>.github.io` repo).
5. Run:
   ```bash
   npm run deploy
   ```
6. In the repo's **Settings → Pages**, set the source to the `gh-pages` branch.

Alternatively, this builds cleanly on **Vercel** or **Netlify** with zero config — just point either at the repo and the default Vite build command/output (`npm run build` / `dist`) will work.

## Customizing
- **Content**: everything (experience, projects, skills, education, contact info) lives in `src/data/resume.ts` — edit there, not in the components. Hobbies are defined directly in `src/components/Hobbies.tsx`.
- **Colors**: theme tokens are CSS variables in `src/index.css` under `:root`.
  - `--primary` is the signature reddish-pink (`hsl(344 60% 55%)` / `#D1476B`) — used in the hero bounding box, nav underline, primary buttons, and card corner-bracket hover state.
  - `--blush`, `--taupe`, `--sage`, `--olive`, `--forest` are a secondary earthy palette (`#EFD0CA`, `#C1BCAC`, `#979B8D`, `#5C7457`, `#214E34`) used for section eyebrow dots, the About stat strip, the hobbies icon badges, and the "full-stack" project tag (`--accent` is aliased to forest green).
  - Each color has a `-soft` tint variant (e.g. `--blush-soft`) used for light chip/badge backgrounds.
- **Fonts**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data) — loaded via Google Fonts in `index.html`, mapped in `tailwind.config.ts`.
- **Photo**: the hero shows a circular "bounding box" avatar. It looks for `public/profile.jpg` and falls back to an "RR" monogram if that file isn't there yet — see `public/README.md`.
- **Hobbies widget**: `src/components/Hobbies.tsx` — swap icons (from `lucide-react`) or blurbs to match your own interests.
- To add a resume PDF download, add the file to `public/` and link it from `Hero.tsx` / `Footer.tsx`.
