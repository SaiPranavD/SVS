import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
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
  ChevronDown,
} from "lucide-react";
import heroImg from "@/assets/hero-botanical.jpg";
import labImg from "@/assets/research-lab.jpg";
import farmImg from "@/assets/sustainability-farm.jpg";
import { products } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SVS Nutraceuticals — Standardized Botanical Extracts & Natural Ingredients" },
      {
        name: "description",
        content:
          "SVS Nutraceuticals is a global manufacturer of standardized botanical extracts, phytochemicals, and natural ingredients for dietary supplements and functional foods.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    const elements = document.querySelectorAll(".reveal");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-forest-deep py-24 md:py-32">
        {/* Background Image of Green Field with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={farmImg}
            alt="Hero Background"
            className="h-full w-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/60" />
        </div>

        <div className="container-editorial relative z-10 flex flex-col items-center justify-center text-center reveal mt-8 px-4">
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] leading-[1.1] md:leading-[1.05] tracking-tight text-white font-semibold max-w-5xl">
            Delivering Nature’s
            <br />
            Own Ingredients
          </h1>
          <p className="mt-6 max-w-4xl text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-white/95 font-light px-2 sm:px-6">
            As a global leader, we proudly pioneer in standardized botanical extracts, phytochemicals, essential oils, and wellness ingredients, delivering to 42+ countries with a commitment to providing top-notch quality and innovation.
          </p>
          <div className="mt-10">
            <Link
              to="/products"
              className="inline-flex items-center justify-center rounded-full border-2 border-white bg-transparent px-8 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:bg-white hover:text-forest-deep hover:shadow-lg"
            >
              Explore Ingredients
            </Link>
          </div>
          
          {/* Bounce arrow indicator */}
          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center text-white/50 animate-bounce">
            <ChevronDown className="h-7 w-7" />
          </div>
        </div>
      </section>

      {/* ABOUT & STATS SECTION */}
      <section className="bg-bone py-24 border-b border-border/40">
        <div className="container-editorial reveal">
          <div className="grid gap-12 lg:grid-cols-12 items-center">
            <div className="lg:col-span-5">
              <p className="eyebrow">Shaping the Industry since 2006</p>
              <h2 className="mt-4 font-display text-4xl text-forest-deep md:text-5xl font-semibold leading-tight">
                Renowned for our <br />
                <span className="text-forest font-normal italic">unwavering passion</span>.
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                SVS Nutraceuticals blends state-of-the-art extraction technology with unwavering values of Goodness, Integrity, and Excellence. We work hand-in-hand with nature to manufacture research-grade extracts for global supplement, food, and cosmetic brands.
              </p>
            </div>
            
            <div className="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-6">
              {[
                { val: "20+", label: "Years of Excellence" },
                { val: "42+", label: "Countries Sourcing & Export" },
                { val: "120+", label: "Standardized Ingredients" },
                { val: "3", label: "Manufacturing Hubs" },
                { val: "2", label: "Innovative R&D Hubs" },
                { val: "10,000+", label: "Acres for Sustainable Farming" }
              ].map((stat, i) => (
                <div key={i} className="bg-card rounded-lg border border-border p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
                  <span className="font-display text-3xl md:text-4xl font-bold text-forest">{stat.val}</span>
                  <span className="text-xs text-muted-foreground font-medium mt-3 block leading-snug">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EXPLORE SOLUTIONS (PRODUCT CATEGORIES) */}
      <section className="py-24 bg-card border-b border-border/40">
        <div className="container-editorial reveal">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Explore Our Solutions</p>
            <h2 className="mt-3 font-display text-4xl text-forest-deep font-semibold">Elevating Natural Ingredients</h2>
            <p className="mt-3 text-sm text-muted-foreground">Tailored solutions optimized for specific food, wellness, and therapeutic applications.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Food Ingredients",
                desc: "Spice extracts, essential oils, oleoresins, and natural colors that deliver consistent flavor, aroma, and vibrant visual appeal.",
                link: "herbal-extracts",
                image: heroImg
              },
              {
                title: "Wellness & Nutraceuticals",
                desc: "High-purity isolated phytochemical compounds, carotenoids, and clinically-backed ingredients for optimal metabolic and systemic health.",
                link: "phytochemicals",
                image: labImg
              },
              {
                title: "Fragrance & Aromatherapy",
                desc: "Therapeutic-grade essential oils and natural aromatics steam-distilled to preserve delicate botanical profiles for premium personal care.",
                link: "essential-oils",
                image: farmImg
              }
            ].map((sol, idx) => (
              <div key={idx} className="group relative rounded-lg border border-border bg-card overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow">
                <div className="aspect-[16/10] overflow-hidden bg-bone relative">
                  <img
                    src={sol.image}
                    alt={sol.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-forest-deep/10" />
                </div>
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-2xl text-forest-deep font-semibold group-hover:text-forest transition-colors">{sol.title}</h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{sol.desc}</p>
                  </div>
                  <Link
                    to="/products"
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-forest group-hover:text-forest-deep transition-colors"
                  >
                    Explore Products
                    <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE PILLARS SECTION */}
      <section className="bg-bone py-24 border-b border-border/40">
        <div className="container-editorial reveal">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="eyebrow">Our Key Pillars</p>
            <h2 className="mt-3 font-display text-4xl text-forest-deep font-semibold">Quality &amp; Innovation First</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Sprout,
                title: "Robust Farmer Collaboration",
                body: "We work directly with thousands of smallholders, securing fair trade practices and implementing sustainable, pesticide-free agriculture."
              },
              {
                icon: Beaker,
                title: "Speciality Extracts & SCFE",
                body: "State-of-the-art Supercritical Fluid Extraction (SCFE) using CO2 ensures high-potency, solvent-free raw materials matching rigid pharmacopoeial standards."
              },
              {
                icon: FlaskConical,
                title: "Dedicated R&D and Innovation",
                body: "Our in-house analytical testing labs deploy HPLC and GC-MS platforms to deliver customized standardization and proven bio-efficacy studies."
              }
            ].map(({ icon: Icon, title, body }, i) => (
              <div key={i} className="bg-card rounded-lg border border-border p-8 flex flex-col hover:border-forest/30 transition-colors">
                <div className="h-12 w-12 rounded-full bg-sage-soft/30 flex items-center justify-center text-forest mb-6">
                  <Icon className="h-6 w-6" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-xl font-semibold text-forest-deep mb-3">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section className="relative py-28 overflow-hidden bg-forest-deep">
        <div className="absolute inset-0 z-0">
          <img
            src={farmImg}
            alt="Sustainability Farm"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-forest-deep via-forest-deep/90 to-transparent" />
        </div>

        <div className="container-editorial relative z-10 reveal">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-[0.2em] text-cream/70 uppercase">Sustainability</p>
            <h2 className="mt-4 font-display text-4xl text-white md:text-5xl font-semibold leading-tight">
              Establishing new benchmarks <br />
              <span className="text-cream font-normal italic">in eco-friendly practices.</span>
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/80">
              At SVS Nutraceuticals, we are committed to social responsibility and sustainable growth. From crop-rotation assistance to energy-efficient manufacturing processes, we lead the adoption of green technologies in the botanical industry.
            </p>
            <div className="mt-8">
              <Link
                to="/sustainability"
                className="group inline-flex items-center gap-2.5 rounded-full bg-forest px-6 py-3 text-sm font-semibold text-white transition hover:bg-forest-deep"
              >
                Our Green Commitment
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
