import type { IconName } from '../lib/icons';

export interface Service {
  icon: IconName;
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Audience {
  icon: IconName;
  title: string;
  description: string;
}

export interface Degree {
  title: string;
  institution: string;
  year: number;
}

export interface Position {
  company: string;
  role: string;
  period?: string;
}

export interface NavLink {
  href: string;
  label: string;
}

export interface SectionCopy {
  eyebrow: string;
  title: string;
  lead?: string;
}

export interface Content {
  meta: { title: string; description: string };
  role: string;
  roleLine: string;
  location: string;
  nav: NavLink[];
  ui: {
    skipToContent: string;
    mainNav: string;
    footerNav: string;
    openMenu: string;
    closeMenu: string;
    bookConsultation: string;
    writeOnWhatsApp: string;
    viewServices: string;
    scrollHint: string;
    scrollHintLabel: string;
    tellMeWhatYouNeed: string;
    opensWhatsApp: string;
    statsLabel: string;
    toolsLabel: string;
    sectorsLabel: string;
    yearsBadge: string;
    yearsBadgeCaption: string;
    education: string;
    certifications: string;
    complementaryTraining: string;
    and: string;
    experience: string;
    navigation: string;
    contact: string;
    email: string;
    createdBy: string;
    language: string;
  };
  whatsapp: {
    greeting: string;
    serviceInquiry: (service: string) => string;
  };
  alts: { hero: string; meeting: string; portrait: string };
  hero: { eyebrow: string; heading: string; lead: string };
  stats: { years: string; degrees: string; certifications: string; tools: string };
  flagship: string;
  sections: {
    services: SectionCopy;
    audiences: SectionCopy;
    process: SectionCopy;
    about: SectionCopy;
    contact: SectionCopy;
  };
  services: Service[];
  audiences: Audience[];
  sectors: string[];
  steps: Step[];
  about: { heading: string; body: string[] };
  education: Degree[];
  certifications: string[];
  training: string[];
  experience: Position[];
}
