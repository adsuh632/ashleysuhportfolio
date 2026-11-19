// Minimal stand-ins for the parts of the Framer runtime that the ported code components touch.
import * as React from "react";
import { Link as RouterLink } from "react-router-dom";

export const ControlType = new Proxy({}, { get: (_, k) => String(k) });
export const RenderTarget = { canvas: "CANVAS", export: "EXPORT", thumbnail: "THUMBNAIL", preview: "PREVIEW", current: () => "PREVIEW", hasRestrictions: () => false };
export const addPropertyControls = () => {};
export const addFonts = () => {};

const isInternal = (href) => typeof href === "string" && href.startsWith("/") && !href.startsWith("//");

// Framer <Link>: wraps a single child element and gives it an href.
export function Link({ href, openInNewTab, children }) {
  if (!href) return children;
  const child = React.Children.only(children);
  if (isInternal(href) && !openInNewTab) {
    return <RouterLink to={href} style={child.props.style} className={child.props.className} {...pick(child.props)}>{child.props.children}</RouterLink>;
  }
  const extra = openInNewTab ? { target: "_blank", rel: "noopener" } : {};
  return React.cloneElement(child, { href: normalize(href), ...extra });
}
function pick(p) {
  const out = {};
  for (const k of Object.keys(p)) if (/^(on[A-Z]|aria-|data-|role$|tabIndex$|id$|title$)/.test(k)) out[k] = p[k];
  return out;
}
const normalize = (h) => (/^(https?:|mailto:|tel:|\/|#)/.test(h) ? h : "https://" + h);

const missing = (name) => {
  const fn = () => { if (import.meta.env.DEV) console.debug(`[framer shim] ${name}() called`); };
  return fn;
};
// letter exports of framer.CDgCRXLs.mjs that are referenced by the ported code
export const o = ControlType;
export const xt = RenderTarget;
export const C = addPropertyControls;
export const E = { loadFonts: () => {} };
export const f = Link;
export const B = () => {};
export const D = missing("D"), N = missing("N"), S = missing("S"), T = missing("T"), X = missing("X"), a = missing("a"),
  at = missing("at"), c = missing("c"), ct = missing("ct"), dt = missing("dt"), g = missing("g"), i = missing("i"),
  it = missing("it"), mt = missing("mt"), nt = missing("nt"), ot = missing("ot"), st = missing("st"), v = missing("v"),
  ut = missing("ut"), F = missing("F"), Z = missing("Z"), _ = missing("_"), _t = missing("_t"), b = missing("b"),
  gt = missing("gt"), h = missing("h"), lt = missing("lt"), n = missing("n"), pt = missing("pt"), q = missing("q"),
  r = missing("r"), t = missing("t"), u = missing("u"), x = missing("x"), y = missing("y"), P = missing("P"), ft = missing("ft");
