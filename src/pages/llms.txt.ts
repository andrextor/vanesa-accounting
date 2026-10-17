import type { APIRoute } from 'astro';
import { site, whatsappUrl } from '../data/site';
import { getContent } from '../i18n';

// Plain-text summary for AI agents (https://llmstxt.org), built from the same content as the pages.
export const GET: APIRoute = ({ site: origin }) => {
  const t = getContent('es');
  const url = (path: string): string => new URL(path, origin).href;
  const list = (items: string[]): string => items.map((item) => `- ${item}`).join('\n');

  const body = [
    `# ${site.name}`,
    `> ${t.meta.description}`,
    t.about.body.join('\n\n'),
    `## ${t.ui.education}\n${list(t.education.map(({ title, institution, year }) => `${title}, ${institution} (${year})`))}`,
    `## ${t.ui.certifications}\n${list(t.certifications)}`,
    `## ${t.sections.services.eyebrow}\n${list(t.services.map(({ title, description }) => `${title}: ${description}`))}`,
    `## ${t.sections.audiences.eyebrow}\n${list(t.audiences.map(({ title, description }) => `${title}: ${description}`))}`,
    `## ${t.ui.sectorsLabel}\n${list(t.sectors)}`,
    `## ${t.sections.process.eyebrow}\n${t.steps.map(({ title, description }, index) => `${index + 1}. ${title}: ${description}`).join('\n')}`,
    `## ${t.ui.contact}\n- WhatsApp: ${site.phone} (${whatsappUrl(t.whatsapp.greeting)})\n- ${t.ui.email}: ${site.email}\n- LinkedIn: ${site.linkedin}`,
    `## Páginas\n- [Español](${url('/')})\n- [English](${url('/en/')})`,
  ].join('\n\n');

  return new Response(`${body}\n`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
