import { motion } from "framer-motion";
import { MaskReveal, Reveal } from "./Reveal";

export function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-charcoal px-6 py-32 text-ivory lg:px-16 lg:py-48">
      <motion.div
        animate={{ x: [0, 80, -40, 0], y: [0, -60, 40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute left-1/4 top-1/3 h-[700px] w-[700px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.09 80 / 0.22), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -60, 30, 0], y: [0, 40, -30, 0] }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute right-1/4 bottom-1/3 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.025 75 / 0.16), transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl">
        <div className="text-center">
          <Reveal><span className="eyebrow text-gold">— Begin · Doon Valley</span></Reveal>
          <h2 className="mt-8 font-display text-[clamp(2.75rem,8vw,8rem)] leading-[0.95] tracking-tight">
            <MaskReveal>Let's compose</MaskReveal>
            <br />
            <MaskReveal><em className="italic text-gold-soft">your quiet retreat.</em></MaskReveal>
          </h2>
          <Reveal delay={0.3}>
            <p className="mx-auto mt-10 max-w-xl text-base leading-[1.9] text-ivory/65 md:text-lg">
              We accept a small number of commissions each year — homes, hotels and ateliers across India and beyond. Tell us about your project.
            </p>
          </Reveal>
          <Reveal delay={0.5}>
            <a
              href="mailto:studio@maisonnoir.in?subject=Consultation%20Enquiry"
              className="group relative mt-12 inline-flex items-center gap-4 overflow-hidden rounded-full bg-gold px-10 py-5 text-[11px] uppercase tracking-[0.32em] text-ink"
            >
              <span className="absolute inset-0 -translate-x-full bg-ivory transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0" />
              <span className="relative z-10">Book a Private Consultation</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-2">→</span>
              <span className="absolute inset-0 -z-10 rounded-full bg-gold blur-2xl opacity-50" />
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.6}>
          <div className="mx-auto mt-20 grid max-w-5xl grid-cols-1 gap-px overflow-hidden rounded-sm border border-ivory/10 bg-ivory/10 md:grid-cols-3">
            <div className="group bg-charcoal p-8 transition-colors duration-500 hover:bg-ink md:p-10">
              <span className="eyebrow text-gold/80">Studio</span>
              <p className="mt-5 font-display text-xl leading-snug text-ivory">
                42 Rajpur Road<br />Hathibarkala Estate<br />Dehradun, Uttarakhand 248001
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ivory/50">By appointment</p>
            </div>
            <div className="group bg-charcoal p-8 transition-colors duration-500 hover:bg-ink md:p-10">
              <span className="eyebrow text-gold/80">Direct</span>
              <p className="mt-5 font-display text-xl leading-snug text-ivory">
                <a href="mailto:studio@maisonnoir.in" className="transition-colors hover:text-gold-soft">studio@maisonnoir.in</a><br />
                <a href="tel:+91xxxxxxxxxx" className="transition-colors hover:text-gold-soft">+91 xxx xxx xxxx</a>
              </p>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ivory/50">Replies within 48 hours</p>
            </div>
            <div className="group bg-charcoal p-8 transition-colors duration-500 hover:bg-ink md:p-10">
              <span className="eyebrow text-gold/80">Hours</span>
              <ul className="mt-5 space-y-2 font-display text-lg text-ivory">
                <li className="flex justify-between gap-4"><span>Mon — Fri</span><span className="text-ivory/70">10:00 — 19:00</span></li>
                <li className="flex justify-between gap-4"><span>Saturday</span><span className="text-ivory/70">By appointment</span></li>
                <li className="flex justify-between gap-4"><span>Sunday</span><span className="text-ivory/70">Closed</span></li>
              </ul>
              <p className="mt-6 text-xs uppercase tracking-[0.24em] text-ivory/50">India Standard Time</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
