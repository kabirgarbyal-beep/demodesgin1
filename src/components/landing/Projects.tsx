import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "./Reveal";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

const projects = [
  { img: p1, title: "Ivory Residence", loc: "Milan, Italy", cat: "Residential", desc: "A composition of light, linen and warm oak — a refuge above the city.", span: "row-span-2" },
  { img: p2, title: "Noir Atelier", loc: "Paris, France", cat: "Hospitality", desc: "Theatrical matte black volumes softened by hand-blown brass orbs.", span: "" },
  { img: p3, title: "Travertine House", loc: "Lake Como", cat: "Residential", desc: "Monolithic stone carved by a single shaft of afternoon sun.", span: "row-span-2" },
  { img: p4, title: "Maison Oak", loc: "Antwerp", cat: "Residential", desc: "A sculpted dining hall framed by deep charcoal and amber light.", span: "" },
  { img: p5, title: "The Atrium", loc: "Dubai", cat: "Commercial", desc: "A double-height vestibule wrapped in honeyed travertine and brass.", span: "row-span-2" },
  { img: p6, title: "Quiet Corner", loc: "Copenhagen", cat: "Styling", desc: "A small refuge — books, bouclé, and the long northern light.", span: "" },
];

export function Projects() {
  return (
    <section id="projects" className="relative bg-ivory px-6 py-32 lg:px-16 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-20 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><span className="eyebrow">— Selected Works · 001 / 042</span></Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.5rem,6vw,5.5rem)] leading-[1] tracking-tight">
              <MaskReveal>Spaces, in their</MaskReveal><br />
              <MaskReveal><em className="italic text-beige-deep">most considered form.</em></MaskReveal>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-muted-foreground leading-relaxed">
              Each project is a quiet conversation between material, light, and the people who will inhabit it.
            </p>
          </Reveal>
        </div>

        <div className="grid auto-rows-[280px] grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((p, i) => (
            <motion.a
              href="#"
              key={p.title}
              initial={{ y: 80, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: (i % 3) * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden bg-charcoal ${p.span}`}
            >
              <motion.img
                src={p.img} alt={p.title} loading="lazy"
                className="h-full w-full object-cover grayscale-[40%] saturate-[0.85] transition-all duration-[1200ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:grayscale-0 group-hover:saturate-100 group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent opacity-90 transition-opacity duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 flex flex-col justify-end p-7 text-ivory">
                <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.28em] text-gold-soft">
                  <span>{p.cat}</span><span className="h-px w-8 bg-gold-soft/50" /><span>{p.loc}</span>
                </div>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-3 max-w-sm translate-y-3 text-sm text-ivory/70 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                  {p.desc}
                </p>
                <div className="mt-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-ivory">
                  <span className="relative">View Project</span>
                  <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
