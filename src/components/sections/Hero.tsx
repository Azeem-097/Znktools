"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle, Users, Zap, Clock, HeadphonesIcon } from "lucide-react";
import { motion } from "framer-motion";
import { WHATSAPP_NUMBER } from "@/lib/data";

const heroStats = [
  {
    value: "5,000+",
    label: "Happy Customers",
    icon: Users,
    color: "#6366f1",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    value: "99.9%",
    label: "Uptime Guarantee",
    icon: Zap,
    color: "#10b981",
    gradient: "from-emerald-500 to-green-500",
  },
  {
    value: "< 30min",
    label: "Delivery Time",
    icon: Clock,
    color: "#f59e0b",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    value: "24/7",
    label: "WhatsApp Support",
    icon: HeadphonesIcon,
    color: "#ec4899",
    gradient: "from-pink-500 to-rose-500",
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-80 sm:w-96 h-80 sm:h-96 bg-indigo-600/20 rounded-full blur-[120px]" style={{ animation: "blob 7s infinite" }} />
        <div className="absolute top-1/3 -right-20 w-80 sm:w-96 h-80 sm:h-96 bg-purple-600/20 rounded-full blur-[120px]" style={{ animation: "blob 7s infinite 2s" }} />
        <div className="absolute -bottom-20 left-1/3 w-80 sm:w-96 h-80 sm:h-96 bg-emerald-600/10 rounded-full blur-[120px]" style={{ animation: "blob 7s infinite 4s" }} />
      </div>

      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 sm:pb-16 w-full">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-[10px] sm:text-xs font-semibold bg-indigo-500/10 text-indigo-300 border border-indigo-500/20 backdrop-blur-sm mb-6 sm:mb-8">
              <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-emerald-400 animate-pulse" />
              Trusted by 5,000+ customers across Pakistan
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] mb-4 sm:mb-6"
          >
            <span className="text-white">Premium AI Tools</span>
            <br />
            <span
              className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
              style={{ backgroundSize: "200% 200%", animation: "gradient-shift 3s ease infinite" }}
            >
              Pocket-Friendly Prices
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed px-2"
          >
            Get instant access to{" "}
            <span className="text-white font-medium">ChatGPT Pro</span>,{" "}
            <span className="text-white font-medium">Gemini Advanced</span>,{" "}
            <span className="text-white font-medium">Canva Pro</span> and more delivered to your WhatsApp in minutes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4 sm:px-0"
          >
            <Link
              href="/products"
              className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold text-sm sm:text-base shadow-xl shadow-indigo-500/25 hover:shadow-indigo-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
            >
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full" style={{ animation: "shimmer 3s infinite" }} />
              </div>
              <span className="relative">Browse All Tools</span>
              <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>

            <a
              href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hey! I want to buy premium AI tools. What is available?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white font-semibold text-sm sm:text-base hover:bg-white/[0.08] hover:border-white/[0.15] hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 backdrop-blur-sm"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              Order on WhatsApp
            </a>
          </motion.div>

          {/* COLORED STATS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 max-w-3xl mx-auto"
          >
            {heroStats.map((stat, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="relative p-3 sm:p-4 rounded-2xl border backdrop-blur-sm overflow-hidden group"
                style={{
                  background: `linear-gradient(145deg, ${stat.color}15 0%, rgba(255,255,255,0.02) 100%)`,
                  borderColor: `${stat.color}30`,
                }}
              >
                {/* Glow on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `radial-gradient(circle at 50% 0%, ${stat.color}25 0%, transparent 70%)`,
                  }}
                />

                {/* Top accent line */}
                <div
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-12 h-0.5 rounded-full"
                  style={{ backgroundColor: stat.color }}
                />

                {/* Icon */}
                <div
                  className="relative w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-2 sm:mb-2.5 rounded-xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(135deg, ${stat.color}30 0%, ${stat.color}10 100%)`,
                    border: `1px solid ${stat.color}40`,
                  }}
                >
                  <stat.icon className="w-4 h-4 sm:w-5 sm:h-5" style={{ color: stat.color }} />
                </div>

                {/* Value */}
                <div
                  className="relative text-lg sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1"
                  style={{ color: stat.color }}
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div className="relative text-[9px] sm:text-[10px] md:text-xs text-gray-400 font-semibold uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050508] to-transparent pointer-events-none" />
    </section>
  );
}