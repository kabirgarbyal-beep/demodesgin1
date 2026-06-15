import { useEffect, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";

const links = [
  { label: "Projects", href: "#projects" },
  { label: "Studio", href: "#studio" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
    setScrolled(latest > 40);
  });

  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; }, [open]);

  return (
    <>
      <motion.nav
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: hidden ? -100 : 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "glass py-4" : "py-6 bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 lg:px-10">
          <a href="#top" className="flex items-center gap-2">
            <span className="font-display text-2xl tracking-tight text-ink">Maison&nbsp;Noir</span>
          </a>
          <ul className="hidden items-center gap-10 md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="group relative text-xs uppercase tracking-[0.28em] text-ink/80 transition-colors hover:text-ink">
                  {l.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold transition-all duration-500 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="hidden md:inline-flex items-center gap-2 rounded-full border border-ink/20 px-5 py-2.5 text-xs uppercase tracking-[0.22em] text-ink transition-all hover:bg-ink hover:text-ivory">
            Book Consultation
          </a>
          <button onClick={() => setOpen(true)} className="md:hidden flex flex-col gap-1.5" aria-label="Open menu">
            <span className="h-px w-7 bg-ink" />
            <span className="h-px w-5 bg-ink" />
          </button>
        </div>
      </motion.nav>

      {open && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] bg-ink text-ivory md:hidden"
        >
          <div className="flex items-center justify-between px-6 py-6">
            <span className="font-display text-2xl">Maison Noir</span>
            <button onClick={() => setOpen(false)} className="text-xs uppercase tracking-[0.22em]">Close</button>
          </div>
          <ul className="mt-12 space-y-2 px-6">
            {links.map((l, i) => (
              <motion.li key={l.href}
                initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.05 * i + 0.1, ease: [0.22, 1, 0.36, 1] }}>
                <a href={l.href} onClick={() => setOpen(false)} className="block font-display text-5xl">{l.label}</a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      )}
    </>
  );
}
