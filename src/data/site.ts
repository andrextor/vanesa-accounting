export interface Service {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

export interface Audience {
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

export const site = {
  name: 'Vanesa Lotero',
  role: 'Contadora Pública',
  title: 'Vanesa Lotero · Contadora Pública',
  description:
    'Asesoría contable y tributaria para personas y empresas. Orden, claridad y cumplimiento para que tomes mejores decisiones.',
  email: 'vanesacruz0816@gmail.com',
  whatsapp: '573146963798',
  phone: '+57 314 696 3798',
  city: 'Colombia',
  experienceYears: 8,
  education: [
    { title: 'Contadora Pública', institution: 'Corporación Universitaria UNITEC', year: 2025 },
    { title: 'Administradora Financiera', institution: 'Universidad del Tolima', year: 2016 },
  ] satisfies Degree[],
  certifications: [
    'Diplomado en NIIF para PYMES',
    'Diplomado en Gerencia Financiera',
    'Diplomado en Procedimientos de la Gestión Tributaria',
    'QuickBooks Online Certified',
    'QuickBooks Online ProAdvisor',
  ],
  training: ['Excel avanzado', 'Power BI', 'Business Intelligence', 'Artificial Intelligence for Accounting'],
  // PENDIENTE: periods for Landak Studio and Café Palo Café.
  experience: [
    { company: 'Café Palo Café', role: 'Contadora / Staff Accountant' },
    { company: 'Landak Studio', role: 'Servicios de contabilidad y asesoría contable' },
    {
      company: 'Distrirepuestos López',
      role: 'Auxiliar contable y administrativa',
      period: 'Oct 2017 – Dic 2025',
    },
  ] satisfies Position[],
  software: ['Alegra', 'SAP', 'Siigo', 'Helisa', 'QuickBooks Online', 'Microsoft Excel', 'Google Sheets', 'Power BI'],
  flagship: 'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas',
  audiences: [
    {
      title: 'Personas naturales',
      description: 'Declaración de renta, RUT y planeación tributaria para cumplir a tiempo y sin estrés.',
    },
    {
      title: 'Emprendedores',
      description: 'RUT, facturación electrónica e impuestos en orden desde el primer día de tu negocio.',
    },
    {
      title: 'Pequeñas y medianas empresas',
      description: 'Contabilidad mensual, estados financieros NIIF e impuestos al día para decidir con datos.',
    },
  ] satisfies Audience[],
  sectors: ['Comercio', 'Servicios profesionales', 'Restaurantes y alimentos', 'Servicios administrativos y contables'],
  hero: {
    eyebrow: 'Contadora Pública · Colombia',
    heading: 'Tus números en orden, tu negocio en calma.',
    lead: 'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas, explicado en un lenguaje claro.',
  },

  // Service list confirmed by Vanesa; descriptions are draft copy pending her review.
  services: [
    {
      title: 'Contabilidad mensual',
      description: 'Registro, conciliaciones y cierres al día para que conozcas la salud real de tu negocio cada mes.',
    },
    {
      title: 'Declaración de renta persona natural',
      description:
        'Revisamos tus ingresos, deducciones y beneficios para presentar tu declaración a tiempo y sin sorpresas.',
    },
    {
      title: 'IVA, retención en la fuente e ICA',
      description:
        'Liquidación y presentación de tus impuestos periódicos dentro de los plazos de la DIAN y el municipio.',
    },
    {
      title: 'Información exógena',
      description: 'Preparación y envío de medios magnéticos con la información validada para evitar sanciones.',
    },
    {
      title: 'Facturación electrónica',
      description: 'Te acompaño en la habilitación ante la DIAN y en el uso diario de tu facturación electrónica.',
    },
    {
      title: 'Estados financieros y NIIF',
      description: 'Estados financieros bajo NIIF para pymes, claros y listos para bancos, socios o entidades.',
    },
    {
      title: 'Asesoría y planeación tributaria',
      description:
        'Planeación para optimizar tu carga fiscal dentro del marco legal y tomar decisiones con anticipación.',
    },
    {
      title: 'Creación y actualización de RUT',
      description:
        'Inscripción o actualización de tu RUT con las responsabilidades y actividades correctas desde el inicio.',
    },
  ] satisfies Service[],
  about: {
    heading: 'Una contadora que habla claro.',
    body: [
      'Soy Vanesa Lotero, Contadora Pública y Administradora Financiera, con más de 8 años de experiencia en contabilidad y administración financiera.',
      'Acompaño a personas naturales, emprendedores y pequeñas empresas a mantener sus números en orden y cumplir con sus obligaciones tributarias, explicando cada cifra en un lenguaje sencillo para que decidas con confianza.',
    ],
  },

  steps: [
    {
      title: 'Conversamos',
      description: 'Me cuentas tu situación y revisamos juntos qué obligaciones tienes y qué necesitas.',
    },
    {
      title: 'Propuesta clara',
      description: 'Recibes un plan de trabajo a tu medida, con alcance y fechas definidos desde el inicio.',
    },
    {
      title: 'Acompañamiento continuo',
      description: 'Me encargo de tus obligaciones, te explico cada cifra y te mantengo al tanto de cada vencimiento.',
    },
  ] satisfies Step[],
} as const;

export const whatsappUrl = (message = 'Hola Vanesa, quiero información sobre tus servicios contables.'): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
