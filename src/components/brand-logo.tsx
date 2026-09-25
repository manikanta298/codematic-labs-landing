import logoAsset from "../assets/codematic-labs-full-logo.png.asset.json";

type BrandLogoProps = {
  inverted?: boolean;
  compact?: boolean;
  nav?: boolean;
  className?: string;
};

export function BrandLogo({ inverted = false, compact = false, nav = false, className = "" }: BrandLogoProps) {
  return (
    <img
      src={logoAsset.url}
      alt="Codematic Labs"
      className={`${nav ? "h-14 sm:h-16" : "h-20"} ${compact ? "max-w-24 object-cover object-left" : "w-auto"} ${className}`}
      data-inverted={inverted || undefined}
    />
  );
}
