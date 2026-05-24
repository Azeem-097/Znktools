"use client";

import AnimateOnScroll from "./AnimateOnScroll";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle: string;
}

export default function SectionHeading({
  badge,
  title,
  highlight,
  subtitle,
}: SectionHeadingProps) {
  return (
    <AnimateOnScroll className="text-center mb-16">
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
        {title}{" "}
        {highlight && (
          <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            {highlight}
          </span>
        )}
      </h2>
      <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
        {subtitle}
      </p>
    </AnimateOnScroll>
  );
}