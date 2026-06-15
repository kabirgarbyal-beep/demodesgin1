import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";
import { Reveal, MaskReveal } from "./Reveal";
import before from "@/assets/before.jpg";
import after from "@/assets/after.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const p = ((clientX - r.left) / r.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  }, []);

  useEffect(() => {
    const move = (e: MouseEvent | TouchEvent) => {
      if (!dragging.current) return;
      const x = "touches" in e ? e.touches[0].clientX : (e as MouseEvent).clientX;
      update(x);
    };
    const up = () => { dragging.current = false; };
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchend", up);
    };
  }, [update]);

  return (
    <section className="bg-charcoal px-6 py-32 text-ivory lg:px-16 lg:py-48">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Reveal><span className="eyebrow text-gold">— Transformations</span></Reveal>
            <h2 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,5rem)] leading-[1] tracking-tight">
              <MaskReveal>Before, and</MaskReveal>{" "}
              <MaskReveal><em className="italic text-gold-soft">after.</em></MaskReveal>
            </h2>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-sm text-ivory/60">
              Drag to reveal a Genoa apartment, gently reimagined over fourteen months.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            ref={ref}
            className="relative aspect-[16/10] w-full cursor-ew-resize overflow-hidden select-none"
            onMouseDown={(e) => { dragging.current = true; update(e.clientX); }}
            onTouchStart={(e) => { dragging.current = true; update(e.touches[0].clientX); }}
          >
            <img src={after} alt="After" loading="lazy" className="absolute inset-0 h-full w-full object-cover" />
            <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
              <img src={before} alt="Before" loading="lazy" className="h-full w-full object-cover" />
            </div>

            <span className="absolute left-6 top-6 rounded-full glass-dark px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-ivory">Before</span>
            <span className="absolute right-6 top-6 rounded-full glass-dark px-4 py-2 text-[10px] uppercase tracking-[0.28em] text-gold-soft">After</span>

            <motion.div
              animate={{ left: `${pos}%` }}
              transition={{ type: "spring", stiffness: 400, damping: 40 }}
              className="absolute top-0 bottom-0 -translate-x-1/2"
            >
              <div className="h-full w-px bg-ivory/80" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-full bg-ivory text-ink shadow-luxe">
                <span className="text-lg">⇆</span>
              </div>
            </motion.div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
