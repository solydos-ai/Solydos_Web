const ICONS = {
  down: <path d="M4 6h16L12 19Z" fill="currentColor" stroke="none" />,
  arrow: <path d="M4 12h15m-5-5 5 5-5 5" />,
}

export default function Icon({ name, size = 24, className = '' }) {
  return (
    <svg className={`sd-icon ${className}`.trim()} width={size} height={size} viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="1.25" strokeLinecap="square" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}
