import { Mail, Github, Linkedin } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Avatar from "@/components/Avatar";
import { contact } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Hero() {
  return (
    <header id="top" className="relative flex min-h-[92vh] items-center overflow-hidden pt-[60px]">
      <div className="bg-grid pointer-events-none absolute inset-0 opacity-50" />

      <div className="container relative z-[2] max-w-[1080px]">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <div className="relative -ml-[22px] mb-7 inline-block p-[18px_22px_22px]">
              <svg
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                className="pointer-events-none absolute inset-0 h-full w-full overflow-visible"
              >
                <rect
                  x="1"
                  y="1"
                  width="98"
                  height="98"
                  rx="1"
                  pathLength={100}
                  className="fill-none stroke-primary [stroke-dasharray:100] [stroke-width:1.6] motion-safe:animate-drawbox motion-reduce:[stroke-dashoffset:0]"
                />
              </svg>
              <span className="absolute -top-[11px] left-4 rounded-sm bg-foreground px-2 py-[3px] font-mono text-[11px] text-background opacity-0 motion-safe:animate-tagfade motion-reduce:opacity-100">
                class: software engineer &middot; confidence: 1.00
              </span>
              <h1 className="text-[clamp(44px,8vw,84px)] leading-[0.98]">Riya Roy</h1>
            </div>

            <p className="mb-[26px] mt-5 font-mono text-[clamp(14px,2vw,17px)] tracking-wide text-muted">
              Software Engineer — <b className="font-medium text-foreground">AI/ML &amp; Full-Stack</b> · Northeastern &apos;26
            </p>

            <p className="mb-9 max-w-[560px] text-[clamp(16px,2.2vw,19px)] leading-relaxed text-foreground">
              I build the bridge between people and systems, because the best technology is only impressive if someone enjoys using it.
              Whether I'm writing code or choreographing movement, I'm always looking for rhythm, flow, and the moments where complexity becomes invisible.
            </p>

            <div className="flex flex-wrap gap-3">
              <a href={`mailto:${contact.email}`} className={cn(buttonVariants({ variant: "primary" }))}>
                <Mail size={14} /> email me
              </a>
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Github size={14} /> github
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={cn(buttonVariants({ variant: "outline" }))}
              >
                <Linkedin size={14} /> linkedin
              </a>
            </div>
          </div>

          <Avatar />
        </div>
      </div>
    </header>
  );
}
