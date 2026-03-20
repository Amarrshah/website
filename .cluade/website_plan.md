# Simandhar Print N Pack — Website Plan

## Domain
**simandharprintnpack.in** (GoDaddy) → Hosted on GitHub Pages (Free)

---

## Site Structure

```
Home Page (index.html)
│
├── About Us
├── Products (with cards linking to individual catalog pages)
│   ├── Architecture & Real Estate Brochures
│   ├── Corporate & Product Brochures
│   ├── Packaging Design & Box Layouts
│   ├── Logo Design & Branding
│   ├── Visiting Cards & Marketing Materials
│   └── Printing Solutions (Offset & Digital)
│
├── Contact Us
└── WhatsApp Floating Button (on every page)
```

---

## Page Breakdown

### 1. Home Page (`index.html`)

| Section | Content |
|---------|---------|
| **Hero** | Bold tagline "Designing Impact. Printing Excellence." + background image of best work + CTA button "View Our Work" |
| **About Snippet** | 2-3 lines about 30+ years experience in Ahmedabad + "Read More" link |
| **Products Grid** | 6 cards with image, title, short description → each card links to its own catalog page |
| **Why Choose Us** | Key differentiators (experience, quality, timely delivery) |
| **Testimonials** | Real client quotes only |
| **Contact Strip** | Phone, Email, WhatsApp, Address |
| **Footer** | Copyright, social links, quick nav |

### 2. Product Catalog Pages (one per product)

Each product page follows the same template:

| Section | Content |
|---------|---------|
| **Header** | Product name + short intro |
| **Image Gallery** | Grid of past work samples for this product |
| **Description** | What this service includes, paper options, sizes, finishes |
| **Process** | How you work — Brief → Design → Review → Print → Deliver |
| **Pricing Guidance** | Starting from ₹XXX or "Request a Quote" |
| **CTA** | "Enquire on WhatsApp" + "Download Catalog PDF" (optional) |
| **Back to Home** | Navigation link |

#### Product Pages:

- `products/architecture-brochures.html`
- `products/corporate-brochures.html`
- `products/packaging-design.html`
- `products/logo-branding.html`
- `products/visiting-cards.html`
- `products/printing-solutions.html`

### 3. Contact Page (`contact.html`)

| Section | Content |
|---------|---------|
| **Contact Form** | Name, Phone, Email, Product Interest (dropdown), Message |
| **Direct Contact** | Phone, WhatsApp, Email |
| **Address + Map** | Google Maps embed of Ravi Arcade, Dudheshwar Road, Ahmedabad |
| **Business Hours** | Mon–Sat: 9:00 AM – 5:00 PM |

---

## File & Folder Structure (GitHub Repo)

```
simandharprintnpack/
│
├── index.html                  ← Home page
├── contact.html                ← Contact page
│
├── products/
│
│   ├── corporate-brochures.html
│   ├── packaging-design.html
│   ├── logo-branding.html
│   ├── visiting-cards.html
│   
│
├── css/
│   └── style.css               ← Global stylesheet
│
├── images/
│   ├── hero.jpg
│   ├── logo.png
│   ├── products/               ← Product thumbnails for home page cards
│   │   ├── brochure-thumb.jpg
│   │   ├── packaging-thumb.jpg
│   │   └── ...
│   └── gallery/                ← Full images for catalog pages
│       ├── architecture/
│       ├── packaging/
│       └── ...
│
├── js/
│   └── main.js                 ← Mobile menu, scroll effects, etc.
│
├── CNAME                       ← Contains: simandharprintnpack.in
└── README.md
```

---

## User Flow

```
Visitor lands on Home Page
        │
        ▼
Sees Product Cards Grid
        │
        ▼
Clicks on "Packaging Design"
        │
        ▼
Opens products/packaging-design.html
  → Sees gallery of past packaging work
  → Reads about paper types, box styles, finishes
  → Clicks "Enquire on WhatsApp"
        │
        ▼
WhatsApp opens with pre-filled message:
  "Hi, I'm interested in Packaging Design services. Please share more details."
```

---

## Design Notes

- **Color Palette**: Keep it professional — dark navy/charcoal + white + one accent color (gold or teal)
- **Typography**: Clean sans-serif (e.g., Inter, Poppins, or Outfit from Google Fonts)
- **Mobile First**: Most visitors in India browse on mobile — design for phone screens first
- **Image Optimization**: Compress all images (use WebP format) for fast loading on Indian networks
- **WhatsApp Button**: Floating on every page — this will be your #1 lead generator

---

## Tech Stack

| Layer | Choice | Why |
|-------|--------|-----|
| HTML/CSS/JS | Vanilla (no framework) | Simple, fast, no build step needed |
| Fonts | Google Fonts | Free, fast CDN |
| Icons | Lucide or Font Awesome | Clean, lightweight |
| Hosting | GitHub Pages | Free, reliable, auto-deploy |
| Domain | GoDaddy | Already owned |
| SSL | GitHub Pages auto-SSL | Free HTTPS |
| Analytics | Google Analytics 4 | Free, tracks visitors |
| Contact Form | Formspree or Web3Forms | Free tier, no backend needed |

---

## Next Steps

1. ✅ Plan website structure (this document)
2. ⬜ Create GitHub account & repository
3. ⬜ Build home page (index.html)
4. ⬜ Build product catalog page template
5. ⬜ Create all 6 product pages
6. ⬜ Build contact page
7. ⬜ Add real images and portfolio work
8. ⬜ Test on mobile devices
9. ⬜ Connect GoDaddy domain to GitHub Pages
10. ⬜ Go live!