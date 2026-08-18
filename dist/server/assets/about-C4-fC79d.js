import { Fragment, jsx, jsxs } from "react/jsx-runtime";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial py-16 md:py-24",
			children: [/* @__PURE__ */ jsx("p", {
				className: "eyebrow",
				children: "About Us"
			}), /* @__PURE__ */ jsxs("h1", {
				className: "mt-4 max-w-5xl font-display text-4xl leading-tight text-forest-deep md:text-6xl",
				children: [
					"Quality ingredients are the foundation of",
					" ",
					/* @__PURE__ */ jsx("em", {
						className: "not-italic text-forest",
						children: "superior healthcare products"
					}),
					"."
				]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial grid gap-14 pb-20 md:grid-cols-12",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "md:col-span-7 space-y-8 text-base leading-relaxed text-foreground/85",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "text-lg font-medium text-forest-deep leading-relaxed",
						children: "At SVS Nutraceuticals, we believe that quality ingredients are the foundation of superior healthcare products. We specialize in sourcing and supplying a comprehensive range of nutraceutical raw materials and pharmaceutical excipients for manufacturers, contract manufacturers, research organizations, and healthcare companies."
					}),
					/* @__PURE__ */ jsx("p", { children: "Our commitment to integrity, quality, and customer satisfaction has helped us build long-term relationships with clients throughout India." }),
					/* @__PURE__ */ jsxs("div", {
						className: "border-l-2 border-forest pl-6 py-2 italic text-muted-foreground bg-sage-soft/30 rounded-r-sm",
						children: [/* @__PURE__ */ jsx("h4", {
							className: "font-display font-semibold text-forest-deep not-italic mb-2",
							children: "Our Commitment"
						}), "“At SVS Nutraceuticals, we are committed to delivering excellence through quality products, dependable service, and customer satisfaction. Our goal is to become your preferred partner for all nutraceutical ingredients, pharmaceutical excipients, and specialty raw material requirements.”"]
					})
				]
			}), /* @__PURE__ */ jsxs("aside", {
				className: "md:col-span-5 space-y-6",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "rounded-sm border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl text-forest-deep font-semibold",
						children: "Our Vision"
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-3 text-sm leading-relaxed text-muted-foreground",
						children: "To become one of India’s most trusted suppliers of nutraceutical ingredients and pharmaceutical excipients by delivering exceptional quality, reliable service, and innovative sourcing solutions."
					})]
				}), /* @__PURE__ */ jsxs("div", {
					className: "rounded-sm border border-border bg-card p-6",
					children: [/* @__PURE__ */ jsx("h3", {
						className: "font-display text-xl text-forest-deep font-semibold",
						children: "Our Mission"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-3 text-sm text-foreground/80",
						children: [
							"To supply high-quality nutraceutical ingredients.",
							"To maintain international quality standards.",
							"To provide cost-effective sourcing solutions.",
							"To ensure timely delivery and excellent customer support.",
							"To build long-term business partnerships based on trust and reliability."
						].map((m, idx) => /* @__PURE__ */ jsxs("li", {
							className: "flex items-start gap-2",
							children: [/* @__PURE__ */ jsx("span", { className: "mt-1 h-1.5 w-1.5 rounded-full bg-forest shrink-0" }), /* @__PURE__ */ jsx("span", { children: m })]
						}, idx))
					})]
				})]
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "bg-bone border-y border-border/40 py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow text-center",
						children: "Value Proposition"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 text-center font-display text-3xl text-forest-deep md:text-4xl",
						children: "Why Choose SVS Nutraceuticals?"
					}),
					/* @__PURE__ */ jsx("div", {
						className: "mt-12 grid grid-cols-2 gap-4 lg:grid-cols-5",
						children: [
							"Premium Quality Products",
							"Trusted Global & Indian Manufacturers",
							"Competitive Pricing",
							"Ready Stock Availability",
							"Fast & Safe Delivery",
							"Technical Support",
							"Flexible Supply Solutions",
							"Reliable Customer Service",
							"Customized Sourcing",
							"Complete Documentation Support"
						].map((prop, idx) => /* @__PURE__ */ jsxs("div", {
							className: "rounded-sm border border-border/50 bg-background p-5 shadow-sm hover:shadow-md transition",
							children: [/* @__PURE__ */ jsx("div", {
								className: "flex h-8 w-8 items-center justify-center rounded-full bg-sage-soft text-forest mb-4 font-semibold",
								children: "✓"
							}), /* @__PURE__ */ jsx("p", {
								className: "text-sm font-medium text-forest-deep leading-snug",
								children: prop
							})]
						}, idx))
					})
				]
			})
		}),
		/* @__PURE__ */ jsx("section", {
			className: "container-editorial py-20",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto max-w-4xl rounded-sm border border-forest/20 bg-sage-soft/10 p-8 md:p-12 text-center",
				children: [
					/* @__PURE__ */ jsx("p", {
						className: "eyebrow",
						children: "Quality Assurance"
					}),
					/* @__PURE__ */ jsx("h2", {
						className: "mt-4 font-display text-3xl text-forest-deep",
						children: "Quality Policy"
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-6 text-lg leading-relaxed text-muted-foreground font-light max-w-3xl mx-auto",
						children: "“Quality is our highest priority. Every product supplied by SVS Nutraceuticals is sourced from trusted manufacturers and undergoes strict quality checks to ensure compliance with industry standards.”"
					})
				]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial pb-20",
			children: [
				/* @__PURE__ */ jsx("p", {
					className: "eyebrow",
					children: "Registered details"
				}),
				/* @__PURE__ */ jsx("h2", {
					className: "mt-4 max-w-3xl font-display text-3xl text-forest-deep md:text-4xl",
					children: "Corporate Office & Operations"
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-10 grid gap-6 md:grid-cols-2",
					children: [[
						"Legal Registrations",
						"Certifications & Compliance",
						"FSSAI Lic No: 13626999000489\nGST No: 36CEXPD2886J2ZQ"
					]].map(([city, dept, addr]) => /* @__PURE__ */ jsxs("div", {
						className: "rounded-sm border border-border bg-card p-6 flex flex-col justify-between",
						children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
							className: "font-display text-2xl text-forest-deep",
							children: city
						}), /* @__PURE__ */ jsx("p", {
							className: "mt-2 text-xs uppercase tracking-widest text-forest",
							children: dept
						})] }), /* @__PURE__ */ jsx("p", {
							className: "mt-6 text-sm text-muted-foreground whitespace-pre-line leading-relaxed",
							children: addr
						})]
					}, city))
				})
			]
		})
	] });
}
//#endregion
export { About as component };
