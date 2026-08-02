import Eyebrow from "@/components/Eyebrow";
import { NodeNetwork } from "@/components/Decor";

const stats = [
  { label: "gpa", value: "3.94 / 4.0", accent: "bg-primary" },
  { label: "honors", value: "Honor's Program", accent: "bg-olive" },
  { label: "graduation", value: "Dec 2026", accent: "bg-forest" },
  { label: "patents", value: "2 Issued", accent: "bg-sage" },
  { label: "publications", value: "3 (IEEE)", accent: "bg-blush" },
];

export default function About() {
  return (
    <section id="about" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow>about</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]">Building at the intersection of ML and product.</h2>
        </div>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_260px]">
          <div className="max-w-[720px] space-y-4 text-[17px] text-foreground">
            <p>
              I&apos;m a senior at Northeastern University majoring in Computer Science and
              concentrating in AI, graduating in December 2026. Across three co-ops and a
              year leading a student engineering team, I&apos;ve shipped computer-vision systems
              for robotics calibration, data pipelines processing hundreds of thousands of records
              a day, and full-stack platforms used by real student communities.
            </p>
            <p>
              I&apos;m drawn to problems where machine learning has to endure contact with a real
              product: models that need to run in under five seconds, pipelines that can&apos;t
              silently fail, interfaces that make a model&apos;s reasoning legible to the person
              using it. Outside of coursework, I enjoy research and creation. I hold two approved
              U.S. patents and have published papers on leveraging AI for healthcare.
            </p>
          </div>

          <div className="hidden h-[240px] lg:block">
            <NodeNetwork />
          </div>
        </div>

        {/* horizontal stat strip (was a vertical list) */}
        <div className="mt-10 flex flex-wrap gap-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="min-w-[130px] flex-1 overflow-hidden rounded-sm border border-border bg-card"
            >
              <div className={`h-[3px] w-full ${s.accent}`} />
              <div className="px-4 py-3.5">
                <div className="font-mono text-[11px] tracking-wide text-muted">{s.label}</div>
                <div className="mt-1 text-sm font-medium">{s.value}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}