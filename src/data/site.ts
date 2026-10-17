// Language-neutral facts about Vanesa. Translatable copy lives in src/i18n.
export const site = {
  name: 'Vanesa Lotero',
  linkedin: 'https://www.linkedin.com/in/leidy-vanesa-lotero-cruz-196739207/',
  email: 'contacto@vanesalotero.com',
  whatsapp: '573146963798',
  phone: '+57 314 696 3798',
  experienceYears: 8,
  software: ['Alegra', 'SAP', 'Siigo', 'Helisa', 'QuickBooks Online', 'Microsoft Excel', 'Google Sheets', 'Power BI'],
} as const;

export const whatsappUrl = (message: string): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
