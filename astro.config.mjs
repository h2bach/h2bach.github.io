import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://h2bach.github.io',
  base: process.env.PORTFOLIO_BASE || '/',
  output: 'static',
  trailingSlash: 'always',
  devToolbar: { enabled: false }
});
