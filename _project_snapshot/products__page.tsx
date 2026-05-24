import { Metadata } from "next";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "All Products — ToolsTemple",
  description: "Browse our complete collection of premium AI tools at unbeatable prices.",
};

export default function ProductsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="All Products"
          title="Our Complete"
          highlight="Collection"
          subtitle="Browse all premium AI tools available at ToolsTemple. Pick your tool, choose a plan, and order via WhatsApp."
        />
        <ProductGrid />
      </div>
    </section>
  );
}