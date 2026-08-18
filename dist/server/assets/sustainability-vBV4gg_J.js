import { t as sustainability_farm_default } from "./sustainability-farm-B0VMn6Pg.js";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/sustainability.tsx?tsr-split=component
function Sustainability() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial py-16 md:py-24",
			children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: "Sustainability"
			}), /* @__PURE__ */ jsxs("h1", {
				className: "mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl",
				children: [
					"The ecosystems we depend on ",
					/* @__PURE__ */ jsx("em", {
						className: "not-italic text-forest",
						children: "are the product"
					}),
					"."
				]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-editorial pb-16",
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-sm",
				children: /* @__PURE__ */ jsx("img", {
					src: sustainability_farm_default,
					alt: "Aerial view of a sustainable herb cultivation farm at golden hour",
					width: 1400,
					height: 1e3,
					loading: "lazy",
					className: "h-[480px] w-full object-cover"
				})
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial grid gap-14 pb-24 md:grid-cols-12",
			children: [/* @__PURE__ */ jsxs("aside", {
				className: "md:col-span-4",
				children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Commitments"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-6 space-y-6 text-sm",
					children: [
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-3xl text-forest-deep",
							children: "92%"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-muted-foreground",
							children: "of botanicals sourced from contract-farmed cooperatives."
						})] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-3xl text-forest-deep",
							children: "3,400"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-muted-foreground",
							children: "smallholder farmers in our direct supply network."
						})] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-3xl text-forest-deep",
							children: "−38%"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-muted-foreground",
							children: "water use per kg of extract vs. 2019 baseline."
						})] }),
						/* @__PURE__ */ jsxs("li", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-3xl text-forest-deep",
							children: "2030"
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-1 text-muted-foreground",
							children: "target for Scope 1 & 2 carbon neutrality."
						})] })
					]
				})]
			}), /* @__PURE__ */ jsxs("div", {
				className: "md:col-span-8 space-y-10 text-base leading-relaxed text-foreground/85",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Regenerative sourcing"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4",
						children: "We contract directly with farmer cooperatives across India, offering guaranteed off-take, agronomy support and pre-financing. Our field teams train growers in intercropping, biodynamic composting and drip irrigation — practices that raise yields while restoring soil biology."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Wild-harvest stewardship"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4",
						children: "A small share of our botanicals — Boswellia, Commiphora, Bacopa — remain wild-collected. For these, we maintain a Non-Detriment Finding protocol aligned with FairWild and CITES, with GPS-mapped collection zones and seasonal rotation quotas."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Water & energy"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4",
						children: "Our processing plant operates on a closed-loop extraction system with 96% solvent recovery. On-site solar contributes 41% of annual electricity, and rainwater harvesting offsets 62% of process water demand."
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Packaging"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4",
						children: "All export packaging is FSC-certified or food-grade recycled. We are phasing to fully compostable inner liners by 2027."
					})] })
				]
			})]
		})
	] });
}
//#endregion
export { Sustainability as component };
