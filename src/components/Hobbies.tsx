import { ChefHat, Scissors, Music2 } from "lucide-react";
import Eyebrow from "@/components/Eyebrow";
import { Card } from "@/components/ui/card";
import { Blob } from "@/components/Decor";

const hobbies = [
  {
    icon: ChefHat,
    name: "Baking",
    blurb: "An ever-growing cookie repertoire and endless birthday cake attempts.",
    iconBg: "bg-blush-soft",
    iconColor: "text-forest",
    blobColor: "fill-blush/40",
  },
  {
    icon: Scissors,
    name: "Crocheting",
    blurb: "Working through amigurumi patterns and handmade clothes one skein at a time.",
    iconBg: "bg-taupe-soft",
    iconColor: "text-olive",
    blobColor: "fill-taupe/40",
  },
  {
    icon: Music2,
    name: "Bollywood Dance",
    blurb: "Trained for 12 years and competing on Northeastern's Bollywood Fusion team.",
    iconBg: "bg-sage-soft",
    iconColor: "text-primary",
    blobColor: "fill-primary/10",
  },
];

export default function Hobbies() {
  return (
    <section id="hobbies" className="border-t border-border py-24">
      <div className="container max-w-[1080px]">
        <div className="mb-12 max-w-[640px]">
          <Eyebrow dot="bg-blush">beyond the code</Eyebrow>
          <h2 className="text-[clamp(28px,4vw,40px)]">What I do in My Free Time</h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          {hobbies.map((h) => (
            <Card key={h.name} className="overflow-hidden">
              <Blob
                className="pointer-events-none absolute -right-6 -top-6 h-24 w-24"
                colorClassName={h.blobColor}
              />
              <div className={`relative mb-4 flex h-11 w-11 items-center justify-center rounded-full ${h.iconBg}`}>
                <h.icon size={20} className={h.iconColor} strokeWidth={1.75} />
              </div>
              <h3 className="relative text-[17px] font-semibold">{h.name}</h3>
              <p className="relative mt-2 text-sm text-muted">{h.blurb}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}