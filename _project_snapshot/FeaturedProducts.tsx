"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products, featuredProductSlugs } from "@/lib/data";
import ProductCard from "@/components/ui/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FeaturedProducts() {
  const featured = featuredProductSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section id="products" className="relative py-24 sm:py-32">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Most Popular"
          highlight="Tools"
          subtitle="Hand-picked premium AI tools that our customers love the most. Instant delivery, unbeatable prices."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {featured.map((product, i) =>
            product ? <ProductCard key={product.id} product={product} index={i} /> : null
          )}
        </div>
        <AnimateOnScroll delay={0.4} className="text-center mt-12">
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-white/[0.04] border border-white/[0.08] text-white font-medium hover:bg-white/[0.08] hover:border-white/[0.15] transition-all duration-200"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </AnimateOnScroll>
      </div>
    </section>
  );
}