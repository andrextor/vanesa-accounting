# Plan y spec · SEO y fondos de la página

Borrador 1 · 12/10/2026 · Rama `feat/seo-and-backgrounds`. Parte del estado de `main` tras el PR #3.

**Estado (12/10/2026):** tareas 1–6 y 9 hechas en la rama. Lighthouse móvil sobre el build: 100/100/100/100, CLS 0, LCP 1,5 s. Pendientes 7 y 8 (bloqueadas por datos de Vanesa). Decisiones tomadas por defecto: imagen OG solo con su foto, tarjetas de contacto con hover estático (sin JS de cursor) y cortes rectos entre bandas como Consultaro; el borde degradado de las tarjetas de servicio se descartó porque el filete verde ya cumple esa función.

Dos frentes independientes, un commit por tarea. El SEO va primero porque hoy la página no aparece bien al compartirla ni tiene datos estructurados; los fondos son pulido visual y van después.

---

## Parte A · SEO

### A.1 Auditoría del estado actual

Qué tiene hoy `Layout.astro` y qué falta:

| Elemento | Estado | Problema |
|---|---|---|
| `<title>` y `meta description` | ✅ | El título no incluye la ciudad ni el servicio estrella: "Vanesa Lotero · Contadora Pública" no compite con "contadora en `<ciudad>`" |
| `lang="es"` | ⚠️ | Debería ser `es-CO` (coincide con `og:locale`) |
| Canonical + sitemap | ✅ | — |
| Open Graph básico (type, title, description, url, locale) | ⚠️ | **Sin `og:image`**: al compartir por WhatsApp o LinkedIn no sale foto. `og:site_name` ausente |
| Twitter Card | ❌ | Sin `twitter:card`, se pierde la vista previa grande en X |
| `robots.txt` | ❌ | No existe en `public/` |
| JSON-LD | ❌ | Google no sabe que es una contadora, dónde atiende ni cómo contactarla |
| `theme-color` | ❌ | Barra del navegador en móvil sin color de marca |
| Jerarquía de encabezados | ✅ | 1 `h1`, 5 `h2`, `h3` en tarjetas. Correcta |
| Alt en imágenes | ✅ | Hero, Sobre mí y Proceso con alt descriptivo; fondo del contacto con `alt=""` (decorativo) |
| Imágenes | ✅ | WebP con `srcset`, hero con `fetchpriority="high"` |
| Páginas por servicio | ❌ | Toda la oferta vive en la home; "declaración de renta persona natural" no tiene URL propia |
| Política de privacidad | ❌ | Obligatoria en Colombia (Ley 1581) si se recogen datos; da confianza y la piden los directorios |

### A.2 Tareas

Orden de impacto. Cada una es un commit.

**A.2.1 Metadatos completos en `Layout.astro`**
- `lang="es-CO"`, `<meta name="theme-color" content="#0f1b2d">`.
- Título con patrón `"{nombre} · Contadora Pública en {ciudad}"` y description con el servicio estrella (≤ 155 caracteres). Mientras no haya ciudad, "en Colombia".
- `og:site_name`, `og:image`, `og:image:width/height/alt`, `twitter:card=summary_large_image`, `twitter:title/description/image`.
- Props opcionales `image` y `type` para que cada página futura pueda sobrescribirlos.

**A.2.2 Imagen OG 1200×630**
- Generada en build con `getImage` a partir de `vanesa-wide.jpg` (ella a la derecha, espacio libre a la izquierda) en JPG. Sin texto superpuesto: WhatsApp y LinkedIn ya muestran título y descripción debajo. Evita depender de `satori`/Canvas.
- Si Vanesa quiere el nombre dentro de la imagen, segunda fase con `astro-og-canvas`.

**A.2.3 `robots.txt`**
- `public/robots.txt` con `Allow: /` y `Sitemap: {site}/sitemap-index.xml`.

**A.2.4 JSON-LD**
- Componente `StructuredData.astro` en el `<head>` de la home con un `@graph`:
  - `AccountingService` (`name`, `telephone`, `email`, `areaServed: Colombia`, `url`, `image`, `priceRange` solo si ella confirma precios, `knowsAbout` con los 8 servicios).
  - `Person` (`name`, `jobTitle: Contadora Pública`, `hasCredential` con los dos títulos, `alumniOf` con las universidades, `sameAs` con LinkedIn).
  - `WebSite` con `inLanguage: es-CO`.
- `FAQPage` se añade cuando exista la FAQ (requiere respuestas de Vanesa).
- Validar con <https://validator.schema.org> y la prueba de resultados enriquecidos de Google.

**A.2.5 Páginas por servicio** (`/servicios/[slug]`)
- Colección de contenido `services` con schema Zod: `title`, `summary`, `icon`, `forWhom[]`, `includes[]`, `documents[]`, `faq[]`, `order`, `draft`. El cuerpo Markdown es la descripción larga.
- La home sigue leyendo de la colección (se elimina `site.services`), así no hay dos fuentes.
- Cada página: hero corto, qué incluye, para quién, documentos que pide, FAQ propia (`<details>` nativo + `FAQPage` JSON-LD), CTA a WhatsApp con el nombre del servicio, `BreadcrumbList`.
- Las descripciones largas son borrador nuestro marcado `PENDIENTE` hasta que Vanesa las revise (regla de oro del SPEC).

**A.2.6 Privacidad y 404**
- `/politica-de-privacidad`: texto base Ley 1581 con nombre, correo y canal para solicitudes. Enlace en el pie.
- `/404` con vuelta a servicios.

**A.2.7 Verificación**
- Lighthouse móvil ≥ 95 en SEO y accesibilidad; objetivo 100/100/100/100 y CLS 0.
- Vista previa de enlace comprobada en WhatsApp y LinkedIn Post Inspector.
- `astro check`, Biome y build sin errores.

### A.3 Fuera del código (recomendar a Vanesa)
- Perfil de Google Business con el mismo nombre, teléfono y correo de la web: es lo que más pesa en "contadora cerca de mí".
- Dominio propio (`vanesalotero.com` u otro) y `SITE_URL` en el deploy.
- Pedirle 2–3 testimonios reales y la ciudad: desbloquean testimonios, FAQ y SEO local.

---

## Parte B · Fondos y atmósfera

### B.1 Diagnóstico

Hoy los fondos son planos: `bg-paper` (blanco), `bg-surface` (gris) y `bg-ink` (navy). Funcionan pero la página se siente "de plantilla". Consultaro resuelve esto con **textura sutil, luz y profundidad**, nunca con color. Reglas que se mantienen:

- La paleta no cambia: navy, blanco, gris y un solo verde.
- Solo `transform`, `opacity`, `background-position` y `mask`: nada que provoque reflow.
- Todo definido en `@theme` de `global.css` como tokens y `@utility`, usado como clases Tailwind. Sin CSS por componente.
- Todo respeta `prefers-reduced-motion`: lo que se mueve se queda quieto, lo que es textura se queda.
- Nada por encima de 2 KB de CSS extra ni imágenes nuevas: todo es CSS/SVG inline.

### B.2 Catálogo de fondos (utilidades Tailwind)

| Utilidad | Qué hace | Dónde |
|---|---|---|
| `bg-grid` | Rejilla fina (1 px, `--color-line` al 60 %) con `mask-image` radial que la desvanece hacia los bordes. Evoca una hoja contable sin ser literal | Cifras, Servicios |
| `bg-dots` | Patrón de puntos (`radial-gradient` 1.5 px cada 24 px) muy tenue | Para quién |
| `bg-glow` | Mancha de luz verde (`radial-gradient` del acento al 12 %) desenfocada, posicionada con `--glow-x/--glow-y` | Hero (detrás del texto), Proceso, Contacto |
| `bg-noise` | Grano SVG inline (`feTurbulence`) al 4 % de opacidad sobre las bandas navy para quitarles el aspecto plano | Proceso, Contacto, pie |
| `bg-aurora` | Dos degradados cónicos navy/verde muy suaves que giran lentamente (`--animate-aurora`, 40 s) | Solo Contacto, detrás de la foto |
| `divider-wave` | Transición entre banda clara y oscura con un `clip-path` curvo en lugar de un corte recto | Entre Para quién → Proceso y Sobre mí → Contacto |

### B.3 Por sección

| Sección | Hoy | Propuesta |
|---|---|---|
| Hero | Foto + velo lineal | Se mantiene. Añadir `bg-glow` verde tenue detrás del titular para que el texto respire y una **línea de scroll** animada abajo ("desliza") que desaparece al hacer scroll |
| Cifras | Blanco plano | `bg-grid` con máscara radial centrada. Números con **contador animado** usando `@property` + `counter()` en CSS puro (sin JS); se queda estático con reduced-motion |
| Herramientas | Blanco | Se mantiene; solo el fundido lateral ya existente |
| Servicios | Gris plano | `bg-grid` más tenue; tarjetas con **borde degradado** (`border-image` conic sutil) que se ilumina al pasar el ratón, en vez del filete superior |
| Para quién | Blanco | `bg-dots`; las tres tarjetas con `bg-glow` en la esquina del icono al hacer hover |
| Proceso | Navy plano | `bg-noise` + `bg-glow` verde detrás de la foto; `divider-wave` de entrada. Los pasos se conectan con una **línea vertical que se dibuja** con el scroll (`animation-timeline: view()` sobre `scale-y`) |
| Sobre mí | Blanco | Se mantiene limpio (es la sección de lectura); solo una **línea de tiempo** sutil en Experiencia (punto + línea en el margen izquierdo) |
| Contacto | Foto + velo | `bg-aurora` lento detrás de la foto, `bg-noise` encima; las tarjetas de contacto con **brillo que sigue el cursor** (`--mx/--my` vía un script de 6 líneas, opcional; si no, hover estático) |
| Pie | Navy plano | `bg-noise` y un degradado vertical casi imperceptible hacia negro para "cerrar" la página |

### B.4 Movimiento nuevo (tokens en `@theme`)

| Token | Valor | Uso |
|---|---|---|
| `--animate-aurora` | `aurora 40s linear infinite` | Fondo del contacto |
| `--animate-scroll-hint` | `scroll-hint 1.8s var(--ease-fluid) infinite` | Línea de "desliza" del hero |
| `--animate-count` | `count 1.6s var(--ease-fluid) both` | Contador de cifras |
| `@utility draw-line` | `scale-y` de 0 a 1 con `animation-timeline: view()` | Línea de los pasos |

Presupuesto: ninguna animación continua en secciones de texto; solo aurora y pulso del botón de WhatsApp corren indefinidamente, ambas en el compositor.

### B.4.1 Lección

Un ancestro con `overflow: hidden` se convierte en contenedor de scroll y congela `animation-timeline: view()`/`scroll()`: las secciones usan `overflow-clip` y el fundido del hero usa `scroll(root)`.

### B.5 Verificación
- Capturas a 390 y 1440 px de cada sección, antes y después, en `docs/design/backgrounds/`.
- Lighthouse rendimiento móvil sin bajar de lo actual; comprobar que `animation-timeline` no dispara "layout shifts".
- Comprobación con `prefers-reduced-motion: reduce` activado: nada se mueve, la página sigue legible.
- Contraste AA del texto sobre los nuevos fondos (grid, dots y glow no deben bajar el contraste del texto gris `--color-ink-soft`).

---

## Orden de ejecución

| # | Tarea | Depende de |
|---|---|---|
| 1 ✅ | A.2.1 Metadatos + A.2.3 robots | — |
| 2 ✅ | A.2.2 Imagen OG | 1 |
| 3 ✅ | A.2.4 JSON-LD | 1 |
| 4 ✅ | B.2 Utilidades de fondo en `global.css` | — |
| 5 ✅ | B.3 Aplicar fondos sección a sección (un commit por sección) | 4 |
| 6 ✅ | B.4 Contador, línea de scroll, línea de pasos | 4 |
| 7 ⏳ | A.2.5 Páginas por servicio | Descripciones revisadas por Vanesa |
| 8 ⏳ | A.2.6 Privacidad y 404 | Datos legales de Vanesa (cédula/NIT) |
| 9 ✅ | A.2.7 + B.5 Verificación: Lighthouse 100×4, reduced-motion comprobado (solo queda el fundido de opacidad del indicador de scroll) | Todo |

Las tareas 1–6 se pueden hacer ya. 7 y 8 quedan bloqueadas por `docs/CLIENT-QUESTIONS.md` (ciudad, precios, datos legales, revisión de textos).

## Decisiones que te tocan

1. **Imagen OG sin texto** (solo su foto) o **con nombre y rol** dentro de la imagen (requiere `astro-og-canvas`).
2. **Brillo que sigue el cursor** en las tarjetas de contacto: son 6 líneas de JS. ¿Sí o solo hover?
3. **Separadores curvos** entre bandas: Consultaro usa cortes rectos. Propongo probarlos y decidir con la captura.
