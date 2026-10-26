// Cloudinary URLs for the studio's images (cloud "diduw1fmf").
// Every image goes out as f_auto,q_auto at a fixed set of widths, so phones never load desktop files.

const BASE = 'https://res.cloudinary.com/diduw1fmf/image/upload';

/** A Cloudinary asset path, e.g. "v1768230293/Cyrille_Green_ug4lzg.png". */
export type CloudinaryPath = string;

export function cld(path: CloudinaryPath, width: number): string {
  return `${BASE}/f_auto,q_auto,c_limit,w_${width}/${path}`;
}

export function srcset(path: CloudinaryPath, widths: number[]): string {
  return widths.map((w) => `${cld(path, w)} ${w}w`).join(', ');
}

/** A 1200×630 crop for link previews (Open Graph). */
export function ogImage(path: CloudinaryPath, gravity: 'auto' | 'face' = 'auto'): string {
  return `${BASE}/c_fill,g_${gravity},w_1200,h_630,f_jpg,q_auto/${path}`;
}

export const WIDTHS = {
  hero: [640, 960, 1280, 1600, 1920, 2560],
  tile: [400, 600, 800, 1000, 1200],
  half: [480, 720, 960, 1200, 1600],
  thumb: [160, 240, 320, 480],
};
