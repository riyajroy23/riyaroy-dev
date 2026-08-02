import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Tailwind background class for the small marker dot, e.g. "bg-olive" */
  dot?: string;
}

export default function Eyebrow({ children, className, dot = "bg-primary" }: EyebrowProps) {
  return (
    <p className={cn("mb-3.5 flex items-center gap-2 font-mono text-[12.5px] tracking-wide text-muted", className)}>
      <span className={cn("h-[7px] w-[7px] flex-none rounded-sm", dot)} />
      {children}
    </p>
  );
}
