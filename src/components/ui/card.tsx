import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "group relative rounded-sm border border-border bg-card p-[26px_22px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(20,20,20,0.06)]",
        className
      )}
      {...props}
    >
      {/* corner-bracket signature, echoes the hero bounding box */}
      <span className="pointer-events-none absolute -left-px -top-px h-3.5 w-3.5 border-l-2 border-t-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      <span className="pointer-events-none absolute -bottom-px -right-px h-3.5 w-3.5 border-b-2 border-r-2 border-primary opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {children}
    </div>
  )
);
Card.displayName = "Card";

export { Card };
