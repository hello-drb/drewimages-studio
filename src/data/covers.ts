// The home page's rotating magazine covers: one photograph cut out over a full-strength color,
// with the DrewImages logo as the masthead. Pairings come from Drew's two references (ORCHID, NOIR).

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

const byName = (name: string) => HERO_SLIDES.find((s) => s.name === name)!;

export const COVER_ISSUES: CoverIssue[] = [
  { photo: byName('Cyrille Aimée'), bg: '#D9AB3F', ink: '#3D1118', accent: '#8A2A47', shape: 'tall' },
  { photo: byName('Jazzmeia Horn'), bg: '#5BC2C9', ink: '#3D1118', accent: '#6D2B2E', shape: 'wide' },
  { photo: byName('Chelsea Lane'), bg: '#6D2B2E', ink: '#5BC2C9', accent: '#D9AB3F', shape: 'wide' },
];

/** "Vol. 26 · No. 11": the year and month the site was built, like a magazine issue line. */
export function issueLine(date = new Date()): { vol: string; no: string; month: string } {
  return {
    vol: String(date.getFullYear()).slice(2),
    no: String(date.getMonth() + 1),
    month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }),
  };
}
