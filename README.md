# Hoang Huu Bach — Data Engineering & Applied AI

An English portfolio built with Astro and published on GitHub Pages. MHPE and BQuant are the two primary projects. BiodiversityVN is supporting systems work.

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

Website: **[https://h2bach.github.io/](https://h2bach.github.io/)**. Source repository: [h2bach/h2bach.github.io](https://github.com/h2bach/h2bach.github.io).

GitHub Pages uses **GitHub Actions** as its publishing source. The workflow builds and deploys every push to `main`; it can also be started manually from the Actions tab.

After editing the source or replacing the CV, publish updates from this repository:

```powershell
git add .
git commit -m "Update portfolio"
git push
```

Check the deployment workflow in the Actions tab, then confirm the published pages and CV download.

For a differently named repository, set `PORTFOLIO_BASE` to `/<repository-name>/` during the build and update the workflow environment. Internal links use Astro's configured base.

Deployment configuration follows the [official Astro GitHub Pages guide](https://docs.astro.build/en/guides/deploy/github/).

## Included pages

Home, selected work, MHPE, BQuant, BiodiversityVN, research, resume, and a 404 page. Project repository links and publication links lead to external primary material. No backend or credentials are needed for the site.
