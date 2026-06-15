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
import { Visit } from "@/components/landing/Visit";
import { Footer } from "@/components/landing/Footer";

const SITE_URL = "https://velvet-render-dream.lovable.app";
const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
const TITLE = "Maison Noir — Luxury Interior Designers in Dehradun, Uttarakhand";
const DESCRIPTION =
  "Maison Noir is a luxury interior design and architecture studio in Dehradun, Uttarakhand. We design modern residential, hospitality and commercial interiors across the Himalayan foothills and India — quietly, since 2009.";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "InteriorDesignStudio", "Organization"],
      "@id": `${SITE_URL}/#studio`,
      name: "Maison Noir",
      alternateName: "Maison Noir Interior Architecture",
      description: DESCRIPTION,
      url: SITE_URL,
      image: OG_IMAGE,
      logo: `${SITE_URL}/icon-512.png`,
      telephone: "+91-000-000-0000",
      email: "studio@maisonnoir.in",
      foundingDate: "2009",
      founder: { "@type": "Person", name: "Ananya Rawat" },
      priceRange: "$$$$",
      address: {
        "@type": "PostalAddress",
        streetAddress: "42 Rajpur Road, Hathibarkala Estate",
        addressLocality: "Dehradun",
        addressRegion: "Uttarakhand",
        postalCode: "248001",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 30.3629, longitude: 78.0691 },
      areaServed: [
        { "@type": "Place", name: "Dehradun" },
        { "@type": "Place", name: "Uttarakhand" },
        { "@type": "Place", name: "Mussoorie" },
        { "@type": "Place", name: "Delhi NCR" },
        { "@type": "Place", name: "Mumbai" },
        { "@type": "Country", name: "India" },
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          opens: "10:00",
          closes: "19:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "00:00",
          closes: "00:00",
          description: "By appointment",
        },
      ],
      sameAs: [
        "https://www.instagram.com/",
        "https://www.pinterest.com/",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Interior Design Services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Luxury Residential Interior Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Hospitality & Boutique Hotel Design" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Modern Commercial Interiors" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Interior Architecture & Renovation" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Maison Noir",
      description: DESCRIPTION,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#studio` },
    },
  ],
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      {
        name: "keywords",
        content:
          "interior design Dehradun, luxury interior designers Uttarakhand, modern interior studio, architecture and interior design, luxury home design India, Himalayan interior architecture, Maison Noir, Rajpur Road interior designer",
      },
      { name: "author", content: "Maison Noir" },
      { name: "robots", content: "index, follow, max-image-preview:large, max-snippet:-1" },
      { name: "googlebot", content: "index, follow, max-image-preview:large" },
      // Open Graph
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: `${SITE_URL}/` },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Maison Noir — Luxury interior architecture studio in Dehradun" },
      { property: "og:locale", content: "en_IN" },
      { property: "og:site_name", content: "Maison Noir" },
      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "twitter:image:alt", content: "Maison Noir — Luxury interior architecture studio in Dehradun" },
      // Geo
      { name: "geo.region", content: "IN-UT" },
      { name: "geo.placename", content: "Dehradun" },
      { name: "geo.position", content: "30.3629;78.0691" },
      { name: "ICBM", content: "30.3629, 78.0691" },
    ],
    links: [
      { rel: "canonical", href: `${SITE_URL}/` },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Inter:wght@300;400;500&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(jsonLd),
      },
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
      <Visit />
      <Footer />
    </main>
  );
}
