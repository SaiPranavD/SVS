import { createFileRoute } from "@tanstack/react-router";
import { Building2, Settings, ShieldAlert, Award } from "lucide-react";

export const Route = createFileRoute("/infrastructure")({
  head: () => ({
    meta: [
      { title: "Infrastructure & Facilities — SVS Nutraceuticals" },
      {
        name: "description",
        content:
          "Discover SVS's state-of-the-art DSIR-registered R&D center, extraction plants, and cleanroom facilities compliant with USFDA, TGA, and EU standards.",
      },
      { property: "og:title", content: "Infrastructure — SVS Nutraceuticals" },
      {
        property: "og:description",
        content: "Our advanced manufacturing facilities, cleanrooms, and testing laboratories.",
      },
      { property: "og:url", content: "/infrastructure" },
    ],
    links: [{ rel: "canonical", href: "/infrastructure" }],
  }),
  component: InfrastructurePage,
});

function InfrastructurePage() {
  return (
    <>
      {/* HERO */}
      <section className="container-editorial py-16 md:py-24">
        <p className="eyebrow">Infrastructure &amp; Technology</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl">
          Industrial scale, backed by{" "}
          <em className="not-italic text-forest">precision engineering</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          SVS Nutraceuticals operates state-of-the-art extraction units and analytical laboratories
          compliant with international quality standards. From pilot-scale research to high-volume commercial production,
          our facilities deliver unmatched batch consistency.
        </p>
      </section>

      {/* FACILITIES GRID */}
      <section className="border-y border-border/60 bg-bone py-20">
        <div className="container-editorial">
          <div className="max-w-2xl">
            <p className="eyebrow">Production Sites</p>
            <h2 className="mt-4 font-display text-4xl text-forest-deep">Manufacturing facilities</h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Multiple certified facilities equipped with high-tech extraction machinery to support global supply requirements.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Building2,
                title: "Unit I (Telangana)",
                desc: "DSIR-registered corporate headquarters, R&D center of excellence, and pilot-scale extraction suites.",
              },
              {
                icon: Settings,
                title: "Unit II (Tamil Nadu)",
                desc: "High-volume commercial extraction plant specialized in counter-current solvent extraction and spray drying.",
              },
              {
                icon: Award,
                title: "Unit III (Coimbatore)",
                desc: "Dedicated advanced formulation center featuring liposomal encapsulation, custom granulation, and cleanrooms.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="bg-card p-8 border border-border/70 rounded-sm">
                <Icon className="h-8 w-8 text-forest" strokeWidth={1.2} />
                <h3 className="mt-6 font-display text-2xl text-forest-deep">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRACTION TECHNOLOGY */}
      <section className="container-editorial py-24">
        <div className="grid gap-14 md:grid-cols-2">
          <div>
            <p className="eyebrow">Extraction Systems</p>
            <h2 className="mt-4 font-display text-4xl text-forest-deep">Advanced processing platforms</h2>
            <ul className="mt-8 space-y-6">
              {[
                {
                  title: "Supercritical CO₂ Extraction",
                  desc: "Eco-friendly, solvent-free extraction method utilizing pressurized carbon dioxide to gently isolate volatile oils and temperature-sensitive compounds.",
                },
                {
                  title: "Counter-Current Extraction",
                  desc: "Continuous counter-current extraction loops designed for maximum active compound yields and minimal solvent consumption.",
                },
                {
                  title: "Low-Temperature Vacuum Drying",
                  desc: "Maintains biological activity and prevents active marker degradation during the drying and concentration phase.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="border-l border-forest/30 pl-5">
                  <p className="font-display text-xl text-forest-deep">{title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="eyebrow">Compliance &amp; Labs</p>
            <h2 className="mt-4 font-display text-4xl text-forest-deep">Analytical QC &amp; Cleanrooms</h2>
            <ul className="mt-8 space-y-6">
              {[
                {
                  title: "ISO Class 8 Cleanrooms",
                  desc: "Dedicated positive-pressure packaging rooms featuring strict HEPA filtration and climate controls to avoid cross-contamination.",
                },
                {
                  title: "High-Performance Testing Lab",
                  desc: "Equipped with state-of-the-art analytical tools including HPLC, Gas Chromatography (GC) with Headspace, and UV-Vis spectrophotometers.",
                },
                {
                  title: "In-House Microbiology Lab",
                  desc: "Rigorous testing for total plate count (TPC), yeast/mold, and specific pathogens, ensuring absolute safety for every batch before release.",
                },
              ].map(({ title, desc }) => (
                <li key={title} className="border-l border-forest/30 pl-5">
                  <p className="font-display text-xl text-forest-deep">{title}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* REGULATORY STANDARDS */}
      <section className="bg-forest-deep text-cream py-20">
        <div className="container-editorial flex flex-col items-center text-center">
          <ShieldAlert className="h-12 w-12 text-sage" strokeWidth={1.2} />
          <h2 className="mt-6 font-display text-4xl leading-tight text-cream md:text-5xl max-w-2xl">
            Conforming to international regulatory guidelines
          </h2>
          <p className="mt-4 text-cream/70 max-w-xl text-sm leading-relaxed">
            Our facilities are engineered to comply with strict international guidelines, enabling smooth registration and regulatory clearances for our clients in the US, EU, and Asia-Pacific regions.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-wider text-sage">
            <span>USFDA COMPLIANT</span>
            <span>·</span>
            <span>TGA GUIDELINES</span>
            <span>·</span>
            <span>MEDSAFE COMPLIANT</span>
            <span>·</span>
            <span>EU REGULATIONS</span>
          </div>
        </div>
      </section>
    </>
  );
}
