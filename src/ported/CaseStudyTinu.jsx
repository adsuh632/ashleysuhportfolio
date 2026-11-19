/* eslint-disable */
// Ported from the original Framer code component bundle (eOkvpHXGMHZ5iS4gr5ah10zqko6Z6CAVPof2B56jiL8.js lines 47-3984).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, F as r, I as i, P as a, R as o, _ as s, b as c, c as l, j as u, l as d, o as f, p, s as m, w as h, y as g, } from "../shim/react.js";
import { C as _, a as v, r as y, t as b } from "../shim/motion.js";
import { B as x, C as S, D as C, N as w, S as T, T as ee, X as E, a as D, at as O, c as k, ct as te, dt as ne, g as re, i as ie, it as ae, mt as oe, nt as se, o as A, ot as ce, st as le, v as ue, xt as de, } from "../shim/framer.jsx";

function _e(e) {
  if (!e) return null;
  let t = e.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
  if (t)
    return `https://www.youtube.com/embed/${t[1]}?autoplay=1&mute=1&loop=1&playlist=${t[1]}&controls=0&playsinline=1`;
  let n = e.match(/vimeo\.com\/(?:video\/)?(\d+)/);
  return n
    ? `https://player.vimeo.com/video/${n[1]}?autoplay=1&muted=1&loop=1&background=1`
    : null;
}
function ve(e) {
  let t = () => {
      if (e === `light` || e === `dark`) return e;
      if (typeof document > `u`) return `light`;
      let t = document.documentElement,
        n = document.body;
      for (let e of [t, n]) {
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
    g(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = () => r(t()),
        i = { attributes: !0, attributeFilter: [`data-theme`, `class`] },
        a = new MutationObserver(n);
      a.observe(document.documentElement, i),
        document.body && a.observe(document.body, i);
      let s = o.matchMedia?.(`(prefers-color-scheme: dark)`);
      s?.addEventListener?.(`change`, n);
      let c = (e) => {
        let t = e.detail;
        t === `light` || t === `dark` ? r(t) : n();
      };
      return (
        o.addEventListener(`snav-theme-change`, c),
        o.addEventListener(`site-theme-change`, c),
        o.addEventListener(`storage`, n),
        () => {
          a.disconnect(),
            s?.removeEventListener?.(`change`, n),
            o.removeEventListener(`snav-theme-change`, c),
            o.removeEventListener(`site-theme-change`, c),
            o.removeEventListener(`storage`, n);
        }
      );
    }, [e]),
    n
  );
}
function ye(e) {
  let t = { ...Ne, ...(e.darkColors || {}) };
  return {
    ...e,
    colors: {
      ...(e.colors || {}),
      background: t.background,
      text: t.text,
      muted: t.muted,
      accent: t.accent,
      progress: t.progress,
      progressTrack: t.progressTrack,
      surface: t.surface,
      border: t.border,
    },
    titleColor: t.heading,
    headingColor: t.heading,
    subheadingColor: t.heading,
    quoteColor: t.heading,
    statColor: t.heading,
    exploreHeadingColor: t.heading,
    detailValueColor: t.text,
    bodyColor: t.body,
    labelColor: t.label,
    eyebrowColor: t.eyebrow,
    cardColor: t.card,
    cardHoverColor: t.cardHover,
  };
}
function be(e) {
  let t = ve(e.themeMode) === `dark`,
    {
      showNav: n,
      backLabel: i,
      backLink: u,
      backUrl: p,
      backStyle: m,
      heroNavLabel: h,
      stickyOffset: _,
      showProgress: v,
      progressLabel: y,
      mobileProgress: b,
      projectName: x,
      year: S,
      title: C,
      intro: w,
      heroImage: T,
      heroImageUrl: ee,
      heroVideo: E,
      heroVideoUrl: D,
      detailsPosition: O,
      meta: k,
      detailLabelCaps: te,
      contentV2: ne,
      showDividers: re,
      showExplore: ie,
      exploreHeading: ae,
      exploreColumns: oe,
      exploreSpace: se,
      exploreHeadingFont: A,
      exploreHeadingColor: ce,
      tabletSizes: le,
      phoneSizes: ue,
      padding: fe,
      titleWeight: pe,
      headingWeight: me,
      projects: he,
      colors: ge,
      layout: j,
      titleFont: be,
      headingFont: De,
      subheadingFont: Me,
      bodyFont: Ne,
      labelFont: Pe,
      eyebrowFont: Fe,
      quoteFont: Ie,
      cardFont: Le,
      statFont: Re,
      titleColor: N,
      headingColor: P,
      subheadingColor: F,
      bodyColor: I,
      labelColor: L,
      eyebrowColor: R,
      quoteColor: ze,
      statColor: z,
      cardColor: B,
      cardHoverColor: V,
      detailValueFont: Be,
      detailValueColor: Ve,
      style: He,
    } = t ? ye(e) : e,
    H = ge,
    Ue = de.current() === de.canvas,
    We = c(null),
    Ge = c(null),
    Ke = c(null),
    qe = c(null),
    Je = c(`sticky`),
    U = c(`sticky`),
    [Ye, Xe] = s(1200),
    [Ze, Qe] = s(`top`),
    [$e, et] = s(0);
  g(() => {
    let e = We.current;
    if (!e || typeof ResizeObserver > `u`) return;
    let t = new ResizeObserver((e) => Xe(e[0].contentRect.width));
    return t.observe(e), () => t.disconnect();
  }, []),
    g(() => {
      if (o === void 0) return;
      let e = 0,
        t = () => {
          e = 0;
          let t = We.current;
          if (!t) return;
          let n = t.getBoundingClientRect(),
            r = n.height - o.innerHeight,
            i = r > 0 ? Math.min(Math.max(-n.top / r, 0), 1) : 0;
          et(i);
          let a = Ge.current,
            s = Ke.current;
          if (a && s) {
            let e = a.getBoundingClientRect(),
              t = _ || 0,
              n = s.offsetHeight,
              r = s.style,
              i = Math.max(0, e.height - n),
              o = e.top < t - 2 && e.bottom - n > t + 2;
            if (
              Je.current === `sticky` &&
              ((r.position = `sticky`),
              (r.top = `${t}px`),
              (r.left = ``),
              (r.bottom = ``),
              (r.width = `100%`),
              (r.transform = ``),
              o)
            ) {
              let e = s.getBoundingClientRect();
              Math.abs(e.top - t) > 2 && (Je.current = `fixed`);
            }
            if (Je.current === `fixed`) {
              if (((r.transform = ``), e.top >= t))
                (r.position = `absolute`),
                  (r.top = `0px`),
                  (r.bottom = ``),
                  (r.left = `0px`),
                  (r.width = `100%`);
              else if (e.bottom - n <= t)
                (r.position = `absolute`),
                  (r.top = ``),
                  (r.bottom = `0px`),
                  (r.left = `0px`),
                  (r.width = `100%`);
              else {
                (r.position = `fixed`),
                  (r.top = `${t}px`),
                  (r.bottom = ``),
                  (r.left = `${Math.round(e.left)}px`),
                  (r.width = `${Math.round(e.width)}px`);
                let n = s.getBoundingClientRect();
                (Math.abs(n.top - t) > 2 || Math.abs(n.left - e.left) > 2) &&
                  (Je.current = `follow`);
              }
            }
            if (Je.current === `follow`) {
              (r.position = `absolute`),
                (r.top = `0px`),
                (r.bottom = ``),
                (r.left = `0px`),
                (r.width = `100%`);
              let n = a.offsetHeight ? e.height / a.offsetHeight : 1,
                o = Math.min(Math.max((t - e.top) / (n || 1), 0), i);
              r.transform = `translate3d(0, ${Math.round(o)}px, 0)`;
            }
          }
          let c = qe.current;
          if (c) {
            let e = c.style,
              r = c.offsetHeight;
            if (
              U.current === `sticky` &&
              ((e.position = `sticky`),
              (e.top = `0px`),
              (e.transform = ``),
              n.top < -2 && n.bottom > r + 2)
            ) {
              let e = c.getBoundingClientRect();
              Math.abs(e.top) > 2 && (U.current = `follow`);
            }
            if (U.current === `follow`) {
              e.position = `relative`;
              let i = t.offsetHeight ? n.height / t.offsetHeight : 1,
                a = Math.min(
                  Math.max(-n.top / (i || 1), 0),
                  Math.max(0, t.offsetHeight - r),
                );
              e.transform = `translate3d(0, ${Math.round(a)}px, 0)`;
            }
          }
        },
        n = () => {
          e ||= requestAnimationFrame(t);
        };
      t();
      let r = setTimeout(t, 300);
      return (
        o.addEventListener(`scroll`, n, { passive: !0, capture: !0 }),
        o.addEventListener(`resize`, n),
        () => {
          clearTimeout(r),
            o.removeEventListener(`scroll`, n, { capture: !0 }),
            o.removeEventListener(`resize`, n),
            e && cancelAnimationFrame(e);
        }
      );
    }, [Ye, _, n, v, b]);
  let tt = (ne || []).map((e, t) => {
      let n = (e.navLabel || e.eyebrow || ``).trim().toLowerCase(),
        r = n === `problem` && t > 0,
        i = e.type === `section` && (e.mergeUp || n === `requirements` || r),
        a =
          r && e.heading && !/^problem\b/i.test(e.heading.trim())
            ? `Problem: ${e.heading}`
            : e.heading;
      return i
        ? {
            ...e,
            type: `subheading`,
            subheading: a,
            body: e.body,
            prominent: r || e.prominent,
          }
        : e;
    }),
    nt = [];
  {
    let e = !0;
    tt.forEach((t) => {
      t.type === `section` && (e = t.visible !== !1),
        nt.push(e && t.visible !== !1);
    });
  }
  let rt = tt.map((e, t) => ({ b: e, i: t })).filter(({ i: e }) => nt[e]),
    it = tt.map((e, t) =>
      e.type === `section` ? Oe(e.navLabel || e.eyebrow || `section`, t) : ``,
    ),
    at = [
      ...(h ? [{ id: `top`, label: h }] : []),
      ...tt
        .map((e, t) => ({
          id: it[t],
          label: e.navLabel || e.eyebrow,
          show: e.type === `section` && nt[t] && e.showInNav !== !1,
        }))
        .filter((e) => e.show && e.label),
    ],
    ot = at.map((e) => e.id).join(`|`);
  g(() => {
    if (o === void 0) return;
    let e = [`top`, ...it.filter(Boolean)],
      t = 0,
      n = () => {
        t = 0;
        let n = o.innerHeight * 0.35,
          r = e[0];
        for (let t of e) {
          let e = document.getElementById(t);
          e && e.getBoundingClientRect().top <= n && (r = t);
        }
        Qe(r);
      },
      r = () => {
        t ||= requestAnimationFrame(n);
      };
    return (
      n(),
      o.addEventListener(`scroll`, r, { passive: !0, capture: !0 }),
      () => {
        o.removeEventListener(`scroll`, r, { capture: !0 }),
          t && cancelAnimationFrame(t);
      }
    );
  }, [ot]);
  let W = Ye < j.breakpoint,
    G = !W && Ye < (j.tabletBreakpoint ?? 1200),
    K = W || G,
    q = fe || {},
    st = W
      ? (q.phoneTop ?? 64)
      : G
        ? (q.tabletTop ?? 96)
        : (q.desktopTop ?? 120),
    ct = W
      ? (q.phoneBottom ?? 64)
      : G
        ? (q.tabletBottom ?? 96)
        : (q.desktopBottom ?? 120),
    lt = W
      ? (q.phoneSides ?? 20)
      : G
        ? (q.tabletSides ?? 40)
        : (q.desktopSides ?? 64),
    ut = (e, t) => (!t || t === `font` ? e : { ...e, fontWeight: Number(t) }),
    dt = n && !K,
    J = (e, t) => {
      let n = W ? ue : G ? le : null,
        r = n ? n[t] : null;
      return r ? { ...e, fontSize: r } : e;
    },
    ft = ut(J(be, `title`), pe),
    Y = ut(J(De, `heading`), me),
    X = J(Me, `subheading`),
    pt = J(Fe, `eyebrow`),
    Z = J(Ne, `body`),
    mt = J(Pe, `label`),
    ht = J(Ie, `quote`),
    gt = J(Re, `stat`),
    _t = J(Be, `detail`),
    vt = J(A, `explore`),
    yt = J(Le, `card`),
    bt = Math.round((1 - $e) * 100),
    xt = 100 - bt,
    St = y === `read` ? `${xt}% read` : y === `none` ? `` : `${bt}% left`,
    Ct = (e) => typeof e == `string` && e.trim() !== ``,
    wt = Ct(u)
      ? u.trim()
      : Ct(p)
        ? p.trim()
        : `https://ashleysuh.framer.website/#projects`,
    Tt = i
      ? /*#__PURE__*/ f(xe, {
          label: i,
          href: wt || `https://ashleysuh.framer.website/#projects`,
          variant: m,
          font: mt,
          color: H.text,
          border: H.border,
          surface: H.surface,
          dark: t,
        })
      : null,
    Et = (e, t) => {
      e.preventDefault(),
        document
          .getElementById(t)
          ?.scrollIntoView({ behavior: `smooth`, block: `start` });
    },
    Q = { ...mt, textTransform: `none`, letterSpacing: 0 },
    Dt = ({ text: e, color: t = I }) =>
      /*#__PURE__*/ f(l, {
        children: ke(e).map((e, n) =>
          /*#__PURE__*/ f(
            `p`,
            {
              style: {
                ...Z,
                color: t,
                margin: 0,
                marginTop: n ? 16 : 0,
                whiteSpace: `pre-line`,
              },
              children: Ae(e, P),
            },
            n,
          ),
        ),
      }),
    $ = ({
      image: e,
      video: t,
      url: n,
      caption: i,
      aspect: a = `auto`,
      fit: o = `cover`,
      force: s = !0,
      marginTop: c = 0,
      zoom: l = 1,
      focus: u = `center`,
      maxHeight: p = 0,
    }) => {
      let m = e && e.src,
        h = _e(n),
        g = t || (n && !h ? n : ``);
      if (!(m || g || h) && !(s && Ue)) return null;
      let _ = j.mediaPadding || 0,
        v = _ ? Math.max(j.radius - _ / 3, 4) : j.radius,
        y = a && a !== `auto` ? a : void 0,
        b = Number(p) || j.mediaMaxHeight || 480,
        x = W ? Math.round(b * 0.75) : b,
        S = Math.max(1, Number(l) || 1),
        C =
          {
            top: `50% 0%`,
            bottom: `50% 100%`,
            left: `0% 50%`,
            right: `100% 50%`,
          }[u] || `50% 50%`,
        w = (e, t) =>
          S > 1
            ? /*#__PURE__*/ f(`div`, {
                style: {
                  overflow: `hidden`,
                  borderRadius: v,
                  width: t ? `fit-content` : `100%`,
                  maxWidth: `100%`,
                  margin: t ? `0 auto` : void 0,
                },
                children: /*#__PURE__*/ r(e, {
                  style: {
                    ...e.props.style,
                    transform: `scale(${S})`,
                    transformOrigin: C,
                  },
                }),
              })
            : e,
        T = {
          width: `100%`,
          maxHeight: x,
          borderRadius: v,
          overflow: `hidden`,
          display: `block`,
          aspectRatio: y,
          objectFit: o === `contain` ? `contain` : `cover`,
        },
        ee = {
          display: `block`,
          width: `auto`,
          height: `auto`,
          maxWidth: `100%`,
          maxHeight: x,
          margin: `0 auto`,
          borderRadius: v,
        },
        E;
      return (
        (E = h
          ? /*#__PURE__*/ f(`div`, {
              style: { ...T, aspectRatio: y || `16 / 9`, position: `relative` },
              children: /*#__PURE__*/ f(`iframe`, {
                src: h,
                allow: `autoplay; encrypted-media; picture-in-picture`,
                allowFullScreen: !0,
                style: {
                  position: `absolute`,
                  inset: 0,
                  width: `100%`,
                  height: `100%`,
                  border: 0,
                },
              }),
            })
          : g
            ? w(
                /*#__PURE__*/ f(`video`, {
                  src: g,
                  autoPlay: !0,
                  muted: !0,
                  loop: !0,
                  playsInline: !0,
                  style: y ? T : ee,
                }),
                !y,
              )
            : m
              ? w(
                  /*#__PURE__*/ f(`img`, {
                    src: e.src,
                    srcSet: e.srcSet,
                    alt: e.alt || ``,
                    style: y ? T : ee,
                  }),
                  !y,
                )
              : /*#__PURE__*/ f(`div`, {
                  style: {
                    ...T,
                    aspectRatio: y || `16 / 10`,
                    display: `flex`,
                    alignItems: `center`,
                    justifyContent: `center`,
                    textAlign: `center`,
                    padding: 16,
                    boxSizing: `border-box`,
                    border: `1px dashed ${H.border}`,
                    background: `transparent`,
                    color: H.muted,
                    ...Q,
                  },
                  children: `Drop an image or video onto this block in the panel →`,
                })),
        /*#__PURE__*/ d(`figure`, {
          style: { margin: 0, marginTop: c },
          children: [
            /*#__PURE__*/ f(`div`, {
              style: {
                padding: W ? _ / 2 : _,
                background: _ ? H.surface : `transparent`,
                borderRadius: j.radius,
              },
              children: E,
            }),
            i
              ? /*#__PURE__*/ f(`figcaption`, {
                  style: { ...Q, color: L, marginTop: 12 },
                  children: i,
                })
              : null,
          ],
        })
      );
    },
    Ot = () =>
      /*#__PURE__*/ f(`div`, { style: { height: 1, background: H.border } }),
    kt = (e, t) => {
      switch (e.type) {
        case `section`:
          return /*#__PURE__*/ d(`section`, {
            id: it[t],
            style: { scrollMarginTop: _ },
            children: [
              e.eyebrow
                ? /*#__PURE__*/ f(`div`, {
                    style: { ...pt, color: R, marginBottom: 10 },
                    children: e.eyebrow,
                  })
                : null,
              e.heading
                ? /*#__PURE__*/ f(`h2`, {
                    style: { ...Y, color: P, margin: 0 },
                    children: e.heading,
                  })
                : null,
              e.body
                ? /*#__PURE__*/ f(`div`, {
                    style: { marginTop: 20 },
                    children: /*#__PURE__*/ f(Dt, { text: e.body }),
                  })
                : null,
            ],
          });
        case `text`:
          return /*#__PURE__*/ f(Dt, { text: e.body });
        case `subheading`:
          return /*#__PURE__*/ d(`div`, {
            children: [
              e.subheading
                ? /*#__PURE__*/ f(`h3`, {
                    style: e.prominent
                      ? {
                          ...Y,
                          fontSize: `calc(${typeof Y.fontSize == `number` ? Y.fontSize + `px` : Y.fontSize || `28px`} * 0.82)`,
                          color: P,
                          margin: 0,
                          marginBottom: e.body ? 14 : 0,
                        }
                      : {
                          ...X,
                          color: F,
                          margin: 0,
                          marginBottom: e.body ? 12 : 0,
                        },
                    children: e.subheading,
                  })
                : null,
              e.body ? /*#__PURE__*/ f(Dt, { text: e.body }) : null,
            ],
          });
        case `media`:
          return /*#__PURE__*/ f($, {
            image: M(e.image, e.imageUrl),
            video: e.video,
            url: e.videoUrl,
            caption: e.caption,
            aspect: e.aspect,
            fit: e.fit,
            zoom: e.zoom,
            focus: e.focus,
            maxHeight: e.maxHeight,
          });
        case `mediaPair`:
          return /*#__PURE__*/ d(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: K
                ? `minmax(0, 1fr)`
                : `repeat(2, minmax(0, 1fr))`,
              gap: 20,
            },
            children: [
              /*#__PURE__*/ f($, {
                image: M(e.image, e.imageUrl),
                video: e.video,
                url: e.videoUrl,
                caption: e.caption,
                aspect: e.aspect || `1 / 1`,
                fit: e.fit,
                zoom: e.zoom,
                focus: e.focus,
                maxHeight: e.maxHeight,
              }),
              /*#__PURE__*/ f($, {
                image: M(e.image2, e.imageUrl2),
                video: e.video2,
                url: e.videoUrl2,
                caption: e.caption2,
                aspect: e.aspect || `1 / 1`,
                fit: e.fit,
                zoom: e.zoom,
                focus: e.focus,
                maxHeight: e.maxHeight,
              }),
            ],
          });
        case `carousel`: {
          let t = [
              M(e.image, e.imageUrl),
              M(e.image2, e.imageUrl2),
              M(e.image3, e.imageUrl3),
              M(e.image4, e.imageUrl4),
            ],
            n = je(e.slides)
              .slice(0, 4)
              .map((e, n) => {
                let [r, ...i] = e.split(`|`);
                return {
                  title: (r || ``).trim(),
                  body: i.join(`|`).trim(),
                  img: t[n],
                };
              });
          return /*#__PURE__*/ f(we, {
            slides: n,
            interval: Math.max(1, Number(e.interval) || 1.5),
            isMobile: K,
            isStatic: Ue,
            aspect: e.aspect,
            fit: e.fit,
            pad: j.mediaPadding || 0,
            radius: j.radius,
            surface: H.surface,
            titleFont: X,
            bodyFont: Z,
            text: P,
            muted: L,
            body: I,
            accent: H.progress,
            border: H.border,
          });
        }
        case `mediaTrio`:
          return /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: K ? `1fr` : `repeat(3, minmax(0, 1fr))`,
              gap: W ? 20 : 16,
            },
            children: [
              [e.image, e.imageUrl, e.video, e.videoUrl, e.caption],
              [e.image2, e.imageUrl2, e.video2, e.videoUrl2, e.caption2],
              [e.image3, e.imageUrl3, e.video3, e.videoUrl3, e.caption3],
            ].map(([t, n, r, i, a], o) =>
              /*#__PURE__*/ f(
                $,
                {
                  image: M(t, n),
                  video: r,
                  url: i,
                  caption: a,
                  aspect: e.aspect || `4 / 3`,
                  fit: e.fit,
                  zoom: e.zoom,
                  focus: e.focus,
                  maxHeight: e.maxHeight,
                },
                o,
              ),
            ),
          });
        case `mediaText`: {
          let t = /*#__PURE__*/ f($, {
              image: M(e.image, e.imageUrl),
              video: e.video,
              url: e.videoUrl,
              caption: e.caption,
              aspect: e.aspect,
              fit: e.fit,
              zoom: e.zoom,
              focus: e.focus,
              maxHeight: e.maxHeight,
            }),
            n = /*#__PURE__*/ d(`div`, {
              style: { alignSelf: `center` },
              children: [
                e.subheading
                  ? /*#__PURE__*/ f(`h3`, {
                      style: { ...X, color: F, margin: 0, marginBottom: 12 },
                      children: e.subheading,
                    })
                  : null,
                /*#__PURE__*/ f(Dt, { text: e.body }),
              ],
            }),
            r = e.mediaSide === `right`;
          return /*#__PURE__*/ d(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: K ? `1fr` : r ? `1fr 1.2fr` : `1.2fr 1fr`,
              gap: W ? 20 : 40,
            },
            children: [K || !r ? t : n, K || !r ? n : t],
          });
        }
        case `list`: {
          let t = je(e.listItems);
          if (e.listStyle === `flow`)
            return /*#__PURE__*/ f(Ce, {
              items: t.map((e) => {
                let [t, ...n] = e.split(`|`);
                return { title: t.trim(), desc: n.join(`|`).trim() };
              }),
              isMobile: K,
              isStatic: Ue,
              pageBg: H.background,
              titleFont: X,
              bodyFont: Z,
              text: P,
              body: I,
              accent: H.progress,
              border: H.border,
            });
          let n = e.listStyle === `stacked`;
          return /*#__PURE__*/ f(`ol`, {
            style: {
              listStyle: `none`,
              padding: 0,
              margin: 0,
              display: `flex`,
              flexDirection: n ? `column` : `row`,
              flexWrap: `wrap`,
              gap: n ? 12 : `8px 24px`,
            },
            children: t.map((e, t) =>
              /*#__PURE__*/ d(
                `li`,
                {
                  style: {
                    ...(n ? Z : Q),
                    color: n ? I : L,
                    display: `flex`,
                    gap: 8,
                  },
                  children: [
                    /*#__PURE__*/ f(`span`, {
                      style: {
                        color: H.accent,
                        fontVariantNumeric: `tabular-nums`,
                      },
                      children: String(t + 1).padStart(2, `0`),
                    }),
                    /*#__PURE__*/ f(`span`, {
                      children: (() => {
                        let t = e.match(/^([^:]{1,40}):\s*(.*)$/);
                        return t
                          ? /*#__PURE__*/ d(l, {
                              children: [
                                /*#__PURE__*/ d(`strong`, {
                                  style: { fontWeight: 600, color: H.text },
                                  children: [t[1], `:`],
                                }),
                                ` `,
                                t[2],
                              ],
                            })
                          : e;
                      })(),
                    }),
                  ],
                },
                t,
              ),
            ),
          });
        }
        case `quote`:
          return /*#__PURE__*/ d(`blockquote`, {
            style: {
              margin: 0,
              padding: W ? 24 : 40,
              background: H.surface,
              borderRadius: j.radius,
            },
            children: [
              /*#__PURE__*/ d(`p`, {
                style: { ...ht, color: ze, margin: 0 },
                children: [`“`, e.quote, `”`],
              }),
              e.quoteName || e.quoteRole
                ? /*#__PURE__*/ d(`div`, {
                    style: {
                      display: `flex`,
                      alignItems: `center`,
                      gap: 12,
                      marginTop: 24,
                    },
                    children: [
                      e.quoteImage && e.quoteImage.src
                        ? /*#__PURE__*/ f(`img`, {
                            src: e.quoteImage.src,
                            alt: e.quoteImage.alt || ``,
                            style: {
                              width: 40,
                              height: 40,
                              borderRadius: `50%`,
                              objectFit: `cover`,
                            },
                          })
                        : null,
                      /*#__PURE__*/ d(`div`, {
                        children: [
                          /*#__PURE__*/ f(`div`, {
                            style: { ...Z, color: H.text, lineHeight: 1.3 },
                            children: e.quoteName,
                          }),
                          /*#__PURE__*/ f(`div`, {
                            style: { ...Q, color: L },
                            children: e.quoteRole,
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
            ],
          });
        case `stats`: {
          let t = je(e.stats).map((e) => {
            let [t, ...n] = e.split(`|`);
            return { value: (t || ``).trim(), label: n.join(`|`).trim() };
          });
          return /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: K
                ? `1fr 1fr`
                : `repeat(${Math.max(1, Math.min(t.length, 4))}, 1fr)`,
              gap: 16,
            },
            children: t.map((e, n) =>
              /*#__PURE__*/ d(
                `div`,
                {
                  style: {
                    background: H.surface,
                    borderRadius: j.radius,
                    padding: 24,
                    gridColumn:
                      K && t.length % 2 == 1 && n === t.length - 1
                        ? `1 / -1`
                        : void 0,
                  },
                  children: [
                    /*#__PURE__*/ f(`div`, {
                      style: { ...gt, color: z },
                      children: e.value,
                    }),
                    /*#__PURE__*/ f(`div`, {
                      style: { ...Q, color: L, marginTop: 6 },
                      children: e.label,
                    }),
                  ],
                },
                n,
              ),
            ),
          });
        }
        case `cards`: {
          let t = je(e.cards).map((e) => {
              let [t, n, r, i] = e.split(`|`).map((e) => (e || ``).trim());
              return {
                title: t,
                desc: n,
                icon: r,
                wide: i === `wide`,
                highlight: i === `highlight`,
              };
            }),
            n = (e, t, n = !1) =>
              /*#__PURE__*/ d(
                `div`,
                {
                  style: {
                    gridColumn: e.wide && !K ? `1 / -1` : void 0,
                    background: n ? H.background : H.surface,
                    border: n
                      ? `1px solid ${H.progress}`
                      : `1px solid transparent`,
                    borderRadius: j.radius,
                    padding: W ? 18 : 22,
                  },
                  children: [
                    /*#__PURE__*/ d(`div`, {
                      style: { display: `flex`, alignItems: `center`, gap: 12 },
                      children: [
                        /*#__PURE__*/ f(`div`, {
                          style: {
                            width: 36,
                            height: 36,
                            flexShrink: 0,
                            borderRadius: 10,
                            background: n ? H.surface : H.background,
                            color: R,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                          },
                          children: /*#__PURE__*/ f(Se, { name: e.icon }),
                        }),
                        /*#__PURE__*/ f(`div`, {
                          style: { ...X, fontWeight: 600, color: F },
                          children: e.title,
                        }),
                      ],
                    }),
                    e.desc
                      ? /*#__PURE__*/ f(`div`, {
                          style: { ...Z, color: I, marginTop: 10 },
                          children: e.desc,
                        })
                      : null,
                  ],
                },
                t,
              );
          if (e.cardStyle === `bento`) {
            let [e, ...n] = t,
              r = W ? 2 : 3,
              i = (e, t) =>
                /*#__PURE__*/ d(
                  `div`,
                  {
                    style: {
                      background: H.surface,
                      borderRadius: j.radius,
                      padding: W ? 16 : 18,
                    },
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: {
                          ...X,
                          fontSize: 16,
                          fontWeight: 600,
                          color: F,
                        },
                        children: e.title,
                      }),
                      e.desc
                        ? /*#__PURE__*/ f(`div`, {
                            style: {
                              ...Z,
                              fontSize: 14,
                              lineHeight: `1.5em`,
                              color: I,
                              marginTop: 6,
                            },
                            children: e.desc,
                          })
                        : null,
                    ],
                  },
                  t,
                ),
              a = e
                ? /*#__PURE__*/ d(`div`, {
                    style: {
                      background: H.surface,
                      borderRadius: j.radius,
                      padding: W ? 20 : 24,
                      display: `flex`,
                      flexDirection: `column`,
                      justifyContent: `space-between`,
                      gap: 20,
                      gridRow: !W && !G ? `span 2` : void 0,
                      gridColumn: W || G ? `1 / -1` : void 0,
                    },
                    children: [
                      /*#__PURE__*/ d(`div`, {
                        children: [
                          e.icon
                            ? /*#__PURE__*/ f(`div`, {
                                style: { ...mt, color: R, marginBottom: 8 },
                                children: e.icon,
                              })
                            : null,
                          /*#__PURE__*/ f(`div`, {
                            style: { ...Y, fontSize: W ? 22 : 26, color: P },
                            children: e.title,
                          }),
                        ],
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: { ...Z, color: I },
                        children: e.desc,
                      }),
                    ],
                  })
                : null;
            return /*#__PURE__*/ d(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns:
                  W || G
                    ? `repeat(${r}, minmax(0, 1fr))`
                    : `1.4fr repeat(3, minmax(0, 1fr))`,
                gap: 10,
              },
              children: [a, n.map((e, t) => i(e, t))],
            });
          }
          if (e.cardStyle === `timeline`)
            return /*#__PURE__*/ d(`div`, {
              style: { position: `relative`, paddingLeft: W ? 24 : 32 },
              children: [
                /*#__PURE__*/ f(`div`, {
                  style: {
                    position: `absolute`,
                    left: 5,
                    top: 10,
                    bottom: 10,
                    width: 1,
                    background: H.border,
                  },
                }),
                t.map((e, t) =>
                  /*#__PURE__*/ d(
                    `div`,
                    {
                      style: {
                        position: `relative`,
                        marginTop: t ? (W ? 24 : 28) : 0,
                      },
                      children: [
                        /*#__PURE__*/ f(`span`, {
                          style: {
                            position: `absolute`,
                            left: W ? -24 : -32,
                            top: 7,
                            width: 11,
                            height: 11,
                            boxSizing: `border-box`,
                            borderRadius: `50%`,
                            background: e.highlight ? H.progress : H.background,
                            border: `1.5px solid ${e.highlight ? H.progress : L}`,
                          },
                        }),
                        /*#__PURE__*/ f(`div`, {
                          style: { ...X, fontWeight: 600, color: F },
                          children: e.title,
                        }),
                        e.desc
                          ? /*#__PURE__*/ f(`div`, {
                              style: { ...Z, color: I, marginTop: 6 },
                              children: e.desc,
                            })
                          : null,
                      ],
                    },
                    t,
                  ),
                ),
              ],
            });
          if (e.cardStyle === `plain`) {
            let n = Number(e.columns) || 2;
            return /*#__PURE__*/ f(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(${K ? 1 : n}, minmax(0, 1fr))`,
                gap: W ? 20 : 32,
              },
              children: t.map((e, t) =>
                /*#__PURE__*/ d(
                  `div`,
                  {
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: { ...X, fontWeight: 600, color: F },
                        children: e.title,
                      }),
                      e.desc
                        ? /*#__PURE__*/ f(`div`, {
                            style: { ...Z, color: I, marginTop: 8 },
                            children: e.desc,
                          })
                        : null,
                    ],
                  },
                  t,
                ),
              ),
            });
          }
          if (e.cardStyle === `stat`) {
            let n = Number(e.columns) || 3;
            return /*#__PURE__*/ f(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(${W || G ? 1 : n}, minmax(0, 1fr))`,
                gap: W ? 12 : 16,
              },
              children: t.map((e, t) =>
                /*#__PURE__*/ d(
                  `div`,
                  {
                    style: {
                      background: e.highlight ? H.background : H.surface,
                      border: e.highlight
                        ? `1px solid ${H.progress}`
                        : `1px solid transparent`,
                      borderRadius: j.radius,
                      padding: W ? 20 : 24,
                      display: `flex`,
                      flexDirection: `column`,
                      gap: 14,
                    },
                    children: [
                      /*#__PURE__*/ d(`div`, {
                        style: {
                          display: `flex`,
                          alignItems: `center`,
                          justifyContent: `space-between`,
                          gap: 12,
                        },
                        children: [
                          /*#__PURE__*/ f(`div`, {
                            style: { ...gt, color: z },
                            children: e.title,
                          }),
                          e.icon
                            ? /*#__PURE__*/ f(`div`, {
                                style: {
                                  width: 36,
                                  height: 36,
                                  flexShrink: 0,
                                  borderRadius: 10,
                                  background: e.highlight
                                    ? H.surface
                                    : H.background,
                                  color: R,
                                  display: `flex`,
                                  alignItems: `center`,
                                  justifyContent: `center`,
                                },
                                children: /*#__PURE__*/ f(Se, { name: e.icon }),
                              })
                            : null,
                        ],
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: { height: 1, background: H.border },
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: { ...Z, color: I },
                        children: e.desc,
                      }),
                    ],
                  },
                  t,
                ),
              ),
            });
          }
          if (e.cardStyle === `compact`) {
            let r = Number(e.columns) || 3;
            return /*#__PURE__*/ f(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `repeat(${K ? 1 : r}, minmax(0, 1fr))`,
                gap: 12,
              },
              children: t.map((e, t) => n(e, t, e.wide)),
            });
          }
          if (e.cardStyle === `stack`) {
            let r = /*#__PURE__*/ f(`div`, {
                style: { display: `flex`, flexDirection: `column`, gap: 12 },
                children: t.map((e, t) => n(e, t)),
              }),
              i = /*#__PURE__*/ f($, {
                image: M(e.image, e.imageUrl),
                video: e.video,
                url: e.videoUrl,
                caption: e.caption,
                aspect: e.aspect,
                fit: e.fit,
                zoom: e.zoom,
                focus: e.focus,
                maxHeight: e.maxHeight,
                force: !1,
              });
            if (!(M(e.image, e.imageUrl) || e.video || e.videoUrl)) return r;
            let a = e.mediaSide === `left`;
            if (K)
              return /*#__PURE__*/ d(`div`, {
                style: { display: `grid`, gap: 20 },
                children: [r, i],
              });
            let o = M(e.image, e.imageUrl),
              s = _e(e.videoUrl),
              c = e.video || (e.videoUrl && !s ? e.videoUrl : ``),
              l = j.mediaPadding || 0,
              u = l ? Math.max(j.radius - l / 3, 4) : j.radius,
              p =
                {
                  top: `50% 0%`,
                  bottom: `50% 100%`,
                  left: `0% 50%`,
                  right: `100% 50%`,
                }[e.focus] || `50% 50%`,
              m = {
                position: `absolute`,
                inset: 0,
                width: `100%`,
                height: `100%`,
                objectFit: e.fit === `contain` ? `contain` : `cover`,
                objectPosition: p,
                transform:
                  (Number(e.zoom) || 1) > 1 ? `scale(${e.zoom})` : void 0,
                transformOrigin: p,
                border: 0,
              },
              h = /*#__PURE__*/ d(`div`, {
                style: {
                  display: `flex`,
                  flexDirection: `column`,
                  minHeight: 0,
                },
                children: [
                  /*#__PURE__*/ f(`div`, {
                    style: {
                      flex: 1,
                      minHeight: 240,
                      padding: l,
                      background: l ? H.surface : `transparent`,
                      borderRadius: j.radius,
                      display: `flex`,
                    },
                    children: /*#__PURE__*/ f(`div`, {
                      style: {
                        position: `relative`,
                        flex: 1,
                        overflow: `hidden`,
                        borderRadius: u,
                        background: H.surface,
                      },
                      children: s
                        ? /*#__PURE__*/ f(`iframe`, {
                            src: s,
                            allow: `autoplay; encrypted-media`,
                            style: m,
                          })
                        : c
                          ? /*#__PURE__*/ f(`video`, {
                              src: c,
                              autoPlay: !0,
                              muted: !0,
                              loop: !0,
                              playsInline: !0,
                              style: m,
                            })
                          : o
                            ? /*#__PURE__*/ f(`img`, {
                                src: o.src,
                                srcSet: o.srcSet,
                                alt: o.alt || ``,
                                style: m,
                              })
                            : null,
                    }),
                  }),
                  e.caption
                    ? /*#__PURE__*/ f(`div`, {
                        style: { ...Q, color: L, marginTop: 12 },
                        children: e.caption,
                      })
                    : null,
                ],
              });
            return /*#__PURE__*/ d(`div`, {
              style: {
                display: `grid`,
                gridTemplateColumns: `minmax(0, 1fr) minmax(0, 1fr)`,
                gap: 24,
                alignItems: `stretch`,
              },
              children: [a ? h : r, a ? r : h],
            });
          }
          if (e.cardStyle === `numbered`)
            return /*#__PURE__*/ f(`div`, {
              children: t.map((e, n) =>
                /*#__PURE__*/ d(
                  `div`,
                  {
                    style: {
                      display: `grid`,
                      gridTemplateColumns: K
                        ? `48px minmax(0, 1fr)`
                        : `88px minmax(0, 1fr)`,
                      gap: K ? 12 : 24,
                      padding: `24px 0`,
                      borderTop: `1px solid ${H.border}`,
                      borderBottom:
                        n === t.length - 1 ? `1px solid ${H.border}` : void 0,
                    },
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: {
                          ...Y,
                          fontSize: K ? 28 : 40,
                          fontWeight: 600,
                          lineHeight: `1em`,
                          color: L,
                          opacity: 0.35,
                          fontVariantNumeric: `tabular-nums`,
                        },
                        children: String(n + 1).padStart(2, `0`),
                      }),
                      /*#__PURE__*/ d(`div`, {
                        children: [
                          /*#__PURE__*/ f(`div`, {
                            style: { ...X, color: P, marginBottom: 6 },
                            children: e.title,
                          }),
                          /*#__PURE__*/ f(`div`, {
                            style: { ...Z, color: I },
                            children: Ae(e.desc || ``, P),
                          }),
                        ],
                      }),
                    ],
                  },
                  n,
                ),
              ),
            });
          if (e.cardStyle === `rows`)
            return /*#__PURE__*/ f(`div`, {
              children: t.map((e, n) =>
                /*#__PURE__*/ d(
                  `div`,
                  {
                    style: {
                      display: `grid`,
                      gridTemplateColumns: K
                        ? `minmax(0, 1fr)`
                        : `minmax(0, 0.32fr) minmax(0, 0.68fr)`,
                      gap: K ? 6 : 32,
                      padding: `20px 0`,
                      borderTop: `1px solid ${H.border}`,
                      borderBottom:
                        n === t.length - 1 ? `1px solid ${H.border}` : void 0,
                      alignItems: `baseline`,
                    },
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: { ...X, color: P },
                        children: e.title,
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: { ...Z, color: I },
                        children: Ae(e.desc || ``, P),
                      }),
                    ],
                  },
                  n,
                ),
              ),
            });
          if (e.cardStyle === `steps`)
            return /*#__PURE__*/ f(Te, {
              items: t,
              isMobile: K,
              numberFont: Y,
              titleFont: X,
              bodyFont: Z,
              text: P,
              muted: L,
              body: I,
              accent: H.progress,
              border: H.border,
            });
          let r = Number(e.columns) || 2;
          return /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(${K ? 1 : r}, minmax(0, 1fr))`,
              gap: 16,
            },
            children: t.map((e, t) =>
              /*#__PURE__*/ d(
                `div`,
                {
                  style: {
                    background: H.surface,
                    borderRadius: j.radius,
                    padding: W ? 20 : 24,
                    display: `flex`,
                    flexDirection: `column`,
                    gap: 12,
                  },
                  children: [
                    /*#__PURE__*/ d(`div`, {
                      style: {
                        display: `flex`,
                        alignItems: `center`,
                        justifyContent: `space-between`,
                      },
                      children: [
                        /*#__PURE__*/ f(`div`, {
                          style: {
                            width: 40,
                            height: 40,
                            borderRadius: 10,
                            background: H.background,
                            color: R,
                            display: `flex`,
                            alignItems: `center`,
                            justifyContent: `center`,
                          },
                          children: /*#__PURE__*/ f(Se, { name: e.icon }),
                        }),
                        /*#__PURE__*/ f(`span`, {
                          style: {
                            ...Q,
                            color: L,
                            fontVariantNumeric: `tabular-nums`,
                          },
                          children: String(t + 1).padStart(2, `0`),
                        }),
                      ],
                    }),
                    /*#__PURE__*/ f(`div`, {
                      style: { ...X, fontWeight: 600, color: F },
                      children: e.title,
                    }),
                    e.desc
                      ? /*#__PURE__*/ f(`div`, {
                          style: { ...Z, color: I },
                          children: e.desc,
                        })
                      : null,
                  ],
                },
                t,
              ),
            ),
          });
        }
        case `divider`:
          return /*#__PURE__*/ f(Ot, {});
        case `spacer`:
          return /*#__PURE__*/ f(`div`, { style: { height: e.size ?? 40 } });
        default:
          return null;
      }
    },
    At = (e, t) =>
      e.type === `spacer`
        ? 0
        : e.type === `section`
          ? t === 0
            ? 0
            : j.sectionGap / (re ? 2 : 1)
          : e.type === `subheading`
            ? j.blockGap + 8
            : j.blockGap,
    jt = /*#__PURE__*/ d(`div`, {
      style: { marginBottom: 20 },
      children: [
        /*#__PURE__*/ f(`div`, {
          style: {
            height: j.progressThickness,
            background: H.progressTrack,
            borderRadius: 99,
            overflow: `hidden`,
          },
          children: /*#__PURE__*/ f(`div`, {
            style: {
              height: `100%`,
              width: `${xt}%`,
              background: H.progress,
              borderRadius: 99,
              transition: `none`,
            },
          }),
        }),
        St
          ? /*#__PURE__*/ f(`div`, {
              style: {
                ...Q,
                color: L,
                marginTop: 8,
                fontVariantNumeric: `tabular-nums`,
              },
              children: St,
            })
          : null,
      ],
    }),
    Mt = /*#__PURE__*/ d(`nav`, {
      ref: Ke,
      style: {
        position: `sticky`,
        top: _,
        width: `100%`,
        zIndex: 50,
        display: `flex`,
        flexDirection: `column`,
        gap: 10,
      },
      children: [
        Tt
          ? /*#__PURE__*/ f(`div`, {
              style: { marginBottom: 16 },
              children: Tt,
            })
          : null,
        v ? jt : null,
        at.map(({ id: e, label: t }) => {
          let n = Ze === e;
          return /*#__PURE__*/ d(
            `a`,
            {
              href: `#${e}`,
              onClick: (t) => Et(t, e),
              style: {
                ...mt,
                textDecoration: `none`,
                color: n ? H.text : H.muted,
                display: `flex`,
                alignItems: `center`,
                gap: 8,
                transition: `color .2s`,
              },
              children: [
                /*#__PURE__*/ f(`span`, {
                  style: {
                    width: n ? 16 : 8,
                    height: 1,
                    background: n ? H.progress : H.border,
                    transition: `all .2s`,
                  },
                }),
                t,
              ],
            },
            e,
          );
        }),
      ],
    }),
    Nt =
      k && k.length
        ? /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: W
                ? `repeat(2, minmax(0, 1fr))`
                : `repeat(${k.length}, minmax(0, auto))`,
              justifyContent: W ? `stretch` : `space-between`,
              columnGap: W ? 20 : G ? 24 : 40,
              rowGap: 24,
              alignItems: `start`,
              paddingTop: j.blockGap,
              marginTop: j.blockGap,
              borderTop: `1px solid ${H.border}`,
            },
            children: k.map((e, t) =>
              /*#__PURE__*/ d(
                `div`,
                {
                  children: [
                    /*#__PURE__*/ f(`h4`, {
                      style: {
                        ...mt,
                        color: L,
                        margin: 0,
                        marginBottom: 10,
                        textTransform: te ? `uppercase` : `none`,
                      },
                      children: e.label,
                    }),
                    /*#__PURE__*/ f(`div`, {
                      style: {
                        display: `flex`,
                        flexDirection: `column`,
                        gap: 4,
                      },
                      children: (e.value || ``)
                        .split(/\n|,/)
                        .map((e) => e.trim())
                        .filter(Boolean)
                        .map((e, t) =>
                          /*#__PURE__*/ f(
                            `div`,
                            { style: { ..._t, color: Ve }, children: e },
                            t,
                          ),
                        ),
                    }),
                  ],
                },
                t,
              ),
            ),
          })
        : null,
    Pt = /*#__PURE__*/ d(`header`, {
      id: `top`,
      style: { scrollMarginTop: _ },
      children: [
        !dt && Tt
          ? /*#__PURE__*/ f(`div`, {
              style: { marginBottom: 24 },
              children: Tt,
            })
          : null,
        /*#__PURE__*/ d(`div`, {
          style: { display: `flex`, gap: 6, ...mt, color: L, marginBottom: 12 },
          children: [
            x ? /*#__PURE__*/ f(`span`, { children: x }) : null,
            x && S ? /*#__PURE__*/ f(`span`, { children: `•` }) : null,
            S ? /*#__PURE__*/ f(`span`, { children: S }) : null,
          ],
        }),
        /*#__PURE__*/ f(`h1`, {
          style: { ...ft, color: N, margin: 0 },
          children: C,
        }),
        w
          ? /*#__PURE__*/ f(`div`, {
              style: { marginTop: 20 },
              children: /*#__PURE__*/ f(Dt, { text: w }),
            })
          : null,
        O === `above` ? Nt : null,
        /*#__PURE__*/ f($, {
          image: M(T, ee),
          video: E,
          url: D,
          caption: ``,
          marginTop: j.blockGap,
        }),
        O === `above` ? null : Nt,
      ],
    }),
    Ft = /*#__PURE__*/ d(`main`, {
      style: { width: `100%`, maxWidth: j.contentWidth, minWidth: 0 },
      children: [
        Pt,
        rt.map(({ b: e, i: t }, n) =>
          /*#__PURE__*/ d(
            a,
            {
              children: [
                (e.type === `section` || n === 0) && re
                  ? /*#__PURE__*/ f(`div`, {
                      style: { marginTop: j.sectionGap / 2 },
                      children: /*#__PURE__*/ f(Ot, {}),
                    })
                  : null,
                /*#__PURE__*/ f(`div`, {
                  style: {
                    marginTop:
                      n === 0
                        ? re
                          ? j.sectionGap / 2
                          : j.sectionGap
                        : At(e, n),
                  },
                  children: kt(e, t),
                }),
              ],
            },
            t,
          ),
        ),
      ],
    }),
    It = /*#__PURE__*/ f(`div`, {
      children:
        ie && he && he.length
          ? /*#__PURE__*/ d(l, {
              children: [
                /*#__PURE__*/ f(`div`, {
                  style: {
                    margin: `${se ?? 64}px 0 ${Math.round((se ?? 64) * 0.6)}px`,
                  },
                  children: /*#__PURE__*/ f(Ot, {}),
                }),
                /*#__PURE__*/ f(`h2`, {
                  style: { ...vt, color: ce, margin: 0, marginBottom: 16 },
                  children: ae,
                }),
                /*#__PURE__*/ f(`div`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: `repeat(${W ? 1 : Math.min(he.length, G ? 2 : Number(oe) || 3)}, minmax(0, 1fr))`,
                    gap: W ? 20 : 16,
                  },
                  children: he.map((e, t) =>
                    /*#__PURE__*/ f(
                      Ee,
                      {
                        p: e,
                        c: H,
                        radius: j.radius,
                        aspect: j.cardAspect,
                        titleFont: yt,
                        labelFont: mt,
                        color: B,
                        hoverColor: V,
                        subColor: L,
                      },
                      t,
                    ),
                  ),
                }),
              ],
            })
          : null,
    });
  return /*#__PURE__*/ d(`div`, {
    ref: We,
    style: {
      ...He,
      width: `100%`,
      background: H.background,
      position: `relative`,
    },
    children: [
      null,
      /*#__PURE__*/ d(`div`, {
        style: { padding: `${st}px ${lt}px ${ct}px`, boxSizing: `border-box` },
        children: [
          /*#__PURE__*/ d(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: dt
                ? `${j.navWidth}px minmax(0, 1fr)`
                : `minmax(0, 1fr)`,
              columnGap: j.navGap,
              width: `100%`,
              maxWidth: dt
                ? j.navWidth + j.navGap + j.contentWidth
                : j.contentWidth,
              margin: `0 auto`,
            },
            children: [
              dt
                ? /*#__PURE__*/ f(`div`, {
                    ref: Ge,
                    style: { position: `relative`, minWidth: 0 },
                    children: Mt,
                  })
                : null,
              /*#__PURE__*/ f(`div`, {
                style: {
                  display: `flex`,
                  justifyContent:
                    j.align === `center` ? `center` : `flex-start`,
                },
                children: Ft,
              }),
            ],
          }),
          /*#__PURE__*/ f(`div`, {
            style: {
              width: `100%`,
              maxWidth: dt
                ? j.navWidth + j.navGap + j.contentWidth
                : j.contentWidth,
              margin: `0 auto`,
            },
            children: It,
          }),
        ],
      }),
    ],
  });
}
function xe({
  label: e,
  href: t,
  variant: n,
  font: r,
  color: i,
  border: a,
  surface: o,
  dark: c,
}) {
  let [l, u] = s(!1),
    p = n !== `bold`,
    m = String(e).replace(/^\s*(←|<-|‹)\s*/, ``);
  return /*#__PURE__*/ d(`a`, {
    href: t,
    target: `_top`,
    onMouseEnter: () => u(!0),
    onMouseLeave: () => u(!1),
    style: {
      ...r,
      fontWeight: 600,
      color: i,
      textDecoration: `none`,
      display: `inline-flex`,
      alignItems: `center`,
      gap: 8,
      cursor: `pointer`,
      position: `relative`,
      zIndex: 1e3,
      pointerEvents: `auto`,
      whiteSpace: `nowrap`,
      transition: `background .2s, box-shadow .2s, transform .2s`,
      ...(p
        ? {
            padding: `8px 14px 8px 10px`,
            borderRadius: 999,
            background: c
              ? l
                ? `rgba(44,44,46,0.9)`
                : `rgba(28,28,30,0.6)`
              : l
                ? `rgba(255,255,255,0.85)`
                : `rgba(255,255,255,0.6)`,
            backdropFilter: `blur(12px) saturate(160%)`,
            WebkitBackdropFilter: `blur(12px) saturate(160%)`,
            border: `1px solid ${a}`,
            boxShadow: c
              ? `0 2px 10px rgba(0,0,0,0.4)`
              : l
                ? `0 4px 16px rgba(0,0,0,0.10)`
                : `0 2px 8px rgba(0,0,0,0.06)`,
          }
        : { padding: `4px 0` }),
    },
    children: [
      /*#__PURE__*/ f(`span`, {
        style: {
          display: `inline-flex`,
          alignItems: `center`,
          justifyContent: `center`,
          width: p ? 22 : `auto`,
          height: p ? 22 : `auto`,
          borderRadius: 999,
          background: p ? o : `transparent`,
          transform: l ? `translateX(-2px)` : `none`,
          transition: `transform .2s`,
          fontSize: `1.05em`,
          lineHeight: 1,
        },
        children: `←`,
      }),
      m,
    ],
  });
}
function Se({ name: e }) {
  let t = Pe[(e || ``).toLowerCase()] || Pe.check;
  return /*#__PURE__*/ f(`svg`, {
    width: `20`,
    height: `20`,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: `1.8`,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
    children: t,
  });
}
function Ce({
  items: e,
  isMobile: t,
  isStatic: n,
  pageBg: r = `#fff`,
  titleFont: i,
  bodyFont: a,
  text: l,
  body: u,
  accent: p,
  border: m,
}) {
  let h = c(null),
    [_, v] = s(!1),
    [y, b] = s(-1),
    x =
      o !== void 0 &&
      o.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,
    S = !n && !x;
  g(() => {
    if (!S) {
      v(!0);
      return;
    }
    let e = h.current;
    if (!e || typeof IntersectionObserver > `u`) {
      v(!0);
      return;
    }
    let t = new IntersectionObserver(
      ([e]) => {
        e.isIntersecting && (v(!0), t.disconnect());
      },
      { threshold: 0.35 },
    );
    return t.observe(e), () => t.disconnect();
  }, [S]);
  let C = e.length,
    w = (e) => (C > 1 ? e / (C - 1) : 0),
    T = (e) => (S ? 0.25 + e * 0.28 : 0),
    ee = (e) =>
      y === e
        ? { opacity: 1, blur: 0 }
        : { opacity: 1 - w(e) * 0.62, blur: w(e) * (t ? 0.8 : 1.2) },
    E = (e) => {
      let t = ee(e);
      return {
        opacity: _ ? t.opacity : 0,
        filter: _ && t.blur ? `blur(${t.blur}px)` : `none`,
        transform: _ ? `none` : `translateY(8px)`,
        transition: S
          ? `opacity .7s ease ${y === -1 ? T(e) : 0}s, filter .9s ease ${y === -1 ? T(e) + 0.35 : 0}s, transform .7s ease ${T(e)}s`
          : `none`,
        cursor: `default`,
      };
    },
    D = (e) => ({
      width: 34,
      height: 34,
      borderRadius: 999,
      flex: `none`,
      display: `grid`,
      placeItems: `center`,
      background: r,
      border: `2px solid ${p}`,
      color: p,
      fontFamily: a?.fontFamily,
      fontSize: 13,
      fontWeight: 600,
      fontVariantNumeric: `tabular-nums`,
      position: `relative`,
      zIndex: 1,
      opacity: _ ? 1 - w(e) * 0.7 : 0,
      transform: _ ? `scale(1)` : `scale(.6)`,
      transition: S
        ? `opacity .5s ease ${T(e)}s, transform .5s ease ${T(e)}s`
        : `none`,
    }),
    O = (e) => ({
      background: `linear-gradient(${e ? `180deg` : `90deg`}, ${p}, ${m})`,
      transformOrigin: e ? `top` : `left`,
      transform: _ ? `none` : e ? `scaleY(0)` : `scaleX(0)`,
      transition: S
        ? `transform ${0.3 + C * 0.28}s cubic-bezier(.4,0,.2,1) .15s`
        : `none`,
    }),
    k = (e) => ({
      onMouseEnter: () => b(e),
      onMouseLeave: () => b(-1),
      onClick: () => b((t) => (t === e ? -1 : e)),
    });
  return t
    ? /*#__PURE__*/ d(`div`, {
        ref: h,
        style: { position: `relative` },
        children: [
          /*#__PURE__*/ f(`div`, {
            style: {
              position: `absolute`,
              left: 16,
              top: 17,
              bottom: 17,
              width: 2,
              ...O(!0),
            },
          }),
          e.map((e, t) =>
            /*#__PURE__*/ d(
              `div`,
              {
                ...k(t),
                style: {
                  display: `flex`,
                  gap: 16,
                  paddingBottom: t < C - 1 ? 24 : 0,
                },
                children: [
                  /*#__PURE__*/ f(`div`, { style: D(t), children: t + 1 }),
                  /*#__PURE__*/ d(`div`, {
                    style: { paddingTop: 6, ...E(t) },
                    children: [
                      /*#__PURE__*/ f(`div`, {
                        style: { ...i, color: l, marginBottom: 4 },
                        children: e.title,
                      }),
                      /*#__PURE__*/ f(`div`, {
                        style: { ...a, color: u },
                        children: e.desc,
                      }),
                    ],
                  }),
                ],
              },
              t,
            ),
          ),
        ],
      })
    : /*#__PURE__*/ d(`div`, {
        ref: h,
        style: { position: `relative` },
        children: [
          /*#__PURE__*/ f(`div`, {
            style: {
              position: `absolute`,
              left: `${50 / C}%`,
              right: `${50 / C}%`,
              top: 16,
              height: 2,
              ...O(!1),
            },
          }),
          /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(${C}, minmax(0, 1fr))`,
              gap: 16,
            },
            children: e.map((e, t) =>
              /*#__PURE__*/ d(
                `div`,
                {
                  ...k(t),
                  style: {
                    display: `flex`,
                    flexDirection: `column`,
                    alignItems: `center`,
                    textAlign: `center`,
                  },
                  children: [
                    /*#__PURE__*/ f(`div`, { style: D(t), children: t + 1 }),
                    /*#__PURE__*/ d(`div`, {
                      style: { marginTop: 14, ...E(t) },
                      children: [
                        /*#__PURE__*/ f(`div`, {
                          style: { ...i, color: l, marginBottom: 6 },
                          children: e.title,
                        }),
                        /*#__PURE__*/ f(`div`, {
                          style: { ...a, color: u },
                          children: e.desc,
                        }),
                      ],
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
        ],
      });
}
function we({
  slides: e,
  interval: t,
  isMobile: n,
  isStatic: r,
  aspect: i,
  fit: a,
  pad: c,
  radius: l,
  surface: u,
  titleFont: p,
  bodyFont: m,
  text: h,
  muted: g,
  body: _,
  accent: v,
  border: y,
}) {
  let [b, x] = s(0),
    [S, C] = s(!1),
    [w, T] = s(0),
    ee =
      o !== void 0 &&
      o.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches,
    E = !r && !ee && e.length > 1,
    D = e.length;
  if (!D) return null;
  let O = (e) => {
      x(((e % D) + D) % D), T((e) => e + 1);
    },
    k = c ? Math.max(l - c / 3, 4) : l,
    te = i && i !== `auto` ? i : void 0,
    ne = (e) =>
      /*#__PURE__*/ f(`div`, {
        style: {
          height: 2,
          background: y,
          borderRadius: 2,
          overflow: `hidden`,
          marginBottom: 14,
        },
        children:
          e === b
            ? /*#__PURE__*/ f(
                `div`,
                {
                  onAnimationEnd: () => E && O(b + 1),
                  style: {
                    height: `100%`,
                    background: v,
                    transformOrigin: `left`,
                    animation: E ? `tcar-fill ${t}s linear forwards` : `none`,
                    animationPlayState: S ? `paused` : `running`,
                  },
                },
                `${e}-${w}`,
              )
            : null,
      });
  return /*#__PURE__*/ d(`div`, {
    onMouseEnter: () => C(!0),
    onMouseLeave: () => C(!1),
    children: [
      /*#__PURE__*/ f(`style`, {
        children: `@keyframes tcar-fill{from{transform:scaleX(0)}to{transform:scaleX(1)}}`,
      }),
      /*#__PURE__*/ f(`div`, {
        style: {
          padding: n ? c / 2 : c,
          background: c ? u : `transparent`,
          borderRadius: l,
        },
        children: /*#__PURE__*/ f(`div`, {
          style: {
            display: `grid`,
            aspectRatio: te,
            borderRadius: k,
            overflow: `hidden`,
          },
          children: e.map((e, t) =>
            /*#__PURE__*/ f(
              `div`,
              {
                "aria-hidden": t !== b,
                style: {
                  gridArea: `1 / 1`,
                  opacity: +(t === b),
                  transition: `opacity .4s ease`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  minHeight: 0,
                },
                children: e.img?.src
                  ? /*#__PURE__*/ f(`img`, {
                      src: e.img.src,
                      srcSet: e.img.srcSet,
                      alt: e.img.alt || e.title,
                      style: {
                        display: `block`,
                        width: `100%`,
                        height: te ? `100%` : `auto`,
                        objectFit: a === `contain` ? `contain` : `cover`,
                        borderRadius: k,
                      },
                    })
                  : /*#__PURE__*/ f(`div`, {
                      style: {
                        width: `100%`,
                        aspectRatio: te || `16 / 10`,
                        background: y,
                        borderRadius: k,
                      },
                    }),
              },
              t,
            ),
          ),
        }),
      }),
      n
        ? /*#__PURE__*/ d(`div`, {
            style: { marginTop: 20 },
            children: [
              /*#__PURE__*/ f(`div`, {
                style: { display: `flex`, gap: 8 },
                children: e.map((e, t) =>
                  /*#__PURE__*/ f(
                    `button`,
                    {
                      type: `button`,
                      "aria-label": `Show slide ${t + 1}`,
                      onClick: () => O(t),
                      style: {
                        flex: 1,
                        padding: `8px 0 0`,
                        border: 0,
                        background: `none`,
                        cursor: `pointer`,
                      },
                      children: ne(t),
                    },
                    t,
                  ),
                ),
              }),
              /*#__PURE__*/ f(`div`, {
                style: { ...p, color: h, marginBottom: 6 },
                children: e[b].title,
              }),
              /*#__PURE__*/ f(`div`, {
                style: { ...m, color: _, margin: 0 },
                children: e[b].body,
              }),
            ],
          })
        : /*#__PURE__*/ f(`div`, {
            style: {
              display: `grid`,
              gridTemplateColumns: `repeat(${D}, minmax(0, 1fr))`,
              gap: 28,
              marginTop: 24,
              alignItems: `start`,
            },
            children: e.map((e, t) =>
              /*#__PURE__*/ d(
                `button`,
                {
                  type: `button`,
                  onClick: () => O(t),
                  "aria-current": t === b ? `true` : void 0,
                  style: {
                    textAlign: `left`,
                    padding: 0,
                    border: 0,
                    background: `none`,
                    cursor: `pointer`,
                    opacity: t === b ? 1 : 0.45,
                    transition: `opacity .3s ease`,
                    font: `inherit`,
                  },
                  children: [
                    ne(t),
                    /*#__PURE__*/ f(`div`, {
                      style: { ...p, color: t === b ? h : g, marginBottom: 6 },
                      children: e.title,
                    }),
                    /*#__PURE__*/ f(`div`, {
                      style: { ...m, color: _ },
                      children: e.body,
                    }),
                  ],
                },
                t,
              ),
            ),
          }),
    ],
  });
}
function Te({
  items: e,
  isMobile: t,
  numberFont: n,
  titleFont: r,
  bodyFont: i,
  text: a,
  muted: o,
  body: c,
  accent: l,
  border: u,
}) {
  let [p, m] = s(0),
    h = (e) => String(e + 1).padStart(2, `0`),
    g = {
      ...n,
      fontSize: t ? 32 : 40,
      fontWeight: 600,
      lineHeight: `1em`,
      letterSpacing: `-0.02em`,
    };
  return t
    ? /*#__PURE__*/ f(`div`, {
        style: { display: `flex`, flexDirection: `column`, gap: 28 },
        children: e.map((e, t) =>
          /*#__PURE__*/ d(
            `div`,
            {
              style: { borderLeft: `2px solid ${l}`, paddingLeft: 16 },
              children: [
                /*#__PURE__*/ f(`div`, {
                  style: { ...g, color: o, opacity: 0.4 },
                  children: h(t),
                }),
                /*#__PURE__*/ f(`div`, {
                  style: { ...r, color: a, marginTop: 10 },
                  children: e.title,
                }),
                e.desc
                  ? /*#__PURE__*/ f(`div`, {
                      style: { ...i, color: c, marginTop: 8 },
                      children: e.desc,
                    })
                  : null,
              ],
            },
            t,
          ),
        ),
      })
    : /*#__PURE__*/ f(`div`, {
        style: { display: `flex`, minHeight: 170 },
        children: e.map((e, t) => {
          let n = t === p;
          return /*#__PURE__*/ d(
            `div`,
            {
              onMouseEnter: () => m(t),
              onClick: () => m(t),
              style: {
                flex: n ? 2.4 : 1,
                minWidth: 0,
                position: `relative`,
                borderLeft: `1px solid ${u}`,
                padding: `4px 24px 8px`,
                cursor: `pointer`,
                transition: `flex .5s cubic-bezier(.2,.8,.2,1)`,
              },
              children: [
                /*#__PURE__*/ f(`span`, {
                  style: {
                    position: `absolute`,
                    left: -1,
                    top: 0,
                    width: 2,
                    height: `100%`,
                    background: l,
                    transform: n ? `scaleY(1)` : `scaleY(0)`,
                    transformOrigin: `top`,
                    transition: `transform .5s cubic-bezier(.2,.8,.2,1)`,
                  },
                }),
                /*#__PURE__*/ f(`div`, {
                  style: {
                    ...g,
                    color: n ? a : o,
                    opacity: n ? 0.3 : 0.25,
                    transition: `opacity .3s`,
                  },
                  children: h(t),
                }),
                /*#__PURE__*/ f(`div`, {
                  style: {
                    ...r,
                    color: n ? a : o,
                    marginTop: 14,
                    transition: `color .3s`,
                  },
                  children: e.title,
                }),
                /*#__PURE__*/ f(`div`, {
                  style: {
                    ...i,
                    color: c,
                    marginTop: n ? 16 : 0,
                    maxHeight: n ? 400 : 0,
                    opacity: +!!n,
                    overflow: `hidden`,
                    transition: n
                      ? `opacity .4s .2s, max-height .5s, margin .3s`
                      : `opacity .15s, max-height .3s, margin .3s`,
                  },
                  children: e.desc,
                }),
              ],
            },
            t,
          );
        }),
      });
}
function Ee({
  p: e,
  c: t,
  radius: n,
  aspect: r,
  titleFont: i,
  labelFont: a,
  color: o,
  hoverColor: c,
  subColor: l,
}) {
  let [u, p] = s(!1),
    m = M(e.image, e.imageUrl),
    h = m && m.src;
  return /*#__PURE__*/ d(`a`, {
    href: e.url || e.link || `#`,
    onMouseEnter: () => p(!0),
    onMouseLeave: () => p(!1),
    style: { textDecoration: `none`, color: `inherit`, display: `block` },
    children: [
      /*#__PURE__*/ f(`div`, {
        style: {
          aspectRatio: r || `1.15 / 1`,
          borderRadius: n,
          overflow: `hidden`,
          background: t.surface,
        },
        children: h
          ? /*#__PURE__*/ f(`img`, {
              src: m.src,
              srcSet: m.srcSet,
              alt: m.alt || ``,
              style: {
                width: `100%`,
                height: `100%`,
                objectFit: `cover`,
                display: `block`,
                transform: u ? `scale(1.03)` : `scale(1)`,
                transition: `transform .5s cubic-bezier(.2,.8,.2,1)`,
              },
            })
          : null,
      }),
      /*#__PURE__*/ d(`div`, {
        style: {
          ...i,
          color: u ? c : o,
          marginTop: 10,
          display: `flex`,
          alignItems: `center`,
          gap: u ? 8 : 0,
          transition: `color .25s, gap .25s`,
        },
        children: [
          /*#__PURE__*/ f(`span`, {
            style: {
              width: u ? 8 : 0,
              height: 3,
              borderRadius: 2,
              background: c,
              transition: `width .25s`,
              flexShrink: 0,
            },
          }),
          e.title,
        ],
      }),
      e.subtitle
        ? /*#__PURE__*/ f(`div`, {
            style: { ...a, color: l, marginTop: 4 },
            children: e.subtitle,
          })
        : null,
    ],
  });
}
var De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  M,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  N,
  P,
  F,
  I,
  L,
  R,
  ze,
  z,
  B,
  V;
function Be() {
  return (Be = e(() => {
    i(),
      m(),
      h(),
      x(),
      (De = {
        filmreel: `data:image/webp;base64,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`,
      }),
      (Oe = (e, t) =>
        `${(e || `section`).toLowerCase().replace(/[^a-z0-9]+/g, `-`)}-${t}`),
      (ke = (e) =>
        (e || ``)
          .split(/\n\s*\n/)
          .map((e) => e.trim())
          .filter(Boolean)),
      (Ae = (e, t) =>
        e
          .split(/(\*\*[^*]+\*\*)/g)
          .map((e, n) =>
            /^\*\*[^*]+\*\*$/.test(e)
              ? /*#__PURE__*/ f(
                  `strong`,
                  {
                    style: { fontWeight: 600, color: t },
                    children: e.slice(2, -2),
                  },
                  n,
                )
              : e,
          )),
      (je = (e) =>
        (e || ``)
          .split(
            `
`,
          )
          .map((e) => e.trim())
          .filter(Boolean)),
      (Me = (e) => (e && e.startsWith(`claws:`) ? De[e.slice(6)] || `` : e)),
      (M = (e, t) =>
        e && e.src ? e : Me(t) ? { src: Me(t), alt: `` } : void 0),
      (Ne = {
        background: `#151515`,
        text: `#F5F5F7`,
        muted: `#A1A1AA`,
        accent: `#F5F5F7`,
        progress: `#E0662E`,
        progressTrack: `#3A2A22`,
        surface: `#1F1F1F`,
        border: `#2C2C2E`,
        heading: `#F5F5F7`,
        body: `#B4B4BA`,
        label: `#A1A1AA`,
        eyebrow: `#F08A55`,
        card: `#8E8E93`,
        cardHover: `#F5F5F7`,
      }),
      (Pe = {
        clock: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`circle`, { cx: `12`, cy: `12`, r: `9` }),
            /*#__PURE__*/ f(`path`, { d: `M12 7v5l3 2` }),
          ],
        }),
        layers: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, { d: `M12 3 3 8l9 5 9-5-9-5Z` }),
            /*#__PURE__*/ f(`path`, { d: `m3 13 9 5 9-5` }),
          ],
        }),
        code: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, { d: `m8 8-4 4 4 4` }),
            /*#__PURE__*/ f(`path`, { d: `m16 8 4 4-4 4` }),
            /*#__PURE__*/ f(`path`, { d: `m14 5-4 14` }),
          ],
        }),
        brain: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, {
              d: `M9 4a3 3 0 0 0-3 3 3 3 0 0 0-2 5 3 3 0 0 0 2 5 3 3 0 0 0 3 3h0a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3Z`,
            }),
            /*#__PURE__*/ f(`path`, {
              d: `M15 4a3 3 0 0 1 3 3 3 3 0 0 1 2 5 3 3 0 0 1-2 5 3 3 0 0 1-3 3h0a3 3 0 0 1-3-3`,
            }),
          ],
        }),
        map: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, {
              d: `M9 4 3 6v14l6-2 6 2 6-2V4l-6 2-6-2Z`,
            }),
            /*#__PURE__*/ f(`path`, { d: `M9 4v14M15 6v14` }),
          ],
        }),
        alert: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, { d: `M12 3 2 20h20L12 3Z` }),
            /*#__PURE__*/ f(`path`, { d: `M12 10v4M12 17h.01` }),
          ],
        }),
        list: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, { d: `M9 6h11M9 12h11M9 18h11` }),
            /*#__PURE__*/ f(`path`, { d: `m3 6 1.5 1.5L7 5M3 12h3M3 18h3` }),
          ],
        }),
        overlay: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`rect`, {
              x: `3`,
              y: `5`,
              width: `18`,
              height: `14`,
              rx: `2`,
            }),
            /*#__PURE__*/ f(`path`, { d: `M3 9h18M8 13h8` }),
          ],
        }),
        check: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`circle`, { cx: `12`, cy: `12`, r: `9` }),
            /*#__PURE__*/ f(`path`, { d: `m8 12 3 3 5-6` }),
          ],
        }),
        gamepad: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, {
              d: `M6 9h12a4 4 0 0 1 4 4v1a3 3 0 0 1-5.4 1.8L15 14H9l-1.6 1.8A3 3 0 0 1 2 14v-1a4 4 0 0 1 4-4Z`,
            }),
            /*#__PURE__*/ f(`path`, {
              d: `M7 11.5v3M5.5 13h3M16 12h.01M18 14h.01`,
            }),
          ],
        }),
        heart: /*#__PURE__*/ f(l, {
          children: /*#__PURE__*/ f(`path`, { d: `M3 12h4l2-4 3 8 2-4h7` }),
        }),
        signal: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`circle`, { cx: `12`, cy: `12`, r: `2` }),
            /*#__PURE__*/ f(`path`, {
              d: `M8.5 8.5a5 5 0 0 0 0 7M15.5 8.5a5 5 0 0 1 0 7M5.6 5.6a9 9 0 0 0 0 12.8M18.4 5.6a9 9 0 0 1 0 12.8`,
            }),
          ],
        }),
        compass: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`circle`, { cx: `12`, cy: `12`, r: `9` }),
            /*#__PURE__*/ f(`path`, { d: `m15.5 8.5-2 5-5 2 2-5 5-2Z` }),
          ],
        }),
        battery: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`rect`, {
              x: `3`,
              y: `7`,
              width: `16`,
              height: `10`,
              rx: `2`,
            }),
            /*#__PURE__*/ f(`path`, { d: `M22 11v2M7 10v4M11 10v4` }),
          ],
        }),
        eye: /*#__PURE__*/ d(l, {
          children: [
            /*#__PURE__*/ f(`path`, {
              d: `M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z`,
            }),
            /*#__PURE__*/ f(`circle`, { cx: `12`, cy: `12`, r: `3` }),
          ],
        }),
      }),
      (Fe = (e, t, n = ``) => ({
        type: `section`,
        navLabel: e,
        eyebrow: e,
        heading: t,
        body: n,
        showInNav: !0,
      })),
      (Ie = (e) => ({ type: `text`, body: e })),
      (Le = (e, t = ``) => ({ type: `subheading`, subheading: e, body: t })),
      (Re = [
        Fe(
          `Problem`,
          `Finance teams have all the data, but not the continuity.`,
          `Spreadsheets record what changed, but not why. The reasoning lives in emails, notes and people's memory. **When analysts leave, context leaves with them.**`,
        ),
        {
          type: `media`,
          imageUrl: `/images/M9H8DK8cZEEw4xm73KRbRb9MUdY-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        Le(
          `What we heard`,
          `We interviewed people whose day-to-day work is financial planning and analysis, along with industry leaders who oversee financial planning and decision-making. Both groups described the same gap: missing context and repeated rework slow large finance teams down.`,
        ),
        {
          type: `media`,
          imageUrl: `/images/bMKG0vQRMrzOy89QgkHUlVhTOEw-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        Fe(
          `Opportunity`,
          `Where does context get lost?`,
          `Context doesn't disappear all at once. It decays between the moment a decision is made and the moment someone needs to understand it.`,
        ),
        {
          type: `list`,
          listStyle: `flow`,
          listItems: `In people's heads | Decisions are talked through but never written down.
Written too late | Recorded days later, from memory, if at all.
Unstructured | Captured as free-form notes with no consistent shape.
Scattered | Spread across Slack, spreadsheet comments and docs.
Not findable | Can't be found when the next decision is made.`,
        },
        Le(
          `Lost context costs momentum`,
          `Teams retrace decisions and revalidate numbers they've already checked, and new analysts inherit figures without the story behind them. Tinu AI acts as a **financial memory layer** that resurfaces the right context inside the workflows teams already use.`,
        ),
        {
          type: `media`,
          imageUrl: `/images/pPAXJ12uWMxubf37ETUkxuUIaww-2048.avif`,
          aspect: `auto`,
          caption: `System flow: how Tinu AI evaluates context quality and decides when information should be stored, retrieved or applied`,
        },
        Fe(
          `Solution`,
          `Context is power`,
          `Tinu AI is a shared memory layer across the company. It preserves the context behind decisions, connects them across time and keeps past reasoning accessible in future work.`,
        ),
        {
          type: `media`,
          imageUrl: `/images/sDPt4ypTdI2AcCqBqunh8Koxi6M-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        {
          type: `media`,
          imageUrl: `/images/eQdu3q2xFbgm94cHMoNUex3Qck-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        {
          type: `media`,
          imageUrl: `/images/S6XhRK08TCwqaMiGSPcWxlvYWw-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        {
          type: `media`,
          imageUrl: `/images/v85qi9PbJifi6exf1ynwrT4EIAY-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        {
          type: `carousel`,
          imageUrl: `/images/lvwl41fKJaoptJ2sKb9h2Pyfr6w-2048.avif`,
          imageUrl2: `/images/CXkxjUWjVfW8g544AY27CCiE-2048.avif`,
          slides: `Context is automatically recalled | Tinu AI recognizes the active financial file and surfaces relevant past decisions, with no manual lookup.
Context is retrieved at the moment of uncertainty | Analysts trace a change back to the documented team decision and regain clarity without leaving Excel.`,
          interval: 1.5,
          aspect: `auto`,
        },
        Ie(
          `Together, these interactions preserve institutional knowledge and make financial context searchable, explainable and actionable when decisions are made.`,
        ),
        Fe(
          `Impact`,
          `Tinu AI retains the decision context`,
          `Tinu AI helps teams capture decision context and act on it without disrupting their existing workflows, through four core capabilities.`,
        ),
        {
          type: `media`,
          imageUrl: `/images/zRJSoONbjWjhgVOIG6eTjB3qN4-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        {
          type: `cards`,
          cardStyle: `rows`,
          columns: 3,
          cards: `Organizations | Knowledge becomes shared infrastructure instead of tribal memory, lowering turnover costs and speeding up analysis.
Teams | Explanations stay with the work, so onboarding is faster and handoffs go smoothly when roles change.
Managers | One place to see decisions across the team, with better weekly updates and less back-and-forth.`,
        },
        Ie(
          `By preserving institutional knowledge over time, Tinu AI aims to reduce turnover costs and re-onboarding friction.`,
        ),
        Fe(`Reflection`, `What I learned`),
        {
          type: `cards`,
          cardStyle: `numbered`,
          columns: 1,
          cards: `Context is a design problem | Context isn't supporting information. It's a core design problem about memory, recall and continuity over time.
Domain knowledge shapes design | My first time designing in fintech showed me how much domain knowledge decides where context gets captured and where insights should surface.
Working in ambiguity | With an open-ended brief, I contributed through alignment, iteration and system-level thinking rather than owning individual screens.`,
        },
        {
          type: `media`,
          imageUrl: `/images/WExxHlTD7PIUhadd3J3adcRqt8-2048.avif`,
          aspect: `auto`,
          caption: ``,
        },
        Ie(
          `Our team placed top 3 of 72 teams in the FinTech category at the +Tech Innovation Jam, hosted by U-M Ross Business + Tech.`,
        ),
      ]),
      (N =
        (...e) =>
        (t) =>
          !e.includes(t.type)),
      (P = [`mp4`, `webm`, `mov`, `m4v`]),
      (F = (e, t, n, r, i, a = `0em`) => ({
        type: A.Font,
        title: e,
        controls: `extended`,
        defaultFontType: `sans-serif`,
        defaultValue: {
          fontFamily: t,
          fontSize: n,
          fontWeight: r,
          lineHeight: i,
          letterSpacing: a,
        },
      })),
      (I = (e, t) => ({ type: A.Color, title: e, defaultValue: t })),
      (L = (e, t = `800`) => ({
        type: A.Enum,
        title: e,
        options: [`font`, `500`, `600`, `700`, `800`, `900`],
        optionTitles: [
          `Use font setting`,
          `Medium`,
          `Semibold`,
          `Bold`,
          `Extra bold`,
          `Black`,
        ],
        defaultValue: t,
      })),
      (R = {
        title: `Title`,
        heading: `Heading`,
        subheading: `Subheading`,
        eyebrow: `Eyebrow`,
        body: `Body`,
        label: `Labels`,
        quote: `Quote`,
        stat: `Stat number`,
        detail: `Detail values`,
        explore: `Explore heading`,
        card: `Card title`,
      }),
      (ze = (e, t) => ({
        type: A.Object,
        title: e,
        controls: Object.fromEntries(
          Object.keys(R).map((e) => [
            e,
            {
              type: A.Number,
              title: R[e],
              defaultValue: t[e],
              min: 0,
              max: 120,
              unit: `px`,
            },
          ]),
        ),
      })),
      (z = `Poppins`),
      (B = `Inter`),
      (V = [
        `media`,
        `mediaPair`,
        `mediaTrio`,
        `mediaText`,
        `cards`,
        `carousel`,
      ]),
      S(be, {
        showNav: {
          type: A.Boolean,
          title: `Side panel`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        showProgress: {
          type: A.Boolean,
          title: `Progress bar`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        progressLabel: {
          type: A.Enum,
          title: `Progress text`,
          options: [`left`, `read`, `none`],
          optionTitles: [`% left`, `% read`, `None`],
          displaySegmentedControl: !0,
          defaultValue: `left`,
          hidden: (e) => !e.showProgress,
        },
        mobileProgress: {
          type: A.Boolean,
          title: `Top bar (tablet/phone)`,
          description: `On tablet and phone: back link, section links and progress pinned to the top.`,
          defaultValue: !0,
          hidden: (e) => !e.showProgress,
        },
        backLabel: {
          type: A.String,
          title: `Back label`,
          defaultValue: `← Projects`,
        },
        backLink: {
          type: A.Link,
          title: `Back link`,
          description: `Pick the page the back button goes to. This wins over Back URL.`,
        },
        backUrl: {
          type: A.String,
          title: `Back URL (fallback)`,
          defaultValue: ``,
          placeholder: `https://ashleysuh.framer.website/#projects`,
          description: `Used only if no page is picked above. Empty = your homepage's Work section.`,
        },
        backStyle: {
          type: A.Enum,
          title: `Back style`,
          options: [`glass`, `bold`],
          optionTitles: [`Glass pill`, `Bold text`],
          displaySegmentedControl: !0,
          defaultValue: `glass`,
        },
        heroNavLabel: {
          type: A.String,
          title: `Hero nav label`,
          defaultValue: ``,
          placeholder: `Empty = not in nav`,
          hidden: (e) => !e.showNav,
        },
        stickyOffset: {
          type: A.Number,
          title: `Sticky top`,
          defaultValue: 120,
          min: 0,
          max: 400,
          unit: `px`,
        },
        projectName: {
          type: A.String,
          title: `Project name`,
          defaultValue: `+Tech Innovation Jam`,
        },
        year: { type: A.String, title: `Year`, defaultValue: `` },
        title: {
          type: A.String,
          title: `Title`,
          defaultValue: `Tinu AI: Preserving context in financial decision-making`,
          displayTextArea: !0,
        },
        intro: {
          type: A.String,
          title: `Intro`,
          displayTextArea: !0,
          defaultValue: `A shared memory layer that preserves the context behind financial decisions, so it doesn't leave when people do. I designed Tinu AI's chatbot for institutional memory.`,
        },
        heroImage: { type: A.ResponsiveImage, title: `Hero image` },
        heroImageUrl: {
          type: A.String,
          title: `Hero image URL`,
          placeholder: `Used if Hero image is empty`,
          defaultValue: `/images/wuX5exH5MByOpEOVfJG9sGfnzQ-2048.avif`,
        },
        heroVideo: { type: A.File, title: `Hero video`, allowedFileTypes: P },
        heroVideoUrl: {
          type: A.String,
          title: `Hero video link`,
          placeholder: `MP4, YouTube or Vimeo URL`,
          defaultValue: ``,
        },
        detailsPosition: {
          type: A.Enum,
          title: `Details`,
          options: [`below`, `above`],
          optionTitles: [`Below media`, `Above media`],
          displaySegmentedControl: !0,
          defaultValue: `above`,
        },
        meta: {
          type: A.Array,
          title: `Detail items`,
          maxCount: 8,
          control: {
            type: A.Object,
            controls: {
              label: { type: A.String, title: `Label`, defaultValue: `Label` },
              value: {
                type: A.String,
                title: `Value`,
                displayTextArea: !0,
                placeholder: `One per line, or separate with commas`,
                defaultValue: `Value`,
              },
            },
          },
          defaultValue: [
            { label: `Role`, value: `Product Designer` },
            { label: `Industry`, value: `B2B Fintech` },
            {
              label: `Team`,
              value: `3 Product Designers, 1 Business Analyst, 1 Technical Architect`,
            },
            { label: `Timeline`, value: `6 weeks` },
            {
              label: `Skills`,
              value: `Product Design, User Research, Market Research`,
            },
          ],
        },
        detailLabelCaps: {
          type: A.Boolean,
          title: `Detail labels`,
          enabledTitle: `CAPS`,
          disabledTitle: `Normal`,
          defaultValue: !0,
        },
        showDividers: {
          type: A.Boolean,
          title: `Section lines`,
          defaultValue: !0,
        },
        contentV2: {
          type: A.Array,
          title: `Blocks`,
          control: {
            type: A.Object,
            controls: {
              visible: {
                type: A.Boolean,
                title: `Show`,
                defaultValue: !0,
                enabledTitle: `Show`,
                disabledTitle: `Hide`,
                description: `Hiding a Section hides everything under it until the next Section.`,
              },
              type: {
                type: A.Enum,
                title: `Block type`,
                options: [
                  `section`,
                  `text`,
                  `subheading`,
                  `media`,
                  `mediaPair`,
                  `mediaTrio`,
                  `mediaText`,
                  `carousel`,
                  `list`,
                  `quote`,
                  `stats`,
                  `cards`,
                  `divider`,
                  `spacer`,
                ],
                optionTitles: [
                  `Section (new chapter)`,
                  `Paragraph`,
                  `Subheading + text`,
                  `Image / video`,
                  `Two images / videos`,
                  `Three images / videos`,
                  `Media + text`,
                  `Auto carousel`,
                  `Numbered list`,
                  `Quote`,
                  `Stats`,
                  `Cards (icon grid)`,
                  `Divider line`,
                  `Spacer`,
                ],
                defaultValue: `text`,
              },
              navLabel: {
                type: A.String,
                title: `Nav label`,
                defaultValue: `Section`,
                hidden: N(`section`),
              },
              showInNav: {
                type: A.Boolean,
                title: `In side nav`,
                defaultValue: !0,
                hidden: N(`section`),
              },
              mergeUp: {
                type: A.Boolean,
                title: `Merge into previous`,
                defaultValue: !1,
                description: `Shows this section as a subheading inside the section above it.`,
                hidden: N(`section`),
              },
              eyebrow: {
                type: A.String,
                title: `Eyebrow`,
                defaultValue: `Section`,
                hidden: N(`section`),
              },
              heading: {
                type: A.String,
                title: `Heading`,
                displayTextArea: !0,
                defaultValue: `Section heading`,
                hidden: N(`section`),
              },
              subheading: {
                type: A.String,
                title: `Subheading`,
                defaultValue: `Subheading`,
                hidden: N(`subheading`, `mediaText`),
              },
              body: {
                type: A.String,
                title: `Text`,
                displayTextArea: !0,
                defaultValue: `Write here. Leave a blank line between paragraphs.`,
                hidden: N(`section`, `text`, `subheading`, `mediaText`),
              },
              image: {
                type: A.ResponsiveImage,
                title: `Image`,
                hidden: N(...V),
              },
              imageUrl: {
                type: A.String,
                title: `Image URL`,
                placeholder: `Used if Image is empty`,
                defaultValue: ``,
                hidden: N(...V),
              },
              video: {
                type: A.File,
                title: `Video file`,
                allowedFileTypes: P,
                hidden: N(...V),
              },
              videoUrl: {
                type: A.String,
                title: `Video link`,
                placeholder: `MP4, YouTube or Vimeo URL`,
                defaultValue: ``,
                hidden: N(...V),
              },
              caption: {
                type: A.String,
                title: `Caption`,
                defaultValue: ``,
                hidden: N(...V),
              },
              image2: {
                type: A.ResponsiveImage,
                title: `Image 2`,
                hidden: N(`mediaPair`, `mediaTrio`, `carousel`),
              },
              imageUrl2: {
                type: A.String,
                title: `Image URL 2`,
                placeholder: `Used if Image 2 is empty`,
                defaultValue: ``,
                hidden: N(`mediaPair`, `mediaTrio`, `carousel`),
              },
              video2: {
                type: A.File,
                title: `Video file 2`,
                allowedFileTypes: P,
                hidden: N(`mediaPair`, `mediaTrio`),
              },
              videoUrl2: {
                type: A.String,
                title: `Video link 2`,
                placeholder: `MP4, YouTube or Vimeo URL`,
                defaultValue: ``,
                hidden: N(`mediaPair`, `mediaTrio`),
              },
              caption2: {
                type: A.String,
                title: `Caption 2`,
                defaultValue: ``,
                hidden: N(`mediaPair`, `mediaTrio`),
              },
              image3: {
                type: A.ResponsiveImage,
                title: `Image 3`,
                hidden: N(`mediaTrio`, `carousel`),
              },
              imageUrl3: {
                type: A.String,
                title: `Image URL 3`,
                placeholder: `Used if Image 3 is empty`,
                defaultValue: ``,
                hidden: N(`mediaTrio`, `carousel`),
              },
              video3: {
                type: A.File,
                title: `Video file 3`,
                allowedFileTypes: P,
                hidden: N(`mediaTrio`),
              },
              videoUrl3: {
                type: A.String,
                title: `Video link 3`,
                placeholder: `MP4, YouTube or Vimeo URL`,
                defaultValue: ``,
                hidden: N(`mediaTrio`),
              },
              caption3: {
                type: A.String,
                title: `Caption 3`,
                defaultValue: ``,
                hidden: N(`mediaTrio`),
              },
              image4: {
                type: A.ResponsiveImage,
                title: `Image 4`,
                hidden: N(`carousel`),
              },
              imageUrl4: {
                type: A.String,
                title: `Image URL 4`,
                placeholder: `Used if Image 4 is empty`,
                defaultValue: ``,
                hidden: N(`carousel`),
              },
              slides: {
                type: A.String,
                title: `Slides`,
                displayTextArea: !0,
                placeholder: `Title | Description (one per line, matches Image 1–4)`,
                defaultValue: ``,
                hidden: N(`carousel`),
              },
              interval: {
                type: A.Number,
                title: `Seconds / slide`,
                min: 1,
                max: 15,
                step: 0.5,
                defaultValue: 1.5,
                hidden: N(`carousel`),
              },
              aspect: {
                type: A.Enum,
                title: `Ratio`,
                options: [
                  `auto`,
                  `16 / 9`,
                  `16 / 10`,
                  `4 / 3`,
                  `1 / 1`,
                  `3 / 4`,
                ],
                optionTitles: [
                  `Original`,
                  `16:9`,
                  `16:10`,
                  `4:3`,
                  `Square`,
                  `Portrait`,
                ],
                defaultValue: `auto`,
                hidden: N(...V),
              },
              fit: {
                type: A.Enum,
                title: `Fit`,
                options: [`cover`, `contain`],
                optionTitles: [`Fill (crop)`, `Fit (whole)`],
                displaySegmentedControl: !0,
                defaultValue: `cover`,
                hidden: (e) =>
                  !V.includes(e.type) || !e.aspect || e.aspect === `auto`,
              },
              zoom: {
                type: A.Number,
                title: `Zoom`,
                defaultValue: 1,
                min: 1,
                max: 3,
                step: 0.05,
                displayStepper: !0,
                hidden: N(...V),
              },
              focus: {
                type: A.Enum,
                title: `Zoom toward`,
                options: [`center`, `top`, `bottom`, `left`, `right`],
                optionTitles: [`Center`, `Top`, `Bottom`, `Left`, `Right`],
                defaultValue: `center`,
                hidden: (e) =>
                  !V.includes(e.type) ||
                  ((!e.zoom || e.zoom <= 1) &&
                    (e.type !== `cards` || e.cardStyle !== `stack`)),
              },
              maxHeight: {
                type: A.Number,
                title: `Max height`,
                defaultValue: 0,
                min: 0,
                max: 1400,
                step: 10,
                unit: `px`,
                description: `0 uses Layout → Media max height.`,
                hidden: N(...V),
              },
              mediaSide: {
                type: A.Enum,
                title: `Media side`,
                options: [`left`, `right`],
                optionTitles: [`Left`, `Right`],
                displaySegmentedControl: !0,
                defaultValue: `left`,
                hidden: N(`mediaText`, `cards`),
              },
              listItems: {
                type: A.String,
                title: `Items`,
                displayTextArea: !0,
                placeholder: `One item per line`,
                defaultValue: `First item
Second item
Third item`,
                hidden: N(`list`),
              },
              listStyle: {
                type: A.Enum,
                title: `List style`,
                options: [`inline`, `stacked`, `flow`],
                optionTitles: [`Inline`, `Stacked`, `Flow`],
                displaySegmentedControl: !0,
                defaultValue: `inline`,
                hidden: N(`list`),
              },
              quote: {
                type: A.String,
                title: `Quote`,
                displayTextArea: !0,
                defaultValue: `Quote text`,
                hidden: N(`quote`),
              },
              quoteName: {
                type: A.String,
                title: `Name`,
                defaultValue: `Name`,
                hidden: N(`quote`),
              },
              quoteRole: {
                type: A.String,
                title: `Role`,
                defaultValue: `Role`,
                hidden: N(`quote`),
              },
              quoteImage: {
                type: A.ResponsiveImage,
                title: `Avatar`,
                hidden: N(`quote`),
              },
              stats: {
                type: A.String,
                title: `Stats`,
                displayTextArea: !0,
                placeholder: `value | label (one per line)`,
                defaultValue: `+25% | Metric one
2× | Metric two
90% | Metric three`,
                hidden: N(`stats`),
              },
              cardStyle: {
                type: A.Enum,
                title: `Card style`,
                options: [
                  `grid`,
                  `compact`,
                  `stack`,
                  `steps`,
                  `stat`,
                  `timeline`,
                  `plain`,
                  `bento`,
                  `rows`,
                  `numbered`,
                ],
                optionTitles: [
                  `Numbered grid`,
                  `Compact grid`,
                  `Stacked + image`,
                  `Expanding columns`,
                  `Big number`,
                  `Timeline`,
                  `Plain columns`,
                  `Bento`,
                  `Rows`,
                  `Numbered rows`,
                ],
                defaultValue: `grid`,
                hidden: N(`cards`),
              },
              cards: {
                type: A.String,
                title: `Cards`,
                displayTextArea: !0,
                placeholder: `Title | description | icon (one card per line)`,
                description: `Icons: clock, layers, code, brain, map, alert, list, overlay, check, eye, gamepad, heart, signal, compass, battery. Add | wide to make a card span the row (Compact grid), or | highlight to outline it (Big number) or color its dot (Timeline). Bento: the first card is the large tile, and its third field is the small label above it.`,
                defaultValue: `Card title | Short description | check
Card title | Short description | eye`,
                hidden: N(`cards`),
              },
              columns: {
                type: A.Enum,
                title: `Columns`,
                options: [2, 3, 4],
                optionTitles: [`2`, `3`, `4`],
                displaySegmentedControl: !0,
                defaultValue: 2,
                hidden: N(`cards`),
              },
              size: {
                type: A.Number,
                title: `Height`,
                defaultValue: 40,
                min: 0,
                max: 400,
                unit: `px`,
                hidden: N(`spacer`),
              },
            },
          },
          defaultValue: Re,
        },
        showExplore: {
          type: A.Boolean,
          title: `Explore more`,
          defaultValue: !0,
        },
        exploreHeading: {
          type: A.String,
          title: `Explore heading`,
          defaultValue: `Explore more`,
          hidden: (e) => !e.showExplore,
        },
        exploreColumns: {
          type: A.Enum,
          title: `Columns`,
          options: [2, 3, 4],
          optionTitles: [`2`, `3`, `4`],
          displaySegmentedControl: !0,
          defaultValue: 3,
          description: `Tablet shows 2, phone shows 1.`,
          hidden: (e) => !e.showExplore,
        },
        exploreSpace: {
          type: A.Number,
          title: `Space above`,
          defaultValue: 64,
          min: 0,
          max: 240,
          unit: `px`,
          hidden: (e) => !e.showExplore,
        },
        projects: {
          type: A.Array,
          title: `Projects`,
          maxCount: 6,
          hidden: (e) => !e.showExplore,
          control: {
            type: A.Object,
            controls: {
              title: {
                type: A.String,
                title: `Title`,
                defaultValue: `Project title`,
              },
              subtitle: { type: A.String, title: `Subtitle`, defaultValue: `` },
              image: { type: A.ResponsiveImage, title: `Image` },
              imageUrl: {
                type: A.String,
                title: `Image URL`,
                placeholder: `Used if Image is empty`,
                defaultValue: ``,
              },
              url: {
                type: A.String,
                title: `URL`,
                defaultValue: ``,
                placeholder: `/tinu-ai/`,
              },
              link: { type: A.Link, title: `Link` },
            },
          },
          defaultValue: [
            {
              title: `NASA SUITS — AR Interfaces`,
              subtitle: `Rover dashboard for lunar missions`,
              imageUrl: `/images/lYWZkhvg5z2sAa59HJViDy8Ci8-2048.avif`,
              url: `/claws/`,
            },
            {
              title: `FilmReel`,
              subtitle: `Curator-led film discovery platform`,
              imageUrl: `claws:filmreel`,
              url: `/`,
            },
          ],
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
            heading: {
              type: A.Color,
              title: `Headings`,
              defaultValue: `#F5F5F7`,
            },
            body: {
              type: A.Color,
              title: `Body text`,
              defaultValue: `#B4B4BA`,
            },
            label: { type: A.Color, title: `Labels`, defaultValue: `#A1A1AA` },
            eyebrow: {
              type: A.Color,
              title: `Eyebrow`,
              defaultValue: `#F08A55`,
            },
            text: {
              type: A.Color,
              title: `Nav active / details`,
              defaultValue: `#F5F5F7`,
            },
            muted: {
              type: A.Color,
              title: `Nav inactive`,
              defaultValue: `#A1A1AA`,
            },
            accent: { type: A.Color, title: `Accent`, defaultValue: `#F5F5F7` },
            progress: {
              type: A.Color,
              title: `Progress`,
              defaultValue: `#E0662E`,
            },
            progressTrack: {
              type: A.Color,
              title: `Progress track`,
              defaultValue: `#3A2A22`,
            },
            surface: {
              type: A.Color,
              title: `Surface`,
              defaultValue: `#1F1F1F`,
            },
            border: { type: A.Color, title: `Border`, defaultValue: `#2C2C2E` },
            card: {
              type: A.Color,
              title: `Card title`,
              defaultValue: `#8E8E93`,
            },
            cardHover: {
              type: A.Color,
              title: `Card hover`,
              defaultValue: `#F5F5F7`,
            },
          },
        },
        colors: {
          type: A.Object,
          title: `Colors`,
          controls: {
            background: {
              type: A.Color,
              title: `Background`,
              defaultValue: `#FFFFFF`,
            },
            text: {
              type: A.Color,
              title: `Nav active / details`,
              defaultValue: `#111111`,
            },
            muted: {
              type: A.Color,
              title: `Nav inactive`,
              defaultValue: `#6B6B6B`,
            },
            accent: { type: A.Color, title: `Accent`, defaultValue: `#111111` },
            progress: {
              type: A.Color,
              title: `Progress`,
              defaultValue: `#E0662E`,
            },
            progressTrack: {
              type: A.Color,
              title: `Progress track`,
              defaultValue: `#F6E9E1`,
            },
            surface: {
              type: A.Color,
              title: `Surface`,
              defaultValue: `#F3F3F3`,
            },
            border: { type: A.Color, title: `Border`, defaultValue: `#EAEAEA` },
          },
        },
        layout: {
          type: A.Object,
          title: `Layout`,
          controls: {
            contentWidth: {
              type: A.Number,
              title: `Content width`,
              defaultValue: 880,
              min: 400,
              max: 1400,
              unit: `px`,
            },
            navWidth: {
              type: A.Number,
              title: `Panel width`,
              defaultValue: 180,
              min: 100,
              max: 400,
              unit: `px`,
            },
            navGap: {
              type: A.Number,
              title: `Panel gap`,
              defaultValue: 80,
              min: 0,
              max: 240,
              unit: `px`,
            },
            align: {
              type: A.Enum,
              title: `Content align`,
              options: [`left`, `center`],
              optionTitles: [`Left`, `Center`],
              displaySegmentedControl: !0,
              defaultValue: `left`,
            },
            sectionGap: {
              type: A.Number,
              title: `Section gap`,
              defaultValue: 120,
              min: 24,
              max: 320,
              unit: `px`,
            },
            blockGap: {
              type: A.Number,
              title: `Block gap`,
              defaultValue: 32,
              min: 8,
              max: 160,
              unit: `px`,
            },
            radius: {
              type: A.Number,
              title: `Radius`,
              defaultValue: 16,
              min: 0,
              max: 48,
              unit: `px`,
            },
            mediaPadding: {
              type: A.Number,
              title: `Media frame`,
              defaultValue: 0,
              min: 0,
              max: 80,
              unit: `px`,
            },
            mediaMaxHeight: {
              type: A.Number,
              title: `Media max height`,
              defaultValue: 480,
              min: 160,
              max: 1200,
              step: 10,
              unit: `px`,
              description: `Caps how tall images and videos get.`,
            },
            progressThickness: {
              type: A.Number,
              title: `Progress size`,
              defaultValue: 4,
              min: 1,
              max: 12,
              unit: `px`,
            },
            cardAspect: {
              type: A.Enum,
              title: `Card ratio`,
              options: [`1.15 / 1`, `4 / 3`, `1 / 1`, `16 / 10`],
              optionTitles: [`Default`, `4:3`, `Square`, `16:10`],
              defaultValue: `16 / 10`,
            },
            tabletBreakpoint: {
              type: A.Number,
              title: `Tablet below`,
              defaultValue: 1200,
              min: 600,
              max: 1600,
              unit: `px`,
            },
            breakpoint: {
              type: A.Number,
              title: `Phone below`,
              defaultValue: 810,
              min: 400,
              max: 1400,
              unit: `px`,
            },
          },
        },
        padding: {
          type: A.Object,
          title: `Padding`,
          controls: {
            desktopTop: {
              type: A.Number,
              title: `Desktop top`,
              defaultValue: 120,
              min: 0,
              max: 400,
              unit: `px`,
            },
            desktopBottom: {
              type: A.Number,
              title: `Desktop bottom`,
              defaultValue: 120,
              min: 0,
              max: 400,
              unit: `px`,
            },
            desktopSides: {
              type: A.Number,
              title: `Desktop sides`,
              defaultValue: 64,
              min: 0,
              max: 240,
              unit: `px`,
            },
            tabletTop: {
              type: A.Number,
              title: `Tablet top`,
              defaultValue: 96,
              min: 0,
              max: 400,
              unit: `px`,
            },
            tabletBottom: {
              type: A.Number,
              title: `Tablet bottom`,
              defaultValue: 96,
              min: 0,
              max: 400,
              unit: `px`,
            },
            tabletSides: {
              type: A.Number,
              title: `Tablet sides`,
              defaultValue: 40,
              min: 0,
              max: 200,
              unit: `px`,
            },
            phoneTop: {
              type: A.Number,
              title: `Phone top`,
              defaultValue: 64,
              min: 0,
              max: 300,
              unit: `px`,
            },
            phoneBottom: {
              type: A.Number,
              title: `Phone bottom`,
              defaultValue: 64,
              min: 0,
              max: 300,
              unit: `px`,
            },
            phoneSides: {
              type: A.Number,
              title: `Phone sides`,
              defaultValue: 20,
              min: 0,
              max: 120,
              unit: `px`,
            },
          },
        },
        tabletSizes: ze(`Tablet font sizes`, {
          title: 34,
          heading: 26,
          subheading: 18,
          eyebrow: 13,
          body: 15,
          label: 13,
          quote: 20,
          stat: 28,
          detail: 14,
          explore: 18,
          card: 15,
        }),
        phoneSizes: ze(`Phone font sizes`, {
          title: 28,
          heading: 22,
          subheading: 17,
          eyebrow: 12,
          body: 15,
          label: 12,
          quote: 18,
          stat: 24,
          detail: 14,
          explore: 18,
          card: 15,
        }),
        titleFont: F(`Title`, z, 40, 500, `1.15em`, `-0.02em`),
        titleWeight: L(`Title weight`, `500`),
        titleColor: I(`Title color`, `#111111`),
        headingFont: F(`Heading`, z, 28, 500, `1.25em`, `-0.02em`),
        headingWeight: L(`Heading weight`, `500`),
        headingColor: I(`Heading color`, `#111111`),
        subheadingFont: F(`Subheading`, z, 18, 600, `1.35em`, `-0.01em`),
        subheadingColor: I(`Subheading color`, `#111111`),
        eyebrowFont: F(`Eyebrow`, B, 13, 500, `1.4em`),
        eyebrowColor: I(`Eyebrow color`, `#C4561F`),
        bodyFont: F(`Body`, B, 15, 400, `1.6em`),
        bodyColor: I(`Body color`, `#6B6B6B`),
        labelFont: F(`Labels & captions`, B, 13, 500, `1.4em`),
        labelColor: I(`Label color`, `#6B6B6B`),
        quoteFont: F(`Quote`, B, 22, 400, `1.4em`, `-0.01em`),
        quoteColor: I(`Quote color`, `#111111`),
        statFont: F(`Stat number`, z, 32, 600, `1.1em`, `-0.02em`),
        statColor: I(`Stat color`, `#111111`),
        exploreHeadingFont: F(
          `Explore heading`,
          z,
          20,
          700,
          `1.3em`,
          `-0.01em`,
        ),
        exploreHeadingColor: I(`Explore heading color`, `#111111`),
        cardFont: F(`Card title`, z, 16, 400, `1.35em`, `-0.01em`),
        cardColor: I(`Card title color`, `#8A8A8A`),
        cardHoverColor: I(`Card hover color`, `#111111`),
        detailValueFont: F(`Detail values`, B, 15, 400, `1.4em`, `-0.01em`),
        detailValueColor: I(`Detail value color`, `#111111`),
      });
  }))();
}

Be();
export { be as CaseStudy };
