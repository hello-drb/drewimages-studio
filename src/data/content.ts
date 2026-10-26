// Site content: every image with who's in it, what Drew did, the project, the year and written alt text.
// Leave `year` and `project` out when they aren't confirmed; never guess a credit.

import type { CloudinaryPath } from './cloudinary';

export interface Photo {
  src: CloudinaryPath;
  alt: string;
  /** Who's in the photo, or the client. */
  name?: string;
  /** What the person or client does, as shown under the photo. */
  role?: string;
  /** Drew's credit on the image. */
  credit?: string;
  project?: string;
  year?: number;
  /** Set when someone other than Drew took the photo. */
  photographer?: string;
}

export interface Testimonial {
  quote: string;
  /** A second, quieter line of the same quote. */
  secondary?: string;
  author: string;
  role?: string;
  photo: Photo;
}

export interface WorkCategory {
  id: 'artists' | 'founders' | 'brands';
  title: string;
  subtitle: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  engagements: string[];
  /** The image on the Work index card. */
  cover: Photo;
  gallery: Photo[];
  testimonial?: Testimonial;
}

export const NAV_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
];

export const LOGO = 'v1768229079/drewimages-logo-b_x34u39.png';

export const HERO_SLIDES: Photo[] = [
  {
    src: 'v1768230293/Cyrille_Green_ug4lzg.png',
    name: 'Cyrille Aimée',
    credit: 'Photography',
    alt: 'Cyrille Aimée seated on the floor in a rust-colored dress against a deep green backdrop',
  },
  {
    src: 'v1768231551/katie_jacoby_dress_cxexe9.png',
    name: 'Katie Jacoby',
    credit: 'Photography',
    alt: 'Katie Jacoby in a long floral dress, sitting on a boulder at the edge of a river under a stormy sky',
  },
  {
    src: 'v1768230554/A7404274-Edit_ngnbu0.jpg',
    credit: 'Photography',
    alt: 'A three-piece band in a sepia studio portrait, two men standing with guitars and a woman seated between them',
  },
  {
    src: 'v1768345533/A7400898-Edit_2_xl7gtf.jpg',
    credit: 'Photography',
    alt: 'A musician in a floral dress seated on draped fabric among fruit, flowers and a cello, like a painted still life',
  },
  {
    src: 'v1768230325/jazzmeia_wide_ieefeg.png',
    name: 'Jazzmeia Horn',
    credit: 'Photography',
    alt: 'Jazzmeia Horn in a marigold dress and purple head wrap, a length of purple fabric blowing behind her in a sunlit field',
  },
  {
    src: 'v1768230081/Kimberly_Hawkey_Water_uk76le.webp',
    name: 'Kimberly Hawkey',
    credit: 'Photography',
    alt: 'Kimberly Hawkey floating on her back in dark water, arms open, in a sheer dress',
  },
  {
    src: 'v1768230077/Chelsea_Lane_j9zlaq.webp',
    name: 'Chelsea Lane',
    credit: 'Photography',
    alt: 'Harpist Chelsea Lane resting her arm on the curve of her gold harp against a dark backdrop',
  },
  {
    src: 'v1768230056/Carissa_Johnson_Banner_xalq1v.webp',
    name: 'Carissa Johnson',
    credit: 'Photography',
    alt: 'Three frames of Carissa Johnson in a red jacket, perched on a blue mailbox on a city street',
  },
];

export const IMAGES = {
  homeConcept: {
    src: 'v1768236744/joao_color_ssunri.png',
    credit: 'Photography',
    alt: 'A guitarist laughing as he plays a classical guitar, lit in red and blue',
  },
  homeRollout: {
    src: 'v1768236231/isa_stitches_corkboard_s_bxgcqn.png',
    name: 'Isa Tailored & Made',
    credit: 'Photography',
    alt: 'Photos from the Isa Tailored & Made campaign pinned to a corkboard: models in white silk pieces beside dress forms',
  },
  aboutMain: {
    src: 'v1768349221/DSC09784_ibmq63.jpg',
    name: 'Drew Bordeaux',
    photographer: 'Lindsey Lerner',
    year: 2025,
    alt: 'Drew Bordeaux in a checked cap holding a light tube during a shoot, in black and white',
  },
  aboutDetail: {
    src: 'v1768349930/DSC09840-Edit_pghftk.jpg',
    name: 'Drew Bordeaux',
    photographer: 'Lindsey Lerner',
    year: 2025,
    alt: 'Drew Bordeaux showing frames on the back of his camera to the woman he is photographing',
  },
  contactHero: {
    src: 'v1768635524/Brister_BTS_111521_12_vxozvv.jpg',
    alt: 'Behind the scenes at a studio portrait session: a photographer crouched with a camera as a man in a blue shirt poses against white',
  },
  serviceIdentity: {
    src: 'v1768632470/Naledi7_m4vv6z.jpg',
    credit: 'Photography',
    alt: 'Portrait of a woman with long braids in a black feathered top, looking off to the side',
  },
  serviceCampaign: {
    src: 'v1768634139/kimhawkeycollage_skzdts.png',
    name: 'Kimberly Hawkey',
    project: 'We the Nighthawks',
    credit: 'Photography',
    alt: 'A spread of prints from the Kimberly Hawkey We the Nighthawks campaign, scattered on a wooden table',
  },
  serviceCampaignDetail: {
    src: 'v1768634469/nighthawks_faxtus.png',
    name: 'Kimberly Hawkey',
    project: 'We the Nighthawks',
    credit: 'Photography',
    alt: 'Kimberly Hawkey seated at a pool table under green lamps, from the We the Nighthawks cover',
  },
} satisfies Record<string, Photo>;

export const PRESS_LOGOS = [
  { name: 'Vogue', src: 'v1768346275/VOGUE_LOGO.svg_twrtry.webp' },
  { name: 'Billboard', src: 'v1768347351/Billboard_logo_v3_mvlmwp.png' },
  { name: 'DownBeat', src: 'v1768346270/Down_Beat_iv9rrl.webp' },
  { name: 'American Songwriter', src: 'v1768346260/americansong_rajff0.webp' },
];

export const SERVICES = [
  {
    title: 'Identity Sessions',
    description: 'Focused shoots for releases, launches, and personal brands. Clear direction, thoughtful pacing, and images designed to live well across press, web, and social.',
  },
  {
    title: 'Campaign Builds',
    description: 'Larger creative projects shaped around a strong visual direction. Multiple looks, locations, or concepts — all tied together with a cohesive tone.',
  },
  {
    title: 'Ongoing Direction',
    description: 'Monthly creative support for teams with evolving content needs. Consistent imagery, aligned with a long-term visual language.',
  },
];

export const PROCESS_STEPS = [
  { title: 'Signal Check', desc: 'Aligning on tone, goals, and visual direction.' },
  { title: 'World-Build', desc: 'References, mood, and visual language take shape.' },
  { title: 'Capture Phase', desc: 'Focused sessions designed to feel calm and intentional.' },
  { title: 'Edit + Selects', desc: 'Refined images, thoughtfully delivered.' },
  { title: 'Rollout Kit', desc: 'Assets organized for press, web, and campaigns.' },
];

export const HOME_TESTIMONIALS: Testimonial[] = [
  {
    quote: 'Drew has an extraordinary ability to make you feel at ease — confident, supported, and beautifully directed.',
    secondary: 'I walked away with the best photos I’ve ever had of myself.',
    author: 'Sophie M.',
    photo: {
      src: 'v1768343797/sophie_nw70nf.jpg',
      name: 'Sophie M.',
      credit: 'Photography',
      alt: 'Sophie lying on a white floor in a black lace top, holding a trumpet above her',
    },
  },
  {
    quote: 'The way Drew captures light, energy, and presence is unlike any experience I’ve had with another photographer.',
    secondary: 'From the first shoot, I knew I was in the right hands.',
    author: 'Taylor Z.',
    photo: {
      src: 'v1768343880/tayzaro_k37gnw.jpg',
      name: 'Taylor Z.',
      credit: 'Photography',
      alt: 'Taylor lying beside a double bass in saturated red light, her hand in her hair',
    },
  },
  {
    quote: 'Drew creates an environment that feels relaxed, collaborative, and genuinely comfortable.',
    secondary: 'Even when I usually feel awkward on camera, I felt confident sharing ideas and being myself.',
    author: 'Gracie T.',
    photo: {
      src: 'v1768345207/gracie_f5rija.png',
      name: 'Gracie T.',
      credit: 'Photography',
      alt: 'Gracie in a rust jumpsuit reclining on a green velvet chaise beside a green guitar',
    },
  },
  {
    quote: 'Drew is a kind soul with a sharp eye. The photography is handled with care, talent, and skill — and the experience itself is genuinely inspiring.',
    secondary: 'His direction and feedback make the time feel well spent and truly enjoyable.',
    author: 'Alecia C.',
    photo: {
      src: 'v1768343842/alecia_ndmsxd.jpg',
      name: 'Alecia C.',
      credit: 'Photography',
      alt: 'Alecia in a beaded bralette, one hand in her dark curls, against a pale gray backdrop',
    },
  },
];

export const WORK_CATEGORIES: WorkCategory[] = [
  {
    id: 'artists',
    title: 'Artists & Creators',
    subtitle: 'Expression & Presence',
    description: 'For people whose identity is their work — musicians, performers, writers, actors, and cultural figures. These projects focus on expression, presence, and visual storytelling for public-facing creative careers.',
    metaTitle: 'Photography and album covers for musicians and artists — DrewImages',
    metaDescription: 'Portraits, press photos and album cover photography for musicians, performers, writers and actors, including Nicole Zuraitis, Jazzmeia Horn and Monifah. Creative direction by Drew Bordeaux.',
    engagements: ['Album & Single Art', 'Press Kits (EPK)', 'Social Content', 'Tour Imagery'],
    cover: {
      src: 'v1768403981/jessie1_p2gbvd.png',
      name: 'Jessie Wagner',
      credit: 'Photography',
      alt: 'Jessie Wagner sitting in a field of tall golden grass in a patterned skirt, one hand in her hair',
    },
    gallery: [
      {
        src: 'v1768403981/jessie1_p2gbvd.png',
        name: 'Jessie Wagner',
        role: 'Recording artist & songwriter (Wicked Cool Records)',
        credit: 'Photography',
        alt: 'Jessie Wagner sitting in a field of tall golden grass in a patterned skirt, one hand in her hair',
      },
      {
        src: 'v1768544915/nicole_z_jcf6o2.png',
        name: 'Nicole Zuraitis',
        role: 'Grammy-winning vocalist and songwriter',
        credit: 'Photography',
        alt: 'Nicole Zuraitis laughing in a patchwork jacket of red, purple and gold squares, against dark foliage',
      },
      {
        src: 'v1768549775/ruleofthree_vqqdqu.png',
        name: 'Rule of Three Trio',
        role: 'Classical chamber ensemble (harp · flute · viola)',
        credit: 'Photography',
        alt: 'Rule of Three Trio in a studio: a harpist in gold beside her harp, a seated flutist, and a violist in a black suit',
      },
      {
        src: 'v1768543350/romina_russell_gk2ez4.png',
        name: 'Romina Garber',
        role: 'New York Times bestselling author',
        credit: 'Photography',
        alt: 'Romina Garber smiling in a royal blue top, long curls over her shoulder, against a striped wall',
      },
      {
        src: 'v1768544368/A7401989-Edit_yynkhw.jpg',
        name: 'Scottie Thompson',
        role: 'Actor · Writer · Director · Producer',
        credit: 'Photography',
        alt: 'Scottie Thompson sitting on a gray studio floor in an oversized cream sweater',
      },
      {
        src: 'v1768544645/mike_sabath_mpbwir.png',
        name: 'Mike Sabath',
        role: 'Songwriter & record producer',
        credit: 'Photography',
        alt: 'Mike Sabath in a cap, hands at his brow, in warm sepia tones against foliage',
      },
      {
        src: 'v1768541914/A7409419__2_1_onzvjc.jpg',
        name: 'Monifah',
        role: 'Platinum recording artist & songwriter',
        credit: 'Photography',
        alt: 'Monifah smiling, a hand in her voluminous curls, wearing a fur collar',
      },
      {
        src: 'v1768549998/emily_p_iegwv5.png',
        name: 'Emily Pecoraro',
        role: 'Saxophonist & woodwind specialist (Broadway & recording musician)',
        credit: 'Photography',
        alt: 'Emily Pecoraro in a brocade jacket wearing a halo made of woodwind reeds',
      },
      {
        src: 'v1768546189/vanessa_s_ucepkt.jpg',
        name: 'Vanessa Silberman',
        role: 'Recording artist · songwriter · producer',
        credit: 'Photography',
        alt: 'Vanessa Silberman with a stripe of blue paint across her eyes, palms pressed together, against an orange backdrop',
      },
    ],
    testimonial: {
      quote: 'Being a musician himself, Drew has a unique perspective when it comes to photographing musicians, and he does what it takes to get the perfect shot.\n\nShooting with Drew was one of my favorite creative experiences. He is an artist and magic maker, and the photos we created together are still some of my absolute favorites.\n\nDrew is incredibly generous to the artistic community and brings so much light to musicians and artists. Working with him felt genuinely collaborative, and the experience stayed with me long after the shoot.',
      author: 'Sasha Ono',
      role: 'Cellist · Touring & Recording Artist (Performed with Ariana Grande, Coldplay, Zach Bryan, Joshua Bell, Miley Cyrus, Philip Glass)',
      photo: {
        src: 'v1768544588/7P3A1846_yhoktk.jpg',
        name: 'Sasha Ono',
        credit: 'Photography',
        alt: 'Cellist Sasha Ono in a black gown holding her cello, in black and white',
      },
    },
  },
  {
    id: 'founders',
    title: 'Founders & Leaders',
    subtitle: 'Clarity & Confidence',
    description: 'For people building and leading vision-driven brands — entrepreneurs, executives, and creative directors. These projects emphasize clarity, confidence, and thoughtful visual identity without corporate stiffness.',
    metaTitle: 'Founder and executive portraits — DrewImages',
    metaDescription: 'Portraits and personal branding for founders, executives and creative leaders, including Tribeca Festival, Sequence and Spice Hospitality Group. New York and the Hudson Valley.',
    engagements: ['Founder Portraits', 'Personal Branding', 'Speaking Assets', 'About Pages'],
    cover: {
      src: 'v1768415144/A7405160-Edit_cfxtln.jpg',
      name: 'Liz McKenna',
      credit: 'Photography',
      alt: 'Liz McKenna on a black stool in a dark green jacket, smiling, against a light gray backdrop',
    },
    gallery: [
      {
        src: 'v1768418364/CASEY_1_wq0vo5.jpg',
        name: 'Casey Baltes',
        role: 'VP Games & Immersive, Tribeca Festival',
        credit: 'Photography',
        alt: 'Casey Baltes smiling in a black sleeveless top against a whitewashed brick wall',
      },
      {
        src: 'v1768418143/spice_hospitality_v2_xyw13p.png',
        name: 'Jeffrey Orr, Arthur Zinn, Michael Finkelstein, Ryan Sherman',
        role: 'Founders, Spice Hospitality Group',
        credit: 'Photography',
        alt: 'The four founders of Spice Hospitality Group in suits: two single portraits above, all four seated on a leather sofa below',
      },
      {
        src: 'v1768405241/Screenshot_2026-01-14_at_10.40.25_AM_zhpkti.png',
        name: 'Adam Sloyer',
        role: 'CEO, Sequence',
        credit: 'Photography',
        alt: 'Adam Sloyer smiling in a plaid blazer and light blue shirt against a charcoal backdrop',
      },
      {
        src: 'v1768423964/A7407873-Edit_x2n0k8.jpg',
        name: 'Sara and Vinnie Cann',
        role: 'Co-founders, Birdie’s Batch',
        credit: 'Photography',
        alt: 'The co-founders of Birdie’s Batch in white chef coats, standing together on a lawn by the water',
      },
      {
        src: 'v1768423989/7P3A9971-Edit-2_rjbggg.jpg',
        name: 'Kelly and Jason Lareau',
        role: 'Founders, J Lawrence Downtown',
        credit: 'Photography',
        alt: 'Kelly and Jason Lareau in front of the chalkboard menu at J Lawrence Downtown',
      },
      {
        src: 'v1768418594/7P3A8393_jfprgy.jpg',
        name: 'Clare Murray',
        role: 'Assistant Director, Community Center of Northern Westchester',
        credit: 'Photography',
        alt: 'Clare Murray at her desk, pen in hand, in a sunlit office with a bulletin board behind her',
      },
    ],
    testimonial: {
      quote: 'This photo gives me confidence as a business owner — and it’s worth its weight in gold. This photoshoot was one of my best investments. If I could do it again, I would book a two-day shoot and create even more together.',
      author: 'Liz McKenna',
      role: 'Owner & Founder, Think Wild Marketing',
      photo: {
        src: 'v1768415144/A7405160-Edit_cfxtln.jpg',
        name: 'Liz McKenna',
        credit: 'Photography',
        alt: 'Liz McKenna on a black stool in a dark green jacket, smiling, against a light gray backdrop',
      },
    },
  },
  {
    id: 'brands',
    title: 'Brands & Cultural Projects',
    subtitle: 'World-Building & Narrative',
    description: 'For work that represents something larger than one person — ensembles, fashion labels, institutions, and concept-driven campaigns. These projects focus on world-building, narrative, and cohesive visual systems.',
    metaTitle: 'Brand campaigns, lookbooks and ensemble portraits — DrewImages',
    metaDescription: 'Campaigns, lookbooks and visual identity for ensembles and brands, including Talea Ensemble, Lauretta’s British Ginger Tea and Living Pearl Jewelry.',
    engagements: ['Campaign Direction', 'Lookbooks', 'Editorial Features', 'Visual Systems'],
    cover: {
      src: 'v1768407508/talea_group_uwwomc.png',
      name: 'Talea Ensemble',
      credit: 'Photography',
      alt: 'A grid of Talea Ensemble member portraits, each musician with their instrument against the same deep green backdrop',
    },
    gallery: [
      {
        src: 'v1768407508/talea_group_uwwomc.png',
        name: 'Talea Ensemble',
        role: 'Visual identity · Group portraits · Cohesive member portraits',
        credit: 'Photography',
        alt: 'A grid of Talea Ensemble member portraits, each musician with their instrument against the same deep green backdrop',
      },
      {
        src: 'v1768553702/A7401201_skthat.jpg',
        name: 'Lauretta’s British Ginger Tea',
        role: 'Brand Campaign',
        credit: 'Photography',
        alt: 'A woman with pink curls laughing in a park, holding a bottle of Lauretta’s British Ginger Tea',
      },
      {
        src: 'v1768553691/7P3A7574-Edit_tc8w9s.jpg',
        name: 'Living Pearl Jewelry',
        role: 'Editorial Lookbook',
        credit: 'Photography',
        alt: 'A model resting her hand at her temple, wearing Living Pearl rings and a fine pendant necklace',
      },
      {
        src: 'v1768236231/isa_stitches_corkboard_s_bxgcqn.png',
        name: 'Isa Tailored & Made',
        role: 'Brand Identity & Process',
        credit: 'Photography',
        alt: 'Photos from the Isa Tailored & Made campaign pinned to a corkboard: models in white silk pieces beside dress forms',
      },
      {
        src: 'v1768554060/A7406341_qunh2g.jpg',
        name: 'Trilogy Consignment',
        role: 'Retail & Lifestyle',
        credit: 'Photography',
        alt: 'A woman in sunglasses and a leopard coat on a train platform as a commuter train passes',
      },
    ],
  },
];

export const ALBUM_ARTWORKS: Photo[] = [
  { src: 'v1768355919/karmastea_rainbow_grahtv.png', name: 'Karma’s Tea', project: 'Rainbow', alt: 'Rainbow by Karma’s Tea: the singer leaning back mid-dance in a haze of rainbow light' },
  { src: 'v1768355835/ariel_arbisser_ingenue_corrupt_eae6y5.jpg', name: 'Ariel Arbisser', project: 'Ingenue Corrupt', alt: 'Ingenue Corrupt by Ariel Arbisser: her face resting on white pillows in pink and violet light' },
  { src: 'v1768355870/cyrille_aimee_backtoyou_r1q2qc.png', name: 'Cyrille Aimée', project: 'Back to You', alt: 'Back to You by Cyrille Aimée: her chin in her hand, in a magenta sweater' },
  { src: 'v1768355864/we_the_nighthawks_d9fiel.jpg', name: 'Kimberly Hawkey', project: 'We the Nighthawks', alt: 'We the Nighthawks by Kimberly Hawkey: seated at a pool table under green lamps' },
  { src: 'v1768355883/lovegoes_fbqxeg.png', project: 'Love Goes', alt: 'Love Goes: a woman under a dark veil, her eyes closed' },
  { src: 'v1768355914/pamhervey_somekindofway_ojoaju.png', name: 'Pam Hervey', project: 'Some Kind of Way', alt: 'Some Kind of Way by Pam Hervey: her hair flying as she holds a vintage microphone' },
  { src: 'v1768355901/DEARLOVE-AlbumArtCover_t6kf34.png', name: 'Jazzmeia Horn and Her Noble Force', project: 'Dear Love', alt: 'Dear Love by Jazzmeia Horn and Her Noble Force: Jazzmeia in an orange dress and a crown of flowers against a blue sky' },
  { src: 'v1768355876/od_choro_sivx17.png', name: 'Octávio Deluchi', project: 'Chôro da Saudade', alt: 'Chôro da Saudade by Octávio Deluchi: the guitarist playing on a stool in a pool of light' },
  { src: 'v1768355858/katiej_ep_v5sghl.jpg', name: 'Katie Jacoby', alt: 'Katie Jacoby with her violin, surrounded by a crowd of green inflatable aliens' },
  { src: 'v1768355846/vanessa_perea_this_is_the_moment_mo3izz.jpg', name: 'Vanessa Perea', project: 'This Is the Moment', alt: 'This Is the Moment by Vanessa Perea: seated on a red velvet chair in a bright loft' },
  { src: 'v1768355841/mike_Bono_breakingsound_wh4zna.jpg', name: 'Mike Bono', project: 'Breaking Sound', alt: 'Breaking Sound by Mike Bono: a profile portrait in a leather jacket against black' },
  { src: 'v1768355830/CL_suspensions_albumcover_kyoxbt.jpg', name: 'Chelsea Lane', project: 'Suspensions', alt: 'Suspensions by Chelsea Lane: standing on a stool beside her harp in a dark studio' },
];

export const CONTACT = {
  email: 'hello@drewbordeaux.com',
  instagram: 'https://www.instagram.com/drewimages/',
};
