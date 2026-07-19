import { clsx } from "@/lib/clsx";

export function Wordmark({
  className,
  withGlyph = true,
  glyphSize = 28,
}: {
  className?: string;
  withGlyph?: boolean;
  glyphSize?: number;
}) {
  return (
    <span className={clsx("inline-flex items-center gap-2.5", className)}>
      {withGlyph ? <BrandGlyph size={glyphSize} /> : null}
      <span className="font-display font-extrabold tracking-tightest gradient-text">
        My Train
      </span>
    </span>
  );
}

/**
 * Placeholder brand glyph — no real logo exists yet.
 * A rounded, gradient tile with a stylized track + signal motif.
 */
export function BrandGlyph({ size = 28 }: { size?: number }) {
  return (
    <span
      aria-hidden="true"
      className="relative grid shrink-0 place-items-center rounded-[28%] shadow-glow"
      style={{
        width: size,
        height: size,
        backgroundImage: "linear-gradient(135deg, #5B5FEF 0%, #8B5FE6 100%)",
      }}
    >
      <svg
        width={size * 0.62}
        height={size * 0.62}
        viewBox="0 0 24 24"
        fill="none"
      >
        {/* Location pin sitting on a track */}
        <path
          d="M12 3.2c-3 0-5.2 2.2-5.2 5.1 0 3.6 4.3 7.4 5 8 .1.1.3.1.4 0 .7-.6 5-4.4 5-8 0-2.9-2.2-5.1-5.2-5.1Z"
          fill="#fff"
          fillOpacity="0.95"
        />
        <circle cx="12" cy="8.2" r="1.9" fill="#5B5FEF" />
        <path
          d="M5 20h14"
          stroke="#fff"
          strokeOpacity="0.9"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
        <path
          d="M8 18v4M16 18v4"
          stroke="#fff"
          strokeOpacity="0.55"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
}
