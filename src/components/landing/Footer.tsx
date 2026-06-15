export function Footer() {
  return (
    <footer className="bg-ink px-6 py-16 text-ivory/60 lg:px-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-12 md:gap-10">
        <div className="md:col-span-5">
          <p className="font-display text-3xl text-ivory">Maison Noir</p>
          <p className="mt-5 max-w-sm text-sm leading-[1.9]">
            An interior architecture studio at the foothills of the Himalayas — designing quietly from Dehradun since 2009.
          </p>
          <p className="mt-8 eyebrow text-gold/80">Studio</p>
          <address className="mt-4 not-italic text-sm leading-[1.9]">
            42 Rajpur Road, Hathibarkala Estate<br />
            Dehradun, Uttarakhand 248001<br />
            India
          </address>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow text-gold/80">Navigate</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#projects" className="transition-colors hover:text-ivory">Projects</a></li>
            <li><a href="#studio" className="transition-colors hover:text-ivory">Studio</a></li>
            <li><a href="#services" className="transition-colors hover:text-ivory">Services</a></li>
            <li><a href="#process" className="transition-colors hover:text-ivory">Process</a></li>
            <li><a href="#visit" className="transition-colors hover:text-ivory">Visit</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <p className="eyebrow text-gold/80">Contact</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="mailto:studio@maisonnoir.in" className="transition-colors hover:text-ivory">studio@maisonnoir.in</a></li>
            <li><a href="tel:+91xxxxxxxxxx" className="transition-colors hover:text-ivory">+91 xxx xxx xxxx</a></li>
          </ul>
          <p className="mt-8 eyebrow text-gold/80">Elsewhere</p>
          <ul className="mt-5 space-y-3 text-sm">
            <li><a href="#" className="transition-colors hover:text-ivory">Instagram</a></li>
            <li><a href="#" className="transition-colors hover:text-ivory">Pinterest</a></li>
            <li><a href="#" className="transition-colors hover:text-ivory">Journal</a></li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-16 flex max-w-7xl flex-col items-start justify-between gap-3 border-t border-ivory/10 pt-8 text-[10px] uppercase tracking-[0.28em] md:flex-row md:items-center">
        <span>© {new Date().getFullYear()} Maison Noir — All rights reserved.</span>
        <span>Drawn slowly, in the Doon Valley.</span>
      </div>
    </footer>
  );
}
