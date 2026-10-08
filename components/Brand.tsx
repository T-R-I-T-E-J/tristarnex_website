export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <svg
      className={compact ? "brand-symbol" : "brand"}
      viewBox={compact ? "212 202 390 310" : "208 198 1750 315"}
      role="img"
      aria-label="Tristarnex"
    >
      <image href="/tristarnex-logo.png" width="2172" height="724" />
    </svg>
  );
}
