"use client";

import { useState } from "react";
import { MessageCircle, CheckCircle } from "lucide-react";
import { Product } from "@/types";
import { WHATSAPP_NUMBER, WHATSAPP_MESSAGE } from "@/lib/data";
import { motion } from "framer-motion";

interface PricingTableProps {
  product: Product;
}

export default function PricingTable({ product }: PricingTableProps) {
  const defaultIndex = product.plans.findIndex((p) => p.popular);
  const [selectedPlan, setSelectedPlan] = useState(defaultIndex !== -1 ? defaultIndex : 0);

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold text-white mb-4">Choose Your Plan</h3>
      {product.plans.map((plan, i) => {
        const discount = plan.originalPrice
          ? Math.round(((plan.originalPrice - plan.price) / plan.originalPrice) * 100)
          : 0;
        return (
          <motion.button
            key={i}
            onClick={() => setSelectedPlan(i)}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.1 }}
            className={`w-full relative flex items-center justify-between p-5 rounded-2xl border transition-all duration-300 text-left ${
              selectedPlan === i
                ? "bg-indigo-500/10 border-indigo-500/40 shadow-lg shadow-indigo-500/5"
                : "bg-white/[0.02] border-white/[0.06] hover:border-white/[0.12]"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-2.5 right-4 px-3 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-indigo-500 text-white">
                Best Value
              </div>
            )}
            <div className="flex items-center gap-4">
              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedPlan === i ? "border-indigo-400" : "border-gray-600"}`}>
                {selectedPlan === i && <div className="w-2.5 h-2.5 rounded-full bg-indigo-400" />}
              </div>
              <div>
                <p className="font-semibold text-white text-sm">{plan.name}</p>
                <p className="text-xs text-gray-500">{plan.duration} access</p>
              </div>
            </div>
            <div className="text-right">
              <div className="flex items-baseline gap-2">
                <span className="text-xl font-bold text-white">Rs. {plan.price.toLocaleString()}</span>
                {plan.originalPrice && (
                  <span className="text-xs text-gray-600 line-through">Rs. {plan.originalPrice.toLocaleString()}</span>
                )}
              </div>
              {discount > 0 && <span className="text-[10px] font-bold text-emerald-400 uppercase">Save {discount}%</span>}
            </div>
          </motion.button>
        );
      })}
      <a
        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE(product.name, product.plans[selectedPlan].name)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center gap-3 w-full py-4 mt-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-base shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/40 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 overflow-hidden"
      >
        <div className="absolute inset-0 overflow-hidden rounded-2xl">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full" style={{ animation: "shimmer 3s infinite" }} />
        </div>
        <MessageCircle className="relative w-5 h-5" />
        <span className="relative">Buy Now via WhatsApp</span>
      </a>
      <p className="text-center text-xs text-gray-600 mt-3">
        <CheckCircle className="inline w-3 h-3 mr-1 text-emerald-500" />
        Instant WhatsApp delivery • Replacement guarantee
      </p>
    </div>
  );
}