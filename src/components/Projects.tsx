import Eyebrow from "@/components/Eyebrow";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import ProjectThumb from "@/components/ProjectThumb";
import { projects } from "@/data/resume";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow dot="bg-forest">projects</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]">Things I&apos;ve built on the side.</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <Card key={p.name}>
              <ProjectThumb slug={p.slug} name={p.name} kind={p.kind} />
              <Badge variant={p.tagVariant}>{p.tag}</Badge>
              <h3 className="mt-3.5 text-[19px] font-semibold">{p.name}</h3>
              <p className="my-3 text-sm text-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-sm border border-border px-[7px] py-[2px] font-mono text-[10.5px] text-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}