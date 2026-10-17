import type { Content } from './content';

export const es: Content = {
  meta: {
    title: 'Vanesa Lotero · Contadora Pública en Colombia',
    description:
      'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas en Colombia. Renta, IVA, NIIF y asesoría clara.',
  },
  role: 'Contadora Pública',
  roleLine: 'Contadora Pública · Administradora Financiera',
  location: 'Colombia',
  nav: [
    { href: '#servicios', label: 'Servicios' },
    { href: '#para-quien', label: 'Para quién' },
    { href: '#proceso', label: 'Proceso' },
    { href: '#sobre-mi', label: 'Sobre mí' },
    { href: '#contacto', label: 'Contacto' },
  ],
  ui: {
    skipToContent: 'Saltar al contenido',
    mainNav: 'Principal',
    footerNav: 'Pie de página',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    bookConsultation: 'Agenda una asesoría',
    writeOnWhatsApp: 'Escríbeme por WhatsApp',
    viewServices: 'Ver servicios',
    scrollHint: 'Desliza',
    scrollHintLabel: 'Bajar a servicios',
    tellMeWhatYouNeed: 'Cuéntame qué necesitas',
    opensWhatsApp: '(abre WhatsApp)',
    statsLabel: 'Trayectoria en cifras',
    toolsLabel: 'Herramientas que domino',
    sectorsLabel: 'Experiencia en sectores',
    yearsBadge: 'años',
    yearsBadgeCaption: 'poniendo números en orden',
    education: 'Formación académica',
    certifications: 'Diplomados y certificaciones',
    complementaryTraining: 'Formación complementaria en',
    and: 'y',
    experience: 'Experiencia',
    navigation: 'Navegación',
    contact: 'Contacto',
    email: 'Correo',
    createdBy: 'Sitio creado por',
    language: 'Idioma',
  },
  whatsapp: {
    greeting: 'Hola Vanesa, quiero información sobre tus servicios contables.',
    serviceInquiry: (service) => `Hola Vanesa, quiero información sobre: ${service}.`,
  },
  form: {
    name: 'Nombre',
    email: 'Correo',
    message: '¿En qué te puedo ayudar?',
    send: 'Enviar mensaje',
    sending: 'Enviando…',
    success: 'Mensaje enviado. Te respondo pronto.',
    error: 'No se pudo enviar. Escríbeme por WhatsApp o al correo.',
    limit: 'Ya recibí tu mensaje hoy. Si es urgente, escríbeme por WhatsApp.',
    subject: 'Nuevo mensaje desde vanesalotero.com',
  },
  alts: {
    hero: 'Vanesa Lotero, contadora pública, en su escritorio',
    meeting: 'Reunión de asesoría contable revisando un estado de situación financiera',
    portrait: 'Vanesa Lotero revisando un estado financiero en su escritorio',
  },
  hero: {
    eyebrow: 'Contadora Pública · Colombia',
    heading: 'Tus números en orden, tu negocio en calma.',
    lead: 'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas, explicado en un lenguaje claro.',
  },
  stats: {
    years: 'años de experiencia en contabilidad y administración financiera',
    degrees: 'títulos profesionales: Contadora Pública y Administradora Financiera',
    certifications: 'diplomados y certificaciones, incluida QuickBooks ProAdvisor',
    tools: 'herramientas contables y de análisis que domino',
  },
  flagship: 'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas',
  sections: {
    services: {
      eyebrow: 'Servicios',
      title: 'Todo lo que tu contabilidad necesita, en un solo lugar.',
      lead: 'Contabilidad, impuestos y cumplimiento tributario para personas naturales y pequeñas empresas, con acompañamiento cercano en cada paso.',
    },
    audiences: {
      eyebrow: 'Para quién',
      title: 'Acompaño a quienes quieren crecer con sus cuentas claras.',
      lead: 'Cada cliente tiene obligaciones distintas. Adapto el trabajo a tu realidad, no al revés.',
    },
    process: {
      eyebrow: 'Cómo trabajamos',
      title: 'Un proceso simple, sin letra pequeña.',
      lead: 'Desde la primera conversación sabes qué voy a hacer, cuándo y por qué.',
    },
    about: { eyebrow: 'Sobre mí', title: 'Una contadora que habla claro.' },
    contact: {
      eyebrow: 'Contacto',
      title: 'Pongamos tus cuentas en orden.',
      lead: 'Escríbeme y cuéntame tu caso. Te respondo personalmente.',
    },
  },
  // Service list confirmed by Vanesa; descriptions are draft copy pending her review.
  services: [
    {
      icon: 'calculator',
      title: 'Contabilidad mensual',
      description: 'Registro, conciliaciones y cierres al día para que conozcas la salud real de tu negocio cada mes.',
    },
    {
      icon: 'receipt',
      title: 'Declaración de renta persona natural',
      description:
        'Revisamos tus ingresos, deducciones y beneficios para presentar tu declaración a tiempo y sin sorpresas.',
    },
    {
      icon: 'percent',
      title: 'IVA, retención en la fuente e ICA',
      description:
        'Liquidación y presentación de tus impuestos periódicos dentro de los plazos de la DIAN y el municipio.',
    },
    {
      icon: 'database',
      title: 'Información exógena',
      description: 'Preparación y envío de medios magnéticos con la información validada para evitar sanciones.',
    },
    {
      icon: 'file-text',
      title: 'Facturación electrónica',
      description: 'Te acompaño en la habilitación ante la DIAN y en el uso diario de tu facturación electrónica.',
    },
    {
      icon: 'chart-line-up',
      title: 'Estados financieros y NIIF',
      description: 'Estados financieros bajo NIIF para pymes, claros y listos para bancos, socios o entidades.',
    },
    {
      icon: 'lightbulb',
      title: 'Asesoría y planeación tributaria',
      description:
        'Planeación para optimizar tu carga fiscal dentro del marco legal y tomar decisiones con anticipación.',
    },
    {
      icon: 'identification-card',
      title: 'Creación y actualización de RUT',
      description:
        'Inscripción o actualización de tu RUT con las responsabilidades y actividades correctas desde el inicio.',
    },
  ],
  audiences: [
    {
      icon: 'user',
      title: 'Personas naturales',
      description: 'Declaración de renta, RUT y planeación tributaria para cumplir a tiempo y sin estrés.',
    },
    {
      icon: 'rocket-launch',
      title: 'Emprendedores',
      description: 'RUT, facturación electrónica e impuestos en orden desde el primer día de tu negocio.',
    },
    {
      icon: 'buildings',
      title: 'Pequeñas y medianas empresas',
      description: 'Contabilidad mensual, estados financieros NIIF e impuestos al día para decidir con datos.',
    },
  ],
  sectors: ['Comercio', 'Servicios profesionales', 'Restaurantes y alimentos', 'Servicios administrativos y contables'],
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
  ],
  about: {
    heading: 'Una contadora que habla claro.',
    body: [
      'Soy Vanesa Lotero, Contadora Pública y Administradora Financiera, con más de 8 años de experiencia en contabilidad y administración financiera.',
      'Acompaño a personas naturales, emprendedores y pequeñas empresas a mantener sus números en orden y cumplir con sus obligaciones tributarias, explicando cada cifra en un lenguaje sencillo para que decidas con confianza.',
    ],
  },
  education: [
    { title: 'Contadora Pública', institution: 'Corporación Universitaria UNITEC', year: 2025 },
    { title: 'Administradora Financiera', institution: 'Universidad del Tolima', year: 2016 },
  ],
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
    { company: 'Distrirepuestos López', role: 'Contabilidad y administración', period: 'Oct 2017 – Dic 2025' },
  ],
};
