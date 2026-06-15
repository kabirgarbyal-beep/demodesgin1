import { animate, useInView, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";
import { Reveal } from "./Reveal";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const v = useMotionValue(0);
  const rounded = useTransform(v, (n) => Math.floor(n).toLocaleString());
  useEffect(() => {
    if (inView) animate(v, to, { duration: 2.4, ease: [0.22, 1, 0.36, 1] });
  }, [inView, to, v]);
  useEffect(() => rounded.on("change", (val) => { if (ref.current) ref.current.textContent = val + suffix; }), [rounded, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { n: 142, s: "+", l: "Projects Completed" },
  { n: 16, s: "", l: "Years of Practice" },
  { n: 27, s: "", l: "International Awards" },
  { n: 19, s: "", l: "Countries Served" },
];

export function Stats() {
  return (
    <section className="bg-ink px-6 py-28 text-ivory lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-16 md:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.l} delay={i * 0.1}>
            <div className="text-center">
              <div className="font-display text-[clamp(3.5rem,7vw,6.5rem)] leading-none text-gold">
                <Counter to={s.n} suffix={s.s} />
              </div>
              <p className="eyebrow mt-4 text-ivory/60">{s.l}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
