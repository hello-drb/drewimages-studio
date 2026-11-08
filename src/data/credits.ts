// Release credits, Discogs-style: year, artist, release, label, role.
// A row shows on /credits only when `role` is set, and a role is set only when it's confirmed
// (a published credit, Drew's own post, or Drew). The rest wait here until Drew confirms them.

export interface CreditRow {
  year: number;
  artist: string;
  release: string;
  format: 'Album' | 'EP' | 'Single';
  label?: string;
  role?: string;
  /** Case study on this site. */
  href?: string;
  /** Cloudinary path of the cover, or 'local:<slug>' for a cover hosted in the repo. */
  cover: string;
}

export const CREDITS: CreditRow[] = [
  { year: 2026, artist: 'Nicole Zuraitis', release: 'The Devil I Knew', format: 'Album', label: 'La Reserve Records', role: 'Art direction & photography', href: '/work/the-devil-i-knew', cover: 'local:the-devil-i-knew' },
  { year: 2026, artist: 'Lauren Minear', release: 'Til The World Ends', format: 'Single', role: 'Creative direction & photography', href: '/work/til-the-world-ends', cover: 'local:til-the-world-ends' },
  { year: 2024, artist: 'Ariel Arbisser', release: 'Ingenue Corrupt', format: 'Album', role: 'Photography', cover: 'v1768355835/ariel_arbisser_ingenue_corrupt_eae6y5.jpg' },
  { year: 2024, artist: 'Octávio Deluchi', release: 'Chôro da Saudade', format: 'Single', role: 'Photography', cover: 'v1768355876/od_choro_sivx17.png' },
  { year: 2021, artist: 'Jazzmeia Horn and Her Noble Force', release: 'Dear Love', format: 'Album', label: 'Empress Legacy Records', role: 'Photography', cover: 'v1768355901/DEARLOVE-AlbumArtCover_t6kf34.png' },
  { year: 2021, artist: 'Kimberly Hawkey', release: 'We the Nighthawks', format: 'Album', role: 'Photography (with Richard Lovrich)', cover: 'v1768355864/we_the_nighthawks_d9fiel.jpg' },
  // Waiting on Drew's role:
  { year: 2024, artist: 'Mike Bono', release: 'Breaking Sound', format: 'Album', label: 'La Reserve Records', cover: 'v1768355841/mike_Bono_breakingsound_wh4zna.jpg' },
  { year: 2024, artist: 'Pam Hervey', release: 'Some Kind of Way', format: 'Album', label: 'Sudden Flight Records', cover: 'v1768355914/pamhervey_somekindofway_ojoaju.png' },
  { year: 2024, artist: 'Lyd Marie', release: 'Love Goes', format: 'Album', label: 'Lyd Marie Music', cover: 'v1768355883/lovegoes_fbqxeg.png' },
  { year: 2023, artist: 'Vanessa Perea', release: 'This Is The Moment', format: 'Album', label: 'La Reserve Records', cover: 'v1768355846/vanessa_perea_this_is_the_moment_mo3izz.jpg' },
  { year: 2023, artist: 'Cyrille Aimée', release: 'Back to You', format: 'Single', label: 'Whirlwind Recordings', cover: 'v1768355870/cyrille_aimee_backtoyou_r1q2qc.png' },
  { year: 2023, artist: 'Karma’s Tea', release: 'Rainbow', format: 'Single', cover: 'v1768355919/karmastea_rainbow_grahtv.png' },
  { year: 2022, artist: 'Chelsea Lane', release: 'Suspensions', format: 'Album', label: 'Better Company Records', cover: 'v1768355830/CL_suspensions_albumcover_kyoxbt.jpg' },
  { year: 2019, artist: 'Katie Jacoby', release: 'Katie Jacoby', format: 'EP', cover: 'v1768355858/katiej_ep_v5sghl.jpg' },
];

export const confirmedCredits = () => CREDITS.filter((c) => c.role);
