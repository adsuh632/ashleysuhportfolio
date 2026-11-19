/* eslint-disable */
// Ported from the original Framer code component bundle (ieWG02R-2GqvM0ORv5MFlOtAKtIH36UACQEtxIv_XkY.js lines 623-1834).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, E as r, I as i, P as a, R as o, _ as s, b as c, c as l, d as u, j as d, l as f, m as p, o as m, p as h, s as g, w as _, y as v, } from "../shim/react.js";
import { C as y, a as b, r as x, t as S } from "../shim/motion.js";
import { B as C, C as w, D as T, F as E, N as D, S as O, T as k, X as A, Z as ee, _ as te, _t as ne, a as j, at as re, b as M, c as ie, ct as ae, dt as oe, f as se, g as N, gt as ce, h as le, i as P, it as ue, lt as de, mt as fe, n as pe, nt as me, o as F, ot as he, pt as ge, q as _e, r as ve, st as ye, t as be, u as xe, ut as Se, v as Ce, x as we, y as Te, } from "../shim/framer.jsx";

function Qe(e) {
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
    [n, r] = s(`light`);
  return (
    v(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = () => r(t()),
        i = { attributes: !0, attributeFilter: [`data-theme`, `class`] },
        a = new MutationObserver(n);
      a.observe(document.documentElement, i),
        document.body && a.observe(document.body, i);
      let s = (e) => {
        let t = e.detail;
        t === `light` || t === `dark` ? r(t) : n();
      };
      return (
        o.addEventListener(`snav-theme-change`, s),
        o.addEventListener(`site-theme-change`, s),
        o.addEventListener(`storage`, n),
        () => {
          a.disconnect(),
            o.removeEventListener(`snav-theme-change`, s),
            o.removeEventListener(`site-theme-change`, s),
            o.removeEventListener(`storage`, n);
        }
      );
    }, [e]),
    n
  );
}
function $e(e) {
  let {
      intro: t,
      image: n,
      textColor: i,
      introColor: a,
      maxWidth: o,
      themeMode: s,
      bgLight: l,
      bgDark: u,
      bgPosition: d,
      darkTextColor: p,
      darkIntroColor: h,
      darkOverlay: g,
    } = e,
    _ = (e, t) => ({
      fontFamily: e?.fontFamily || `Poppins, sans-serif`,
      fontWeight: e?.fontWeight ?? t,
      fontStyle: e?.fontStyle || `normal`,
    }),
    y = _(e.headlineFont, 300),
    b = _(e.introFont, 400),
    x = /poppins/i.test(y.fontFamily + b.fontFamily),
    S = [e.line1, e.line2].map((e) => String(e ?? ``).trim()).filter(Boolean),
    C = c(null),
    w = () => {
      let e = C.current;
      if (!e) return;
      e.style.setProperty(`--fit`, `1`);
      let t = 1;
      e.querySelectorAll(`.hs-line`).forEach((e) => {
        getComputedStyle(e).whiteSpace === `nowrap` &&
          e.scrollWidth > e.clientWidth &&
          (t = Math.min(t, e.clientWidth / e.scrollWidth));
      }),
        e.style.setProperty(`--fit`, String(Math.floor(t * 1e3) / 1e3));
    };
  r(w),
    v(() => {
      let e = C.current;
      if (!e || typeof ResizeObserver > `u`) return;
      let t = new ResizeObserver(() => w());
      return (
        t.observe(e.parentElement || e),
        document.fonts?.ready?.then(w),
        () => t.disconnect()
      );
    }, []);
  let T = (e, t) => (Number.isFinite(Number(e)) ? Number(e) : t),
    E = {
      "--h": `${T(e.desktopHeadline, 72)}px`,
      "--h-t": `${T(e.tabletHeadline, 44)}px`,
      "--h-p": `${T(e.phoneHeadline, 26)}px`,
      "--lh": T(e.headlineLineHeight, 1.05),
      "--intro": `${T(e.desktopIntro, 28)}px`,
      "--intro-t": `${T(e.tabletIntro, 19)}px`,
      "--intro-p": `${T(e.phoneIntro, 15)}px`,
      "--photo": `${T(e.desktopPhoto, 340)}px`,
      "--photo-t": `${T(e.tabletPhoto, 220)}px`,
      "--photo-p": `${T(e.phonePhoto, 160)}px`,
      "--gap": `${T(e.gap, 64)}px`,
      "--side": `${T(e.sideMargin, 40)}px`,
      "--gap-s": `${Math.round(T(e.gap, 64) * 0.5)}px`,
      "--bg-zoom": Math.max(1, T(e.bgZoom, 120) / 100),
    },
    D = Qe(s) === `dark`,
    O = l?.src || et,
    k = u?.src || tt,
    A = Math.max(0, Math.min(90, Number(g) || 0)) / 100,
    ee = (e, t, n) =>
      /*#__PURE__*/ m(`div`, {
        className: `hs-bg`,
        "aria-hidden": `true`,
        style: {
          opacity: +!!t,
          backgroundPosition: d || `center`,
          transformOrigin: d || `center`,
          backgroundImage: n ? `${n}, url("${e}")` : `url("${e}")`,
        },
      });
  return /*#__PURE__*/ f(`section`, {
    className: `hs-root`,
    "data-fit": e.fitViewport !== !1,
    "data-tablet": e.tabletLayout || `stacked`,
    "data-photo": e.stackedPhoto || `below`,
    "data-keep": e.keepLines || `desktopTablet`,
    style: { ...E, fontFamily: y.fontFamily, color: D ? p : i },
    children: [
      x && /*#__PURE__*/ m(`link`, { rel: `stylesheet`, href: nt }),
      /*#__PURE__*/ m(`style`, { children: rt }),
      /*#__PURE__*/ f(`div`, {
        className: `hs-bgwrap`,
        "aria-hidden": `true`,
        children: [
          ee(O, !D),
          ee(
            k,
            D,
            A ? `linear-gradient(rgba(0,0,0,${A}), rgba(0,0,0,${A}))` : void 0,
          ),
        ],
      }),
      /*#__PURE__*/ f(`div`, {
        className: `hs-inner`,
        style: { maxWidth: o },
        children: [
          /*#__PURE__*/ f(`div`, {
            className: `hs-text`,
            children: [
              /*#__PURE__*/ m(`p`, {
                className: `hs-intro`,
                style: { ...b, color: D ? h : a },
                children: t,
              }),
              /*#__PURE__*/ m(`h1`, {
                ref: C,
                className: `hs-headline`,
                style: y,
                children: S.map((e, t) =>
                  /*#__PURE__*/ m(
                    `span`,
                    { className: `hs-line`, children: e },
                    t,
                  ),
                ),
              }),
            ],
          }),
          n?.src &&
            /*#__PURE__*/ m(`div`, {
              className: `hs-media`,
              children: /*#__PURE__*/ m(`img`, {
                className: `hs-img`,
                src: n.src,
                alt: n.alt || `Portrait of Ashley`,
              }),
            }),
        ],
      }),
    ],
  });
}
var et, tt, nt, rt;
function it() {
  return (it = e(() => {
    i(),
      g(),
      _(),
      C(),
      (et = `data:image/webp;base64,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`),
      (tt = `data:image/webp;base64,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`),
      (nt = `https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap`),
      (rt = `
.hs-root {
    container-type: inline-size;
    width: 100%;
    box-sizing: border-box;
    position: relative;
    isolation: isolate;
    min-height: 100%;
}
/* Clips only the zoomed background, never the text */
.hs-bgwrap {
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;
    pointer-events: none;
}
/* Fit viewport: the whole section (and its background) is at least one screen tall */
.hs-root[data-fit="true"] {
    min-height: 100vh;
    min-height: 100svh;
}
/* Two background layers that crossfade when the theme changes */
.hs-bg {
    position: absolute;
    inset: 0;
    background-size: cover;
    background-repeat: no-repeat;
    transition: opacity .5s ease;
    pointer-events: none;
    transform: scale(var(--bg-zoom, 1));
}
.hs-inner {
    position: relative;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    padding: clamp(40px, 6cqw, 96px) var(--side);
    display: grid;
    grid-template-columns: minmax(0, 1fr) auto;
    align-items: center;
    gap: var(--gap);
}
/* Fit viewport: hero fills the screen height, content centered */
.hs-root[data-fit="true"] .hs-inner {
    min-height: 100vh;
    min-height: 100svh;
    align-content: center;
}
.hs-text {
    width: 100%;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: clamp(14px, 1.8cqw, 28px);
}
.hs-intro {
    margin: 0;
    font-size: var(--intro);
    line-height: 1.4;
    text-wrap: balance;
}
.hs-headline {
    margin: 0;
    width: 100%;
    font-size: calc(var(--h) * var(--fit, 1));
    line-height: var(--lh);
    letter-spacing: -0.035em;
    text-wrap: balance;
    font-synthesis: none;
}
/* Each headline line (Headline line 1 / line 2 in the panel) */
.hs-line { display: block; }
.hs-root[data-keep="all"] .hs-line,
.hs-root[data-keep="desktopTablet"] .hs-line { white-space: nowrap; }
.hs-media {
    display: flex;
    justify-content: flex-end;
}
.hs-img {
    display: block;
    width: min(var(--photo), 45cqw);
    aspect-ratio: 1 / 1;
    border-radius: 999px;
    object-fit: cover;
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.12);
}

/* Tablet (Framer 810–1199) */
@container (max-width: 1199px) {
    .hs-inner { padding-left: min(var(--side), 40px); padding-right: min(var(--side), 40px); }
    .hs-headline { font-size: calc(var(--h-t) * var(--fit, 1)); }
    .hs-intro { font-size: var(--intro-t); }
    .hs-img { width: min(var(--photo-t), 40cqw); }
    .hs-root[data-tablet="stacked"] .hs-inner {
        grid-template-columns: minmax(0, 1fr);
        justify-items: center;
        text-align: center;
        gap: var(--gap-s);
    }
    .hs-root[data-tablet="stacked"] .hs-text { align-items: center; }
    .hs-root[data-tablet="stacked"] .hs-media { justify-content: center; }
    .hs-root[data-tablet="stacked"] .hs-img { width: min(var(--photo-t), 70cqw); }
    .hs-root[data-tablet="stacked"][data-photo="above"] .hs-media { order: -1; }
}

/* Phone (below 810): centered stack */
@container (max-width: 809px) {
    .hs-inner {
        grid-template-columns: minmax(0, 1fr);
        justify-items: center;
        text-align: center;
        gap: var(--gap-s);
    }
    .hs-text { align-items: center; }
    .hs-media { justify-content: center; }
    .hs-img { width: min(var(--photo-p), 70cqw); }
    .hs-inner { padding-left: 20px; padding-right: 20px; }
    .hs-headline { font-size: calc(var(--h-p) * var(--fit, 1)); }
    .hs-root[data-keep="desktopTablet"] .hs-line { white-space: normal; }
    .hs-intro { font-size: var(--intro-p); }
    .hs-root[data-photo="above"] .hs-media { order: -1; }
}
`),
      ($e.defaultProps = {
        intro: `Hey! I'm Ashley, a product designer ·✿.°`,
        line1: `Curious, caffeinated,`,
        line2: `and noticing the little details`,
        textColor: `#111111`,
        introColor: `#3d3d3d`,
        desktopHeadline: 72,
        tabletHeadline: 44,
        phoneHeadline: 26,
        headlineLineHeight: 1.05,
        desktopIntro: 28,
        tabletIntro: 19,
        phoneIntro: 15,
        desktopPhoto: 340,
        tabletPhoto: 220,
        phonePhoto: 160,
        tabletLayout: `stacked`,
        stackedPhoto: `below`,
        gap: 64,
        sideMargin: 40,
        keepLines: `desktopTablet`,
        fitViewport: !0,
        maxWidth: 1280,
        themeMode: `auto`,
        bgPosition: `center`,
        darkTextColor: `#111111`,
        darkIntroColor: `#3d3d3d`,
        darkOverlay: 0,
        bgZoom: 120,
      }),
      w($e, {
        intro: { type: F.String, title: `Intro` },
        line1: {
          type: F.String,
          title: `Headline line 1`,
          defaultValue: `Curious, caffeinated,`,
        },
        line2: {
          type: F.String,
          title: `Headline line 2`,
          defaultValue: `and noticing the little details`,
        },
        keepLines: {
          type: F.Enum,
          title: `Keep lines whole`,
          description: `Each headline line stays on one line; text shrinks to fit if needed`,
          options: [`desktopTablet`, `all`, `off`],
          optionTitles: [`Desktop + tablet`, `All sizes`, `Off`],
          defaultValue: `desktopTablet`,
        },
        image: { type: F.ResponsiveImage, title: `Photo` },
        textColor: { type: F.Color, title: `Text` },
        introColor: { type: F.Color, title: `Intro text` },
        fitViewport: {
          type: F.Boolean,
          title: `Fit viewport`,
          defaultValue: !0,
          enabledTitle: `Full screen`,
          disabledTitle: `Auto`,
        },
        tabletLayout: {
          type: F.Enum,
          title: `Tablet layout`,
          options: [`stacked`, `split`],
          optionTitles: [`Stacked`, `Side by side`],
          displaySegmentedControl: !0,
          defaultValue: `stacked`,
        },
        stackedPhoto: {
          type: F.Enum,
          title: `Stacked photo`,
          description: `Where the photo sits when text and photo stack`,
          options: [`below`, `above`],
          optionTitles: [`Below text`, `Above text`],
          displaySegmentedControl: !0,
          defaultValue: `below`,
        },
        sideMargin: {
          type: F.Number,
          title: `Side margin`,
          description: `Left/right space on desktop (tablet max 40, phone 20)`,
          min: 0,
          max: 160,
          step: 4,
          unit: `px`,
          defaultValue: 40,
        },
        gap: {
          type: F.Number,
          title: `Text/photo gap`,
          description: `Stacked layouts use half`,
          min: 0,
          max: 200,
          step: 4,
          unit: `px`,
          defaultValue: 64,
        },
        desktopPhoto: {
          type: F.Number,
          title: `Desktop: photo`,
          min: 80,
          max: 900,
          step: 10,
          unit: `px`,
          defaultValue: 340,
          displayStepper: !0,
        },
        tabletPhoto: {
          type: F.Number,
          title: `Tablet: photo`,
          min: 80,
          max: 700,
          step: 10,
          unit: `px`,
          defaultValue: 220,
        },
        phonePhoto: {
          type: F.Number,
          title: `Phone: photo`,
          min: 60,
          max: 500,
          step: 10,
          unit: `px`,
          defaultValue: 160,
        },
        headlineFont: {
          type: F.Font,
          title: `Headline font`,
          controls: `basic`,
          defaultFontType: `sans-serif`,
        },
        desktopHeadline: {
          type: F.Number,
          title: `Desktop: headline`,
          min: 24,
          max: 200,
          unit: `px`,
          defaultValue: 72,
          displayStepper: !0,
        },
        tabletHeadline: {
          type: F.Number,
          title: `Tablet: headline`,
          min: 20,
          max: 160,
          unit: `px`,
          defaultValue: 44,
        },
        phoneHeadline: {
          type: F.Number,
          title: `Phone: headline`,
          min: 18,
          max: 120,
          unit: `px`,
          defaultValue: 26,
        },
        headlineLineHeight: {
          type: F.Number,
          title: `Headline line height`,
          min: 0.8,
          max: 2,
          step: 0.05,
          defaultValue: 1.05,
        },
        introFont: {
          type: F.Font,
          title: `Intro font`,
          controls: `basic`,
          defaultFontType: `sans-serif`,
        },
        desktopIntro: {
          type: F.Number,
          title: `Desktop: intro`,
          min: 10,
          max: 60,
          unit: `px`,
          defaultValue: 28,
          displayStepper: !0,
        },
        tabletIntro: {
          type: F.Number,
          title: `Tablet: intro`,
          min: 10,
          max: 60,
          unit: `px`,
          defaultValue: 19,
        },
        phoneIntro: {
          type: F.Number,
          title: `Phone: intro`,
          min: 10,
          max: 48,
          unit: `px`,
          defaultValue: 15,
        },
        maxWidth: {
          type: F.Number,
          title: `Max width`,
          min: 960,
          max: 1600,
          step: 20,
          unit: `px`,
        },
        themeMode: {
          type: F.Enum,
          title: `Theme`,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Follow site`, `Light`, `Dark`],
          displaySegmentedControl: !0,
          defaultValue: `auto`,
        },
        bgLight: { type: F.ResponsiveImage, title: `Light background` },
        bgDark: { type: F.ResponsiveImage, title: `Dark background` },
        bgPosition: {
          type: F.Enum,
          title: `Background focus`,
          options: [`center`, `top`, `bottom`, `left`, `right`],
          optionTitles: [`Center`, `Top`, `Bottom`, `Left`, `Right`],
          defaultValue: `center`,
        },
        bgZoom: {
          type: F.Number,
          title: `Background zoom`,
          description: `Zooms into the background (100% = no zoom)`,
          min: 100,
          max: 250,
          step: 5,
          unit: `%`,
          defaultValue: 120,
        },
        darkTextColor: {
          type: F.Color,
          title: `Dark: text`,
          defaultValue: `#111111`,
        },
        darkIntroColor: {
          type: F.Color,
          title: `Dark: intro text`,
          defaultValue: `#3d3d3d`,
        },
        darkOverlay: {
          type: F.Number,
          title: `Dark: overlay`,
          description: `Darkens the dark background. Use with white text.`,
          min: 0,
          max: 90,
          step: 5,
          unit: `%`,
          defaultValue: 0,
        },
      });
  }))();
}
function at(e) {
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
    [n, r] = s(`light`);
  return (
    v(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = () => r(t()),
        i = { attributes: !0, attributeFilter: [`data-theme`, `class`] },
        a = new MutationObserver(n);
      a.observe(document.documentElement, i),
        document.body && a.observe(document.body, i);
      let s = (e) => {
        let t = e?.detail;
        t === `light` || t === `dark` ? r(t) : n();
      };
      return (
        o.addEventListener(`snav-theme-change`, s),
        o.addEventListener(`site-theme-change`, s),
        o.addEventListener(`storage`, n),
        () => {
          a.disconnect(),
            o.removeEventListener(`snav-theme-change`, s),
            o.removeEventListener(`site-theme-change`, s),
            o.removeEventListener(`storage`, n);
        }
      );
    }, [e]),
    n
  );
}
function ot({
  dark: e,
  p: t,
  imageRatio: n,
  imageFit: r,
  cardBackground: i,
  glassOpacity: a,
  glassBlur: o,
  glassBorder: c,
  glassRadius: l,
  glassSheen: u,
  glassTags: d,
  imageRadius: p,
  imageBackground: h,
  tagBackground: g,
  textColor: _,
  mutedColor: v,
  font: y,
  titleSize: b,
  descriptionSize: x,
  tagSize: S,
  yearSize: C,
}) {
  let [w, T] = s(!1),
    E = (Array.isArray(t.tags) ? t.tags : (t.tags || ``).split(`,`))
      .map((e) => e.trim())
      .filter(Boolean),
    D = !!t.link,
    O = /*#__PURE__*/ f(`a`, {
      onMouseEnter: () => T(!0),
      onMouseLeave: () => T(!1),
      style: {
        display: `flex`,
        flexDirection: `column`,
        position: `relative`,
        overflow: `hidden`,
        padding: 14,
        borderRadius: l,
        background: `linear-gradient(135deg, ${z(i, Math.min(100, a + 25))} 0%, ${z(i, a)} 45%, ${z(i, a >= 100 ? 100 : Math.max(0, a - 10))} 100%)`,
        backdropFilter: `blur(${o}px) saturate(180%)`,
        WebkitBackdropFilter: `blur(${o}px) saturate(180%)`,
        border: `1px solid ${z(`#FFFFFF`, c)}`,
        boxShadow: e
          ? [
              `0 10px 34px rgba(0, 0, 0, 0.35)`,
              `inset 1px 1px 0 ${z(`#FFFFFF`, c)}`,
            ].join(`, `)
          : [
              `0 10px 34px rgba(20, 30, 70, 0.14)`,
              `0 2px 6px rgba(20, 30, 70, 0.06)`,
              `inset 1px 1px 0 ${z(`#FFFFFF`, Math.min(100, c + 25))}`,
              `inset -1px -1px 0 rgba(255, 255, 255, 0.18)`,
              `inset 0 0 24px rgba(255, 255, 255, 0.18)`,
            ].join(`, `),
        transition: `transform 350ms cubic-bezier(.2,.7,.2,1), background-color .3s ease`,
        transform: w && D ? `translateY(-3px)` : `none`,
        color: _,
        fontFamily: y,
        textDecoration: `none`,
        cursor: D ? `pointer` : `default`,
        boxSizing: `border-box`,
        minWidth: 0,
      },
      children: [
        /*#__PURE__*/ m(`span`, {
          "aria-hidden": !0,
          style: {
            position: `absolute`,
            inset: 0,
            pointerEvents: `none`,
            borderRadius: `inherit`,
            background: `linear-gradient(115deg, rgba(255,255,255,0.55) 0%, rgba(255,255,255,0.12) 22%, rgba(255,255,255,0) 40%, rgba(255,255,255,0) 70%, rgba(255,255,255,0.10) 100%)`,
            opacity: u / 100,
          },
        }),
        /*#__PURE__*/ m(`span`, {
          "aria-hidden": !0,
          style: {
            position: `absolute`,
            top: 0,
            left: `8%`,
            right: `8%`,
            height: 1,
            pointerEvents: `none`,
            opacity: e ? 0.15 : 1,
            background: `linear-gradient(90deg, rgba(255,255,255,0), rgba(255,255,255,0.95), rgba(255,255,255,0))`,
          },
        }),
        n === `auto`
          ? /*#__PURE__*/ m(`div`, {
              style: {
                position: `relative`,
                width: `100%`,
                overflow: `hidden`,
                background: h,
                borderRadius: p,
              },
              children: t.image?.src
                ? /*#__PURE__*/ m(`img`, {
                    src: t.image.src,
                    srcSet: t.image.srcSet,
                    alt: t.image.alt || t.title || ``,
                    style: {
                      display: `block`,
                      width: `100%`,
                      height: `auto`,
                      transform: w ? `scale(1.03)` : `scale(1)`,
                      transition: `transform 600ms cubic-bezier(.2,.7,.2,1)`,
                    },
                  })
                : /*#__PURE__*/ m(`div`, { style: { paddingTop: `75%` } }),
            })
          : /*#__PURE__*/ m(`div`, {
              style: {
                position: `relative`,
                width: `100%`,
                paddingTop: `${(1 / (ct[n] || 4 / 3)) * 100}%`,
                overflow: `hidden`,
                background: h,
                borderRadius: p,
                boxShadow: e
                  ? `0 0 0 1px rgba(255,255,255,0.06)`
                  : `0 0 0 1px rgba(255,255,255,0.5)`,
              },
              children:
                t.image?.src &&
                /*#__PURE__*/ m(`img`, {
                  src: t.image.src,
                  srcSet: t.image.srcSet,
                  alt: t.image.alt || t.title || ``,
                  style: {
                    position: `absolute`,
                    top: 0,
                    left: 0,
                    width: `100%`,
                    height: `100%`,
                    objectFit: r,
                    transform: w ? `scale(1.03)` : `scale(1)`,
                    transition: `transform 600ms cubic-bezier(.2,.7,.2,1)`,
                  },
                }),
            }),
        /*#__PURE__*/ f(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            gap: 12,
            marginTop: 14,
            position: `relative`,
          },
          children: [
            /*#__PURE__*/ m(`div`, {
              style: { display: `flex`, flexWrap: `wrap`, gap: 6 },
              children: E.map((t, n) =>
                /*#__PURE__*/ m(
                  `span`,
                  {
                    style: {
                      background: d
                        ? e
                          ? `rgba(255,255,255,0.08)`
                          : `rgba(255,255,255,0.45)`
                        : g,
                      padding: d ? `4px 9px` : `4px 8px`,
                      borderRadius: d ? 999 : 3,
                      border: d
                        ? e
                          ? `1px solid rgba(255,255,255,0.12)`
                          : `1px solid rgba(255,255,255,0.85)`
                        : `none`,
                      boxShadow: d
                        ? `inset 0 1px 0 rgba(255,255,255,0.9), 0 1px 3px rgba(20,30,70,0.08)`
                        : `none`,
                      backdropFilter: d ? `blur(8px)` : void 0,
                      WebkitBackdropFilter: d ? `blur(8px)` : void 0,
                      fontSize: S,
                      lineHeight: 1.2,
                      textTransform: `uppercase`,
                      whiteSpace: `nowrap`,
                    },
                    children: t,
                  },
                  n,
                ),
              ),
            }),
            t.year &&
              /*#__PURE__*/ m(`span`, {
                style: { fontSize: C, whiteSpace: `nowrap` },
                children: t.year,
              }),
          ],
        }),
        /*#__PURE__*/ f(`div`, {
          style: {
            display: `flex`,
            alignItems: `center`,
            justifyContent: `space-between`,
            gap: 12,
            marginTop: 16,
            position: `relative`,
          },
          children: [
            /*#__PURE__*/ m(`span`, {
              style: { fontSize: b, lineHeight: 1.2 },
              children: t.title,
            }),
            /*#__PURE__*/ m(`svg`, {
              width: Math.round(b * 0.7),
              height: Math.round(b * 0.7),
              viewBox: `0 0 16 16`,
              fill: `none`,
              style: {
                flexShrink: 0,
                transform: w ? `translate(2px,-2px)` : `none`,
                transition: `transform 250ms ease`,
              },
              children: /*#__PURE__*/ m(`path`, {
                d: `M4 12L12 4M5.5 4H12V10.5`,
                stroke: _,
                strokeWidth: `1.6`,
              }),
            }),
          ],
        }),
        /*#__PURE__*/ m(`p`, {
          style: {
            margin: `6px 0 0`,
            position: `relative`,
            fontSize: x,
            lineHeight: 1.45,
            color: v,
          },
          children: t.description,
        }),
      ],
    });
  return D
    ? /*#__PURE__*/ m(se, {
        href: t.link,
        openInNewTab: !!t.newTab,
        children: O,
      })
    : O;
}
function st(e) {
  let {
      projects: t = R,
      columns: n = 2,
      gap: r = 24,
      imageRatio: i = `4:3`,
      imageFit: a = `cover`,
      cardBackground: o = `#FFFFFF`,
      glassOpacity: s = 100,
      glassBlur: c = 0,
      glassBorder: l = 65,
      glassRadius: u = 20,
      glassSheen: d = 0,
      glassTags: f = !1,
      imageRadius: p = 12,
      imageBackground: h = `#EDEDED`,
      tagBackground: g = `#E6E6E6`,
      textColor: _ = `#111111`,
      mutedColor: v = `#6B6B6B`,
      fontFamily: y = `Inter`,
      titleSize: b = 22,
      descriptionSize: x = 17,
      tagSize: S = 13,
      yearSize: C = 14,
      style: w,
    } = e,
    T = at(e.themeMode ?? `auto`) === `dark`,
    E = { ...lt, ...(e.darkColors || {}) },
    D = T
      ? {
          cardBackground: E.card,
          imageBackground: E.image,
          tagBackground: E.tag,
          textColor: E.text,
          mutedColor: E.muted,
          glassBorder: Math.min(l, 10),
        }
      : {
          cardBackground: o,
          imageBackground: h,
          tagBackground: g,
          textColor: _,
          mutedColor: v,
          glassBorder: l,
        },
    O = `${y}, "Inter", system-ui, sans-serif`,
    k = t && t.length ? t : R;
  return /*#__PURE__*/ m(`div`, {
    style: {
      ...w,
      display: `grid`,
      gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))`,
      gap: r,
      width: `100%`,
    },
    children: k.map((e, t) =>
      /*#__PURE__*/ m(
        ot,
        {
          p: e,
          dark: T,
          imageRatio: i,
          imageFit: a,
          cardBackground: D.cardBackground,
          glassOpacity: s,
          glassBlur: c,
          glassBorder: D.glassBorder,
          glassRadius: u,
          glassSheen: d,
          glassTags: f,
          imageRadius: p,
          imageBackground: D.imageBackground,
          tagBackground: D.tagBackground,
          textColor: D.textColor,
          mutedColor: D.mutedColor,
          font: O,
          titleSize: b,
          descriptionSize: x,
          tagSize: S,
          yearSize: C,
        },
        t,
      ),
    ),
  });
}
var R, z, ct, lt;
function ut() {
  return (ut = e(() => {
    i(),
      g(),
      _(),
      C(),
      (R = [
        {
          tags: `Product Design, Web Design`,
          year: `2026`,
          title: `FilmReel`,
          description: `A curator-led streaming and discovery platform for independent and student films, designed end to end and shipped at 4um.`,
        },
        {
          tags: `AR / XR, Product Management`,
          year: `2025–Now`,
          title: `NASA SUITS — AR Interfaces`,
          description: `AR interfaces for NASA's SUITS Challenge, selected for flight testing by NASA astronaut Anne McClain.`,
        },
        {
          tags: `Product Management`,
          year: `2025`,
          title: `TinuAI`,
          description: `A B2B fintech chatbot that keeps the context behind financial decisions when analysts leave. Top 3 of 72 teams.`,
        },
        {
          tags: `AR / XR, Product Design`,
          year: `2026`,
          title: `AR Shopping`,
          description: `Scanning your space to check a product's real measurements before you buy, moving from phone to wearable.`,
        },
      ]),
      (z = (e, t) => {
        let n = (e || `#FFFFFF`).replace(`#`, ``),
          r = parseInt(
            n.length === 3
              ? n
                  .split(``)
                  .map((e) => e + e)
                  .join(``)
              : n.slice(0, 6),
            16,
          );
        return `rgba(${(r >> 16) & 255}, ${(r >> 8) & 255}, ${r & 255}, ${t / 100})`;
      }),
      (ct = {
        "4:3": 4 / 3,
        "16:9": 16 / 9,
        "3:2": 3 / 2,
        "1:1": 1,
        "4:5": 4 / 5,
      }),
      (lt = {
        card: `#1F1F1F`,
        image: `#2A2A2A`,
        tag: `#2C2C2E`,
        text: `#F5F5F7`,
        muted: `#A1A1AA`,
      }),
      w(st, {
        projects: {
          type: F.Array,
          title: `Projects`,
          defaultValue: R,
          control: {
            type: F.Object,
            controls: {
              image: { type: F.ResponsiveImage, title: `Image` },
              tags: {
                type: F.String,
                title: `Tags`,
                placeholder: `Product Design, Web Design`,
              },
              year: { type: F.String, title: `Year` },
              title: { type: F.String, title: `Title` },
              description: {
                type: F.String,
                title: `Description`,
                displayTextArea: !0,
              },
              link: { type: F.Link, title: `Link` },
              newTab: { type: F.Boolean, title: `New Tab`, defaultValue: !1 },
            },
          },
        },
        columns: {
          type: F.Number,
          title: `Columns`,
          defaultValue: 2,
          min: 1,
          max: 4,
          step: 1,
          displayStepper: !0,
        },
        gap: {
          type: F.Number,
          title: `Gap`,
          defaultValue: 24,
          min: 0,
          max: 80,
        },
        imageRatio: {
          type: F.Enum,
          title: `Image Ratio`,
          defaultValue: `4:3`,
          options: [`4:3`, `16:9`, `3:2`, `1:1`, `4:5`, `auto`],
          optionTitles: [
            `4:3`,
            `16:9`,
            `3:2`,
            `Square`,
            `Portrait 4:5`,
            `Original (no crop)`,
          ],
        },
        imageFit: {
          type: F.Enum,
          title: `Image Fit`,
          defaultValue: `cover`,
          options: [`cover`, `contain`],
          optionTitles: [`Fill (crop)`, `Fit (show all)`],
          displaySegmentedControl: !0,
          hidden: (e) => e.imageRatio === `auto`,
        },
        cardBackground: {
          type: F.Color,
          title: `Glass tint`,
          defaultValue: `#FFFFFF`,
        },
        glassOpacity: {
          type: F.Number,
          title: `Glass opacity`,
          defaultValue: 100,
          min: 0,
          max: 100,
          unit: `%`,
        },
        glassBlur: {
          type: F.Number,
          title: `Glass blur`,
          defaultValue: 0,
          min: 0,
          max: 40,
          unit: `px`,
        },
        glassBorder: {
          type: F.Number,
          title: `Glass edge`,
          defaultValue: 65,
          min: 0,
          max: 100,
          unit: `%`,
        },
        glassSheen: {
          type: F.Number,
          title: `Glass shine`,
          defaultValue: 0,
          min: 0,
          max: 100,
          unit: `%`,
        },
        glassRadius: {
          type: F.Number,
          title: `Card radius`,
          defaultValue: 20,
          min: 0,
          max: 48,
          unit: `px`,
        },
        imageRadius: {
          type: F.Number,
          title: `Image radius`,
          defaultValue: 12,
          min: 0,
          max: 40,
          unit: `px`,
        },
        glassTags: { type: F.Boolean, title: `Glass tags`, defaultValue: !1 },
        themeMode: {
          type: F.Enum,
          title: `Theme`,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Follow site`, `Light`, `Dark`],
          displaySegmentedControl: !0,
          defaultValue: `auto`,
        },
        darkColors: {
          type: F.Object,
          title: `Dark colors`,
          controls: {
            card: { type: F.Color, title: `Card`, defaultValue: `#1F1F1F` },
            image: {
              type: F.Color,
              title: `Image BG`,
              defaultValue: `#2A2A2A`,
            },
            tag: { type: F.Color, title: `Tag BG`, defaultValue: `#2C2C2E` },
            text: { type: F.Color, title: `Text`, defaultValue: `#F5F5F7` },
            muted: { type: F.Color, title: `Muted`, defaultValue: `#A1A1AA` },
          },
        },
        imageBackground: {
          type: F.Color,
          title: `Image BG`,
          defaultValue: `#EDEDED`,
        },
        tagBackground: {
          type: F.Color,
          title: `Tag BG`,
          defaultValue: `#E6E6E6`,
          hidden: (e) => e.glassTags,
        },
        textColor: { type: F.Color, title: `Text`, defaultValue: `#111111` },
        mutedColor: {
          type: F.Color,
          title: `Muted Text`,
          defaultValue: `#6B6B6B`,
        },
        fontFamily: { type: F.String, title: `Font`, defaultValue: `Inter` },
        titleSize: {
          type: F.Number,
          title: `Title Size`,
          defaultValue: 22,
          min: 10,
          max: 64,
          unit: `px`,
          displayStepper: !0,
        },
        descriptionSize: {
          type: F.Number,
          title: `Description Size`,
          defaultValue: 17,
          min: 10,
          max: 40,
          unit: `px`,
          displayStepper: !0,
        },
        tagSize: {
          type: F.Number,
          title: `Tag Size`,
          defaultValue: 13,
          min: 8,
          max: 24,
          unit: `px`,
          displayStepper: !0,
        },
        yearSize: {
          type: F.Number,
          title: `Year Size`,
          defaultValue: 14,
          min: 8,
          max: 24,
          unit: `px`,
          displayStepper: !0,
        },
      });
  }))();
}

it();
ut();
export { $e as Hero, st as ProjectGrid };
