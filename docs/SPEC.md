# Spec · web de Vanesa Lotero, contadora pública

Borrador 1 · 12/10/2026. Referencia de estructura: plantilla Framer **Consultaro** (consultaro.framer.website). Referencias internas: `stephany-art/docs/SPEC.md` (formato, regla de datos), `neoteam-social-run/DESIGN.md` (tokens, accesibilidad, movimiento).

**Regla de oro:** es una persona real con una profesión regulada. Solo se publican datos confirmados por ella. Lo que falte va marcado `PENDIENTE` en `src/data/site.ts` y nunca se inventa: cifras, clientes, testimonios, títulos, tarjeta profesional. Las preguntas abiertas están en `docs/CLIENT-QUESTIONS.md`.

---

## 1. Objetivo

| | |
|---|---|
| **Acción principal** | Agendar una primera conversación → WhatsApp con mensaje prellenado |
| **Acción secundaria** | Preguntar por un servicio concreto → WhatsApp con el nombre del servicio |
| **Público (asumido)** | Personas naturales que declaran renta, emprendedores y pymes en Colombia |
| **Objeciones (asumidas)** | Precio, confianza ("¿quién maneja mis números?"), sanciones DIAN, que no le expliquen nada |
| **Tráfico esperado** | Google local ("contadora en `<ciudad>`", "declaración de renta persona natural"), referidos y WhatsApp |
| **Tono** | Profesional, cercano y claro. Frases cortas, sin jerga. `PENDIENTE`: tú o usted |
| **Sensación** | "Profesional pero fresca": mucho aire, una sola nota de color, foto real de ella, nada de stock de calculadoras |

---

## 2. Páginas

| Ruta | Contenido | Por qué |
|---|---|---|
| `/` | Landing completa (§3) | Conversión |
| `/servicios/[slug]` | Una página por servicio: qué incluye, para quién, documentos que pide, FAQ propia, CTA | Es la principal palanca SEO: cada servicio posiciona su propia búsqueda |
| `/politica-de-privacidad` | Tratamiento de datos (Ley 1581 de 2012) | Requisito legal en Colombia si se recogen datos; da confianza |
| `/404` | Página propia con vuelta a servicios | — |

Fuera de la fase 1: **blog** (solo si ella va a escribir con regularidad; un blog vacío resta), **casos de estudio** (requieren permiso de clientes), formulario con backend (WhatsApp cubre el contacto).

---

## 3. Home · orden de secciones

Adaptado de Consultaro (13 bloques) a 10. Se quitan blog, casos de estudio y "tabs de estrategia": no hay contenido real para llenarlos.

| # | Sección | Contenido | Fuente |
|---|---|---|---|
| 1 | **Hero** | Eyebrow "Contadora Pública · `<ciudad>`", H1 con promesa, lead, 2 CTA (WhatsApp / Ver servicios), **foto de ella** a la derecha (izquierda en móvil, debajo del texto) | Foto: pendiente de envío |
| 2 | **Franja de confianza** | 3–4 credenciales cortas: tarjeta profesional, universidad, años de experiencia, software que domina | LinkedIn + `PENDIENTE` |
| 3 | **Por qué conmigo** | H2 tipo Consultaro ("No necesitas más papeles, necesitas claridad"), 4 pilares con icono | Copy nuestro, validado por ella |
| 4 | **Servicios** | 8 tarjetas (grid 4×2 en escritorio), cada una enlaza a `/servicios/[slug]` | Confirmada por ella; descripciones por validar |
| 5 | **Para quién** | Segmentos (personas naturales, emprendedores, pymes) + sectores atendidos | LinkedIn (empresas/sectores) |
| 6 | **Cifras** | Solo si existen y ella las confirma (años, clientes, declaraciones presentadas). Si no hay, la sección no se renderiza | `PENDIENTE` |
| 7 | **Cómo trabajamos** | 3 pasos (ya en el scaffold) | Validar con ella |
| 8 | **Sobre mí** | Foto 2, bio, formación, experiencia en empresas | LinkedIn |
| 9 | **Testimonios** | 2–3 reales, con nombre y tipo de cliente. Si no hay, no se renderiza | `PENDIENTE` |
| 10 | **FAQ + CTA final** | 5–7 preguntas en `<details>` nativo + bloque oscuro con WhatsApp y correo | Borrador nuestro, validado por ella |

Pie: nombre, rol, tarjeta profesional, ciudad, WhatsApp, correo, LinkedIn, enlace a privacidad.

Botón flotante de WhatsApp en móvil (aparece tras el hero).

---

## 4. Contenido editable

- `src/data/site.ts`: datos de la persona, credenciales, segmentos, pasos, FAQ, testimonios, cifras. Ya existe; se amplía.
- `src/content/services/<slug>.md` (colección con schema Zod de Astro): título, resumen, `forWhom[]`, `includes[]`, `documents[]`, `faq[]`, `order`, `draft`. El cuerpo del Markdown es la descripción larga. Añadir un servicio no toca ninguna página.
- Validación del schema: un testimonio sin nombre o una cifra sin valor rompe el build. Así nada `PENDIENTE` llega a producción por error (`draft: true` lo oculta).

---

## 5. Dirección de arte

### 5.1 Lectura de las referencias

- **Consultaro**: corporativo limpio, eyebrows en mayúsculas pequeñas, H2 en frase con contraste retórico, cifras grandes con pie corto, tarjetas de servicio de una línea. Se toma la **estructura y el ritmo**, no el tono de consultora de M&A.
- **stephany-art**: serif editorial para titulares + Manrope, bandas oscuras entre secciones claras, un solo acento, un solo ornamento.
- **neoteam**: tokens con contraste AA documentado, reveals con CSS scroll-driven (sin JS), `prefers-reduced-motion`, objetivos táctiles ≥ 44 px, iconos con vocabulario fijo.

### 5.2 Tipografía

Ya configurado en el scaffold: **Fraunces** (400/600, con cursiva) para titulares + **Manrope** (400–700) para texto. Fraunces aporta la calidez "fresca"; la cursiva se reserva para una palabra clave por titular (p. ej. "tu negocio en *calma*"). Alternativa si se ve demasiado blanda: **Instrument Serif**. Decisión al ver la foto.

### 5.3 Color

Base del scaffold, validar contra la foto (ropa y fondo de ella mandan):

| Token | Valor | Uso |
|---|---|---|
| `--color-paper` | `#f7f6f2` | Fondo general |
| `--color-ink` | `#13233a` | Texto, botón principal, bandas oscuras (cifras, CTA final, pie) |
| `--color-ink-soft` | `#3d4b5f` | Texto secundario |
| `--color-mist` | `#e9efec` | Bandas suaves (Sobre mí, Para quién) |
| `--color-sage` | `#3f7d6e` | Acento único: CTA, eyebrows, foco, numerales |
| `--color-sage-deep` | `#2c5d51` | Hover |
| `--color-line` | `#d9ddd8` | Bordes |

Ritmo de bandas: hero (paper) → confianza (paper) → por qué (white) → servicios (paper) → para quién (mist) → cifras (ink) → proceso (white) → sobre mí (mist) → testimonios (paper) → FAQ + CTA (ink). Contrastes AA se verifican y documentan en la implementación.

### 5.4 Forma y movimiento

- Radios `rounded-2xl` en tarjetas, botones en píldora (como el scaffold).
- Ornamento único: filete fino sage sobre los pasos y las cifras.
- Reveals con `animation-timeline: view()` dentro de `@supports`, nunca en el primer pantallazo; el hero solo tiene una entrada de carga ≤ 700 ms. Todo desactivado con `prefers-reduced-motion`. Sin GSAP ni Lenis.
- Iconos: `@phosphor-icons/core` (SVG en build, como stephany-art), vocabulario fijo.

### 5.5 Foto y logo (12/10/2026)

- **Foto del hero:** `src/assets/portraits/vanesa-hero.jpg`, su foto real (`~/Desktop/contadora_2.jpeg`, sin modificar) editada con Higgsfield (GPT Image 2.5): solo cambian el fondo (oficina clara desenfocada) y la camiseta estampada por una blanca lisa. Pose, rostro y blazer son los reales. Descartados: fondo nuevo con la camiseta original (estampado distrae) y recorte sin fondo (bordes irregulares).
- **Fotos de apoyo** (generadas con sus dos fotos reales como referencia de identidad, mismo blazer y blusa que el hero para que el set sea coherente):
  - `vanesa-office-desk.jpg` (4:5): en el escritorio con monitor → **Sobre mí**.
  - `vanesa-reviewing-reports.jpg` (4:5): revisando informes con laptop → **Cómo trabajamos** o página de servicio.
  - `vanesa-wide.jpg` (16:9): de pie a la derecha, espacio libre a la izquierda → **imagen OG** (1200×630 con nombre y rol sobre el espacio libre) y fondo opcional del CTA final.
- **Todas deben ser aprobadas por ella antes de publicar.**
- **Logo (concepto A, propuesto):** monograma "VL" en el que la V es un check (cuentas en orden, cumplimiento) en sage y la L en ink, más el nombre en Fraunces 600 y "Contadora Pública" en Manrope versalitas. Marca: `src/assets/logo-mark.svg` (usa `currentColor` y `--logo-accent`, sirve en claro y oscuro). Favicon: `public/favicon.svg`. Conceptos: `docs/design/logo-concepts.png`. Logo completo con texto en curvas (para tarjetas y redes) se exporta tras la aprobación.

---

## 6. SEO

- **Local primero**: título y H1 con ciudad, `og:locale es_CO`, `lang="es-CO"`.
- **JSON-LD**: `AccountingService` (nombre, área servida, teléfono, `sameAs` LinkedIn) + `Person` (Vanesa, `hasCredential`) en la home; `Service` + `BreadcrumbList` en cada servicio; `FAQPage` donde haya FAQ.
- Metadatos por página (title ≤ 60, description ≤ 155), canonical (ya en `Layout.astro`), sitemap (ya instalado), `robots.txt`, imagen OG 1200×630 con su foto.
- **Google Business Profile**: es lo que más pesa para "contadora cerca de mí". Fuera del código, pero se recomienda crearlo con la misma dirección/teléfono que la web.
- Rendimiento: imágenes con `<Picture>` de `astro:assets` (AVIF/WebP, `srcset`), foto del hero con `fetchpriority="high"`, fuentes locales con preload (ya), cero JS salvo el botón flotante. Objetivo Lighthouse móvil 100/100/100/100, CLS 0.

---

## 7. Accesibilidad

AA en todo el texto, foco visible (ya en `global.css`), `<details>` nativo para FAQ, enlaces externos con aviso, alt descriptivo en fotos, saltar al contenido, objetivos táctiles ≥ 44 px, texto ≥ 16 px en cuerpo.

---

## 8. Plan de implementación

| Fase | Entrega | Depende de |
|---|---|---|
| 0 | Este spec aprobado + respuestas de `CLIENT-QUESTIONS.md` | Iván / Vanesa |
| 1 | Componentes de la home con contenido real o `PENDIENTE` visible solo en dev; schema de servicios | Spec |
| 2 | Foto: recorte, tratamiento, paleta final validada contra ella | Foto |
| 3 | Páginas de servicio, privacidad, 404 | Lista de servicios |
| 4 | SEO técnico (JSON-LD, OG, robots), Lighthouse, capturas 390 px y 1440 px | Fases 1–3 |
| 5 | Deploy (dominio, `SITE_URL`) | Dominio |

Fuera de alcance (fase 2 opcional): blog, calendario tributario DIAN, formulario con backend, modo oscuro, inglés.
