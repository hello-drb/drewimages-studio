// The three ways to work, used on the home page and on Services, in the order they're sold:
// creative direction first, album campaigns second, shoots last.
// Nov 9, 2026: no prices on creative direction yet (Drew's call); the number comes up on a call.

export interface Offer {
  id: 'direction' | 'campaign' | 'shoot';
  numeral: string;
  title: string;
  /** One or two sentences for the home page. */
  summary: string;
  price: string;
  /** For Services: who it's for, what's included, and the button. */
  forWhom: string;
  includes: string[];
  cta: string;
  /** The offer's own page, when it has one. */
  href?: string;
}

export const OFFERS: Offer[] = [
  {
    id: 'direction',
    numeral: 'I',
    title: 'Creative direction & artist development',
    summary: 'For artists with a record underway. We decide how it looks and how it comes out, release by release, and I direct the shoots and artwork that carry it.',
    price: 'Four sessions to start · then by the month',
    forWhom: 'For artists with songs underway and a producer making them, who want one person deciding how the record looks and how it comes out.',
    includes: [
      'Four working sessions to set the direction: who you are on this record, the references, the wardrobe and the release plan',
      'Creative direction for every single and the album that follows',
      'Two calls a month, messages in between, and a longer planning session each quarter',
      'Shoots and video days as the releases need them, at my day rate',
    ],
    cta: 'Talk about working together',
    href: '/artist-development',
  },
  {
    id: 'campaign',
    numeral: 'II',
    title: 'Album campaigns',
    summary: 'Art direction and photography for a record: the concept, the cover, press images, lyric visuals and the rollout, with a team built for it.',
    price: 'Scoped per release',
    forWhom: 'For artists, labels and management with a record coming. The Devil I Knew and Til The World Ends were both built this way.',
    includes: ['The concept and visual direction for the release', 'Cover art direction and photography, ready for streaming and print', 'Press images and lyric visuals', 'Styling, hair and makeup, a second shooter and behind-the-scenes video as the release needs', 'Files sized and named for every platform, with usage spelled out'],
    cta: 'Start an album campaign',
  },
  {
    id: 'shoot',
    numeral: 'III',
    title: 'Release shoots',
    summary: 'One directed shoot for a release, a tour or a new chapter: planning, the shoot, and a retouched set for press, streaming and social.',
    price: 'From $2,500',
    forWhom: 'For artists who need a strong set of portraits and press images for what’s coming out next.',
    includes: ['A first call about the music and where the images will run', 'References, styling and the plan for the day', 'A studio or location shoot', 'Retouched selects sized for press, streaming and social'],
    cta: 'Book a shoot',
  },
];
