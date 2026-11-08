// The three ways to work, used on the home page and on Services.
// Plain names on the site; "Era Core" and "Era Partnership" stay as proposal language.

export interface Offer {
  id: 'shoot' | 'campaign' | 'ongoing';
  numeral: string;
  title: string;
  /** One or two sentences for the home page. */
  summary: string;
  price: string;
  /** For Services: who it's for, what's included, and the button. */
  forWhom: string;
  includes: string[];
  cta: string;
}

export const OFFERS: Offer[] = [
  {
    id: 'shoot',
    numeral: 'I',
    title: 'Release shoots',
    summary: 'One directed shoot for a release, a tour or a new chapter: planning, the shoot, and a retouched set for press, streaming and social.',
    price: 'From $2,500',
    forWhom: 'For artists who need a strong set of portraits and press images for what’s coming out next.',
    includes: ['A first call about the music and where the images will run', 'References, styling and the plan for the day', 'A studio or location shoot', 'Retouched selects sized for press, streaming and social'],
    cta: 'Book a shoot',
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
    id: 'ongoing',
    numeral: 'III',
    title: 'Ongoing creative direction',
    summary: 'For artists releasing across a year: direction for each single, shoots as they come, and a second eye on everything visual.',
    price: 'By the month',
    forWhom: 'For a handful of artists I work with across releases, so the look holds together from one record to the next.',
    includes: ['Creative direction for each release in the era', 'Shoots and video days as they come up', 'A regular call, plus feedback on posts, press photos and artwork', 'A steady supply of pictures for press, socials and the next record'],
    cta: 'Talk about ongoing direction',
  },
];
