"use client";

import { products } from "@/lib/data";
import { Product } from "@/types";
import ProductCard from "@/components/ui/ProductCard";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

interface RelatedProductsProps {
  currentProduct: Product;
}

export default function RelatedProducts({ currentProduct }: RelatedProductsProps) {
  // Get related: same category first, then others
  const sameCategory = products.filter(
    (p) => p.category === currentProduct.category && p.id !== currentProduct.id
  );
  const otherCategory = products.filter(
    (p) => p.category !== currentProduct.category && p.id !== currentProduct.id
  );
  const related = [...sameCategory, ...otherCategory].slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="relative py-20 mt-10 border-t border-white/[0.04]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimateOnScroll className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-4">
            More Options
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            You Might Also{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Like These
            </span>
          </h2>
          <p className="text-gray-400 text-base max-w-xl mx-auto">
            Explore other premium AI tools that pair perfectly with {currentProduct.shortName}.
          </p>
        </AnimateOnScroll>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 items-stretch">
          {related.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}