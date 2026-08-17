import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import {
  ArrowRight,
  Leaf,
  FlaskConical,
  ShieldCheck,
  Globe2,
  Sprout,
  Beaker,
  Microscope,
  Package,
} from "lucide-react";
import heroImg from "@/assets/hero-botanical.jpg";
import labImg from "@/assets/research-lab.jpg";
import farmImg from "@/assets/sustainability-farm.jpg";
import { products } from "@/lib/products";

const slides = [
  {
    image: heroImg,
    title: "Curcuma longa L.",
    subtitle: "BATCH 24-CU-0912 · ≥ 95% CURCUMINOIDS (HPLC)",
    alt: "Macro photograph of a green botanical leaf with water droplets"
  },
  {
    image: farmImg,
    title: "Piper nigrum L.",
    subtitle: "BATCH 24-PP-0841 · ≥ 95% PIPERINE (HPLC)",
    alt: "Ethical botanical cultivation field at sunrise"
  },
  {
    image: labImg,
    title: "Withania somnifera L.",
    subtitle: "BATCH 24-AS-1102 · ≥ 5% WITHANOLIDES (HPLC)",
    alt: "Advanced phytochemistry research and testing laboratory"
  }
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVS Nutraceuticals — Standardized Botanical Extracts for Global Partners" },
      {
        name: "description",
        content:
          "SVS Nutraceuticals manufactures research-grade botanical extracts and nutraceutical ingredients for global dietary supplement, functional food and pharmaceutical partners.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-[90vh] bg-bone flex items-center py-20">
        <div className="container-editorial grid gap-12 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="eyebrow">Standardized botanical extracts &amp; ingredients</p>
            <h1 className="mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-forest-deep md:text-[4rem]">
              Quality Ingredients,
              <br />
              <em className="not-italic text-forest">Trusted Solutions.</em>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
              SVS Nutraceuticals is a leading supplier and trader of high-quality nutraceutical raw materials, vitamins, minerals, herbal extracts, amino acids, and pharmaceutical excipients.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link
                to="/products"
                className="group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-forest-deep"
              >
                Explore ingredients
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>

            <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-border/70 pt-8 text-sm">
              <div>
                <dt className="text-muted-foreground">Ingredients</dt>
                <dd className="mt-1 font-display text-3xl text-forest-deep">120+</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Countries served</dt>
                <dd className="mt-1 font-display text-3xl text-forest-deep">42</dd>
              </div>
              <div>
                <dt className="text-muted-foreground">Years of experience</dt>
                <dd className="mt-1 font-display text-3xl text-forest-deep">20</dd>
              </div>
            </dl>
          </div>

          <div className="relative md:col-span-6">
            <div className="relative overflow-hidden rounded-sm shadow-2xl shadow-forest-deep/20 h-[480px] md:h-[620px]">
              {slides.map((slide, idx) => (
                <div
                  key={idx}
                  className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                    idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    width={1600}
                    height={1200}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/70 to-transparent p-6">
                    <p className="font-display text-xl text-cream">{slide.title}</p>
                    <p className="text-xs tracking-widest text-cream/70">
                      {slide.subtitle}
                    </p>
                  </div>
                </div>
              ))}

              {/* Slideshow dots/indicators */}
              <div className="absolute bottom-6 right-6 z-20 flex gap-2">
                {slides.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveSlide(idx)}
                    aria-label={`Go to slide ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === activeSlide ? "w-6 bg-cream" : "w-1.5 bg-cream/40"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INGREDIENTS PORTFOLIO */}
      <section className="container-editorial py-24 border-b border-border/40" id="products-section">
        <div className="flex flex-col items-center text-center">
          <p className="eyebrow">Ingredients Portfolio</p>
          <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl">
            Featured Products
          </h2>
          <p className="mt-4 max-w-2xl text-sm text-muted-foreground">
            Explore a selection of our high-quality nutraceutical raw materials, vitamins, minerals, and herbal extracts.
          </p>
        </div>

        {/* Unified products grid (limit to 6) */}
        <div className="mt-16">
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {products.slice(0, 6).map((p) => (
              <li key={p.slug}>
                <Link
                  to="/products"
                  className="group block overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-350 hover:border-forest/50 hover:shadow-lg hover:shadow-forest-deep/5 hover:-translate-y-1"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-forest group-hover:scale-125 transition-transform" />
                    <p className="text-[0.65rem] tracking-widest text-forest font-semibold uppercase">
                      {p.standardization}
                    </p>
                  </div>
                  <h3 className="mt-3 font-display text-2xl text-forest-deep group-hover:text-forest transition-colors">
                    {p.name}
                  </h3>
                  {p.botanical && (
                    <p className="mt-1 text-sm italic text-muted-foreground font-light">
                      {p.botanical}
                    </p>
                  )}
                  <p className="mt-4 text-sm text-foreground/75 leading-relaxed line-clamp-2">
                    {p.tagline}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-14 flex justify-center">
          <Link
            to="/products"
            className="group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-forest-deep"
          >
            View all products
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </Link>
        </div>
      </section>

      {/* MANUFACTURING PROCESS */}
      <section className="border-y border-border/60 bg-bone">
        <div className="container-editorial py-24">
          <div className="max-w-2xl">
            <p className="eyebrow">Manufacturing excellence</p>
            <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl">
              From seed to <em className="not-italic text-forest">certified batch</em>.
            </h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              A vertically integrated supply chain — cultivation, extraction, analytical release and pharma-grade packaging under one quality system.
            </p>
          </div>
          <ol className="mt-14 grid gap-8 md:grid-cols-4">
            {[
              { icon: Sprout, step: "01", title: "Sourcing", body: "Ethically cultivated botanicals from certified farms across India and Southeast Asia." },
              { icon: Beaker, step: "02", title: "Extraction", body: "Supercritical CO2, hydro-alcoholic and spray-drying platforms tuned per marker." },
              { icon: ShieldCheck, step: "03", title: "QC release", body: "HPLC, GC-MS and microbiological testing at every intermediate and finished stage." },
              { icon: Package, step: "04", title: "Packaging", body: "Tamper-evident packaging with full batch traceability worldwide." }
            ].map(({ icon: Icon, step, title, body }) => (
              <li key={step} className="border-t border-forest/30 pt-5">
                <div className="flex items-center justify-between">
                  <Icon className="h-6 w-6 text-forest" strokeWidth={1.4} />
                  <span className="font-display text-sm text-muted-foreground">{step}</span>
                </div>
                <h3 className="mt-6 font-display text-2xl text-forest-deep">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* PARTNERSHIP CTA */}
      <section className="container-editorial py-28">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="eyebrow">Global partnership</p>
            <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl">
              Formulate your next <em className="not-italic text-forest">breakthrough</em> with us.
            </h2>
          </div>
          <div className="md:col-span-6">
            <p className="text-base leading-relaxed text-muted-foreground">
              From technical documentation and 3rd-party COAs to co-development, private-label manufacturing and stability studies — our commercial team supports your product from concept to market launch.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/quality"
                className="inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-medium text-forest-deep hover:bg-sage-soft"
              >
                Quality &amp; compliance
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
