# Plan y spec · SEO para agentes de IA

Borrador 1 · 17/10/2026 · Rama sugerida `feat/seo-ai-agents`. Parte del estado de `main` tras el PR #6.

**Objetivo:** que Claude, ChatGPT, Gemini y Perplexity, cuando buscan en la web por "contadora en Colombia", "declaración de renta persona natural" o el nombre de Vanesa, puedan leer la página, entender qué ofrece y citarla con datos correctos. Complementa `SEO-AND-BACKGROUNDS.md` (parte A), no lo reemplaza.

**Referencia:** la misma mejora ya está hecha en `stephany-art`, rama `feat/seo-ai-agents` (commit `95581bd`): `src/pages/llms.txt.ts` y `src/lib/seo.ts`.

---

## 1 · Auditoría (build local del 17/10/2026)

Cómo leen los agentes: descargan el HTML **sin ejecutar JavaScript**, respetan `robots.txt` y se apoyan en el JSON-LD y en el texto visible para responder.

| Elemento | Estado | Nota |
|---|---|---|
| HTML generado en build (SSG) | ✅ | 850 palabras de contenido real sin JS |
| `robots.txt` | ✅ | `Allow: /` para todos, incluye GPTBot, ClaudeBot, PerplexityBot |
| Title, description, canonical, hreflang, OG, Twitter | ✅ | Hecho en la parte A |
| Jerarquía de encabezados | ✅ | 1 `h1`, 5 `h2`, 17 `h3` |
| Sitemap con alternativas de idioma | ✅ | `i18n` ya configurado |
| **Dominio en producción** | ❌ | `vanesalotero.com` no resuelve hoy (`curl` sin respuesta). **Sin sitio publicado ningún agente puede leer nada**: es el bloqueo principal |
| `@id` del JSON-LD | ⚠️ | `StructuredData.astro` usa la URL de la página (`/` y `/en/`), así que Vanesa en español y en inglés son **dos personas distintas** para un parser. Debe ser un `@id` fijo de la raíz |
| Servicios en JSON-LD | ⚠️ | Solo `knowsAbout` con los títulos. Falta `hasOfferCatalog` con cada `Service` y su descripción, que es lo que un agente cita al responder "qué hace" |
| Ciudad / zona de atención | ❌ | `areaServed: Colombia` sin ciudad ni `address`. Pendiente de `CLIENT-QUESTIONS.md` |
| `llms.txt` | ❌ | No existe |
| `FAQPage` | ❌ | Bloqueado: la FAQ depende de respuestas de Vanesa (tarea 7 del plan anterior) |

## 2 · Tareas

Un commit por tarea, en este orden.

**2.1 `@id` estables en `StructuredData.astro`**
- `personId` y `businessId` se construyen con `new URL('/#person', Astro.site)` y `new URL('/#business', Astro.site)`, no con la URL de la página.
- `WebSite.@id` igual: `/#website`. La `url` de cada nodo sí sigue siendo la del idioma actual.

**2.2 Servicios como catálogo**
- En el nodo `AccountingService`, añadir `hasOfferCatalog` → `OfferCatalog` con un `Offer` por servicio, cada uno con `itemOffered: { '@type': 'Service', name, description }`, construido desde `t.services` (la misma fuente que pinta la home, sin duplicar textos).
- Mantener `knowsAbout`.
- `priceRange` solo si Vanesa confirma precios.

**2.3 `llms.txt`**
- Endpoint `src/pages/llms.txt.ts` (igual que en stephany-art), generado desde `getContent('es')` y `site`:
  - `# Vanesa Lotero`, `> descripción` (la `meta description`).
  - Perfil profesional y formación (`t.education`).
  - Servicios con su descripción, a quién va dirigido y el proceso.
  - Contacto: WhatsApp, correo y LinkedIn.
  - Enlaces a `/` y a `/en/`.
- Sin texto escrito a mano: si cambia el contenido, cambia el `llms.txt`.

**2.4 Ubicación (bloqueada)**
- Cuando Vanesa confirme la ciudad: `address` (`PostalAddress` con `addressLocality`, `addressRegion` y `addressCountry: CO`) en `AccountingService`, `areaServed` con ciudad + país, y la ciudad en el título (`"Contadora Pública en {ciudad}"`, como ya prevé A.2.1).

**2.5 Publicar y verificar**
- Deploy con `SITE_URL` apuntando al dominio real.
- Comprobar con `curl -A "Mozilla/5.0 (compatible; GPTBot/1.0)"` (y lo mismo con ClaudeBot, PerplexityBot, OAI-SearchBot) que responde 200. Si el hosting es Cloudflare, revisar que "Block AI bots" esté apagado.
- Validar el JSON-LD en <https://validator.schema.org>.
- Prueba real: preguntar a Claude, ChatGPT y Perplexity con búsqueda web "¿quién es Vanesa Lotero contadora?" y revisar que citen el sitio.

## Orden de ejecución

| # | Tarea | Depende de |
|---|---|---|
| 1 | 2.1 `@id` estables | — |
| 2 | 2.2 Catálogo de servicios | 1 |
| 3 | 2.3 `llms.txt` | — |
| 4 | 2.5 Publicar y verificar | Dominio y deploy |
| 5 ⏳ | 2.4 Ubicación | Ciudad confirmada por Vanesa |
| 6 ⏳ | `FAQPage` (tarea 7 de `SEO-AND-BACKGROUNDS.md`) | Respuestas de Vanesa |

Las tareas 1–3 se pueden hacer ya; son unas 80 líneas en total.

## Fuera de alcance

- Páginas por servicio y política de privacidad: ya están planeadas en `SEO-AND-BACKGROUNDS.md` (A.2.5 y A.2.6).
- Perfil de Google Business: sigue siendo lo que más pesa en búsquedas locales, y los agentes también lo consultan. Está en A.3.
