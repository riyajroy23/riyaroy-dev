import { useState } from "react";

/**
 * Looks for /headshot.png in the public/ folder. If it's not there (or fails to
 * load), falls back to a soft monogram badge — no placeholder face is faked.
 * To use your own photo: drop a square-ish image at `public/headshot.png`.
 */
export default function Avatar() {
  const [errored, setErrored] = useState(false);

  return (
    <div className="relative h-[120px] w-[120px] flex-none">
      <svg viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full overflow-visible">
        <circle
          cx="50"
          cy="50"
          r="48"
          className="fill-none stroke-primary [stroke-dasharray:100] [stroke-width:1.6]"
          pathLength={100}
        />
      </svg>

      <span className="absolute -bottom-2.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-sm bg-foreground px-2 py-[3px] font-mono text-[10px] text-background">
       &middot; face detected &middot;
      </span>

      {!errored ? (
        <img
          src="/headshot.png"
          alt="Riya Roy"
          onError={() => setErrored(true)}
          className="h-full w-full rounded-full border-2 border-background object-cover"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full border-2 border-background bg-gradient-to-br from-blush via-taupe to-olive font-display text-2xl font-semibold text-white">
          RR
        </div>
      )}
    </div>
  );
}
