# Spec · web de Vanesa Lotero, contadora pública

Borrador 1 · 12/10/2026. Referencia de estructura: plantilla Framer **Consultaro** (consultaro.framer.website). Es la **única referencia visual**: no se mezclan páginas, paletas ni componentes de otros proyectos.

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

### 5.1 Referencia: Consultaro (única)

Lo que se replica de su hero y sistema:

- **Hero a sangre**: foto de ancho completo, ella en el tercio derecho, fondo de ventanal con ciudad desenfocada en tonos fríos; velo oscuro en degradado desde la izquierda para que el texto blanco lea.
- **Navegación transparente** sobre la foto: logo blanco a la izquierda, separador fino, enlaces en blanco, botón blanco "Agenda una asesoría" a la derecha.
- **Eyebrow** en mayúsculas pequeñas con un punto delante ("● CONTADORA PÚBLICA · `<CIUDAD>`").
- **H1 grande** en sans, peso medio, interletrado cerrado, dos líneas. Lead corto debajo en blanco al 80 %.
- **Botones rectos** (radio ~4 px): primario blanco con flecha, secundario fantasma con borde fino.
- Debajo del hero: secciones claras, eyebrows, H2 en frase, cifras grandes con pie corto, tarjetas de servicio de una línea, FAQ en acordeón.

### 5.2 Tipografía

Una sola familia sans, como Consultaro: **Instrument Sans** (400/500/600), elegida el 12/10/2026 entre Plus Jakarta Sans, Geist, Instrument Sans y Schibsted Grotesk (`docs/design/font-options.png`). Titulares en 500 con `letter-spacing: -0.035em`; texto en 400; logo en 600.

### 5.3 Color

Neutros fríos de Consultaro + un único acento, el verde del check del logo:

| Token | Valor | Uso |
|---|---|---|
| `--color-ink` | `#0f1b2d` | Texto, fondos oscuros, pie |
| `--color-ink-soft` | `#4a5568` | Texto secundario |
| `--color-paper` | `#ffffff` | Fondo general |
| `--color-surface` | `#f4f5f7` | Bandas y tarjetas |
| `--color-line` | `#e2e5ea` | Bordes |
| `--color-accent` | `#3f7d6e` | Check del logo, punto del eyebrow, numerales, foco |

Contrastes AA se verifican y documentan en la implementación.

### 5.4 Forma y movimiento

- Radios pequeños (4–8 px), bordes finos, sin sombras marcadas.
- Entrada del hero ≤ 700 ms; reveals suaves al hacer scroll con CSS, nunca en el primer pantallazo, desactivados con `prefers-reduced-motion`. Sin librerías de animación.
- Iconos: flecha en botones y pocos más, SVG inline.

### 5.5 Foto y logo (12/10/2026)

- **Foto del hero (elegida por Iván y Vanesa, 12/10/2026):** `vanesa-hero.jpg` (16:9) = `vanesa-office-desk.jpg` ampliada hacia la izquierda con Higgsfield: ella en el escritorio con blazer beige, en la mitad derecha; oficina clara a la izquierda para el texto. En móvil se usa la vertical `vanesa-office-desk.jpg` (`<picture>` con dirección de arte). Velo oscuro en degradado desde la izquierda para el texto blanco, como Consultaro.
- **Fotos de apoyo** (generadas con sus dos fotos reales como referencia de identidad, mismo blazer y blusa que el hero para que el set sea coherente):
  - `vanesa-office-desk.jpg` (4:5): versión vertical del hero → **hero en móvil**.
  - `vanesa-reviewing-numbers.jpg` (4:5): de pie revisando cifras en una tablet, oficina luminosa → **Sobre mí**.
  - `vanesa-advising-clients.jpg` (4:5): asesorando a dos clientas vistas de espaldas (sin rostros generados) → **Cómo trabajamos** o alternativa para Sobre mí.
  - `vanesa-wide.jpg` (16:9): de pie a la derecha, espacio libre a la izquierda → **imagen OG** (1200×630 con nombre y rol sobre el espacio libre) y fondo opcional del CTA final.
- **Todas deben ser aprobadas por ella antes de publicar.**
- **Logo (concepto 2 · bloque, propuesto):** monograma "VL" en un cuadrado navy (V blanca, L en el verde de acento) + "Vanesa Lotero" en Inter 600 y "Contadora Pública" en versalitas. Sobre la foto del hero se invierte (cuadrado blanco, V navy). Marca: `src/assets/logo-mark.svg` (colores por `--logo-bg`, `--logo-fg`, `--logo-accent`). Favicon: `public/favicon.svg`. Conceptos: `docs/design/logo-concepts.png`.

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
