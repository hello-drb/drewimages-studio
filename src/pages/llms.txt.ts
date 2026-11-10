// A plain-text summary for AI assistants (llms.txt). Built from the same data as the pages,
// so it never says something the site doesn't.
import type { APIRoute } from 'astro';
import { publishedCaseStudies } from '../data/case-studies';
import { confirmedCredits } from '../data/credits';
import { OFFERS } from '../data/offers';

const SITE = 'https://www.drewimages.studio';

export const GET: APIRoute = () => {
  const studies = publishedCaseStudies();
  const credits = confirmedCredits();
  const text = `# DrewImages

> DrewImages is the creative direction and photography studio of Drew Bordeaux, an art director and photographer who is also a songwriter and record producer. Album covers, press images and campaigns for musicians, labels and brands, from New York and the Hudson Valley. Drew is a member of the Recording Academy.

## Services
${OFFERS.map((o) => `- ${o.title} (${o.price}): ${o.summary}`).join('\n')}

## Case studies
${studies.map((s) => `- [${s.artist}, ${s.release}](${SITE}/work/${s.slug}) (${s.format}, ${s.year}): ${s.role}. ${s.dek}`).join('\n')}

## Selected credits
${credits.map((c) => `- ${c.year}: ${c.artist}, ${c.release}${c.label ? ` (${c.label})` : ''}: ${c.role}`).join('\n')}

## Pages
- [Work](${SITE}/work): case studies and the archive (artists, founders, brands)
- [Credits](${SITE}/credits): release credits with year, label and role
- [Creative direction and artist development](${SITE}/artist-development): how the four sessions and the monthly work run, with prices
- [Services and FAQ](${SITE}/services): what each service includes, prices, and common questions
- [About](${SITE}/about): Drew Bordeaux and the team he works with
- [Contact](${SITE}/contact): start a project
- [Drew Bordeaux's music](https://www.drewbordeaux.com/): his records and production work
`;
  return new Response(text, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
