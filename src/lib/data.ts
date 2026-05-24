import { Product, Review, FAQItem, SocialLink } from "@/types";

// IMPORTANT: WhatsApp number must be in international format WITHOUT + sign or leading 0
export const WHATSAPP_NUMBER = "923143111118";
export const WHATSAPP_DISPLAY = "0314 3111118";
export const WHATSAPP_COMMUNITY_LINK = "https://chat.whatsapp.com/YOUR_GROUP_INVITE_CODE";

export const WHATSAPP_MESSAGE = (productName: string, plan: string) =>
  encodeURIComponent(
    `Hey! I want to buy *${productName}* (${plan}) from ZNK Tools. Please share the details!`
  );

export const SITE_CONFIG = {
  name: "ZNK Tools",
  tagline: "Premium AI Tools at Unbeatable Prices",
  description:
    "Get instant access to ChatGPT Pro, Gemini Pro, Canva Pro & more premium AI tools at the lowest prices in Pakistan.",
  phone: "0314 3111118",
  email: "hello@znktools.com",
  address: "Lahore, Pakistan",
};

export const products: Product[] = [
  {
    id: "1",
    slug: "chatgpt-pro",
    name: "ChatGPT Pro",
    shortName: "GPT Pro",
    tagline: "Unlimited GPT-4o, o1-pro & Deep Research",
    description:
      "Get full access to OpenAI's most powerful plan with unlimited usage of GPT-4o, o1-pro model, and Deep Research capabilities.",
    longDescription:
      "ChatGPT Pro gives you unrestricted access to the most advanced AI models from OpenAI. Enjoy unlimited GPT-4o conversations, the powerful o1-pro reasoning model, and Deep Research that can analyze complex topics in depth. Perfect for professionals, researchers, and power users who need the absolute best AI assistant.",
    icon: "⚡",
    image: "chatgpt",
    color: "#10a37f",
    gradient: "from-emerald-500 via-emerald-600 to-teal-700",
    features: [
      "Unlimited GPT-4o access",
      "o1-pro reasoning model",
      "Deep Research mode",
      "Priority access during peak",
      "Advanced data analysis",
      "DALL·E image generation",
      "Custom GPTs access",
      "API credits included",
    ],
    plans: [
      { name: "1 Week", duration: "7 days", price: 800, originalPrice: 1500 },
      { name: "1 Month", duration: "30 days", price: 2500, originalPrice: 5000, popular: true },
      { name: "3 Months", duration: "90 days", price: 6500, originalPrice: 15000 },
    ],
    category: "AI Assistant",
    badge: "Most Popular",
  },
  {
    id: "2",
    slug: "chatgpt-plus",
    name: "ChatGPT Plus",
    shortName: "GPT Plus",
    tagline: "GPT-4o with smart limits",
    description:
      "Access GPT-4o, DALL·E, browsing, and more with ChatGPT Plus at a fraction of the official price.",
    longDescription:
      "ChatGPT Plus is the sweet spot for most users. You get access to GPT-4o with generous usage limits, DALL·E image generation, web browsing, code interpreter, and custom GPTs. Perfect for students, freelancers, and anyone who wants a significant upgrade from the free tier.",
    icon: "💬",
    image: "chatgpt",
    color: "#7c3aed",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-700",
    features: [
      "GPT-4o access",
      "DALL·E image generation",
      "Web browsing capability",
      "Code interpreter",
      "Custom GPTs",
      "File upload & analysis",
      "Voice conversations",
      "Faster response times",
    ],
    plans: [
      { name: "1 Week", duration: "7 days", price: 450, originalPrice: 800 },
      { name: "1 Month", duration: "30 days", price: 1500, originalPrice: 3000, popular: true },
      { name: "3 Months", duration: "90 days", price: 3800, originalPrice: 9000 },
    ],
    category: "AI Assistant",
  },
  {
    id: "3",
    slug: "gemini-pro",
    name: "Gemini Advanced",
    shortName: "Gemini Pro",
    tagline: "Google's most capable AI model",
    description:
      "Access Gemini Ultra, 1M token context, and Google ecosystem integration with Gemini Advanced.",
    longDescription:
      "Google Gemini Advanced puts the power of Gemini Ultra at your fingertips. With 1 million token context window, deep Google Workspace integration, and multimodal capabilities, it's the ultimate productivity tool.",
    icon: "✨",
    image: "gemini",
    color: "#4285f4",
    gradient: "from-blue-500 via-indigo-600 to-blue-700",
    features: [
      "Gemini Ultra model",
      "1M token context window",
      "Google Workspace integration",
      "Multimodal input",
      "NotebookLM Plus",
      "2TB Google storage",
      "Priority access",
      "Advanced coding help",
    ],
    plans: [
      { name: "1 Week", duration: "7 days", price: 500, originalPrice: 900 },
      { name: "1 Month", duration: "30 days", price: 1600, originalPrice: 3200, popular: true },
      { name: "3 Months", duration: "90 days", price: 4200, originalPrice: 9600 },
    ],
    category: "AI Assistant",
    badge: "Best Value",
  },
  {
    id: "4",
    slug: "canva-pro",
    name: "Canva Pro",
    shortName: "Canva Pro",
    tagline: "Design anything, publish anywhere",
    description:
      "Unlock premium templates, Brand Kit, Magic Studio AI tools, and 100+ million stock assets.",
    longDescription:
      "Canva Pro transforms you into a design powerhouse. Access over 100 million premium stock photos, videos, and elements. Use Magic Studio AI to generate images, remove backgrounds instantly, and resize designs for any platform in one click.",
    icon: "🎨",
    image: "canva",
    color: "#00c4cc",
    gradient: "from-cyan-400 via-cyan-500 to-teal-600",
    features: [
      "100M+ premium assets",
      "Magic Studio AI tools",
      "Background remover",
      "Brand Kit",
      "Magic Resize",
      "Content Planner",
      "Premium templates",
      "1TB cloud storage",
    ],
    plans: [
      { name: "1 Month", duration: "30 days", price: 250, originalPrice: 500 },
      { name: "3 Months", duration: "90 days", price: 650, originalPrice: 1500, popular: true },
      { name: "1 Year", duration: "365 days", price: 2000, originalPrice: 6000 },
    ],
    category: "Design",
    badge: "Hot Deal",
  },
  {
    id: "5",
    slug: "gemini-plus",
    name: "Gemini Plus",
    shortName: "Gemini Plus",
    tagline: "Enhanced Gemini with extra perks",
    description:
      "Step up from free Gemini with faster responses, longer conversations, and Google One benefits.",
    longDescription:
      "Gemini Plus gives you a meaningful upgrade over the free Gemini experience. Enjoy faster response times, longer conversation context, priority access during busy periods, and bundled Google One storage.",
    icon: "💎",
    image: "gemini",
    color: "#34a853",
    gradient: "from-green-500 via-emerald-600 to-green-700",
    features: [
      "Enhanced Gemini model",
      "Longer conversations",
      "Faster responses",
      "Google One 100GB",
      "Priority access",
      "Image generation",
      "Google integration",
      "Multi-language support",
    ],
    plans: [
      { name: "1 Week", duration: "7 days", price: 300, originalPrice: 600 },
      { name: "1 Month", duration: "30 days", price: 900, originalPrice: 1800, popular: true },
      { name: "3 Months", duration: "90 days", price: 2400, originalPrice: 5400 },
    ],
    category: "AI Assistant",
  },
  {
    id: "6",
    slug: "google-veo",
    name: "Google Veo 3",
    shortName: "Veo",
    tagline: "Cinematic AI video generation",
    description:
      "Generate stunning, high-definition AI videos with Google's most advanced video generation model.",
    longDescription:
      "Google Veo 3 is the next generation of AI video creation, capable of producing cinematic-quality clips up to 1080p with realistic motion, accurate physics, and natural audio. Perfect for content creators, marketers, and filmmakers who want to bring their ideas to life without expensive production setups. Generate longer-form videos with stunning visual coherence and lifelike sound design.",
    icon: "🎬",
    image: "veo",
    color: "#ea4335",
    gradient: "from-red-500 via-orange-500 to-amber-500",
    features: [
      "1080p HD video generation",
      "Native audio generation",
      "Cinematic camera controls",
      "Realistic physics & motion",
      "Up to 8-second clips",
      "Image-to-video animation",
      "Style consistency",
      "Commercial usage rights",
    ],
    plans: [
      { name: "1 Week", duration: "7 days", price: 900, originalPrice: 1800 },
      { name: "1 Month", duration: "30 days", price: 2800, originalPrice: 5500, popular: true },
      { name: "3 Months", duration: "90 days", price: 7500, originalPrice: 16500 },
    ],
    category: "AI Video",
    badge: "New",
  },
];

export const featuredProductSlugs = [
  "chatgpt-pro",
  "canva-pro",
  "gemini-pro",
  "google-veo",
];

export const reviews: Review[] = [
  { id: 1, name: "Ahmed Khan", avatar: "AK", rating: 5, comment: "Got ChatGPT Pro at an insane price! Delivery was instant on WhatsApp. These guys are legit. Been using for 2 months now with zero issues.", product: "ChatGPT Pro", date: "2 days ago" },
  { id: 2, name: "Sara Ali", avatar: "SA", rating: 5, comment: "Canva Pro transformed my Instagram game! All premium features working perfectly. Best investment for my small business.", product: "Canva Pro", date: "1 week ago" },
  { id: 3, name: "Bilal Hussain", avatar: "BH", rating: 5, comment: "Gemini Advanced is a beast for coding. The 1M context window is game-changing. ZNK Tools made it affordable!", product: "Gemini Advanced", date: "3 days ago" },
  { id: 4, name: "Fatima Noor", avatar: "FN", rating: 5, comment: "Quick response, instant delivery, and genuine accounts. What more could you ask for? Already bought 3 different tools!", product: "ChatGPT Plus", date: "5 days ago" },
  { id: 5, name: "Usman Tariq", avatar: "UT", rating: 5, comment: "Google Veo blew my mind! The video quality is insane and the audio sync is perfect. Already created 20+ videos for my YouTube channel!", product: "Google Veo", date: "1 week ago" },
  { id: 6, name: "Zainab Sheikh", avatar: "ZS", rating: 5, comment: "I was skeptical at first but ZNK Tools proved me wrong. Premium quality, budget-friendly prices. 10/10!", product: "Gemini Plus", date: "4 days ago" },
];

export const faqs: FAQItem[] = [
  { question: "How does the delivery work?", answer: "After you message us on WhatsApp and complete the payment, we deliver your account credentials or access within 5-30 minutes. Most orders are fulfilled instantly!" },
  { question: "Are these shared or individual accounts?", answer: "We offer both options depending on the tool. Shared accounts are cheaper while individual accounts give you full private access. All details are mentioned in each product description." },
  { question: "What payment methods do you accept?", answer: "We accept JazzCash, EasyPaisa, bank transfer, and other local payment methods. All payment details are shared on WhatsApp after you place your order." },
  { question: "What if my account stops working?", answer: "We provide a replacement guarantee for the duration of your plan. If anything stops working, just message us on WhatsApp and we will fix it or replace it immediately." },
  { question: "Why are your prices so low?", answer: "We buy in bulk and use group/team plans which allows us to offer premium tools at a fraction of the retail price. You get the same features at much lower cost." },
  { question: "Can I upgrade my plan later?", answer: "Absolutely! You can upgrade anytime. Just message us on WhatsApp and we will adjust your plan. You only pay the difference." },
];

export const socialLinks: SocialLink[] = [
  {
    name: "WhatsApp",
    url: "https://wa.me/923143111118",
    svgPath: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z",
  },
  {
    name: "Instagram",
    url: "https://instagram.com/znktools",
    svgPath: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z",
  },
];

export const stats = [
  { value: "5,000+", label: "Happy Customers" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "< 30min", label: "Delivery Time" },
  { value: "24/7", label: "WhatsApp Support" },
];