import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "./Reveal";

const services = [
  { n: "01", t: "Luxury Residential Design", d: "Private homes shaped around the rituals of those who live in them." },
  { n: "02", t: "Modern Commercial Spaces", d: "Hospitality, retail and offices that feel less like venues and more like rooms." },
  { n: "03", t: "Architectural Visualization", d: "Cinematic, photoreal renderings before the first stone is laid." },
  { n: "04", t: "Bespoke Interior Styling", d: "Each object considered — furniture, textiles, art and the spaces between." },
  { n: "05", t: "Space Renovation", d: "Quiet, intelligent transformations of existing architecture." },
  { n: "06", t: "Custom Furniture", d: "Pieces drawn for a single room, made by long-time European ateliers." },
];

export function Services() {
  return (
    <section id="services" className="bg-ivory px-6 py-32 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20">
          <Reveal><span className="eyebrow">— Services</span></Reveal>
          <h2 className="mt-6 max-w-4xl font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1] tracking-tight">
            <MaskReveal>Six disciplines.</MaskReveal>{" "}
            <MaskReveal><em className="italic text-beige-deep">One studio.</em></MaskReveal>
          </h2>
        </div>

        <div>
          {services.map((s, i) => (
            <motion.a
              key={s.n}
              href="#"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[60px_1fr_auto] items-center gap-6 border-t border-border py-8 md:grid-cols-[80px_1fr_2fr_auto] md:gap-12 md:py-10"
            >
              <span className="font-display text-xl text-beige-deep">{s.n}</span>
              <h3 className="font-display text-2xl md:text-4xl transition-transform duration-700 group-hover:translate-x-3">{s.t}</h3>
              <p className="hidden text-sm text-muted-foreground md:block">{s.d}</p>
              <span className="text-xl text-ink transition-all duration-500 group-hover:translate-x-2 group-hover:text-gold">→</span>
              <span className="absolute inset-x-0 -bottom-px h-px origin-left scale-x-0 bg-ink transition-transform duration-700 group-hover:scale-x-100" />
            </motion.a>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
