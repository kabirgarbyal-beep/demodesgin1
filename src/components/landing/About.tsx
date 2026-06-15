import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, MaskReveal } from "./Reveal";
import aboutImg from "@/assets/about.jpg";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section id="studio" ref={ref} className="relative overflow-hidden bg-ink px-6 py-32 text-ivory lg:px-16 lg:py-48">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-20">
        <div className="relative lg:col-span-5">
          <div className="relative h-[560px] overflow-hidden md:h-[680px]">
            <motion.img src={aboutImg} alt="Studio" loading="lazy" style={{ y: imgY }} className="h-[120%] w-full object-cover" />
          </div>
          <div className="absolute -bottom-6 -right-6 hidden border border-gold/30 bg-charcoal p-6 md:block">
            <span className="eyebrow text-gold">Founder</span>
            <p className="mt-2 font-display text-2xl">Élise Marchand</p>
          </div>
        </div>

        <div className="lg:col-span-7 lg:pt-16">
          <Reveal><span className="eyebrow text-gold">— The Studio</span></Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5vw,4.5rem)] leading-[1.05] tracking-tight">
            <MaskReveal>A practice devoted to</MaskReveal>{" "}
            <MaskReveal><em className="italic text-gold-soft">the quiet poetry</em></MaskReveal>{" "}
            <MaskReveal>of interior architecture.</MaskReveal>
          </h2>

          <Reveal delay={0.2}>
            <p className="mt-10 max-w-xl text-base leading-[1.9] text-ivory/70 md:text-lg">
              For more than fifteen years, Maison Noir has shaped homes, hotels and ateliers across Europe and the Middle East. We work slowly, intentionally — designing for the way light moves through a room, the way a hand rests on a surface, the way a space holds a life.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-10 border-t border-ivory/10 pt-10 md:grid-cols-3">
            {[
              ["Philosophy", "Less, but finer."],
              ["Materials", "Sourced, never specified."],
              ["Approach", "One house at a time."],
            ].map(([k, v], i) => (
              <Reveal key={k} delay={0.1 * i}>
                <div>
                  <span className="eyebrow text-gold/80">{k}</span>
                  <p className="mt-3 font-display text-2xl">{v}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
