/* eslint-disable */
// Ported from the original Framer code component bundle (shared-lib.js lines 1148-2334).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, I as r, P as i, R as a, _ as o, b as s, c as ee, j as c, l, o as u, p as d, s as f, w as p, y as m, } from "../shim/react.js";
import { C as h, a as g, r as _, t as v } from "../shim/motion.js";
import { B as y, C as b, E as x, F as te, N as ne, P as S, S as C, T as w, f as T, ft as re, mt as ie, nt as ae, o as E, pt as oe, st as se, u as ce, xt as le, y as D, } from "../shim/framer.jsx";

function _e(e, t) {
  let n = {};
  for (let r of Te)
    (n[`--l-${r}`] = e?.[r] || Ce[r]), (n[`--d-${r}`] = t?.[r] || we[r]);
  return n;
}
function ve(e) {
  let t = (n) => {
    for (let r of Array.from(n))
      if (r instanceof CSSMediaRule) {
        let n = Ae.get(r) ?? r.media.mediaText;
        /prefers-color-scheme/.test(n) && (Ae.has(r) || Ae.set(r, n), e(r, n)),
          t(r.cssRules);
      }
  };
  for (let e of Array.from(document.styleSheets))
    try {
      t(e.cssRules);
    } catch {}
}
function ye(e) {
  ve((t, n) => {
    let r = n;
    if (e) {
      let t = /prefers-color-scheme:\s*dark/.test(n);
      r = (e === `dark`) === t ? `all` : `not all`;
    }
    t.media.mediaText !== r && (t.media.mediaText = r);
  });
  let t = document.documentElement;
  e ? (t.dataset.theme = e) : delete t.dataset.theme,
    (t.style.colorScheme = e ?? ``);
}
function be() {
  try {
    let e = localStorage.getItem(De);
    return e === `dark` || e === `light` ? e : null;
  } catch {
    return null;
  }
}
function xe(e) {
  if (!e) return ``;
  try {
    return Me(new URL(e, a.location.origin).pathname);
  } catch {
    return ``;
  }
}
function Y(e) {
  let t = Z(e);
  if (!t) return null;
  let n = (e) => Ne(e) && !e.closest(`.snav`),
    r = Array.from(document.querySelectorAll(`[id]`)).find(
      (e) => e.id === t && n(e),
    );
  if (r) return r;
  let i = t.toLowerCase();
  return (
    Array.from(document.querySelectorAll(`[data-framer-name]`)).find(
      (e) => (e.dataset.framerName || ``).trim().toLowerCase() === i && n(e),
    ) ?? null
  );
}
function X({ href: e, newTab: t, children: n }) {
  return e
    ? /*#__PURE__*/ u(T, { href: e, openInNewTab: !!t, children: n })
    : n;
}
function Se(e) {
  let {
      variant: t,
      name: n,
      phoneName: r,
      nameLink: c,
      workLabel: d,
      aboutLabel: f,
      resumeLabel: p,
      workLink: g,
      workSection: _,
      aboutLink: v,
      resumeLink: y,
      backLabel: b,
      backLink: x,
      sections: te,
      sectionOffset: ne,
      activeTab: S,
      size: C,
      showThemeToggle: w,
      shrinkOnScroll: T,
      scrollDistance: re,
      lightColors: ie,
      darkTheme: ae,
      canvasTheme: E,
      fontFamily: oe,
      paddingX: se,
      paddingXPhone: ce,
      paddingY: D,
    } = e,
    O = le.current() === le.canvas,
    k = t === `sections`,
    A = (te || []).filter((e) => e && e.label),
    j = s(null),
    M = s(null),
    N = s(!1),
    P = s(),
    [F, I] = o(`light`),
    [L, R] = o(`none`),
    [z, B] = o(0),
    [V, H] = o(!1),
    [ue, U] = o(!1);
  m(() => {
    if (O || !T) {
      U(!1);
      return;
    }
    let e = !1,
      t = () => {
        (e = !1), U(a.scrollY > re);
      },
      n = () => {
        e || ((e = !0), requestAnimationFrame(t));
      };
    return (
      t(),
      a.addEventListener(`scroll`, n, { passive: !0 }),
      () => a.removeEventListener(`scroll`, n)
    );
  }, [O, T, re]),
    m(() => {
      if (k) return;
      if (S !== `auto`) {
        R(S);
        return;
      }
      let e = j.current;
      if (!e) return;
      let t = () => {
        let t = _ ? Y(_) : null;
        if (t) {
          let e =
            t.getBoundingClientRect().top <=
            Math.max(K() + 1, a.innerHeight * 0.35);
          R(e ? `work` : `none`);
          return;
        }
        let n = Me(a.location.pathname),
          r = e.querySelector(`a.snav-name`);
        if (
          n === (xe(r?.getAttribute(`href`)) || `/`) ||
          r?.hasAttribute(`data-framer-page-link-current`)
        ) {
          R(`none`);
          return;
        }
        let i = Array.from(e.querySelectorAll(`.snav-pill a[data-tab]`)),
          o = i.find((e) => e.hasAttribute(`data-framer-page-link-current`));
        if (o) {
          R(o.dataset.tab);
          return;
        }
        let s = Me(a.location.pathname),
          ee = `work`,
          c = -1;
        for (let e of i) {
          let t = xe(e.getAttribute(`href`));
          t &&
            (t === `/` ? s === `/` : s === t || s.startsWith(t + `/`)) &&
            t.length > c &&
            ((ee = e.dataset.tab), (c = t.length));
        }
        R(ee);
      };
      t();
      let n = new MutationObserver(t);
      n.observe(e, {
        subtree: !0,
        attributes: !0,
        attributeFilter: [`href`, `data-framer-page-link-current`],
      });
      let r = a.location.pathname,
        i = a.setInterval(() => {
          a.location.pathname !== r && ((r = a.location.pathname), t());
        }, 250);
      a.addEventListener(`popstate`, t);
      let o = !1,
        s = () => {
          o ||
            ((o = !0),
            requestAnimationFrame(() => {
              (o = !1), t();
            }));
        };
      return (
        a.addEventListener(`scroll`, s, { passive: !0 }),
        () => {
          n.disconnect(),
            a.clearInterval(i),
            a.removeEventListener(`popstate`, t),
            a.removeEventListener(`scroll`, s);
        }
      );
    }, [k, S, g, _, v, y]),
    m(() => {
      if (O || k) return;
      let e = null;
      try {
        e = sessionStorage.getItem(Oe);
      } catch {}
      if (!e) return;
      let t = 0,
        n = a.setInterval(() => {
          let r = Y(e);
          if (r || ++t > 20) {
            a.clearInterval(n);
            try {
              sessionStorage.removeItem(Oe);
            } catch {}
            r && W(r);
          }
        }, 100);
      return () => a.clearInterval(n);
    }, [O, k]);
  let W = (e) => {
      let t = e.getBoundingClientRect().top + a.scrollY - K();
      a.scrollTo({ top: Math.max(0, t), behavior: Pe() ? `auto` : `smooth` });
    },
    G = (e, t = 0) => {
      let n = e.target.closest(`a[data-tab]`);
      if (!n || n.dataset.tab !== `work` || O || !_) return;
      let r = Y(_);
      if (r)
        e.preventDefault(),
          e.stopPropagation(),
          H(!1),
          a.setTimeout(() => W(r), t);
      else
        try {
          sessionStorage.setItem(Oe, _);
        } catch {}
    },
    de = A.map((e) => Z(e.id)).join(`|`),
    K = () => (j.current?.offsetHeight ?? 0) + ne;
  m(() => {
    if (!k || O || !A.length) return;
    let e = !1,
      t = () => {
        if (((e = !1), N.current)) return;
        let t = K() + 1,
          n = 0;
        A.forEach((e, r) => {
          let i = Y(e.id);
          i && i.getBoundingClientRect().top <= t && (n = r);
        }),
          a.innerHeight + a.scrollY >=
            document.documentElement.scrollHeight - 2 &&
            a.scrollY > 0 &&
            (n = A.length - 1),
          B(n);
      },
      n = () => {
        N.current
          ? (a.clearTimeout(P.current),
            (P.current = a.setTimeout(() => {
              (N.current = !1), t();
            }, 150)))
          : e || ((e = !0), requestAnimationFrame(t));
      };
    return (
      t(),
      a.addEventListener(`scroll`, n, { passive: !0 }),
      a.addEventListener(`resize`, n),
      () => {
        a.removeEventListener(`scroll`, n),
          a.removeEventListener(`resize`, n),
          a.clearTimeout(P.current);
      }
    );
  }, [k, O, de, ne]),
    m(() => {
      if (!k) return;
      let e = M.current,
        t = e?.querySelector(`[data-sec="${z}"]`);
      !e ||
        !t ||
        e.scrollWidth <= e.clientWidth ||
        e.scrollTo({
          left: t.offsetLeft - (e.clientWidth - t.offsetWidth) / 2,
          behavior: `smooth`,
        });
    }, [k, z]);
  let fe = (e) => {
    if ((B(e), O)) return;
    let t = Y(A[e]?.id);
    if (!t) return;
    (N.current = !0),
      a.clearTimeout(P.current),
      (P.current = a.setTimeout(() => {
        N.current = !1;
      }, 500));
    let n = t.getBoundingClientRect().top + a.scrollY - K();
    a.scrollTo({ top: Math.max(0, n), behavior: Pe() ? `auto` : `smooth` });
  };
  m(() => {
    if (O) return;
    if (!w) {
      ye(null), I(je());
      return;
    }
    let e = be();
    ye(e), I(e ?? je());
    let t = !1,
      n = new MutationObserver(() => {
        t ||
          ((t = !0),
          requestAnimationFrame(() => {
            (t = !1), ye(be());
          }));
      });
    n.observe(document.head, { childList: !0, subtree: !0 });
    let r = a.matchMedia(`(prefers-color-scheme: dark)`),
      i = () => {
        be() || I(je());
      };
    r.addEventListener(`change`, i);
    let o = (e) => I(e.detail);
    return (
      a.addEventListener(ke, o),
      () => {
        n.disconnect(),
          r.removeEventListener(`change`, i),
          a.removeEventListener(ke, o);
      }
    );
  }, [O, w]),
    m(() => {
      if (!V || O) return;
      let e = document.body.style.overflow;
      document.body.style.overflow = `hidden`;
      let t = (e) => e.key === `Escape` && H(!1),
        n = a.matchMedia(`(min-width: 810px)`),
        r = () => n.matches && H(!1);
      return (
        a.addEventListener(`keydown`, t),
        n.addEventListener(`change`, r),
        () => {
          (document.body.style.overflow = e),
            a.removeEventListener(`keydown`, t),
            n.removeEventListener(`change`, r);
        }
      );
    }, [V, O]);
  let q = O ? E || `light` : F,
    pe = () => {
      let e = F === `dark` ? `light` : `dark`;
      if ((I(e), !O)) {
        try {
          localStorage.setItem(De, e);
        } catch {}
        ye(e), a.dispatchEvent(new CustomEvent(ke, { detail: e }));
      }
    },
    me = (e) =>
      /*#__PURE__*/ u(`button`, {
        type: `button`,
        className: `snav-toggle ${e}`,
        onClick: pe,
        "aria-label":
          q === `dark` ? `Switch to light mode` : `Switch to dark mode`,
        children: u(q === `dark` ? Ie : Fe, {}),
      }),
    he = /*#__PURE__*/ u(`svg`, {
      className: `snav-arrow`,
      width: `0.7em`,
      height: `0.7em`,
      viewBox: `0 0 12 12`,
      fill: `none`,
      "aria-hidden": `true`,
      children: /*#__PURE__*/ u(`path`, {
        d: `M3 9L9 3M4 3h5v5`,
        stroke: `currentColor`,
        strokeWidth: `1.8`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
    J = /*#__PURE__*/ u(`svg`, {
      width: `0.85em`,
      height: `0.85em`,
      viewBox: `0 0 14 14`,
      fill: `none`,
      "aria-hidden": `true`,
      children: /*#__PURE__*/ u(`path`, {
        d: `M12 7H2M6.5 2.5L2 7l4.5 4.5`,
        stroke: `currentColor`,
        strokeWidth: `1.6`,
        strokeLinecap: `round`,
        strokeLinejoin: `round`,
      }),
    }),
    ge = [
      { id: `work`, label: d, href: g },
      { id: `about`, label: f, href: v },
      { id: `resume`, label: p, href: y },
    ],
    ve = { type: `spring`, stiffness: 500, damping: 38 };
  return /*#__PURE__*/ l(`header`, {
    ref: j,
    className: `snav`,
    "data-mode": q,
    "data-size": C,
    "data-open": V,
    "data-scrolled": ue,
    "data-variant": t,
    style: {
      fontFamily: oe,
      "--px": `${se}px`,
      "--px-phone": `${ce}px`,
      "--py": `${D}px`,
      ..._e(ie, ae),
    },
    children: [
      /*#__PURE__*/ u(`style`, { children: ze }),
      /*#__PURE__*/ u(X, {
        href: c,
        children: /*#__PURE__*/ l(`a`, {
          className: `snav-name`,
          href: c ? void 0 : `/`,
          "aria-current": !k && L === `home` ? `page` : void 0,
          children: [
            /*#__PURE__*/ u(`span`, {
              className: `snav-name-full`,
              children: n,
            }),
            /*#__PURE__*/ u(`span`, {
              className: `snav-name-short`,
              children: r || n,
            }),
          ],
        }),
      }),
      k
        ? /*#__PURE__*/ l(`nav`, {
            className: `snav-pill snav-pill--sections`,
            "aria-label": `Page sections`,
            children: [
              /*#__PURE__*/ u(X, {
                href: x,
                children: /*#__PURE__*/ l(`a`, {
                  className: `snav-back`,
                  href: x ? void 0 : `/`,
                  "aria-label": b,
                  children: [
                    J,
                    /*#__PURE__*/ u(`span`, {
                      className: `snav-back-label`,
                      children: b,
                    }),
                  ],
                }),
              }),
              /*#__PURE__*/ u(`span`, {
                className: `snav-divider`,
                "aria-hidden": `true`,
              }),
              /*#__PURE__*/ u(h.div, {
                className: `snav-track`,
                ref: M,
                layoutScroll: !0,
                children: A.map((e, t) =>
                  /*#__PURE__*/ l(
                    `a`,
                    {
                      className: `snav-item`,
                      href: `#${Z(e.id)}`,
                      "data-sec": t,
                      "aria-current": t === z ? `location` : void 0,
                      onClick: (e) => {
                        e.preventDefault(), fe(t);
                      },
                      children: [
                        t === z &&
                          /*#__PURE__*/ u(h.span, {
                            layoutId: `snav-sec-active`,
                            className: `snav-active`,
                            transition: ve,
                          }),
                        /*#__PURE__*/ u(`span`, {
                          className: `snav-label`,
                          children: e.label,
                        }),
                      ],
                    },
                    `${t}-${e.label}`,
                  ),
                ),
              }),
            ],
          })
        : /*#__PURE__*/ u(`nav`, {
            className: `snav-pill`,
            "aria-label": `Main`,
            onClickCapture: (e) => G(e),
            children: ge.map((e) =>
              /*#__PURE__*/ l(
                i,
                {
                  children: [
                    e.id === `resume` &&
                      /*#__PURE__*/ u(`span`, {
                        className: `snav-divider`,
                        "aria-hidden": `true`,
                      }),
                    /*#__PURE__*/ u(X, {
                      href: e.href,
                      children: /*#__PURE__*/ l(`a`, {
                        className: `snav-item`,
                        "data-tab": e.id,
                        href: e.href || e.id !== `work` ? void 0 : `/`,
                        "aria-current": L === e.id ? `page` : void 0,
                        children: [
                          L === e.id &&
                            /*#__PURE__*/ u(h.span, {
                              layoutId: `snav-active`,
                              className: `snav-active`,
                              transition: ve,
                            }),
                          /*#__PURE__*/ l(`span`, {
                            className: `snav-label`,
                            children: [e.label, e.id === `resume` && he],
                          }),
                        ],
                      }),
                    }),
                  ],
                },
                e.id,
              ),
            ),
          }),
      w
        ? me(`snav-toggle--outside`)
        : /*#__PURE__*/ u(`span`, {
            className: `snav-spacer`,
            "aria-hidden": `true`,
          }),
      /*#__PURE__*/ l(`div`, {
        className: `snav-actions`,
        children: [
          /*#__PURE__*/ l(`button`, {
            type: `button`,
            className: `snav-menu-btn`,
            "aria-label": V ? `Close menu` : `Open menu`,
            "aria-expanded": V,
            "aria-controls": `snav-menu`,
            onClick: () => H((e) => !e),
            children: [
              /*#__PURE__*/ u(`span`, {}),
              /*#__PURE__*/ u(`span`, {}),
            ],
          }),
          w && me(`snav-toggle--phone`),
        ],
      }),
      /*#__PURE__*/ u(`nav`, {
        id: `snav-menu`,
        className: `snav-menu${k ? ` snav-menu--sections` : ``}`,
        "aria-label": k ? `Page sections` : `Main`,
        onClickCapture: (e) => {
          k || G(e, 80), e.target.closest(`a`) && H(!1);
        },
        children: k
          ? /*#__PURE__*/ l(ee, {
              children: [
                /*#__PURE__*/ u(X, {
                  href: x,
                  children: /*#__PURE__*/ l(`a`, {
                    className: `snav-menu-link snav-menu-back`,
                    href: x ? void 0 : `/`,
                    style: { animationDelay: `60ms` },
                    children: [J, b],
                  }),
                }),
                A.map((e, t) =>
                  /*#__PURE__*/ u(
                    `a`,
                    {
                      className: `snav-menu-link`,
                      href: `#${Z(e.id)}`,
                      style: { animationDelay: `${110 + t * 45}ms` },
                      "aria-current": t === z ? `location` : void 0,
                      onClick: (e) => {
                        e.preventDefault(),
                          H(!1),
                          a.setTimeout(() => fe(t), 80);
                      },
                      children: e.label,
                    },
                    `${t}-${e.label}`,
                  ),
                ),
              ],
            })
          : ge.map((e, t) =>
              /*#__PURE__*/ u(
                X,
                {
                  href: e.href,
                  children: /*#__PURE__*/ u(`a`, {
                    className: `snav-menu-link`,
                    "data-tab": e.id,
                    href: e.href || e.id !== `work` ? void 0 : `/`,
                    style: { animationDelay: `${60 + t * 50}ms` },
                    "aria-current": e.id === L ? `page` : void 0,
                    children: e.label,
                  }),
                },
                e.id,
              ),
            ),
      }),
    ],
  });
}
var Ce,
  we,
  Te,
  Ee,
  De,
  Oe,
  ke,
  Ae,
  je,
  Me,
  Z,
  Ne,
  Pe,
  Fe,
  Ie,
  Le,
  Re,
  ze,
  Be,
  Q,
  $;
function Ve() {
  return (Ve = e(() => {
    r(),
      f(),
      y(),
      v(),
      p(),
      (Ce = {
        name: `#5F6068`,
        text: `#1D1D1F`,
        muted: `#5F6068`,
        pillBg: `rgba(255, 255, 255, 0.6)`,
        activeTab: `#FFFFFF`,
        border: `rgba(0, 0, 0, 0.06)`,
        menuBg: `#F7F7F4`,
      }),
      (we = {
        name: `#FFFFFF`,
        text: `#FFFFFF`,
        muted: `#A1A1AA`,
        pillBg: `rgba(28, 28, 30, 0.6)`,
        activeTab: `#2C2C2E`,
        border: `rgba(255, 255, 255, 0.08)`,
        menuBg: `#151515`,
      }),
      (Te = [
        `name`,
        `text`,
        `muted`,
        `pillBg`,
        `activeTab`,
        `border`,
        `menuBg`,
      ]),
      (Ee = (e) => ({
        name: { type: E.Color, title: `Name`, defaultValue: e.name },
        text: { type: E.Color, title: `Active Text`, defaultValue: e.text },
        muted: { type: E.Color, title: `Tab Text`, defaultValue: e.muted },
        pillBg: { type: E.Color, title: `Pill BG`, defaultValue: e.pillBg },
        activeTab: {
          type: E.Color,
          title: `Active Tab`,
          defaultValue: e.activeTab,
        },
        border: { type: E.Color, title: `Border`, defaultValue: e.border },
        menuBg: {
          type: E.Color,
          title: `Phone Menu BG`,
          defaultValue: e.menuBg,
        },
      })),
      (De = `theme`),
      (Oe = `snav-scroll-to`),
      (ke = `snav-theme-change`),
      (Ae = /* @__PURE__ */ new WeakMap()),
      (je = () =>
        a.matchMedia(`(prefers-color-scheme: dark)`).matches
          ? `dark`
          : `light`),
      (Me = (e) => e.replace(/\/+$/, ``) || `/`),
      (Z = (e) => (e || ``).replace(/^#/, ``).trim()),
      (Ne = (e) => e.getClientRects().length > 0),
      (Pe = () => a.matchMedia?.(`(prefers-reduced-motion: reduce)`).matches),
      (Fe = () =>
        /*#__PURE__*/ u(`svg`, {
          width: `1.3em`,
          height: `1.3em`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          "aria-hidden": `true`,
          children: /*#__PURE__*/ u(`path`, {
            d: `M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5a8.5 8.5 0 1 0 10.7 10.7Z`,
            stroke: `currentColor`,
            strokeWidth: `1.8`,
            strokeLinejoin: `round`,
          }),
        })),
      (Ie = () =>
        /*#__PURE__*/ l(`svg`, {
          width: `1.3em`,
          height: `1.3em`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          "aria-hidden": `true`,
          children: [
            /*#__PURE__*/ u(`circle`, {
              cx: `12`,
              cy: `12`,
              r: `4`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
            }),
            /*#__PURE__*/ u(`path`, {
              d: `M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4`,
              stroke: `currentColor`,
              strokeWidth: `1.8`,
              strokeLinecap: `round`,
            }),
          ],
        })),
      (Le = (e) => `
  ${e}{
    font-size:clamp(14px,1.35vw,16px);--ctl:clamp(42px,4.2vw,50px);column-gap:12px;
    grid-template-columns:auto minmax(0,1fr) auto;
  }
  ${e} .snav-pill{max-width:100%;min-width:0}
  ${e} .snav-item{padding:0 clamp(14px,1.8vw,22px)}
  ${e} .snav-name{padding:0 clamp(14px,1.8vw,22px)}
  ${e} .snav-pill{padding:4px}
  ${e} .snav-pill--sections .snav-item{padding:0 clamp(10px,1.1vw,14px)}
  ${e} .snav-back{padding:0 12px}
  ${e} .snav-back-label{display:none}
`),
      (Re = (e) => `
  ${e}{
    font-size:16px;
    grid-template-columns:1fr auto;
    grid-template-areas:"name actions" "menu menu";
    padding:14px var(--px-phone);
  }
  ${e} .snav-name-full,${e} .snav-pill,${e} .snav-toggle--outside,${e} .snav-spacer{display:none}
  ${e} .snav-name-short{display:inline}
  ${e} .snav-name{height:40px;padding:0 16px}
  ${e} .snav-actions{display:flex}
  ${e}[data-open=true]{min-height:100vh;min-height:100dvh;align-content:start;background:var(--menu-bg)}
  ${e}[data-open=true] .snav-menu{display:flex}

  ${e}[data-variant=sections]{grid-template-areas:"name actions" "pill pill";row-gap:10px}
  ${e}[data-variant=sections] .snav-pill{
    display:flex;justify-self:stretch;width:100%;
    --ctl:44px;height:44px;padding:4px;font-size:15px;
  }
  ${e}[data-variant=sections] .snav-menu-btn{display:none}
  ${e}[data-variant=sections] .snav-back-label{display:none}
  ${e}[data-variant=sections] .snav-back{padding:0 12px}
  ${e}[data-variant=sections] .snav-divider{height:18px;margin:0 2px}
  ${e}[data-variant=sections] .snav-pill--sections .snav-item{padding:0 14px;font-size:15px}
`),
      (ze = `
.snav{
  --name:var(--l-name);
  --text:var(--l-text);
  --muted:var(--l-muted);
  --menu-muted:var(--l-muted);
  --bg:var(--l-pillBg);
  --pill:var(--l-activeTab);
  --border:var(--l-border);
  --menu-bg:var(--l-menuBg);
  --divider:rgba(0,0,0,.12);
  --hover:rgba(0,0,0,.05);
  --shadow:0 8px 30px rgba(0,0,0,.06),0 1px 2px rgba(0,0,0,.04);
  --pill-shadow:0 2px 10px rgba(0,0,0,.08),0 0 0 1px rgba(0,0,0,.03);
  --ctl:55px;

  display:grid;
  grid-template-columns:1fr minmax(0,auto) 1fr;
  grid-template-areas:"name pill toggle";
  align-items:center;column-gap:16px;
  width:100%;box-sizing:border-box;
  padding:var(--py) var(--px);
  font-size:17px;letter-spacing:-.01em;line-height:1;
  transition:padding .3s ease,font-size .3s ease,background-color .3s ease;
}
.snav[data-mode=dark]{
  --name:var(--d-name);
  --text:var(--d-text);
  --muted:var(--d-muted);
  --menu-muted:var(--d-muted);
  --bg:var(--d-pillBg);
  --pill:var(--d-activeTab);
  --border:var(--d-border);
  --menu-bg:var(--d-menuBg);
  --divider:rgba(255,255,255,.14);
  --hover:rgba(255,255,255,.07);
  --shadow:0 8px 30px rgba(0,0,0,.35);
  --pill-shadow:0 2px 10px rgba(0,0,0,.4),0 0 0 1px rgba(255,255,255,.04);
}

/* Name — same frosted pill as the tabs and theme toggle */
.snav-name{
  grid-area:name;justify-self:start;min-width:0;
  display:inline-flex;align-items:center;
  height:var(--ctl);padding:0 26px;border-radius:999px;
  color:var(--name);text-decoration:none;font-weight:450;white-space:nowrap;
  transition:height .3s ease,padding .3s ease,background-color .2s ease;
}
.snav-name:hover{background-color:var(--pill);color:var(--text)}
.snav-name[aria-current=page]{background-color:var(--pill);color:var(--text);box-shadow:var(--pill-shadow),var(--shadow)}
.snav-name-short{display:none}

/* Pill */
.snav-pill,.snav-toggle--outside,.snav-name{
  background:var(--bg);border:1px solid var(--border);box-shadow:var(--shadow);
  backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);
  box-sizing:border-box;
}
.snav-pill{
  grid-area:pill;justify-self:center;
  display:inline-flex;align-items:center;gap:4px;
  height:var(--ctl);padding:6px;border-radius:999px;width:max-content;
  transition:height .3s ease,padding .3s ease;
}
.snav-item{
  position:relative;display:inline-flex;align-items:center;height:100%;
  padding:0 28px;border-radius:999px;white-space:nowrap;box-sizing:border-box;
  color:var(--muted);text-decoration:none;font-weight:450;cursor:pointer;flex:none;
  transition:color .2s ease,padding .3s ease;-webkit-tap-highlight-color:transparent;
}
.snav-item:hover,.snav-item[aria-current=page],.snav-item[aria-current=location]{color:var(--text)}
.snav-active{position:absolute;inset:0;border-radius:inherit;background:var(--pill);box-shadow:var(--pill-shadow);pointer-events:none}
.snav-label{position:relative;z-index:1;display:inline-flex;align-items:center;gap:6px;pointer-events:none}
.snav-arrow{flex:none}
.snav-divider{width:1px;height:22px;background:var(--divider);margin:0 6px;flex:none}

/* Case Study variant: back link + scrolling section tabs */
.snav-pill--sections{max-width:100%;min-width:0;gap:0}
.snav-back{
  display:inline-flex;align-items:center;gap:7px;height:100%;flex:none;
  padding:0 16px 0 18px;border-radius:999px;box-sizing:border-box;
  color:var(--text);font-weight:600;text-decoration:none;white-space:nowrap;
  transition:background-color .2s ease,padding .3s ease;
  -webkit-tap-highlight-color:transparent;
}
.snav-back:hover{background:var(--hover)}
.snav-back svg{transition:transform .2s ease}
.snav-back:hover svg{transform:translateX(-2px)}
.snav-track{
  position:relative;display:flex;align-items:center;gap:2px;
  height:100%;min-width:0;overflow-x:auto;overflow-y:hidden;
  scrollbar-width:none;border-radius:999px;
}
.snav-track::-webkit-scrollbar{display:none}
.snav-pill--sections .snav-item{padding:0 18px;font-size:.94em}

/* Theme buttons */
.snav-toggle{
  display:grid;place-items:center;padding:0;border:0;border-radius:999px;
  color:var(--muted);background:transparent;cursor:pointer;
  transition:color .2s,background .2s;-webkit-tap-highlight-color:transparent;
}
.snav-toggle:hover{color:var(--text)}
.snav-toggle--outside{
  grid-area:toggle;justify-self:end;
  width:var(--ctl);height:var(--ctl);border:1px solid var(--border);
  transition:color .2s,background .2s,width .3s ease,height .3s ease;
}
.snav-toggle.snav-toggle--outside{background:var(--bg)}
.snav-toggle.snav-toggle--outside:hover{background:var(--pill)}
.snav-spacer{grid-area:toggle}

/* Phone header actions (no box) */
.snav-actions{grid-area:actions;display:none;align-items:center;gap:8px}
.snav-toggle--phone,.snav-menu-btn{width:40px;height:40px;color:var(--text);font-size:18px}
.snav-toggle.snav-toggle--phone{color:var(--muted)}
.snav-toggle.snav-toggle--phone:hover{color:var(--text)}
.snav-menu-btn{
  position:relative;padding:0;border:0;background:transparent;cursor:pointer;
  -webkit-tap-highlight-color:transparent;
}
.snav-menu-btn span{
  position:absolute;left:11px;right:11px;height:1.75px;border-radius:2px;
  background:currentColor;transition:transform .25s ease,top .25s ease;
}
.snav-menu-btn span:first-child{top:16px}
.snav-menu-btn span:last-child{top:23px}
.snav[data-open=true] .snav-menu-btn span:first-child{top:19.5px;transform:rotate(45deg)}
.snav[data-open=true] .snav-menu-btn span:last-child{top:19.5px;transform:rotate(-45deg)}

/* Phone stacked menu */
.snav-menu{
  grid-area:menu;display:none;flex-direction:column;align-items:center;
  gap:32px;padding:72px 0 48px;
}
.snav-menu-link{
  font-size:30px;font-weight:450;letter-spacing:-.02em;
  color:var(--menu-muted);text-decoration:none;
  opacity:0;transform:translateY(8px);
  animation:snav-in .35s ease forwards;
  -webkit-tap-highlight-color:transparent;
}
.snav-menu-link[aria-current=page],.snav-menu-link[aria-current=location],.snav-menu-link:hover{color:var(--text)}
.snav-menu--sections{gap:22px;padding-top:56px}
.snav-menu--sections .snav-menu-link{font-size:26px}
.snav-menu-back{
  display:inline-flex;align-items:center;gap:10px;
  font-size:17px!important;font-weight:600;color:var(--text);
  margin-bottom:12px;
}
@keyframes snav-in{to{opacity:1;transform:none}}

.snav a:focus-visible,.snav button:focus-visible{outline:2px solid var(--text);outline-offset:2px}
.snav-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}

/* Auto: follow the viewport */
@media (max-width:1199px){${Le(`.snav[data-size=auto]`)}}
@media (max-width:809px){${Re(`.snav[data-size=auto]`)}}

/* Forced sizes (for previewing on canvas breakpoints) */
${Le(`.snav[data-size=tablet]`)}
${Re(`.snav[data-size=phone]`)}

/* Scrolled: compact pill */
.snav[data-scrolled=true]{--ctl:44px;font-size:15px;padding-top:10px;padding-bottom:10px}
.snav[data-scrolled=true] .snav-item{padding:0 18px}
.snav[data-scrolled=true] .snav-name{padding:0 18px}
.snav[data-scrolled=true] .snav-pill{padding:4px}
.snav[data-scrolled=true] .snav-divider{height:16px;margin:0 4px}
.snav[data-scrolled=true] .snav-pill--sections .snav-item{padding:0 13px}
.snav[data-scrolled=true] .snav-back{padding:0 12px 0 14px}

/* Scrolled on phone: frosted bar so the name and icons stay readable */
@media (max-width:809px){
  .snav[data-size=auto][data-scrolled=true]{
    padding-top:8px;padding-bottom:8px;
    background:var(--bg);border-bottom:1px solid var(--border);
    backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);
  }
  .snav[data-size=auto][data-open=true]{background:var(--menu-bg);backdrop-filter:none;-webkit-backdrop-filter:none}
}
.snav[data-size=phone][data-scrolled=true]{
  padding-top:8px;padding-bottom:8px;
  background:var(--bg);border-bottom:1px solid var(--border);
  backdrop-filter:blur(16px) saturate(1.4);-webkit-backdrop-filter:blur(16px) saturate(1.4);
}
.snav[data-size=phone][data-open=true]{background:var(--menu-bg);backdrop-filter:none;-webkit-backdrop-filter:none}

@media (prefers-reduced-motion:reduce){
  .snav,.snav *{transition:none!important;animation:none!important}
  .snav-menu-link{opacity:1;transform:none}
}
`),
      (Be = [
        { label: `Overview`, id: `Overview` },
        { label: `Problem`, id: `Problem` },
        { label: `Research`, id: `Research` },
        { label: `Ideation`, id: `Ideation` },
        { label: `Designs`, id: `Designs` },
        { label: `Lessons`, id: `Lessons` },
      ]),
      (Se.defaultProps = {
        variant: `main`,
        name: `Ashley Suh`,
        phoneName: `Ashley`,
        nameLink: ``,
        workLabel: `Work`,
        aboutLabel: `About`,
        resumeLabel: `Resume`,
        workLink: ``,
        workSection: `Projects`,
        aboutLink: ``,
        resumeLink: ``,
        backLabel: `Projects`,
        backLink: ``,
        sections: Be,
        sectionOffset: 16,
        activeTab: `auto`,
        size: `auto`,
        showThemeToggle: !0,
        shrinkOnScroll: !0,
        scrollDistance: 24,
        lightColors: Ce,
        darkTheme: we,
        canvasTheme: `light`,
        fontFamily: `Inter, system-ui, -apple-system, sans-serif`,
        paddingX: 32,
        paddingXPhone: 20,
        paddingY: 20,
      }),
      (Q = (e) => e.variant === `sections`),
      ($ = (e) => e.variant !== `sections`),
      b(Se, {
        variant: {
          type: E.Enum,
          title: `Variant`,
          options: [`main`, `sections`],
          optionTitles: [`Main`, `Case Study`],
          defaultValue: `main`,
          displaySegmentedControl: !0,
        },
        name: { type: E.String, title: `Name`, defaultValue: `Ashley Suh` },
        phoneName: {
          type: E.String,
          title: `Phone Name`,
          defaultValue: `Ashley`,
        },
        nameLink: { type: E.Link, title: `Name Link` },
        workLabel: {
          type: E.String,
          title: `Work Label`,
          defaultValue: `Work`,
          hidden: Q,
        },
        workLink: { type: E.Link, title: `Work Link`, hidden: Q },
        workSection: {
          type: E.String,
          title: `Work Section`,
          placeholder: `Layer name, e.g. Projects`,
          defaultValue: `Projects`,
          hidden: Q,
        },
        aboutLabel: {
          type: E.String,
          title: `About Label`,
          defaultValue: `About`,
          hidden: Q,
        },
        aboutLink: { type: E.Link, title: `About Link`, hidden: Q },
        resumeLabel: {
          type: E.String,
          title: `Resume Label`,
          defaultValue: `Resume`,
          hidden: Q,
        },
        resumeLink: { type: E.Link, title: `Resume Link`, hidden: Q },
        activeTab: {
          type: E.Enum,
          title: `Active`,
          options: [`auto`, `home`, `work`, `about`, `resume`],
          optionTitles: [`Auto (URL)`, `Home`, `Work`, `About`, `Resume`],
          defaultValue: `auto`,
          hidden: Q,
        },
        backLabel: {
          type: E.String,
          title: `Back Label`,
          defaultValue: `Projects`,
          hidden: $,
        },
        backLink: { type: E.Link, title: `Back Link`, hidden: $ },
        sections: {
          type: E.Array,
          title: `Sections`,
          maxCount: 10,
          defaultValue: Be,
          hidden: $,
          control: {
            type: E.Object,
            controls: {
              label: {
                type: E.String,
                title: `Tab Label`,
                defaultValue: `Section`,
              },
              id: {
                type: E.String,
                title: `Section ID`,
                placeholder: `Layer name, e.g. Problem`,
                defaultValue: ``,
              },
            },
          },
        },
        sectionOffset: {
          type: E.Number,
          title: `Scroll Offset`,
          min: 0,
          max: 200,
          step: 4,
          defaultValue: 16,
          unit: `px`,
          hidden: $,
        },
        showThemeToggle: {
          type: E.Boolean,
          title: `Theme Toggle`,
          defaultValue: !0,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
        },
        shrinkOnScroll: {
          type: E.Boolean,
          title: `Shrink on Scroll`,
          defaultValue: !0,
          enabledTitle: `On`,
          disabledTitle: `Off`,
        },
        scrollDistance: {
          type: E.Number,
          title: `Shrink After`,
          min: 0,
          max: 400,
          step: 4,
          defaultValue: 24,
          unit: `px`,
          hidden: (e) => !e.shrinkOnScroll,
        },
        lightColors: {
          type: E.Object,
          title: `Light Colors`,
          controls: Ee(Ce),
        },
        darkTheme: { type: E.Object, title: `Dark Colors`, controls: Ee(we) },
        canvasTheme: {
          type: E.Enum,
          title: `Canvas Preview`,
          options: [`light`, `dark`],
          optionTitles: [`Light`, `Dark`],
          defaultValue: `light`,
          displaySegmentedControl: !0,
        },
        size: {
          type: E.Enum,
          title: `Size`,
          options: [`auto`, `desktop`, `tablet`, `phone`],
          optionTitles: [`Auto`, `Desktop`, `Tablet`, `Phone`],
          defaultValue: `auto`,
        },
        fontFamily: {
          type: E.String,
          title: `Font`,
          defaultValue: `Inter, system-ui, -apple-system, sans-serif`,
        },
        paddingX: {
          type: E.Number,
          title: `Padding X`,
          min: 0,
          max: 160,
          step: 4,
          defaultValue: 32,
          unit: `px`,
        },
        paddingXPhone: {
          type: E.Number,
          title: `Padding X (Phone)`,
          min: 0,
          max: 48,
          step: 2,
          defaultValue: 20,
          unit: `px`,
        },
        paddingY: {
          type: E.Number,
          title: `Padding Y`,
          min: 0,
          max: 60,
          step: 2,
          defaultValue: 20,
          unit: `px`,
        },
      });
  }))();
}

Ve();
export { Se as Nav };
