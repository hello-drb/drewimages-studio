// Case studies: one release each, told like a magazine feature with liner-note credits.
// A case study goes in the sitemap, the Work page and the nav only when `published` is true.

import type { ImageMetadata } from 'astro';
import type { Photo } from './content';
import devilCover from '../assets/work/the-devil-i-knew-cover.jpg';

export interface Credit {
  role: string;
  name: string;
  /** Drew's own credit, set in bold. */
  isDrew?: boolean;
  /** schema.org type for structured data. */
  type?: 'Person' | 'Organization';
}

export interface CaseStudy {
  slug: string;
  published: boolean;
  number: string;
  artist: string;
  release: string;
  format: 'Album' | 'EP' | 'Single';
  year: number;
  /** ISO date the record came out, when known. */
  releaseDate?: string;
  /** Drew's role, as credited. */
  role: string;
  metaTitle: string;
  metaDescription: string;
  /** The cover, hosted in the repo (Astro makes AVIF/WebP at several widths). */
  cover?: { src: ImageMetadata; alt: string };
  /** Caption under the cover. */
  coverCaption?: string;
  /** One-line cover line, set large. */
  coverLine: string;
  dek: string;
  body: string[];
  madeList: string[];
  shot: { when: string; where: string[] };
  credits: Credit[];
  quote?: { text: string; author: string; approved: boolean };
  images: Photo[];
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'the-devil-i-knew',
    published: true,
    number: '01',
    artist: 'Nicole Zuraitis',
    release: 'The Devil I Knew',
    format: 'Album',
    year: 2026,
    releaseDate: '2026-07-17',
    role: 'Art direction and photography',
    metaTitle: 'Nicole Zuraitis, The Devil I Knew: album art direction and photography — DrewImages',
    metaDescription: 'Drew Bordeaux was art director and photographer for Nicole Zuraitis’s concept album The Devil I Knew: the cover, press images, lyric visuals and vinyl. Shot at Caramoor and Love Studios NYC.',
    cover: {
      src: devilCover,
      alt: 'The Devil I Knew album cover: Nicole Zuraitis in a black strapless gown and satin gloves, holding an ornate hand mirror that reflects her eye, against a red and black painted backdrop',
    },
    coverCaption: 'For your consideration: Best Album Cover',
    coverLine: 'Five chapters. Five versions of Nicole. Five stages of grief.',
    dek: 'A concept album about realizing you’re the villain of your own story. I was art director and photographer: the cover, the press images, the lyric visuals and the vinyl.',
    body: [
      'Nicole Zuraitis wrote The Devil I Knew as one story, told in the songs and again in the pictures. The question under all of it: what if the devil you knew was you?',
      'The visuals follow the album’s five chapters. Each one has its own version of Nicole, its own stage of grief and its own way of looking in the mirror. The mirror carries through the whole campaign, and on the cover it’s in her hand.',
      'We shot in December 2025 at Caramoor and at Love Studios NYC. It took a village. Marina Ross styled the shoot and worked beside me as assistant creative director, Lindsey Lerner was second shooter and caught the behind-the-scenes, Irina Charkova did hair and makeup, and Black Pixel Productions filmed the behind-the-scenes video. Everyone was answering the same thing: Nicole’s music.',
    ],
    madeList: ['Album cover', 'Press images', 'Lyric visuals', 'Vinyl'],
    shot: { when: 'December 2025', where: ['Caramoor', 'Love Studios NYC'] },
    credits: [
      { role: 'Art direction & photography', name: 'Drew Bordeaux', isDrew: true },
      { role: 'Styling & assistant creative direction', name: 'Marina Ross' },
      { role: 'Second shooter & behind the scenes', name: 'Lindsey Lerner' },
      { role: 'Hair & makeup', name: 'Irina Charkova' },
      { role: 'Behind-the-scenes video', name: 'Black Pixel Productions', type: 'Organization' },
    ],
    // Nicole's line from her Oct 16 post. Shown only once Drew confirms she's OK with it being quoted here.
    quote: {
      text: 'Larry taught me the importance of the revision. Drew taught me the importance of vision.',
      author: 'Nicole Zuraitis',
      approved: false,
    },
    images: [],
  },
  {
    slug: 'til-the-world-ends',
    // Draft: waiting on the images. Not linked, not in the sitemap, and the page is noindex until published.
    published: false,
    number: '02',
    artist: 'Lauren Minear',
    release: 'Til The World Ends',
    format: 'Single',
    year: 2026,
    releaseDate: '2026-06-03',
    role: 'Creative direction and photography',
    metaTitle: 'Lauren Minear, Til The World Ends: creative direction and photography — DrewImages',
    metaDescription: 'Creative direction and photography for Lauren Minear’s single Til The World Ends: a white-on-white cover, film and photo content from one shared moodboard. Shot at Love Studios NYC.',
    coverLine: 'White on white. Windswept. Still.',
    dek: 'A song about being together at the end of the world. The obvious cover was the apocalypse. The song is quiet, so the cover is too.',
    body: [
      'Lauren wrote a song that holds the love, the angst, the hope and the regret of being together at the end of the world. Ten years ago it might have felt like a novelty. Today it feels prescient.',
      'Lauren and I each brought a moodboard and merged them into one, then built film and photo content for the song from it. Marina Ross came in on styling and pushed the fashion further.',
      'The real debate was the cover. We could have gone loud: fire, churn, the end of everything. But the melody is still and so are the questions she’s asking, so the cover had to hold that. White on white, windswept, in a color grade that nods to Lara Lor-Van in Krypton’s last hours: a mother’s last act of love before the end.',
      'Til The World Ends was our first full round of creative direction together. Lauren is one of a handful of artists I work with across releases, so there’s always new material for press, socials and the next record.',
    ],
    madeList: ['Single cover', 'Press images', 'Film and photo content for the release'],
    shot: { when: '2026', where: ['Love Studios NYC'] },
    credits: [
      { role: 'Creative direction & photography', name: 'Drew Bordeaux', isDrew: true },
      { role: 'Styling', name: 'Marina Ross' },
      { role: 'Production assistant', name: 'Lyd Marie' },
      { role: 'Hair', name: 'Glamnation' },
      { role: 'Makeup', name: 'AgileSMUA' },
    ],
    images: [],
  },
];

export const publishedCaseStudies = () => CASE_STUDIES.filter((c) => c.published);
