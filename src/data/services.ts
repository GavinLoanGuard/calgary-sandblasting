export type ServiceFaq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  metaTitle: string;
  metaDescription: string;
  heroDescription: string;
  keyPoints: string[];
  process: string[];
  goodFor: string[];
  pricing: {
    label: string;
    range: string;
    note: string;
  };
  faqs: ServiceFaq[];
  comingSoon?: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "trailer-equipment-blasting",
    name: "Trailer & Equipment Sandblasting",
    shortName: "Trailer & Equipment Blasting",
    metaTitle: "Trailer Sandblasting Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting strips rust, old paint, and corrosion from trailers and heavy equipment on-site with a 185 CFM mobile rig. Serving Calgary and area contractors.",
    heroDescription:
      "Calgary Sandblasting brings the compressor and blast rig to your yard to strip trailers, attachments, and heavy equipment down to bare metal — no towing, no downtime hauling gear across the city.",
    keyPoints: [
      "Utility, cargo, livestock, and equipment trailers stripped to bare metal or prepped for re-coat",
      "Buckets, blades, forks, and attachments cleaned between rentals or before resale",
      "On-site at your yard — no trailering equipment to a shop and back",
      "Media matched to the substrate so we don't warp thin panels or damage seals",
    ],
    process: [
      "We walk the trailer or equipment with you and confirm scope — full strip, spot rust removal, or paint prep",
      "Work area is contained and surrounding equipment protected before blasting starts",
      "185 CFM compressor and blast rig strip rust, old coatings, and corrosion to the bare substrate",
      "Surface is blown down and inspected with you before we pack up",
    ],
    goodFor: [
      "Fencing and landscaping contractors prepping trailers for the season",
      "Equipment rental yards turning over inventory between rentals",
      "Fabrication shops needing bare-metal prep before welding or coating",
    ],
    pricing: {
      label: "Trailer & equipment blasting",
      range: "$800 – $3,000 per unit",
      note: "Typical range for a single axle utility trailer up to a tandem equipment trailer or small attachment. Larger fleets get a per-unit rate.",
    },
    faqs: [
      {
        question: "Can Calgary Sandblasting come to my yard to blast a trailer?",
        answer:
          "Yes. Calgary Sandblasting is a fully mobile operation — we bring a 185 CFM compressor and full blast rig to your yard or job site, so the trailer or equipment never has to leave your property.",
      },
      {
        question: "How long does it take to sandblast a trailer?",
        answer:
          "A single axle utility trailer typically takes 2-4 hours from setup to teardown. A larger tandem equipment trailer or heavily rusted unit can take a full day. We confirm timing on the walkthrough before we start.",
      },
      {
        question: "Will sandblasting damage my trailer's tires, wiring, or seals?",
        answer:
          "No — we mask and protect tires, lights, wiring, bearings, and seals before blasting starts, and we choose media and pressure appropriate to the panel thickness so we don't warp or blow through thin steel.",
      },
    ],
  },
  {
    slug: "fleet-commercial-blasting",
    name: "Fleet & Commercial Sandblasting",
    shortName: "Fleet & Commercial Blasting",
    metaTitle: "Commercial Fleet Sandblasting Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting handles multi-unit fleet and commercial equipment blasting on-site for Calgary contractors, fabrication shops, and rental yards.",
    heroDescription:
      "For contractors, fabrication shops, and rental yards running multiple units, Calgary Sandblasting schedules fleet-scale blasting on-site so your equipment stays in rotation instead of sitting in a shop queue.",
    keyPoints: [
      "Multi-unit scheduling — we block out the time your fleet needs, in one visit",
      "Fencing contractor rigs, landscaping trailers, and rental fleet units",
      "Consistent prep across every unit so coating or paint goes on evenly",
      "Volume pricing for fleets, with a single point of contact for scheduling",
    ],
    process: [
      "Fleet walkthrough to scope unit count, condition, and priority order",
      "We schedule a block of time on-site so units are blasted in sequence with minimal disruption",
      "Each unit is blasted to the agreed spec — full strip, rust removal, or coating prep",
      "Sign-off per unit before we move to the next one",
    ],
    goodFor: [
      "Fencing contractors with multiple trailers going into the same season",
      "Equipment rental yards prepping fleet units for repaint or resale",
      "Fabrication and welding shops with recurring bare-metal prep needs",
    ],
    pricing: {
      label: "Fleet & commercial blasting",
      range: "Volume pricing — request a fleet quote",
      note: "Priced per unit with a volume discount once you're past 3-4 units in a single visit. Send us a unit count and condition and we'll put together a fleet rate.",
    },
    faqs: [
      {
        question: "Does Calgary Sandblasting handle multi-unit fleet jobs?",
        answer:
          "Yes. Calgary Sandblasting schedules fleet and commercial blasting on-site in a single visit, blasting each unit in sequence so your fleet stays in rotation instead of sitting in a shop.",
      },
      {
        question: "Do you offer volume pricing for fleets?",
        answer:
          "Yes — fleet and commercial jobs are priced per unit with a volume discount once a visit covers multiple units. Contact Calgary Sandblasting with your unit count and condition for a fleet quote.",
      },
    ],
  },
  {
    slug: "rust-paint-removal",
    name: "Rust & Paint Removal",
    shortName: "Rust & Paint Removal",
    metaTitle: "Rust & Paint Removal Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting strips rust and failing paint from metal surfaces on-site — the fastest way to get bare metal ready for primer or re-coat.",
    heroDescription:
      "Sandblasting is the fastest way to take a rusted or peeling surface back to bare metal. Calgary Sandblasting strips rust and old paint on-site so your surface is ready for primer the same day.",
    keyPoints: [
      "Strips surface rust, scale, and failing paint down to bare metal",
      "Prepares metal for primer or re-coat without chemical stripping",
      "Works on trailers, gates, railings, tanks, machinery, and structural steel",
      "Faster and more thorough than wire wheel or grinder work",
    ],
    process: [
      "Assess the surface and confirm whether it needs a full strip or spot rust removal",
      "Contain the work area and protect anything nearby that shouldn't get media on it",
      "Blast to bare metal, checking coverage as we go",
      "Blow down and inspect the surface with you — ready for primer",
    ],
    goodFor: [
      "Metal gates, railings, and structural steel with surface rust",
      "Equipment and machinery with failing paint before re-coat",
      "Any bare-metal prep job where grinding or wire wheeling is too slow",
    ],
    pricing: {
      label: "Rust & paint removal",
      range: "$150 – $250 per hour, or flat rate by scope",
      note: "Small jobs are typically quoted hourly; larger surfaces get a flat rate once we've seen the scope.",
    },
    faqs: [
      {
        question: "How much does sandblasting cost in Calgary?",
        answer:
          "Calgary Sandblasting prices most rust and paint removal jobs between $150 and $250 per hour, or as a flat rate once the scope is confirmed. Trailer and equipment jobs typically run $800-$3,000 per unit. Every quote is a typical range, not a fixed number, until we've seen the job.",
      },
      {
        question: "Is sandblasting better than a wire wheel or grinder for rust removal?",
        answer:
          "For anything beyond a small spot, yes — sandblasting removes rust and paint faster, more evenly, and without leaving grinder marks or missed low spots, and it gets into corners and profiles a wheel can't reach.",
      },
      {
        question: "What surfaces can be sandblasted?",
        answer:
          "Calgary Sandblasting works on steel, aluminum, iron, and most painted or rusted metal surfaces — trailers, gates, railings, tanks, machinery, and structural steel. We adjust media and pressure to the substrate so we don't damage softer materials.",
      },
    ],
  },
  {
    slug: "fence-deck-restoration",
    name: "Fence & Deck Restoration",
    shortName: "Fence & Deck Restoration",
    metaTitle: "Fence & Deck Sandblasting Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting strips old paint, stain, and weathering from wood and metal fences and decks — restoring the surface before re-staining or re-coating.",
    heroDescription:
      "Sandblasting strips old stain, paint, and weathering off fences and decks faster than sanding, and gets metal fence posts and railings back to bare metal for a fresh coat.",
    keyPoints: [
      "Strips failing stain and paint from wood decks and fences",
      "Removes rust from metal fence posts, gates, and railings",
      "Prepares the surface for re-staining or re-coating",
      "Gentler media options available for softer wood surfaces",
    ],
    process: [
      "Walk the fence line or deck and confirm surface type and condition",
      "Protect landscaping, siding, and anything adjacent to the work area",
      "Blast to strip old finish and expose a clean surface",
      "Review the finished surface with you before we leave",
    ],
    goodFor: [
      "Residential decks with failing stain or paint",
      "Wood and metal fences before re-staining or repainting",
      "Metal gates and posts with surface rust",
    ],
    pricing: {
      label: "Fence & deck restoration",
      range: "$3.00 – $7.00 per sq. ft.",
      note: "Typical range depending on surface condition, media, and whether it's wood, metal, or a mix. We confirm square footage on the quote.",
    },
    faqs: [
      {
        question: "Can sandblasting strip old stain off a wood deck without damaging it?",
        answer:
          "Yes — we use gentler media and lower pressure on wood surfaces so we strip failing stain and paint without gouging the wood, leaving it ready for a fresh coat.",
      },
      {
        question: "Do I need to be present for a sandblasting job?",
        answer:
          "No, you don't need to be on-site the whole time — Calgary Sandblasting just needs access to the work area and a quick walkthrough before we start and after we finish so you can confirm the results.",
      },
    ],
  },
  {
    slug: "oilfield-industrial",
    name: "Oilfield & Industrial Sandblasting",
    shortName: "Oilfield & Industrial",
    metaTitle: "Oilfield & Industrial Sandblasting Calgary | Calgary Sandblasting",
    metaDescription:
      "Calgary Sandblasting is expanding into oilfield and industrial sandblasting. Contact us to discuss upcoming certifications and industrial project capacity.",
    heroDescription:
      "Calgary Sandblasting is building out capacity for oilfield and industrial-scale blasting work. This service line is coming soon as we complete certifications and grow our portfolio.",
    keyPoints: [
      "Currently in development — certifications and portfolio in progress",
      "Reach out to discuss upcoming capacity for industrial-scale projects",
      "Our commercial and fleet blasting work today reflects the crew and equipment standard we're building on",
    ],
    process: [],
    goodFor: [],
    pricing: {
      label: "Oilfield & industrial",
      range: "Coming soon",
      note: "Contact Calgary Sandblasting to discuss timeline and project scope — we'll follow up as this service line comes online.",
    },
    faqs: [
      {
        question: "Does Calgary Sandblasting do oilfield or industrial-scale blasting?",
        answer:
          "This service line is coming soon. Calgary Sandblasting is currently focused on commercial, fleet, and trailer/equipment blasting while we complete the certifications and portfolio needed for oilfield and industrial-scale work. Contact us to discuss your timeline.",
      },
    ],
    comingSoon: true,
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
