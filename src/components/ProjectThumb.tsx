import { useState } from "react";
import { Aperture, MonitorSmartphone, type LucideIcon } from "lucide-react";

const fallbackIcon: Record<"vision" | "webapp", LucideIcon> = {
  vision: Aperture,
  webapp: MonitorSmartphone,
};

interface ProjectThumbProps {
  slug: string;
  name: string;
  kind: "vision" | "webapp";
}

/**
 * Looks for /projects/<slug>.jpg in public/. If it's missing, shows a
 * designed placeholder (icon + hatch pattern + corner brackets) instead
 * of empty space, so the card looks intentional either way.
 */
export default function ProjectThumb({ slug, name, kind }: ProjectThumbProps) {
  const [errored, setErrored] = useState(false);
  const Icon = fallbackIcon[kind];

  return (
    <div className="relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-sm border border-border">
      {!errored ? (
        <img
          src={`/projects/${slug}.jpg`}
          alt={name}
          onError={() => setErrored(true)}
          className="h-full w-full object-cover"
        />
      ) : (
        <div
          className="flex h-full w-full flex-col items-center justify-center gap-2 bg-card"
          style={{
            backgroundImage:
              "repeating-linear-gradient(135deg, hsl(var(--border)) 0px, hsl(var(--border)) 1px, transparent 1px, transparent 10px)",
          }}
        >
          <Icon size={24} strokeWidth={1.5} className="text-muted-foreground" />
          <span className="font-mono text-[10px] tracking-wide text-muted-foreground">add screenshot</span>
        </div>
      )}
      <span className="pointer-events-none absolute -left-px -top-px h-3 w-3 border-l-2 border-t-2 border-primary/60" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3 w-3 border-b-2 border-r-2 border-primary/60" />
    </div>
  );
}