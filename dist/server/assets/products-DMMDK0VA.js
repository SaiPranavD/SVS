//#region src/lib/products.ts
var categories = {
	"herbal-extracts": {
		label: "Herbal Extracts",
		description: "Standardized botanical extracts for dietary supplements and functional foods."
	},
	phytochemicals: {
		label: "Phytochemicals",
		description: "Pure isolated phytochemical compounds with verified potency and purity."
	},
	"essential-oils": {
		label: "Essential Oils",
		description: "Therapeutic-grade essential oils for aromatherapy, cosmetics, and wellness."
	},
	probiotics: {
		label: "Probiotics",
		description: "Shelf-stable probiotic strains for gut health and microbiome support."
	},
	"natural-vitamins": {
		label: "Natural Vitamins",
		description: "Plant-derived standardized organic vitamins for clean-label supplements."
	},
	"natural-minerals": {
		label: "Natural Minerals",
		description: "Plant-sourced bioavailable organic mineral complexes."
	},
	"custom-formulations": {
		label: "Custom Formulations",
		description: "Tailored ingredient blends optimized for specific functional applications."
	},
	"organic-products": {
		label: "Organic Products",
		description: "Certified organic botanical powders and extracts."
	},
	"signature-products": {
		label: "Signature Products",
		description: "Clinically proven, branded ingredients manufactured to maximum efficacy."
	},
	carotenoids: {
		label: "Carotenoids",
		description: "High-purity natural carotenoid pigments for eye, skin, and antioxidant support."
	}
};
var products = [
	{
		"slug": "momordica-charantia-extract",
		"name": "Momordica charantia Extract",
		"botanical": "Momordica charantia",
		"category": "herbal-extracts",
		"tagline": "Standardized Bitter Melon extract to support glycemic balance",
		"image": "/products/momordica-charantia-extract.jpg",
		"standardization": "Charantin ≥ 5% / 10%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Supports healthy blood glucose levels",
			"Promotes metabolic homeostasis",
			"Rich source of natural antioxidants"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "kava-extract",
		"name": "Kava Extract",
		"botanical": "Piper methysticum",
		"category": "herbal-extracts",
		"tagline": "Premium Kava Kava extract for relaxation and stress support",
		"image": "/products/kava-extract.jpg",
		"standardization": "Kavalactones ≥ 30%",
		"partUsed": "Root",
		"origin": "Vanuatu / India",
		"benefits": [
			"Promotes relaxation and mental calm",
			"Supports healthy sleep cycles",
			"Helps alleviate daily anxiety"
		],
		"applications": [
			"Dietary Supplements",
			"Relaxation Beverages",
			"Herbal Remedies"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "hyaluronic-acid",
		"name": "Hyaluronic Acid",
		"botanical": "Sodium Hyaluronate",
		"category": "phytochemicals",
		"tagline": "Highly purified Hyaluronic Acid for tissue and skin hydration",
		"image": "/products/hyaluronic-acid.svg",
		"standardization": "Glucuronic Acid ≥ 45%",
		"partUsed": "Fermentation",
		"origin": "India",
		"benefits": [
			"Supports skin elasticity and hydration",
			"Promotes joint lubrication and mobility",
			"Enhances cellular moisture retention"
		],
		"applications": [
			"Nutraceuticals",
			"Cosmeceuticals",
			"Joint Health Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "gymnema-sylvestre-extract",
		"name": "Gymnema Sylvestre extract",
		"botanical": "Gymnema sylvestre",
		"category": "herbal-extracts",
		"tagline": "Standardized Gymnema extract to support glucose metabolism",
		"image": "/products/gymnema-sylvestre-extract.jpg",
		"standardization": "Gymnemic Acids ≥ 25% / 75%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Helps reduce sugar cravings",
			"Supports healthy insulin response",
			"Promotes glucose homeostasis"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Blood Sugar Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Brownish-green powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "ginseng-extract",
		"name": "Ginseng Extract",
		"botanical": "Panax ginseng",
		"category": "herbal-extracts",
		"tagline": "Premium Panax Ginseng extract for vitality and cognitive support",
		"image": "/products/ginseng-extract.jpg",
		"standardization": "Ginsenosides ≥ 10% / 20% / 80%",
		"partUsed": "Root",
		"origin": "India / China",
		"benefits": [
			"Enhances physical stamina and energy",
			"Supports cognitive clarity and focus",
			"Acts as a powerful adaptogen"
		],
		"applications": [
			"Dietary Supplements",
			"Energy Drinks",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "ginger-extract",
		"name": "Ginger Extract",
		"botanical": "Zingiber officinale",
		"category": "herbal-extracts",
		"tagline": "Standardized Ginger extract for digestive comfort and wellness",
		"image": "/products/ginger-extract.jpg",
		"standardization": "Gingerols ≥ 5% / 10%",
		"partUsed": "Rhizome",
		"origin": "India",
		"benefits": [
			"Promotes healthy digestion and gastrointestinal comfort",
			"Supports systemic anti-inflammatory response",
			"Enhances immune defenses"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "fenugreek-extract",
		"name": "Fenugreek extract",
		"botanical": "Trigonella foenum-graecum",
		"category": "herbal-extracts",
		"tagline": "Premium Fenugreek extract supporting metabolic and hormonal balance",
		"image": "/products/fenugreek-extract.png",
		"standardization": "Saponins ≥ 50%",
		"partUsed": "Seed",
		"origin": "India",
		"benefits": [
			"Supports healthy blood glucose levels",
			"Promotes hormonal homeostasis",
			"Aids in healthy digestion"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Lactation Support Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Yellowish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "echinecea-extract",
		"name": "Echinecea Extract",
		"botanical": "Echinacea purpurea",
		"category": "herbal-extracts",
		"tagline": "Potent Echinacea extract for seasonal immune defense",
		"image": "/products/echinacea-extract.jpg",
		"standardization": "Polyphenols ≥ 4%",
		"partUsed": "Aerial Parts",
		"origin": "India",
		"benefits": [
			"Boosts seasonal immune defenses",
			"Supports respiratory tract health",
			"Rich source of bioactive phytochemicals"
		],
		"applications": [
			"Dietary Supplements",
			"Herbal Teas",
			"Immune Defense Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Greenish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "evening-primrose-oil",
		"name": "Evening Primrose Oil",
		"botanical": "Oenothera biennis",
		"category": "essential-oils",
		"tagline": "Pure cold-pressed Evening Primrose Oil rich in GLA",
		"image": "/products/evening-primrose-oil.jpg",
		"standardization": "Gamma-Linolenic Acid (GLA) ≥ 9% / 10%",
		"partUsed": "Seed",
		"origin": "India",
		"benefits": [
			"Supports hormonal balance during PMS/menopause",
			"Promotes healthy, hydrated skin",
			"Provides essential omega-6 fatty acids"
		],
		"applications": [
			"Nutraceuticals",
			"Softgel Capsules",
			"Cosmeceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Pale yellow clear oil"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "green-tea-extract",
		"name": "Green Tea Extract",
		"botanical": "Camellia sinensis",
		"category": "herbal-extracts",
		"tagline": "Standardized Green Tea extract rich in polyphenols and EGCG",
		"image": "/products/green-tea-extract.jpg",
		"standardization": "Polyphenols ≥ 50%, EGCG ≥ 15% / 50%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Provides highly potent antioxidant protection",
			"Supports healthy weight management",
			"Promotes cardiovascular health"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Beverages"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "tribulus-terrestris-extract",
		"name": "Tribulus Terrestris Extract",
		"botanical": "Tribulus terrestris",
		"category": "natural-minerals",
		"tagline": "High-purity Tribulus extract supporting vitality and mineral transport",
		"image": "/products/tribulus-terrestris-extract.png",
		"standardization": "Saponins ≥ 40% / 90%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Supports testosterone production & libido",
			"Enhances athletic performance & stamina",
			"Aids in kidney and urinary tract health"
		],
		"applications": [
			"Dietary Supplements",
			"Sports Nutrition",
			"Male Vitality Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Yellow-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "lycopene",
		"name": "Lycopene",
		"botanical": "Solanum lycopersicum",
		"category": "carotenoids",
		"tagline": "Premium natural Lycopene extract from vine-ripened tomatoes",
		"image": "/products/lycopene-extract.jpg",
		"standardization": "Lycopene ≥ 5% / 10% / 20%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Powerful cardiovascular antioxidant",
			"Supports prostate health",
			"Protects skin against photo-damage"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Deep red powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "cinnamomum-cassia-extract",
		"name": "Cinnamomum cassia extract",
		"botanical": "Cinnamomum cassia",
		"category": "herbal-extracts",
		"tagline": "Standardized Cinnamon extract supporting metabolic wellness",
		"image": "/organic-products/cinnamon-bark-extract.jpg",
		"standardization": "Polyphenols ≥ 10% / 20%",
		"partUsed": "Bark",
		"origin": "India / Vietnam",
		"benefits": [
			"Supports healthy blood sugar levels",
			"Provides strong antioxidant defenses",
			"Aids digestive system function"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Reddish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "l-glutathione-enriched-yeast-extract",
		"name": "L-Glutathione Enriched Yeast Extract",
		"botanical": "Saccharomyces cerevisiae",
		"category": "phytochemicals",
		"tagline": "Premium yeast extract standardized to high L-Glutathione content",
		"image": "/products/glutathione-yeast-extract.svg",
		"standardization": "L-Glutathione ≥ 8% / 15%",
		"partUsed": "Yeast Cell",
		"origin": "India / China",
		"benefits": [
			"Supports liver detoxification pathways",
			"Provides powerful master antioxidant benefits",
			"Promotes cellular health & skin brightness"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Skin Care Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White to off-white powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "asparagus-racemosus-extract",
		"name": "Asparagus racemosus extract",
		"botanical": "Asparagus racemosus",
		"category": "herbal-extracts",
		"tagline": "Standardized Shatavari extract supporting female hormonal vitality",
		"image": "/organic-products/asparagus-extract.jpg",
		"standardization": "Saponins ≥ 20% / 40%",
		"partUsed": "Root",
		"origin": "India",
		"benefits": [
			"Supports female reproductive health and lactation",
			"Helps adapt to physical and emotional stress",
			"Promotes mucosal immune defense"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Women's Health Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "ginkgo-biloba-extract",
		"name": "Ginkgo Biloba Extract",
		"botanical": "Ginkgo biloba",
		"category": "herbal-extracts",
		"tagline": "Standardized Ginkgo extract for microcirculation and cognitive health",
		"image": "/products/ginkgo-biloba-extract.jpg",
		"standardization": "Flavone Glycosides ≥ 24%, Lactones ≥ 6%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Enhances cognitive function and memory recall",
			"Improves peripheral microcirculation",
			"Provides protective antioxidant action"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Nootropics"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light green-yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "ashwagandha-extract",
		"name": "Ashwagandha extract",
		"botanical": "Withania somnifera",
		"category": "herbal-extracts",
		"tagline": "Medhya Rasayana grade Ashwagandha extract for stress & cortisol management",
		"image": "/products/ashwagandha-extract.jpg",
		"standardization": "Withanolides ≥ 2.5% / 5% / 8%",
		"partUsed": "Root",
		"origin": "India",
		"benefits": [
			"Clinically evaluated to reduce stress & anxiety",
			"Supports restful sleep & energy recovery",
			"Helps optimize cognitive stamina"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Adaptogenic Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "spirulina-powder",
		"name": "Spirulina powder",
		"botanical": "Arthrospira platensis",
		"category": "natural-vitamins",
		"tagline": "Premium nutrient-dense blue-green algae powder",
		"image": "/products/spirulina-powder.jpg",
		"standardization": "Protein ≥ 60%",
		"partUsed": "Whole Biomass",
		"origin": "India",
		"benefits": [
			"Exceptionally rich source of vitamins & minerals",
			"Supports cardiovascular & immune defenses",
			"Promotes cell detoxification & energy levels"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Superfood Powder Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Fine dark green powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "banaba-extract",
		"name": "Banaba Extract",
		"botanical": "Lagerstroemia speciosa",
		"category": "herbal-extracts",
		"tagline": "Standardized Banaba leaf extract supporting glycemic pathways",
		"image": "/products/banaba-extract.jpg",
		"standardization": "Corosolic Acid ≥ 1% / 10%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Supports healthy blood glucose metabolism",
			"Promotes cellular glucose uptake",
			"Aids in healthy weight control"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Glycemic Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "aloe-vera-powder",
		"name": "Aloe Vera Powder",
		"botanical": "Aloe barbadensis",
		"category": "natural-vitamins",
		"tagline": "Nutritious freeze-dried Aloe Vera leaf gel powder",
		"image": "/products/aloe-vera-powder.jpg",
		"standardization": "Aloin-free / 200:1 Concentration",
		"partUsed": "Leaf Gel",
		"origin": "India",
		"benefits": [
			"Supports digestive and gastrointestinal comfort",
			"Rich in natural vitamins, minerals, and enzymes",
			"Promotes skin hydration and cell repair"
		],
		"applications": [
			"Dietary Supplements",
			"Cosmeceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light cream powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "boswellia-serrata-extract",
		"name": "Boswellia serrata Extract",
		"botanical": "Boswellia serrata",
		"category": "herbal-extracts",
		"tagline": "Standardized Boswellia extract for joint mobility and comfort",
		"image": "/products/boswellia-serrata-extract.jpg",
		"standardization": "Boswellic Acids ≥ 65%, AKBA ≥ 10%",
		"partUsed": "Gum Resin",
		"origin": "India",
		"benefits": [
			"Promotes healthy joint function and mobility",
			"Supports systemic anti-inflammatory response",
			"Protects joint cartilage health"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Joint Care Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Off-white to light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "garcinia-cambogia-extract",
		"name": "Garcinia Cambogia Extract",
		"botanical": "Garcinia gummi-gutta",
		"category": "herbal-extracts",
		"tagline": "Premium weight-management support standardized to Hydroxycitric Acid",
		"image": "/products/garcinia-cambogia-extract.jpg",
		"standardization": "Hydroxycitric Acid (HCA) ≥ 50% / 60%",
		"partUsed": "Fruit Rind",
		"origin": "India",
		"benefits": [
			"Helps inhibit fat storage pathways",
			"Supports healthy appetite regulation",
			"Promotes healthy serotonin levels"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Weight Loss Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Off-white powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "acacia-catechu-extract",
		"name": "Acacia catechu Extract",
		"botanical": "Acacia catechu",
		"category": "herbal-extracts",
		"tagline": "Traditional Kattha extract rich in active catechins",
		"image": "/products/acacia-catechu.jpg",
		"standardization": "Catechins ≥ 10% / 20%",
		"partUsed": "Heartwood",
		"origin": "India",
		"benefits": [
			"Provides highly potent antioxidant defenses",
			"Supports oral hygiene and gum health",
			"Aids in healthy digestion"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Oral Care Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Dark brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "acerola-cherry-extract",
		"name": "Acerola Cherry Extract",
		"botanical": "Malpighia emarginata",
		"category": "natural-vitamins",
		"tagline": "Excellent source of organic Vitamin C from Acerola cherries",
		"image": "/signature-products/acerola-extract-vitamin-c.jpg",
		"standardization": "Vitamin C ≥ 17% / 25%",
		"partUsed": "Fruit",
		"origin": "India / Brazil",
		"benefits": [
			"Boosts systemic immune system function",
			"Enhances natural collagen synthesis",
			"Provides potent free radical scavenging"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Immune Defense Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light pinkish-orange powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "turmeric",
		"name": "Turmeric",
		"botanical": "Curcuma longa",
		"category": "herbal-extracts",
		"tagline": "Pure, standardized Turmeric extract rich in curcuminoids",
		"image": "/products/turmeric.jpg",
		"standardization": "Curcuminoids ≥ 95%",
		"partUsed": "Rhizome",
		"origin": "India",
		"benefits": [
			"Provides powerful anti-inflammatory benefits",
			"Supports healthy liver and joint functions",
			"Strong antioxidant defense"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Orange-yellow fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "zeaxanthin",
		"name": "Zeaxanthin",
		"botanical": "Tagetes erecta",
		"category": "carotenoids",
		"tagline": "Pure Zeaxanthin extract supporting macular and retinal health",
		"image": "/carotenoids/1730884803.jpg",
		"standardization": "Zeaxanthin ≥ 5% / 10% / 20%",
		"partUsed": "Flower",
		"origin": "India",
		"benefits": [
			"Filters harmful high-energy blue light",
			"Reduces retinal oxidative stress",
			"Supports central vision function"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Vision Care Products"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Orange-red powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "adhatoda-vasica-extract",
		"name": "Adhatoda vasica extract",
		"botanical": "Adhatoda vasica",
		"category": "herbal-extracts",
		"tagline": "Standardized Vasaka extract for respiratory comfort and support",
		"image": "/products/adhatoda-vasica.jpg",
		"standardization": "Vasicine ≥ 1%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Supports respiratory and lung health",
			"Acts as a natural bronchodilator & expectorant",
			"Promotes clear bronchial pathways"
		],
		"applications": [
			"Dietary Supplements",
			"Herbal Cough Syrups",
			"Respiratory Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Greenish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "aloe-vera-extract",
		"name": "Aloe vera extract",
		"botanical": "Aloe barbadensis",
		"category": "herbal-extracts",
		"tagline": "Standardized Aloe vera leaf extract rich in polysaccharides",
		"image": "/products/aloe-vera-extract.jpg",
		"standardization": "Aloin ≤ 10ppm / Polysaccharides ≥ 10%",
		"partUsed": "Leaf Gel",
		"origin": "India",
		"benefits": [
			"Supports digestive and bowel regularity",
			"Promotes healthy, hydrated skin cells",
			"Aids systemic immune system function"
		],
		"applications": [
			"Dietary Supplements",
			"Cosmeceuticals",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Off-white fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "amla-extract",
		"name": "Amla Extract",
		"botanical": "Phyllanthus emblica",
		"category": "herbal-extracts",
		"tagline": "High-potency Amla extract rich in Vitamin C and tannins",
		"image": "/products/amla-extract.jpg",
		"standardization": "Tannins ≥ 30% / 40%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Exceptional organic antioxidant defense",
			"Promotes hair health and skin anti-aging",
			"Supports digestive and immune functions"
		],
		"applications": [
			"Dietary Supplements",
			"Cosmeceuticals",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "andrographis-paniculata-extract",
		"name": "Andrographis paniculata Extract",
		"botanical": "Andrographis paniculata",
		"category": "herbal-extracts",
		"tagline": "Standardized Kalmegh extract supporting seasonal immunity",
		"image": "/products/andrographis-paniculata-extract.jpg",
		"standardization": "Andrographolides ≥ 10% / 30% / 50%",
		"partUsed": "Whole Herb",
		"origin": "India",
		"benefits": [
			"Enhances immune cell defenses",
			"Supports respiratory system health",
			"Promotes healthy liver function"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Immune Defense Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Greenish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "astaxanthin-powder",
		"name": "Astaxanthin Powder",
		"botanical": "Haematococcus pluvialis",
		"category": "carotenoids",
		"tagline": "Highly potent natural antioxidant from microalgae",
		"image": "/carotenoids/1730884848.jpg",
		"standardization": "Astaxanthin ≥ 1% / 2% / 5% / 10%",
		"partUsed": "Whole Algae",
		"origin": "India",
		"benefits": [
			"Incredibly potent free radical scavenger",
			"Supports skin elasticity and hydration",
			"Enhances muscle endurance & recovery"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Cosmeceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Dark red fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "bacopa-monnieri-extract",
		"name": "Bacopa monnieri extract",
		"botanical": "Bacopa monnieri",
		"category": "herbal-extracts",
		"tagline": "Standardized Brahmi extract supporting cognitive wellness",
		"image": "/products/bacopa-monnieri-extract.jpg",
		"standardization": "Bacosides ≥ 20% / 50%",
		"partUsed": "Whole Herb",
		"origin": "India",
		"benefits": [
			"Enhances memory retention & recall speed",
			"Supports mental focus and concentration",
			"Provides antioxidant protective activity in brain"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Nootropic Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "beet-root-powder",
		"name": "Beet Root Powder",
		"botanical": "Beta vulgaris",
		"category": "natural-vitamins",
		"tagline": "Premium organic Beet Root powder rich in nitrates",
		"image": "/organic-products/beetroot-extract.jpg",
		"standardization": "Nitrates ≥ 1.5%",
		"partUsed": "Root",
		"origin": "India",
		"benefits": [
			"Supports nitric oxide production for cardiovascular health",
			"Enhances muscle oxygenation & stamina",
			"Provides vital B vitamins and minerals"
		],
		"applications": [
			"Sports Nutrition",
			"Superfood Blends",
			"Dietary Supplements"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Deep red powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "berberis-aristata-extract",
		"name": "Berberis aristata extract",
		"botanical": "Berberis aristata",
		"category": "herbal-extracts",
		"tagline": "High-purity Daruharidra extract supporting metabolic health",
		"image": "/products/berberis-aristata-extract.jpg",
		"standardization": "Berberine HCl ≥ 97%",
		"partUsed": "Root / Bark",
		"origin": "India",
		"benefits": [
			"Supports healthy blood glucose levels",
			"Promotes healthy lipid profiles",
			"Aids gastrointestinal balance"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Metabolic Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Bright yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "beta-carotene-powder",
		"name": "Beta Carotene Powder",
		"botanical": "Blakeslea trispora / Daucus carota",
		"category": "natural-vitamins",
		"tagline": "Natural source of pro-vitamin A for nutritional reinforcement",
		"image": "/products/beta-carotene-powder.jpg",
		"standardization": "Beta-carotene ≥ 1% / 5% / 10% / 20%",
		"partUsed": "Fermentation",
		"origin": "India",
		"benefits": [
			"Precursor to Vitamin A (converted on demand)",
			"Supports healthy immune defenses",
			"Promotes skin health and cell differentiation"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Food Colorant & Fortification"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Reddish-orange powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "black-pepper-extract",
		"name": "Black pepper Extract",
		"botanical": "Piper nigrum",
		"category": "herbal-extracts",
		"tagline": "Highly purified Black Pepper extract standardized for maximum absorption rate",
		"image": "/products/black-pepper-extract.jpg",
		"standardization": "Piperine ≥ 95%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Enhances systemic bioavailability of other nutrients",
			"Promotes healthy digestion and thermogenesis",
			"Supports metabolic efficiency"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Bioavailability Enhancers"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "bromelain",
		"name": "Bromelain",
		"botanical": "Ananas comosus",
		"category": "phytochemicals",
		"tagline": "Proteolytic enzyme extract from pineapple stem",
		"image": "/products/bromelain-extract.jpg",
		"standardization": "2400 GDU/g",
		"partUsed": "Stem",
		"origin": "India",
		"benefits": [
			"Aids protein digestion and absorption",
			"Supports joint comfort and systemic health",
			"Promotes sinus and respiratory wellness"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Digestive Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "caffeine",
		"name": "Caffeine",
		"botanical": "Coffea arabica",
		"category": "phytochemicals",
		"tagline": "Natural anhydrous caffeine for energy and alertness",
		"image": "/products/caffeine-extract.jpg",
		"standardization": "Caffeine ≥ 98%",
		"partUsed": "Bean",
		"origin": "India",
		"benefits": [
			"Boosts energy levels and stamina",
			"Enhances mental focus and alertness",
			"Promotes metabolic rate & thermogenesis"
		],
		"applications": [
			"Dietary Supplements",
			"Sports Nutrition",
			"Energy Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White crystalline powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "chamomile-extract",
		"name": "Chamomile Extract",
		"botanical": "Matricaria chamomilla",
		"category": "herbal-extracts",
		"tagline": "Standardized Chamomile extract for calm and digestion",
		"image": "/products/chamomile-extract.svg",
		"standardization": "Apigenin ≥ 1.2% / 3%",
		"partUsed": "Flower",
		"origin": "India",
		"benefits": [
			"Promotes relaxation and restful sleep",
			"Soothes digestive system comfort",
			"Provides protective antioxidant action"
		],
		"applications": [
			"Dietary Supplements",
			"Herbal Teas",
			"Calming Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Yellow-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "chondroitin-sodium-sulphate-shark",
		"name": "Chondroitin Sodium Sulphate Shark",
		"botanical": "Shark Cartilage",
		"category": "phytochemicals",
		"tagline": "High-grade Chondroitin for cartilage structure and joint cushioning",
		"image": "/products/ocimum-basilicum-tulsi-leaf-oil.jpg",
		"standardization": "Chondroitin Sodium Sulfate ≥ 90%",
		"partUsed": "Cartilage",
		"origin": "India",
		"benefits": [
			"Provides structural support to joint cartilage",
			"Improves joint lubrication & comfort",
			"Maintains bone density health"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Joint Support Formulations"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "citrus-bioflavonoids-extract",
		"name": "Citrus Bioflavonoids Extract",
		"botanical": "Citrus aurantium",
		"category": "phytochemicals",
		"tagline": "Standardized Citrus Bioflavonoids for capillary strength and immunity",
		"image": "/products/citrus-bioflavonoids-extract.png",
		"standardization": "Bioflavonoids ≥ 50%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Enhances vitamin C activity & absorption",
			"Supports vascular and capillary strength",
			"Promotes healthy immune system defense"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Vascular Support Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "coenzyme-q10",
		"name": "Coenzyme Q10",
		"botanical": "Ubiquinone",
		"category": "phytochemicals",
		"tagline": "High-purity Coenzyme Q10 for cellular energy & cardiovascular health",
		"image": "/products/coenzyme-q10.jpg",
		"standardization": "Coenzyme Q10 ≥ 98%",
		"partUsed": "Fermentation",
		"origin": "India",
		"benefits": [
			"Essential for mitochondrial cellular energy (ATP)",
			"Supports heart muscle energy & circulation",
			"Provides powerful fat-soluble antioxidant defense"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Heart Health Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Yellow to orange crystalline powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "coleus-forskohlii-extract",
		"name": "Coleus forskohlii extract",
		"botanical": "Coleus forskohlii",
		"category": "herbal-extracts",
		"tagline": "Standardized Coleus extract supporting cellular energy pathways",
		"image": "/products/coleus-forskohlii-extract.jpg",
		"standardization": "Forskolin ≥ 10% / 20%",
		"partUsed": "Root",
		"origin": "India",
		"benefits": [
			"Supports healthy fat metabolism",
			"Promotes cardiovascular and respiratory efficiency",
			"Aids in cellular signaling pathways"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Weight Management Products"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "curry-leaf-extract",
		"name": "Curry Leaf Extract",
		"botanical": "Murraya koenigii",
		"category": "herbal-extracts",
		"tagline": "Standardized Curry Leaf extract rich in plant iron and antioxidants",
		"image": "/products/curry-leaf-extract.jpg",
		"standardization": "Antioxidant Activity ≥ 30%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Provides highly bioavailable plant-derived iron",
			"Supports digestive comfort and metabolism",
			"Aids in managing healthy cholesterol profiles"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Food"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Greenish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "artichoke",
		"name": "artichoke",
		"botanical": "Cynara scolymus",
		"category": "herbal-extracts",
		"tagline": "Standardized Artichoke extract supporting bile production & digestion",
		"image": "/products/artichoke.jpg",
		"standardization": "Cynarin ≥ 2.5% / 5%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Supports liver and gall bladder functions",
			"Aids in healthy fat digestion and lipid control",
			"Promotes gut wellness and detox"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Digestive Comfort Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Greenish-brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "passiflora-incarnata-extract",
		"name": "Passiflora incarnata extract",
		"botanical": "Passiflora incarnata",
		"category": "herbal-extracts",
		"tagline": "Standardized Passion Flower extract for calming mood and sleep support",
		"image": "/products/passiflora-incarnata-extract.jpg",
		"standardization": "Flavonoids ≥ 3.5% / 4%",
		"partUsed": "Flower / Herb",
		"origin": "India",
		"benefits": [
			"Helps reduce daily nervous stress & tension",
			"Supports restful sleep cycles",
			"Promotes emotional relaxation and calm"
		],
		"applications": [
			"Dietary Supplements",
			"Calming Blends",
			"Sleep Support Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Brownish powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "phosphatidylserine",
		"name": "Phosphatidylserine",
		"botanical": "Glycine max",
		"category": "phytochemicals",
		"tagline": "Soy-derived Phosphatidylserine supporting cognitive health",
		"image": "/products/phosphatidylserine.jpg",
		"standardization": "Phosphatidylserine ≥ 20% / 50%",
		"partUsed": "Seed",
		"origin": "India / China",
		"benefits": [
			"Supports cognitive memory function & alertness",
			"Alleviates mental stress and cortisol spikes",
			"Maintains cell membrane integrity in brain"
		],
		"applications": [
			"Dietary Supplements",
			"Nootropic Formulas",
			"Cognitive Health Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "policosanol",
		"name": "Policosanol",
		"botanical": "Saccharum officinarum",
		"category": "phytochemicals",
		"tagline": "Sugarcane wax extract supporting healthy cholesterol levels",
		"image": "/products/policosanol.jpg",
		"standardization": "Octacosanol ≥ 60%",
		"partUsed": "Stem Wax",
		"origin": "India",
		"benefits": [
			"Promotes healthy cardiovascular circulation",
			"Supports balanced LDL and HDL cholesterol ratios",
			"Enhances vascular health efficiency"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Cardiovascular Blends"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "pterocarpus-marsupium-extract",
		"name": "Pterocarpus marsupium extract",
		"botanical": "Pterocarpus marsupium",
		"category": "herbal-extracts",
		"tagline": "Standardized Vijayasar extract supporting glycemic homeostasis",
		"image": "/products/pterocarpus-marsupium-extract.jpg",
		"standardization": "Pterostilbene ≥ 5%",
		"partUsed": "Heartwood",
		"origin": "India",
		"benefits": [
			"Supports healthy blood glucose pathways",
			"Acts as a strong natural antioxidant agent",
			"Promotes cardiovascular cell health"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Blood Glucose Support"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "quercetin",
		"name": "Quercetin",
		"botanical": "Sophora japonica",
		"category": "phytochemicals",
		"tagline": "Highly purified Quercetin extract for seasonal immune response",
		"image": "/products/quercetin.jpg",
		"standardization": "Quercetin ≥ 95%",
		"partUsed": "Flower",
		"origin": "India",
		"benefits": [
			"Provides highly potent anti-inflammatory protection",
			"Supports respiratory comfort & histamine response",
			"Synergizes with zinc and vitamin C for immunity"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Seasonal Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Bright yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "resveratrol",
		"name": "Resveratrol",
		"botanical": "Polygonum cuspidatum",
		"category": "phytochemicals",
		"tagline": "Standardized Trans-Resveratrol supporting longevity & cellular health",
		"image": "/products/resveratrol.jpg",
		"standardization": "Trans-Resveratrol ≥ 98%",
		"partUsed": "Root",
		"origin": "India",
		"benefits": [
			"Promotes cellular longevity & sirtuin activation",
			"Provides strong protection against free radicals",
			"Supports cardiovascular endothelial function"
		],
		"applications": [
			"Dietary Supplements",
			"Anti-Aging Formulas",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White fine powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "senna-extract",
		"name": "Senna Extract",
		"botanical": "Cassia angustifolia",
		"category": "herbal-extracts",
		"tagline": "Standardized Senna extract for healthy bowel regularity",
		"image": "/products/senna-extract.jpeg",
		"standardization": "Sennosides ≥ 20%",
		"partUsed": "Leaf / Pod",
		"origin": "India",
		"benefits": [
			"Promotes healthy, natural bowel regularity",
			"Relieves temporary occasional constipation",
			"Supports colon cleansing functions"
		],
		"applications": [
			"Dietary Supplements",
			"Herbal Laxatives",
			"Detox Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO 22000"]
	},
	{
		"slug": "cholesterol-95",
		"name": "Cholesterol 95%",
		"botanical": "Animal source",
		"category": "natural-minerals",
		"tagline": "High-purity cholesterol for liposomes and pharmaceutical formulations",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Cholesterol ≥ 95%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Essential component for liposomal drug delivery",
			"Stabilizes cell membranes",
			"Improves formulation stability"
		],
		"applications": [
			"Pharmaceuticals",
			"Cosmetics",
			"Research"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White or almost white crystalline powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "chromium-chloride",
		"name": "Chromium Chloride",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Essential trace mineral to support glucose tolerance and insulin sensitivity",
		"image": "/products/green-crystals.jpg",
		"standardization": "Chromium ≥ 99%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Supports glucose metabolism",
			"Promotes insulin sensitivity",
			"Trace element source"
		],
		"applications": ["Dietary Supplements", "Nutraceuticals"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Green crystalline powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "citric-acid",
		"name": "Citric Acid",
		"botanical": "Citrus fruits (natural source)",
		"category": "natural-minerals",
		"tagline": "Natural preservative and acidulant for food and pharmaceuticals",
		"image": "/vitamins/citrus-limon.jpg",
		"standardization": "Anhydrous / Monohydrate ≥ 99.5%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Natural acidulant",
			"Acts as an antioxidant synergist",
			"Enhances preservation"
		],
		"applications": ["Food & Beverage", "Pharmaceuticals"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White crystalline powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "gum-acacia",
		"name": "Gum Acacia",
		"botanical": "Acacia senegal",
		"category": "natural-minerals",
		"tagline": "Natural stabilizer, binder, and dietary fiber source",
		"image": "/products/acacia-catechu.jpg",
		"standardization": "Soluble dietary fiber ≥ 85%",
		"partUsed": "Bark exudate",
		"origin": "India",
		"benefits": [
			"Natural binding agent",
			"Excellent prebiotic fiber",
			"Emulsion stabilizer"
		],
		"applications": [
			"Nutraceuticals",
			"Food Industry",
			"Pharmaceutical Excipient"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Off-white to pale yellow powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "hiflow-super-cell",
		"name": "Hiflow Super Cell",
		"botanical": "Mineral source (Diatomaceous earth)",
		"category": "natural-minerals",
		"tagline": "High-performance filtration aid and clarifier for food and pharmaceutical processing",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Processing Aid",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Highly efficient filtration medium",
			"Clarifies liquids and solutions",
			"Chemically inert"
		],
		"applications": ["Pharmaceutical Processing", "Food & Beverage Clarification"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White to off-white fine powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "60 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "magnesium-citrate-monohydrate-usp",
		"name": "Magnesium citrate Monohydrate-USP",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Highly bioavailable USP-grade magnesium complex to support bone and muscle health",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Magnesium content 11.5% - 13.0%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Supports bone health and density",
			"Aids muscle function and relaxation",
			"Highly bioavailable magnesium source"
		],
		"applications": [
			"Dietary Supplements",
			"Pharmaceuticals",
			"Functional Beverages"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["USP", "ISO"]
	},
	{
		"slug": "magnesium-sulphate",
		"name": "Magnesium Sulphate",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Essential magnesium salt for electrolyte balance and pharmaceutical applications",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Magnesium Sulphate ≥ 99.5%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Helps maintain electrolyte balance",
			"Supports muscular recovery",
			"Relieves muscle soreness"
		],
		"applications": [
			"Nutraceuticals",
			"Pharmaceuticals",
			"Personal Care"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Colorless crystals or white crystalline powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "maltodextrin",
		"name": "Maltodextrin",
		"botanical": "Zea mays (Corn)",
		"category": "natural-minerals",
		"tagline": "Premium carbohydrate excipient, carrier, and spray-drying aid",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Dextrose Equivalent (DE) 10-15 / 15-20",
		"partUsed": "Starch hydrolysate",
		"origin": "India",
		"benefits": [
			"Ideal carrier for spray drying",
			"Provides quick energy release",
			"Improves texture and solubility"
		],
		"applications": [
			"Spray Drying Carrier",
			"Nutraceuticals",
			"Food & Beverage"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "24 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-biotin-d-biotin",
		"name": "Natural Biotin (D Biotin)",
		"botanical": "Sesbania grandiflora",
		"category": "natural-vitamins",
		"tagline": "Plant-derived D-Biotin to support hair, skin, and nail health",
		"image": "/vitamins/sesbania-grandiflora.jpg",
		"standardization": "D-Biotin ≥ 1% / 2%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Promotes hair strength and growth",
			"Supports healthy skin and nails",
			"Enhances energy metabolism"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Cosmetics"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White to off-white powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-calcium-calcium-carbonate-ppt",
		"name": "Natural Calcium (Calcium Carbonate PPT)",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Precipitated calcium carbonate for bone density and calcium fortification",
		"image": "/minerals/moringa-leaf-extract.jpg",
		"standardization": "Calcium ≥ 38%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Supports bone health and structural integrity",
			"Enhances teeth strength",
			"Highly bioavailable calcium fortifier"
		],
		"applications": [
			"Dietary Supplements",
			"Food Fortification",
			"Pharmaceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Fine white powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-copper-copper-sulphate",
		"name": "Natural Copper (Copper Sulphate)",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Essential trace mineral to support iron absorption and connective tissue health",
		"image": "/products/blue-crystals.jpg",
		"standardization": "Copper content ≥ 25%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Assists in red blood cell formation",
			"Supports neurological health",
			"Maintains healthy connective tissues"
		],
		"applications": ["Dietary Supplements", "Nutraceuticals"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Blue crystalline powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-manganese-manganese-sulphate",
		"name": "Natural Manganese (Manganese Sulphate)",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "Trace mineral to support bone health and antioxidant enzyme systems",
		"image": "/products/pink-crystals.jpg",
		"standardization": "Manganese content ≥ 32%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Cofactor for key antioxidant enzymes",
			"Supports bone density and structure",
			"Involved in amino acid metabolism"
		],
		"applications": ["Dietary Supplements", "Nutraceuticals"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Pale pink powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b1-thiamine-vitamin-b1-mono",
		"name": "Natural Vitamin B1 (Thiamine) (Vitamin B1 Mono)",
		"botanical": "Organic Guava / Lemon blend",
		"category": "natural-vitamins",
		"tagline": "Plant-derived Thiamine mononitrate to support cardiovascular and nervous system health",
		"image": "/minerals/psidium-guajava.jpg",
		"standardization": "Thiamine ≥ 5% / 10%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Supports cellular energy production",
			"Promotes healthy nervous system function",
			"Aids cardiovascular health"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Foods"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b12-cobalamin",
		"name": "Natural Vitamin B12 (Cobalamin)",
		"botanical": "Fermented bacterial culture (Saccharomyces)",
		"category": "natural-vitamins",
		"tagline": "High-potency fermented Methylcobalamin to support red blood cell formation and cognitive function",
		"image": "/vitamins/spirulina-powder.jpg",
		"standardization": "Methylcobalamin ≥ 1%",
		"partUsed": "Whole cell",
		"origin": "India",
		"benefits": [
			"Supports healthy red blood cell production",
			"Enhances cognitive and brain health",
			"Improves physical energy levels"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Foods"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light pink powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b2-riboflavin",
		"name": "Natural Vitamin B2 (Riboflavin)",
		"botanical": "Organic Guava / Sesbania grandiflora",
		"category": "natural-vitamins",
		"tagline": "Natural Riboflavin to support vision, mitochondrial energy, and antioxidant activity",
		"image": "/minerals/psidium-guajava.jpg",
		"standardization": "Riboflavin ≥ 5% / 10%",
		"partUsed": "Leaf / Fruit",
		"origin": "India",
		"benefits": [
			"Essential for mitochondrial energy production",
			"Supports healthy vision",
			"Acts as an antioxidant co-factor"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Foods"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Yellow-orange powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b3-niacin-niacinamide-ip",
		"name": "Natural Vitamin B3 (Niacin) (Niacinamide IP)",
		"botanical": "Organic Holy Basil (Tulsi) / Guava",
		"category": "natural-vitamins",
		"tagline": "Plant-derived IP-grade Niacinamide to support healthy skin barrier and cellular repair",
		"image": "/minerals/ocimum-basilicum-tulsi-leaf-oil.jpg",
		"standardization": "Niacinamide ≥ 5% / 10%",
		"partUsed": "Leaf / Fruit",
		"origin": "India",
		"benefits": [
			"Supports cellular repair and DNA integrity",
			"Promotes healthy skin and barrier function",
			"Aids cognitive function"
		],
		"applications": [
			"Dietary Supplements",
			"Cosmetics",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b5-pantothenic-acid",
		"name": "Natural Vitamin B5 (Pantothenic acid)",
		"botanical": "Organic Guava / Sesbania leaves",
		"category": "natural-vitamins",
		"tagline": "Natural Pantothenic acid to support adrenal function and stress resilience",
		"image": "/minerals/psidium-guajava.jpg",
		"standardization": "Pantothenic Acid ≥ 5% / 10%",
		"partUsed": "Leaf / Fruit",
		"origin": "India",
		"benefits": [
			"Crucial for energy metabolism",
			"Supports adrenal health and hormone synthesis",
			"Enhances physical endurance"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Foods"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Off-white to light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b6-pyridoxine",
		"name": "Natural Vitamin B6 (Pyridoxine)",
		"botanical": "Organic Lemon / Guava",
		"category": "natural-vitamins",
		"tagline": "Plant-sourced Pyridoxine to support neurotransmitter synthesis and immune function",
		"image": "/minerals/psidium-guajava.jpg",
		"standardization": "Pyridoxine ≥ 5% / 10%",
		"partUsed": "Fruit",
		"origin": "India",
		"benefits": [
			"Supports neurotransmitter synthesis",
			"Promotes immune system function",
			"Aids protein and amino acid metabolism"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Functional Foods"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light brown powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-b9-folate-folic-acid",
		"name": "Natural Vitamin B9 (Folate/Folic Acid)",
		"botanical": "Organic Lemon Peel extract",
		"category": "natural-vitamins",
		"tagline": "Plant-derived Folate for prenatal health, cellular division, and cardiovascular support",
		"image": "/vitamins/citrus-limon.jpg",
		"standardization": "Folate ≥ 1% / 5%",
		"partUsed": "Peel",
		"origin": "India",
		"benefits": [
			"Crucial for prenatal health and fetal development",
			"Supports healthy DNA and cellular division",
			"Maintains cardiovascular wellness"
		],
		"applications": [
			"Dietary Supplements",
			"Nutraceuticals",
			"Prenatal Formulas"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow-green powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "natural-vitamin-e-alpha-tocopherol",
		"name": "Natural Vitamin E (alpha-tocopherol)",
		"botanical": "Helianthus annuus (Sunflower) / Soy",
		"category": "natural-vitamins",
		"tagline": "Highly potent d-alpha-tocopherol to support cardiovascular defense and cellular membrane protection",
		"image": "/vitamins/helianthus-annuus.jpg",
		"standardization": "d-alpha-tocopherol 500 IU / 1000 IU",
		"partUsed": "Seed",
		"origin": "India",
		"benefits": [
			"Powerful oil-soluble antioxidant",
			"Supports skin and ocular health",
			"Protects cardiovascular system"
		],
		"applications": [
			"Softgels",
			"Cosmetics",
			"Nutraceuticals",
			"Food Fortification"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow viscous oil or powder"
		}],
		"packaging": "25 kg drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "potassium-chloride-ip",
		"name": "Potassium Chloride IP",
		"botanical": "Mineral source",
		"category": "natural-minerals",
		"tagline": "IP-grade potassium salt to support electrolyte balance and nervous transmission",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Potassium Chloride ≥ 99.0%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Essential electrolyte for cellular function",
			"Supports normal nerve and heart function",
			"Maintains fluid balance"
		],
		"applications": [
			"Pharmaceuticals",
			"Rehydration Formulas",
			"Dietary Supplements"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White crystalline powder"
		}],
		"packaging": "25 kg bag",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "vitamin-b7",
		"name": "Vitamin B7",
		"botanical": "Sesbania grandiflora",
		"category": "natural-vitamins",
		"tagline": "B7 Biotin to support healthy metabolism and keratin structure",
		"image": "/vitamins/sesbania-grandiflora.jpg",
		"standardization": "Biotin ≥ 1%",
		"partUsed": "Leaf",
		"origin": "India",
		"benefits": [
			"Supports keratin production for hair/nails",
			"Improves energy metabolism",
			"Supports skin vitality"
		],
		"applications": ["Nutraceuticals", "Cosmetics"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "vitamin-k3",
		"name": "Vitamin K3",
		"botanical": "Synthetic derivative",
		"category": "natural-vitamins",
		"tagline": "Vitamin K3 (Menadione) for specific wellness and industrial application support",
		"image": "/products/pure-white-powder.jpg",
		"standardization": "Menadione ≥ 50% / 96%",
		"partUsed": "N/A",
		"origin": "India",
		"benefits": [
			"Acts as a blood clotting cofactor",
			"Important precursor for active vitamin K",
			"Supports cellular regulation"
		],
		"applications": ["Nutraceuticals", "Feed Formulations"],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "White crystalline powder"
		}],
		"packaging": "25 kg drum",
		"shelfLife": "24 months",
		"certifications": ["ISO"]
	},
	{
		"slug": "vitamin-k27",
		"name": "Vitamin k27",
		"botanical": "Bacillus subtilis natto fermentation",
		"category": "natural-vitamins",
		"tagline": "High-potency Vitamin K2 (MK-7) to optimize bone mineralization and arterial health",
		"image": "/products/natto-vitamin-k.jpg",
		"standardization": "Menaquinone-7 (MK-7) 1000 ppm / 2000 ppm / 5000 ppm",
		"partUsed": "Fermentation product",
		"origin": "India",
		"benefits": [
			"Directs calcium to bones and away from arteries",
			"Supports vascular and bone health",
			"Synergizes with Vitamin D3"
		],
		"applications": [
			"Dietary Supplements",
			"Capsules",
			"Nutraceuticals"
		],
		"composition": [],
		"specs": [{
			"label": "Appearance",
			"value": "Light yellow powder"
		}],
		"packaging": "25 kg fiber drum",
		"shelfLife": "36 months",
		"certifications": ["ISO"]
	}
];
//#endregion
export { products as n, categories as t };
