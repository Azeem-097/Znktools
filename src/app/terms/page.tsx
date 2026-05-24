import { Metadata } from "next";
import { FileText, ShieldCheck, AlertTriangle, Clock, RefreshCw, Ban, Scale, MessageCircle } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Terms of Service — ZNK Tools",
  description: "Read the terms and conditions governing the use of ZNK Tools services.",
};

const sections = [
  {
    icon: FileText,
    title: "1. Service Description",
    content: [
      `${SITE_CONFIG.name} provides access to premium AI tool subscriptions including but not limited to ChatGPT Pro, ChatGPT Plus, Google Gemini Advanced, Canva Pro, Midjourney, and other AI services.`,
      "We act as an authorized reseller and offer both shared and individual access plans at discounted prices compared to direct retail.",
      "All subscriptions are delivered via WhatsApp after successful payment confirmation.",
    ],
  },
  {
    icon: ShieldCheck,
    title: "2. Account Usage",
    content: [
      "By purchasing a subscription, you agree to the following:",
      "• Accounts are for personal use only and may not be shared with others (unless purchasing a shared plan)",
      "• Reselling, redistributing, or transferring credentials to third parties is strictly prohibited",
      "• Using accounts for illegal activities, spam, abuse, or any activity that violates the original platform's Terms of Service is forbidden",
      "• Changing passwords or modifying account settings on shared accounts is not allowed",
      "Violation of these terms will result in immediate account termination without refund.",
    ],
  },
  {
    icon: Clock,
    title: "3. Delivery & Activation",
    content: [
      "We aim to deliver all orders within 5-30 minutes after payment confirmation via WhatsApp.",
      "In rare cases involving high demand or technical issues, delivery may take up to 24 hours.",
      "If we are unable to fulfill your order within 24 hours, you are entitled to a full refund.",
      "Subscription duration starts from the moment credentials are delivered, not from the moment of payment.",
    ],
  },
  {
    icon: RefreshCw,
    title: "4. Replacement Policy",
    content: [
      "We provide a replacement guarantee for the entire duration of your purchased plan.",
      "If your account stops working, gets logged out, or faces any technical issues:",
      "• Contact us immediately on WhatsApp with your order details",
      "• We will provide a replacement within 12-24 hours",
      "• In some cases, immediate replacement is available",
      "The replacement guarantee does NOT cover issues caused by user actions such as password changes, sharing with unauthorized users, or violating platform rules.",
    ],
  },
  {
    icon: AlertTriangle,
    title: "5. Limitations of Liability",
    content: [
      `${SITE_CONFIG.name} is not affiliated with, endorsed by, or officially associated with OpenAI, Google, Canva, Midjourney, or any other AI service provider.`,
      "We are a third-party reseller providing access to these services.",
      "We are not liable for:",
      "• Service interruptions caused by the original platform",
      "• Changes in features or pricing made by the original platform",
      "• Data loss or content created using these tools",
      "• Indirect, consequential, or incidental damages",
      "Your sole remedy in case of issues is replacement or refund as per our policies.",
    ],
  },
  {
    icon: Ban,
    title: "6. Prohibited Activities",
    content: [
      "You agree NOT to use our services for:",
      "• Creating illegal content, deepfakes, or harmful material",
      "• Generating content that violates copyright or intellectual property rights",
      "• Spam, harassment, hate speech, or any form of abuse",
      "• Attempting to reverse-engineer or extract proprietary information",
      "• Reselling our accounts to third parties without authorization",
      "We reserve the right to terminate accounts engaged in such activities without refund.",
    ],
  },
  {
    icon: Scale,
    title: "7. Modifications & Termination",
    content: [
      "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website.",
      "Continued use of our services after changes constitutes acceptance of the new terms.",
      "We may suspend or terminate your access to our services at our discretion in cases of policy violations, fraud, or non-payment.",
    ],
  },
  {
    icon: MessageCircle,
    title: "8. Contact & Support",
    content: [
      "For any questions, concerns, or support related to these terms:",
      `• Email: ${SITE_CONFIG.email}`,
      `• WhatsApp: ${SITE_CONFIG.phone}`,
      `• Address: ${SITE_CONFIG.address}`,
      "We are available 24/7 on WhatsApp for urgent matters.",
    ],
  },
];

export default function TermsPage() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Terms of{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Service
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Please read these terms carefully before using our services. By making a purchase, you agree to be bound by these terms.
          </p>
          <p className="text-sm text-gray-600 mt-4">Last updated: January 2025</p>
        </div>

        <div className="p-6 rounded-2xl bg-amber-500/[0.04] border border-amber-500/20 mb-12">
          <p className="text-gray-300 leading-relaxed text-sm">
            <span className="text-amber-400 font-semibold">⚠ Important:</span> By using {SITE_CONFIG.name} services, you acknowledge that you have read, understood, and agree to these Terms of Service. These terms form a binding agreement between you and {SITE_CONFIG.name}.
          </p>
        </div>

        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/[0.06]"
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <section.icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h2 className="text-xl font-bold text-white">{section.title}</h2>
              </div>
              <div className="space-y-2 text-sm text-gray-300 leading-relaxed">
                {section.content.map((line, j) => (
                  <p key={j} className={line.startsWith("•") ? "pl-4" : ""}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Need clarification?</h3>
          <p className="text-gray-400 text-sm mb-4">
            We are happy to discuss any questions about our terms.
          </p>
          <a
            href={`https://wa.me/923143111118`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}