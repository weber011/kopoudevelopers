import { SITE_CONFIG } from "./site-config";

const BASE_NUMBER = SITE_CONFIG.company.whatsapp.replace(/\D/g, "");

export const WA_MESSAGES = {
  general: encodeURIComponent(
    "Hello Kopou Developers, I visited your website and would like to know more about Kopou Apartments in Tezpur. Please share available apartment options, current prices, floor plans, and site visit details."
  ),
  twoBHK: encodeURIComponent(
    "Hello Kopou Developers, I am interested in a 2 BHK apartment at Kopou Apartments. Please share the current price, floor plan, availability, specifications, and applicable charges."
  ),
  threeBHK: encodeURIComponent(
    "Hello Kopou Developers, I am interested in a 3 BHK apartment at Kopou Apartments. Please share the current price, floor plan, availability, specifications, and applicable charges."
  ),
  siteVisit: encodeURIComponent(
    "Hello Kopou Developers, I would like to schedule a site visit to Kopou Apartments, Harigaon, Tezpur. Please share the available dates and timings."
  ),
  pricing: encodeURIComponent(
    "Hello Kopou Developers, please share the latest pricing details for Kopou Apartments, including 2 BHK and 3 BHK options."
  ),
  floorPlan: encodeURIComponent(
    "Hello Kopou Developers, I would like to receive the available floor plans for Kopou Apartments."
  ),
};

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${BASE_NUMBER}?text=${message}`;
}

export const WA_LINKS = {
  general: buildWhatsAppUrl(WA_MESSAGES.general),
  twoBHK: buildWhatsAppUrl(WA_MESSAGES.twoBHK),
  threeBHK: buildWhatsAppUrl(WA_MESSAGES.threeBHK),
  siteVisit: buildWhatsAppUrl(WA_MESSAGES.siteVisit),
  pricing: buildWhatsAppUrl(WA_MESSAGES.pricing),
  floorPlan: buildWhatsAppUrl(WA_MESSAGES.floorPlan),
};

export function buildFormEnquiryWhatsApp(data: {
  name: string;
  phone: string;
  config: string;
  enquiryType: string;
  message?: string;
}): string {
  const text = `Hello Kopou Developers,\n\nNew Enquiry from Website:\nName: ${data.name}\nPhone: ${data.phone}\nApartment: ${data.config}\nEnquiry Type: ${data.enquiryType}${data.message ? `\nMessage: ${data.message}` : ""}\n\nPlease get in touch at your earliest convenience.`;
  return buildWhatsAppUrl(encodeURIComponent(text));
}

export function buildSiteVisitWhatsApp(data: {
  name: string;
  phone: string;
  date: string;
  time: string;
  config: string;
  message?: string;
}): string {
  const text = `Hello Kopou Developers,\n\nSite Visit Request:\nName: ${data.name}\nPhone: ${data.phone}\nPreferred Date: ${data.date}\nPreferred Time: ${data.time}\nApartment Interest: ${data.config}${data.message ? `\nNote: ${data.message}` : ""}\n\nPlease confirm the visit. Thank you.`;
  return buildWhatsAppUrl(encodeURIComponent(text));
}
