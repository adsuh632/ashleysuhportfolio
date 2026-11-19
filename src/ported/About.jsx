/* eslint-disable */
// Ported from the original Framer code component bundle (bL3m5QQIVVJZz2rqF_BU19ZVKYmoBscj9c8D22YocD4.js lines 49-2664).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, F as r, I as i, N as a, O as o, R as s, _ as c, b as l, c as u, j as ee, l as d, m as te, o as f, p, s as m, w as h, y as g, } from "../shim/react.js";
import { C as _, a as v, n as y, r as b, t as x } from "../shim/motion.js";
import { B as S, C, D as w, N as T, S as E, T as D, X as O, a as k, at as ne, c as A, ct as re, dt as j, g as ie, i as M, it as ae, mt as oe, nt as N, o as P, ot as F, st as se, ut as I, v as ce, } from "../shim/framer.jsx";

function he({ color: e }) {
  return /*#__PURE__*/ f(`svg`, {
    width: `12`,
    height: `12`,
    viewBox: `0 0 14 14`,
    children: /*#__PURE__*/ f(`path`, {
      d: `M3 11L11 3M5 3h6v6`,
      stroke: e,
      strokeWidth: `1.3`,
      fill: `none`,
      strokeLinecap: `round`,
      strokeLinejoin: `round`,
    }),
  });
}
function ge({ photos: e, muted: t }) {
  let n = e.map(ye).filter(Boolean),
    [r, i] = c(0),
    a = Math.min(r, Math.max(0, n.length - 1));
  return n.length
    ? /*#__PURE__*/ d(`div`, {
        className: `ab-gallery`,
        children: [
          /*#__PURE__*/ d(`div`, {
            className: `ab-main`,
            children: [
              n.map((e, t) =>
                /*#__PURE__*/ f(
                  `img`,
                  {
                    src: e,
                    alt: ``,
                    className: `ab-portrait ab-slide`,
                    style: { opacity: +(t === a) },
                  },
                  t,
                ),
              ),
              n.length > 1 &&
                /*#__PURE__*/ d(u, {
                  children: [
                    /*#__PURE__*/ f(`button`, {
                      className: `ab-nav ab-prev`,
                      "aria-label": `Previous photo`,
                      onClick: () => i((a - 1 + n.length) % n.length),
                      children: `‹`,
                    }),
                    /*#__PURE__*/ f(`button`, {
                      className: `ab-nav ab-next`,
                      "aria-label": `Next photo`,
                      onClick: () => i((a + 1) % n.length),
                      children: `›`,
                    }),
                  ],
                }),
            ],
          }),
          n.length > 1 &&
            /*#__PURE__*/ f(`div`, {
              className: `ab-thumbs`,
              children: n.map((e, t) =>
                /*#__PURE__*/ f(
                  `button`,
                  {
                    className: `ab-thumb` + (t === a ? ` on` : ``),
                    onClick: () => i(t),
                    "aria-label": `Photo ${t + 1}`,
                    children: /*#__PURE__*/ f(`img`, { src: e, alt: `` }),
                  },
                  t,
                ),
              ),
            }),
        ],
      })
    : /*#__PURE__*/ f(_e, { src: null, className: `ab-portrait`, muted: t });
}
function _e({ src: e, className: t, muted: n }) {
  let r = ye(e);
  return r
    ? /*#__PURE__*/ f(`img`, { src: r, alt: ``, className: t })
    : /*#__PURE__*/ f(`div`, {
        className: t + ` ab-ph`,
        style: { color: n },
        children: `Add photo`,
      });
}
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
    [n, r] = c(`light`);
  return (
    g(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = () => r(t()),
        i = { attributes: !0, attributeFilter: [`data-theme`, `class`] },
        a = new MutationObserver(n);
      a.observe(document.documentElement, i),
        document.body && a.observe(document.body, i);
      let o = (e) => {
        let t = e?.detail;
        t === `light` || t === `dark` ? r(t) : n();
      };
      return (
        s.addEventListener(`snav-theme-change`, o),
        s.addEventListener(`site-theme-change`, o),
        s.addEventListener(`storage`, n),
        () => {
          a.disconnect(),
            s.removeEventListener(`snav-theme-change`, o),
            s.removeEventListener(`site-theme-change`, o),
            s.removeEventListener(`storage`, n);
        }
      );
    }, [e]),
    n
  );
}
function ve(e) {
  let t = L(e.themeMode),
    n = { ...Se, ...(e.darkColors || {}) },
    r =
      t === `dark`
        ? {
            background: n.background,
            text: n.text,
            muted: n.muted,
            divider: n.divider,
            placeholder: n.placeholder,
          }
        : {
            background: e.background,
            text: e.text,
            muted: e.muted,
            divider: e.divider,
            placeholder: `#F1F1F1`,
          },
    i = parseFloat(e.font?.fontSize) || 15,
    a = `
    .ab-wrap { width:100%; container-type:inline-size; background:${r.background}; transition:background-color .3s ease; }
    .ab { width:100%; max-width:${e.maxWidth}px; margin:0 auto; color:${r.text}; padding:${e.paddingTop}px ${e.paddingX}px ${e.paddingY}px; box-sizing:border-box; }
    .ab * { box-sizing:border-box; margin:0; padding:0; }

    .ab-hero { display:grid; grid-template-columns:${e.photoWidth}px 1fr; gap:${e.heroGap}px; align-items:center; }
    .ab-portrait { width:100%; aspect-ratio:4 / 5; object-fit:cover; border-radius:${e.radius}px; display:block; }
    .ab-gallery { width:100%; }
    .ab-main { position:relative; width:100%; aspect-ratio:4 / 5; }
    .ab-slide { position:absolute; inset:0; height:100%; transition:opacity .35s ease; }
    .ab-nav { position:absolute; top:50%; transform:translateY(-50%); width:32px; height:32px; border-radius:50%; border:none; background:rgba(255,255,255,.85); color:#111; font-size:20px; line-height:1; cursor:pointer; opacity:0; transition:opacity .2s; box-shadow:0 2px 8px rgba(0,0,0,.12); }
    .ab-prev { left:10px; } .ab-next { right:10px; }
    .ab-main:hover .ab-nav { opacity:1; }
    .ab-thumbs { display:flex; gap:8px; margin-top:10px; flex-wrap:wrap; }
    .ab-thumb { width:48px; height:48px; padding:0; border:2px solid transparent; border-radius:8px; overflow:hidden; cursor:pointer; background:none; opacity:.6; transition:opacity .2s, border-color .2s; }
    .ab-thumb img { width:100%; height:100%; object-fit:cover; display:block; }
    .ab-thumb:hover { opacity:1; }
    .ab-thumb.on { opacity:1; border-color:${r.text}; }
    .ab-headline strong, .ab-bio strong { font-weight:${e.boldWeight}; }
    .ab-headline { font-size:${i * 2}px; line-height:1.15; font-weight:500; letter-spacing:-0.02em; margin-bottom:20px; }
    .ab-bio { font-size:${i}px; line-height:1.65; color:${r.text}; }
    .ab-bio + .ab-bio { margin-top:14px; }
    .ab-links { display:flex; gap:20px; margin-top:28px; flex-wrap:wrap; }
    .ab-link { display:inline-flex; align-items:center; gap:6px; font-size:${e.small}px; color:${r.muted}; text-decoration:none; transition:color .2s; }
    .ab-link:hover { color:${r.text}; }




    .pg { margin-top:${e.sectionGap}px; padding-top:${Math.round(e.sectionGap * 0.6)}px; border-top:1px solid ${r.divider}; }
    .pg-head { display:flex; justify-content:space-between; align-items:baseline; gap:16px; flex-wrap:wrap; margin-bottom:40px; }
    .pg-title { font-size:${e.small}px; color:${r.muted}; }
    .pg-hint { font-size:${e.small}px; color:${r.muted}; }
    .pg-row { display:flex; gap:${e.playGap}px; align-items:center; }
    .pg-ipod-col { flex:0 0 ${e.ipodWidth}px; display:flex; flex-direction:column; align-items:center; order:${e.ipodSide === `right` ? 2 : 0}; }
    .pg-ipod { display:flex; justify-content:center; max-width:100%; }
    .pg-ipod > * { max-width:100% !important; }
    .pg-folders-col { flex:1 1 auto; min-width:0; order:1; }
    .pg-folders { position:relative; width:100%; height:${e.folderHeight}px; overflow:hidden; border-radius:${e.radius}px; }
    .pg-fill > * { position:relative !important; left:auto !important; top:auto !important; width:100% !important; height:100% !important; }
    .pg-empty { border:1px dashed ${r.divider}; border-radius:${e.radius}px; font-size:${e.small}px; display:flex; align-items:center; justify-content:center; }
    .pg-ipod-empty { width:200px; max-width:100%; aspect-ratio:3 / 4.4; }

    .ab-ph { display:flex !important; align-items:center; justify-content:center; background:${r.placeholder}; font-size:${e.small}px; }

    /* Tablet */
    @container (max-width: 1199px) {
      .ab { padding:${Math.round(e.paddingTop * 0.8)}px 32px 40px; }
      .ab-hero { grid-template-columns:${Math.round(e.photoWidth * 0.8)}px 1fr; gap:40px; }
      .pg { margin-top:64px; padding-top:48px; }
      .pg-row { flex-direction:column; align-items:stretch; gap:${e.stackGap}px; }
      .pg-ipod-col { flex-basis:auto; order:0; }
      .pg-folders-col { order:1; width:100%; }
      .pg-folders { height:${e.folderHeightTablet}px; }
    }
    /* Phone */
    @container (max-width: 809px) {
      .ab { padding:${Math.round(e.paddingTop * 0.6)}px 20px 32px; }
      .ab-hero { grid-template-columns:1fr; gap:28px; }
      .ab-gallery { max-width:${e.photoWidthPhone}px; margin:0 auto; }
      .ab-portrait { max-width:${e.photoWidthPhone}px; margin:0 auto; }
      .ab-nav { opacity:1; }
      .ab-thumbs { justify-content:center; }
      .ab-headline { font-size:${Math.round(i * 1.6)}px; }
      .pg { margin-top:56px; padding-top:40px; }
      .pg-head { margin-bottom:28px; }
      .pg-head { flex-direction:column; gap:4px; }
      .pg-row { gap:${Math.round(e.stackGap * 0.75)}px; }
      .pg-folders { height:${e.folderHeightPhone}px; }
    }`;
  return /*#__PURE__*/ f(`div`, {
    className: `ab-wrap`,
    children: /*#__PURE__*/ d(`div`, {
      className: `ab`,
      style: { fontFamily: `'DM Sans', Inter, sans-serif`, ...e.font },
      children: [
        /*#__PURE__*/ f(`style`, { children: a }),
        /*#__PURE__*/ d(`header`, {
          className: `ab-hero`,
          children: [
            /*#__PURE__*/ f(ge, {
              photos: [e.portrait, ...(e.photos || [])],
              muted: r.muted,
            }),
            /*#__PURE__*/ d(`div`, {
              children: [
                /*#__PURE__*/ f(`h1`, {
                  className: `ab-headline`,
                  children: be(e.headline),
                }),
                e.bio
                  .split(
                    `

`,
                  )
                  .map((e, t) =>
                    /*#__PURE__*/ f(
                      `p`,
                      { className: `ab-bio`, children: be(e) },
                      t,
                    ),
                  ),
                /*#__PURE__*/ d(`div`, {
                  className: `ab-links`,
                  children: [
                    e.email &&
                      /*#__PURE__*/ d(`a`, {
                        className: `ab-link`,
                        href: `mailto:${e.email}`,
                        children: [
                          `Email `,
                          /*#__PURE__*/ f(he, { color: `currentColor` }),
                        ],
                      }),
                    e.linkedin &&
                      /*#__PURE__*/ d(`a`, {
                        className: `ab-link`,
                        href: e.linkedin,
                        target: `_blank`,
                        rel: `noreferrer`,
                        children: [
                          `LinkedIn `,
                          /*#__PURE__*/ f(he, { color: `currentColor` }),
                        ],
                      }),
                    e.resumeLink &&
                      /*#__PURE__*/ d(`a`, {
                        className: `ab-link`,
                        href: e.resumeLink,
                        children: [
                          `Resume `,
                          /*#__PURE__*/ f(he, { color: `currentColor` }),
                        ],
                      }),
                  ],
                }),
              ],
            }),
          ],
        }),
        /*#__PURE__*/ d(`section`, {
          className: `pg`,
          children: [
            /*#__PURE__*/ d(`div`, {
              className: `pg-head`,
              children: [
                /*#__PURE__*/ f(`p`, {
                  className: `pg-title`,
                  children: e.playTitle,
                }),
                /*#__PURE__*/ f(`p`, {
                  className: `pg-hint`,
                  children: e.playHint,
                }),
              ],
            }),
            /*#__PURE__*/ d(`div`, {
              className: `pg-row`,
              children: [
                /*#__PURE__*/ f(`div`, {
                  className: `pg-ipod-col`,
                  children: Ce(e.ipod)
                    ? /*#__PURE__*/ f(`div`, {
                        className: `pg-ipod`,
                        children: e.ipod,
                      })
                    : /*#__PURE__*/ f(`div`, {
                        className: `pg-empty pg-ipod-empty`,
                        style: { color: r.muted },
                        children: `Connect iPod`,
                      }),
                }),
                /*#__PURE__*/ f(`div`, {
                  className: `pg-folders-col`,
                  children: Ce(e.folders)
                    ? /*#__PURE__*/ f(`div`, {
                        className: `pg-folders pg-fill`,
                        children: xe(e.folders),
                      })
                    : /*#__PURE__*/ f(`div`, {
                        className: `pg-folders pg-empty`,
                        style: { color: r.muted },
                        children: `Connect folders`,
                      }),
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  });
}
var ye, be, xe, Se, Ce;
function R() {
  return (R = e(() => {
    i(),
      m(),
      h(),
      S(),
      (ye = (e) => (typeof e == `string` ? e : e?.src)),
      (be = (e = ``) =>
        e
          .split(/(\*\*[^*]+\*\*)/g)
          .map((e, t) =>
            e.startsWith(`**`) && e.endsWith(`**`)
              ? /*#__PURE__*/ f(`strong`, { children: e.slice(2, -2) }, t)
              : e,
          )),
      (xe = (e) =>
        /*#__PURE__*/ te(e)
          ? /*#__PURE__*/ r(e, {
              style: {
                ...(e.props.style || {}),
                width: `100%`,
                height: `100%`,
              },
            })
          : e),
      (Se = {
        background: `#1C1C1E`,
        text: `#F5F5F7`,
        muted: `#A1A1AA`,
        divider: `#2C2C2E`,
        placeholder: `#1F1F1F`,
      }),
      (Ce = (e) => !!e && (!Array.isArray(e) || e.length > 0)),
      (ve.defaultProps = {
        headline: `I design for how people actually think.`,
        photos: [],
        boldWeight: 600,
        bio: `I'm a product designer finishing my Master's at the University of Michigan School of Information. My background in cognitive science shapes how I work: I start with how people perceive, decide and learn, then design from there.

Recently I shipped FilmReel, a curator-led film discovery platform at 4um, and built AR interfaces for NASA's SUITS Challenge that were selected for astronaut flight testing.`,
        email: ``,
        linkedin: ``,
        resumeLink: `/resume`,
        background: `#FFFFFF`,
        text: `#111111`,
        muted: `#8A8A8A`,
        small: 14,
        maxWidth: 960,
        paddingX: 24,
        paddingTop: 120,
        paddingY: 48,
        heroGap: 64,
        photoWidth: 340,
        photoWidthPhone: 300,
        playTitle: `Get to know me`,
        playHint: `Press play or open a folder`,
        ipodSide: `left`,
        divider: `#E6E6E6`,
        sectionGap: 80,
        playGap: 64,
        folderHeight: 440,
        folderHeightTablet: 360,
        folderHeightPhone: 320,
        stackGap: 32,
        ipodWidth: 240,
        radius: 12,
        themeMode: `auto`,
      }),
      C(ve, {
        portrait: { type: P.ResponsiveImage, title: `Main photo` },
        photos: {
          type: P.Array,
          title: `More photos`,
          maxCount: 8,
          control: { type: P.ResponsiveImage },
        },
        headline: {
          type: P.String,
          title: `Headline`,
          description: `**Wrap words** to bold them`,
        },
        bio: {
          type: P.String,
          title: `Bio`,
          displayTextArea: !0,
          description: `Blank line = new paragraph. **Wrap words** to bold them.`,
        },
        boldWeight: {
          type: P.Enum,
          title: `Bold weight`,
          options: [500, 600, 700],
          optionTitles: [`Medium`, `Semibold`, `Bold`],
          displaySegmentedControl: !0,
        },
        email: { type: P.String, title: `Email` },
        linkedin: { type: P.String, title: `LinkedIn URL` },
        resumeLink: { type: P.Link, title: `Resume link` },
        playTitle: { type: P.String, title: `Playground title` },
        playHint: { type: P.String, title: `Playground hint` },
        ipod: { type: P.ComponentInstance, title: `iPod` },
        folders: { type: P.ComponentInstance, title: `Folders` },
        ipodSide: {
          type: P.Enum,
          title: `iPod side`,
          options: [`left`, `right`],
          optionTitles: [`Left`, `Right`],
          displaySegmentedControl: !0,
        },
        font: {
          type: P.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: 15 },
        },
        small: {
          type: P.Number,
          title: `Secondary size`,
          min: 10,
          max: 24,
          unit: `px`,
        },
        themeMode: {
          type: P.Enum,
          title: `Theme`,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Follow site`, `Light`, `Dark`],
          displaySegmentedControl: !0,
          defaultValue: `auto`,
        },
        darkColors: {
          type: P.Object,
          title: `Dark colors`,
          controls: {
            background: {
              type: P.Color,
              title: `Background`,
              defaultValue: `#151515`,
            },
            text: { type: P.Color, title: `Text`, defaultValue: `#F5F5F7` },
            muted: { type: P.Color, title: `Muted`, defaultValue: `#A1A1AA` },
            divider: {
              type: P.Color,
              title: `Divider`,
              defaultValue: `#2C2C2E`,
            },
            placeholder: {
              type: P.Color,
              title: `Photo placeholder`,
              defaultValue: `#1F1F1F`,
            },
          },
        },
        background: { type: P.Color, title: `Background` },
        text: { type: P.Color, title: `Text` },
        muted: { type: P.Color, title: `Muted` },
        maxWidth: {
          type: P.Number,
          title: `Max width`,
          min: 600,
          max: 1600,
          step: 10,
        },
        paddingX: { type: P.Number, title: `Side margin`, min: 0, max: 160 },
        paddingTop: {
          type: P.Number,
          title: `Top padding`,
          description: `Tablet uses 80%, phone 60%`,
          min: 0,
          max: 300,
          unit: `px`,
        },
        paddingY: {
          type: P.Number,
          title: `Bottom padding`,
          min: 0,
          max: 200,
          unit: `px`,
        },
        photoWidth: {
          type: P.Number,
          title: `Photo size`,
          min: 180,
          max: 600,
          unit: `px`,
          description: `Desktop width (tablet uses 80%)`,
        },
        photoWidthPhone: {
          type: P.Number,
          title: `Photo size (phone)`,
          min: 160,
          max: 500,
          unit: `px`,
        },
        heroGap: { type: P.Number, title: `Photo/text gap`, min: 0, max: 160 },
        sectionGap: { type: P.Number, title: `Section gap`, min: 0, max: 200 },
        playGap: { type: P.Number, title: `iPod/folder gap`, min: 0, max: 160 },
        ipodWidth: {
          type: P.Number,
          title: `iPod column`,
          min: 120,
          max: 400,
          unit: `px`,
        },
        folderHeight: {
          type: P.Number,
          title: `Folder area`,
          description: `Height for folders + the window that opens`,
          min: 240,
          max: 900,
          unit: `px`,
        },
        folderHeightTablet: {
          type: P.Number,
          title: `Folder area (tablet)`,
          min: 200,
          max: 900,
          unit: `px`,
        },
        folderHeightPhone: {
          type: P.Number,
          title: `Folder area (phone)`,
          min: 200,
          max: 900,
          unit: `px`,
        },
        stackGap: {
          type: P.Number,
          title: `iPod → folders gap`,
          description: `Tablet & phone`,
          min: 0,
          max: 120,
          unit: `px`,
        },
        divider: { type: P.Color, title: `Divider` },
        radius: { type: P.Number, title: `Corner radius`, min: 0, max: 40 },
      });
  }))();
}
function we(e) {
  let {
      theme: t = `classic`,
      youtubeUrl: n = ``,
      textShadow: r = !1,
      font: i,
      ownerName: te = `Zihan`,
      size: p = `default`,
    } = e,
    [m, h] = c([]),
    [_, v] = c(0),
    [y, b] = c(!1),
    [x, S] = c([`main`, `music`, `allsongs`]),
    [C, w] = c(0),
    [T, E] = c(!1),
    [D, O] = c(!1),
    [k, ne] = c(!0),
    [A, re] = c(!1),
    [j, ie] = c(`off`),
    [M, ae] = c(!1),
    [oe, N] = c(``),
    [P, F] = c(``),
    [se, I] = c(!1),
    [ce, le] = c(``),
    [ue, de] = c(!1),
    [fe, pe] = c(0),
    [me, he] = c(!1),
    [ge, _e] = c(0),
    [L, ve] = c(!1),
    [ye, be] = c(!1),
    [xe, Se] = c(0),
    [Ce, R] = c(!1),
    [we, Te] = c(1),
    Ee = l(null),
    [De, Oe] = c(!1),
    [z, ke] = c(!1);
  l(null);
  let B = l(null),
    V = l(null),
    H = l(null),
    Ae = l(!1),
    je = l(0),
    U = l(null),
    W = l(!1),
    G = m[_],
    K = o(() => {
      D &&
        (T || a(() => E(!0)),
        U.current && clearTimeout(U.current),
        (U.current = s.setTimeout(() => {
          a(() => E(!1));
        }, 3e4)));
    }, [T, D]);
  ee(() => {
    switch (t) {
      case `black`:
        return {
          device: `rgba(0, 0, 0, 0.85)`,
          wheel: `rgba(38, 38, 38, 0.5)`,
          centerButton: `rgba(0, 0, 0, 0.6)`,
        };
      case `u2`:
        return {
          device: `rgba(0, 0, 0, 0.85)`,
          wheel: `rgba(185, 28, 28, 0.6)`,
          centerButton: `rgba(0, 0, 0, 0.6)`,
        };
      default:
        return {
          device: `rgba(255, 255, 255, 0.85)`,
          wheel: `rgba(209, 213, 219, 0.6)`,
          centerButton: `rgba(255, 255, 255, 0.6)`,
        };
    }
  }, [t]);
  let q = o((e) => {
      a(() => {
        S(e), w(0);
      });
    }, []),
    Me = o((e) => {
      (W.current = !0),
        a(() => {
          v(e), b(!0), R(!0), S([`nowplaying`]), Se((e) => e + 1);
        });
    }, []),
    Ne = o(() => {
      if (m.length === 0) return;
      let e = m.map((e, t) => t);
      for (let t = e.length - 1; t > 0; t--) {
        let n = Math.floor(Math.random() * (t + 1));
        [e[t], e[n]] = [e[n], e[t]];
      }
      a(() => {
        re(!0);
        let e = Math.floor(Math.random() * m.length);
        v(e),
          (W.current = !0),
          b(!0),
          R(!0),
          S([`nowplaying`]),
          Se((e) => e + 1);
      });
    }, [m.length]),
    J = ee(() => {
      let e = /* @__PURE__ */ new Set();
      return (
        m.forEach((t) => {
          t.artist && t.artist.trim() && e.add(t.artist.trim());
        }),
        Array.from(e).sort((e, t) =>
          e.localeCompare(t, void 0, { sensitivity: `base` }),
        )
      );
    }, [m]),
    Y = ee(() => {
      let e = {};
      return (
        m.forEach((t, n) => {
          let r = t.artist?.trim() || `Unknown Artist`;
          e[r] || (e[r] = []), e[r].push({ track: t, index: n });
        }),
        e
      );
    }, [m]),
    Pe = o((e) => {
      let t = e.trim(),
        n = t.match(/(?:youtube\.com\/watch\?v=)([a-zA-Z0-9_-]{11})/);
      if (n) return n[1];
      let r = t.match(/(?:youtu\.be\/)([a-zA-Z0-9_-]{11})/);
      return r ? r[1] : /^[a-zA-Z0-9_-]{11}$/.test(t) ? t : null;
    }, []);
  g(() => {
    if (!n || n.trim() === ``) {
      a(() => {
        h([
          {
            id: `dQw4w9WgXcQ`,
            url: `https://www.youtube.com/watch?v=dQw4w9WgXcQ`,
            title: `Never Gonna Give You Up`,
            artist: `Rick Astley`,
            album: `Whenever You Need Somebody`,
          },
          {
            id: `9bZkp7q19f0`,
            url: `https://www.youtube.com/watch?v=9bZkp7q19f0`,
            title: `Gangnam Style`,
            artist: `PSY`,
          },
          {
            id: `kJQP7kiw5Fk`,
            url: `https://www.youtube.com/watch?v=kJQP7kiw5Fk`,
            title: `Despacito`,
            artist: `Luis Fonsi`,
          },
        ]);
      });
      return;
    }
    let e = n
        .split(`,`)
        .map((e) => e.trim())
        .filter((e) => e.length > 0),
      t = [];
    e.forEach((e) => {
      let n = Pe(e);
      n &&
        t.push({
          id: n,
          url: `https://www.youtube.com/watch?v=${n}`,
          title: `Loading...`,
          artist: `YouTube`,
        });
    }),
      t.length > 0 &&
        (a(() => {
          h(t), v(0);
        }),
        t.forEach(async (e, t) => {
          try {
            let n = await fetch(
              `https://www.youtube.com/oembed?url=${encodeURIComponent(e.url)}&format=json`,
            );
            if (n.ok) {
              let r = await n.json();
              a(() => {
                h((n) => {
                  let i = [...n];
                  return (
                    i[t] &&
                      (i[t] = {
                        ...i[t],
                        title: r.title || e.title,
                        artist: r.author_name || `YouTube`,
                      }),
                    i
                  );
                });
              });
            }
          } catch (e) {
            console.error(`Failed to fetch YouTube title:`, e);
          }
        }));
  }, [n, Pe]),
    g(() => {
      if (s === void 0) return;
      if (s.YT && s.YT.Player) {
        a(() => be(!0));
        return;
      }
      let e = document.createElement(`script`);
      e.src = `https://www.youtube.com/iframe_api`;
      let t = document.getElementsByTagName(`script`)[0];
      t.parentNode?.insertBefore(e, t),
        (s.onYouTubeIframeAPIReady = () => {
          console.log(`YouTube IFrame API Ready`), a(() => be(!0));
        });
    }, []),
    g(
      () =>
        s === void 0 || !G || !ye
          ? void 0
          : (a(() => {
              he(!1), ve(!1), pe(0), _e(0);
            }),
            setTimeout(() => {
              if (s.YT && s.YT.Player) {
                if (V.current) {
                  try {
                    V.current.destroy();
                  } catch (e) {
                    console.log(`Player destroy error (safe to ignore):`, e);
                  }
                  V.current = null;
                }
                V.current = new s.YT.Player(`youtube-player-${G.id}`, {
                  videoId: G.id,
                  playerVars: {
                    autoplay: 0,
                    controls: 0,
                    modestbranding: 1,
                    showinfo: 0,
                    rel: 0,
                    iv_load_policy: 3,
                    fs: 0,
                    disablekb: 1,
                  },
                  events: {
                    onReady: (e) => {
                      console.log(`Player ready for:`, G.id);
                      let t = e.target.getDuration();
                      a(() => {
                        _e(t), he(!0);
                      }),
                        W.current &&
                          (console.log(`Auto playing track:`, G.id),
                          e.target.playVideo(),
                          (W.current = !1),
                          a(() => R(!1)));
                    },
                    onStateChange: (e) => {
                      console.log(`Player state changed:`, e.data),
                        e.data === 1
                          ? (a(() => {
                              b(!0);
                            }),
                            Fe())
                          : e.data === 2
                            ? (a(() => b(!1)), Ie())
                            : e.data === 0
                              ? Le()
                              : e.data;
                    },
                  },
                });
              }
            }, 50),
            () => {
              Ie();
            }),
      [_, G, ye, xe],
    );
  let Fe = o(() => {
      H.current && clearInterval(H.current),
        (H.current = s.setInterval(() => {
          if (V.current && V.current.getCurrentTime) {
            let e = V.current.getCurrentTime();
            a(() => pe(e));
          }
        }, 100));
    }, []),
    Ie = o(() => {
      H.current &&= (clearInterval(H.current), null);
    }, []);
  g(
    () => () => {
      Ie();
    },
    [Ie],
  );
  let X = o(() => {
      V.current &&
        (me
          ? y
            ? (V.current.pauseVideo(), a(() => b(!1)))
            : (V.current.playVideo(), a(() => b(!0)))
          : console.log(`Player not ready yet`));
    }, [y, me]),
    Le = o(() => {
      if (m.length === 0) return;
      let e;
      if (A) {
        if (((e = Math.floor(Math.random() * m.length)), m.length > 1))
          for (; e === _; ) e = Math.floor(Math.random() * m.length);
      } else if (((e = _ + 1), e >= m.length)) {
        if (j === `all`) e = 0;
        else return;
      }
      (W.current = !0),
        a(() => {
          v(e), b(!0), R(!0);
        });
    }, [_, m.length, j, A]),
    Re = o(() => {
      if (m.length === 0) return;
      let e;
      if (A) {
        if (((e = Math.floor(Math.random() * m.length)), m.length > 1))
          for (; e === _; ) e = Math.floor(Math.random() * m.length);
      } else (e = _ - 1), e < 0 && (e = j === `all` ? m.length - 1 : 0);
      (W.current = !0),
        a(() => {
          v(e), b(!0), R(!0);
        });
    }, [_, m.length, j, A]),
    ze = ee(() => {
      let e = {
        main: [
          { label: `Music`, action: () => q([`main`, `music`]) },
          { label: `Extras`, action: () => {} },
          { label: `Settings`, action: () => q([`main`, `settings`]) },
          { label: `Shuffle Songs`, action: () => Ne() },
          {
            label: `Backlight`,
            action: () =>
              a(() => {
                let e = !T;
                E(e), O(e);
              }),
          },
          ...(G
            ? [{ label: `Now Playing`, action: () => q([`nowplaying`]) }]
            : []),
        ],
        music: [
          {
            label: `All Songs`,
            action: () => q([`main`, `music`, `allsongs`]),
          },
          { label: `Artists`, action: () => q([`main`, `music`, `artists`]) },
        ],
        settings: [
          {
            label: `Shuffle: ${A ? `On` : `Off`}`,
            action: () => a(() => re(!A)),
          },
          {
            label: `Repeat: ${j === `off` ? `Off` : j === `one` ? `One` : `All`}`,
            action: () =>
              a(() => ie(j === `off` ? `one` : j === `one` ? `all` : `off`)),
          },
          {
            label: `Backlight: ${T ? `On` : `Off`}`,
            action: () =>
              a(() => {
                let e = !T;
                E(e), O(e);
              }),
          },
          {
            label: `LCD Filter: ${k ? `On` : `Off`}`,
            action: () => a(() => ne(!k)),
          },
          { label: `Theme: ${t}`, action: () => {} },
          {
            label: `Lyrics: ${M ? `On` : `Off`}`,
            action: () => a(() => ae(!M)),
          },
        ],
        allsongs: m.map((e, t) => ({ label: e.title, action: () => Me(t) })),
        artists: J.map((e) => ({
          label: e,
          action: () => q([`main`, `music`, `artists`, `artist-${e}`]),
        })),
        albums: [],
        nowplaying: [],
      };
      return (
        J.forEach((t) => {
          let n = `artist-${t}`,
            r = Y[t] || [];
          e[n] = r.map(({ index: e }) => ({
            label: m[e].title,
            action: () => Me(e),
          }));
        }),
        e
      );
    }, [A, j, T, k, t, M, m, q, Me, Ne, J, Y, G]),
    Z = x[x.length - 1],
    Q = ze[Z] || [],
    $ = Z === `nowplaying`,
    Be = o(() => {
      K(), $ ? a(() => ve(!L)) : Q[C] && Q[C].action();
    }, [$, L, Q, C, K]),
    Ve = o(() => {
      K(),
        $
          ? a(() => {
              S([`main`, `music`, `allsongs`]), w(0);
            })
          : x.length > 1
            ? a(() => {
                let e = x.slice(0, -1);
                S(e), w(0);
              })
            : G &&
              a(() => {
                S([`nowplaying`]), w(0);
              });
    }, [$, x, G, K]),
    He = o(() => {
      $ ||
        (K(),
        a(() => {
          w((e) => Math.max(0, e - 1));
        }));
    }, [K, $]),
    Ue = o(() => {
      $ ||
        (K(),
        a(() => {
          w((e) => Math.min(Q.length - 1, e + 1));
        }));
    }, [Q.length, K, $]),
    We = o(
      (e) => {
        if ((K(), $)) {
          if (V.current && V.current.seekTo) {
            let t = V.current.getCurrentTime(),
              n = Math.max(0, Math.min(ge, t + (e > 0 ? 5 : -5)));
            V.current.seekTo(n, !0), a(() => pe(n));
          }
        } else e > 0 ? Ue() : He();
      },
      [$, ge, Ue, He, K],
    );
  g(() => {
    if (s === void 0) return;
    let e = (e) => {
      switch (e.key) {
        case `ArrowLeft`:
          e.preventDefault(), $ ? Re() : He();
          break;
        case `ArrowRight`:
          e.preventDefault(), $ ? Le() : Ue();
          break;
        case `ArrowUp`:
          e.preventDefault(), $ || He();
          break;
        case `ArrowDown`:
          e.preventDefault(), $ || Ue();
          break;
        case `Enter`:
          e.preventDefault(), Be();
          break;
        case `Escape`:
          e.preventDefault(), Ve();
      }
    };
    return (
      s.addEventListener(`keydown`, e),
      () => s.removeEventListener(`keydown`, e)
    );
  }, [$, Re, Le, He, Ue, Be, Ve, K]),
    g(
      () => (
        K(),
        () => {
          U.current && clearTimeout(U.current);
        }
      ),
      [K],
    ),
    g(() => {
      if (De && !z) {
        let e = s.setTimeout(() => {
          a(() => {
            ke(!0), E(!0), O(!0);
          }),
            K();
        }, 500);
        return () => s.clearTimeout(e);
      }
    }, [De, z, K]);
  let Ge = o(
      (e) => {
        if (!Ae.current || !B.current) return;
        let t = B.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2,
          i = Math.atan2(e.clientY - r, e.clientX - n),
          a = i - je.current;
        a > Math.PI && (a -= 2 * Math.PI),
          a < -Math.PI && (a += 2 * Math.PI),
          Math.abs(a) > 0.05 && (We(a), (je.current = i));
      },
      [We, K],
    ),
    Ke = o(() => {
      Ae.current = !1;
    }, []),
    qe = o(
      (e) => {
        if ((K(), !B.current)) return;
        Ae.current = !0;
        let t = B.current.getBoundingClientRect(),
          n = t.left + t.width / 2,
          r = t.top + t.height / 2,
          i = Math.atan2(e.clientY - r, e.clientX - n);
        je.current = i;
        let a = (e) => Ge(e),
          o = () => {
            Ke(),
              s.removeEventListener(`mousemove`, a),
              s.removeEventListener(`mouseup`, o);
          };
        s.addEventListener(`mousemove`, a), s.addEventListener(`mouseup`, o);
      },
      [K, Ge, Ke],
    ),
    Je = o(
      (e) => {
        K(), a(() => w(e)), Q[e] && Q[e].action();
      },
      [Q, K],
    ),
    Ye = o(
      (e) =>
        `${Math.floor(e / 60)}:${Math.floor(e % 60)
          .toString()
          .padStart(2, `0`)}`,
      [],
    );
  g(() => {
    let e = setInterval(() => {
      a(() => {
        Te((e) => (e >= 4 ? 1 : e + 1));
      });
    }, 1500);
    return () => clearInterval(e);
  }, []);
  let Xe = () =>
    /*#__PURE__*/ d(`div`, {
      style: {
        width: 19,
        height: 10,
        border: `1px solid ${T ? `#0a3667` : `#4a4a4a`}`,
        borderRadius: 2,
        position: `relative`,
        display: `flex`,
        alignItems: `center`,
        padding: `1px`,
        gap: `1px`,
      },
      children: [
        [0, 1, 2, 3].map((e) =>
          /*#__PURE__*/ f(
            `div`,
            {
              style: {
                flex: 1,
                height: `100%`,
                backgroundColor:
                  e < we ? (T ? `#0a3667` : `#4a4a4a`) : `transparent`,
                transition: `background-color 0.2s ease`,
              },
            },
            e,
          ),
        ),
        /*#__PURE__*/ f(`div`, {
          style: {
            position: `absolute`,
            right: -3,
            top: `50%`,
            transform: `translateY(-50%)`,
            width: 2,
            height: 4,
            backgroundColor: T ? `#0a3667` : `#4a4a4a`,
            borderRadius: `0 1px 1px 0`,
          },
        }),
      ],
    });
  g(() => {
    if (Ee.current) {
      let e = Ee.current.children[C];
      e && e.scrollIntoView({ block: `nearest`, behavior: `smooth` });
    }
  }, [C]);
  let Ze = p === `medium` ? 1.3 : p === `large` ? 1.6 : 1;
  return /*#__PURE__*/ d(`div`, {
    onMouseEnter: () => Oe(!0),
    style: {
      width: `100%`,
      height: `100%`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      position: `relative`,
      overflow: `visible`,
      ...e.style,
    },
    children: [
      /*#__PURE__*/ f(`style`, {
        children: `
                .ipod-menu-scroll::-webkit-scrollbar {
                    width: 4px;
                }
                .ipod-menu-scroll::-webkit-scrollbar-track {
                    background: transparent;
                    margin: 0;
                    box-shadow: inset 1px 0 0 ${T ? `rgba(10, 54, 103, 0.5)` : `rgba(74, 74, 74, 0.5)`}, inset -1px 0 0 ${T ? `rgba(10, 54, 103, 0.5)` : `rgba(74, 74, 74, 0.5)`};
                }
                .ipod-menu-scroll::-webkit-scrollbar-thumb {
                    background: ${T ? `#0a3667` : `#4a4a4a`};
                    border-radius: 0;
                }
                .ipod-menu-scroll::-webkit-scrollbar-thumb:hover {
                    background: ${T ? `#0a3667` : `#4a4a4a`};
                }
                @keyframes loading-dot-1 {
                    0%, 100% {
                        opacity: 1;
                    }
                }
                @keyframes loading-dot-2 {
                    0%, 32.99% {
                        opacity: 0;
                    }
                    33%, 99.99% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                @keyframes loading-dot-3 {
                    0%, 65.99% {
                        opacity: 0;
                    }
                    66%, 99.99% {
                        opacity: 1;
                    }
                    100% {
                        opacity: 0;
                    }
                }
                .loading-dot-1 {
                    animation: loading-dot-1 1.5s infinite;
                }
                .loading-dot-2 {
                    animation: loading-dot-2 1.5s infinite;
                }
                .loading-dot-3 {
                    animation: loading-dot-3 1.5s infinite;
                }
            `,
      }),
      /*#__PURE__*/ d(`div`, {
        style: {
          width: 200,
          height: 340,
          background:
            t === `classic`
              ? `linear-gradient(145deg, #ffffff, #f5f5f5)`
              : t === `u2`
                ? `linear-gradient(145deg, #1a1a1a, #000000)`
                : `linear-gradient(145deg, #2a2a2a, #0a0a0a)`,
          borderRadius: 20,
          padding: 15,
          display: `flex`,
          flexDirection: `column`,
          gap: 15,
          boxShadow: `
                        0 0 0 1px ${t === `classic` ? `rgba(0,0,0,0.1)` : `rgba(255,255,255,0.05)`},
                        0 2px 4px rgba(0,0,0,0.1),
                        0 8px 16px rgba(0,0,0,0.15),
                        0 16px 32px rgba(0,0,0,0.2)
                    `,
          position: `relative`,
          transform: `scale(${Ze})`,
          transformOrigin: `center center`,
        },
        children: [
          t === `classic` &&
            /*#__PURE__*/ f(`div`, {
              style: {
                position: `absolute`,
                top: 0,
                left: 0,
                right: 0,
                height: `50%`,
                background: `linear-gradient(to bottom, rgba(255,255,255,0.4), rgba(255,255,255,0))`,
                borderRadius: `20px 20px 0 0`,
                pointerEvents: `none`,
              },
            }),
          /*#__PURE__*/ d(`div`, {
            style: {
              width: `100%`,
              height: 140,
              background: T
                ? `linear-gradient(to bottom, #d1e8fa, #e0f0fc)`
                : `linear-gradient(to bottom, #a0a8a0, #b8c0b8)`,
              borderRadius: 8,
              padding: 0,
              position: `relative`,
              overflow: `hidden`,
              filter: `none`,
              border: `1px solid #999`,
            },
            children: [
              G &&
                /*#__PURE__*/ f(`div`, {
                  style: {
                    position: `absolute`,
                    top: 20,
                    left: 0,
                    width: `100%`,
                    height: `calc(100% - 20px)`,
                    display: `block`,
                    zIndex: z && $ && L ? 50 : -1,
                    pointerEvents: z && $ && L ? `auto` : `none`,
                    opacity: z && $ && L ? 1 : 0,
                  },
                  children: /*#__PURE__*/ f(`div`, {
                    id: `youtube-player-${G.id}`,
                    style: { width: `100%`, height: `100%` },
                  }),
                }),
              /*#__PURE__*/ d(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  flexDirection: `column`,
                  color: T ? `#0a3667` : `#2a2a2a`,
                  pointerEvents: `none`,
                  zIndex: 90,
                  opacity: +!z,
                  transition: `opacity 0.5s ease`,
                },
                children: [
                  /*#__PURE__*/ f(`div`, {
                    style: {
                      fontSize: 28,
                      fontWeight: `bold`,
                      letterSpacing: 2,
                      color: T ? `#0a3667` : `#2a2a2a`,
                      fontFamily: `system-ui, -apple-system, sans-serif`,
                    },
                    children: ``,
                  }),
                  /*#__PURE__*/ f(`div`, {
                    style: {
                      marginTop: 8,
                      fontSize: 12,
                      fontWeight: `bold`,
                      color: T ? `#0a3667` : `#2a2a2a`,
                      fontFamily: `system-ui, -apple-system, sans-serif`,
                    },
                    children: te ? `${te}'s iPod` : `iPod`,
                  }),
                ],
              }),
              /*#__PURE__*/ f(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: 7,
                  pointerEvents: `none`,
                  zIndex: 100,
                  boxShadow: `
                                inset 0 1px 3px rgba(0,0,0,0.12),
                                inset 0 0 6px rgba(0,0,0,0.06),
                                inset 0 -1px 3px rgba(0,0,0,0.06),
                                inset 1px 0 2px rgba(0,0,0,0.06),
                                inset -1px 0 2px rgba(0,0,0,0.06)
                            `,
                },
              }),
              k &&
                /*#__PURE__*/ d(u, {
                  children: [
                    /*#__PURE__*/ f(`div`, {
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        background: `repeating-linear-gradient(0deg, rgba(0,0,0,0.06) 0px, transparent 1px, transparent 2px)`,
                        pointerEvents: `none`,
                        zIndex: 95,
                      },
                    }),
                    /*#__PURE__*/ f(`div`, {
                      style: {
                        position: `absolute`,
                        top: 0,
                        left: 0,
                        right: 0,
                        height: `30%`,
                        background: `linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)`,
                        pointerEvents: `none`,
                        zIndex: 96,
                      },
                    }),
                  ],
                }),
              /*#__PURE__*/ d(`div`, {
                style: {
                  width: `100%`,
                  height: `100%`,
                  color: T ? `#0a3667` : `#2a2a2a`,
                  fontSize: 10,
                  overflow: `hidden`,
                  display: `flex`,
                  flexDirection: `column`,
                  gap: 0,
                  padding: `0`,
                  backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                  opacity: +!!z,
                  pointerEvents: z ? `auto` : `none`,
                  transition: `opacity 0.5s ease`,
                  ...i,
                },
                children: [
                  /*#__PURE__*/ d(`div`, {
                    style: {
                      height: 20,
                      borderBottom: `1px solid ${T ? `#0a3667` : `#4a4a4a`}`,
                      display: `flex`,
                      alignItems: `center`,
                      justifyContent: `space-between`,
                      padding: `0`,
                      fontSize: 10,
                      flexShrink: 0,
                      ...i,
                    },
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: {
                          width: 20,
                          textAlign: `left`,
                          paddingLeft: `8px`,
                          display: `flex`,
                          alignItems: `center`,
                        },
                        children: y
                          ? /*#__PURE__*/ f(`svg`, {
                              width: `8`,
                              height: `8`,
                              viewBox: `0 0 8 8`,
                              fill: T ? `#0a3667` : `#2a2a2a`,
                              children: /*#__PURE__*/ f(`polygon`, {
                                points: `0,0 8,4 0,8`,
                              }),
                            })
                          : /*#__PURE__*/ d(`svg`, {
                              width: `8`,
                              height: `8`,
                              viewBox: `0 0 8 8`,
                              fill: T ? `#0a3667` : `#2a2a2a`,
                              children: [
                                /*#__PURE__*/ f(`rect`, {
                                  x: `0`,
                                  y: `0`,
                                  width: `3`,
                                  height: `8`,
                                }),
                                /*#__PURE__*/ f(`rect`, {
                                  x: `5`,
                                  y: `0`,
                                  width: `3`,
                                  height: `8`,
                                }),
                              ],
                            }),
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: {
                          flex: 1,
                          textAlign: `center`,
                          fontWeight: `bold`,
                        },
                        children: $
                          ? `Now Playing`
                          : Z === `main`
                            ? `iPod`
                            : Z === `music`
                              ? `Music`
                              : Z === `allsongs`
                                ? `All Songs`
                                : Z === `artists`
                                  ? `Artists`
                                  : Z.startsWith(`artist-`)
                                    ? Z.replace(`artist-`, ``)
                                    : Z === `settings`
                                      ? `Settings`
                                      : `iPod`,
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: {
                          width: 24,
                          display: `flex`,
                          justifyContent: `flex-end`,
                          paddingRight: `8px`,
                        },
                        children: /*#__PURE__*/ f(Xe, {}),
                      }),
                    ],
                  }),
                  $ && G
                    ? /*#__PURE__*/ d(`div`, {
                        style: { width: `100%`, flex: 1, position: `relative` },
                        children: [
                          L &&
                            $ &&
                            /*#__PURE__*/ f(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                pointerEvents: `auto`,
                                zIndex: 20,
                              },
                            }),
                          !me &&
                            /*#__PURE__*/ d(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                                display: `flex`,
                                flexDirection: `column`,
                                alignItems: `center`,
                                justifyContent: `center`,
                                gap: 8,
                                zIndex: 15,
                              },
                              children: [
                                /*#__PURE__*/ f(`div`, {
                                  style: {
                                    fontSize: 10,
                                    color: T ? `#0a3667` : `#2a2a2a`,
                                    textAlign: `center`,
                                    padding: `0 8px`,
                                    ...i,
                                  },
                                  children: G.title,
                                }),
                                /*#__PURE__*/ f(`div`, {
                                  style: {
                                    fontSize: 8,
                                    color: T ? `#0a3667` : `#2a2a2a`,
                                    opacity: 0.7,
                                    ...i,
                                  },
                                  children: G.artist,
                                }),
                                /*#__PURE__*/ d(`div`, {
                                  style: {
                                    marginTop: 8,
                                    fontSize: 10,
                                    color: T ? `#0a3667` : `#2a2a2a`,
                                    ...i,
                                  },
                                  children: [
                                    `Loading`,
                                    /*#__PURE__*/ f(`span`, {
                                      className: `loading-dot-1`,
                                      children: `.`,
                                    }),
                                    /*#__PURE__*/ f(`span`, {
                                      className: `loading-dot-2`,
                                      children: `.`,
                                    }),
                                    /*#__PURE__*/ f(`span`, {
                                      className: `loading-dot-3`,
                                      children: `.`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          !L &&
                            me &&
                            /*#__PURE__*/ d(`div`, {
                              style: {
                                position: `absolute`,
                                top: 0,
                                left: 0,
                                width: `100%`,
                                height: `100%`,
                                display: `flex`,
                                flexDirection: `column`,
                                backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                                zIndex: 10,
                              },
                              children: [
                                /*#__PURE__*/ d(`div`, {
                                  style: {
                                    padding: `4px 8px`,
                                    fontSize: 9,
                                    backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                                    ...i,
                                  },
                                  children: [_ + 1, ` of`, ` `, m.length],
                                }),
                                /*#__PURE__*/ d(`div`, {
                                  style: {
                                    flex: 1,
                                    display: `flex`,
                                    flexDirection: `column`,
                                    alignItems: `center`,
                                    justifyContent: `center`,
                                    gap: 8,
                                    padding: `0 8px`,
                                    backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                                  },
                                  children: [
                                    /*#__PURE__*/ f(`div`, {
                                      style: {
                                        fontSize: 12,
                                        fontWeight: `bold`,
                                        textAlign: `center`,
                                        color: T ? `#0a3667` : `#2a2a2a`,
                                        ...i,
                                      },
                                      children: G.title,
                                    }),
                                    /*#__PURE__*/ f(`div`, {
                                      style: {
                                        fontSize: 11,
                                        textAlign: `center`,
                                        color: T ? `#0a3667` : `#2a2a2a`,
                                        ...i,
                                      },
                                      children: G.artist || `Unknown Artist`,
                                    }),
                                  ],
                                }),
                                /*#__PURE__*/ d(`div`, {
                                  style: {
                                    padding: `0 8px 8px 8px`,
                                    backgroundColor: T ? `#c5e0f5` : `#9ca49c`,
                                  },
                                  children: [
                                    /*#__PURE__*/ f(`div`, {
                                      style: {
                                        width: `100%`,
                                        height: 8,
                                        backgroundColor: `transparent`,
                                        border: `1px solid ${T ? `#0a3667` : `#4a4a4a`}`,
                                        borderRadius: 4,
                                        position: `relative`,
                                        overflow: `hidden`,
                                      },
                                      children: /*#__PURE__*/ f(`div`, {
                                        style: {
                                          position: `absolute`,
                                          left: 0,
                                          top: 0,
                                          height: `100%`,
                                          width:
                                            ge > 0
                                              ? `${(fe / ge) * 100}%`
                                              : `0%`,
                                          backgroundColor: T
                                            ? `#0a3667`
                                            : `#4a4a4a`,
                                          borderRadius: 3,
                                          transition: `width 0.1s linear`,
                                        },
                                      }),
                                    }),
                                    /*#__PURE__*/ d(`div`, {
                                      style: {
                                        display: `flex`,
                                        justifyContent: `space-between`,
                                        marginTop: 2,
                                        fontSize: 9,
                                        color: T ? `#0a3667` : `#2a2a2a`,
                                        ...i,
                                      },
                                      children: [
                                        /*#__PURE__*/ f(`span`, {
                                          children: Ye(fe),
                                        }),
                                        /*#__PURE__*/ d(`span`, {
                                          children: [
                                            `-`,
                                            Ye(Math.max(0, ge - fe)),
                                          ],
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                        ],
                      })
                    : /*#__PURE__*/ f(`div`, {
                        ref: Ee,
                        className: `ipod-menu-scroll`,
                        style: {
                          height: `100%`,
                          overflowY: `auto`,
                          overflowX: `hidden`,
                          position: `relative`,
                        },
                        children: Q.map((e, t) =>
                          /*#__PURE__*/ f(
                            `div`,
                            {
                              onClick: () => Je(t),
                              onMouseEnter: (e) => {
                                t !== C &&
                                  (e.currentTarget.style.backgroundColor = T
                                    ? `#c0d8f0`
                                    : `#7a827a`);
                              },
                              onMouseLeave: (e) => {
                                t !== C &&
                                  (e.currentTarget.style.backgroundColor = `transparent`);
                              },
                              style: {
                                padding: `4px 8px`,
                                backgroundColor:
                                  t === C
                                    ? T
                                      ? `#0a3667`
                                      : `#4a4a4a`
                                    : `transparent`,
                                color:
                                  t === C
                                    ? T
                                      ? `#c5e0f5`
                                      : `#d0d8d0`
                                    : T
                                      ? `#0a3667`
                                      : `#2a2a2a`,
                                cursor: `pointer`,
                                fontSize: 12,
                                textShadow: r
                                  ? `1px 1px 0 rgba(0,0,0,0.15)`
                                  : `none`,
                                whiteSpace: `nowrap`,
                                overflow: `hidden`,
                                textOverflow: `ellipsis`,
                                ...i,
                              },
                              children: e.label,
                            },
                            t,
                          ),
                        ),
                      }),
                ],
              }),
            ],
          }),
          /*#__PURE__*/ d(`div`, {
            ref: B,
            onMouseDown: qe,
            style: {
              width: 170,
              height: 170,
              aspectRatio: `1 / 1`,
              borderRadius: `50%`,
              background:
                t === `classic`
                  ? `linear-gradient(145deg, #e8e8e8, #d0d0d0)`
                  : t === `u2`
                    ? `linear-gradient(145deg, #c41e3a, #8b0000)`
                    : `linear-gradient(145deg, #3a3a3a, #1a1a1a)`,
              position: `relative`,
              display: `flex`,
              alignItems: `center`,
              justifyContent: `center`,
              alignSelf: `center`,
              boxShadow: `
                            inset 0 0 0 1px ${t === `classic` ? `rgba(255,255,255,0.5)` : `rgba(255,255,255,0.1)`},
                            inset 0 2px 4px rgba(0,0,0,0.1),
                            0 2px 8px rgba(0,0,0,0.15)
                        `,
            },
            children: [
              /*#__PURE__*/ f(`div`, {
                style: {
                  position: `absolute`,
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  borderRadius: `50%`,
                  background: `conic-gradient(
                                from 0deg,
                                ${t === `classic` ? `rgba(255,255,255,0.3)` : `rgba(255,255,255,0.1)`} 0deg,
                                transparent 90deg,
                                ${t === `classic` ? `rgba(0,0,0,0.1)` : `rgba(0,0,0,0.3)`} 180deg,
                                transparent 270deg,
                                ${t === `classic` ? `rgba(255,255,255,0.3)` : `rgba(255,255,255,0.1)`} 360deg
                            )`,
                  pointerEvents: `none`,
                },
              }),
              /*#__PURE__*/ f(`button`, {
                onClick: Ve,
                style: {
                  position: `absolute`,
                  top: 15,
                  left: `50%`,
                  transform: `translateX(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  textShadow:
                    t === `classic`
                      ? `0 1px 0 rgba(255,255,255,0.5)`
                      : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: /*#__PURE__*/ f(`svg`, {
                  width: `32`,
                  height: `12`,
                  viewBox: `0 0 32 12`,
                  fill: t === `classic` ? `#666` : t === `u2` ? `#fff` : `#ccc`,
                  children: /*#__PURE__*/ f(`text`, {
                    x: `16`,
                    y: `9`,
                    fontSize: `9`,
                    fontWeight: `bold`,
                    textAnchor: `middle`,
                    fontFamily: `system-ui, -apple-system, sans-serif`,
                    children: `MENU`,
                  }),
                }),
              }),
              /*#__PURE__*/ f(`button`, {
                onClick: $ ? Le : () => Ue(),
                style: {
                  position: `absolute`,
                  right: 15,
                  top: `50%`,
                  transform: `translateY(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  opacity: 1,
                  textShadow:
                    t === `classic`
                      ? `0 1px 0 rgba(255,255,255,0.5)`
                      : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: /*#__PURE__*/ d(`svg`, {
                  width: `12`,
                  height: `12`,
                  viewBox: `0 0 16 16`,
                  fill: t === `classic` ? `#666` : t === `u2` ? `#fff` : `#ccc`,
                  children: [
                    /*#__PURE__*/ f(`polygon`, { points: `0,2 6,8 0,14` }),
                    /*#__PURE__*/ f(`polygon`, { points: `6,2 12,8 6,14` }),
                    /*#__PURE__*/ f(`rect`, {
                      x: `13`,
                      y: `2`,
                      width: `2`,
                      height: `12`,
                    }),
                  ],
                }),
              }),
              /*#__PURE__*/ f(`button`, {
                onClick: $
                  ? () => {
                      K(), X();
                    }
                  : void 0,
                style: {
                  position: `absolute`,
                  bottom: 15,
                  left: `50%`,
                  transform: `translateX(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: $ ? `pointer` : `default`,
                  opacity: $ ? 1 : 0.5,
                  textShadow:
                    t === `classic`
                      ? `0 1px 0 rgba(255,255,255,0.5)`
                      : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: y
                  ? /*#__PURE__*/ d(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 16 16`,
                      fill:
                        t === `classic` ? `#666` : t === `u2` ? `#fff` : `#ccc`,
                      children: [
                        /*#__PURE__*/ f(`rect`, {
                          x: `3`,
                          y: `2`,
                          width: `4`,
                          height: `12`,
                        }),
                        /*#__PURE__*/ f(`rect`, {
                          x: `9`,
                          y: `2`,
                          width: `4`,
                          height: `12`,
                        }),
                      ],
                    })
                  : /*#__PURE__*/ f(`svg`, {
                      width: `12`,
                      height: `12`,
                      viewBox: `0 0 16 16`,
                      fill:
                        t === `classic` ? `#666` : t === `u2` ? `#fff` : `#ccc`,
                      children: /*#__PURE__*/ f(`polygon`, {
                        points: `4,2 14,8 4,14`,
                      }),
                    }),
              }),
              /*#__PURE__*/ f(`button`, {
                onClick: $ ? Re : () => He(),
                style: {
                  position: `absolute`,
                  left: 15,
                  top: `50%`,
                  transform: `translateY(-50%)`,
                  background: `transparent`,
                  border: `none`,
                  cursor: `pointer`,
                  opacity: 1,
                  textShadow:
                    t === `classic`
                      ? `0 1px 0 rgba(255,255,255,0.5)`
                      : `0 1px 2px rgba(0,0,0,0.5)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                },
                children: /*#__PURE__*/ d(`svg`, {
                  width: `12`,
                  height: `12`,
                  viewBox: `0 0 16 16`,
                  fill: t === `classic` ? `#666` : t === `u2` ? `#fff` : `#ccc`,
                  children: [
                    /*#__PURE__*/ f(`rect`, {
                      x: `1`,
                      y: `2`,
                      width: `2`,
                      height: `12`,
                    }),
                    /*#__PURE__*/ f(`polygon`, { points: `10,2 4,8 10,14` }),
                    /*#__PURE__*/ f(`polygon`, { points: `16,2 10,8 16,14` }),
                  ],
                }),
              }),
              /*#__PURE__*/ f(`button`, {
                onClick: Be,
                style: {
                  width: 60,
                  height: 60,
                  aspectRatio: `1 / 1`,
                  borderRadius: `50%`,
                  background:
                    t === `classic`
                      ? `linear-gradient(145deg, #ffffff, #f0f0f0)`
                      : t === `u2`
                        ? `linear-gradient(145deg, #2a2a2a, #0a0a0a)`
                        : `linear-gradient(145deg, #4a4a4a, #2a2a2a)`,
                  border: `none`,
                  cursor: `pointer`,
                  boxShadow: `
                                0 0 0 1px ${t === `classic` ? `rgba(0,0,0,0.1)` : `rgba(255,255,255,0.1)`},
                                0 2px 4px rgba(0,0,0,0.2),
                                inset 0 1px 0 ${t === `classic` ? `rgba(255,255,255,0.8)` : `rgba(255,255,255,0.1)`}
                            `,
                  position: `relative`,
                },
                children: /*#__PURE__*/ f(`div`, {
                  style: {
                    position: `absolute`,
                    top: `10%`,
                    left: `10%`,
                    right: `10%`,
                    height: `40%`,
                    background:
                      t === `classic`
                        ? `linear-gradient(to bottom, rgba(255,255,255,0.6), transparent)`
                        : `linear-gradient(to bottom, rgba(255,255,255,0.1), transparent)`,
                    borderRadius: `50%`,
                    pointerEvents: `none`,
                  },
                }),
              }),
            ],
          }),
        ],
      }),
      P &&
        /*#__PURE__*/ f(`div`, {
          style: {
            marginTop: 10,
            padding: `5px 10px`,
            backgroundColor: `rgba(0,0,0,0.8)`,
            color: `#fff`,
            borderRadius: 4,
            fontSize: 10,
          },
          children: P,
        }),
    ],
  });
}
function Te() {
  return (Te = e(() => {
    i(),
      m(),
      h(),
      S(),
      C(we, {
        theme: {
          type: P.Enum,
          title: `Theme`,
          options: [`classic`, `black`, `u2`],
          optionTitles: [`WH`, `BLK`, `U2`],
          defaultValue: `classic`,
          displaySegmentedControl: !0,
        },
        youtubeUrl: {
          type: P.String,
          title: `YouTube URL`,
          defaultValue: ``,
          placeholder: `Enter YouTube URLs separated by commas`,
          displayTextArea: !0,
          description: `Enter multiple YouTube URLs separated by commas`,
        },
        font: {
          type: P.Font,
          title: `Font`,
          controls: `extended`,
          defaultFontType: `sans-serif`,
          defaultValue: { fontSize: `10px`, variant: `Regular` },
        },
        textShadow: {
          type: P.Boolean,
          title: `Text Shadow`,
          defaultValue: !1,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        ownerName: {
          type: P.String,
          title: `Owner Name`,
          defaultValue: `Zihan`,
          placeholder: `Enter iPod owner name`,
          description: `Name displayed during boot animation. Created by Zihan Huang (bravohenry.com)`,
        },
        size: {
          type: P.Enum,
          title: `Size`,
          options: [`default`, `medium`, `large`],
          optionTitles: [`100%`, `130%`, `160%`],
          defaultValue: `default`,
          displaySegmentedControl: !0,
        },
      });
  }))();
}
function Ee({ color: e }) {
  return /*#__PURE__*/ d(`svg`, {
    viewBox: `0 0 120 96`,
    width: `100%`,
    height: `100%`,
    "aria-hidden": !0,
    children: [
      /*#__PURE__*/ f(`path`, {
        d: `M8 14 Q8 6 16 6 H44 Q50 6 54 11 L59 17 H104 Q112 17 112 25 V82 Q112 90 104 90 H16 Q8 90 8 82 Z`,
        fill: e,
      }),
      /*#__PURE__*/ f(`path`, {
        d: `M8 30 Q8 24 14 24 H106 Q112 24 112 30 V82 Q112 90 104 90 H16 Q8 90 8 82 Z`,
        fill: e,
        style: { filter: `brightness(1.12)` },
      }),
    ],
  });
}
function De(e) {
  let {
      folders: t = ke,
      folderSize: n = 110,
      folderColor: r = `#6CC4F5`,
      labelColor: i = `#111111`,
      labelSize: a = 14,
      windowBackground: o = `#FFFFFF`,
      windowWidth: u = 70,
      fontFamily: ee = `Inter`,
      autoScale: te = !0,
      layout: p = z.layout,
      spacing: m = z.spacing,
      posY: h = z.centerY,
      posX: v = z.centerX,
      narrowLayout: b = `row-top`,
      narrowWidth: x = 600,
      style: S,
    } = e,
    C = l(null),
    [w, T] = c(null),
    [E, D] = c(null),
    [O, k] = c([]),
    ne = l(!1),
    [A, re] = c({ w: 1e3, h: 540 });
  g(() => {
    if (!C.current) return;
    let e = new ResizeObserver(([e]) =>
      re({ w: e.contentRect.width, h: e.contentRect.height }),
    );
    return e.observe(C.current), () => e.disconnect();
  }, []);
  let j = t && t.length ? t : ke,
    ie = `${ee}, "Inter", system-ui, sans-serif`,
    M = (e) => k((t) => [...t.filter((t) => t !== e), e]),
    ae = (e) => 10 + Math.max(0, O.indexOf(e)),
    oe = te ? Math.min(1, Math.max(0.55, A.w / 1e3)) : 1,
    N = Math.round(n * oe),
    P = Math.max(10, Math.round(a * Math.max(oe, 0.8))),
    F = N * 0.85 + 6 + P * 1.2 * 2,
    se = p === `custom` && A.w < x && b !== `keep`,
    I = j.length,
    ce = (e, t) => ({
      left: Math.min(Math.max(0, e), Math.max(0, A.w - N)),
      top: Math.min(Math.max(0, t), Math.max(0, A.h - F)),
    }),
    le = (e, t) => {
      if (p === `row`) {
        let e = I > 1 ? (A.w - 16 - I * N) / (I - 1) : 0,
          n = I > 1 ? Math.max(8, Math.min(m, e)) : 0,
          r = I * N + (I - 1) * n,
          i = (v / 100) * A.w - r / 2,
          a = Math.min(Math.max(8, i), Math.max(8, A.w - r - 8)) + t * (N + n),
          o = (h / 100) * A.h - F / 2;
        return ce(a, o);
      }
      if (p === `column`) {
        let e = I > 1 ? (A.h - 16 - I * F) / (I - 1) : 0,
          n = I > 1 ? Math.max(0, Math.min(m, e)) : 0,
          r = I * F + (I - 1) * n,
          i = Math.max(8, (h / 100) * A.h - r / 2) + t * (F + n),
          a = (v / 100) * A.w - N / 2;
        return ce(a, i);
      }
      if (se) {
        let e = A.w / I;
        return {
          left: Math.max(0, e * t + (e - N) / 2),
          top: b === `row-bottom` ? Math.max(0, A.h - F - 8) : 8,
        };
      }
      return ce(((e.x ?? 8) / 100) * A.w, ((e.y ?? 10 + t * 30) / 100) * A.h);
    },
    ue = w === null ? null : j[w],
    de = ue ? Oe.map((e) => ue[e]).filter((e) => e && e.src) : [];
  return (
    g(() => {
      let e = (e) => {
        e.key === `Escape` && (E ? D(null) : T(null));
      };
      return (
        s.addEventListener(`keydown`, e),
        () => s.removeEventListener(`keydown`, e)
      );
    }, [E]),
    /*#__PURE__*/ d(`div`, {
      ref: C,
      style: {
        ...S,
        position: `relative`,
        width: `100%`,
        height: `100%`,
        overflow: `hidden`,
        fontFamily: ie,
      },
      children: [
        j.map((e, t) =>
          /*#__PURE__*/ d(
            _.div,
            {
              drag: !0,
              dragConstraints: C,
              dragMomentum: !1,
              dragElastic: 0.1,
              onPointerDown: () => M(t),
              onDragStart: () => (ne.current = !0),
              onDragEnd: () => setTimeout(() => (ne.current = !1), 50),
              onTap: () => {
                ne.current || T(t);
              },
              whileHover: { scale: 1.04 },
              whileDrag: { scale: 1.08, cursor: `grabbing` },
              style: {
                position: `absolute`,
                ...le(e, t),
                width: N,
                zIndex: ae(t),
                display: `flex`,
                flexDirection: `column`,
                alignItems: `center`,
                gap: 6,
                cursor: `grab`,
                userSelect: `none`,
                touchAction: `none`,
              },
              children: [
                /*#__PURE__*/ f(`div`, {
                  style: { width: N, height: N * 0.85, pointerEvents: `none` },
                  children: e.icon?.src
                    ? /*#__PURE__*/ f(`img`, {
                        src: e.icon.src,
                        srcSet: e.icon.srcSet,
                        alt: ``,
                        draggable: !1,
                        style: {
                          width: `100%`,
                          height: `100%`,
                          objectFit: `contain`,
                        },
                      })
                    : /*#__PURE__*/ f(Ee, { color: r }),
                }),
                /*#__PURE__*/ f(`span`, {
                  style: {
                    fontSize: P,
                    color: i,
                    textAlign: `center`,
                    lineHeight: 1.2,
                    pointerEvents: `none`,
                  },
                  children: e.title,
                }),
              ],
            },
            `${t}-${p}-${se ? `n` : `w`}-${Math.round(A.w)}`,
          ),
        ),
        /*#__PURE__*/ f(y, {
          children:
            ue &&
            /*#__PURE__*/ d(
              _.div,
              {
                initial: { opacity: 0, scale: 0.92, y: 12 },
                animate: { opacity: 1, scale: 1, y: 0 },
                exit: { opacity: 0, scale: 0.94, y: 8 },
                transition: { duration: 0.2, ease: `easeOut` },
                style: {
                  position: `absolute`,
                  left: `${A.w < x ? 3 : (100 - u) / 2}%`,
                  top: A.w < x ? `3%` : `8%`,
                  width: `${A.w < x ? 94 : u}%`,
                  maxHeight: `84%`,
                  zIndex: 1e3,
                  background: o,
                  borderRadius: 12,
                  boxShadow: `0 20px 50px rgba(0,0,0,0.18), 0 0 0 1px rgba(0,0,0,0.08)`,
                  display: `flex`,
                  flexDirection: `column`,
                  overflow: `hidden`,
                },
                children: [
                  /*#__PURE__*/ d(`div`, {
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: 8,
                      padding: `10px 14px`,
                      borderBottom: `1px solid rgba(0,0,0,0.08)`,
                      background: `rgba(0,0,0,0.03)`,
                      flexShrink: 0,
                    },
                    children: [
                      /*#__PURE__*/ f(`button`, {
                        "aria-label": `Close`,
                        onClick: () => T(null),
                        style: {
                          width: 13,
                          height: 13,
                          borderRadius: `50%`,
                          background: `#FF5F57`,
                          border: `none`,
                          padding: 0,
                          cursor: `pointer`,
                        },
                      }),
                      /*#__PURE__*/ f(`span`, {
                        style: {
                          width: 13,
                          height: 13,
                          borderRadius: `50%`,
                          background: `#FEBC2E`,
                        },
                      }),
                      /*#__PURE__*/ f(`span`, {
                        style: {
                          width: 13,
                          height: 13,
                          borderRadius: `50%`,
                          background: `#28C840`,
                        },
                      }),
                      /*#__PURE__*/ f(`span`, {
                        style: {
                          flex: 1,
                          textAlign: `center`,
                          fontSize: 14,
                          color: `#333`,
                          marginRight: 55,
                        },
                        children: ue.title,
                      }),
                    ],
                  }),
                  /*#__PURE__*/ d(`div`, {
                    style: {
                      padding: 16,
                      overflowY: `auto`,
                      display: `grid`,
                      gridTemplateColumns: `repeat(auto-fill, minmax(${A.w < x ? 90 : 140}px, 1fr))`,
                      gap: 12,
                    },
                    children: [
                      de.length === 0 &&
                        /*#__PURE__*/ f(`p`, {
                          style: {
                            gridColumn: `1 / -1`,
                            color: `#888`,
                            fontSize: 14,
                            margin: `24px 0`,
                            textAlign: `center`,
                          },
                          children: `Add images to this folder in the right panel.`,
                        }),
                      de.map((e, t) =>
                        /*#__PURE__*/ f(
                          _.img,
                          {
                            src: e.src,
                            srcSet: e.srcSet,
                            alt: e.alt || ``,
                            draggable: !1,
                            onClick: () => D(e),
                            whileHover: { scale: 1.03 },
                            style: {
                              width: `100%`,
                              aspectRatio: `1 / 1`,
                              objectFit: `cover`,
                              borderRadius: 8,
                              cursor: `zoom-in`,
                              background: `#F2F2F2`,
                            },
                          },
                          t,
                        ),
                      ),
                    ],
                  }),
                ],
              },
              `window`,
            ),
        }),
        /*#__PURE__*/ f(y, {
          children:
            E &&
            /*#__PURE__*/ f(
              _.div,
              {
                initial: { opacity: 0 },
                animate: { opacity: 1 },
                exit: { opacity: 0 },
                onClick: () => D(null),
                style: {
                  position: `absolute`,
                  inset: 0,
                  zIndex: 2e3,
                  background: `rgba(0,0,0,0.6)`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  cursor: `zoom-out`,
                  padding: 24,
                  boxSizing: `border-box`,
                },
                children: /*#__PURE__*/ f(_.img, {
                  src: E.src,
                  srcSet: E.srcSet,
                  alt: E.alt || ``,
                  initial: { scale: 0.92 },
                  animate: { scale: 1 },
                  exit: { scale: 0.95 },
                  style: {
                    maxWidth: `100%`,
                    maxHeight: `100%`,
                    objectFit: `contain`,
                    borderRadius: 8,
                  },
                }),
              },
              `zoom`,
            ),
        }),
      ],
    })
  );
}
var Oe, z, ke, B;
function V() {
  return (V = e(() => {
    i(),
      m(),
      h(),
      S(),
      x(),
      (Oe = [
        `image1`,
        `image2`,
        `image3`,
        `image4`,
        `image5`,
        `image6`,
        `image7`,
        `image8`,
      ]),
      (z = { layout: `row`, centerX: 50, centerY: 50, spacing: 80 }),
      (ke = [
        { title: `Sketches`, x: 8, y: 10 },
        { title: `Photos`, x: 8, y: 40 },
        { title: `Explorations`, x: 8, y: 70 },
      ]),
      (B = (e) => ({ type: P.ResponsiveImage, title: `Image ${e}` })),
      C(De, {
        folders: {
          type: P.Array,
          title: `Folders`,
          defaultValue: ke,
          control: {
            type: P.Object,
            controls: {
              title: { type: P.String, title: `Name` },
              icon: { type: P.ResponsiveImage, title: `Folder Icon` },
              x: {
                type: P.Number,
                title: `Start X`,
                min: 0,
                max: 95,
                unit: `%`,
                defaultValue: 8,
              },
              y: {
                type: P.Number,
                title: `Start Y`,
                min: 0,
                max: 95,
                unit: `%`,
                defaultValue: 10,
              },
              image1: B(1),
              image2: B(2),
              image3: B(3),
              image4: B(4),
              image5: B(5),
              image6: B(6),
              image7: B(7),
              image8: B(8),
            },
          },
        },
        folderSize: {
          type: P.Number,
          title: `Folder Size`,
          defaultValue: 110,
          min: 40,
          max: 300,
          unit: `px`,
        },
        folderColor: {
          type: P.Color,
          title: `Folder Color`,
          defaultValue: `#6CC4F5`,
        },
        labelColor: {
          type: P.Color,
          title: `Label Color`,
          defaultValue: `#111111`,
        },
        labelSize: {
          type: P.Number,
          title: `Label Size`,
          defaultValue: 14,
          min: 10,
          max: 32,
          unit: `px`,
          displayStepper: !0,
        },
        windowBackground: {
          type: P.Color,
          title: `Window BG`,
          defaultValue: `#FFFFFF`,
        },
        windowWidth: {
          type: P.Number,
          title: `Window Width`,
          defaultValue: 70,
          min: 30,
          max: 100,
          unit: `%`,
        },
        fontFamily: { type: P.String, title: `Font`, defaultValue: `Inter` },
        layout: {
          type: P.Enum,
          title: `Layout`,
          defaultValue: z.layout,
          options: [`row`, `column`, `custom`],
          optionTitles: [
            `Centered Row`,
            `Centered Column`,
            `Custom (Start X/Y)`,
          ],
        },
        spacing: {
          type: P.Number,
          title: `Spacing`,
          defaultValue: z.spacing,
          min: 0,
          max: 400,
          step: 4,
          unit: `px`,
          hidden: (e) => e.layout === `custom`,
        },
        posX: {
          type: P.Number,
          title: `Center X`,
          defaultValue: z.centerX,
          min: 0,
          max: 100,
          unit: `%`,
          hidden: (e) => e.layout === `custom`,
        },
        posY: {
          type: P.Number,
          title: `Center Y`,
          defaultValue: z.centerY,
          min: 0,
          max: 100,
          unit: `%`,
          hidden: (e) => e.layout === `custom`,
        },
        autoScale: { type: P.Boolean, title: `Auto Scale`, defaultValue: !0 },
        narrowLayout: {
          type: P.Enum,
          title: `Small Screens`,
          hidden: (e) => e.layout !== `custom`,
          defaultValue: `row-top`,
          options: [`row-top`, `row-bottom`, `keep`],
          optionTitles: [`Row on top`, `Row on bottom`, `Keep positions`],
        },
        narrowWidth: {
          type: P.Number,
          title: `Small Below`,
          defaultValue: 600,
          min: 300,
          max: 1200,
          unit: `px`,
          hidden: (e) => e.layout !== `custom`,
        },
      });
  }))();
}

R();
Te();
V();
export { ve as A_ve, we as A_we, De as A_De, L as A_L, ge as A_ge };
