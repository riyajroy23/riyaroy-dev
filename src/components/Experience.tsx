import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import CompanyLogo from "@/components/CompanyLogo";
import { experience } from "@/data/resume";

const LOGO_ACCENTS = ["bg-primary/10", "bg-olive/10", "bg-forest/10", "bg-sage/10"];

export default function Experience() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const count = experience.length;
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (i: number) => setIndex(((i % count) + count) % count);
  const next = () => goTo(index + 1);
  const prev = () => goTo(index - 1);

  // autoplay — pauses on hover/focus, skipped entirely for reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (paused || prefersReduced) return;
    timerRef.current = setInterval(() => setIndex((i) => (i + 1) % count), 6000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, count]);

  // left/right arrow key navigation
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [index]);

  return (
    <section id="experience" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-[640px]">
            <Eyebrow dot="bg-olive">experience</Eyebrow>
            <h2 className="text-[clamp(28px,4vw,40px)]">Where I&apos;ve Worked</h2>
          </div>
          <span className="font-mono text-[12.5px] text-muted-foreground">
            {String(index + 1).padStart(2, "0")} / {String(count).padStart(2, "0")}
          </span>
        </div>

        <div
          className="relative px-8 sm:px-10"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-sm border border-border bg-card">
            <div
              className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {experience.map((job, i) => (
                <div key={job.company} className="w-full flex-none p-8 sm:p-10">
                  <div className="mb-6 flex flex-wrap items-start justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <CompanyLogo slug={job.slug} name={job.company} accent={LOGO_ACCENTS[i % LOGO_ACCENTS.length]} />
                      <div>
                        <div className="font-display text-[19px] font-semibold">{job.role}</div>
                        <div className="font-mono text-[13px] text-muted">
                          {job.company} · {job.location}
                        </div>
                      </div>
                    </div>
                    <span className="whitespace-nowrap font-mono text-[12.5px] text-muted-foreground">
                      {job.dates}
                    </span>
                  </div>
                  <ul className="list-disc space-y-2 pl-[18px] text-[15px] text-foreground">
                    {job.bullets.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous experience"
            onClick={prev}
            className="absolute left-0 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:bg-foreground hover:text-background"
          >
            <ChevronLeft size={16} />
          </button>
          <button
            type="button"
            aria-label="Next experience"
            onClick={next}
            className="absolute right-0 top-1/2 flex h-9 w-9 -translate-y-1/2 translate-x-1/2 items-center justify-center rounded-full border border-border bg-background text-foreground shadow-sm transition hover:bg-foreground hover:text-background"
          >
            <ChevronRight size={16} />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {experience.map((job, i) => (
            <button
              type="button"
              key={job.company}
              aria-label={`Go to ${job.company}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-sm transition-all ${
                i === index ? "w-6 bg-primary" : "w-2 bg-border hover:bg-muted-foreground"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}