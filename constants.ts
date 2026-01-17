import { Project, ServiceItem, ProcessStepItem, TestimonialItem, FAQItem, WorkCategoryData } from './types';

export const NAV_LINKS = [
  { label: 'Work', path: '/work' },
  { label: 'Services', path: '/services' },
  { label: 'About', path: '/about' },
];

export const SERVICES: ServiceItem[] = [
  {
    title: 'Identity Sessions',
    description: 'Focused shoots for releases, launches, and personal brands. Clear direction, thoughtful pacing, and images designed to live well across press, web, and social.',
    price: ''
  },
  {
    title: 'Campaign Builds',
    description: 'Larger creative projects shaped around a strong visual direction. Multiple looks, locations, or concepts — all tied together with a cohesive tone.',
    price: ''
  },
  {
    title: 'Ongoing Direction',
    description: 'Monthly creative support for teams with evolving content needs. Consistent imagery, aligned with a long-term visual language.',
    price: ''
  }
];

export const STUDIO_CAPABILITIES = [
  {
    title: "Direction",
    desc: "Concept, references, and visual planning."
  },
  {
    title: "Production",
    desc: "Calm, focused shoot-day execution."
  },
  {
    title: "Delivery",
    desc: "Organized image sets for press, web, and campaigns."
  }
];

export const PROCESS_STEPS: ProcessStepItem[] = [
  { label: 'Signal Check' },
  { label: 'World-Build' },
  { label: 'Shoot Day' },
  { label: 'Edit + Selects' },
  { label: 'Rollout Kit' }
];

// Optimized images with Cloudinary f_auto,q_auto
export const IMAGES = {
  hero: "https://picsum.photos/1920/1080?grayscale", 
  aboutMain: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768349221/DSC09784_ibmq63.jpg",
  aboutDetail: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768349930/DSC09840-Edit_pghftk.jpg",
  contactHero: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768635524/Brister_BTS_111521_12_vxozvv.jpg",
  serviceIdentity: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768632470/Naledi7_m4vv6z.jpg",
  serviceCampaign: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768634139/kimhawkeycollage_skzdts.png",
  serviceCampaignDetail: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768634469/nighthawks_faxtus.png",
  
  work1: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768236231/isa_stitches_corkboard_s_bxgcqn.png",
  work2: "https://picsum.photos/800/1000?random=2",
  work3: "https://picsum.photos/800/800?random=3",
  work4: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768236744/joao_color_ssunri.png",
  work5: "https://picsum.photos/800/600?random=5",
  work6: "https://picsum.photos/800/1000?random=6",
  work7: "https://picsum.photos/800/1000?random=7",
  work8: "https://picsum.photos/800/800?random=8",
  work9: "https://picsum.photos/800/1000?random=9",
  work10: "https://picsum.photos/800/1000?random=10",
  work11: "https://picsum.photos/800/600?random=11",
  work12: "https://picsum.photos/800/1000?random=12",
  artistHero: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768403981/jessie1_p2gbvd.png",
  
  // New Artists
  artistNicole: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768544915/nicole_z_jcf6o2.png",
  artistMike: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768544645/mike_sabath_mpbwir.png",
  artistSasha: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768544588/7P3A1846_yhoktk.jpg",
  artistScottie: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768544368/A7401989-Edit_yynkhw.jpg",
  artistRomina: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768543350/romina_russell_gk2ez4.png",
  artistMonifah: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768541914/A7409419__2_1_onzvjc.jpg",
  artistBonthoven: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768541924/A7405998_ftgvhm.jpg",
  artistLovecolor: "https://www.dropbox.com/scl/fi/i83l3ll4wjvbf7peyj507/A7408775-Edit.jpg?rlkey=kvrrhjs914fojlcd8b39uncag&st=95asjgtf&raw=1",
  artistVanessa: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768546189/vanessa_s_ucepkt.jpg",
  artistEmily: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768549998/emily_p_iegwv5.png",
  artistRuleOfThree: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768549775/ruleofthree_vqqdqu.png",

  founderHero: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768405241/Screenshot_2026-01-14_at_10.40.25_AM_zhpkti.png",
  brandHero: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768407508/talea_group_uwwomc.png",
  spiceHospitality: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768418143/spice_hospitality_v2_xyw13p.png",
  founderCasey: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768418364/CASEY_1_wq0vo5.jpg",
  founderMisc: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768418594/7P3A8393_jfprgy.jpg",
  founderExtra1: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768423989/7P3A9971-Edit-2_rjbggg.jpg",
  founderExtra2: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768423964/A7407873-Edit_x2n0k8.jpg",
  
  // Brands
  brandLauretta: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768553702/A7401201_skthat.jpg",
  brandLivingPearl: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768553691/7P3A7574-Edit_tc8w9s.jpg",
  brandTrilogy: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768554060/A7406341_qunh2g.jpg",

  // Testimonials
  testimonialSophie: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768343797/sophie_nw70nf.jpg",
  testimonialGracie: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768345207/gracie_f5rija.png",
  testimonialTaylor: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768343880/tayzaro_k37gnw.jpg",
  testimonialAlecia: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768343842/alecia_ndmsxd.jpg",
  testimonialLiz: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768415144/A7405160-Edit_cfxtln.jpg",
  testimonialJordyn: "https://res.cloudinary.com/diduw1fmf/image/upload/v1768417080/A7409217_1_mguhck.jpg",

  // Press Logos
  pressVogue: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768346275/VOGUE_LOGO.svg_twrtry.webp",
  pressBillboard: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768347351/Billboard_logo_v3_mvlmwp.png",
  pressDownbeat: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768346270/Down_Beat_iv9rrl.webp",
  pressAmericanSongwriter: "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768346260/americansong_rajff0.webp",
};

export const WORK_CATEGORIES: Record<string, WorkCategoryData> = {
  artists: {
    id: 'artists',
    title: 'Artists & Creators',
    subtitle: 'Expression & Presence',
    description: 'For people whose identity is their work — musicians, performers, writers, actors, and cultural figures. These projects focus on expression, presence, and visual storytelling for public-facing creative careers.',
    engagements: ['Album & Single Art', 'Press Kits (EPK)', 'Social Content', 'Tour Imagery'],
    gallery: [
      { 
        src: IMAGES.artistHero, 
        title: "Jessie Wagner", 
        subtitle: "Recording artist & songwriter (Wicked Cool Records)" 
      },
      { 
        src: IMAGES.artistNicole, 
        title: "Nicole Zuraitis", 
        subtitle: "Grammy Award–winning vocalist & composer" 
      },
      { 
        src: IMAGES.artistRuleOfThree, 
        title: "Rule of Three Trio", 
        subtitle: "Classical chamber ensemble (harp · flute · viola)" 
      },
      { 
        src: IMAGES.artistRomina, 
        title: "Romina Garber", 
        subtitle: "New York Times bestselling author" 
      },
      { 
        src: IMAGES.artistScottie, 
        title: "Scottie Thompson", 
        subtitle: "Actor · Writer · Director · Producer" 
      },
      { 
        src: IMAGES.artistMike, 
        title: "Mike Sabath", 
        subtitle: "Songwriter & record producer" 
      },
      { 
        src: IMAGES.artistMonifah, 
        title: "Monifah", 
        subtitle: "Platinum recording artist & songwriter" 
      },
      { 
        src: IMAGES.artistEmily, 
        title: "Emily Pecoraro", 
        subtitle: "Saxophonist & woodwind specialist (Broadway & recording musician)" 
      },
      { 
        src: IMAGES.artistVanessa, 
        title: "Vanessa Silberman", 
        subtitle: "Recording artist · songwriter · producer" 
      }
    ],
    testimonial: {
      quote: "Being a musician himself, Drew has a unique perspective when it comes to photographing musicians, and he does what it takes to get the perfect shot.\n\nShooting with Drew was one of my favorite creative experiences. He is an artist and magic maker, and the photos we created together are still some of my absolute favorites.\n\nDrew is incredibly generous to the artistic community and brings so much light to musicians and artists. Working with him felt genuinely collaborative, and the experience stayed with me long after the shoot.",
      author: "Sasha Ono",
      role: "Cellist · Touring & Recording Artist (Performed with Ariana Grande, Coldplay, Zach Bryan, Joshua Bell, Miley Cyrus, Philip Glass)",
      image: IMAGES.artistSasha
    }
  },
  founders: {
    id: 'founders',
    title: 'Founders & Leaders',
    subtitle: 'Clarity & Confidence',
    description: 'For people building and leading vision-driven brands — entrepreneurs, executives, and creative directors. These projects emphasize clarity, confidence, and thoughtful visual identity without corporate stiffness.',
    engagements: ['Founder Portraits', 'Personal Branding', 'Speaking Assets', 'About Pages'],
    gallery: [
      { src: IMAGES.testimonialLiz, title: "Liz McKenna", subtitle: "Founder, Think Wild Marketing" }, // Index 0 (Skipped in Gallery, used as Thumbnail)
      { src: IMAGES.founderCasey, title: "Casey Baltes", subtitle: "VP Games & Immersive, Tribeca Festival" },
      { src: IMAGES.spiceHospitality, title: "Jeffrey Orr, Arthur Zinn, Michael Finkelstein, Ryan Sherman", subtitle: "Founders, Spice Hospitality Group" },
      { src: IMAGES.founderHero, title: "Adam Sloyer", subtitle: "CEO, Sequence" },
      { src: IMAGES.founderExtra2, title: "Sara and Vinnie Cann", subtitle: "Co-founders, Birdie’s Batch" },
      { src: IMAGES.founderExtra1, title: "Kelly and Jason Lareau", subtitle: "Founders, J Lawrence Downtown" },
      { src: IMAGES.founderMisc, title: "Clare Murray", subtitle: "Assistant Director, Community Center of Northern Westchester" }
    ],
    testimonial: {
      quote: "This photo gives me confidence as a business owner — and it’s worth its weight in gold. This photoshoot was one of my best investments. If I could do it again, I would book a two-day shoot and create even more together.",
      author: "Liz McKenna",
      role: "Owner & Founder, Think Wild Marketing",
      image: IMAGES.testimonialLiz
    }
  },
  brands: {
    id: 'brands',
    title: 'Brands & Cultural Projects',
    subtitle: 'World-Building & Narrative',
    description: 'For work that represents something larger than one person — ensembles, fashion labels, institutions, and concept-driven campaigns. These projects focus on world-building, narrative, and cohesive visual systems.',
    engagements: ['Campaign Direction', 'Lookbooks', 'Editorial Features', 'Visual Systems'],
    gallery: [
      { src: IMAGES.brandHero, title: "Talea Ensemble", subtitle: "Visual identity · Group portraits · Cohesive member portraits" },
      { src: IMAGES.brandLauretta, title: "Lauretta's British Ginger Tea", subtitle: "Brand Campaign" },
      { src: IMAGES.brandLivingPearl, title: "Living Pearl Jewelry", subtitle: "Editorial Lookbook" },
      { src: IMAGES.work1, title: "Isa Tailored & Made", subtitle: "Brand Identity & Process" },
      { src: IMAGES.brandTrilogy, title: "Trilogy Consignment", subtitle: "Retail & Lifestyle" },
    ]
  }
};

export const ALBUM_ARTWORKS = [
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355919/karmastea_rainbow_grahtv.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355835/ariel_arbisser_ingenue_corrupt_eae6y5.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355870/cyrille_aimee_backtoyou_r1q2qc.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355864/we_the_nighthawks_d9fiel.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355883/lovegoes_fbqxeg.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355914/pamhervey_somekindofway_ojoaju.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355901/DEARLOVE-AlbumArtCover_t6kf34.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355876/od_choro_sivx17.png",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355858/katiej_ep_v5sghl.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355846/vanessa_perea_this_is_the_moment_mo3izz.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355841/mike_Bono_breakingsound_wh4zna.jpg",
  "https://res.cloudinary.com/diduw1fmf/image/upload/f_auto,q_auto/v1768355830/CL_suspensions_albumcover_kyoxbt.jpg"
];