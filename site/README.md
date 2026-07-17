# rachelkhoza.dev — Portfolio

Lead DevSecOps / Cloud Security Engineer portfolio. Static Astro site, Tailwind for styling, Markdown for blog content. Deploys as flat HTML to Netlify, GitHub Pages, Cloudflare Pages, or any static host.

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

## Deploy to Netlify

1. Push this repo to GitHub (`github.com/RachelKhoza/MyPortfolio`).
2. In Netlify -> **Add new site** -> **Import an existing project** -> connect the GitHub repo.
3. Build settings:
   - **Framework preset:** Astro
   - **Base directory:** `site`
   - **Build command:** `npm ci && npm run build`
   - **Publish directory:** `dist` (Netlify resolves this inside the `site` base directory)
4. Netlify will also read the root `netlify.toml`, which sets the same build values and security headers.
5. Add a custom domain (`rachelkhoza.dev` or similar) in **Domain management** once the first deploy is green.

## Deploy to GitHub Pages (alternative)

Push to `main`, then enable GitHub Pages with the `actions/deploy-pages` workflow. Astro has [official docs](https://docs.astro.build/en/guides/deploy/github/).

## Editing content

- **Hero, About, Skills, Experience, Certs** — edit the components under `src/components/`
- **DevOps project catalog** — edit `src/data/devopsProjects.ts`
- **Homepage project preview** — edit `src/components/ProjectsSection.astro`
- **Dedicated project page** — edit `src/pages/devops-projects.astro`
- **Blog posts** — drop a new Markdown file into `src/content/blog/`. Frontmatter: `title`, `description`, `pubDate`, `tags`

## Secrets / env vars

This site doesn't need runtime secrets. The `.env.example` file shows the *pattern* for when you do — never commit `.env`. See the global-gitignore + `~/.zshenv` setup notes for how tokens live always-on without ever touching the repo.

## Updating the CV

The CV PDF lives in `public/RachelKhoza_CV.pdf` and is linked from the Hero "Download CV" button. Drop a new PDF with the same name to update; no other changes needed.
