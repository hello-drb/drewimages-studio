// Campaigns for brands and ensembles, as short picture-led stories.
// `what` and `made` are the live site's own descriptions. `lines` is the story in a sentence or two:
// DRAFT until Drew confirms (set `confirmed` to true and the page becomes visible to search).
// Never add a client's brief, results or names of people that Drew hasn't supplied.

export interface BrandStory {
  slug: string;
  client: string;
  /** "Brand" or "Ensemble": what kind of client this is. */
  kind: string;
  what: string;
  made: string[];
  role: string;
  lines: string[];
  pictures: { src: string; alt: string; wide: boolean }[];
  confirmed: boolean;
}

export const BRAND_STORIES: BrandStory[] = [
  {
    slug: 'isa-tailored-and-made',
    client: 'Isa Tailored & Made',
    kind: 'Brand',
    what: 'Brand identity and process',
    made: ['Campaign direction', 'Lookbook', 'Process pictures'],
    role: 'Creative direction and photography',
    lines: ['A campaign built on the pieces themselves: silk slips, the dress forms beside them, and three women wearing them, against clay and white.'],
    pictures: [
      { src: 'isa_stiches_pmrhas', alt: 'Three models in white silk slips around a dress form, holding large monstera leaves, against a clay-colored backdrop', wide: true },
      { src: 'v1768236231/isa_stitches_corkboard_s_bxgcqn.png', alt: 'Photos from the Isa Tailored & Made campaign pinned to a corkboard: models in white silk pieces beside dress forms', wide: false },
    ],
    confirmed: false,
  },
  {
    slug: 'talea-ensemble',
    client: 'Talea Ensemble',
    kind: 'Ensemble',
    what: 'Visual identity and member portraits',
    made: ['Visual identity', 'Group portraits', 'A matching portrait of every member'],
    role: 'Creative direction and photography',
    lines: ['One look for a whole ensemble: every member photographed with their instrument against the same deep green, so the portraits work alone or together.'],
    pictures: [
      { src: 'talea_6portraits_oc1q5o', alt: 'Six Talea Ensemble members, each with their instrument, in matching portraits against a deep green painted backdrop', wide: true },
      { src: 'v1768407508/talea_group_uwwomc.png', alt: 'A grid of Talea Ensemble member portraits, each musician with their instrument against deep green', wide: false },
    ],
    confirmed: false,
  },
];
