// ============================================================
// KOPOU DEVELOPERS — CENTRALIZED SITE CONFIGURATION
// All client details are managed here. Do not duplicate elsewhere.
// ============================================================

export const SITE_CONFIG = {
  company: {
    name: "Kopou Developers",
    tagline: "Building dreams with quality and trust",
    email: "kopoudevelop@gmail.com",
    phones: {
      primary: "+919435082840",
      secondary: "+919706115288",
      advertising: "+919706222240", // shown in promotional ad
    },
    // ⚠️ CONFIRM with client: which number is WhatsApp-enabled?
    whatsapp: "+919435082840", // PLACEHOLDER — verify with developer
    instagram: "https://www.instagram.com/kopou_developers/",
    partners: ["Sushil Kumar Golchha", "Mohit Golchha"],
  },

  project: {
    name: "Kopou Apartments",
    tagline: "2 & 3 BHK Homes in Harigaon, Tezpur",
    location: {
      address: "Harigaon, Paruwa, University Road",
      landmark: "Near Home Guard Training Centre, Opposite Maternity Hospital",
      city: "Tezpur",
      district: "Sonitpur",
      state: "Assam",
      country: "India",
      // ⚠️ TWO PIN CODES in documents — verify before launch:
      // Site address footer shows 784501
      // Developer address shows 784001
      pincode: "784501", // from site address footer — verify with client
      full: "Harigaon, Paruwa, University Road, Near Home Guard Training Centre, Opposite Maternity Hospital, Tezpur, Sonitpur, Assam – 784501",
    },
    // ⚠️ Approximate — verify precise coordinates before launch
    coordinates: {
      lat: 26.6348,
      lng: 92.8007,
      note: "Approximate — client must confirm exact building coordinates",
    },
    startingPrice: "₹31 Lakhs*",
    startingPriceNote: "Indicative starting price for 2 BHK. Subject to confirmation by developer.",
    configurations: ["2 BHK", "3 BHK"],
    commencement: "1 September 2025",
    expectedCompletion: "31 December 2029", // from RERA record validity — verify as completion date
  },

  rera: {
    registrationNumber: "RERAA ST 139 OF 2025-2026",
    projectName: "Kopou Apartments",
    promoter: "Kopou Developers",
    district: "Sonitpur",
    state: "Assam",
    location: "Tezpur",
    approvingAuthority: "Navin Agarwal",
    status: "NEW",
    applicantType: "Firm / Proprietorship Firm",
    submissionDate: "18 September 2025",
    registrationValidity: "31 December 2029",
    buildingPermit: "TDA/BP/Hari Gaon/356/2025",
    permitAuthority: "Tezpur Development Authority",
    planningPermitDate: "20 June 2025",
    nocIssueDate: "20 June 2025",
    nocValidity: "20 June 2027",
    landArea: {
      sqm: "4,295.91",
      traditional: "3 Bigha, 1 Katha, 1 Lecha",
    },
    far: {
      permissible: "250",
      proposed: "230.37",
    },
    officialPortal: "https://rera.assam.gov.in/",
    // ⚠️ Direct project URL — verify before publishing
    projectUrl: "https://rera.assam.gov.in/", // update with exact project record URL
  },

  meta: {
    title: "Kopou Apartments, Tezpur | Kopou Developers",
    description:
      "Explore 2 & 3 BHK residential apartment options at Kopou Apartments, Harigaon, Tezpur, Assam. Contact Kopou Developers for pricing, floor plans, and site visit information.",
    keywords: [
      "Kopou Developers",
      "Kopou Apartments",
      "flats in Tezpur",
      "2 BHK flats in Tezpur",
      "3 BHK flats in Tezpur",
      "residential apartments in Tezpur",
      "property in Harigaon",
      "apartments on University Road Tezpur",
      "Sonitpur Assam property",
    ],
    siteUrl: "https://kopoudevelopers.com", // update with actual domain
    ogImage: "/images/hero-apartment.jpg",
  },

  images: {
    logo: "/images/kopou-logo.jpeg",
    hero: "/images/hero-apartment.jpg",
    projectOverview: "/images/project-overview.jpg",
    interior: "/images/interior-living.jpg",
    bedroom: "/images/bedroom-3bhk.jpg",
    amenityPool: "/images/amenity-pool.jpg",
    certificate: "/images/commencement-certificate.jpeg",
  },
};

export type SiteConfig = typeof SITE_CONFIG;
