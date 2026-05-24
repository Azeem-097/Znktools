import { Metadata } from "next";
import { Shield, Lock, Eye, Mail, FileText, Users } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

export const metadata: Metadata = {
  title: "Privacy Policy — ToolsTemplate",
  description: "Learn how ToolsTemplate collects, uses, and protects your personal information.",
};

const sections = [
  {
    icon: FileText,
    title: "Information We Collect",
    content: [
      "When you contact us via WhatsApp or use our website, we may collect the following information:",
      "• Personal Details: Name, phone number, email address",
      "• Payment Information: Necessary to process your orders (we do not store card details)",
      "• Communication Records: WhatsApp messages, support tickets, order history",
      "• Technical Data: IP address, browser type, device information (collected automatically via standard web analytics)",
    ],
  },
  {
    icon: Users,
    title: "How We Use Your Information",
    content: [
      "Your information is used exclusively for the following purposes:",
      "• Processing and fulfilling your orders",
      "• Delivering purchased products and credentials",
      "• Providing customer support and responding to inquiries",
      "• Sending order confirmations and important service updates",
      "• Improving our services and user experience",
      "• Preventing fraud and ensuring platform security",
      "We DO NOT sell, rent, or share your personal data with third parties for marketing purposes.",
    ],
  },
  {
    icon: Lock,
    title: "Data Security",
    content: [
      "We take the security of your personal information seriously:",
      "• All WhatsApp communications are end-to-end encrypted",
      "• Payment information is processed through secure channels",
      "• We do not store credit/debit card information on our servers",
      "• Access to customer data is restricted to authorized personnel only",
      "• Regular security audits are conducted to identify and address vulnerabilities",
    ],
  },
  {
    icon: Eye,
    title: "Your Rights",
    content: [
      "As a user, you have the following rights regarding your data:",
      "• Access: Request a copy of the personal data we hold about you",
      "• Correction: Request correction of inaccurate or incomplete data",
      "• Deletion: Request deletion of your personal data (subject to legal obligations)",
      "• Opt-out: Unsubscribe from promotional messages at any time",
      "• Portability: Request transfer of your data in a structured format",
      "To exercise any of these rights, contact us using the details below.",
    ],
  },
  {
    icon: Shield,
    title: "Third-Party Services",
    content: [
      "We may use third-party services for the following purposes:",
      "• Payment processing (JazzCash, EasyPaisa, banking partners)",
      "• Communication (WhatsApp Business API)",
      "• Website hosting and analytics",
      "These third parties have their own privacy policies. We recommend reviewing them. We are not responsible for the privacy practices of external services.",
    ],
  },
  {
    icon: Mail,
    title: "Cookies & Tracking",
    content: [
      "Our website uses minimal cookies to enhance your experience:",
      "• Essential cookies for website functionality",
      "• Analytics cookies to understand how visitors use our site",
      "You can disable cookies in your browser settings, but this may affect website functionality.",
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Privacy{" "}
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Policy
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Your privacy matters to us. This policy explains what data we collect, how we use it, and the rights you have.
          </p>
          <p className="text-sm text-gray-600 mt-4">Last updated: January 2025</p>
        </div>

        {/* Intro card */}
        <div className="p-6 rounded-2xl bg-indigo-500/[0.04] border border-indigo-500/20 mb-12">
          <p className="text-gray-300 leading-relaxed text-sm">
            At <span className="text-white font-semibold">{SITE_CONFIG.name}</span>, we are committed to protecting your privacy and ensuring your personal information is handled with the highest standards of security and transparency. By using our services, you agree to the terms outlined in this Privacy Policy.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-8">
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
              <div className="space-y-2 text-sm text-gray-300 leading-relaxed pl-15">
                {section.content.map((line, j) => (
                  <p key={j} className={line.startsWith("•") ? "pl-4" : ""}>{line}</p>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 text-center">
          <h3 className="text-xl font-bold text-white mb-2">Questions about your privacy?</h3>
          <p className="text-gray-400 text-sm mb-4">
            We are here to help. Reach out anytime.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
            <a href={`mailto:${SITE_CONFIG.email}`} className="text-indigo-400 hover:text-indigo-300 transition-colors">
              {SITE_CONFIG.email}
            </a>
            <span className="text-gray-700">•</span>
            <a href={`https://wa.me/923039045075`} className="text-emerald-400 hover:text-emerald-300 transition-colors">
              WhatsApp: {SITE_CONFIG.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}