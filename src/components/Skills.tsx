import Eyebrow from "@/components/Eyebrow";
import { skills } from "@/data/resume";

const groups = [
  { label: "languages", items: skills.languages },
  { label: "frameworks & libraries", items: skills.frameworks },
  { label: "developer tools", items: skills.tools },
  { label: "certifications", items: skills.certifications },
];

export default function Skills() {
  return (
    <section id="skills" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow dot="bg-taupe">skills</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]">Tools I reach for.</h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12">
          {groups.map((g) => (
            <div key={g.label}>
              <Eyebrow>{g.label}</Eyebrow>
              <div className="flex flex-wrap gap-2">
                {g.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-sm border border-border bg-card px-[10px] py-[5px] font-mono text-xs text-muted"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
