import { useState } from "react";

interface CompanyLogoProps {
  slug: string;
  name: string;
  /** Tailwind background class used behind the fallback initials */
  accent?: string;
}

function getInitials(name: string) {
  return name
    .replace(/\(.*?\)/g, "") // drop parenthetical like "(Manulife)"
    .trim()
    .split(/\s+/)
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/**
 * Looks for /companies/<slug>.png (or .jpg — see note below) in public/.
 * Falls back to a two-letter monogram on a soft tint if no logo exists yet.
 */
export default function CompanyLogo({ slug, name, accent = "bg-muted/10" }: CompanyLogoProps) {
  const [errored, setErrored] = useState(false);

  return (
    <div
      className={`flex h-20 w-20 flex-none items-center justify-center overflow-hidden rounded-xl border border-muted/10 ${
        errored ? accent : "bg-white"
      }`}
    >
      {!errored ? (
        <img
          src={`/companies/${slug}.png`}
          alt={`${name} logo`}
          onError={() => setErrored(true)}
          className="h-full w-full object-contain p-1.5"
        />
      ) : (
        <span className="font-display text-xs font-semibold text-foreground/70">{getInitials(name)}</span>
      )}
    </div>
  );
}