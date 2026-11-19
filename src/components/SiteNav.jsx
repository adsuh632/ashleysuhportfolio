import { Nav } from "../ported/Nav.jsx";
import useBreakpoint from "../useBreakpoint.js";

// Fixed header wrapper. `sizes` mirrors the per-breakpoint "size" overrides set on each Framer page.
export default function SiteNav({ props, sizes = {} }) {
  const bp = useBreakpoint();
  const size = sizes[bp] ?? props.size;
  return (
    <div className="nav-container">
      <Nav {...props} size={size} />
    </div>
  );
}
