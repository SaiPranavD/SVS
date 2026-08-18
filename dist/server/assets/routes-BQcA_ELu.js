import { n as products } from "./products-DMMDK0VA.js";
import { t as hero_botanical_default } from "./hero-botanical-BWQhbH6V.js";
import { t as sustainability_farm_default } from "./sustainability-farm-B0VMn6Pg.js";
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, Beaker, Package, ShieldCheck, Sprout } from "lucide-react";
//#endregion
//#region src/routes/index.tsx?tsr-split=component
var slides = [
	{
		image: hero_botanical_default,
		title: "Curcuma longa L.",
		subtitle: "BATCH 24-CU-0912 · ≥ 95% CURCUMINOIDS (HPLC)",
		alt: "Macro photograph of a green botanical leaf with water droplets"
	},
	{
		image: sustainability_farm_default,
		title: "Piper nigrum L.",
		subtitle: "BATCH 24-PP-0841 · ≥ 95% PIPERINE (HPLC)",
		alt: "Ethical botanical cultivation field at sunrise"
	},
	{
		image: "/assets/research-lab-CTKVGmJb.jpg",
		title: "Withania somnifera L.",
		subtitle: "BATCH 24-AS-1102 · ≥ 5% WITHANOLIDES (HPLC)",
		alt: "Advanced phytochemistry research and testing laboratory"
	}
];
function Home() {
	const [activeSlide, setActiveSlide] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => {
			setActiveSlide((prev) => (prev + 1) % slides.length);
		}, 6e3);
		return () => clearInterval(timer);
	}, []);
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "relative min-h-[90vh] bg-bone flex items-center py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial grid gap-12 md:grid-cols-12 items-center",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-6",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Standardized botanical extracts & ingredients"
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-6 font-display text-[2.75rem] leading-[1.02] tracking-tight text-forest-deep md:text-[4rem]",
							children: [
								"Quality Ingredients,",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("em", {
									className: "not-italic text-forest",
									children: "Trusted Solutions."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-6 max-w-lg text-base leading-relaxed text-muted-foreground",
							children: "SVS Nutraceuticals is a leading supplier and trader of high-quality nutraceutical raw materials, vitamins, minerals, herbal extracts, amino acids, and pharmaceutical excipients."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-10 flex flex-wrap items-center gap-4",
							children: /* @__PURE__ */ jsxs(Link, {
								to: "/products",
								className: "group inline-flex items-center gap-2 rounded-full bg-forest px-6 py-3 text-sm font-medium text-primary-foreground transition hover:bg-forest-deep",
								children: ["Explore ingredients", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
							})
						}),
						/* @__PURE__ */ jsxs("dl", {
							className: "mt-14 grid grid-cols-3 gap-6 border-t border-border/70 pt-8 text-sm",
							children: [
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Ingredients"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-1 font-display text-3xl text-forest-deep",
									children: "120+"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Countries served"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-1 font-display text-3xl text-forest-deep",
									children: "42"
								})] }),
								/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("dt", {
									className: "text-muted-foreground",
									children: "Years of experience"
								}), /* @__PURE__ */ jsx("dd", {
									className: "mt-1 font-display text-3xl text-forest-deep",
									children: "20"
								})] })
							]
						})
					]
				}), /* @__PURE__ */ jsx("div", {
					className: "relative md:col-span-6",
					children: /* @__PURE__ */ jsxs("div", {
						className: "relative overflow-hidden rounded-sm shadow-2xl shadow-forest-deep/20 h-[480px] md:h-[620px]",
						children: [slides.map((slide, idx) => /* @__PURE__ */ jsxs("div", {
							className: `absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`,
							children: [/* @__PURE__ */ jsx("img", {
								src: slide.image,
								alt: slide.alt,
								width: 1600,
								height: 1200,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-deep/70 to-transparent p-6",
								children: [/* @__PURE__ */ jsx("p", {
									className: "font-display text-xl text-cream",
									children: slide.title
								}), /* @__PURE__ */ jsx("p", {
									className: "text-xs tracking-widest text-cream/70",
									children: slide.subtitle
								})]
							})]
						}, idx)), /* @__PURE__ */ jsx("div", {
							className: "absolute bottom-6 right-6 z-20 flex gap-2",
							children: slides.map((_, idx) => /* @__PURE__ */ jsx("button", {
								onClick: () => setActiveSlide(idx),
								"aria-label": `Go to slide ${idx + 1}`,
								className: `h-1.5 rounded-full transition-all duration-300 ${idx === activeSlide ? "w-6 bg-cream" : "w-1.5 bg-cream/40"}`
							}, idx))
						})]
					})
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial py-24 border-b border-border/40",
			id: "products-section",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "flex flex-col items-center text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Ingredients Portfolio"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl text-forest-deep md:text-5xl",
							children: "Featured Products"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-2xl text-sm text-muted-foreground",
							children: "Explore a selection of our high-quality nutraceutical raw materials, vitamins, minerals, and herbal extracts."
						})
					]
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-16",
					children: /* @__PURE__ */ jsx("ul", {
						className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
						children: products.slice(0, 6).map((p) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs(Link, {
							to: "/products",
							className: "group block overflow-hidden rounded-lg border border-border bg-card p-6 transition-all duration-350 hover:border-forest/50 hover:shadow-lg hover:shadow-forest-deep/5 hover:-translate-y-1",
							children: [
								/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-forest group-hover:scale-125 transition-transform" }), /* @__PURE__ */ jsx("p", {
										className: "text-[0.65rem] tracking-widest text-forest font-semibold uppercase",
										children: p.standardization
									})]
								}),
								/* @__PURE__ */ jsx("h3", {
									className: "mt-3 font-display text-2xl text-forest-deep group-hover:text-forest transition-colors",
									children: p.name
								}),
								p.botanical && /* @__PURE__ */ jsx("p", {
									className: "mt-1 text-sm italic text-muted-foreground font-light",
									children: p.botanical
								}),
								/* @__PURE__ */ jsx("p", {
									className: "mt-4 text-sm text-foreground/75 leading-relaxed line-clamp-2",
									children: p.tagline
								})
							]
						}) }, p.slug))
					})
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-14 flex justify-center",
					children: /* @__PURE__ */ jsxs(Link, {
						to: "/products",
						className: "group inline-flex items-center gap-2 rounded-full bg-forest px-8 py-3.5 text-sm font-medium text-primary-foreground transition hover:bg-forest-deep",
						children: ["View all products", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4 transition group-hover:translate-x-0.5" })]
					})
				})
			]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "border-y border-border/60 bg-bone",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial py-24",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Manufacturing excellence"
						}),
						/* @__PURE__ */ jsxs("h2", {
							className: "mt-4 font-display text-4xl text-forest-deep md:text-5xl",
							children: [
								"From seed to ",
								/* @__PURE__ */ jsx("em", {
									className: "not-italic text-forest",
									children: "certified batch"
								}),
								"."
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-base leading-relaxed text-muted-foreground",
							children: "A vertically integrated supply chain — cultivation, extraction, analytical release and pharma-grade packaging under one quality system."
						})
					]
				}), /* @__PURE__ */ jsx("ol", {
					className: "mt-14 grid gap-8 md:grid-cols-4",
					children: [
						{
							icon: Sprout,
							step: "01",
							title: "Sourcing",
							body: "Ethically cultivated botanicals from certified farms across India and Southeast Asia."
						},
						{
							icon: Beaker,
							step: "02",
							title: "Extraction",
							body: "Supercritical CO2, hydro-alcoholic and spray-drying platforms tuned per marker."
						},
						{
							icon: ShieldCheck,
							step: "03",
							title: "QC release",
							body: "HPLC, GC-MS and microbiological testing at every intermediate and finished stage."
						},
						{
							icon: Package,
							step: "04",
							title: "Packaging",
							body: "Tamper-evident packaging with full batch traceability worldwide."
						}
					].map(({ icon: Icon, step, title, body }) => /* @__PURE__ */ jsxs("li", {
						className: "border-t border-forest/30 pt-5",
						children: [
							/* @__PURE__ */ jsxs("div", {
								className: "flex items-center justify-between",
								children: [/* @__PURE__ */ jsx(Icon, {
									className: "h-6 w-6 text-forest",
									strokeWidth: 1.4
								}), /* @__PURE__ */ jsx("span", {
									className: "font-display text-sm text-muted-foreground",
									children: step
								})]
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "mt-6 font-display text-2xl text-forest-deep",
								children: title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mt-3 text-sm leading-relaxed text-muted-foreground",
								children: body
							})
						]
					}, step))
				})]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-editorial py-28",
			children: /* @__PURE__ */ jsxs("div", {
				className: "grid gap-10 md:grid-cols-12",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Global partnership"
					}), /* @__PURE__ */ jsxs("h2", {
						className: "mt-4 font-display text-4xl text-forest-deep md:text-5xl",
						children: [
							"Formulate your next ",
							/* @__PURE__ */ jsx("em", {
								className: "not-italic text-forest",
								children: "breakthrough"
							}),
							" with us."
						]
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "md:col-span-6",
					children: [/* @__PURE__ */ jsx("p", {
						className: "text-base leading-relaxed text-muted-foreground",
						children: "From technical documentation and 3rd-party COAs to co-development, private-label manufacturing and stability studies — our commercial team supports your product from concept to market launch."
					}), /* @__PURE__ */ jsx("div", {
						className: "mt-8 flex flex-wrap gap-4",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/quality",
							className: "inline-flex items-center gap-2 rounded-full border border-forest/30 px-6 py-3 text-sm font-medium text-forest-deep hover:bg-sage-soft",
							children: "Quality & compliance"
						})
					})]
				})]
			})
		})
	] });
}
//#endregion
export { Home as component };
