// The live site's Tailwind theme (v3, compiled at build time), evolved for v2: same palette at full strength, new type.
/** @type {import('tailwindcss').Config} */
export default {
  // Paths resolve from this file, so the dev server works from any working directory.
  content: { relative: true, files: ['./src/**/*.{astro,html,js,ts}'] },
  theme: {
    extend: {
      fontFamily: {
        // v2: a high-contrast Didone for headlines and a width-variable grotesk for everything else
        serif: ['"Bodoni Moda Variable"', '"Bodoni Moda"', 'serif'],
        sans: ['"Archivo Variable"', '"Archivo"', 'sans-serif'],
        didone: ['"Bodoni Moda Variable"', '"Bodoni Moda"', 'serif'],
        grotesk: ['"Archivo Variable"', '"Archivo"', 'sans-serif'],
        // v4: the reading face, shared with drewbordeaux.com
        text: ['"Newsreader Variable"', 'Newsreader', 'Georgia', 'serif'],
      },
      colors: {
        paper: '#F3E6C8', // Warm Cream
        ink: '#0C0C0C', // Rich Black
        burgundy: '#661822', // Deep Burgundy
        teal: '#1F6E7A', // Deep Teal
        mustard: '#D9AB3F', // Spicy Mustard (v2: full strength)
        border: '#D8CBA8', // Darker cream for borders
        // v2 concept: the same palette at full strength (Drew's references: Spicy Mustard, Bitter Chocolate, Beet Red; NOIR turquoise on maroon)
        saffron: '#D9AB3F',
        chocolate: '#3D1118',
        beet: '#8A2A47',
        turquoise: '#5BC2C9',
        maroon: '#6D2B2E',
      },
      backgroundImage: {
        grain: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\" opacity=\"0.03\"/%3E%3C/svg%3E')",
      },
    },
  },
  plugins: [],
};
