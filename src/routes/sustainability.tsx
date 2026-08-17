import { createFileRoute } from "@tanstack/react-router";
import farmImg from "@/assets/sustainability-farm.jpg";

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — SVS Nutraceuticals" },
      {
        name: "description",
        content:
          "Regenerative sourcing, water-efficient cultivation and traceable botanicals — how SVS Nutraceuticals safeguards the ecosystems its ingredients depend on.",
      },
      { property: "og:title", content: "Sustainability — SVS Nutraceuticals" },
      {
        property: "og:description",
        content: "Sourcing, cultivation and environmental commitments.",
      },
      { property: "og:url", content: "/sustainability" },
    ],
    links: [{ rel: "canonical", href: "/sustainability" }],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <>
      <section className="container-editorial py-16 md:py-24">
        <p className="eyebrow">Sustainability</p>
        <h1 className="mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl">
          The ecosystems we depend on <em className="not-italic text-forest">are the product</em>.
        </h1>
      </section>

      <section className="container-editorial pb-16">
        <div className="overflow-hidden rounded-sm">
          <img
            src={farmImg}
            alt="Aerial view of a sustainable herb cultivation farm at golden hour"
            width={1400}
            height={1000}
            loading="lazy"
            className="h-[480px] w-full object-cover"
          />
        </div>
      </section>

      <section className="container-editorial grid gap-14 pb-24 md:grid-cols-12">
        <aside className="md:col-span-4">
          <p className="eyebrow">Commitments</p>
          <ul className="mt-6 space-y-6 text-sm">
            <li>
              <p className="font-display text-3xl text-forest-deep">92%</p>
              <p className="mt-1 text-muted-foreground">
                of botanicals sourced from contract-farmed cooperatives.
              </p>
            </li>
            <li>
              <p className="font-display text-3xl text-forest-deep">3,400</p>
              <p className="mt-1 text-muted-foreground">
                smallholder farmers in our direct supply network.
              </p>
            </li>
            <li>
              <p className="font-display text-3xl text-forest-deep">−38%</p>
              <p className="mt-1 text-muted-foreground">
                water use per kg of extract vs. 2019 baseline.
              </p>
            </li>
            <li>
              <p className="font-display text-3xl text-forest-deep">2030</p>
              <p className="mt-1 text-muted-foreground">
                target for Scope 1 &amp; 2 carbon neutrality.
              </p>
            </li>
          </ul>
        </aside>

        <div className="md:col-span-8 space-y-10 text-base leading-relaxed text-foreground/85">
          <div>
            <p className="eyebrow">Regenerative sourcing</p>
            <p className="mt-4">
              We contract directly with farmer cooperatives across India, offering guaranteed
              off-take, agronomy support and pre-financing. Our field teams train growers in
              intercropping, biodynamic composting and drip irrigation — practices that raise yields
              while restoring soil biology.
            </p>
          </div>
          <div>
            <p className="eyebrow">Wild-harvest stewardship</p>
            <p className="mt-4">
              A small share of our botanicals — Boswellia, Commiphora, Bacopa — remain
              wild-collected. For these, we maintain a Non-Detriment Finding protocol aligned with
              FairWild and CITES, with GPS-mapped collection zones and seasonal rotation quotas.
            </p>
          </div>
          <div>
            <p className="eyebrow">Water &amp; energy</p>
            <p className="mt-4">
              Our processing plant operates on a closed-loop extraction system with 96% solvent
              recovery. On-site solar contributes 41% of annual electricity, and rainwater
              harvesting offsets 62% of process water demand.
            </p>
          </div>
          <div>
            <p className="eyebrow">Packaging</p>
            <p className="mt-4">
              All export packaging is FSC-certified or food-grade recycled. We are phasing to fully
              compostable inner liners by 2027.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
