"use client";

import { CheckCircle, ArrowLeft, Shield, Zap, MessageCircle, RefreshCw } from "lucide-react";
import Link from "next/link";
import { Product } from "@/types";
import PricingTable from "./PricingTable";
import RelatedProducts from "./RelatedProducts";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import ProductImage from "@/components/ui/ProductImage";
import { motion } from "framer-motion";

interface ProductDetailProps {
  product: Product;
}

const trustBadges = [
  { icon: Zap, title: "Instant Delivery", desc: "Within 5-30 mins" },
  { icon: Shield, title: "100% Genuine", desc: "Authentic accounts" },
  { icon: RefreshCw, title: "Replacement", desc: "Full plan guarantee" },
  { icon: MessageCircle, title: "24/7 Support", desc: "WhatsApp chat" },
];

export default function ProductDetail({ product }: ProductDetailProps) {
  return (
    <>
      <section className="relative min-h-screen pt-24 pb-12">
        <div
          className="absolute top-0 left-0 right-0 h-[500px] opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at top, ${product.color}25 0%, transparent 60%)`,
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to all products
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16">
            {/* LEFT: Product Info */}
            <div className="lg:col-span-3">
              <AnimateOnScroll>
                {product.badge && (
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-4 shadow-lg"
                    style={{
                      backgroundColor: product.color,
                      boxShadow: `0 4px 15px ${product.color}40`,
                    }}
                  >
                    {product.badge}
                  </span>
                )}

                {/* Hero block with IMAGE */}
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className="flex items-center justify-center w-20 h-20 rounded-2xl shrink-0 p-3 overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${product.color}30 0%, ${product.color}10 100%)`,
                      boxShadow: `0 12px 40px ${product.color}30`,
                      border: `1px solid ${product.color}40`,
                    }}
                  >
                    <ProductImage
                      image={product.image}
                      alt={product.name}
                      className="w-full h-full flex items-center justify-center"
                      fallbackIcon={product.icon}
                    />
                  </div>
                  <div>
                    <span
                      className="text-[10px] uppercase tracking-[0.2em] font-bold"
                      style={{ color: product.color }}
                    >
                      {product.category}
                    </span>
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mt-1 leading-tight">
                      {product.name}
                    </h1>
                    <p className="text-gray-400 mt-2 text-base sm:text-lg">{product.tagline}</p>
                  </div>
                </div>

                <p className="text-gray-300 leading-relaxed text-base mb-8 max-w-2xl">
                  {product.longDescription}
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-10">
                  {trustBadges.map((badge, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + i * 0.05 }}
                      className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] text-center"
                    >
                      <badge.icon
                        className="w-5 h-5 mx-auto mb-1.5"
                        style={{ color: product.color }}
                      />
                      <p className="text-[11px] font-semibold text-white">{badge.title}</p>
                      <p className="text-[10px] text-gray-500">{badge.desc}</p>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <h3 className="text-lg font-bold text-white mb-5 flex items-center gap-2">
                    <span
                      className="w-1 h-6 rounded-full"
                      style={{ backgroundColor: product.color }}
                    />
                    What You Get
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {product.features.map((feature, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + i * 0.04 }}
                        className="flex items-center gap-3 p-3 rounded-xl border transition-all hover:translate-x-1"
                        style={{
                          backgroundColor: `${product.color}08`,
                          borderColor: `${product.color}20`,
                        }}
                      >
                        <CheckCircle
                          className="w-4 h-4 shrink-0"
                          style={{ color: product.color }}
                        />
                        <span className="text-sm text-gray-200">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </AnimateOnScroll>
            </div>

            {/* RIGHT: Pricing */}
            <div className="lg:col-span-2">
              <AnimateOnScroll delay={0.2}>
                <div
                  className="sticky top-28 p-6 sm:p-8 rounded-2xl border backdrop-blur-sm"
                  style={{
                    background: `linear-gradient(180deg, ${product.color}08 0%, rgba(255,255,255,0.02) 100%)`,
                    borderColor: `${product.color}25`,
                  }}
                >
                  <PricingTable product={product} />
                </div>
              </AnimateOnScroll>
            </div>
          </div>
        </div>
      </section>

      <RelatedProducts currentProduct={product} />
    </>
  );
}