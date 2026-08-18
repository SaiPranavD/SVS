import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { Award, Building2, Settings, ShieldAlert } from "lucide-react";
//#region src/routes/infrastructure.tsx?tsr-split=component
function InfrastructurePage() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial py-16 md:py-24",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Infrastructure & Technology"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-4 max-w-4xl font-display text-5xl leading-tight text-forest-deep md:text-6xl",
					children: [
						"Industrial scale, backed by",
						" ",
						/* @__PURE__ */ jsx("em", {
							className: "not-italic text-forest",
							children: "precision engineering"
						}),
						"."
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground",
					children: "SVS Nutraceuticals operates state-of-the-art extraction units and analytical laboratories compliant with international quality standards. From pilot-scale research to high-volume commercial production, our facilities deliver unmatched batch consistency."
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border/60 bg-bone py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Production Sites"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl text-forest-deep",
							children: "Manufacturing facilities"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-sm text-muted-foreground",
							children: "Multiple certified facilities equipped with high-tech extraction machinery to support global supply requirements."
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "mt-12 grid gap-8 md:grid-cols-3",
					children: [
						{
							icon: Building2,
							title: "Unit I (Telangana)",
							desc: "DSIR-registered corporate headquarters, R&D center of excellence, and pilot-scale extraction suites."
						},
						{
							icon: Settings,
							title: "Unit II (Tamil Nadu)",
							desc: "High-volume commercial extraction plant specialized in counter-current solvent extraction and spray drying."
						},
						{
							icon: Award,
							title: "Unit III (Coimbatore)",
							desc: "Dedicated advanced formulation center featuring liposomal encapsulation, custom granulation, and cleanrooms."
						}
					].map(({ icon: Icon, title, desc }) => /* @__PURE__ */ jsxs("div", {
						className: "bg-card p-8 border border-border/70 rounded-sm",
						children: [
							/* @__PURE__ */ jsx(Icon, {
								className: "h-8 w-8 text-forest",
								strokeWidth: 1.2
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 font-display text-2xl text-forest-deep",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: desc
							})
						]
					}, title))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-editorial py-24",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-14 md:grid-cols-2",
				children: [/* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Extraction Systems"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-display text-4xl text-forest-deep",
						children: "Advanced processing platforms"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 space-y-6",
						children: [
							{
								title: "Supercritical CO₂ Extraction",
								desc: "Eco-friendly, solvent-free extraction method utilizing pressurized carbon dioxide to gently isolate volatile oils and temperature-sensitive compounds."
							},
							{
								title: "Counter-Current Extraction",
								desc: "Continuous counter-current extraction loops designed for maximum active compound yields and minimal solvent consumption."
							},
							{
								title: "Low-Temperature Vacuum Drying",
								desc: "Maintains biological activity and prevents active marker degradation during the drying and concentration phase."
							}
						].map(({ title, desc }) => /* @__PURE__ */ jsxs("li", {
							className: "border-l border-forest/30 pl-5",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl text-forest-deep",
								children: title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: desc
							})]
						}, title))
					})
				] }), /* @__PURE__ */ jsxs("div", { children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Compliance & Labs"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-display text-4xl text-forest-deep",
						children: "Analytical QC & Cleanrooms"
					}),
					/* @__PURE__ */ jsx("ul", {
						className: "mt-8 space-y-6",
						children: [
							{
								title: "ISO Class 8 Cleanrooms",
								desc: "Dedicated positive-pressure packaging rooms featuring strict HEPA filtration and climate controls to avoid cross-contamination."
							},
							{
								title: "High-Performance Testing Lab",
								desc: "Equipped with state-of-the-art analytical tools including HPLC, Gas Chromatography (GC) with Headspace, and UV-Vis spectrophotometers."
							},
							{
								title: "In-House Microbiology Lab",
								desc: "Rigorous testing for total plate count (TPC), yeast/mold, and specific pathogens, ensuring absolute safety for every batch before release."
							}
						].map(({ title, desc }) => /* @__PURE__ */ jsxs("li", {
							className: "border-l border-forest/30 pl-5",
							children: [/* @__PURE__ */ jsx("p", {
								className: "font-display text-xl text-forest-deep",
								children: title
							}), /* @__PURE__ */ jsx("p", {
								className: "mt-2 text-sm text-muted-foreground",
								children: desc
							})]
						}, title))
					})
				] })]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-forest-deep text-cream py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial flex flex-col items-center text-center",
				children: [
					/* @__PURE__ */ jsx(ShieldAlert, {
						className: "h-12 w-12 text-sage",
						strokeWidth: 1.2
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-6 font-display text-4xl leading-tight text-cream md:text-5xl max-w-2xl",
						children: "Conforming to international regulatory guidelines"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-cream/70 max-w-xl text-sm leading-relaxed",
						children: "Our facilities are engineered to comply with strict international guidelines, enabling smooth registration and regulatory clearances for our clients in the US, EU, and Asia-Pacific regions."
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "mt-8 flex flex-wrap justify-center gap-6 text-xs font-semibold tracking-wider text-sage",
						children: [
							/* @__PURE__ */ jsx("span", { children: "USFDA COMPLIANT" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "TGA GUIDELINES" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "MEDSAFE COMPLIANT" }),
							/* @__PURE__ */ jsx("span", { children: "·" }),
							/* @__PURE__ */ jsx("span", { children: "EU REGULATIONS" })
						]
					})
				]
			})
		})
	] });
}
//#endregion
export { InfrastructurePage as component };
