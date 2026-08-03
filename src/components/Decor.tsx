import { cn } from "@/lib/utils";

/**
 * Abstract node/edge graphic — a nod to the ML feature-graphs and
 * detection models mentioned throughout the resume. Purely decorative.
 */
export function NodeNetwork({ className }: { className?: string }) {
  const nodes: [number, number][] = [
    [40, 40],
    [140, 20],
    [230, 60],
    [90, 110],
    [200, 140],
    [50, 190],
    [160, 220],
    [230, 200],
  ];
  const edges: [number, number][] = [
    [0, 1],
    [1, 2],
    [1, 3],
    [3, 4],
    [2, 4],
    [3, 5],
    [4, 6],
    [5, 6],
    [6, 7],
    [4, 7],
  ];

  return (
    <svg viewBox="0 0 270 250" className={cn("h-full w-full", className)} fill="none">
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a][0]}
          y1={nodes[a][1]}
          x2={nodes[b][0]}
          y2={nodes[b][1]}
          className="stroke-olive/25"
          strokeWidth={1}
        />
      ))}
      {nodes.map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r={i % 3 === 0 ? 5 : 3.5}
          className={i % 3 === 0 ? "fill-primary/70" : i % 2 === 0 ? "fill-forest/60" : "fill-sage/70"}
        />
      ))}
    </svg>
  );
}

/**
 * Soft organic blob shape used as a low-opacity background accent behind
 * icons/cards. Pass a Tailwind fill class (e.g. "fill-blush") and sizing
 * via className.
 */
export function Blob({ className, colorClassName = "fill-primary/10" }: { className?: string; colorClassName?: string }) {
  return (
    <svg viewBox="-100 -100 200 200" className={className} aria-hidden="true">
      <path
        className={colorClassName}
        transform="translate(100,100)"
        d="M45.3,-58.3C58.4,-49.7,68.4,-35.4,71.7,-19.7C75,-4,71.6,13,63.6,27.4C55.6,41.8,43,53.6,28.4,60.6C13.8,67.6,-2.8,69.8,-19.1,66.7C-35.4,63.6,-51.4,55.2,-61.6,42.1C-71.8,29,-76.2,11.2,-74.6,-5.9C-73,-23,-65.4,-39.4,-53.4,-48.4C-41.4,-57.4,-25,-59,-9.4,-60.7C6.2,-62.4,32.2,-66.9,45.3,-58.3Z"
      />
    </svg>
  );
}