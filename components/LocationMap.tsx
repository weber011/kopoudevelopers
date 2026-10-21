"use client";
import { useEffect, useRef } from "react";
import { MapPin, Navigation, ExternalLink } from "lucide-react";
import { SITE_CONFIG } from "@/lib/site-config";
import { EclipseButton } from "@/components/ui/eclipse-button";

const { coordinates, location } = SITE_CONFIG.project;

const GOOGLE_MAPS_DIRECTIONS = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
  "Harigaon, Paruwa, University Road, Near Home Guard Training Centre, Tezpur, Assam 784501"
)}`;

const GOOGLE_MAPS_VIEW = `https://www.google.com/maps?q=${coordinates.lat},${coordinates.lng}`;

export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    let map: any;

    const initMap = async () => {
      try {
        const L = (await import("leaflet")).default;
        // Fix default icon paths broken by webpack
        delete (L.Icon.Default.prototype as any)._getIconUrl;
        L.Icon.Default.mergeOptions({
          iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
          iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
          shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
        });

        if (!mapRef.current) return;
        // Prevent double-init
        if (mapRef.current.innerHTML !== "") return;

        map = L.map(mapRef.current, {
          center: [coordinates.lat, coordinates.lng],
          zoom: 15,
          scrollWheelZoom: false,
        });

        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution: '© <a href="https://openstreetmap.org">OpenStreetMap</a> contributors',
          maxZoom: 19,
        }).addTo(map);

        // Gold custom icon
        const goldIcon = L.divIcon({
          className: "",
          html: `<div style="
            width:36px;height:36px;background:#C8A45D;border-radius:50% 50% 50% 0;
            transform:rotate(-45deg);border:3px solid #171717;
            box-shadow:0 2px 8px rgba(0,0,0,0.3);
          "></div>`,
          iconSize: [36, 36],
          iconAnchor: [18, 36],
          popupAnchor: [0, -36],
        });

        const marker = L.marker([coordinates.lat, coordinates.lng], { icon: goldIcon }).addTo(map);

        marker.bindPopup(`
          <div style="font-family:sans-serif;min-width:200px;padding:4px">
            <div style="font-weight:700;font-size:14px;color:#171717;margin-bottom:4px">
              Kopou Apartments
            </div>
            <div style="font-size:12px;color:#6B6B6B;line-height:1.5;margin-bottom:8px">
              Harigaon, Paruwa, University Road<br/>
              Near Home Guard Training Centre<br/>
              Tezpur, Assam – 784501
            </div>
            <div style="font-size:10px;color:#A98747;margin-bottom:8px">
              ⚠ Marker is approximate. Confirm with developer.
            </div>
            <a href="${GOOGLE_MAPS_DIRECTIONS}" target="_blank"
              style="display:inline-block;background:#C8A45D;color:#171717;padding:6px 12px;font-size:11px;font-weight:700;text-decoration:none;border-radius:2px">
              Get Directions →
            </a>
          </div>
        `).openPopup();
      } catch (e) {
        console.error("Map init error:", e);
      }
    };

    // Load Leaflet CSS
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css";
      document.head.appendChild(link);
    }

    const timer = setTimeout(initMap, 300);
    return () => {
      clearTimeout(timer);
      if (map) map.remove();
    };
  }, []);

  return (
    <section id="location" className="section bg-[#F4F1EA]">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="section-label">Location</span>
          <h2 className="text-4xl lg:text-5xl font-serif font-semibold text-[#171717] mt-4">
            Well Connected to<br />
            <span className="text-[#C8A45D]">What Matters.</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">
          {/* Address card */}
          <div className="bg-white border border-[#E5E1DA] p-8">
            <div className="flex items-center gap-2 mb-6">
              <MapPin size={18} className="text-[#C8A45D]" />
              <span className="section-label">Project Address</span>
            </div>
            <address className="not-italic text-[#171717] font-semibold text-sm leading-loose mb-6">
              Kopou Apartments<br />
              Harigaon, Paruwa<br />
              University Road<br />
              Near Home Guard Training Centre<br />
              Opp. Maternity Hospital<br />
              Tezpur, Sonitpur, Assam – 784501
            </address>

            <div className="border-t border-[#E5E1DA] pt-6 mb-6">
              <p className="text-xs text-[#6B6B6B] mb-4">
                ⚠️ Map marker is approximate. Please confirm exact address with
                Kopou Developers before visiting.
              </p>
            </div>

            <div className="space-y-3">
              <EclipseButton
                variant="primary"
                text="Get Directions"
                leftIcon={<Navigation size={14} />}
                size="sm"
                className="w-full"
                onClick={() => window.open(GOOGLE_MAPS_DIRECTIONS, "_blank")}
              />
              <EclipseButton
                variant="outline"
                text="Open in Google Maps"
                leftIcon={<ExternalLink size={14} />}
                size="sm"
                className="w-full"
                onClick={() => window.open(GOOGLE_MAPS_VIEW, "_blank")}
              />
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div
              ref={mapRef}
              className="w-full h-[420px] bg-[#E9E3D8] border border-[#E5E1DA]"
              aria-label="Interactive map showing approximate location of Kopou Apartments, Tezpur"
              role="application"
            >
              <div className="flex items-center justify-center h-full text-[#6B6B6B] text-sm">
                Loading map…
              </div>
            </div>
            <p className="text-xs text-[#6B6B6B] mt-2 text-right">
              Map data © OpenStreetMap contributors · Marker is approximate
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
