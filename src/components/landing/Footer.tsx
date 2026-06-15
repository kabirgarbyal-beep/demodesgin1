export function Footer() {
  return (
    <footer className="bg-ink px-6 py-14 text-ivory/60 lg:px-16">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-display text-3xl text-ivory">Maison Noir</p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed">
            An interior architecture studio working from Paris, Milan and Copenhagen — quietly, since 2009.
          </p>
        </div>
        <div>
          <p className="eyebrow text-gold/80">Studio</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#projects" className="hover:text-ivory transition-colors">Projects</a></li>
            <li><a href="#studio" className="hover:text-ivory transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-ivory transition-colors">Services</a></li>
            <li><a href="#process" className="hover:text-ivory transition-colors">Process</a></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow text-gold/80">Elsewhere</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#" className="hover:text-ivory transition-colors">Instagram</a></li>
            <li><a href="#" className="hover:text-ivory transition-colors">Pinterest</a></li>
            <li><a href="#" className="hover:text-ivory transition-colors">Journal</a></li>
            <li><a href="#" className="hover:text-ivory transition-colors">Press</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 text-xs uppercase tracking-[0.24em] md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Maison Noir — All rights reserved.</span>
        <span>Designed slowly, in Paris.</span>
      </div>
    </footer>
  );
}
