import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/quality")({
  head: () => ({
    meta: [
      { title: "Quality & Compliance — SVS Nutraceuticals" },
      {
        name: "description",
        content:
          "SVS Nutraceuticals operates with in-house QC and full traceability from botanical source to finished batch.",
      },
      { property: "og:title", content: "Quality & Compliance — SVS Nutraceuticals" },
      {
        property: "og:description",
        content: "Certifications and testing protocols.",
      },
      { property: "og:url", content: "/quality" },
    ],
    links: [{ rel: "canonical", href: "/quality" }],
  }),
  component: Quality,
});

const certs = [
  { c: "Non-GMO Project", d: "Verified through IdentityPreserved supply chains." },
];

const protocols = [
  "Identity: HPTLC / DNA barcoding on raw material",
  "Assay: HPLC / UPLC quantification of active markers",
  "Purity: heavy metals by ICP-MS, aflatoxins by LC-MS/MS",
  "Microbiology: TPC, yeast/mold, E. coli, Salmonella, Staph",
  "Residual solvents: GC headspace per ICH Q3C",
  "Pesticides: GC-MS/MS and LC-MS/MS per USP <565>",
  "Allergens: sworn declaration and cross-contamination controls",
  "Stability: real-time and accelerated (ICH Q1A)",
];

function Quality() {
  return (
    <>
      <section className="container-editorial py-16 md:py-24">
        <p className="eyebrow">Quality &amp; compliance</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl">
          Pharmaceutical-grade rigor, applied to{" "}
          <em className="not-italic text-forest">every botanical batch</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Our quality system runs from farm-gate identity checks through finished-product release,
          with every SKU tied to a validated certificate of analysis and stability program.
        </p>
      </section>

      <section className="container-editorial pb-20 grid gap-12 md:grid-cols-2">
        <div>
          <p className="eyebrow">Certifications</p>
          <ul className="mt-6 divide-y divide-border border-y border-border">
            {certs.map((c) => (
              <li key={c.c} className="flex items-start gap-4 py-5">
                <ShieldCheck className="mt-1 h-5 w-5 flex-shrink-0 text-forest" strokeWidth={1.4} />
                <div>
                  <p className="font-medium text-forest-deep">{c.c}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="eyebrow">Testing protocols</p>
          <ul className="mt-6 space-y-3">
            {protocols.map((p) => (
              <li key={p} className="flex items-start gap-3 border-b border-border/60 pb-3 text-sm">
                <CheckCircle2
                  className="mt-0.5 h-4 w-4 flex-shrink-0 text-forest"
                  strokeWidth={1.6}
                />
                {p}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-forest-deep text-cream">
        <div className="container-editorial grid gap-10 py-20 md:grid-cols-3">
          {[
            [
              "Farm-gate",
              "Botanical identity verified before harvest; suppliers audited annually.",
            ],
            [
              "Manufacturing",
              "Closed-loop extraction with automated CIP and full batch genealogy.",
            ],
            ["Release", "Every batch reviewed by an independent QA team before dispatch."],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="eyebrow text-sage">{t}</p>
              <p className="mt-4 text-lg leading-relaxed text-cream/80">{d}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
