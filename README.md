# Hoang Huu Bach — Data Engineering & Applied AI

An English portfolio built with Astro and prepared for GitHub Pages. MHPE and BQuant are the two primary projects. BiodiversityVN is supporting systems work.

## Local development

Prerequisites: Node.js 24 and pnpm 11.19.0.

```powershell
pnpm install --frozen-lockfile
pnpm dev
```

Open `http://127.0.0.1:4321/`.

```powershell
pnpm build
pnpm preview
```

The generated website is in `dist/`. Serve that folder with an HTTP server; opening a generated HTML file directly may prevent root-relative assets and navigation from resolving.

## Edit the content

- `src/data/projects.js`: project case studies, experience, and publications.
- `src/pages/index.astro`: homepage and equal project placement.
- `src/pages/research.astro`: education and research introduction.
- `src/pages/resume.astro`: resume and contact page.
- `src/styles/global.css`: typography, colors, and responsive layouts.
- `public/assets/Bach_CV_Analytics.pdf`: downloadable CV. Replace after compiling the accompanying LaTeX source.

## GitHub Pages

This package has **not been published**. It is configured for the GitHub account `h2bach`.

1. Create the repository `h2bach.github.io` on that account.
2. Put **the contents of this portfolio folder** at the repository root, including `.github/`, `pnpm-lock.yaml`, and `pnpm-workspace.yaml`.
3. In **Settings → Pages**, select **GitHub Actions** as the source.
4. Push to `main` or manually start the deployment workflow.
5. Confirm that the deployment succeeds and that the resume PDF downloads at the published URL.

The intended account-site address is `https://h2bach.github.io/`.

For a differently named repository, set `PORTFOLIO_BASE` to `/<repository-name>/` during the build and update the workflow environment. Internal links use Astro's configured base.

Deployment configuration follows the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Included pages

Home, selected work, MHPE, BQuant, BiodiversityVN, research, resume, and a 404 page. Project repository links and publication links lead to external primary material. No backend or credentials are needed for the site.
