// The current issue: what's on the cover, what's inside, and the year's pictures.
// The home page is built from this file, so a new issue is an edit here, not a redesign.

import type { StripItem } from '../components/mag/Strip.astro';
import sunburst from '../assets/work/devil/sunburst-mirror.jpg';
import glowing from '../assets/work/devil/glowing-mirror.jpg';

export const ISSUE = {
  /** The cover photograph (Cloudinary), and where its head sits on phones and in the desktop cover. */
  cover: {
    src: 'lauren-minear-guitar-windswept',
    alt: 'Lauren Minear playing an acoustic guitar in a sheer blush top, her hair blown back, on a gray seamless',
    focus: '58% 50%',
    name: 'Lauren Minear',
    kicker: 'On the cover',
    line: 'Til The World Ends, her 2026 single. The song is quiet, so the cover is too.',
    href: '/work/til-the-world-ends',
    /** Masthead and cover-line colors for this photograph. */
    mast: '#8A2A47',
    ink: '#3D1118',
    paper: '#D7D6D3',
  },
  contents: [
    { section: 'Feature', title: 'Til The World Ends', by: 'Lauren Minear', href: '/work/til-the-world-ends' },
    { section: 'Feature', title: 'The Devil I Knew', by: 'Nicole Zuraitis', href: '/work/the-devil-i-knew' },
    { section: 'The pictures', title: '2026, frame by frame', by: '', href: '#pictures' },
    { section: 'The covers', title: 'Thirteen squares, credited', by: '', href: '#covers' },
    { section: 'The studio', title: 'Three ways to work', by: '', href: '#studio' },
  ],
};

/** "Issue 11 · November 2026": the month the site was built. */
export function issueLine(date = new Date()): { no: string; month: string } {
  return { no: String(date.getMonth() + 1), month: date.toLocaleString('en-US', { month: 'long', year: 'numeric' }) };
}

const lauren = (cloud: string, w: number, h: number, alt: string, note = 'Til The World Ends'): StripItem => ({ cloud, w, h, alt, name: 'Lauren Minear', note });

const frame = (cloud: string, w: number, h: number, name: string, alt: string, note?: string): StripItem => ({ cloud, w, h, alt, name, note });

/** The year's pictures, in the order they slide. Mixed on purpose: wide, tall, wide.
    Names are as Drew gave them on Nov 9, 2026; add a release title as `note` when there is one. */
export const PICTURES_2026: StripItem[] = [
  frame('shaleah-feinstein-silk', 4000, 2667, 'Shaleah Feinstein', 'Shaleah Feinstein looking out from between two sheets of pale blowing silk'),
  frame('alirna-korieva-violin-red', 2667, 4000, 'Alirna Korieva', 'Alirna Korieva in a deep red dress, in profile, holding her violin upright against her face'),
  frame('anna-moss-guitar-moss', 4000, 2667, 'Anna Moss', 'Anna Moss sitting on a bed of moss with a sunburst archtop guitar across her lap'),
  lauren('lauren-minear-white-windswept', 4000, 4000, 'Lauren Minear in white against white, her hair blown back'),
  { local: sunburst, alt: 'Nicole Zuraitis holding a gold sunburst mirror over her face in a dark room', name: 'Nicole Zuraitis', note: 'The Devil I Knew' },
  frame('leigh-stuart-cello', 3333, 5000, 'Leigh Stuart', 'Leigh Stuart playing the cello with her eyes closed, against a warm brown backdrop'),
  frame('impulse-strings-walking', 4000, 3200, 'Impulse Strings', 'The four members of Impulse Strings walking past each other with their instruments, in black gowns on white, in black and white'),
  frame('anna-moss-overhead-hands', 4000, 2667, 'Anna Moss', 'Anna Moss seen from above in a floral dress, looking up with both hands raised'),
  frame('carla-fabiani-violin-bw', 2667, 4000, 'Carla Fabiani', 'Carla Fabiani seated with her violin, a sheer black wrap over her shoulders, in black and white'),
  lauren('lauren-minear-black-dress-floor', 5000, 3333, 'Lauren Minear in a black dress on a pale floor, propped on one hand, in warm sepia'),
  frame('clare-maloney-profile', 3200, 4000, 'Clare Maloney', 'Clare Maloney in profile against black, her chin resting on her hand'),
  { local: glowing, alt: 'Nicole Zuraitis in a black strapless gown and satin gloves, holding a hand mirror that glows with light in front of her face', name: 'Nicole Zuraitis', note: 'The Devil I Knew' },
  frame('ginevra-flute', 4000, 2934, 'Ginevra', 'Ginevra holding a rose-gold flute, pale tulle spread out behind her like wings'),
  frame('anna-moss-portrait-moss', 2667, 4000, 'Anna Moss', 'Anna Moss lying on moss, chin on her hand, looking into the camera'),
  frame('duojalal-violin-drum', 4000, 2667, 'DuoJalal', 'DuoJalal seated against a tan backdrop: one holding a viola, the other with a large hand drum across his lap'),
  lauren('lauren-minear-autumn-black-and-white', 2667, 4000, 'Lauren Minear in a white dress in the leaves, her hair caught by the wind, in black and white', 'Autumn'),
  frame('rule-of-three-trio-black', 4000, 2667, 'Rule of Three Trio', 'The three members of Rule of Three Trio in black against a gray backdrop'),
  lauren('lauren-minear-dark-leaves', 5000, 2813, 'Lauren Minear holding an armful of dark purple leaves against a gray backdrop', 'Autumn'),
  frame('anna-moss-guitar-lying', 4000, 2667, 'Anna Moss', 'Anna Moss lying back on moss with her guitar, seen from behind the headstock'),
];

/** Pixel sizes of Lauren's photographs in Cloudinary, so strips can reserve the right width. */
export const CLOUD_SIZES: Record<string, [number, number]> = {
  'lauren-minear-guitar-windswept': [4000, 2667],
  'lauren-minear-white-windswept': [4000, 4000],
  'lauren-minear-black-dress-floor': [5000, 3333],
  'lauren-minear-double-exposure': [5000, 3519],
  'lauren-minear-black-dress-lying': [5000, 3333],
  'lauren-minear-dark-leaves': [5000, 2813],
  'lauren-minear-autumn-leaves-silk': [5000, 2813],
  'lauren-minear-motion': [4000, 2667],
  'lauren-minear-autumn-white-dress-1': [2667, 4000],
  'lauren-minear-autumn-white-dress-2': [2667, 4000],
  'lauren-minear-autumn-black-and-white': [2667, 4000],
};
