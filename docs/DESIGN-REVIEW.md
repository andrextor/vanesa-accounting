# Revisión de diseño · 12/10/2026

Análisis de la home frente a la referencia (Consultaro) y a buenas prácticas de UX, rendimiento y mantenimiento. Estado: ✅ aplicado en `feat/sections-redesign`, ⏳ pendiente.

## 1. Estructura y ritmo

| Hallazgo | Impacto | Estado |
|---|---|---|
| El menú desaparecía al salir del hero: sin navegación ni CTA en el resto de la página | Alto: el usuario no puede saltar a otra sección ni contactar | ✅ Menú flotante fijo (píldora de vidrio) con indicador de sección activa |
| En móvil no había menú | Alto | ✅ Menú a pantalla completa con desenfoque y enlaces escalonados |
| El contacto solo estaba al final y en el hero | Alto para conversión | ✅ Botón flotante de WhatsApp que aparece al salir del hero |
| Ritmo de fondos: claro → gris → claro → oscuro → claro → oscuro | Bueno: alterna y separa secciones sin bordes | ✅ Se mantiene |
| Consultaro tiene franja de logos de confianza; aquí no hay clientes con permiso | Medio | ✅ Franja animada de herramientas (Siigo, QuickBooks, SAP…) como señal de competencia, sin inventar clientes |
| "Sobre mí" muy largo con herramientas al final | Medio | ✅ Herramientas movidas a la franja; Sobre mí queda en formación, certificaciones y experiencia |
| Falta FAQ y testimonios | Alto para confianza y SEO | ⏳ Requiere respuestas de Vanesa (precios, modalidad, horario) y testimonios reales |

## 2. Componentes

| Hallazgo | Estado |
|---|---|
| Tarjetas de servicio con número "01…08" no aportaban significado | ✅ Icono por servicio (Phosphor), flecha que gira al pasar, filete verde que se dibuja arriba |
| Iconos SVG dibujados a mano, inconsistentes | ✅ Librería única: `@phosphor-icons/core` (regular), registro tipado en `src/lib/icons.ts`, componente `Icon.astro` |
| Logo ilegible en pequeño | ✅ Logo apilado "VANESA / LOTERO" en texto HTML (nítido a cualquier tamaño) + favicon "VL" en trazos |
| Tarjeta del nombre sobre la foto apretada | ✅ Insignia ProAdvisor en la esquina, tarjeta con nombre y rol en una línea |

## 3. Movimiento

Principios: una sola curva (`--ease-fluid`), solo `transform`/`opacity` (no provocan reflow), todo se apaga con `prefers-reduced-motion`.

| Animación | Técnica | Estado |
|---|---|---|
| Entrada del hero (texto escalonado + zoom suave de la foto) | Utilidades Tailwind `hero-in` y `animate-hero-zoom` | ✅ |
| Aparición al hacer scroll, escalonada por tarjeta (`--i`) | `@utility reveal` con `animation-timeline: view()`: sin JavaScript; navegadores sin soporte muestran el contenido quieto | ✅ |
| Hover de tarjetas: elevación, sombra, borde de acento | Clases Tailwind (`hover:-translate-y-1`, `group-hover:*`) | ✅ |
| Zoom de fotos al pasar el ratón | `group-hover:scale-105` dentro de `overflow-hidden` | ✅ |
| Franja de herramientas en bucle, se pausa al pasar el ratón | Token `--animate-marquee` en `@theme` → `motion-safe:animate-marquee` | ✅ |
| Indicador del menú que se desliza entre secciones | IntersectionObserver + transform | ✅ |
| Contador animado en cifras | ⏳ Descartado por ahora: requiere JS o `@property` y aporta poco |

Mantenimiento: todos los tiempos, curvas y keyframes viven en `@theme` (`src/styles/global.css`) y se usan como clases Tailwind; no hay CSS por componente salvo el indicador del menú.

## 4. Accesibilidad

- ✅ Enlace "Saltar al contenido", foco visible, `aria-current` en el menú, `aria-expanded` en el botón de menú, Escape cierra el menú.
- ✅ Iconos decorativos con `aria-hidden`; enlaces a WhatsApp con texto o `aria-label`.
- ⏳ Verificar contraste de `text-ink-soft` sobre `bg-surface` y del texto blanco sobre la foto del hero en móvil con Lighthouse.

## 5. Rendimiento y SEO

- ✅ Imágenes en WebP con `srcset` (sharp), foto del hero con `fetchpriority="high"`, una sola familia tipográfica precargada.
- ✅ Animaciones de scroll sin JavaScript; JS total: menú + botón flotante (pocos cientos de bytes).
- ⏳ JSON-LD (`AccountingService`, `Person`), imagen OG 1200×630 con `vanesa-wide.jpg`, `robots.txt`, páginas por servicio (§2 del SPEC).
- ⏳ Política de privacidad (Ley 1581) y enlace en el pie.
- ⏳ Ciudad real en el eyebrow y en el título (SEO local).
