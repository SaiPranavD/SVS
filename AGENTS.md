# SVS Project Rules and Guidelines

Welcome to the SVS Nutraceuticals website project. This is a Vite + TanStack Start web application. Please follow these guidelines for any modifications or feature development.

## 1. Product Catalog Design
* **Layout**: The products page (`src/routes/products.index.tsx`) uses a **CSS Float layout** (not CSS Grid/Flexbox for the outer wrap) to allow product list items to wrap dynamically around the Category Header Card.
  * The Category Header Card is floated left (`float-left w-full lg:w-[23%] lg:mr-[2%]`).
  * The product list items (`li`) are also floated left (`float-left w-[50%] md:w-[33.33%] lg:w-[25%]`).
  * On desktop, this yields **3 columns** next to the Category Card, wrapping to **4 columns** below the card once the card height is cleared.
  * On mobile, it displays as **2 columns** (left and right) below the Category Card.
* **No Product Images**: Product list items are text-based bullet points. Do **NOT** add images/photos to the list items.
* **Row Alignment**: To prevent floated elements from catching on each other and creating empty spaces, all product list items must maintain a consistent fixed height:
  * Mobile/Tablet: `h-[115px]`
  * Desktop: `lg:h-[110px]`

## 2. Product Specification Modal
* **No Packaging Info**: Do **NOT** render the `packaging` detail field in the Product Specification Sheet Modal.

## 3. Database Rules
* **Encoding & Symbols**: Always use correct UTF-8 mathematical symbols **`≥`** (greater than or equal to) and **`≤`** (less than or equal to) in the database (`src/lib/products.ts`). Never allow them to get corrupted into `â‰¥` or `â‰¤` due to editor encoding mismatch.

## 4. Deployment
* **Build Target**: The app builds into the `dist/client` directory.
* **Firebase Hosting**: Firebase Hosting is configured to deploy the `dist/client` directory. Run `npm run build` before deploying.
