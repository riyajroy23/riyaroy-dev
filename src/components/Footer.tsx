import { Mail } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { buttonVariants } from "@/components/ui/button";
import { contact } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border py-16">
      <div className="container max-w-[1080px]">
        <Eyebrow>contact</Eyebrow>
        <h2 className="mb-3.5 text-[clamp(28px,4vw,40px)]">Let&apos;s connect!</h2>
        <p className="mb-8 max-w-[520px] text-base text-muted">
          I&apos;m graduating in December 2026 and looking for full-time software engineering
          roles. If you have any questions or would like to talk more about my work, the fastest way to reach me is email.
        </p>

        <div className="mb-14 flex flex-wrap gap-3.5">
          <a href={`mailto:${contact.email}`} className={cn(buttonVariants({ variant: "primary" }))}>
            <Mail size={14} /> {contact.email}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(buttonVariants({ variant: "outline" }))}
          >
            {contact.linkedinLabel}
          </a>
        </div>

        <div className="flex flex-wrap justify-between gap-2.5 border-t border-border pt-6 font-mono text-[11.5px] text-muted-foreground">
          <span>
            {contact.name.toLowerCase()} · {contact.location.toLowerCase()}
          </span>
          <span>&copy; {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
