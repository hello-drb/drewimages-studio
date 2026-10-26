import type { APIRoute } from 'astro';
import { WORK_CATEGORIES } from '../data/content';
import { CASE_STUDIES } from '../data/case-studies';

const SITE = 'https://www.drewimages.studio';

export const GET: APIRoute = () => {
  const paths = [
    '/',
    '/work',
    ...CASE_STUDIES.filter((c) => c.published).map((c) => `/work/${c.slug}`),
    ...WORK_CATEGORIES.map((c) => `/work/${c.id}`),
    '/services',
    '/about',
    '/contact',
  ];
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths.map((p) => `  <url><loc>${SITE}${p === '/' ? '/' : p}</loc></url>`).join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
