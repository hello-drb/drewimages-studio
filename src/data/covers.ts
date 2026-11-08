// The home page's rotating magazine covers, Rolling Stone style: the full photograph, the DrewImages
// masthead set into it, and the subject's head in front of the letters. The "in front" layer is a
// cut-out of the same frame (stored in Cloudinary as its own image, so it never has to be made on
// the fly) laid exactly over the photo.

import { HERO_SLIDES, type Photo } from './content';

export interface CoverIssue {
  photo: Photo;
  /** Cloudinary public ID of the stored cut-out: same frame, background removed, not trimmed. */
  cutout: string;
  /** Masthead color, cover-line color, kicker color. */
  mast: string;
  text: string;
  accent: string;
  /** A soft gradient behind the cover lines, dark or light to suit the photo. */
  scrim: 'dark' | 'light';
  /** object-position on desktop and on phones, chosen so the head sits on the masthead. */
  focus: string;
  focusPhone: string;
  /** How far down the masthead sits on phones (desktop is fixed). */
  mastTopPhone: string;
}

const slide = (name: string) => HERO_SLIDES.find((s) => s.name === name)!;

export const COVER_ISSUES: CoverIssue[] = [
  {
    photo: {
      src: 'lauren-minear-guitar-windswept',
      name: 'Lauren Minear',
      credit: 'Creative direction and photography',
      project: 'Til The World Ends',
      year: 2026,
      alt: 'Lauren Minear playing an acoustic guitar in a sheer blush top, her hair blown back, on a gray seamless',
    },
    cutout: 'drewimages-cover-cutout-lauren-guitar',
    mast: '#8A2A47',
    text: '#3D1118',
    accent: '#8A2A47',
    scrim: 'light',
    focus: '50% 30%',
    focusPhone: '58% 50%',
    mastTopPhone: '15%',
  },
  {
    photo: slide('Cyrille Aimée'),
    cutout: 'drewimages-cover-cutout-cyrille-green',
    mast: '#D9AB3F',
    text: '#F3E6C8',
    accent: '#D9AB3F',
    scrim: 'dark',
    focus: '50% 30%',
    focusPhone: '55% 50%',
    mastTopPhone: '8%',
  },
  {
    photo: {
      src: '7P3A1846-Edit_ei5oem',
      name: 'Sasha Ono',
      credit: 'Photography',
      alt: 'Cellist Sasha Ono in a plum velvet gown, holding her cello and looking down at it',
    },
    cutout: 'drewimages-cover-cutout-sasha-cello',
    mast: '#6D2B2E',
    text: '#3D1118',
    accent: '#6D2B2E',
    scrim: 'light',
    focus: '50% 4%',
    focusPhone: '50% 0%',
    mastTopPhone: '5%',
  },
];

/** Image widths and sizes for the cover layers. A landscape photo on a phone fills the height, so it's drawn about 2.2× the screen width. */
export const COVER_WIDTHS = [960, 1600, 2400];
export const COVER_SIZES = '(max-width: 767px) 220vw, 100vw';

/** "Vol. 26 · No. 11": the year and month the site was built, like a magazine issue line. */
export function issueLine(date = new Date()): { vol: string; no: string; month: string } {
  return {
    vol: String(date.getFullYear()).slice(2),
    no: String(date.getMonth() + 1),
    month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  };
}
