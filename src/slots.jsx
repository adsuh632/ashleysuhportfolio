// Stand-ins for Framer's slot wrappers used when one code component is passed into another.
export const M = ({ children }) => children;
const sizes = {
  "framer-i429pq-container": { zIndex: 1, width: 788, height: 355, position: "relative" },
  "framer-nmdnmm-container": { width: 484, height: 400, position: "relative" },
};
export const k = ({ className, children }) => <div className={className} style={sizes[className]}>{children}</div>;
