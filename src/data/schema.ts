// JSON-LD for search engines and AI assistants. It must match what the page shows.

import { CONTACT, LOGO } from './content';
import { cld } from './cloudinary';

export const SITE = 'https://www.drewimages.studio';
export const STUDIO_ID = `${SITE}/#studio`;
export const WEBSITE_ID = `${SITE}/#website`;
export const DREW_ID = `${SITE}/about#drew`;

export const drew = {
  '@type': 'Person',
  '@id': DREW_ID,
  name: 'Drew Bordeaux',
  jobTitle: 'Creative director, art director and photographer',
  url: 'https://www.drewbordeaux.com/',
  memberOf: { '@type': 'Organization', name: 'Recording Academy' },
  sameAs: ['https://www.drewbordeaux.com/', 'https://www.instagram.com/drewimages/'],
};

export const studio = {
  '@type': 'ProfessionalService',
  '@id': STUDIO_ID,
  name: 'DrewImages',
  alternateName: 'DrewImages.studio',
  url: `${SITE}/`,
  logo: cld(LOGO, 600),
  image: 'https://res.cloudinary.com/diduw1fmf/image/upload/c_fill,g_auto,w_1200,h_630,f_jpg,q_auto/v1768230293/Cyrille_Green_ug4lzg.png',
  description: 'Creative direction, art direction and photography for musicians, artists, founders and brands, led by Drew Bordeaux.',
  email: CONTACT.email,
  areaServed: 'Worldwide',
  address: { '@type': 'PostalAddress', addressRegion: 'NY', addressCountry: 'US' },
  knowsAbout: [
    'Creative direction',
    'Art direction',
    'Album cover photography',
    'Music photography',
    'Press photos',
    'Portrait photography',
    'Brand campaigns',
  ],
  founder: { '@id': DREW_ID },
  sameAs: [CONTACT.instagram],
};

export const website = {
  '@type': 'WebSite',
  '@id': WEBSITE_ID,
  name: 'DrewImages',
  url: `${SITE}/`,
  publisher: { '@id': STUDIO_ID },
};

export function webPage(opts: { url: string; name: string; description: string; type?: string; image?: string }) {
  return {
    '@type': opts.type ?? 'WebPage',
    '@id': `${opts.url}#webpage`,
    url: opts.url,
    name: opts.name,
    description: opts.description,
    isPartOf: { '@id': WEBSITE_ID },
    ...(opts.image ? { primaryImageOfPage: { '@type': 'ImageObject', url: opts.image } } : {}),
  };
}

export function breadcrumbs(items: { name: string; path: string }[]) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  };
}
