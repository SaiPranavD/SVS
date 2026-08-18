//#region \0tanstack-start-manifest:v
var tsrStartManifest = () => ({ routes: {
	__root__: {
		filePath: "D:/SVS/src/routes/__root.tsx",
		children: [
			"/",
			"/about",
			"/infrastructure",
			"/quality",
			"/sitemap.xml",
			"/sustainability",
			"/products/$slug",
			"/products/"
		],
		preloads: ["/assets/index-B_QlKbMw.js"],
		scripts: [{ attrs: {
			type: "module",
			async: !0,
			src: "/assets/index-B_QlKbMw.js"
		} }]
	},
	"/": {
		filePath: "D:/SVS/src/routes/index.tsx",
		children: void 0,
		preloads: [
			"/assets/routes-BoFKUqdN.js",
			"/assets/shield-check-3C71Kb-y.js",
			"/assets/products-BuP9H_se.js",
			"/assets/sustainability-farm-BAmr8nEJ.js"
		]
	},
	"/about": {
		filePath: "D:/SVS/src/routes/about.tsx",
		children: void 0,
		preloads: ["/assets/about-CePeF1l8.js"]
	},
	"/infrastructure": {
		filePath: "D:/SVS/src/routes/infrastructure.tsx",
		children: void 0,
		preloads: ["/assets/infrastructure-B0s0H5Hp.js"]
	},
	"/quality": {
		filePath: "D:/SVS/src/routes/quality.tsx",
		children: void 0,
		preloads: ["/assets/quality-BQl0bpUX.js", "/assets/shield-check-3C71Kb-y.js"]
	},
	"/sustainability": {
		filePath: "D:/SVS/src/routes/sustainability.tsx",
		children: void 0,
		preloads: ["/assets/sustainability-BRYLJ8MS.js", "/assets/sustainability-farm-BAmr8nEJ.js"]
	},
	"/products/$slug": {
		filePath: "D:/SVS/src/routes/products.$slug.tsx",
		children: void 0,
		preloads: ["/assets/products._slug-DJ7LAi8J.js"]
	},
	"/products/": {
		filePath: "D:/SVS/src/routes/products.index.tsx",
		children: void 0,
		preloads: ["/assets/products.index-B4FEEBnG.js", "/assets/products-BuP9H_se.js"]
	}
} });
//#endregion
export { tsrStartManifest };
