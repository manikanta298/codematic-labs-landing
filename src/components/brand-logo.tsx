import logoAsset from "../assets/codematic-mark.png.asset.json";

type BrandLogoProps = {
  inverted?: boolean;
  compact?: boolean;
  nav?: boolean;
  className?: string;
};

export function BrandLogo({ inverted = false, compact = false, nav = false, className = "" }: BrandLogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`} aria-label="Codematic Labs">
      <img
        src={logoAsset.url}
        alt=""
        aria-hidden="true"
        className={`${nav ? "size-10 sm:size-11" : "size-12"} shrink-0 object-contain`}
      />
      {!compact && (
        <span className={`whitespace-nowrap font-display text-sm font-bold tracking-[0.12em] ${inverted ? "text-nav-foreground" : "text-foreground"}`}>
          CODEMATIC LABS
        </span>
      )}
    </div>
  );
}
