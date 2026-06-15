import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Reveal, MaskReveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const services = [
  { n: "01", t: "Luxury Residential Design", d: "Private homes shaped around the rituals of those who live in them.", img: p1, project: "Deodar House" },
  { n: "02", t: "Modern Commercial Spaces", d: "Hospitality, retail and offices that feel less like venues and more like rooms.", img: p5, project: "The Atrium" },
  { n: "03", t: "Architectural Visualization", d: "Cinematic, photoreal renderings before the first stone is laid.", img: p3, project: "Kumaoni Stone House" },
  { n: "04", t: "Bespoke Interior Styling", d: "Each object considered — furniture, textiles, art and the spaces between.", img: p6, project: "Quiet Corner" },
  { n: "05", t: "Space Renovation", d: "Quiet, intelligent transformations of existing architecture.", img: p4, project: "Maison Sal" },
  { n: "06", t: "Custom Furniture", d: "Pieces drawn for a single room, made by long-time European ateliers.", img: p2, project: "Noir Atelier" },
];

export function Services() {
  const [hover, setHover] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

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

        <div ref={containerRef} onMouseMove={onMove} className="relative" onMouseLeave={() => setHover(null)}>
          {/* Floating preview (desktop only) */}
          <AnimatePresence>
            {hover !== null && (
              <motion.div
                key={hover}
                initial={{ opacity: 0, scale: 0.92, y: 24 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 12 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{ left: pos.x, top: pos.y }}
                className="pointer-events-none absolute z-30 hidden -translate-x-1/2 -translate-y-1/2 md:block"
              >
                <div className="relative h-[320px] w-[260px] overflow-hidden rounded-sm shadow-luxe ring-1 ring-ink/10">
                  <motion.img
                    src={services[hover].img}
                    alt={services[hover].project}
                    initial={{ scale: 1.15 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-ivory">
                    <span className="text-[9px] uppercase tracking-[0.3em] text-gold-soft">Featured Project</span>
                    <p className="mt-2 font-display text-2xl leading-tight">{services[hover].project}</p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {services.map((s, i) => (
            <motion.a
              key={s.n}
              href="#projects"
              onMouseEnter={() => setHover(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="group relative grid grid-cols-[60px_1fr_auto] items-center gap-6 border-t border-border py-8 md:grid-cols-[80px_1fr_2fr_auto] md:gap-12 md:py-10"
            >
              <span className={`font-display text-xl transition-colors duration-500 ${hover === i ? "text-gold" : "text-beige-deep"}`}>{s.n}</span>
              <h3 className={`font-display text-2xl md:text-4xl transition-all duration-700 ${hover === i ? "translate-x-3 italic text-beige-deep" : ""}`}>{s.t}</h3>
              <p className="hidden text-sm text-muted-foreground md:block">{s.d}</p>
              <span className={`text-xl transition-all duration-500 ${hover === i ? "translate-x-2 text-gold" : "text-ink"}`}>→</span>
              <span className={`absolute inset-x-0 -bottom-px h-px origin-left bg-ink transition-transform duration-700 ${hover === i ? "scale-x-100" : "scale-x-0"}`} />
            </motion.a>
          ))}
          <div className="hairline" />
        </div>
      </div>
    </section>
  );
}
