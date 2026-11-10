// The current issue: what's on the cover, what's inside, and the year's pictures.
// The home page is built from this file, so a new issue is an edit here, not a redesign.

import type { StripItem } from '../components/mag/Strip.astro';
import sunburst from '../assets/work/devil/sunburst-mirror.jpg';
import glowing from '../assets/work/devil/glowing-mirror.jpg';
import part3 from '../assets/work/devil/part-3-the-malediction.jpg';

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

/** The year's pictures, in the order they slide. Mixed on purpose: tall, wide, tall. */
export const PICTURES_2026: StripItem[] = [
  lauren('lauren-minear-white-windswept', 4000, 4000, 'Lauren Minear in white against white, her hair blown back'),
  { local: sunburst, alt: 'Nicole Zuraitis holding a gold sunburst mirror over her face in a dark room', name: 'Nicole Zuraitis', note: 'The Devil I Knew' },
  lauren('lauren-minear-black-dress-floor', 5000, 3333, 'Lauren Minear in a black dress on a pale floor, propped on one hand, in warm sepia'),
  lauren('lauren-minear-autumn-white-dress-1', 2667, 4000, 'Lauren Minear in a white dress, sitting in fallen leaves at dusk and looking away', 'Autumn'),
  { local: glowing, alt: 'Nicole Zuraitis in a black strapless gown and satin gloves, holding a hand mirror that glows with light in front of her face', name: 'Nicole Zuraitis', note: 'The Devil I Knew' },
  lauren('lauren-minear-double-exposure', 5000, 3519, 'A double exposure of Lauren Minear lying on white in a black dress, her arms reaching overhead'),
  lauren('lauren-minear-autumn-black-and-white', 2667, 4000, 'Lauren Minear in a white dress in the leaves, her hair caught by the wind, in black and white', 'Autumn'),
  { local: part3, alt: 'Booklet page for part III, the malediction: Nicole Zuraitis in profile, her face reflected in a gold sunburst mirror', name: 'Nicole Zuraitis', note: 'Booklet, part III' },
  lauren('lauren-minear-dark-leaves', 5000, 2813, 'Lauren Minear holding an armful of dark purple leaves against a gray backdrop', 'Autumn'),
  lauren('lauren-minear-motion', 4000, 2667, 'Lauren Minear in motion against dark green, her arm sweeping out in a long blur', 'Autumn'),
  lauren('lauren-minear-autumn-leaves-silk', 5000, 2813, 'Lauren Minear lying on rust silk under a scatter of autumn leaves, one arm above her head', 'Autumn'),
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
