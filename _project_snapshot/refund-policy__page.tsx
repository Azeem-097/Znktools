import { Metadata } from "next";
import { RefreshCw, CheckCircle, XCircle, Clock, MessageCircle, AlertCircle, CreditCard } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Refund Policy — ToolsTemplate",
  description: "Understand our refund and replacement policies for premium AI tool subscriptions.",
};

export default function RefundPolicyPage() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Refund{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Our refund and replacement guidelines designed to ensure your satisfaction and protect your investment.
          </p>
          <p className="text-sm text-gray-600 mt-4">Last updated: January 2025</p>
        </div>

        {/* Quick visual breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          <div className="p-6 rounded-2xl bg-emerald-500/[0.05] border border-emerald-500/20 text-center">
            <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Replacement First</h3>
            <p className="text-xs text-gray-400">Issues fixed within 24 hours</p>
          </div>
          <div className="p-6 rounded-2xl bg-amber-500/[0.05] border border-amber-500/20 text-center">
            <Clock className="w-8 h-8 text-amber-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">24-Hour Window</h3>
            <p className="text-xs text-gray-400">Refund requests within 24 hours</p>
          </div>
          <div className="p-6 rounded-2xl bg-indigo-500/[0.05] border border-indigo-500/20 text-center">
            <MessageCircle className="w-8 h-8 text-indigo-400 mx-auto mb-3" />
            <h3 className="text-white font-bold mb-1">Fast Response</h3>
            <p className="text-xs text-gray-400">Reply within 12 hours</p>
          </div>
        </div>

        {/* Eligible for refund */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/[0.03] border border-emerald-500/20 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-emerald-400" />
            </div>
            <h2 className="text-xl font-bold text-white">When You ARE Eligible for a Refund</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>We are unable to deliver your product within 24 hours of payment confirmation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>The product delivered does not match what was advertised</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>We are unable to provide a working replacement within 48 hours of reporting an issue</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-emerald-400 mt-1">✓</span>
              <span>Technical issues from our end prevent you from using the service</span>
            </li>
          </ul>
        </div>

        {/* NOT eligible */}
        <div className="p-6 sm:p-8 rounded-2xl bg-red-500/[0.03] border border-red-500/20 mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
              <XCircle className="w-5 h-5 text-red-400" />
            </div>
            <h2 className="text-xl font-bold text-white">When You are NOT Eligible for a Refund</h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span>Credentials have been delivered and account is active and working</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span>You changed your mind after receiving the product</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span>The issue was caused by your actions (changing passwords, sharing credentials, violating ToS)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span>You did not allow us to provide a replacement first</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 mt-1">✗</span>
              <span>The plan has expired naturally after the purchased duration</span>
            </li>
          </ul>
        </div>

        {/* How to request */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <RefreshCw className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold text-white">How to Request a Refund or Replacement</h2>
          </div>
          <ol className="space-y-4 text-sm text-gray-300">
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs shrink-0">1</span>
              <div>
                <p className="text-white font-semibold mb-1">Contact Us on WhatsApp</p>
                <p>Message us at <span className="text-indigo-400">{SITE_CONFIG.phone}</span> with your order details and a clear description of the issue.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs shrink-0">2</span>
              <div>
                <p className="text-white font-semibold mb-1">Provide Order Information</p>
                <p>Include: Order date, product name, plan duration, and screenshots if applicable.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs shrink-0">3</span>
              <div>
                <p className="text-white font-semibold mb-1">Replacement Attempt</p>
                <p>We will first attempt to provide a working replacement within 12-24 hours.</p>
              </div>
            </li>
            <li className="flex gap-4">
              <span className="flex items-center justify-center w-7 h-7 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs shrink-0">4</span>
              <div>
                <p className="text-white font-semibold mb-1">Refund Processing</p>
                <p>If replacement is not possible, refund will be processed within 3-5 business days to your original payment method.</p>
              </div>
            </li>
          </ol>
        </div>

        {/* Refund methods */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06] mb-6">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-indigo-400" />
            </div>
            <h2 className="text-xl font-bold text-white">Refund Methods</h2>
          </div>
          <p className="text-sm text-gray-300 mb-4">Refunds are issued through the same payment method used for the original purchase:</p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {["JazzCash", "EasyPaisa", "Bank Transfer", "SadaPay", "NayaPay", "Other"].map((method) => (
              <div key={method} className="p-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center text-xs font-medium text-gray-300">
                {method}
              </div>
            ))}
          </div>
        </div>

        {/* Important note */}
        <div className="p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 mb-12 flex gap-4">
          <AlertCircle className="w-6 h-6 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <h3 className="text-white font-semibold mb-1">Important Note</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              We prioritize replacements over refunds because our goal is to ensure you get the service you paid for. Most issues can be resolved with a quick replacement. Please give us a chance to fix any problems before requesting a refund.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need help with a refund?</h3>
          <p className="text-gray-400 text-sm mb-4">
            Our support team is available 24/7 on WhatsApp.
          </p>
          <a
            href={`https://wa.me/923039045075`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
}