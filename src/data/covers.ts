// The home page's rotating magazine covers: one photograph cut out over a full-strength color,
// with the DrewImages logo as the masthead. Pairings come from Drew's two references (ORCHID, NOIR).
// Cover photos are full-resolution originals from Cloudinary, so the cut-outs stay sharp on big screens.

import { HERO_SLIDES, type Photo } from './content';

export interface CoverIssue {
  photo: Photo;
  /** Ground, masthead/type, and accent colors. */
  bg: string;
  ink: string;
  accent: string;
  /** "tall" subjects size by height, "wide" ones by width. */
  shape: 'tall' | 'wide';
}

const jazzmeia = HERO_SLIDES.find((s) => s.name === 'Jazzmeia Horn')!;

export const COVER_ISSUES: CoverIssue[] = [
  {
    photo: {
      src: 'Cyrille_9_hmjwm4',
      name: 'Cyrille Aimée',
      credit: 'Photography',
      alt: 'Cyrille Aimée in a red corset top and red velvet trousers, one hand in her pocket, smiling over her shoulder',
    },
    bg: '#D9AB3F',
    ink: '#3D1118',
    accent: '#8A2A47',
    shape: 'tall',
  },
  {
    photo: {
      src: '7P3A1846-Edit_ei5oem',
      name: 'Sasha Ono',
      credit: 'Photography',
      alt: 'Cellist Sasha Ono in a plum velvet gown, holding her cello and looking down at it',
    },
    bg: '#5BC2C9',
    ink: '#6D2B2E',
    accent: '#3D1118',
    shape: 'tall',
  },
  { photo: jazzmeia, bg: '#6D2B2E', ink: '#5BC2C9', accent: '#D9AB3F', shape: 'wide' },
];

/** "Vol. 26 · No. 11": the year and month the site was built, like a magazine issue line. */
export function issueLine(date = new Date()): { vol: string; no: string; month: string } {
  return {
    vol: String(date.getFullYear()).slice(2),
    no: String(date.getMonth() + 1),
    month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  };
}
