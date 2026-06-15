import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "./Reveal";

const items = [
  { q: "They didn't decorate our home. They composed it — slowly, like a piece of music.", a: "Isabelle R.", r: "Private Client, Milan" },
  { q: "Every material was chosen as if it would outlast us. It probably will.", a: "Mr. & Mrs. Hadid", r: "Residence, Dubai" },
  { q: "A studio that listens before it draws. The result is something we couldn't have asked for, only recognized.", a: "Théo Lambert", r: "Hotel Brunelle, Paris" },
  { q: "Beyond elegant — quietly intelligent. Each room rewards a second, a third visit.", a: "Anya Sørensen", r: "Penthouse, Copenhagen" },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-beige px-6 py-32 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 text-center">
          <Reveal><span className="eyebrow">— In Their Words</span></Reveal>
          <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1] tracking-tight">
            <MaskReveal>What our clients</MaskReveal>{" "}
            <MaskReveal><em className="italic">tell us, after.</em></MaskReveal>
          </h2>
        </div>

        <div className="relative">
          <div className="flex gap-8 overflow-hidden">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
              className="flex shrink-0 gap-8"
            >
              {[...items, ...items, ...items].map((t, i) => (
                <article key={i} className="glass w-[380px] shrink-0 rounded-sm p-10 shadow-soft md:w-[460px]">
                  <span className="font-display text-6xl leading-none text-gold">"</span>
                  <p className="mt-2 font-display text-2xl leading-[1.4] text-ink">{t.q}</p>
                  <div className="mt-8 border-t border-ink/10 pt-5">
                    <p className="font-display text-lg">{t.a}</p>
                    <p className="mt-1 eyebrow">{t.r}</p>
                  </div>
                </article>
              ))}
            </motion.div>
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-beige to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-beige to-transparent" />
        </div>
      </div>
    </section>
  );
}
