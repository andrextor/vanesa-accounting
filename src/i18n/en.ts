import type { Content } from './content';

export const en: Content = {
  meta: {
    title: 'Vanesa Lotero · Public Accountant in Cali and Yumbo',
    description:
      'Bookkeeping, taxes and income tax returns for individuals and small businesses. In person in Cali and Yumbo, online across Colombia.',
  },
  role: 'Public Accountant',
  roleLine: 'Public Accountant · Financial Administrator',
  location: 'Cali and Yumbo, Colombia',
  nav: [
    { href: '#servicios', label: 'Services' },
    { href: '#para-quien', label: 'Who it’s for' },
    { href: '#proceso', label: 'Process' },
    { href: '#sobre-mi', label: 'About' },
    { href: '#contacto', label: 'Contact' },
  ],
  ui: {
    skipToContent: 'Skip to content',
    mainNav: 'Main',
    footerNav: 'Footer',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    bookConsultation: 'Book a consultation',
    writeOnWhatsApp: 'Message me on WhatsApp',
    viewServices: 'View services',
    scrollHint: 'Scroll',
    scrollHintLabel: 'Scroll down to services',
    tellMeWhatYouNeed: 'Tell me what you need',
    opensWhatsApp: '(opens WhatsApp)',
    statsLabel: 'Track record in numbers',
    toolsLabel: 'Tools I work with',
    sectorsLabel: 'Industry experience',
    yearsBadge: 'years',
    yearsBadgeCaption: 'putting numbers in order',
    education: 'Education',
    certifications: 'Diplomas and certifications',
    complementaryTraining: 'Additional training in',
    and: 'and',
    experience: 'Experience',
    navigation: 'Navigation',
    contact: 'Contact',
    email: 'Email',
    createdBy: 'Site by',
    language: 'Language',
  },
  whatsapp: {
    greeting: 'Hi Vanesa, I’d like information about your accounting services.',
    serviceInquiry: (service) => `Hi Vanesa, I’d like information about: ${service}.`,
  },
  alts: {
    hero: 'Vanesa Lotero, public accountant, at her desk',
    meeting: 'Accounting advisory meeting reviewing a statement of financial position',
    portrait: 'Vanesa Lotero reviewing a financial statement at her desk',
  },
  hero: {
    eyebrow: 'Public Accountant · Cali and Yumbo',
    heading: 'Your numbers in order, your business at ease.',
    lead: 'Bookkeeping, taxes and tax compliance for individuals and small businesses, explained in plain language.',
  },
  stats: {
    years: 'years of experience in accounting and financial management',
    degrees: 'professional degrees: Public Accountant and Financial Administrator',
    certifications: 'diplomas and certifications, including QuickBooks ProAdvisor',
    tools: 'accounting and analysis tools I work with',
  },
  flagship: 'Bookkeeping, taxes and tax compliance for individuals and small businesses',
  sections: {
    services: {
      eyebrow: 'Services',
      title: 'Everything your accounting needs, in one place.',
      lead: 'Bookkeeping, taxes and tax compliance for individuals and small businesses, with close support at every step.',
    },
    audiences: {
      eyebrow: 'Who it’s for',
      title: 'I support people who want to grow with their accounts in order.',
      lead: 'Every client has different obligations. I adapt the work to your reality, not the other way around.',
    },
    process: {
      eyebrow: 'How we work',
      title: 'A simple process, no fine print.',
      lead: 'From the first conversation you know what I’ll do, when and why.',
    },
    about: { eyebrow: 'About me', title: 'An accountant who speaks plainly.' },
    contact: {
      eyebrow: 'Contact',
      title: 'Let’s get your accounts in order.',
      lead: 'I work in person in Cali and Yumbo, and online from anywhere in Colombia, the United States or Spain. Write to me and I reply personally.',
    },
  },
  services: [
    {
      icon: 'calculator',
      title: 'Monthly bookkeeping',
      description:
        'Up-to-date records, reconciliations and closings so you know the real health of your business every month.',
    },
    {
      icon: 'receipt',
      title: 'Individual income tax return',
      href: '/declaracion-de-renta/',
      description: 'We review your income, deductions and benefits to file your return on time and without surprises.',
    },
    {
      icon: 'percent',
      title: 'VAT, withholding tax and ICA',
      description:
        'Calculation and filing of your periodic taxes within the deadlines of the DIAN and the municipality.',
    },
    {
      icon: 'database',
      title: 'Third-party information reports',
      description:
        'Preparation and submission of DIAN information reports (exógena) with validated data to avoid penalties.',
    },
    {
      icon: 'file-text',
      title: 'Electronic invoicing',
      description: 'I guide you through DIAN enablement and the day-to-day use of your electronic invoicing.',
    },
    {
      icon: 'chart-line-up',
      title: 'Financial statements and IFRS',
      description: 'Financial statements under IFRS for SMEs, clear and ready for banks, partners or authorities.',
    },
    {
      icon: 'lightbulb',
      title: 'Tax advice and planning',
      description: 'Planning to optimize your tax burden within the law and make decisions ahead of time.',
    },
    {
      icon: 'identification-card',
      title: 'RUT registration and updates',
      description:
        'Registration or update of your RUT (tax ID) with the right responsibilities and activities from the start.',
    },
  ],
  audiences: [
    {
      icon: 'user',
      title: 'Individuals',
      description: 'Income tax returns, RUT and tax planning to comply on time and without stress.',
    },
    {
      icon: 'rocket-launch',
      title: 'Entrepreneurs',
      description: 'RUT, electronic invoicing and taxes in order from day one of your business.',
    },
    {
      icon: 'buildings',
      title: 'Small and medium businesses',
      description: 'Monthly bookkeeping, IFRS financial statements and up-to-date taxes to decide with data.',
    },
  ],
  sectors: ['Retail', 'Professional services', 'Restaurants and food', 'Administrative and accounting services'],
  steps: [
    {
      title: 'We talk',
      description: 'You tell me your situation and together we review what obligations you have and what you need.',
    },
    {
      title: 'A clear proposal',
      description: 'You receive a work plan tailored to you, with scope and dates defined from the start.',
    },
    {
      title: 'Ongoing support',
      description: 'I take care of your obligations, explain every figure and keep you informed of every deadline.',
    },
  ],
  about: {
    heading: 'An accountant who speaks plainly.',
    body: [
      'I’m Vanesa Lotero, Public Accountant and Financial Administrator, with more than 8 years of experience in accounting and financial management.',
      'I help individuals, entrepreneurs and small businesses keep their numbers in order and meet their tax obligations, explaining every figure in simple language so you can decide with confidence.',
    ],
  },
  incomeTax: {
    meta: {
      title: 'Income tax returns in Cali and Yumbo · Vanesa Lotero',
      description:
        'Colombian income tax returns for individuals, in person in Cali and Yumbo or fully online from Colombia, the United States and Spain. First conversation is free.',
    },
    eyebrow: 'Income tax return · Cali and Yumbo',
    heading: 'Your income tax return, on time and without surprises.',
    lead: 'We review your income, deductions and benefits, and I file your return with the DIAN. In person in Cali and Yumbo, or online from wherever you are.',
    facts: {
      eyebrow: 'The essentials',
      title: 'How it works.',
      items: [
        'For individuals who exceed the thresholds the DIAN sets each year.',
        'The whole process can be online: documents, review and filing, no travel needed.',
        'If you live in the United States or Spain, we work online just as in Colombia.',
        'The first conversation is free and the quote comes with no obligation.',
      ],
    },
    faq: {
      eyebrow: 'FAQ',
      title: 'What people ask me most about income tax.',
      items: [
        {
          question: 'How do I know if I have to file an income tax return?',
          answer:
            'Each year the DIAN sets thresholds for income, assets, purchases and spending, bank deposits and card use. If you exceeded any of them during the year, you must file. We go through your transactions together and I tell you whether it applies to you.',
        },
        {
          question: 'What documents do I need?',
          answer:
            'It depends on whether you file as an individual or as a company, and on your sources of income. In the first conversation I give you the exact list for your case.',
        },
        {
          question: 'How much does it cost to prepare an income tax return?',
          answer:
            'There is no fixed fee: it depends on the tax year and the complexity of your return. I quote with no obligation and the first conversation is free.',
        },
        {
          question: 'Can I do the whole process online?',
          answer:
            'Yes. You send me the documents, we review your information online and I file the return. I work this way across Colombia, the United States and Spain.',
        },
        {
          question: 'What happens if I did not file on time?',
          answer:
            'Filing late results in a penalty from the DIAN. Write to me and we will look at how to get you up to date.',
        },
        {
          question: 'Can I verify your professional license?',
          answer: 'Yes. I do not publish it on the website, but I send it to you on WhatsApp before we start.',
        },
      ],
    },
  },
  education: [
    { title: 'Public Accountant', institution: 'Corporación Universitaria UNITEC', year: 2025 },
    { title: 'Financial Administrator', institution: 'Universidad del Tolima', year: 2016 },
  ],
  certifications: [
    'Diploma in IFRS for SMEs',
    'Diploma in Financial Management',
    'Diploma in Tax Management Procedures',
    'QuickBooks Online Certified',
    'QuickBooks Online ProAdvisor',
  ],
  training: ['Advanced Excel', 'Power BI', 'Business Intelligence', 'Artificial Intelligence for Accounting'],
  experience: [
    { company: 'Café Palo Café', role: 'Accountant / Staff Accountant' },
    { company: 'Landak Studio', role: 'Accounting services and advisory' },
    { company: 'Distrirepuestos López', role: 'Accounting and administration', period: 'Oct 2017 – Dec 2025' },
  ],
};
