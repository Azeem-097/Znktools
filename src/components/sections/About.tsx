"use client";

import { CheckCircle, MessageCircle, Package, Globe } from "lucide-react";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import SectionHeading from "@/components/ui/SectionHeading";
import GlowCard from "@/components/ui/GlowCard";

const features = [
  {
    icon: MessageCircle,
    title: "WhatsApp-First",
    description: "No complicated checkout. Just message us, pay, and get your credentials instantly. It is that simple.",
    color: "#25D366",
  },
  {
    icon: Package,
    title: "Instant Delivery",
    description: "Most orders are delivered within 5-30 minutes. No waiting around, no delays. We value your time.",
    color: "#6366f1",
  },
  {
    icon: CheckCircle,
    title: "Replacement Guarantee",
    description: "If anything goes wrong during your subscription period, we replace it immediately. Zero hassle.",
    color: "#f59e0b",
  },
  {
    icon: Globe,
    title: "Trusted Nationwide",
    description: "5,000+ customers across Pakistan trust us for their premium AI tool subscriptions. Join them today.",
    color: "#ec4899",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-16 sm:py-24 lg:py-32">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Us"
          title="Why People Choose"
          highlight="ZNK Tools"
          subtitle="We are not just another reseller. We are building the most trusted platform for premium AI tools in Pakistan."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, i) => (
            <AnimateOnScroll key={i} delay={i * 0.1}>
              <GlowCard className="h-full" glowColor={`${feature.color}20`}>
                <div className="p-5 sm:p-6 lg:p-8">
                  <div
                    className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center mb-4 sm:mb-5"
                    style={{ backgroundColor: `${feature.color}15` }}
                  >
                    <feature.icon className="w-5 h-5 sm:w-6 sm:h-6" style={{ color: feature.color }} />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}