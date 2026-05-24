# ToolsTemplate

> Premium AI Tools at Unbeatable Prices - A modern landing page built with Next.js 15, TypeScript, and Tailwind CSS v4.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=flat-square&logo=tailwindcss)
![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-ff0080?style=flat-square&logo=framer)

## Features

- Modern dark UI with animated gradients and glow effects
- Fully responsive mobile-first design
- Lightning fast - Next.js 15 App Router with Static Generation
- Smooth animations powered by Framer Motion
- Product catalog with search and category filters
- WhatsApp integration - direct chat and community group
- Smart image loading - AVIF with PNG fallback
- Complete legal pages - Privacy, Terms, Refund Policy
- SEO optimized with metadata per page

## Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Deployment:** Vercel-ready

## Products Included

- ChatGPT Pro
- ChatGPT Plus
- Google Gemini Advanced
- Google Gemini Plus
- Canva Pro
- Google Veo 3

## Getting Started

### Prerequisites

- Node.js 18.17 or higher
- npm

### Installation

Clone the repo:

    git clone https://github.com/Azeem-097/Tools-Template.git
    cd Tools-Template
    npm install
    npm run dev

Open http://localhost:3000 to view the site.

## Project Structure

    src/
    |-- app/                    # Next.js App Router pages
    |   |-- products/           # Product catalog and detail pages
    |   |-- privacy-policy/     # Legal pages
    |   |-- terms/
    |   |-- refund-policy/
    |   |-- layout.tsx
    |   |-- page.tsx            # Home page
    |   -- globals.css
    |-- components/
    |   |-- layout/             # Navbar, Footer, WhatsAppFloat
    |   |-- sections/           # Hero, FeaturedProducts, About, FAQ, Reviews, Contact
    |   |-- product/            # ProductGrid, ProductDetail, PricingTable, RelatedProducts
    |   -- ui/                 # ProductCard, Logo, AnimateOnScroll, GlowCard
    |-- lib/
    |   -- data.ts             # All products, reviews, FAQs
    -- types/
        -- index.ts            # TypeScript interfaces
    
    public/
    -- images/
        -- products/           # Product images (.avif and .png)

## Configuration

Edit src/lib/data.ts to customize WhatsApp number, contact details, and products.

## Adding Product Images

Place images in public/images/products/ folder:

- chatgpt.avif and chatgpt.png
- gemini.avif and gemini.png
- canva.avif and canva.png
- veo.avif and veo.png

The site uses AVIF for performance with PNG fallback for compatibility.

## Scripts

- npm run dev    - Start development server
- npm run build  - Build for production
- npm run start  - Start production server
- npm run lint   - Run ESLint

## Deployment

The easiest way to deploy is via Vercel:

1. Push to GitHub (already done)
2. Import project in Vercel
3. Click Deploy

## License

This project is private and proprietary.

## Author

Built by Azeem

---

**Live Demo:** Coming Soon