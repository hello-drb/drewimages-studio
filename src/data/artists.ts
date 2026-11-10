// The home page's covers, the artist index and the best-of pictures strip.
// Chosen for the strength of the photograph and the standing of the artist, not for how recent it is
// (Drew, Nov 9, 2026). Standing lines are the live site's own copy; leave `line` empty rather than guess.

import type { StripItem } from '../components/mag/Strip.astro';
import sunburst from '../assets/work/devil/sunburst-mirror.jpg';

export interface CoverPhoto {
  src: string;
  /** Empty when the artist isn't named on the live site yet. */
  name: string;
  alt: string;
  /** object-position on desktop (wide) and on phones (tall crop). */
  focus: string;
  focusPhone: string;
}

/** The live site's eight hero photographs, as full-screen covers. */
export const COVERS: CoverPhoto[] = [
  { src: 'v1768230325/jazzmeia_wide_ieefeg.png', name: 'Jazzmeia Horn', alt: 'Jazzmeia Horn in a marigold dress and purple head wrap, a length of purple fabric blowing behind her in a sunlit field', focus: '50% 30%', focusPhone: '68% 50%' },
  { src: 'v1768230293/Cyrille_Green_ug4lzg.png', name: 'Cyrille Aimée', alt: 'Cyrille Aimée seated on the floor in a rust-colored dress against a deep green backdrop', focus: '50% 35%', focusPhone: '52% 50%' },
  { src: 'v1768231551/katie_jacoby_dress_cxexe9.png', name: 'Katie Jacoby', alt: 'Katie Jacoby in a long floral dress, sitting on a boulder at the edge of a river under a stormy sky', focus: '50% 40%', focusPhone: '50% 50%' },
  { src: 'v1768230081/Kimberly_Hawkey_Water_uk76le.webp', name: 'Kimberly Hawkey', alt: 'Kimberly Hawkey floating on her back in dark water, arms open, in a sheer dress', focus: '50% 30%', focusPhone: '38% 50%' },
  { src: 'v1768345533/A7400898-Edit_2_xl7gtf.jpg', name: '', alt: 'A musician in a floral dress seated on draped fabric among fruit, flowers and a cello, like a painted still life', focus: '50% 45%', focusPhone: '58% 50%' },
  { src: 'v1768230077/Chelsea_Lane_j9zlaq.webp', name: 'Chelsea Lane', alt: 'Harpist Chelsea Lane resting her arm on the curve of her gold harp against a dark backdrop', focus: '50% 30%', focusPhone: '62% 50%' },
  { src: 'v1768230554/A7404274-Edit_ngnbu0.jpg', name: '', alt: 'A three-piece band in a sepia studio portrait, two men standing with guitars and a woman seated between them', focus: '50% 30%', focusPhone: '45% 50%' },
  { src: 'v1768230056/Carissa_Johnson_Banner_xalq1v.webp', name: 'Carissa Johnson', alt: 'Three frames of Carissa Johnson in a red jacket, perched on a blue mailbox on a city street', focus: '50% 40%', focusPhone: '15% 50%' },
];

export interface IndexedArtist {
  name: string;
  /** Who they are, in the live site's words. */
  line: string;
  /** Cloudinary path for the thumbnail. */
  thumb: string;
  /** A feature page when there is one; empty opens the artist's cover. */
  href: string;
}

/** No feature yet: the name opens the artist's cover. */
const archive = '';

export const artistSlug = (name: string) => name.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

/** Artists in the index, led by the names a label or manager will recognize. */
export const ARTIST_INDEX: IndexedArtist[] = [
  { name: 'Jazzmeia Horn', line: '', thumb: 'v1768230325/jazzmeia_wide_ieefeg.png', href: archive },
  { name: 'Cyrille Aimée', line: '', thumb: 'v1768230293/Cyrille_Green_ug4lzg.png', href: archive },
  { name: 'Nicole Zuraitis', line: 'Grammy Award–winning vocalist & composer', thumb: 'v1768544915/nicole_z_jcf6o2.png', href: '/work/the-devil-i-knew' },
  { name: 'Monifah', line: 'Platinum recording artist & songwriter', thumb: 'v1768541914/A7409419__2_1_onzvjc.jpg', href: archive },
  { name: 'Katie Jacoby', line: '', thumb: 'v1768231551/katie_jacoby_dress_cxexe9.png', href: archive },
  { name: 'Jessie Wagner', line: 'Recording artist & songwriter (Wicked Cool Records)', thumb: 'v1768403981/jessie1_p2gbvd.png', href: archive },
  { name: 'Kimberly Hawkey', line: '', thumb: 'v1768230081/Kimberly_Hawkey_Water_uk76le.webp', href: archive },
  { name: 'Lauren Minear', line: '', thumb: 'lauren-minear-white-windswept', href: '/work/til-the-world-ends' },
  { name: 'Mike Sabath', line: 'Songwriter & record producer', thumb: 'v1768544645/mike_sabath_mpbwir.png', href: archive },
  { name: 'Emily Pecoraro', line: 'Saxophonist & woodwind specialist (Broadway & recording musician)', thumb: 'v1768549998/emily_p_iegwv5.png', href: archive },
  { name: 'Chelsea Lane', line: '', thumb: 'v1768230077/Chelsea_Lane_j9zlaq.webp', href: archive },
  { name: 'Anna Moss', line: '', thumb: 'anna-moss-guitar-moss', href: archive },
  { name: 'Scottie Thompson', line: 'Actor, writer, director, producer', thumb: 'v1768544368/A7401989-Edit_yynkhw.jpg', href: archive },
  { name: 'Romina Garber', line: 'New York Times bestselling author', thumb: 'v1768543350/romina_russell_gk2ez4.png', href: archive },
  { name: 'Vanessa Silberman', line: 'Recording artist, songwriter, producer', thumb: 'v1768546189/vanessa_s_ucepkt.jpg', href: archive },
  { name: 'Rule of Three Trio', line: 'Classical chamber ensemble (harp, flute, viola)', thumb: 'rule-of-three-trio-black', href: archive },
  { name: 'Talea Ensemble', line: '', thumb: 'v1768407508/talea_group_uwwomc.png', href: archive },
  { name: 'Impulse Strings', line: '', thumb: 'impulse-strings-walking', href: archive },
  { name: 'Leigh Stuart', line: '', thumb: 'leigh-stuart-cello', href: archive },
  { name: 'Carissa Johnson', line: '', thumb: 'v1768230056/Carissa_Johnson_Banner_xalq1v.webp', href: archive },
];

const f = (cloud: string, w: number, h: number, name: string, alt: string): StripItem => ({ cloud, w, h, name, alt });

/** The pictures strip: the strongest frames across the years, wide and tall mixed. */
export const BEST_PICTURES: StripItem[] = [
  f('v1768231551/katie_jacoby_dress_cxexe9.png', 2810, 1880, 'Katie Jacoby', 'Katie Jacoby in a long floral dress, sitting on a boulder at the edge of a river under a stormy sky'),
  f('v1768541914/A7409419__2_1_onzvjc.jpg', 3200, 4000, 'Monifah', 'Monifah smiling, a hand in her voluminous curls, wearing a fur collar'),
  f('v1768345533/A7400898-Edit_2_xl7gtf.jpg', 5000, 3333, '', 'A musician in a floral dress seated on draped fabric among fruit, flowers and a cello, like a painted still life'),
  f('v1768403981/jessie1_p2gbvd.png', 2400, 3000, 'Jessie Wagner', 'Jessie Wagner sitting in a field of tall golden grass in a patterned skirt and gold top'),
  f('shaleah-feinstein-silk', 4000, 2667, 'Shaleah Feinstein', 'Shaleah Feinstein looking out from between two sheets of pale blowing silk'),
  f('v1768230081/Kimberly_Hawkey_Water_uk76le.webp', 2000, 1334, 'Kimberly Hawkey', 'Kimberly Hawkey floating on her back in dark water, arms open, in a sheer dress'),
  f('alirna-korieva-violin-red', 2667, 4000, 'Alirna Korieva', 'Alirna Korieva in a deep red dress, in profile, holding her violin upright against her face'),
  f('anna-moss-guitar-moss', 4000, 2667, 'Anna Moss', 'Anna Moss sitting on a bed of moss with a sunburst archtop guitar across her lap'),
  f('v1768546189/vanessa_s_ucepkt.jpg', 3200, 4000, 'Vanessa Silberman', 'Vanessa Silberman with a stripe of blue paint across her eyes, palms pressed together, against orange'),
  f('v1768230293/Cyrille_Green_ug4lzg.png', 2000, 1334, 'Cyrille Aimée', 'Cyrille Aimée seated on the floor in a rust-colored dress against a deep green backdrop'),
  { local: sunburst, alt: 'Nicole Zuraitis holding a gold sunburst mirror over her face in a dark room', name: 'Nicole Zuraitis' },
  f('leigh-stuart-cello', 3333, 5000, 'Leigh Stuart', 'Leigh Stuart playing the cello with her eyes closed, against a warm brown backdrop'),
  f('v1768230077/Chelsea_Lane_j9zlaq.webp', 2000, 1334, 'Chelsea Lane', 'Harpist Chelsea Lane resting her arm on the curve of her gold harp against a dark backdrop'),
  f('lauren-minear-white-windswept', 4000, 4000, 'Lauren Minear', 'Lauren Minear in white against white, her hair blown back'),
  f('v1768544645/mike_sabath_mpbwir.png', 1238, 1876, 'Mike Sabath', 'Mike Sabath in a cap, hands at his brow, in warm sepia tones'),
  f('impulse-strings-walking', 4000, 3200, 'Impulse Strings', 'The four members of Impulse Strings walking past each other with their instruments, in black gowns on white'),
  f('carla-fabiani-violin-bw', 2667, 4000, 'Carla Fabiani', 'Carla Fabiani seated with her violin, a sheer black wrap over her shoulders, in black and white'),
  f('v1768230554/A7404274-Edit_ngnbu0.jpg', 5000, 3333, '', 'A three-piece band in a sepia studio portrait, two men standing with guitars and a woman seated between them'),
];

/** The Work page's wall: everything worth seeing, tall and wide mixed, names underneath. */
export const WALL: StripItem[] = [
  f('v1768230325/jazzmeia_wide_ieefeg.png', 2000, 1334, 'Jazzmeia Horn', 'Jazzmeia Horn in a marigold dress and purple head wrap, a length of purple fabric blowing behind her in a sunlit field'),
  ...BEST_PICTURES,
  f('v1768549998/emily_p_iegwv5.png', 1302, 1644, 'Emily Pecoraro', 'Emily Pecoraro in a brocade jacket wearing a halo made of woodwind reeds'),
  f('anna-moss-overhead-hands', 4000, 2667, 'Anna Moss', 'Anna Moss seen from above in a floral dress, looking up with both hands raised'),
  f('v1768544368/A7401989-Edit_yynkhw.jpg', 2667, 4000, 'Scottie Thompson', 'Scottie Thompson sitting on a gray studio floor in an oversized cream sweater'),
  f('clare-maloney-profile', 3200, 4000, 'Clare Maloney', 'Clare Maloney in profile against black, her chin resting on her hand'),
  f('v1768230056/Carissa_Johnson_Banner_xalq1v.webp', 2000, 1334, 'Carissa Johnson', 'Three frames of Carissa Johnson in a red jacket, perched on a blue mailbox on a city street'),
  f('v1768544588/7P3A1846_yhoktk.jpg', 3200, 4000, 'Sasha Ono', 'Cellist Sasha Ono in a black gown holding her cello, in black and white'),
  f('ginevra-flute', 4000, 2934, 'Ginevra', 'Ginevra holding a rose-gold flute, pale tulle spread out behind her like wings'),
  f('v1768543350/romina_russell_gk2ez4.png', 1138, 1434, 'Romina Garber', 'Romina Garber smiling in a royal blue top, long curls over her shoulders'),
  f('lauren-minear-black-dress-floor', 5000, 3333, 'Lauren Minear', 'Lauren Minear in a black dress on a pale floor, propped on one hand, in warm sepia'),
  f('rule-of-three-trio-black', 4000, 2667, 'Rule of Three Trio', 'The three members of Rule of Three Trio in black against a gray backdrop'),
  f('anna-moss-portrait-moss', 2667, 4000, 'Anna Moss', 'Anna Moss lying on moss, chin on her hand, looking into the camera'),
  f('duojalal-violin-drum', 4000, 2667, 'DuoJalal', 'DuoJalal seated against a tan backdrop, one with a viola, the other with a large hand drum across his lap'),
  f('lauren-minear-autumn-black-and-white', 2667, 4000, 'Lauren Minear', 'Lauren Minear in a white dress in the leaves, her hair caught by the wind, in black and white'),
];

/** Campaigns for ensembles and brands, with what each one was (the live site's words). */
export const BRAND_WORK: (StripItem & { role: string })[] = [
  { ...f('v1768236231/isa_stitches_corkboard_s_bxgcqn.png', 1496, 1870, 'Isa Tailored & Made', 'Photos from the Isa Tailored & Made campaign pinned to a corkboard: models in white silk pieces beside dress forms'), role: 'Brand identity and process' },
  { ...f('v1768407508/talea_group_uwwomc.png', 4000, 5000, 'Talea Ensemble', 'A grid of Talea Ensemble member portraits, each musician with their instrument against deep green'), role: 'Visual identity and member portraits' },
  { ...f('v1768553691/7P3A7574-Edit_tc8w9s.jpg', 3333, 5000, 'Living Pearl Jewelry', 'A model resting her hand at her temple, wearing Living Pearl rings and bracelets'), role: 'Editorial lookbook' },
  { ...f('v1768553702/A7401201_skthat.jpg', 2667, 4000, 'Lauretta’s British Ginger Tea', 'A woman with pink curls laughing in a park, holding a bottle of Lauretta’s British Ginger Tea'), role: 'Brand campaign' },
  { ...f('v1768554060/A7406341_qunh2g.jpg', 2667, 4000, 'Trilogy Consignment', 'A woman in sunglasses and a leopard coat on a train platform as a commuter train passes'), role: 'Retail and lifestyle' },
];
