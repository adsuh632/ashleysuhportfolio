// "Arrow Up Right" icon from the Framer project (24×24, 1.5 stroke).
export default function ArrowUpRight({ color = "currentColor", size = 24 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" style={{ display: "block", flex: "none" }} aria-hidden="true">
      <path d="M 8.5 8.5 L 8.5 0 L 0 0" fill="transparent" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(8.75 6.75)" />
      <path d="M 10.25 0 L 0 10.25" fill="transparent" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" transform="translate(6.75 7)" />
    </svg>
  );
}
