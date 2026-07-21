# rachelkhoza.dev — Portfolio

Lead DevSecOps / Cloud Security Engineer portfolio. Static Astro site, Tailwind for styling, Markdown for blog content. Deploys as flat HTML to Vercel.

## Stack

- **Astro 4** — static site generator
- **Tailwind CSS 3** with `@tailwindcss/typography` for prose
- **JetBrains Mono + Inter** webfonts
- **No JavaScript at runtime** other than the optional dark/light toggle — the site renders without JS

## Local dev

```bash
cd site
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # output: ./dist
npm run preview  # serve ./dist locally
```

## Deploy to Vercel

1. Push this repo to GitHub (`github.com/RachelKhoza/MyPortfolio`).
2. In Vercel, import the GitHub repo or deploy from the linked local project.
3. Build settings:
   - **Framework preset:** Astro
   - **Base directory:** `site`
   - **Build command:** `npm ci && npm run build`
   - **Output directory:** `dist`
4. Custom domain: `rachelkhoza.com`.

## Deploy to GitHub Pages (alternative)

Push to `main`, then enable GitHub Pages with the `actions/deploy-pages` workflow. Astro has [official docs](https://docs.astro.build/en/guides/deploy/github/).

## Editing content

- **Hero, About, Skills, Certs** — edit the components under `src/components/`
- **DevOps project catalog** — edit `src/data/devopsProjects.ts`
- **Homepage project preview** — edit `src/components/ProjectsSection.astro`
- **Dedicated project page** — edit `src/pages/devops-projects.astro`
- **Blog posts** — drop a new Markdown file into `src/content/blog/`. Frontmatter: `title`, `description`, `pubDate`, `tags`

## Secrets / env vars

This site doesn't need runtime secrets. The `.env.example` file shows the *pattern* for when you do — never commit `.env`. See the global-gitignore + `~/.zshenv` setup notes for how tokens live always-on without ever touching the repo.

## CV

The public portfolio does not link or publish a CV PDF.
