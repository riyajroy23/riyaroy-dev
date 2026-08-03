import Eyebrow from "@/components/Eyebrow";
import { Badge } from "@/components/ui/badge";
import { education } from "@/data/resume";

export default function Education() {
  return (
    <section id="education" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow dot="bg-olive">education</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]">Where I studied.</h2>
        </div>

        <div className="rounded-sm border border-border bg-card p-8">
          <div className="mb-1.5 flex flex-wrap justify-between gap-3">
            <span className="font-display text-xl font-semibold">{education.school}</span>
            <span className="font-mono text-[12.5px] text-muted">{education.location}</span>
          </div>
          <p className="mb-[18px] text-[15px] text-foreground">{education.degree}</p>

          <div className="mb-[18px] flex flex-wrap gap-2.5">
            <Badge variant="primary">{education.gpa}</Badge>
            {education.honors.map((h) => (
              <Badge key={h} variant="accent">
                {h}
              </Badge>
            ))}
          </div>

          <Eyebrow>relevant coursework</Eyebrow>
          <p className="text-sm leading-relaxed text-muted">{education.coursework.join(" · ")}</p>
        </div>
      </div>
    </section>
  );
}
