import { useId } from "react";

type BrandLogoProps = {
  inverted?: boolean;
  compact?: boolean;
  nav?: boolean;
  className?: string;
};

export function BrandLogo({ inverted = false, compact = false, nav = false, className = "" }: BrandLogoProps) {
  const gradientId = useId();

  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Codematic Labs">
      <div className={nav ? "grid size-9 shrink-0 place-items-center" : "grid size-11 shrink-0 place-items-center rounded-full bg-logo-badge shadow-logo"}>
        <svg viewBox="0 0 48 48" className={nav ? "size-9" : "size-8"} aria-hidden="true">
          <defs>
            <linearGradient id={gradientId} x1="8" y1="8" x2="40" y2="41" gradientUnits="userSpaceOnUse">
              <stop stopColor="var(--logo-gradient-start)" />
              <stop offset="1" stopColor="var(--logo-gradient-end)" />
            </linearGradient>
          </defs>
          <path d="M24 5C21.5 12.8 14.4 13.7 10.6 20.1 6.2 27.5 11.2 38.3 22.2 42.5 18.8 37.6 17.8 32.9 19.7 28.5 21.7 23.8 26.9 21.1 29.7 16.5 31.9 12.8 29.7 8 24 5Z" fill={`url(#${gradientId})`} />
          <path d="M24 43C26.5 35.2 33.6 34.3 37.4 27.9 41.8 20.5 36.8 9.7 25.8 5.5 29.2 10.4 30.2 15.1 28.3 19.5 26.3 24.2 21.1 26.9 18.3 31.5 16.1 35.2 18.3 40 24 43Z" fill={`url(#${gradientId})`} opacity="0.9" />
        </svg>
      </div>
      {!compact && (
        <div className="min-w-0 leading-none">
          <div className={`whitespace-nowrap font-display text-sm font-extrabold tracking-[0.15em] ${inverted ? "text-nav-foreground" : "text-brand-ink"}`}>
            CODEMATIC LABS
          </div>
          {!nav && <div className="mt-2 flex items-center gap-2 whitespace-nowrap text-[0.46rem] font-bold tracking-[0.14em] text-muted-foreground">
            <span className="h-px w-3 bg-border" />
            BUILDING SOFTWARE. DELIVERING SOLUTIONS.
            <span className="h-px w-3 bg-border" />
          </div>}
        </div>
      )}
    </div>
  );
}
