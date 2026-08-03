import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navItems } from "@/data/resume";
import { cn } from "@/lib/utils";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const sections = document.querySelectorAll("main section[id], footer[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="fixed inset-x-0 top-0 z-[100] border-b border-border bg-background/85 backdrop-blur-md">
      <div className="container flex h-[60px] max-w-[1080px] items-center justify-between">
        <a href="#top" className="flex items-center gap-1.5 font-mono text-sm font-medium">
          <span className="text-primary">[</span>RR<span className="text-primary">]</span>
        </a>

        <button
          className="p-2 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>

        <ul
          className={cn(
            "font-mono text-[12.5px] tracking-wide md:static md:flex md:flex-row md:gap-7 md:translate-y-0 md:border-none md:bg-transparent md:p-0",
            "fixed inset-x-0 top-[60px] flex flex-col border-b border-border bg-background p-5 transition-transform duration-300 md:transition-none",
            open ? "translate-y-0" : "-translate-y-[130%] md:translate-y-0"
          )}
        >
          {navItems.map((item) => (
            <li key={item.id} className="w-full border-b border-border md:w-auto md:border-none">
              <a
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={cn(
                  "relative block w-full py-3 text-muted-foreground transition-colors hover:text-foreground md:w-auto md:py-1",
                  "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 md:after:content-['']",
                  active === item.id && "text-foreground md:after:w-full"
                )}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}