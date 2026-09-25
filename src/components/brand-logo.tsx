import logoAsset from "../assets/codematic-labs-full-logo.png";
const logoSrc = logoAsset;

type BrandLogoProps = {
  inverted?: boolean;
  compact?: boolean;
  nav?: boolean;
  className?: string;
};

export function BrandLogo({ inverted = false, compact = false, nav = false, className = "" }: BrandLogoProps) {
  if (nav) {
    // Show only the icon + wordmark (top of the lockup) in the navbar.
    // The full stacked logo (incl. tagline) is cropped out via object-cover + object-top.
    return (
      <img
        src={logoSrc}
        alt="Codematic Labs"
        className={`brand-logo-nav object-cover object-top ${className}`}
        data-inverted={inverted || undefined}
      />
    );
  }

  return (
    <img
      src={logoSrc}
      alt="Codematic Labs"
      className={`${compact ? "max-w-24 object-cover object-left" : "w-auto"} h-20 ${className}`}
      data-inverted={inverted || undefined}
    />
  );
}
