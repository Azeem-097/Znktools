"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { SITE_CONFIG, socialLinks, products, featuredProductSlugs } from "@/lib/data";
import Logo from "@/components/ui/Logo";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Get top 3 products from featured list
  const topProducts = featuredProductSlugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <footer className="relative bg-[#030306] border-t border-white/[0.04]">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Logo size={32} />
            </Link>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">{SITE_CONFIG.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-white hover:bg-white/[0.08] hover:border-white/[0.12] transition-all"
                  aria-label={social.name}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d={social.svgPath} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Top Products</h4>
            <ul className="space-y-2.5">
              {topProducts.map((product) =>
                product ? (
                  <li key={product.slug}>
                    <Link
                      href={`/products/${product.slug}`}
                      className="text-sm text-gray-500 hover:text-indigo-400 transition-colors"
                    >
                      {product.name}
                    </Link>
                  </li>
                ) : null
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Legal</h4>
            <ul className="space-y-2.5">
              <li><Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="text-sm text-gray-500 hover:text-indigo-400 transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Phone className="w-4 h-4 text-indigo-400 shrink-0" />{SITE_CONFIG.phone}
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-500">
                <Mail className="w-4 h-4 text-indigo-400 shrink-0" />{SITE_CONFIG.email}
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-500">
                <MapPin className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />{SITE_CONFIG.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] text-center">
          <p className="text-xs text-gray-600">© {currentYear} {SITE_CONFIG.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}