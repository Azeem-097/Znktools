import { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowRight, Shield, Zap, RefreshCw, Users } from "lucide-react";
import ProductGrid from "@/components/product/ProductGrid";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import { WHATSAPP_NUMBER, SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "All Products — ZNK Tools",
  description: "Browse our complete collection of premium AI tools at unbeatable prices.",
};

const benefits = [
  { icon: Zap, title: "Instant Delivery", desc: "Receive your tools within 5-30 minutes via WhatsApp.", color: "#f59e0b" },
  { icon: Shield, title: "100% Genuine", desc: "All accounts are authentic and verified. No fakes ever.", color: "#10b981" },
  { icon: RefreshCw, title: "Replacement Promise", desc: "If anything goes wrong, we replace it within 24 hours.", color: "#6366f1" },
  { icon: Users, title: "5,000+ Customers", desc: "Trusted by thousands of professionals across Pakistan.", color: "#ec4899" },
];

export default function ProductsPage() {
  return (
    <>
      {/* Products Grid */}
      <section className="min-h-screen pt-24 sm:pt-28 pb-16 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="All Products"
            title="Our Complete"
            highlight="Collection"
            subtitle="Browse all premium AI tools available at ZNK Tools. Pick your tool, choose a plan, and order via WhatsApp."
          />
          <ProductGrid />
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll className="text-center mb-10 sm:mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-4">
              Why Choose Us
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3">
              Pakistan's Most{" "}
              <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                Trusted
              </span>{" "}
              AI Tools Provider
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
              Join thousands of happy customers who chose us for premium AI tools at unbeatable prices.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {benefits.map((benefit, i) => (
              <AnimateOnScroll key={i} delay={i * 0.1}>
                <div
                  className="p-4 sm:p-6 rounded-2xl border h-full transition-all hover:-translate-y-1"
                  style={{
                    background: `linear-gradient(145deg, ${benefit.color}10 0%, rgba(255,255,255,0.02) 100%)`,
                    borderColor: `${benefit.color}25`,
                  }}
                >
                  <div
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-3 sm:mb-4"
                    style={{
                      backgroundColor: `${benefit.color}20`,
                      border: `1px solid ${benefit.color}30`,
                    }}
                  >
                    <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-white mb-1.5 sm:mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[11px] sm:text-sm text-gray-400 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 border-t border-white/[0.04]">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimateOnScroll>
            <div className="relative rounded-3xl border border-emerald-500/20 bg-gradient-to-br from-emerald-500/[0.08] to-green-500/[0.05] p-6 sm:p-10 lg:p-14 text-center overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-green-500/10 rounded-full blur-3xl" />

              <div className="relative">
                <span className="inline-block px-3 sm:px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-semibold tracking-wider uppercase bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 mb-4 sm:mb-6">
                  Not sure what to pick?
                </span>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 leading-tight">
                  Let us help you{" "}
                  <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
                    choose the perfect tool
                  </span>
                </h2>

                <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                  Tell us your needs on WhatsApp and we will recommend the best AI tool and plan for your budget. Free consultation, no obligation.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-6">
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Hey! I need help choosing the right AI tool. Can you guide me?")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2.5 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold text-sm sm:text-base shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 overflow-hidden"
                  >
                    <div className="absolute inset-0 overflow-hidden rounded-2xl">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full" style={{ animation: "shimmer 3s infinite" }} />
                    </div>
                    <MessageCircle className="relative w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="relative">Get Free Advice</span>
                    <ArrowRight className="relative w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>

                  <Link
                    href="/#faq"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white font-semibold text-sm sm:text-base hover:bg-white/[0.08] transition-all duration-200"
                  >
                    Read FAQs
                  </Link>
                </div>

                <p className="text-[11px] sm:text-xs text-gray-500">
                  📞 {SITE_CONFIG.phone} • ⚡ Replies within minutes
                </p>
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </section>
    </>
  );
}