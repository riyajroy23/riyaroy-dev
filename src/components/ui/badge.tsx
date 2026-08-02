import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm border font-mono text-[11.5px] tracking-wide px-2 py-[3px] whitespace-nowrap",
  {
    variants: {
      variant: {
        primary: "bg-primary-soft text-muted border-primary/25",
        accent: "bg-accent-soft text-muted border-accent/25",
        sage: "bg-sage-soft text-muted border-sage/30",
        olive: "bg-olive-soft text-muted border-olive/30",
        blush: "bg-blush-soft text-muted border-blush/50",
        taupe: "bg-taupe-soft text-muted border-taupe/50",
        outline: "bg-card text-muted-foreground border-border",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
