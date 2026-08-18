import { n as products } from "./products-DMMDK0VA.js";
import { useEffect, useState } from "react";
import { HeadContent, Link, Outlet, Scripts, createFileRoute, createRootRouteWithContext, createRouter, lazyRouteComponent, redirect } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Menu, X } from "lucide-react";
//#region src/styles.css?url
var styles_default = "/assets/styles-B43dUr2V.css";
//#endregion
//#region src/lib/lovable-error-reporting.ts
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
//#endregion
//#region src/components/site-header.tsx
function SiteHeader() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-editorial flex h-16 items-center justify-between gap-8",
			children: [
				/* @__PURE__ */ jsxs(Link, {
					to: "/",
					className: "flex items-center gap-2.5",
					onClick: () => setOpen(false),
					children: [/* @__PURE__ */ jsx("img", {
						src: "/logo-mark.png",
						alt: "SVS Logo",
						className: "h-9 w-9 object-contain"
					}), /* @__PURE__ */ jsxs("div", {
						className: "flex flex-col",
						children: [/* @__PURE__ */ jsx("span", {
							className: "font-display text-xl leading-none tracking-tight text-forest-deep",
							children: "SVS"
						}), /* @__PURE__ */ jsx("span", {
							className: "text-[0.55rem] font-medium tracking-[0.28em] text-muted-foreground mt-0.5 leading-none",
							children: "NUTRACEUTICALS"
						})]
					})]
				}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-5 md:flex",
					children: [
						/* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest",
							activeProps: { className: "text-forest" },
							activeOptions: { exact: true },
							children: "Home"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest",
							activeProps: { className: "text-forest" },
							children: "About Us"
						}),
						/* @__PURE__ */ jsx(Link, {
							to: "/products",
							className: "text-[0.8rem] font-medium tracking-wide text-foreground/75 transition-colors hover:text-forest",
							activeProps: { className: "text-forest" },
							children: "Products"
						})
					]
				}),
				/* @__PURE__ */ jsx("button", {
					className: "md:hidden",
					onClick: () => setOpen((o) => !o),
					"aria-label": "Toggle menu",
					children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "border-t border-border/70 bg-background/95 backdrop-blur-md md:hidden animate-slide-down",
			children: /* @__PURE__ */ jsxs("nav", {
				className: "container-editorial flex flex-col gap-1 py-4",
				children: [
					/* @__PURE__ */ jsx(Link, {
						to: "/",
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary",
						children: "Home"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/about",
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary",
						children: "About Us"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/products",
						onClick: () => setOpen(false),
						className: "rounded-md px-2 py-2 text-sm text-foreground/80 hover:bg-secondary",
						children: "Products"
					})
				]
			})
		})]
	});
}
//#endregion
//#region src/components/site-footer.tsx
function SiteFooter() {
	return /* @__PURE__ */ jsxs("footer", {
		className: "mt-24 border-t border-border/70 bg-forest-deep text-cream",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "container-editorial grid gap-12 py-16 md:grid-cols-4",
			children: [
				/* @__PURE__ */ jsxs("div", {
					className: "md:col-span-2",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsx("img", {
							src: "/logo-mark.png",
							alt: "SVS Logo",
							className: "h-10 w-10 object-contain"
						}), /* @__PURE__ */ jsxs("div", {
							className: "flex flex-col",
							children: [/* @__PURE__ */ jsx("span", {
								className: "font-display text-2xl leading-none text-cream",
								children: "SVS"
							}), /* @__PURE__ */ jsx("span", {
								className: "text-[0.65rem] font-medium tracking-[0.28em] text-sage mt-1 leading-none",
								children: "NUTRACEUTICALS"
							})]
						})]
					}), /* @__PURE__ */ jsx("p", {
						className: "mt-4 max-w-sm text-sm leading-relaxed text-cream/75",
						children: "A research-driven manufacturer of standardized botanical extracts and nutraceutical ingredients, serving global partners in dietary supplement, functional food and pharmaceutical categories since 2004."
					})]
				}),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-sage",
					children: "Navigate"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-cream/80",
					children: [
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/",
							className: "hover:text-cream",
							children: "Home"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/about",
							className: "hover:text-cream",
							children: "About Us"
						}) }),
						/* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, {
							to: "/products",
							className: "hover:text-cream",
							children: "Products"
						}) })
					]
				})] }),
				/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("p", {
					className: "eyebrow text-sage",
					children: "Get in touch"
				}), /* @__PURE__ */ jsxs("ul", {
					className: "mt-4 space-y-2 text-sm text-cream/80",
					children: [
						/* @__PURE__ */ jsx("li", { children: "info@svsnutraceuticals.com" }),
						/* @__PURE__ */ jsx("li", { children: "+91 78429 51590" }),
						/* @__PURE__ */ jsxs("li", {
							className: "text-[0.75rem] text-cream/50 mt-4 leading-relaxed",
							children: [
								"FSSAI No: 13626999000489",
								/* @__PURE__ */ jsx("br", {}),
								"GST No: 36CEXPD2886J2ZQ"
							]
						})
					]
				})] })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "border-t border-cream/10",
			children: /* @__PURE__ */ jsxs("div", {
				className: "container-editorial flex flex-col justify-between gap-2 py-6 text-xs text-cream/50 md:flex-row",
				children: [/* @__PURE__ */ jsxs("p", { children: [
					"© ",
					(/* @__PURE__ */ new Date()).getFullYear(),
					" SVS Nutraceuticals Pvt. Ltd. All rights reserved."
				] }), /* @__PURE__ */ jsx("p", { children: "Statements have not been evaluated by the FDA. B2B use only." })]
			})
		})]
	});
}
//#endregion
//#region src/routes/__root.tsx
function NotFoundComponent() {
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("div", {
				className: "flex flex-1 items-center justify-center px-4",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-md text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "Error 404"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-5xl text-forest-deep",
							children: "Not found"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm text-muted-foreground",
							children: "The page you're looking for doesn't exist or has moved. Explore our ingredient catalog instead."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex justify-center gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/",
								className: "rounded-full bg-forest px-5 py-2 text-sm text-primary-foreground hover:bg-forest-deep",
								children: "Home"
							}), /* @__PURE__ */ jsx(Link, {
								to: "/products",
								className: "rounded-full border border-border px-5 py-2 text-sm hover:bg-secondary",
								children: "Browse products"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	useEffect(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ jsxs("div", {
		className: "flex min-h-screen flex-col",
		children: [
			/* @__PURE__ */ jsx(SiteHeader, {}),
			/* @__PURE__ */ jsx("main", {
				className: "flex flex-1 items-center justify-center px-4 py-20",
				children: /* @__PURE__ */ jsxs("div", {
					className: "max-w-2xl text-center",
					children: [
						/* @__PURE__ */ jsx("p", {
							className: "eyebrow",
							children: "SVS Nutraceuticals"
						}),
						/* @__PURE__ */ jsx("h1", {
							className: "mt-4 font-display text-4xl text-forest-deep md:text-5xl",
							children: "Quality Ingredients, Trusted Solutions."
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 text-sm leading-relaxed text-muted-foreground md:text-base",
							children: "Explore our nutraceutical raw materials, vitamins, minerals, herbal extracts, amino acids, and pharmaceutical excipients."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-8 flex flex-wrap justify-center gap-3",
							children: [/* @__PURE__ */ jsx(Link, {
								to: "/products",
								className: "rounded-full bg-forest px-5 py-2.5 text-sm text-primary-foreground hover:bg-forest-deep",
								children: "Browse products"
							}), /* @__PURE__ */ jsx("button", {
								onClick: reset,
								className: "rounded-full border border-border px-5 py-2.5 text-sm hover:bg-secondary",
								children: "Refresh view"
							})]
						})
					]
				})
			}),
			/* @__PURE__ */ jsx(SiteFooter, {})
		]
	});
}
var Route$8 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "SVS Nutraceuticals — Standardized Botanical Extracts & Nutraceutical Ingredients" },
			{
				name: "description",
				content: "SVS Nutraceuticals manufactures research-grade botanical extracts and nutraceutical ingredients for global dietary supplement, functional food and pharmaceutical partners."
			},
			{
				name: "author",
				content: "SVS Nutraceuticals"
			},
			{
				property: "og:site_name",
				content: "SVS Nutraceuticals"
			},
			{
				property: "og:title",
				content: "SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Research-grade botanical extracts and nutraceutical ingredients, engineered for global partners."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				href: "/favicon.ico?v=2",
				type: "image/x-icon"
			},
			{
				rel: "icon",
				href: "/favicon-32.png?v=2",
				type: "image/png",
				sizes: "32x32"
			},
			{
				rel: "icon",
				href: "/favicon-192.png?v=2",
				type: "image/png",
				sizes: "192x192"
			},
			{
				rel: "apple-touch-icon",
				href: "/favicon-180.png?v=2",
				sizes: "180x180"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=Inter:wght@400;500;600&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ jsxs("html", {
		lang: "en",
		children: [/* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }), /* @__PURE__ */ jsxs("body", { children: [children, /* @__PURE__ */ jsx(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$8.useRouteContext();
	return /* @__PURE__ */ jsx(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ jsxs("div", {
			className: "flex min-h-screen flex-col",
			children: [
				/* @__PURE__ */ jsx(SiteHeader, {}),
				/* @__PURE__ */ jsx("main", {
					className: "flex-1",
					children: /* @__PURE__ */ jsx(Outlet, {})
				}),
				/* @__PURE__ */ jsx(SiteFooter, {})
			]
		})
	});
}
//#endregion
//#region src/routes/sustainability.tsx
var $$splitComponentImporter$6 = () => import("./sustainability-vBV4gg_J.js");
var Route$7 = createFileRoute("/sustainability")({
	head: () => ({
		meta: [
			{ title: "Sustainability — SVS Nutraceuticals" },
			{
				name: "description",
				content: "Regenerative sourcing, water-efficient cultivation and traceable botanicals — how SVS Nutraceuticals safeguards the ecosystems its ingredients depend on."
			},
			{
				property: "og:title",
				content: "Sustainability — SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Sourcing, cultivation and environmental commitments."
			},
			{
				property: "og:url",
				content: "/sustainability"
			}
		],
		links: [{
			rel: "canonical",
			href: "/sustainability"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
//#endregion
//#region src/routes/sitemap[.]xml.ts
var BASE_URL = "";
var Route$6 = createFileRoute("/sitemap.xml")({ server: { handlers: { GET: async () => {
	const staticPaths = [
		{
			path: "/",
			priority: "1.0",
			changefreq: "weekly"
		},
		{
			path: "/products",
			priority: "0.9",
			changefreq: "weekly"
		},
		{
			path: "/quality",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/sustainability",
			priority: "0.7",
			changefreq: "monthly"
		},
		{
			path: "/about",
			priority: "0.6",
			changefreq: "monthly"
		}
	];
	const productPaths = products.map((p) => ({
		path: `/products/${p.slug}`,
		priority: "0.8",
		changefreq: "monthly"
	}));
	const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${[...staticPaths, ...productPaths].map((e) => `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`).join("\n")}\n</urlset>`;
	return new Response(xml, { headers: {
		"Content-Type": "application/xml",
		"Cache-Control": "public, max-age=3600"
	} });
} } } });
//#endregion
//#region src/routes/quality.tsx
var $$splitComponentImporter$5 = () => import("./quality-BRbk0S6D.js");
var Route$5 = createFileRoute("/quality")({
	head: () => ({
		meta: [
			{ title: "Quality & Compliance — SVS Nutraceuticals" },
			{
				name: "description",
				content: "SVS Nutraceuticals operates with in-house QC and full traceability from botanical source to finished batch."
			},
			{
				property: "og:title",
				content: "Quality & Compliance — SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Certifications and testing protocols."
			},
			{
				property: "og:url",
				content: "/quality"
			}
		],
		links: [{
			rel: "canonical",
			href: "/quality"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
//#endregion
//#region src/routes/infrastructure.tsx
var $$splitComponentImporter$4 = () => import("./infrastructure-DFhcUSOD.js");
var Route$4 = createFileRoute("/infrastructure")({
	head: () => ({
		meta: [
			{ title: "Infrastructure & Facilities — SVS Nutraceuticals" },
			{
				name: "description",
				content: "Discover SVS's state-of-the-art DSIR-registered R&D center, extraction plants, and cleanroom facilities compliant with USFDA, TGA, and EU standards."
			},
			{
				property: "og:title",
				content: "Infrastructure — SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Our advanced manufacturing facilities, cleanrooms, and testing laboratories."
			},
			{
				property: "og:url",
				content: "/infrastructure"
			}
		],
		links: [{
			rel: "canonical",
			href: "/infrastructure"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
//#endregion
//#region src/routes/about.tsx
var $$splitComponentImporter$3 = () => import("./about-C4-fC79d.js");
var Route$3 = createFileRoute("/about")({
	head: () => ({
		meta: [
			{ title: "About — SVS Nutraceuticals" },
			{
				name: "description",
				content: "SVS Nutraceuticals is a leading supplier and trader of high-quality nutraceutical raw materials, vitamins, minerals, herbal extracts, and excipients."
			},
			{
				property: "og:title",
				content: "About — SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Our story and global reach."
			},
			{
				property: "og:url",
				content: "/about"
			}
		],
		links: [{
			rel: "canonical",
			href: "/about"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
//#endregion
//#region src/routes/index.tsx
var $$splitComponentImporter$2 = () => import("./routes-BQcA_ELu.js");
var Route$2 = createFileRoute("/")({
	head: () => ({ meta: [{ title: "SVS Nutraceuticals — Standardized Botanical Extracts for Global Partners" }, {
		name: "description",
		content: "SVS Nutraceuticals manufactures research-grade botanical extracts and nutraceutical ingredients for global dietary supplement, functional food and pharmaceutical partners."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
//#endregion
//#region src/routes/products.index.tsx
var $$splitComponentImporter$1 = () => import("./products.index-7HALZw22.js");
var Route$1 = createFileRoute("/products/")({
	head: () => ({
		meta: [
			{ title: "Ingredient Portfolio — SVS Nutraceuticals" },
			{
				name: "description",
				content: "Browse the full SVS ingredient portfolio: standardized botanical extracts, phytochemicals, essential oils, and natural vitamins."
			},
			{
				property: "og:title",
				content: "Products — SVS Nutraceuticals"
			},
			{
				property: "og:description",
				content: "Our dynamic ingredient portfolio."
			},
			{
				property: "og:url",
				content: "/products"
			}
		],
		links: [{
			rel: "canonical",
			href: "/products"
		}]
	}),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
//#endregion
//#region src/routes/products.$slug.tsx
var $$splitComponentImporter = () => import("./products._slug-grtjcOp7.js");
var Route = createFileRoute("/products/$slug")({
	beforeLoad: () => {
		throw redirect({ to: "/products" });
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
//#region src/routeTree.gen.ts
var SustainabilityRoute = Route$7.update({
	id: "/sustainability",
	path: "/sustainability",
	getParentRoute: () => Route$8
});
var SitemapDotxmlRoute = Route$6.update({
	id: "/sitemap.xml",
	path: "/sitemap.xml",
	getParentRoute: () => Route$8
});
var QualityRoute = Route$5.update({
	id: "/quality",
	path: "/quality",
	getParentRoute: () => Route$8
});
var InfrastructureRoute = Route$4.update({
	id: "/infrastructure",
	path: "/infrastructure",
	getParentRoute: () => Route$8
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$8
});
var IndexRoute = Route$2.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$8
});
var ProductsIndexRoute = Route$1.update({
	id: "/products/",
	path: "/products/",
	getParentRoute: () => Route$8
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	InfrastructureRoute,
	QualityRoute,
	SitemapDotxmlRoute,
	SustainabilityRoute,
	ProductsSlugRoute: Route.update({
		id: "/products/$slug",
		path: "/products/$slug",
		getParentRoute: () => Route$8
	}),
	ProductsIndexRoute
};
var routeTree = Route$8._addFileChildren(rootRouteChildren)._addFileTypes();
//#endregion
//#region src/router.tsx
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
