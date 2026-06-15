import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Reveal, MaskReveal } from "./Reveal";

const steps = [
  { n: "I", t: "Discovery", d: "We listen — to the architecture, to the light, and to the lives that will pass through it." },
  { n: "II", t: "Concept", d: "A guiding atmosphere is drawn: material direction, palette, and the emotional register of the space." },
  { n: "III", t: "Visualization", d: "Photoreal renderings let us refine every shadow and surface long before construction begins." },
  { n: "IV", t: "Execution", d: "Trusted European ateliers craft the work — overseen weekly, on site, by the studio." },
  { n: "V", t: "Final Styling", d: "The last layer — books, art, linens, light — placed with the same care as the architecture." },
];

export function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 30%"] });
  const lineH = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" ref={ref} className="bg-ivory px-6 py-32 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-6xl">
        <div className="mb-24 text-center">
          <Reveal><span className="eyebrow">— Process</span></Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1] tracking-tight">
            <MaskReveal>Five movements</MaskReveal>{" "}
            <MaskReveal><em className="italic text-beige-deep">— one composition.</em></MaskReveal>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[28px] top-0 bottom-0 w-px bg-border md:left-1/2" />
          <motion.div
            style={{ height: lineH, background: "linear-gradient(to bottom, transparent, var(--gold) 12%, var(--gold) 88%, transparent)", boxShadow: "0 0 12px 2px var(--gold), 0 0 28px 4px oklch(0.78 0.09 80 / 0.55)" }}
            className="absolute left-[28px] top-0 w-[2px] md:left-1/2 md:-translate-x-[0.5px]"
          />
          <motion.div
            style={{ height: lineH }}
            className="pointer-events-none absolute left-[28px] top-0 w-[2px] md:left-1/2 md:-translate-x-[0.5px]"
          >
            <span className="absolute bottom-0 left-1/2 h-3 w-3 -translate-x-1/2 translate-y-1/2 rounded-full bg-gold" style={{ boxShadow: "0 0 18px 6px var(--gold), 0 0 40px 10px oklch(0.78 0.09 80 / 0.6)" }} />
          </motion.div>

          <ul className="space-y-24">
            {steps.map((s, i) => (
              <motion.li
                key={s.n}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className={`relative grid grid-cols-[60px_1fr] gap-6 md:grid-cols-2 md:gap-20 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
              >
                <div className={`flex md:items-center ${i % 2 ? "md:justify-start md:pl-16" : "md:justify-end md:pr-16 md:text-right"}`}>
                  <div className="group">
                    <span className="eyebrow text-beige-deep">Step {s.n}</span>
                    <h3 className="mt-3 font-display text-4xl md:text-5xl transition-colors group-hover:text-beige-deep">{s.t}</h3>
                    <p className="mt-4 max-w-md text-muted-foreground leading-relaxed md:max-w-sm">{s.d}</p>
                  </div>
                </div>
                <div className={`absolute left-0 top-2 flex h-14 w-14 items-center justify-center rounded-full border border-ink bg-ivory font-display text-lg md:left-1/2 md:-translate-x-1/2`}>
                  {s.n}
                </div>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
