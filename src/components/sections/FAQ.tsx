"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { faqs } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-indigo-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="FAQ"
          title="Got"
          highlight="Questions?"
          subtitle="Everything you need to know about our services. Cannot find what you are looking for? Message us on WhatsApp."
        />
        <div className="space-y-2.5 sm:space-y-3">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={i} delay={i * 0.05}>
              <div
                className={`rounded-2xl border transition-all duration-300 ${
                  openIndex === i
                    ? "bg-white/[0.03] border-indigo-500/20"
                    : "bg-white/[0.01] border-white/[0.06] hover:border-white/[0.1]"
                }`}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full flex items-center justify-between px-4 sm:px-6 py-4 sm:py-5 text-left"
                >
                  <span className={`text-sm sm:text-base font-medium pr-3 sm:pr-4 transition-colors ${openIndex === i ? "text-white" : "text-gray-300"}`}>
                    {faq.question}
                  </span>
                  <ChevronDown className={`w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-gray-500 transition-transform duration-300 ${openIndex === i ? "rotate-180 text-indigo-400" : ""}`} />
                </button>
                <AnimatePresence>
                  {openIndex === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm text-gray-400 leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}