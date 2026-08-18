import { n as products, t as categories } from "./products-DMMDK0VA.js";
import { t as hero_botanical_default } from "./hero-botanical-BWQhbH6V.js";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Fragment, jsx, jsxs } from "react/jsx-runtime";
import { FlaskConical, Leaf, Search, X } from "lucide-react";
//#region src/assets/category-herbal.jpg
var category_herbal_default = "/assets/category-herbal-DSwvVOa8.jpg";
//#endregion
//#region src/assets/category-phytochemicals.jpg
var category_phytochemicals_default = "/assets/category-phytochemicals-BC58dleB.jpg";
//#endregion
//#region src/assets/category-oils.jpg
var category_oils_default = "/assets/category-oils-DM5QVrSH.jpg";
//#endregion
//#region src/assets/category-minerals.jpg
var category_minerals_default = "/assets/category-minerals-ClFbpagS.jpg";
//#endregion
//#region src/routes/products.index.tsx?tsr-split=component
var SUPER_CATEGORIES = [
	{
		id: "all",
		label: "All Products"
	},
	{
		id: "herbal-extracts",
		label: "Herbal Extracts"
	},
	{
		id: "vitamins-minerals",
		label: "Vitamins, Minerals & Excipients"
	}
];
var categoryImages = {
	"herbal-extracts": category_herbal_default,
	"phytochemicals": category_phytochemicals_default,
	"essential-oils": category_oils_default,
	"natural-vitamins": category_minerals_default,
	"natural-minerals": category_minerals_default,
	"probiotics": category_herbal_default,
	"custom-formulations": category_minerals_default,
	"organic-products": category_herbal_default,
	"signature-products": category_herbal_default,
	"carotenoids": category_phytochemicals_default
};
function getSuperCategory(category) {
	if (category === "natural-vitamins" || category === "natural-minerals" || category === "custom-formulations") return "vitamins-minerals";
	return "herbal-extracts";
}
function ProductsPage() {
	const [query, setQuery] = useState("");
	const [activeTab, setActiveTab] = useState("all");
	const [selectedProduct, setSelectedProduct] = useState(null);
	const filtered = products.filter((p) => {
		const q = query.toLowerCase();
		const matchesSearch = p.name.toLowerCase().includes(q) || p.botanical.toLowerCase().includes(q) || p.standardization.toLowerCase().includes(q) || p.tagline.toLowerCase().includes(q);
		const matchesTab = activeTab === "all" || getSuperCategory(p.category) === activeTab;
		return matchesSearch && matchesTab;
	});
	const activeCategories = Object.keys(categories).filter((catId) => filtered.some((p) => p.category === catId));
	return /* @__PURE__ */ jsxs(Fragment, { children: [
		/* @__PURE__ */ jsxs("div", {
			className: "relative h-56 w-full overflow-hidden bg-forest-deep",
			children: [/* @__PURE__ */ jsx("img", {
				src: hero_botanical_default,
				alt: "Products Banner",
				className: "absolute inset-0 h-full w-full object-cover opacity-25 mix-blend-multiply"
			}), /* @__PURE__ */ jsxs("div", {
				className: "container-editorial relative flex h-full flex-col justify-center text-cream",
				children: [/* @__PURE__ */ jsx("h1", {
					className: "font-display text-4xl font-semibold md:text-5xl",
					children: "Products"
				}), /* @__PURE__ */ jsxs("p", {
					className: "mt-2 text-xs tracking-wider text-cream/70",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-cream",
							children: "Home"
						}),
						" >",
						" ",
						/* @__PURE__ */ jsx("span", {
							className: "font-medium text-cream",
							children: "Products"
						})
					]
				})]
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "container-editorial pt-16 pb-8 border-b border-border/40",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "text-center mb-10",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-4xl text-forest-deep font-semibold",
					children: "Our Categories"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Explore our diverse segments of premium nutraceutical raw materials"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						id: "herbal-extracts",
						label: "Herbal Extracts",
						img: category_herbal_default,
						desc: "Standardized botanical extracts"
					},
					{
						id: "phytochemicals",
						label: "Phytochemicals",
						img: category_phytochemicals_default,
						desc: "Isolated active compounds"
					},
					{
						id: "essential-oils",
						label: "Essential Oils",
						img: category_oils_default,
						desc: "Pure therapeutic extracts"
					},
					{
						id: "vitamins-minerals",
						label: "Vitamins & Minerals",
						img: category_minerals_default,
						desc: "Organic nutrients & excipients"
					}
				].map((cat) => /* @__PURE__ */ jsxs("button", {
					onClick: () => {
						if (cat.id === "vitamins-minerals") setActiveTab("vitamins-minerals");
						else if (cat.id === "herbal-extracts") setActiveTab("herbal-extracts");
						else setActiveTab("all");
						setTimeout(() => {
							const el = document.getElementById(cat.id);
							if (el) el.scrollIntoView({
								behavior: "smooth",
								block: "start"
							});
						}, 100);
					},
					className: "group block rounded-lg border border-border bg-card overflow-hidden text-center transition-all duration-350 hover:border-forest/50 hover:shadow-lg hover:-translate-y-1 cursor-pointer",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "aspect-[3/2] overflow-hidden bg-bone relative",
						children: [/* @__PURE__ */ jsx("img", {
							src: cat.img,
							alt: cat.label,
							className: "h-full w-full object-cover transition duration-500 group-hover:scale-105"
						}), /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-forest-deep/10 group-hover:bg-transparent transition-colors duration-300" })]
					}), /* @__PURE__ */ jsxs("div", {
						className: "p-4",
						children: [/* @__PURE__ */ jsx("h3", {
							className: "font-display text-lg font-semibold text-forest-deep group-hover:text-forest transition-colors duration-300",
							children: cat.label
						}), /* @__PURE__ */ jsx("p", {
							className: "text-xs text-muted-foreground mt-1",
							children: cat.desc
						})]
					})]
				}, cat.id))
			})]
		}),
		/* @__PURE__ */ jsxs("div", {
			className: "container-editorial py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-16",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "relative w-full max-w-md",
					children: [/* @__PURE__ */ jsx(Search, { className: "absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ jsx("input", {
						type: "text",
						placeholder: "Search ingredients by name or botanical source...",
						value: query,
						onChange: (e) => setQuery(e.target.value),
						className: "w-full rounded-full border border-border bg-background py-3 pl-11 pr-5 text-sm focus:border-forest focus:outline-none focus:ring-1 focus:ring-forest"
					})]
				}), /* @__PURE__ */ jsx("div", {
					className: "flex flex-wrap gap-2",
					children: SUPER_CATEGORIES.map((tab) => {
						return /* @__PURE__ */ jsx("button", {
							onClick: () => setActiveTab(tab.id),
							className: `rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-350 cursor-pointer ${activeTab === tab.id ? "bg-forest text-cream shadow-md shadow-forest/15" : "bg-sage-soft/30 text-forest-deep hover:bg-sage-soft/60"}`,
							children: tab.label
						}, tab.id);
					})
				})]
			}), activeCategories.length > 0 ? /* @__PURE__ */ jsx("div", {
				className: "space-y-16",
				children: activeCategories.map((catId) => {
					const catInfo = categories[catId];
					const catProducts = filtered.filter((p) => p.category === catId);
					return /* @__PURE__ */ jsxs("div", {
						id: catId,
						className: "flow-root border-b border-border/40 pb-12 last:border-0 last:pb-0 scroll-mt-24",
						children: [/* @__PURE__ */ jsxs("div", {
							className: "float-left w-full lg:w-[23%] lg:mr-[2%] mb-6 bg-card rounded-lg border border-border overflow-hidden flex flex-col",
							children: [/* @__PURE__ */ jsx("div", {
								className: "aspect-[2/1] overflow-hidden bg-bone relative",
								children: /* @__PURE__ */ jsx("img", {
									src: categoryImages[catId] || "/assets/category-herbal-DSwvVOa8.jpg",
									alt: catInfo?.label || catId,
									className: "h-full w-full object-cover"
								})
							}), /* @__PURE__ */ jsxs("div", {
								className: "p-5 flex flex-col justify-between flex-1 min-h-[140px]",
								children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("div", {
									className: "flex items-center gap-3",
									children: [catId === "natural-vitamins" || catId === "natural-minerals" || catId === "phytochemicals" ? /* @__PURE__ */ jsx(FlaskConical, { className: "h-5 w-5 text-forest" }) : /* @__PURE__ */ jsx(Leaf, { className: "h-5 w-5 text-forest" }), /* @__PURE__ */ jsx("h2", {
										className: "font-display text-xl text-forest-deep font-semibold",
										children: catInfo?.label || catId
									})]
								}), /* @__PURE__ */ jsx("p", {
									className: "mt-2.5 text-xs leading-relaxed text-muted-foreground",
									children: catInfo?.description
								})] }), /* @__PURE__ */ jsxs("div", {
									className: "mt-4 text-[0.65rem] tracking-widest text-forest font-semibold uppercase",
									children: [
										catProducts.length,
										" ",
										catProducts.length === 1 ? "Ingredient" : "Ingredients"
									]
								})]
							})]
						}), /* @__PURE__ */ jsx("ul", {
							className: "m-0 p-0 list-none",
							children: catProducts.map((p) => /* @__PURE__ */ jsx("li", {
								className: "float-left w-[50%] md:w-[33.33%] lg:w-[25%] p-1.5 h-[115px] lg:h-[110px] box-border",
								children: /* @__PURE__ */ jsxs("button", {
									onClick: () => setSelectedProduct(p),
									className: "w-full h-full flex items-start gap-3 text-left group p-2.5 rounded-lg hover:bg-sage-soft/30 transition-all duration-350 cursor-pointer border border-transparent hover:border-border/30",
									children: [/* @__PURE__ */ jsx("span", { className: "mt-2 h-1.5 w-1.5 rounded-full bg-forest flex-shrink-0 group-hover:scale-150 group-hover:bg-forest-deep transition-all duration-300" }), /* @__PURE__ */ jsxs("div", { children: [
										/* @__PURE__ */ jsx("h3", {
											className: "font-display text-[15px] font-semibold text-forest-deep group-hover:text-forest transition-colors duration-300 line-clamp-2 leading-snug",
											children: p.name
										}),
										p.botanical && /* @__PURE__ */ jsx("p", {
											className: "text-xs italic text-muted-foreground font-light mt-0.5 line-clamp-1",
											children: p.botanical
										}),
										p.standardization && /* @__PURE__ */ jsx("p", {
											className: "text-[0.65rem] tracking-wider text-forest font-semibold uppercase mt-1.5 line-clamp-1",
											children: p.standardization
										})
									] })]
								})
							}, p.slug))
						})]
					}, catId);
				})
			}) : /* @__PURE__ */ jsx("div", {
				className: "py-24 text-center",
				children: /* @__PURE__ */ jsxs("p", {
					className: "text-lg text-muted-foreground",
					children: [
						"No ingredients found matching \"",
						query,
						"\" under this category."
					]
				})
			})]
		}),
		selectedProduct && /* @__PURE__ */ jsx("div", {
			className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest-deep/45 backdrop-blur-sm animate-fade-in",
			children: /* @__PURE__ */ jsxs("div", {
				className: "bg-background border border-border w-full max-w-2xl rounded-lg shadow-2xl overflow-hidden max-h-[90vh] flex flex-col animate-slide-up",
				children: [
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 border-b border-border bg-bone flex items-start justify-between gap-4",
						children: [/* @__PURE__ */ jsxs("div", { children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[0.65rem] tracking-widest text-forest font-semibold uppercase",
								children: categories[selectedProduct.category]?.label || selectedProduct.category
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-3xl text-forest-deep mt-1",
								children: selectedProduct.name
							}),
							selectedProduct.botanical && /* @__PURE__ */ jsx("p", {
								className: "text-sm italic text-muted-foreground mt-0.5",
								children: selectedProduct.botanical
							})
						] }), /* @__PURE__ */ jsx("button", {
							onClick: () => setSelectedProduct(null),
							className: "rounded-full p-1.5 hover:bg-muted text-muted-foreground hover:text-foreground transition cursor-pointer",
							children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
						})]
					}),
					/* @__PURE__ */ jsxs("div", {
						className: "p-6 overflow-y-auto space-y-6 flex-1 text-sm",
						children: [
							selectedProduct.tagline && /* @__PURE__ */ jsx("p", {
								className: "text-base text-foreground/80 italic leading-relaxed border-l-2 border-forest pl-4",
								children: selectedProduct.tagline
							}),
							/* @__PURE__ */ jsxs("div", {
								className: "grid grid-cols-2 gap-4 border-t border-border pt-4",
								children: [
									selectedProduct.standardization && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground font-medium uppercase tracking-wider block",
										children: "Standardization"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-forest-deep font-medium mt-0.5 block",
										children: selectedProduct.standardization
									})] }),
									selectedProduct.partUsed && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground font-medium uppercase tracking-wider block",
										children: "Part Used"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-forest-deep font-medium mt-0.5 block",
										children: selectedProduct.partUsed
									})] }),
									selectedProduct.origin && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
										className: "text-xs text-muted-foreground font-medium uppercase tracking-wider block",
										children: "Origin"
									}), /* @__PURE__ */ jsx("span", {
										className: "text-forest-deep font-medium mt-0.5 block",
										children: selectedProduct.origin
									})] })
								]
							}),
							selectedProduct.benefits && selectedProduct.benefits.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-lg text-forest-deep mb-2",
								children: "Key Benefits"
							}), /* @__PURE__ */ jsx("ul", {
								className: "list-disc pl-5 space-y-1 text-foreground/80",
								children: selectedProduct.benefits.map((benefit, idx) => /* @__PURE__ */ jsx("li", { children: benefit }, idx))
							})] }),
							selectedProduct.applications && selectedProduct.applications.length > 0 && /* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
								className: "font-display text-lg text-forest-deep mb-2",
								children: "Applications"
							}), /* @__PURE__ */ jsx("div", {
								className: "flex flex-wrap gap-2",
								children: selectedProduct.applications.map((app, idx) => /* @__PURE__ */ jsx("span", {
									className: "bg-sage-soft/30 text-forest text-xs font-semibold px-3 py-1 rounded-full",
									children: app
								}, idx))
							})] })
						]
					}),
					/* @__PURE__ */ jsx("div", {
						className: "p-4 border-t border-border bg-bone/50 flex justify-end gap-2",
						children: /* @__PURE__ */ jsx(Link, {
							to: "/contact",
							className: "rounded-full bg-forest px-5 py-2 text-sm text-primary-foreground hover:bg-forest-deep transition",
							onClick: () => setSelectedProduct(null),
							children: "Request Spec Sheet & Quote"
						})
					})
				]
			})
		})
	] });
}
//#endregion
export { ProductsPage as component };
