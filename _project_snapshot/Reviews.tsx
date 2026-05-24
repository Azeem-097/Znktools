"use client";

import { Star } from "lucide-react";
import { reviews } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimateOnScroll from "@/components/ui/AnimateOnScroll";
import GlowCard from "@/components/ui/GlowCard";

export default function Reviews() {
  return (
    <section id="reviews" className="relative py-24 sm:py-32">
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-emerald-600/5 rounded-full blur-[150px] pointer-events-none" />
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="Loved by"
          highlight="Thousands"
          subtitle="Do not just take our word for it. Here is what our customers have to say about their experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review, i) => (
            <AnimateOnScroll key={review.id} delay={i * 0.08}>
              <GlowCard className="h-full" glowColor="rgba(234, 179, 8, 0.1)">
                <div className="p-6 sm:p-8">
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className={`w-4 h-4 ${j < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-700"}`} />
                    ))}
                  </div>
                  <p className="text-sm text-gray-300 leading-relaxed mb-6">&ldquo;{review.comment}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                      {review.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-white">{review.name}</p>
                      <p className="text-xs text-gray-500">{review.product} • {review.date}</p>
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