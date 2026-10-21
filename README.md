# Kopou Developers — Luxury Residential Real Estate Website

A high-conversion real estate web platform created by **WebbyBuilder** for **Kopou Developers**, showcasing their residential apartment project, **Kopou Apartments**, located in Harigaon, Tezpur, Assam.

---

## 🏗️ Brand & Project Summary

- **Promoter:** Kopou Developers
- **Partners:** Sushil Kumar Golchha & Mohit Golchha
- **Project:** Kopou Apartments
- **Location:** Harigaon, Paruwa, University Road, Near Home Guard Training Centre, Opp. Maternity Hospital, Tezpur, Sonitpur, Assam – 784501
- **Configurations:** 2 BHK & 3 BHK Residential Units
- **Promotional Starting Price:** ₹31 Lakhs* (2 BHK indicative)
- **Assam RERA Registration:** `RERAA ST 139 OF 2025-2026`
- **TDA Sanction Reference:** `TDA/BP/Hari Gaon/356/2025`
- **Commencement Date:** 01 September 2025

---

## ⚡ Tech Stack & Architecture

- **Framework:** Next.js (App Router, React 19)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + Custom Architectural Luxury Design System
- **Components:** shadcn project structure (`/components/ui/`), Lucide Icons, Motion (Framer Motion)
- **Maps:** Leaflet & OpenStreetMap (interactive, zero-cost API dependencies)
- **Forms:** React Hook Form + Zod schema validation
- **Routing & WhatsApp Integration:** Contextual prefilled inquiry messages for 2 BHK, 3 BHK, Pricing, and Site Visits.

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install --legacy-peer-deps
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## ⚙️ Configuration & Customization Guide

All client parameters are centralized in a single source of truth:
📂 `lib/site-config.ts`

### 4. Configure Official WhatsApp Number
Open `lib/site-config.ts` and update `company.whatsapp`:
```typescript
company: {
  // Replace with confirmed 10-digit Indian WhatsApp number (+91)
  whatsapp: "+919435082840",
}
```

### 5. Change Phone Numbers & Email
In `lib/site-config.ts`:
```typescript
phones: {
  primary: "+919435082840",
  secondary: "+919706115288",
  advertising: "+919706222240",
},
email: "kopoudevelop@gmail.com",
```

### 6. Replace the Logo
- Place your clean PNG/SVG logo into `public/images/kopou-logo.jpeg` (or any file).
- Update the path in `lib/site-config.ts` under `images.logo`.

### 7. Replace Project Photographs
Drop actual photographs into `public/images/`:
- `hero-apartment.jpg` — Hero section
- `project-overview.jpg` — Architectural overview
- `interior-living.jpg` — 2 BHK interior
- `bedroom-3bhk.jpg` — 3 BHK master suite
- `amenity-pool.jpg` — Amenities showcase
- `commencement-certificate.jpeg` — Official TDA sanction document

### 8. Add Actual Floor Plans
1. Place PDF or image floor plans in `public/documents/` or `public/images/`.
2. Link them directly inside `components/ApartmentConfigurations.tsx` or `components/PricingSection.tsx`.

### 9. Confirm Amenities
Open `components/Amenities.tsx`. Replace "Awaiting confirmation" tags with "Included" as verified by the client.

### 10. Configure Map Coordinates
In `lib/site-config.ts`:
```typescript
coordinates: {
  lat: 26.6348,
  lng: 92.8007,
  note: "Update to exact GPS entrance coordinates when provided by developer",
}
```

### 11. Optional Google Maps API
The project currently uses **Leaflet + OpenStreetMap** (zero API keys needed). If you prefer Google Maps Embed, insert your API key in an `.env.local` file:
```env
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_key_here
```

### 12. Change Production Domain
Update `meta.siteUrl` in `lib/site-config.ts`:
```typescript
meta: {
  siteUrl: "https://yourdomain.com",
}
```

### 13. Backend Integration
The default configuration provides client-side validation and routes inquiries directly to WhatsApp and email. To forward leads to a database or CRM (e.g. Supabase, Firebase, or Zoho CRM), implement an API route at `app/api/enquiry/route.ts`.

### 14. Analytics Configuration
To enable Google Analytics (GA4) or Meta Pixel, add your measurement ID to `.env.local`:
```env
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

### 15. Deployment
- **Vercel:** Push to GitHub and import repository in Vercel. Works out-of-the-box.
- **Node.js Server:** Run `npm run build && npm run start`.

---

## 🎨 Interactive Component: EclipseButton
Integrated at `/components/ui/eclipse-button.tsx` with interactive magnetic cursor follow and dual-layer spotlight eclipse effect. Tested variants available at `/components/ui/demo.tsx`.

---

## 📄 License & Credits
- Built by **WebbyBuilder** for **Kopou Developers**.
- © 2026 Kopou Developers. All rights reserved.
