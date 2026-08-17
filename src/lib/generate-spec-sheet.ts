import { jsPDF } from "jspdf";
import type { Product } from "./products";
import { categories } from "./products";

export function generateSpecSheet(product: Product) {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const pageW = doc.internal.pageSize.getWidth();
  const margin = 48;
  let y = margin;

  const forest: [number, number, number] = [30, 74, 54];
  const ink: [number, number, number] = [36, 44, 40];
  const muted: [number, number, number] = [110, 118, 112];

  // Header bar
  doc.setFillColor(...forest);
  doc.rect(0, 0, pageW, 72, "F");
  doc.setTextColor(245, 240, 225);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("SVS NUTRACEUTICALS", margin, 32);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.text("TECHNICAL SPECIFICATION SHEET", margin, 48);
  doc.text(
    `Generated ${new Date().toLocaleDateString("en-GB", { year: "numeric", month: "short", day: "numeric" })}`,
    pageW - margin,
    48,
    { align: "right" },
  );

  y = 108;
  doc.setTextColor(...ink);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  doc.text(product.name, margin, y);
  y += 20;
  doc.setFont("helvetica", "italic");
  doc.setFontSize(11);
  doc.setTextColor(...muted);
  doc.text(product.botanical, margin, y);
  y += 24;

  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.setTextColor(...ink);
  const tagline = doc.splitTextToSize(product.tagline, pageW - margin * 2);
  doc.text(tagline, margin, y);
  y += tagline.length * 13 + 12;

  const section = (title: string) => {
    y += 8;
    doc.setDrawColor(...forest);
    doc.setLineWidth(0.8);
    doc.line(margin, y, margin + 32, y);
    y += 14;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(...forest);
    doc.text(title.toUpperCase(), margin, y);
    y += 14;
    doc.setTextColor(...ink);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
  };

  const kv = (rows: { label: string; value: string }[]) => {
    rows.forEach((r) => {
      if (y > 780) {
        doc.addPage();
        y = margin;
      }
      doc.setFont("helvetica", "bold");
      doc.setFontSize(9);
      doc.setTextColor(...muted);
      doc.text(r.label, margin, y);
      doc.setFont("helvetica", "normal");
      doc.setTextColor(...ink);
      doc.setFontSize(10);
      const val = doc.splitTextToSize(r.value, pageW - margin * 2 - 180);
      doc.text(val, margin + 180, y);
      y += Math.max(14, val.length * 12);
    });
  };

  section("Overview");
  kv([
    { label: "Category", value: categories[product.category].label },
    { label: "Botanical Source", value: product.botanical },
    { label: "Part Used", value: product.partUsed },
    { label: "Origin", value: product.origin },
    { label: "Standardization", value: product.standardization },
  ]);

  section("Composition");
  kv(product.composition.map((c) => ({ label: c.component, value: c.specification })));

  section("Technical Specifications");
  kv(product.specs);

  section("Applications");
  const apps = doc.splitTextToSize(product.applications.join("  •  "), pageW - margin * 2);
  doc.text(apps, margin, y);
  y += apps.length * 13 + 4;

  section("Benefits");
  product.benefits.forEach((b) => {
    if (y > 780) {
      doc.addPage();
      y = margin;
    }
    doc.text("•  " + b, margin, y);
    y += 14;
  });

  section("Packaging & Storage");
  kv([
    { label: "Packaging", value: product.packaging },
    { label: "Shelf Life", value: product.shelfLife },
    { label: "Certifications", value: product.certifications.join(", ") },
  ]);

  // Footer
  const totalPages = doc.getNumberOfPages();
  for (let i = 1; i <= totalPages; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(...muted);
    doc.text(
      "SVS Nutraceuticals Pvt. Ltd.  •  www.svsnutraceuticals.com  •  This document is for B2B evaluation and is subject to formal certificate of analysis.",
      margin,
      820,
    );
    doc.text(`${i} / ${totalPages}`, pageW - margin, 820, { align: "right" });
  }

  doc.save(`SVS-${product.slug}-spec-sheet.pdf`);
}
