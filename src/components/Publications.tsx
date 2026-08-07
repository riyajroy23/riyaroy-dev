import Eyebrow from "@/components/Eyebrow";
import { publications } from "@/data/resume";

export default function Publications() {
  return (
    <section id="publications" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow dot="bg-sage">publications &amp; patents</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]"> Written and Published Work</h2>
        </div>

        <div>
          {publications.map((pub, i) => (
            <div
              key={pub.title}
              className={`grid grid-cols-1 gap-1.5 py-5 md:grid-cols-[150px_1fr] md:gap-6 ${
                i !== publications.length - 1 ? "border-b border-border" : ""
              }`}
            >
              <div className="font-mono text-[12.5px] text-muted-foreground">{pub.date}</div>
              <div>
                <div className="mb-1 font-display text-[17px] font-semibold">{pub.title}</div>
                <div className="font-mono text-[12.5px] text-muted">{pub.meta}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
