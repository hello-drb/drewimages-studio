import { defineConfig } from 'astro/config';
import { fileURLToPath } from 'node:url';
import tailwind from 'tailwindcss';
import autoprefixer from 'autoprefixer';

export default defineConfig({
  site: 'https://www.drewimages.studio',
  // Pages build to work.html, work/artists.html, etc. Vercel serves them at /work, /work/artists (cleanUrls).
  trailingSlash: 'never',
  build: { format: 'file' },
  vite: {
    css: {
      // Tailwind 3 (the version the old site loaded from its CDN), pointed at its config so it works from any directory.
      postcss: {
        plugins: [tailwind({ config: fileURLToPath(new URL('./tailwind.config.mjs', import.meta.url)) }), autoprefixer()],
      },
    },
  },
});
