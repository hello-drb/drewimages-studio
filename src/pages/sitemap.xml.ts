// Sitemap with image entries, so the album covers and portraits can show up in image search.
import type { APIRoute } from 'astro';
import { getImage } from 'astro:assets';
import { WORK_CATEGORIES, ALBUM_ARTWORKS, IMAGES } from '../data/content';
import { CASE_STUDIES } from '../data/case-studies';
import { COVER_ISSUES } from '../data/covers';
import { confirmedCredits } from '../data/credits';
import { cld } from '../data/cloudinary';

const SITE = 'https://www.drewimages.studio';

export const GET: APIRoute = async () => {
  const published = CASE_STUDIES.filter((c) => c.published);
  const localCover = async (src: ImageMetadata) => new URL((await getImage({ src, width: 1200, format: 'jpg' })).src, SITE).href;
  const caseCovers = Object.fromEntries(
    await Promise.all(published.filter((c) => c.cover).map(async (c) => [c.slug, await localCover(c.cover!.src)] as const)),
  );
  const cloud = (src: string) => cld(src, 1600);

  const pages: { path: string; images: string[] }[] = [
    { path: '/', images: [...COVER_ISSUES.map((c) => cloud(c.photo.src)), ...ALBUM_ARTWORKS.map((a) => cloud(a.src))] },
    { path: '/work', images: Object.values(caseCovers) },
    ...published.map((c) => ({
      path: `/work/${c.slug}`,
      images: [caseCovers[c.slug], ...(c.bts ? [cloud(c.bts.photo.src)] : []), ...c.images.map((p) => cloud(p.src)), ...(c.more?.images ?? []).map((p) => cloud(p.src))].filter(Boolean),
    })),
    ...WORK_CATEGORIES.map((c) => ({
      path: `/work/${c.id}`,
      images: [cloud(c.cover.src), ...c.gallery.map((g) => cloud(g.src)), ...(c.id === 'artists' ? ALBUM_ARTWORKS.map((a) => cloud(a.src)) : [])],
    })),
    { path: '/credits', images: confirmedCredits().filter((c) => !c.cover.startsWith('local:')).map((c) => cloud(c.cover)) },
    { path: '/services', images: [cloud(IMAGES.serviceIdentity.src)] },
    { path: '/about', images: [cloud(IMAGES.aboutMain.src), cloud(IMAGES.aboutDetail.src)] },
    { path: '/contact', images: [] },
  ];

  const esc = (s: string) => s.replace(/&/g, '&amp;');
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${pages
  .map(
    (p) => `  <url>
    <loc>${SITE}${p.path}</loc>
${[...new Set(p.images)].map((i) => `    <image:image><image:loc>${esc(i)}</image:loc></image:image>`).join('\n')}
  </url>`,
  )
  .join('\n')}
</urlset>
`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
