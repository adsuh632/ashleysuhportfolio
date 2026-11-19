/* eslint-disable */
// Ported from the original Framer code component bundle (rRbJFUYMrtmZ4O7Rb6B8wRYLFPSSdSWb6WV0ZgUcnyk.js lines 44-967).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, I as r, R as i, _ as a, b as o, c as s, j as c, l, o as u, p as d, s as f, w as p, y as m, } from "../shim/react.js";
import { C as h, a as ee, r as g, t as _ } from "../shim/motion.js";
import { B as v, C as y, D as b, N as x, S, T as C, X as w, a as T, at as te, c as E, ct as ne, dt as re, g as D, i as O, it as ie, mt as k, nt as ae, o as A, ot as oe, st as se, v as j, } from "../shim/framer.jsx";

function L(e) {
  let t = () => {
      if (e === `light` || e === `dark`) return e;
      if (typeof document > `u`) return `light`;
      for (let e of [document.documentElement, document.body]) {
        let t = e?.dataset?.theme;
        if (t === `light` || t === `dark`) return t;
        if (e?.classList?.contains(`dark`)) return `dark`;
        if (e?.classList?.contains(`light`)) return `light`;
      }
      try {
        for (let e of [`theme`, `site-theme`]) {
          let t = localStorage.getItem(e);
          if (t === `light` || t === `dark`) return t;
        }
      } catch {}
      return `light`;
    },
    [n, r] = a(`light`);
  return (
    m(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = () => r(t()),
        a = { attributes: !0, attributeFilter: [`data-theme`, `class`] },
        o = new MutationObserver(n);
      o.observe(document.documentElement, a),
        document.body && o.observe(document.body, a);
      let s = (e) => {
        let t = e?.detail;
        t === `light` || t === `dark` ? r(t) : n();
      };
      return (
        i.addEventListener(`snav-theme-change`, s),
        i.addEventListener(`site-theme-change`, s),
        i.addEventListener(`storage`, n),
        () => {
          o.disconnect(),
            i.removeEventListener(`snav-theme-change`, s),
            i.removeEventListener(`site-theme-change`, s),
            i.removeEventListener(`storage`, n);
        }
      );
    }, [e]),
    n
  );
}
function le({
  src: e,
  label: t,
  size: n,
  radius: r,
  muted: i,
  placeholder: a = `#F1F1F1`,
}) {
  let o = V(e);
  return o
    ? /*#__PURE__*/ u(`img`, {
        src: o,
        alt: t,
        style: {
          width: n,
          height: n,
          borderRadius: r,
          objectFit: `cover`,
          display: `block`,
        },
      })
    : /*#__PURE__*/ u(`div`, {
        style: {
          width: n,
          height: n,
          borderRadius: r,
          background: a,
          color: i,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          fontSize: n * 0.38,
          fontWeight: 600,
        },
        children: (t || `?`).trim().charAt(0).toUpperCase(),
      });
}
function R({ open: e, color: t }) {
  return /*#__PURE__*/ u(`svg`, {
    width: `14`,
    height: `14`,
    viewBox: `0 0 14 14`,
    style: {
      transition: `transform .25s ease`,
      transform: e ? `rotate(45deg)` : `none`,
    },
    children: /*#__PURE__*/ u(`path`, {
      d: `M7 1v12M1 7h12`,
      stroke: t,
      strokeWidth: `1.2`,
      strokeLinecap: `round`,
    }),
  });
}
function z({ e, p: t, signal: n }) {
  let [r, i] = a(!1);
  m(() => {
    n.n > 0 && i(n.open);
  }, [n.n]);
  let o = [e.photo1, e.photo2, e.photo3].map(V).filter(Boolean),
    s = !!e.details?.trim();
  return /*#__PURE__*/ l(`div`, {
    className: `rz-entry`,
    children: [
      /*#__PURE__*/ u(le, {
        src: e.logo,
        label: e.org,
        size: t.logoSize,
        radius: t.logoRadius,
        muted: t.muted,
        placeholder: t.placeholder,
      }),
      /*#__PURE__*/ l(`div`, {
        className: `rz-body`,
        children: [
          /*#__PURE__*/ l(`p`, {
            className: `rz-line`,
            children: [
              e.role,
              /*#__PURE__*/ u(`span`, { className: `rz-at`, children: `@` }),
              /*#__PURE__*/ u(`strong`, { children: e.org }),
            ],
          }),
          /*#__PURE__*/ u(`p`, {
            className: `rz-sub`,
            children: [e.dates, e.location].filter(Boolean).join(`  |  `),
          }),
          o.length > 0 &&
            /*#__PURE__*/ u(`div`, {
              className: `rz-photos`,
              children: o.map((e, t) =>
                /*#__PURE__*/ u(
                  `img`,
                  { src: e, alt: ``, className: `rz-photo` },
                  t,
                ),
              ),
            }),
          s &&
            /*#__PURE__*/ u(`div`, {
              className: `rz-details`,
              style: { gridTemplateRows: r ? `1fr` : `0fr` },
              children: /*#__PURE__*/ u(`div`, {
                style: { overflow: `hidden` },
                children: /*#__PURE__*/ u(`ul`, {
                  children: e.details
                    .split(
                      `
`,
                    )
                    .filter((e) => e.trim())
                    .map((e, t) =>
                      /*#__PURE__*/ u(
                        `li`,
                        { children: e.replace(/^[-•]\s*/, ``) },
                        t,
                      ),
                    ),
                }),
              }),
            }),
        ],
      }),
      s
        ? /*#__PURE__*/ u(`button`, {
            className: `rz-plus`,
            onClick: () => i(!r),
            "aria-label": `Toggle details`,
            children: /*#__PURE__*/ u(R, { open: r, color: t.icon }),
          })
        : /*#__PURE__*/ u(`span`, {}),
    ],
  });
}
function B(e) {
  let t = L(e.themeMode),
    n = { ...H, ...(e.darkColors || {}) },
    r =
      t === `dark`
        ? {
            ...e,
            background: n.background,
            text: n.text,
            muted: n.muted,
            icon: n.icon,
            nameColor: n.name,
            titleColor: n.title,
            placeholder: n.placeholder,
          }
        : { ...e, placeholder: `#F1F1F1` },
    [i, o] = a({ open: !1, n: 0 }),
    c = () => o((e) => ({ open: !e.open, n: e.n + 1 })),
    d = parseFloat(r.font?.fontSize) || r.base,
    f = r.paddingTop ?? 140,
    p = (e, t) => (Number.isFinite(Number(e)) ? Number(e) : t),
    m = p(r.tabletNameSize, Math.round(r.nameSize * 0.8)),
    h = p(r.tabletTitleSize, Math.round(r.titleSize * 0.85)),
    ee = p(r.tabletBody, d),
    g = p(r.tabletSmall, r.small),
    _ = p(r.phoneNameSize, 32),
    v = p(r.phoneTitleSize, 16),
    y = p(r.phoneBody, 14),
    b = p(r.phoneSmall, 12),
    x = (e, t) =>
      `clamp(${Math.round(e * t)}px, ${((e / 390) * 100).toFixed(2)}cqw, ${e}px)`,
    S = `
    .rz-wrap { width:100%; container-type:inline-size; background:${r.background}; transition:background-color .3s ease; }
    .rz { width:100%; max-width:${r.maxWidth}px; margin:0 auto; color:${r.text}; padding:${f}px ${r.paddingX}px ${r.paddingY}px; box-sizing:border-box; }
    .rz * { box-sizing:border-box; margin:0; padding:0; }
    .rz-head { margin-bottom:${r.headerGap}px; }
    .rz-name, .rz-title { overflow-wrap:anywhere; }
    .rz-name { font-family:'${r.nameFont}', sans-serif; font-size:${r.nameSize}px; font-weight:${r.nameWeight}; color:${r.nameColor}; letter-spacing:${r.nameTracking}em; line-height:1.1; }
    .rz-title { font-family:'${r.titleFont}', sans-serif; font-size:${r.titleSize}px; font-weight:${r.titleWeight}; color:${r.titleColor}; letter-spacing:${r.titleTracking}em; line-height:1.25; margin-top:${r.nameTitleGap}px; }
    .rz-sec:last-child { margin-bottom:0; }
    .rz-sec { display:grid; grid-template-columns:${r.labelWidth}px 1fr; margin-bottom:${r.sectionGap}px; }
    .rz-label { font-size:${r.small}px; color:${r.muted}; line-height:${r.logoSize}px; }
    .rz-stack { display:flex; flex-direction:column; gap:${r.entryGap}px; }
    .rz-entry { display:grid; grid-template-columns:${r.logoSize}px 1fr 24px; column-gap:${r.logoGap}px; align-items:start; }
    .rz-line { font-size:${d}px; line-height:1.45; }
    .rz-line strong { font-weight:600; }
    .rz-at { margin:0 .5em; font-weight:500; }
    .rz-sub { font-size:${r.small}px; color:${r.muted}; line-height:1.45; margin-top:2px; }
    .rz-photos { display:flex; gap:${r.photoGap}px; margin-top:14px; flex-wrap:wrap; }
    .rz-photo { width:${r.photoW}px; height:${r.photoH}px; border-radius:${r.photoRadius}px; object-fit:cover; display:block; transition:transform .25s ease; }
    .rz-photo:hover { transform:scale(1.04); }
    .rz-details { display:grid; transition:grid-template-rows .3s ease; }
    .rz-details ul { margin-top:12px; padding-left:1.1em; font-size:${r.small}px; line-height:1.6; color:${r.muted}; }
    .rz-details li { margin-bottom:4px; }
    .rz-plus { background:none; border:none; cursor:pointer; padding:4px; justify-self:end; line-height:0; opacity:.7; transition:opacity .2s; }
    .rz-plus:hover { opacity:1; }
    .rz-toolbar { display:flex; justify-content:flex-end; margin-bottom:24px; }
    .rz-expand { display:inline-flex; align-items:center; gap:8px; background:none; border:none; cursor:pointer; font:inherit; font-size:${r.small}px; color:${r.muted}; transition:color .2s; }
    .rz-expand:hover { color:${r.text}; }
    .rz-edu { font-size:${d}px; line-height:1.45; }
    .rz-edu strong { font-weight:600; }
    .rz-pipe { margin:0 .6em; }
    .rz-tools { display:grid; grid-template-columns:repeat(${r.toolCols}, ${r.toolSize}px); gap:${r.toolGap}px; }
    .rz-tool { width:${r.toolSize}px; height:${r.toolSize}px; border-radius:${r.toolRadius}px; object-fit:contain; display:block; transition:transform .2s ease; }
    .rz-tool:hover { transform:translateY(-2px); }
    .rz-tool-fallback { display:flex; align-items:center; justify-content:center; background:${r.placeholder}; color:${r.muted}; font-size:${r.toolSize * 0.3}px; font-weight:600; }
    .rz-award { display:grid; grid-template-columns:${r.logoSize}px 1fr 24px; column-gap:${r.logoGap}px; align-items:center; text-decoration:none; color:inherit; }
    .rz-award .rz-arrow { justify-self:end; opacity:.6; transition:opacity .2s, transform .2s; line-height:0; }
    .rz-award:hover .rz-arrow { opacity:1; transform:translate(2px,-2px); }
    .rz-skills { list-style:none; display:grid; grid-template-columns:repeat(3, 1fr); gap:14px 24px; }
    .rz-skills li { font-size:${d}px; line-height:1.45; }
    /* Tablet */
    @container (max-width: 1199px) {
      .rz { padding:${Math.round(f * 0.8)}px 32px ${Math.round(r.paddingY * 0.85)}px; }
      .rz-head { margin-bottom:${Math.round(r.headerGap * 0.75)}px; }
      .rz-name { font-size:${m}px; }
      .rz-title { font-size:${h}px; }
      .rz-line, .rz-edu, .rz-skills li { font-size:${ee}px; }
      .rz-sub, .rz-label, .rz-details ul, .rz-expand { font-size:${g}px; }
      .rz-sec { grid-template-columns:${Math.round(r.labelWidth * 0.65)}px 1fr; margin-bottom:${Math.round(r.sectionGap * 0.75)}px; }
      .rz-entry, .rz-award { column-gap:18px; }
      .rz-photo { width:${Math.round(r.photoW * 0.85)}px; height:${Math.round(r.photoH * 0.85)}px; }
    }
    /* Phone */
    @container (max-width: 809px) {
      .rz { padding:${Math.round(f * 0.6)}px 20px ${Math.round(r.paddingY * 0.7)}px; }
      .rz-head { margin-bottom:${Math.round(r.headerGap * 0.6)}px; }
      .rz-name { font-size:${x(_, 0.8)}; }
      .rz-title { font-size:${x(v, 0.85)}; margin-top:${Math.round(r.nameTitleGap * 0.6)}px; }
      .rz-sec { grid-template-columns:1fr; row-gap:18px; margin-bottom:56px; }
      .rz-label { line-height:1.4; font-size:${b}px; text-transform:uppercase; letter-spacing:.08em; }
      .rz-stack { gap:32px; }
      .rz-entry, .rz-award { grid-template-columns:36px 1fr 20px; column-gap:14px; }
      .rz-entry > :first-child, .rz-entry > :first-child img,
      .rz-award > :first-child, .rz-award > :first-child img { width:36px !important; height:36px !important; }
      .rz-line, .rz-edu { font-size:${y}px; }
      .rz-sub, .rz-details ul, .rz-expand { font-size:${b}px; }
      .rz-photos { display:grid; grid-template-columns:repeat(3, 1fr); }
      .rz-photo { width:100%; height:auto; aspect-ratio:${r.photoW} / ${r.photoH}; }
      .rz-photo:hover { transform:none; }
      .rz-tools { grid-template-columns:repeat(auto-fill, 40px); gap:${Math.round(r.toolGap * 0.8)}px; }
      .rz-skills { grid-template-columns:repeat(2, 1fr); gap:12px 16px; }
      .rz-skills li { font-size:${y}px; }
      .rz-tool { width:40px; height:40px; }
    }
    /* Small phones */
    @container (max-width: 379px) {
      .rz { padding-left:16px; padding-right:16px; }
      .rz-skills { grid-template-columns:1fr; }
      .rz-photos { grid-template-columns:repeat(2, 1fr); }
    }`,
    C = r.showHeader
      ? [
          .../* @__PURE__ */ new Set([
            `${r.nameFont}:${r.nameWeight}`,
            `${r.titleFont}:${r.titleWeight}`,
          ]),
        ]
          .filter((e) => !e.startsWith(`:`))
          .map((e) => {
            let [t, n] = e.split(`:`);
            return `https://fonts.googleapis.com/css2?family=${t.trim().replace(/\s+/g, `+`)}:wght@${n}&display=swap`;
          })
      : [],
    w = ({ label: e, children: t }) =>
      /*#__PURE__*/ l(`section`, {
        className: `rz-sec`,
        children: [
          /*#__PURE__*/ u(`p`, { className: `rz-label`, children: e }),
          /*#__PURE__*/ u(`div`, { children: t }),
        ],
      });
  return /*#__PURE__*/ u(`div`, {
    className: `rz-wrap`,
    children: /*#__PURE__*/ l(`div`, {
      className: `rz`,
      style: { fontFamily: `'DM Sans', Inter, sans-serif`, ...r.font },
      children: [
        C.map((e) =>
          /*#__PURE__*/ u(`link`, { rel: `stylesheet`, href: e }, e),
        ),
        /*#__PURE__*/ u(`style`, { children: S }),
        r.showHeader &&
          (r.name || r.title) &&
          /*#__PURE__*/ l(`header`, {
            className: `rz-head`,
            children: [
              r.name &&
                /*#__PURE__*/ u(`h1`, {
                  className: `rz-name`,
                  children: r.name,
                }),
              r.title &&
                /*#__PURE__*/ u(`p`, {
                  className: `rz-title`,
                  children: r.title,
                }),
            ],
          }),
        r.showExpandAll &&
          /*#__PURE__*/ u(`div`, {
            className: `rz-toolbar`,
            children: /*#__PURE__*/ l(`button`, {
              className: `rz-expand`,
              onClick: c,
              children: [
                /*#__PURE__*/ u(R, { open: i.open, color: r.icon }),
                /*#__PURE__*/ u(`span`, {
                  children: i.open ? `Collapse all` : `Expand all`,
                }),
              ],
            }),
          }),
        /*#__PURE__*/ u(w, {
          label: `Education`,
          children: /*#__PURE__*/ u(`div`, {
            className: `rz-stack`,
            style: { gap: 20 },
            children: r.education.map((e, t) =>
              /*#__PURE__*/ l(
                `div`,
                {
                  children: [
                    /*#__PURE__*/ l(`p`, {
                      className: `rz-edu`,
                      children: [
                        /*#__PURE__*/ u(`strong`, { children: e.degree }),
                        e.detail &&
                          /*#__PURE__*/ l(s, {
                            children: [
                              /*#__PURE__*/ u(`span`, {
                                className: `rz-pipe`,
                                children: `|`,
                              }),
                              e.detail,
                            ],
                          }),
                      ],
                    }),
                    /*#__PURE__*/ u(`p`, {
                      className: `rz-sub`,
                      children: e.school,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        }),
        /*#__PURE__*/ u(w, {
          label: `Experience`,
          children: /*#__PURE__*/ u(`div`, {
            className: `rz-stack`,
            children: r.experience.map((e, t) =>
              /*#__PURE__*/ u(z, { e, p: r, signal: i }, t),
            ),
          }),
        }),
        /*#__PURE__*/ u(w, {
          label: `Involvement`,
          children: /*#__PURE__*/ u(`div`, {
            className: `rz-stack`,
            children: r.involvement.map((e, t) =>
              /*#__PURE__*/ u(z, { e, p: r, signal: i }, t),
            ),
          }),
        }),
        /*#__PURE__*/ u(w, {
          label: `Toolbox`,
          children: /*#__PURE__*/ u(`div`, {
            className: `rz-tools`,
            children: r.toolbox.map((e, t) =>
              V(e.icon)
                ? /*#__PURE__*/ u(
                    `img`,
                    {
                      className: `rz-tool`,
                      src: V(e.icon),
                      alt: e.name,
                      title: e.name,
                    },
                    t,
                  )
                : /*#__PURE__*/ u(
                    `div`,
                    {
                      className: `rz-tool rz-tool-fallback`,
                      title: e.name,
                      children: (e.name || `?`).slice(0, 2),
                    },
                    t,
                  ),
            ),
          }),
        }),
        /*#__PURE__*/ u(w, {
          label: r.skillsLabel,
          children: /*#__PURE__*/ u(`ul`, {
            className: `rz-skills`,
            children: r.skills.map((e, t) =>
              /*#__PURE__*/ u(`li`, { children: e }, t),
            ),
          }),
        }),
      ],
    }),
  });
}
var V, H, U, W, G, K, q;
function ue() {
  return (ue = e(() => {
    r(),
      f(),
      p(),
      v(),
      (V = (e) => (typeof e == `string` ? e : e?.src)),
      (H = {
        background: `#1C1C1E`,
        text: `#F5F5F7`,
        muted: `#A1A1AA`,
        icon: `#8E8E93`,
        name: `#F5F5F7`,
        title: `#A1A1AA`,
        placeholder: `#1F1F1F`,
      }),
      (U = {
        Framer: `data:image/png;base64,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`,
        Figma: `data:image/png;base64,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`,
        "VS Code": `data:image/png;base64,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`,
        Cursor: `data:image/png;base64,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`,
        ChatGPT: `data:image/png;base64,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`,
        Claude: `data:image/png;base64,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`,
        GitHub: `data:image/png;base64,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`,
      }),
      (W = (e, t, n, r, i) => ({
        role: e,
        org: t,
        dates: n,
        location: r,
        details: i,
      })),
      (B.defaultProps = {
        showHeader: !0,
        name: `Ashley Suh`,
        title: `Product Designer`,
        nameFont: `DM Sans`,
        nameWeight: 500,
        nameSize: 44,
        nameColor: `#111111`,
        nameTracking: -0.02,
        titleFont: `DM Sans`,
        titleWeight: 400,
        titleSize: 18,
        titleColor: `#8A8A8A`,
        titleTracking: 0,
        nameTitleGap: 6,
        headerGap: 64,
        education: [
          {
            degree: `M.S. in Information`,
            detail: `Expected April 2027`,
            school: `University of Michigan School of Information`,
          },
          {
            degree: `B.S. in Cognitive Science`,
            detail: ``,
            school: `University of California, Santa Cruz`,
          },
        ],
        experience: [
          W(
            `UI/UX Designer Intern`,
            `4um`,
            `May - Aug 2026`,
            ``,
            `Owned end-to-end design for FilmReel, a curator-led film discovery platform
Shipped mobile and desktop breakpoints
Built an 80+ component Figma design system`,
          ),
          W(
            `AR Systems Product Manager`,
            `NASA x CLAWS`,
            `Sep 2025 - Present`,
            `Ann Arbor, MI`,
            `AR interfaces for the NASA SUITS Challenge (1 of 12 universities)
One of 2 teams nationally selected for flight testing by astronaut Anne McClain
Aligned AI, web and engineering teams through biweekly milestone reviews`,
          ),
          W(
            `Product Manager`,
            `TinuAI`,
            `Oct - Dec 2025`,
            `Ann Arbor, MI`,
            `B2B fintech assistant that retains institutional knowledge when analysts leave
Placed top 3 of 72 teams`,
          ),
          W(
            `Graduate Assistant`,
            `Campus Information Center`,
            `Oct 2025 - May 2026`,
            `Ann Arbor, MI`,
            `Managed student support workflows across systems including ResNav
Presented human vs. AI peer advising research at ACUM 2026`,
          ),
          W(
            `Research Assistant`,
            `UC Santa Cruz`,
            ``,
            `Santa Cruz, CA`,
            `Supported cognitive psychology studies on the effects of feedback on performance`,
          ),
        ],
        involvement: [
          W(
            `Product Lead`,
            `Tech4Good`,
            `Oct 2023 - Jun 2024`,
            ``,
            `Led a 5-member design team on a student career platform
Shipped the design team's onboarding program`,
          ),
          W(
            `Board Member`,
            `Psi Chi`,
            ``,
            `Santa Cruz, CA`,
            `Sourced guest speakers and connected students with researchers`,
          ),
        ],
        toolbox: [
          { name: `Framer`, icon: { src: U.Framer, alt: `Framer` } },
          { name: `Figma`, icon: { src: U.Figma, alt: `Figma` } },
          { name: `VS Code`, icon: { src: U[`VS Code`], alt: `VS Code` } },
          { name: `Cursor`, icon: { src: U.Cursor, alt: `Cursor` } },
          { name: `ChatGPT`, icon: { src: U.ChatGPT, alt: `ChatGPT` } },
          { name: `Claude`, icon: { src: U.Claude, alt: `Claude` } },
          { name: `GitHub`, icon: { src: U.GitHub, alt: `GitHub` } },
        ],
        showExpandAll: !0,
        skillsLabel: `Skills`,
        skills: [
          `Wireframing`,
          `Prototyping`,
          `AR/VR Design`,
          `Usability Testing`,
          `WCAG Accessibility`,
          `Design Systems`,
          `HTML/CSS`,
          `Python`,
          `Prompt Engineering`,
          `Product Design`,
          `Interaction Design`,
          `Visual Design`,
        ],
        background: `#FFFFFF`,
        text: `#111111`,
        muted: `#8A8A8A`,
        icon: `#9A9A9A`,
        themeMode: `auto`,
        base: 15,
        small: 14,
        labelWidth: 160,
        maxWidth: 960,
        logoSize: 44,
        logoRadius: 10,
        logoGap: 24,
        photoW: 132,
        photoH: 84,
        photoRadius: 10,
        photoGap: 8,
        toolSize: 44,
        toolRadius: 10,
        toolGap: 20,
        toolCols: 7,
        entryGap: 44,
        awardGap: 28,
        sectionGap: 80,
        paddingX: 24,
        paddingY: 48,
        paddingTop: 140,
        tabletNameSize: 40,
        tabletTitleSize: 17,
        tabletBody: 15,
        tabletSmall: 14,
        phoneNameSize: 32,
        phoneTitleSize: 16,
        phoneBody: 14,
        phoneSmall: 12,
      }),
      (G = {
        photo1: { type: A.ResponsiveImage, title: `Photo 1` },
        photo2: { type: A.ResponsiveImage, title: `Photo 2` },
        photo3: { type: A.ResponsiveImage, title: `Photo 3` },
      }),
      (K = (e) => ({
        type: A.Array,
        title: e,
        control: {
          type: A.Object,
          controls: {
            logo: { type: A.ResponsiveImage, title: `Logo` },
            role: { type: A.String, title: `Role` },
            org: { type: A.String, title: `Org` },
            dates: { type: A.String, title: `Dates` },
            location: { type: A.String, title: `Location` },
            ...G,
            details: {
              type: A.String,
              title: `Details (+)`,
              displayTextArea: !0,
            },
          },
        },
      })),
      (q = (e) => !e.showHeader),
      y(B, {
        showHeader: {
          type: A.Boolean,
          title: `Header`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        name: { type: A.String, title: `Name`, hidden: q },
        nameFont: {
          type: A.String,
          title: `Name font`,
          description: `Any Google Font name`,
          hidden: q,
        },
        nameWeight: {
          type: A.Number,
          title: `Name weight`,
          min: 100,
          max: 900,
          step: 100,
          hidden: q,
        },
        nameSize: {
          type: A.Number,
          title: `Name size`,
          min: 24,
          max: 200,
          unit: `px`,
          hidden: q,
        },
        nameTracking: {
          type: A.Number,
          title: `Name tracking`,
          min: -0.1,
          max: 0.2,
          step: 0.005,
          unit: `em`,
          hidden: q,
        },
        nameColor: { type: A.Color, title: `Name color`, hidden: q },
        title: { type: A.String, title: `Title`, hidden: q },
        titleFont: {
          type: A.String,
          title: `Title font`,
          description: `Any Google Font name`,
          hidden: q,
        },
        titleWeight: {
          type: A.Number,
          title: `Title weight`,
          min: 100,
          max: 900,
          step: 100,
          hidden: q,
        },
        titleSize: {
          type: A.Number,
          title: `Title size`,
          min: 10,
          max: 120,
          unit: `px`,
          hidden: q,
        },
        titleTracking: {
          type: A.Number,
          title: `Title tracking`,
          min: -0.1,
          max: 0.2,
          step: 0.005,
          unit: `em`,
          hidden: q,
        },
        titleColor: { type: A.Color, title: `Title color`, hidden: q },
        nameTitleGap: {
          type: A.Number,
          title: `Name ↔ title`,
          min: 0,
          max: 80,
          unit: `px`,
          hidden: q,
        },
        headerGap: {
          type: A.Number,
          title: `Header gap`,
          description: `Space below the header`,
          min: 0,
          max: 200,
          unit: `px`,
          hidden: q,
        },
        education: {
          type: A.Array,
          title: `Education`,
          control: {
            type: A.Object,
            controls: {
              degree: { type: A.String, title: `Degree` },
              detail: { type: A.String, title: `Detail` },
              school: { type: A.String, title: `School` },
            },
          },
        },
        experience: K(`Experience`),
        involvement: K(`Involvement`),
        toolbox: {
          type: A.Array,
          title: `Toolbox`,
          control: {
            type: A.Object,
            controls: {
              icon: { type: A.ResponsiveImage, title: `Icon` },
              name: { type: A.String, title: `Name` },
            },
          },
        },
        showExpandAll: {
          type: A.Boolean,
          title: `Expand all btn`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        skillsLabel: { type: A.String, title: `Skills label` },
        skills: { type: A.Array, title: `Skills`, control: { type: A.String } },
        font: {
          type: A.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 15 },
        },
        themeMode: {
          type: A.Enum,
          title: `Theme`,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Follow site`, `Light`, `Dark`],
          displaySegmentedControl: !0,
          defaultValue: `auto`,
        },
        darkColors: {
          type: A.Object,
          title: `Dark colors`,
          controls: {
            background: {
              type: A.Color,
              title: `Background`,
              defaultValue: `#151515`,
            },
            text: { type: A.Color, title: `Text`, defaultValue: `#F5F5F7` },
            muted: { type: A.Color, title: `Muted`, defaultValue: `#A1A1AA` },
            icon: { type: A.Color, title: `Icons`, defaultValue: `#8E8E93` },
            name: { type: A.Color, title: `Name`, defaultValue: `#F5F5F7` },
            title: { type: A.Color, title: `Title`, defaultValue: `#A1A1AA` },
            placeholder: {
              type: A.Color,
              title: `Logo placeholder`,
              defaultValue: `#1F1F1F`,
            },
          },
        },
        background: { type: A.Color, title: `Background` },
        text: { type: A.Color, title: `Text` },
        muted: { type: A.Color, title: `Muted` },
        icon: { type: A.Color, title: `Icons` },
        small: {
          type: A.Number,
          title: `Secondary size`,
          description: `Dates, locations, section labels, details`,
          min: 10,
          max: 24,
          unit: `px`,
        },
        tabletNameSize: {
          type: A.Number,
          title: `Tablet: name`,
          min: 16,
          max: 160,
          unit: `px`,
        },
        tabletTitleSize: {
          type: A.Number,
          title: `Tablet: title`,
          min: 10,
          max: 80,
          unit: `px`,
        },
        tabletBody: {
          type: A.Number,
          title: `Tablet: body`,
          min: 10,
          max: 24,
          unit: `px`,
        },
        tabletSmall: {
          type: A.Number,
          title: `Tablet: secondary`,
          min: 9,
          max: 22,
          unit: `px`,
        },
        phoneNameSize: {
          type: A.Number,
          title: `Phone: name`,
          description: `Size on a 390px phone; scales down on smaller phones`,
          min: 16,
          max: 100,
          unit: `px`,
        },
        phoneTitleSize: {
          type: A.Number,
          title: `Phone: title`,
          min: 10,
          max: 60,
          unit: `px`,
        },
        phoneBody: {
          type: A.Number,
          title: `Phone: body`,
          min: 10,
          max: 22,
          unit: `px`,
        },
        phoneSmall: {
          type: A.Number,
          title: `Phone: secondary`,
          min: 9,
          max: 20,
          unit: `px`,
        },
        maxWidth: {
          type: A.Number,
          title: `Max width`,
          min: 600,
          max: 1600,
          step: 10,
        },
        paddingX: { type: A.Number, title: `Side margin`, min: 0, max: 160 },
        paddingTop: {
          type: A.Number,
          title: `Top padding`,
          description: `Space for the nav. Tablet uses 80%, phone 60%`,
          min: 0,
          max: 300,
          unit: `px`,
          defaultValue: 140,
        },
        paddingY: {
          type: A.Number,
          title: `Bottom padding`,
          min: 0,
          max: 200,
          unit: `px`,
        },
        labelWidth: { type: A.Number, title: `Label col`, min: 80, max: 400 },
        logoSize: { type: A.Number, title: `Logo size`, min: 20, max: 80 },
        photoW: { type: A.Number, title: `Photo W`, min: 60, max: 300 },
        photoH: { type: A.Number, title: `Photo H`, min: 40, max: 240 },
        sectionGap: { type: A.Number, title: `Section gap`, min: 20, max: 200 },
        toolGap: {
          type: A.Number,
          title: `Tool spacing`,
          min: 0,
          max: 60,
          unit: `px`,
        },
        entryGap: { type: A.Number, title: `Entry gap`, min: 10, max: 120 },
      });
  }))();
}

ue();
export { B as Resume };
