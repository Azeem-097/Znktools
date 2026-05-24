"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GlowCard from "@/components/ui/GlowCard";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-16 sm:py-24 lg:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Loved by"
          highlight="Thousands"
          subtitle="Do not just take our word for it. Here is what our customers have to say about their experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {reviews.map((review, i) => (
            <AnimateOnScroll key={review.id} delay={i * 0.08}>
              <GlowCard className="h-full" glowColor="rgba(234, 179, 8, 0.1)">
                <div className="p-5 sm:p-6 lg:p-8">
                  <div className="flex gap-1 mb-3 sm:mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-700"}`} />
                    ))}
                  </div>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-5 sm:mb-6">&ldquo;{review.comment}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-3 sm:pt-4 border-t border-white/[0.06]">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-[10px] sm:text-xs font-bold">
                      {review.avatar}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-xs sm:text-sm font-semibold text-white truncate">{review.name}</p>
                      <p className="text-[10px] sm:text-xs text-gray-500 truncate">{review.product} • {review.date}</p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}