"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

const categories = ["All", "Exterior", "Interior", "Living Spaces", "Amenities"];

const galleryItems = [
  {
    src: "/images/hero-apartment.jpg",
    alt: "Kopou Apartments – Exterior view at golden hour",
    category: "Exterior",
    caption: "Building Exterior · Illustrative",
  },
  {
    src: "/images/project-overview.jpg",
    alt: "Kopou Apartments – Aerial perspective",
    category: "Exterior",
    caption: "Aerial View · Illustrative",
  },
  {
    src: "/images/interior-living.jpg",
    alt: "2 BHK Living room interior – Kopou Apartments",
    category: "Living Spaces",
    caption: "Living Room · Illustrative",
  },
  {
    src: "/images/bedroom-3bhk.jpg",
    alt: "3 BHK Master bedroom – Kopou Apartments",
    category: "Interior",
    caption: "Master Bedroom · Illustrative",
  },
  {
    src: "/images/amenity-pool.jpg",
    alt: "Swimming pool amenity area – illustrative",
    category: "Amenities",
    caption: "Pool Area · Awaiting confirmation",
  },
  {
    src: "/images/interior-living.jpg",
    alt: "2 BHK interior layout – Kopou Apartments",
    category: "Living Spaces",
    caption: "Dining Area · Illustrative",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((g) => g.category === activeCategory);

  const openLightbox = (idx: number) => setLightboxIndex(idx);
  const closeLightbox = () => setLightboxIndex(null);
  const prevImage = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const nextImage = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  // Keyboard support
  const handleKey = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") closeLightbox();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "ArrowRight") nextImage();
  };

  return (
    <section id="gallery" className="section bg-white" onKeyDown={handleKey}>
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">The Gallery</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
            A Closer <span className="text-[#C8A45D]">Look.</span>
          </h2>
          <p className="text-[#6B6B6B] mt-3 text-sm italic">
            Temporary photography used for illustration. Actual project photography will be added upon confirmation.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 text-xs font-semibold uppercase tracking-widest border transition-all ${
                activeCategory === cat
                  ? "bg-[#171717] text-white border-[#171717]"
                  : "bg-white text-[#6B6B6B] border-[#E5E1DA] hover:border-[#C8A45D] hover:text-[#C8A45D]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((item, idx) => (
            <button
              key={item.src + idx}
              onClick={() => openLightbox(idx)}
              className="group relative aspect-[4/3] overflow-hidden bg-[#F4F1EA] text-left"
              aria-label={`View: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#171717]/0 group-hover:bg-[#171717]/40 transition-all duration-300 flex items-center justify-center">
                <ZoomIn size={32} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#171717]/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs">{item.caption}</p>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox */}
        {lightboxIndex !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-label="Image lightbox"
            onClick={closeLightbox}
            tabIndex={0}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2"
              aria-label="Close lightbox"
            >
              <X size={28} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
              aria-label="Previous image"
            >
              <ChevronLeft size={36} />
            </button>
            <div
              className="relative max-w-4xl max-h-[85vh] w-full mx-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={filtered[lightboxIndex].src}
                  alt={filtered[lightboxIndex].alt}
                  fill
                  className="object-contain"
                  sizes="90vw"
                />
              </div>
              <p className="text-white/60 text-xs text-center mt-3">
                {filtered[lightboxIndex].caption} &nbsp;·&nbsp; {lightboxIndex + 1} / {filtered.length}
              </p>
            </div>
            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 p-2"
              aria-label="Next image"
            >
              <ChevronRight size={36} />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
