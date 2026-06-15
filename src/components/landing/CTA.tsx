import { motion } from "framer-motion";
import { MaskReveal, Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-40 text-ivory lg:px-16 lg:py-56">
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[700px] w-[700px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.09 80 / 0.25), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -60, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.025 75 / 0.18), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-5xl text-center">
        <Reveal><span className="eyebrow text-gold">— Begin</span></Reveal>
        <h2 className="mt-8 font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight">
          <MaskReveal>Let's create</MaskReveal>
          <br />
          <MaskReveal><em className="italic text-gold-soft">your dream space.</em></MaskReveal>
        </h2>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-10 max-w-xl text-base leading-[1.9] text-ivory/65 md:text-lg">
            We accept a small number of commissions each year. Tell us about your project — we read every message.
          </p>
        </Reveal>
        <Reveal delay={0.5}>
          <a
            href="mailto:studio@maisonnoir.co"
            className="group relative mt-14 inline-flex items-center gap-4 overflow-hidden rounded-full bg-gold px-10 py-5 text-xs uppercase tracking-[0.32em] text-ink"
          >
            <span className="absolute inset-0 -translate-x-full bg-ivory transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
            <span className="relative z-10">Book a Consultation</span>
            <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">→</span>
            <span className="absolute inset-0 -z-10 rounded-full bg-gold blur-2xl opacity-60 animate-pulse" />
          </a>
        </Reveal>
        <Reveal delay={0.7}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-4 text-xs uppercase tracking-[0.28em] text-ivory/60">
            <span>studio@maisonnoir.co</span>
            <span className="hidden h-3 w-px bg-ivory/20 md:block" />
            <span>+33 1 84 79 22 14</span>
            <span className="hidden h-3 w-px bg-ivory/20 md:block" />
            <span>14 Rue de Sévigné, Paris</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
