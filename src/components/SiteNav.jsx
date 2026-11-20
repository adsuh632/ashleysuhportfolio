import { createPortal } from "react-dom";
import { Nav } from "../ported/Nav.jsx";
import useBreakpoint from "../useBreakpoint.js";

// Fixed header wrapper. `sizes` mirrors the per-breakpoint "size" overrides set on each Framer page.
// Rendered into <body> so page transitions (which fade/move the page) don't affect it.
export default function SiteNav({ props, sizes = {} }) {
  const bp = useBreakpoint();
  const size = sizes[bp] ?? props.size;
  return createPortal(
    <div className="nav-container">
      <Nav {...props} size={size} />
    </div>,
    document.body,
  );
}
