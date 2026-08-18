import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { CheckCircle2, ShieldCheck } from "lucide-react";
//#region src/routes/quality.tsx?tsr-split=component
var certs = [{
	c: "Non-GMO Project",
	d: "Verified through IdentityPreserved supply chains."
}];
var protocols = [
	"Identity: HPTLC / DNA barcoding on raw material",
	"Assay: HPLC / UPLC quantification of active markers",
	"Purity: heavy metals by ICP-MS, aflatoxins by LC-MS/MS",
	"Microbiology: TPC, yeast/mold, E. coli, Salmonella, Staph",
	"Residual solvents: GC headspace per ICH Q3C",
	"Pesticides: GC-MS/MS and LC-MS/MS per USP <565>",
	"Allergens: sworn declaration and cross-contamination controls",
	"Stability: real-time and accelerated (ICH Q1A)"
];
function Quality() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial py-16 md:py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Quality & compliance"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl",
					children: [
						"Pharmaceutical-grade rigor, applied to",
						" ",
						/* @__PURE__ */ jsx("em", {
							className: "not-italic text-forest",
							children: "every botanical batch"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "Our quality system runs from farm-gate identity checks through finished-product release, with every SKU tied to a validated certificate of analysis and stability program."
				})
			]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial pb-20 grid gap-12 md:grid-cols-2",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: "Certifications"
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-6 divide-y divide-border border-y border-border",
				children: certs.map((c) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-4 py-5",
					children: [/* @__PURE__ */ jsx(ShieldCheck, {
						className: "mt-1 h-5 w-5 flex-shrink-0 text-forest",
						strokeWidth: 1.4
					}), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
						className: "font-medium text-forest-deep",
						children: c.c
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: c.d
					})] })]
				}, c.c))
			})] }), /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: "Testing protocols"
			}), /* @__PURE__ */ jsx("ul", {
				className: "mt-6 space-y-3",
				children: protocols.map((p) => /* @__PURE__ */ jsxs("li", {
					className: "flex items-start gap-3 border-b border-border/60 pb-3 text-sm",
					children: [/* @__PURE__ */ jsx(CheckCircle2, {
						className: "mt-0.5 h-4 w-4 flex-shrink-0 text-forest",
						strokeWidth: 1.6
					}), p]
				}, p))
			})] })]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-forest-deep text-cream",
			children: /* @__PURE__ */ jsx("div", {
				className: "container-editorial grid gap-10 py-20 md:grid-cols-3",
				children: [
					["Farm-gate", "Botanical identity verified before harvest; suppliers audited annually."],
					["Manufacturing", "Closed-loop extraction with automated CIP and full batch genealogy."],
					["Release", "Every batch reviewed by an independent QA team before dispatch."]
				].map(([t, d]) => /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-sage",
					children: t
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-4 text-lg leading-relaxed text-cream/80",
					children: d
				})] }, t))
			})
		})
	] });
}
//#endregion
export { Quality as component };
