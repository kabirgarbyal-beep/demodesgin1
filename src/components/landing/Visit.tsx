import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "./Reveal";

export function Visit() {
  return (
    <section id="visit" className="relative overflow-hidden bg-ivory px-6 py-32 lg:px-16 lg:py-44">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><span className="eyebrow text-beige-deep">— Visit · Doon Valley</span></Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1] tracking-tight">
              <MaskReveal>At the foot of</MaskReveal>{" "}
              <MaskReveal><em className="italic text-beige-deep">the Himalayas.</em></MaskReveal>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-base leading-[1.9] text-muted-foreground">
              Our studio sits along Rajpur Road, framed by deodar pines and the quiet line of the Mussoorie hills. Visits are by appointment.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <motion.div
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative aspect-[16/10] w-full overflow-hidden rounded-sm shadow-luxe md:aspect-[21/9]"
          >
            <iframe
              title="Maison Noir — Dehradun, Uttarakhand, India"
              src="https://www.google.com/maps?q=Rajpur+Road,+Dehradun,+Uttarakhand,+India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full grayscale-[40%] contrast-[1.05]"
              style={{ border: 0, filter: "grayscale(35%) contrast(1.05) brightness(0.96)" }}
              allowFullScreen
            />
            {/* gradient veil */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-ink/25 via-transparent to-ink/10" />

            {/* glass overlay card */}
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="absolute bottom-6 left-6 max-w-sm rounded-sm glass p-7 shadow-soft md:bottom-10 md:left-10 md:p-9"
            >
              <span className="eyebrow text-beige-deep">— The Studio</span>
              <p className="mt-3 font-display text-2xl leading-tight text-ink md:text-3xl">
                42 Rajpur Road,<br />Dehradun 248001
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 text-sm text-ink/75">
                <div className="flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
                  <span className="eyebrow text-ink/50">Monday — Friday</span>
                  <span>10:00 — 19:00 IST</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
                  <span className="eyebrow text-ink/50">Saturday</span>
                  <span>By appointment</span>
                </div>
                <div className="flex items-start justify-between gap-6 border-t border-ink/10 pt-4">
                  <span className="eyebrow text-ink/50">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Rajpur+Road+Dehradun+Uttarakhand"
                target="_blank"
                rel="noreferrer"
                className="group mt-7 inline-flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-ink"
              >
                Get Directions
                <span className="h-px w-10 bg-ink transition-all duration-500 group-hover:w-16 group-hover:bg-gold" />
              </a>
            </motion.div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
