/* eslint-disable */
// Ported from the original Framer code component bundle (Z_KesXtKrotHruZPt2iLdWwPlbv6CtNMdDTq7-vwxdo.js lines 45-800).
import { t as e } from "../shim/rt.js";
import { A as t, C as n, I as r, R as i, _ as a, b as o, j as ee, l as s, o as c, p as l, s as u, w as d, y as f, } from "../shim/react.js";
import { C as p, a as te, r as m, t as h } from "../shim/motion.js";
import { B as g, C as ne, D as _, N as v, S as y, T as b, X as x, a as S, at as re, c as C, ct as w, dt as ie, f as ae, g as T, i as E, it as D, mt as O, nt as k, o as A, ot as j, st as M, v as N, xt as P, } from "../shim/framer.jsx";

function se(e) {
  let t = () => {
      if (e === `light` || e === `dark`) return e;
      if (typeof document > `u`) return `light`;
      let t = document.documentElement.dataset.theme;
      return t === `light` || t === `dark`
        ? t
        : i.matchMedia?.(`(prefers-color-scheme: dark)`).matches
          ? `dark`
          : `light`;
    },
    [n, r] = a(`light`);
  return (
    f(() => {
      if ((r(t()), e === `light` || e === `dark`)) return;
      let n = new MutationObserver(() => r(t()));
      n.observe(document.documentElement, {
        attributes: !0,
        attributeFilter: [`data-theme`],
      });
      let a = i.matchMedia?.(`(prefers-color-scheme: dark)`),
        o = () => r(t());
      return (
        a?.addEventListener?.(`change`, o),
        () => {
          n.disconnect(), a?.removeEventListener?.(`change`, o);
        }
      );
    }, [e]),
    n
  );
}
function B(e) {
  let {
      title: t,
      intro: n,
      details: r,
      image: i,
      imageUrl: ee,
      imageFit: l,
      imageHeight: u,
      showLock: d,
      lockTitle: p,
      lockText: te,
      email: m,
      password: h,
      unlockLink: g,
      buttonLabel: ne,
      font: _,
      headingFont: v,
      themeMode: y,
      lightColors: b,
      darkColors: x,
      layout: S,
      style: re,
    } = e,
    C = se(y) === `dark` ? { ...de, ...(x || {}) } : { ...ue, ...(b || {}) },
    w = S || {},
    ie = P.current() === P.canvas,
    T = o(null),
    E = o(null),
    [D, O] = a(1200);
  f(() => {
    let e = E.current;
    if (!e || typeof ResizeObserver > `u`) return;
    let t = new ResizeObserver(([e]) => O(e.contentRect.width));
    return t.observe(e), () => t.disconnect();
  }, []);
  let k = D < 810,
    A = D < 1200,
    j = D < 360,
    M =
      String(h || ``)
        .replace(/\D/g, ``)
        .slice(0, 8) || `0000`,
    N = M.length,
    [F, I] = a(Array(N).fill(``)),
    [L, R] = a(`idle`),
    z = o([]);
  f(() => I(Array(N).fill(``)), [N]);
  let oe = () => {
      if (g) {
        try {
          sessionStorage.setItem(le + g, `1`);
        } catch {}
        T.current?.click();
      }
    },
    B = (e) => {
      e?.preventDefault(),
        !ie &&
          (F.join(``) === M
            ? (R(`ok`), setTimeout(oe, 350))
            : (R(`error`),
              setTimeout(() => {
                I(Array(N).fill(``)), R(`idle`), z.current[0]?.focus();
              }, 600)));
    },
    V = (e, t) => {
      let n = t.replace(/\D/g, ``);
      if (!n) {
        I((t) => t.map((t, n) => (n === e ? `` : t)));
        return;
      }
      let r = F[e],
        i = n.length === 2 && r && n.startsWith(r) ? n.slice(1) : n;
      I((t) => {
        let n = [...t],
          r = e;
        for (let e of i) {
          if (r >= N) break;
          n[r++] = e;
        }
        return n;
      });
      let a = Math.min(e + i.length, N - 1),
        o = z.current[a];
      o && a !== e && (o.focus(), o.select());
    },
    fe = (e, t) => {
      t.key === `Backspace` && !F[e] && e > 0
        ? (z.current[e - 1]?.focus(),
          I((t) => t.map((t, n) => (n === e - 1 ? `` : t))))
        : t.key === `ArrowLeft` && e > 0
          ? z.current[e - 1]?.focus()
          : t.key === `ArrowRight` && e < N - 1 && z.current[e + 1]?.focus();
    },
    H = _?.fontFamily || `Inter, system-ui, sans-serif`,
    U = v?.fontFamily || `Poppins, Inter, system-ui, sans-serif`,
    W = k ? (w.padPhone ?? 20) : A ? (w.padTablet ?? 40) : (w.padDesktop ?? 64),
    G = {
      width: `100%`,
      maxWidth: w.contentWidth ?? 760,
      margin: w.align === `center` ? `0 auto` : void 0,
      boxSizing: `border-box`,
    },
    K = (e, t) => ({
      background: e,
      paddingLeft: W,
      paddingRight: W,
      boxSizing: `border-box`,
      ...t,
    }),
    q = i?.src || ee || ce,
    pe = String(n || ``)
      .split(/\n\s*\n/)
      .map((e) => e.trim())
      .filter(Boolean),
    J = (r || []).filter((e) => e && (e.label || e.value)),
    Y = Math.max(
      36,
      Math.min(k ? 44 : 48, Math.floor((D - W * 2 - 90) / Math.max(N, 1)) - 8),
    ),
    X = m
      ? /*#__PURE__*/ c(`a`, {
          href: `mailto:${m}`,
          style: {
            color: C.text,
            textDecoration: `none`,
            borderBottom: `1px dotted ${C.muted}`,
          },
          children: m,
        })
      : null,
    Z = String(te || ``),
    [me, Q] = Z.includes(`{email}`) ? Z.split(`{email}`) : [Z, ``],
    $ =
      X ||
      /*#__PURE__*/ c(`span`, {
        style: { color: C.muted },
        children: `[add your email]`,
      });
  return /*#__PURE__*/ s(`div`, {
    ref: E,
    style: {
      ...re,
      width: `100%`,
      fontFamily: H,
      color: C.text,
      background: C.bg,
      transition: `background-color .3s ease, color .3s ease`,
      WebkitFontSmoothing: `antialiased`,
    },
    children: [
      /*#__PURE__*/ c(`style`, {
        children: `@keyframes lcs-shake{0%,100%{transform:none}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}`,
      }),
      g
        ? /*#__PURE__*/ c(ae, {
            href: g,
            children: /*#__PURE__*/ c(`a`, {
              ref: T,
              "aria-hidden": `true`,
              tabIndex: -1,
              style: { display: `none` },
            }),
          })
        : null,
      /*#__PURE__*/ c(`section`, {
        style: K(C.bg, {
          paddingTop: k
            ? Math.round((w.topSpace ?? 120) * 0.55)
            : A
              ? Math.round((w.topSpace ?? 120) * 0.8)
              : (w.topSpace ?? 120),
          paddingBottom: k ? 56 : A ? 72 : 88,
        }),
        children: /*#__PURE__*/ s(`div`, {
          style: G,
          children: [
            /*#__PURE__*/ c(`h1`, {
              style: {
                fontFamily: U,
                fontWeight: v?.fontWeight ?? 500,
                fontSize: k
                  ? `clamp(26px, 7.4vw, 36px)`
                  : A
                    ? `clamp(36px, 4.4vw, 44px)`
                    : 48,
                lineHeight: 1.12,
                letterSpacing: `-0.02em`,
                margin: 0,
                color: C.text,
                whiteSpace: k ? `normal` : `pre-line`,
                maxWidth: 720,
              },
              children: t,
            }),
            pe.map((e, t) =>
              /*#__PURE__*/ c(
                `p`,
                {
                  style: {
                    margin: 0,
                    marginTop: t === 0 ? 28 : 18,
                    fontSize: k ? 15 : 16,
                    lineHeight: 1.65,
                    color: C.body,
                    maxWidth: 620,
                  },
                  children: e,
                },
                t,
              ),
            ),
            J.length
              ? /*#__PURE__*/ c(`dl`, {
                  style: {
                    display: `grid`,
                    gridTemplateColumns: j
                      ? `minmax(0, 1fr)`
                      : `repeat(2, minmax(0, 1fr))`,
                    columnGap: k ? 20 : 40,
                    rowGap: k ? 24 : 32,
                    margin: 0,
                    marginTop: k ? 40 : 56,
                  },
                  children: J.map((e, t) =>
                    /*#__PURE__*/ s(
                      `div`,
                      {
                        style: { minWidth: 0 },
                        children: [
                          /*#__PURE__*/ c(`dt`, {
                            style: {
                              fontSize: 12,
                              letterSpacing: `0.06em`,
                              textTransform: `uppercase`,
                              color: C.muted,
                              marginBottom: 10,
                            },
                            children: e.label,
                          }),
                          /*#__PURE__*/ c(`dd`, {
                            style: {
                              margin: 0,
                              fontSize: k ? 14 : 15,
                              lineHeight: 1.55,
                              color: C.text,
                              whiteSpace: `pre-line`,
                            },
                            children: e.value,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                })
              : null,
          ],
        }),
      }),
      /*#__PURE__*/ c(`section`, {
        style: {
          background: C.imageBg,
          borderTop: `1px solid ${C.line}`,
          borderBottom: `1px solid ${C.line}`,
          height:
            l === `cover`
              ? k
                ? Math.round(u * 0.55)
                : A
                  ? Math.round(u * 0.8)
                  : u
              : void 0,
          padding: l === `cover` ? 0 : `${k ? 32 : A ? 56 : 80}px ${W}px`,
          overflow: `hidden`,
          display: `flex`,
          alignItems: `center`,
          justifyContent: `center`,
          boxSizing: `border-box`,
        },
        children: q
          ? /*#__PURE__*/ c(`img`, {
              src: q,
              srcSet: i?.srcSet,
              alt: i?.alt || ``,
              style:
                l === `cover`
                  ? {
                      width: `100%`,
                      height: `100%`,
                      objectFit: `cover`,
                      display: `block`,
                    }
                  : {
                      display: `block`,
                      width: `100%`,
                      maxWidth: w.imageMaxWidth ?? 1100,
                      height: `auto`,
                    },
            })
          : null,
      }),
      d
        ? /*#__PURE__*/ c(`section`, {
            style: K(C.bg, {
              paddingTop: k ? 56 : 72,
              paddingBottom: k ? 80 : 140,
            }),
            children: /*#__PURE__*/ s(`div`, {
              style: G,
              children: [
                /*#__PURE__*/ c(`h2`, {
                  style: {
                    fontFamily: U,
                    fontWeight: v?.fontWeight ?? 500,
                    fontSize: k ? 22 : 26,
                    lineHeight: 1.25,
                    letterSpacing: `-0.01em`,
                    margin: 0,
                    color: C.text,
                  },
                  children: p,
                }),
                /*#__PURE__*/ s(`p`, {
                  style: {
                    margin: 0,
                    marginTop: 14,
                    fontSize: k ? 14 : 15,
                    lineHeight: 1.65,
                    color: C.body,
                    maxWidth: 560,
                  },
                  children: [me, Z.includes(`{email}`) ? $ : null, Q],
                }),
                /*#__PURE__*/ s(`form`, {
                  onSubmit: B,
                  style: {
                    display: `flex`,
                    alignItems: `center`,
                    flexWrap: `wrap`,
                    gap: 8,
                    marginTop: 28,
                    animation: L === `error` ? `lcs-shake .4s ease` : void 0,
                  },
                  children: [
                    F.map((e, t) =>
                      /*#__PURE__*/ c(
                        `input`,
                        {
                          ref: (e) => (z.current[t] = e),
                          value: e,
                          onChange: (e) => V(t, e.target.value),
                          onKeyDown: (e) => fe(t, e),
                          onFocus: (e) => e.target.select(),
                          inputMode: `numeric`,
                          autoComplete: `one-time-code`,
                          maxLength: N,
                          onPaste: (e) => {
                            e.preventDefault(),
                              V(t, e.clipboardData.getData(`text`));
                          },
                          "aria-label": `Digit ${t + 1} of ${N}`,
                          style: {
                            width: Y,
                            height: Y,
                            boxSizing: `border-box`,
                            textAlign: `center`,
                            fontFamily: H,
                            fontSize: 18,
                            color: C.text,
                            background: `transparent`,
                            border: `1px solid ${L === `error` ? C.error : L === `ok` ? C.success : C.inputBorder}`,
                            borderRadius: 8,
                            outline: `none`,
                            caretColor: C.text,
                            transition: `border-color .2s`,
                          },
                        },
                        t,
                      ),
                    ),
                    /*#__PURE__*/ c(`button`, {
                      type: `submit`,
                      style: {
                        height: Y,
                        padding: `0 18px`,
                        marginLeft: 6,
                        fontFamily: H,
                        fontSize: 14,
                        fontWeight: 500,
                        color: C.text,
                        background: `transparent`,
                        border: `1px solid ${C.inputBorder}`,
                        borderRadius: 8,
                        cursor: `pointer`,
                      },
                      children: L === `ok` ? `Unlocked` : ne,
                    }),
                  ],
                }),
                /*#__PURE__*/ c(`div`, {
                  role: `status`,
                  "aria-live": `polite`,
                  style: {
                    minHeight: 20,
                    marginTop: 12,
                    fontSize: 13,
                    color: L === `error` ? C.error : C.muted,
                  },
                  children:
                    L === `error` ? `That code didn't work. Try again.` : ``,
                }),
              ],
            }),
          })
        : null,
    ],
  });
}
var ce, le, ue, de;
function V() {
  return (V = e(() => {
    r(),
      u(),
      d(),
      g(),
      (ce = `data:image/webp;base64,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`),
      (le = `locked-case-study:`),
      (ue = {
        bg: `#FFFFFF`,
        text: `#1D1D1F`,
        body: `#5F6068`,
        muted: `#8A8B91`,
        imageBg: `#F4F4F2`,
        line: `rgba(0,0,0,0.06)`,
        inputBorder: `rgba(0,0,0,0.22)`,
        error: `#C4561F`,
        success: `#028383`,
      }),
      (de = {
        bg: `#151515`,
        text: `#F5F5F7`,
        body: `#B4B4BA`,
        muted: `#8E8E93`,
        imageBg: `#1F1F1F`,
        line: `rgba(255,255,255,0.08)`,
        inputBorder: `rgba(255,255,255,0.28)`,
        error: `#F2836B`,
        success: `#44B3C9`,
      }),
      (B.defaultProps = {
        title: `FilmReel: A curator-led home for independent film`,
        intro: `During my internship at 4um, I designed FilmReel, a streaming and discovery platform that helps independent and student filmmakers get their work seen.

I owned the product end to end, from writing the PRD and running user research to wireframing, prototyping and visual design. Working directly with the founder and our developer, I shaped the move from open uploads to curated submissions and shipped FilmReel with 6 creators and 12 films at launch.`,
        details: [
          { label: `Role`, value: `Product Design Intern` },
          { label: `Tools`, value: `Figma, Google Stitch, HTML/CSS` },
          { label: `Timeline`, value: `May – Aug 2026` },
          { label: `Collaboration`, value: `Founder and engineering` },
        ],
        imageUrl: ``,
        imageFit: `contain`,
        imageHeight: 560,
        showLock: !0,
        lockTitle: `The design process is password-protected`,
        lockText: `This project includes work that isn't public yet and requires a four-digit code. If you're a hiring manager or recruiter and would like to see more, email me at {email} to request access.`,
        email: ``,
        password: `1234`,
        unlockLink: ``,
        buttonLabel: `Enter`,
        themeMode: `auto`,
      }),
      ne(B, {
        showLock: {
          type: A.Boolean,
          title: `Password gate`,
          enabledTitle: `Show`,
          disabledTitle: `Hide`,
          defaultValue: !0,
        },
        password: {
          type: A.String,
          title: `Password`,
          placeholder: `Digits only, e.g. 2026`,
          defaultValue: `1234`,
          hidden: (e) => !e.showLock,
        },
        themeMode: {
          type: A.Enum,
          title: `Theme`,
          options: [`auto`, `light`, `dark`],
          optionTitles: [`Follow site`, `Light`, `Dark`],
          displaySegmentedControl: !0,
          defaultValue: `auto`,
        },
        title: {
          type: A.String,
          title: `Title`,
          displayTextArea: !0,
          defaultValue: B.defaultProps.title,
        },
        intro: {
          type: A.String,
          title: `Intro`,
          displayTextArea: !0,
          placeholder: `Blank line = new paragraph`,
          defaultValue: B.defaultProps.intro,
        },
        details: {
          type: A.Array,
          title: `Details`,
          maxCount: 8,
          defaultValue: B.defaultProps.details,
          control: {
            type: A.Object,
            controls: {
              label: { type: A.String, title: `Label`, defaultValue: `Label` },
              value: {
                type: A.String,
                title: `Value`,
                displayTextArea: !0,
                defaultValue: ``,
              },
            },
          },
        },
        image: { type: A.ResponsiveImage, title: `Image` },
        imageUrl: {
          type: A.String,
          title: `Image URL`,
          placeholder: `Used if Image is empty`,
          defaultValue: ``,
        },
        imageFit: {
          type: A.Enum,
          title: `Image fit`,
          options: [`contain`, `cover`],
          optionTitles: [`Framed`, `Full bleed`],
          displaySegmentedControl: !0,
          defaultValue: `contain`,
        },
        imageHeight: {
          type: A.Number,
          title: `Band height`,
          min: 240,
          max: 1e3,
          step: 10,
          unit: `px`,
          defaultValue: 560,
          hidden: (e) => e.imageFit !== `cover`,
        },
        lockTitle: {
          type: A.String,
          title: `Gate title`,
          defaultValue: B.defaultProps.lockTitle,
          hidden: (e) => !e.showLock,
        },
        lockText: {
          type: A.String,
          title: `Gate text`,
          displayTextArea: !0,
          placeholder: `Use {email} where the email link goes`,
          defaultValue: B.defaultProps.lockText,
          hidden: (e) => !e.showLock,
        },
        email: {
          type: A.String,
          title: `Email`,
          placeholder: `you@example.com`,
          defaultValue: ``,
          hidden: (e) => !e.showLock,
        },
        unlockLink: {
          type: A.Link,
          title: `Unlocks to`,
          hidden: (e) => !e.showLock,
        },
        buttonLabel: {
          type: A.String,
          title: `Button`,
          defaultValue: `Enter`,
          hidden: (e) => !e.showLock,
        },
        font: {
          type: A.Font,
          title: `Body font`,
          controls: `basic`,
          defaultFontType: `sans-serif`,
        },
        headingFont: {
          type: A.Font,
          title: `Heading font`,
          controls: `basic`,
          defaultFontType: `sans-serif`,
        },
        lightColors: {
          type: A.Object,
          title: `Light colors`,
          controls: {
            bg: { type: A.Color, title: `Background`, defaultValue: `#FFFFFF` },
            text: { type: A.Color, title: `Text`, defaultValue: `#1D1D1F` },
            body: { type: A.Color, title: `Body`, defaultValue: `#5F6068` },
            muted: { type: A.Color, title: `Labels`, defaultValue: `#8A8B91` },
            imageBg: {
              type: A.Color,
              title: `Image band`,
              defaultValue: `#F4F4F2`,
            },
            line: {
              type: A.Color,
              title: `Band border`,
              defaultValue: `rgba(0,0,0,0.06)`,
            },
            inputBorder: {
              type: A.Color,
              title: `Input border`,
              defaultValue: `rgba(0,0,0,0.22)`,
            },
            error: { type: A.Color, title: `Error`, defaultValue: `#C4561F` },
            success: {
              type: A.Color,
              title: `Success`,
              defaultValue: `#028383`,
            },
          },
        },
        darkColors: {
          type: A.Object,
          title: `Dark colors`,
          controls: {
            bg: { type: A.Color, title: `Background`, defaultValue: `#151515` },
            text: { type: A.Color, title: `Text`, defaultValue: `#F5F5F7` },
            body: { type: A.Color, title: `Body`, defaultValue: `#B4B4BA` },
            muted: { type: A.Color, title: `Labels`, defaultValue: `#8E8E93` },
            imageBg: {
              type: A.Color,
              title: `Image band`,
              defaultValue: `#1F1F1F`,
            },
            line: {
              type: A.Color,
              title: `Band border`,
              defaultValue: `rgba(255,255,255,0.08)`,
            },
            inputBorder: {
              type: A.Color,
              title: `Input border`,
              defaultValue: `rgba(255,255,255,0.28)`,
            },
            error: { type: A.Color, title: `Error`, defaultValue: `#F2836B` },
            success: {
              type: A.Color,
              title: `Success`,
              defaultValue: `#44B3C9`,
            },
          },
        },
        layout: {
          type: A.Object,
          title: `Layout`,
          controls: {
            contentWidth: {
              type: A.Number,
              title: `Text width`,
              min: 480,
              max: 1200,
              unit: `px`,
              defaultValue: 760,
            },
            align: {
              type: A.Enum,
              title: `Align`,
              options: [`center`, `left`],
              optionTitles: [`Center`, `Left`],
              displaySegmentedControl: !0,
              defaultValue: `center`,
            },
            imageMaxWidth: {
              type: A.Number,
              title: `Image max width`,
              min: 400,
              max: 2e3,
              unit: `px`,
              defaultValue: 1100,
            },
            topSpace: {
              type: A.Number,
              title: `Top space`,
              min: 0,
              max: 300,
              unit: `px`,
              defaultValue: 120,
            },
            padDesktop: {
              type: A.Number,
              title: `Side padding`,
              min: 0,
              max: 160,
              unit: `px`,
              defaultValue: 64,
            },
            padTablet: {
              type: A.Number,
              title: `Side pad (tablet)`,
              min: 0,
              max: 120,
              unit: `px`,
              defaultValue: 40,
            },
            padPhone: {
              type: A.Number,
              title: `Side pad (phone)`,
              min: 0,
              max: 48,
              unit: `px`,
              defaultValue: 20,
            },
          },
        },
      });
  }))();
}

V();
export { B as FilmReel };
