import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/landing/Nav";
import { Hero } from "@/components/landing/Hero";
import { Projects } from "@/components/landing/Projects";
import { About } from "@/components/landing/About";
import { Services } from "@/components/landing/Services";
import { BeforeAfter } from "@/components/landing/BeforeAfter";
import { Testimonials } from "@/components/landing/Testimonials";
import { Process } from "@/components/landing/Process";
import { Stats } from "@/components/landing/Stats";
import { CTA } from "@/components/landing/CTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maison Noir — Luxury Interior Architecture Studio" },
      { name: "description", content: "An interior architecture studio designing timeless residential, commercial and hospitality spaces across Europe and the Middle East." },
      { property: "og:title", content: "Maison Noir — Luxury Interior Architecture" },
      { property: "og:description", content: "Designing spaces that define luxury — quietly, since 2009." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Nav />
      <Hero />
      <Projects />
      <About />
      <Services />
      <BeforeAfter />
      <Testimonials />
      <Process />
      <Stats />
      <CTA />
      <Footer />
    </main>
  );
}
