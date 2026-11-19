// rolldown lazy-init helper used by the original bundles
export const t = (fn) => {
  let done = false, val;
  return () => { if (!done) { done = true; val = fn && fn(); } return val; };
};
