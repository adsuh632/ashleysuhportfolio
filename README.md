# ashleysuh-site

React (Vite) replica of https://ashleysuh.framer.website.

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # static build in dist/
```

## How it's built

The live site is mostly made of custom Framer **code components** (nav, hero, project grid,
case-study template, about page, resume, FilmReel password gate). Rather than re-guess those,
their original source was pulled from the published bundles and runs here unchanged on small
shims, so layout, animation and behaviour match the original.

| Path | What it is |
| --- | --- |
| `src/pages/*` | One file per route: `/`, `/aboutme`, `/resume`, `/filmreelpw`, `/tinu-ai`, `/claws` |
| `src/components/Footer.jsx` | Footer (desktop / tablet / phone variants), rebuilt from the Framer canvas styles |
| `src/components/SiteNav.jsx` | Fixed header wrapper; applies the per-breakpoint nav size |
| `src/ported/*` | Original code components (minified names kept), extracted from the site's JS |
| `src/data/*` | **All page content**: text, image URLs, colors, fonts, layout settings per page |
| `src/shim/*` | Maps the bundles' imports onto React, framer-motion and react-router |
| `src/styles/fonts.css` | The original `@font-face` rules (Inter, Inter Display, Poppins, …) |
| `src/useBreakpoint.js` | Framer breakpoints: desktop ≥1400, tablet 810–1399, phone <810 |

Dark mode: the theme toggle stores `theme` in localStorage and sets `data-theme` on `<html>`,
exactly like the original.

## Assets

All images live in `public/images/` and are referenced as `/images/<id>.<ext>`. They were
downloaded from the original Framer CDN in the format browsers actually receive (mostly AVIF and
WebP). Requests without a modern `Accept` header get a palette-reduced PNG with visible color banding.
Variants that the original requested with `?scale-down-to=N` are saved as `<id>-N.<ext>` and used in `srcSet`.

Fonts are still loaded from Framer's CDN (`src/styles/fonts.css`). A few small images are embedded as
base64 `data:` URIs inside `src/ported/CaseStudy*.jsx`, `src/ported/Home.jsx` and `src/ported/About.jsx`.
The About page's iPod plays YouTube embeds.
