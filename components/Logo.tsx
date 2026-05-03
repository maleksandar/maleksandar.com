export default function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="3" fill="#111111" />
      <text
        x="16"
        y="22"
        fontFamily="monospace, 'Courier New', Courier"
        fontSize="13"
        fontWeight="600"
        textAnchor="middle"
        fill="#ffffff"
        letterSpacing="-0.5"
      >
        AM
      </text>
    </svg>
  );
}
