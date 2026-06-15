import { motion, useMotionValue, useSpring, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef } from "react";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 50, damping: 20 });
  const sy = useSpring(my, { stiffness: 50, damping: 20 });

  const { scrollY } = useScroll();
  const imgY = useTransform(scrollY, [0, 800], [0, 200]);
  const imgScale = useTransform(scrollY, [0, 800], [1, 1.15]);
  const overlay = useTransform(scrollY, [0, 600], [0.35, 0.7]);
  const textY = useTransform(scrollY, [0, 600], [0, 120]);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const { innerWidth: w, innerHeight: h } = window;
      mx.set((e.clientX / w - 0.5) * 30);
      my.set((e.clientY / h - 0.5) * 30);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const words = "Designing Spaces That Define Luxury".split(" ");

  return (
    <section ref={ref} id="top" className="relative h-[100svh] w-full overflow-hidden bg-ink">
      <motion.div style={{ y: imgY, scale: imgScale, x: sx, translateY: sy }} className="absolute inset-0 -m-10">
        <img src={heroImg} alt="Luxury interior" className="h-full w-full object-cover" />
      </motion.div>
      <motion.div style={{ opacity: overlay }} className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />

      {/* ambient floating lights */}
      <motion.div
        animate={{ x: [0, 60, -20, 0], y: [0, -40, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -left-32 top-1/4 h-[500px] w-[500px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.78 0.09 80 / 0.35), transparent 70%)" }}
      />
      <motion.div
        animate={{ x: [0, -50, 30, 0], y: [0, 30, -20, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -right-40 bottom-1/4 h-[600px] w-[600px] rounded-full blur-3xl"
        style={{ background: "radial-gradient(circle, oklch(0.86 0.025 75 / 0.25), transparent 70%)" }}
      />

      <motion.div style={{ y: textY }} className="relative z-10 flex h-full flex-col justify-center px-6 lg:px-16">
        <motion.span
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="eyebrow mb-8 text-ivory/70"
        >
          — Interior Architecture Studio · Est. 2009
        </motion.span>

        <h1 className="font-display text-ivory text-balance text-[clamp(3rem,9vw,9.5rem)] leading-[0.95] tracking-tight max-w-[18ch]">
          {words.map((w, i) => (
            <span key={i} className="inline-block overflow-hidden align-bottom mr-[0.25em]">
              <motion.span
                initial={{ y: "110%" }} animate={{ y: 0 }}
                transition={{ duration: 1.2, delay: 0.4 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block italic"
                style={{ fontStyle: i === 2 ? "italic" : "normal" }}
              >
                {w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
          className="mt-10 max-w-xl text-base md:text-lg leading-relaxed text-ivory/75"
        >
          Transforming interiors into timeless experiences through modern elegance and architectural storytelling.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.7 }}
          className="mt-12 flex flex-wrap items-center gap-4"
        >
          <a href="#projects" className="group relative overflow-hidden rounded-full bg-ivory px-8 py-4 text-xs uppercase tracking-[0.25em] text-ink transition-all">
            <span className="relative z-10 transition-colors group-hover:text-ivory">View Projects</span>
            <span className="absolute inset-0 -translate-y-full bg-gold transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-y-0" />
          </a>
          <a href="#contact" className="group flex items-center gap-3 px-2 py-4 text-xs uppercase tracking-[0.25em] text-ivory">
            <span className="relative">
              Book Consultation
              <span className="absolute -bottom-1 left-0 h-px w-full origin-right scale-x-100 bg-gold transition-transform duration-500 group-hover:origin-left" />
            </span>
            <span className="transition-transform duration-500 group-hover:translate-x-2">→</span>
          </a>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-10 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="eyebrow text-ivory/60">Scroll</span>
        <div className="h-12 w-px overflow-hidden bg-ivory/20">
          <motion.div
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            className="h-1/2 w-full bg-gold"
          />
        </div>
      </motion.div>
    </section>
  );
}
