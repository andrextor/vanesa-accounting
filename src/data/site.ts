export interface Service {
  title: string;
  description: string;
}

export interface Step {
  title: string;
  description: string;
}

// TODO: replace placeholder content with Vanesa's real information.
export const site = {
  name: 'Vanesa Lotero',
  role: 'Contadora Pública',
  title: 'Vanesa Lotero · Contadora Pública',
  description:
    'Asesoría contable y tributaria para personas y empresas. Orden, claridad y cumplimiento para que tomes mejores decisiones.',
  email: 'contacto@vanesalotero.com',
  whatsapp: '573000000000',
  city: 'Colombia',
  hero: {
    eyebrow: 'Contadora Pública',
    heading: 'Tus números en orden, tu negocio en calma.',
    lead: 'Acompaño a personas y empresas con contabilidad clara, cumplimiento tributario oportuno y asesoría cercana para crecer con tranquilidad.',
  },
  services: [
    {
      title: 'Contabilidad mensual',
      description:
        'Registro, conciliaciones y estados financieros al día para que conozcas la salud real de tu negocio.',
    },
    {
      title: 'Impuestos y declaraciones',
      description: 'Renta, IVA, retención en la fuente e información exógena, presentadas a tiempo y sin sorpresas.',
    },
    {
      title: 'Asesoría tributaria',
      description: 'Planeación para optimizar tu carga fiscal dentro del marco legal y evitar sanciones.',
    },
    {
      title: 'Nómina y seguridad social',
      description: 'Liquidación de nómina, prestaciones y aportes con soporte en nómina electrónica.',
    },
  ] satisfies Service[],
  about: {
    heading: 'Una contadora que habla claro',
    body: 'Soy Vanesa Lotero, Contadora Pública. Creo en una contabilidad cercana: explico cada cifra en un lenguaje sencillo para que entiendas tu situación y decidas con confianza.',
  },
  steps: [
    { title: 'Conversamos', description: 'Entiendo tu situación y lo que necesitas.' },
    { title: 'Propuesta', description: 'Recibes un plan de trabajo claro y con tarifa definida.' },
    { title: 'Acompañamiento', description: 'Me encargo de tus obligaciones y te mantengo informada.' },
  ] satisfies Step[],
} as const;

export const whatsappUrl = (message = 'Hola Vanesa, quiero información sobre tus servicios contables.'): string =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
