"use client";

import { useState } from "react";

interface ProductImageProps {
  image: string;        // filename without extension (e.g., "chatgpt")
  alt: string;
  className?: string;
  fallbackIcon?: string; // emoji to show if both images fail
}

export default function ProductImage({
  image,
  alt,
  className = "",
  fallbackIcon,
}: ProductImageProps) {
  const [errored, setErrored] = useState(false);

  // If both formats fail, show emoji
  if (errored && fallbackIcon) {
    return (
      <div className={`flex items-center justify-center text-3xl ${className}`}>
        {fallbackIcon}
      </div>
    );
  }

  return (
    <picture className={className}>
      {/* Try AVIF first */}
      <source srcSet={`/images/products/${image}.avif`} type="image/avif" />
      {/* Then PNG */}
      <source srcSet={`/images/products/${image}.png`} type="image/png" />
      {/* img tag is the actual element + final fallback */}
      <img
        src={`/images/products/${image}.png`}
        alt={alt}
        onError={() => setErrored(true)}
        className="w-full h-full object-contain"
        loading="lazy"
      />
    </picture>
  );
}