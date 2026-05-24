"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { motion } from "framer-motion";
import ProductImage from "./ProductImage";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const lowestPlan = product.plans.reduce(
    (min, p) => (p.price < min.price ? p : min),
    product.plans[0]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="h-full group"
    >
      <Link href={`/products/${product.slug}`} className="block h-full">
        <div
          className="relative h-full rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-1"
          style={{
            background: `linear-gradient(145deg, ${product.color}15 0%, rgba(255,255,255,0.02) 50%)`,
            border: `1px solid ${product.color}25`,
          }}
        >
          {/* Animated colored glow on hover */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: `radial-gradient(circle at 50% 0%, ${product.color}25 0%, transparent 60%)`,
            }}
          />

          {/* Top accent stripe */}
          <div
            className="absolute top-0 left-0 right-0 h-1 opacity-80"
            style={{
              background: `linear-gradient(90deg, transparent, ${product.color}, transparent)`,
            }}
          />

          {/* Content */}
          <div className="relative p-6 flex flex-col h-full">
            {/* Badge slot — reserved 28px */}
            <div className="h-7 mb-3 flex items-start">
              {product.badge && (
                <span
                  className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg"
                  style={{
                    backgroundColor: product.color,
                    boxShadow: `0 4px 15px ${product.color}40`,
                  }}
                >
                  {product.badge}
                </span>
              )}
            </div>

            {/* Image + Title block */}
            <div className="flex items-start gap-3.5 mb-4 h-[72px]">
              <div
                className="flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 p-2.5 overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${product.color}30 0%, ${product.color}10 100%)`,
                  boxShadow: `0 8px 24px ${product.color}25, inset 0 1px 0 ${product.color}40`,
                  border: `1px solid ${product.color}30`,
                }}
              >
                <ProductImage
                  image={product.image}
                  alt={product.name}
                  className="w-full h-full flex items-center justify-center"
                  fallbackIcon={product.icon}
                />
              </div>
              <div className="min-w-0 flex-1 pt-0.5">
                <span
                  className="text-[9px] uppercase tracking-[0.15em] font-bold block mb-1"
                  style={{ color: product.color }}
                >
                  {product.category}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-white leading-tight line-clamp-2">
                  {product.name}
                </h3>
              </div>
            </div>

            {/* Tagline — fixed height */}
            <p className="text-gray-400 text-sm leading-snug mb-4 h-[40px] line-clamp-2">
              {product.tagline}
            </p>

            {/* Features chips — fixed height */}
            <div className="flex flex-wrap gap-1.5 mb-5 h-[60px] content-start overflow-hidden">
              {product.features.slice(0, 3).map((feature, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-md text-[10px] font-medium border"
                  style={{
                    backgroundColor: `${product.color}10`,
                    borderColor: `${product.color}20`,
                    color: "#d1d5db",
                  }}
                >
                  {feature}
                </span>
              ))}
              {product.features.length > 3 && (
                <span className="px-2.5 py-1 rounded-md text-[10px] font-medium text-gray-500">
                  +{product.features.length - 3} more
                </span>
              )}
            </div>

            <div className="flex-grow" />

            {/* Price + CTA */}
            <div
              className="flex items-end justify-between pt-4 border-t mt-auto"
              style={{ borderColor: `${product.color}20` }}
            >
              <div className="min-w-0">
                <span className="text-[9px] text-gray-500 uppercase tracking-wider block mb-0.5 font-semibold">
                  Starting from
                </span>
                <div className="flex items-baseline gap-1.5 flex-wrap">
                  <span className="text-xl font-bold" style={{ color: product.color }}>
                    Rs. {lowestPlan.price.toLocaleString()}
                  </span>
                  {lowestPlan.originalPrice && (
                    <span className="text-xs text-gray-600 line-through">
                      Rs. {lowestPlan.originalPrice.toLocaleString()}
                    </span>
                  )}
                </div>
              </div>
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full transition-all duration-300 group-hover:scale-110 shrink-0 ml-2"
                style={{
                  background: `linear-gradient(135deg, ${product.color}, ${product.color}cc)`,
                  boxShadow: `0 4px 14px ${product.color}50`,
                }}
              >
                <ArrowRight className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}